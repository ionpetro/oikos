// Oikos directly inherits Objection / Carpe / Skepsis game logic: dates, streaks, spaced review, question builders, Question of the Day,
// Quick recall, scenario practice, ranks and badges. No DOM access, so `npm test` can check everything.
// Content comes in as an array of unit objects (see CONTENT_SCHEMA.md); `indexCourse` makes it queryable.

const Engine = (() => {
  // ---------- constants ----------
  // No deadline or exam phase: progress follows the learner's own practice schedule.
  const EXAM_DATE = null, EXAM_TIME = null, EXAM_PRESETS = [];
  const CROSS_MS = 15000; // simple recall only; never a timed ethical scenario
  const HYPO_MS = null;
  const SITTING_WEIGHT = 12;
  const MINUTES_PER_Q = null; // retained API key; XP is not elapsed time
  const SUBJECTS = [
    { id: "choices", label: "Choices", short: "Choices" },
    { id: "margins", label: "Thinking at the margin", short: "Margins" },
    { id: "incentives", label: "Incentives", short: "Incentives" },
    { id: "markets", label: "Markets", short: "Markets" },
    { id: "incidence", label: "Who bears the cost?", short: "Incidence" },
    { id: "spillovers", label: "Spillovers", short: "Spillovers" },
    { id: "commons", label: "The commons", short: "Commons" },
    { id: "information", label: "Information", short: "Information" },
    { id: "power", label: "Economic power", short: "Power" },
    { id: "work", label: "Work and rewards", short: "Work" },
    { id: "distribution", label: "Distribution", short: "Distribution" },
    { id: "evidence", label: "Models and evidence", short: "Evidence" },
  ];
  const SUBJECT_IDS = SUBJECTS.map((s) => s.id);
  const OTHER_SUBJECTS = [];
  const subjectLabel = (id) => (SUBJECTS.find((s) => s.id === id) || { label: id || "Practice" }).label;
  const CATEGORY_MIX = {}; // all course topics have equal standing
  const DAILY_BY_WEEKDAY = {}; // compatibility only: use dailySubject(date), a 12-day cycle
  const DAILY_N = 5, DAILY_NO_REPEAT_DAYS = 14;
  function dailySubject(date) {
    const offset = daysBetween("2026-11-02", date);
    return SUBJECT_IDS[((offset % SUBJECT_IDS.length) + SUBJECT_IDS.length) % SUBJECT_IDS.length];
  }
  const TRAP_TYPES = {
    1: "Sound action, unsupported reason", 2: "Missing a condition", 3: "Assumed fact", 4: "Wrong standard for this situation",
    5: "Misstated principle", 6: "True but irrelevant", 7: "Overgeneralization", 8: "Emotion replacing evidence",
    9: "Incomplete comparison", 10: "Useful idea, wrong fit", 11: "Outdated or unchecked claim",
  };
  const SELF_TAGS = { misread: "Misread the question", unknown: "Need to revisit the concept", misapplied: "Applied the wrong idea", nuance: "Missed a condition", addedFact: "Assumed a fact", sympathy: "Let an emotional reaction decide" };
  const CALL_TYPES = ["action", "question", "claim", "comparison", "argument", "remedy", "accurate", "decision", "response", "evidence"];
  const SPLIT_LABELS = { rights: "Rights", consequences: "Consequences", fairness: "Fairness", care: "Care", virtue: "Character", commonGood: "Common good" };
  const STATUS_LABELS = { model: "Conditional model", evidence: "Research finding", practice: "Practice guidance", ethics: "Ethical lens", fictional: "Invented practice scenario" };

  // ---------- dates (local calendar days as "YYYY-MM-DD") ----------
  function dayKey(d = new Date()) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  }
  function parseDay(key) {
    const [y, m, d] = key.split("-").map(Number);
    return new Date(y, m - 1, d, 12); // noon avoids DST edge cases
  }
  function addDays(key, n) {
    const d = parseDay(key);
    d.setDate(d.getDate() + n);
    return dayKey(d);
  }
  function daysBetween(a, b) {
    return Math.round((parseDay(b) - parseDay(a)) / 86400000);
  }
  /** Monday of the week that holds `key`. */
  function weekKey(key) {
    const d = parseDay(key);
    const dow = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - dow);
    return dayKey(d);
  }
  function isWeekend(key) {
    const dow = parseDay(key).getDay();
    return dow === 0 || dow === 6;
  }
  function weekday(key) { return parseDay(key).getDay(); } // 0 = Sunday
  /** Weekdays strictly between a and b. */
  function missedWeekdays(a, b) {
    let n = 0;
    const between = Math.max(0, daysBetween(a, b) - 1);
    const weeks = Math.floor(between / 7);
    n = weeks * 5;
    for (let i = 0; i < between % 7; i++) if (!isWeekend(addDays(a, weeks * 7 + i + 1))) n++;
    return n;
  }
  const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  /** "Wednesday, July 28, 2027" */
  function fmtDay(key) {
    const d = parseDay(key);
    return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }

  // ---------- state ----------
  // XP measures completed practice, not time spent or moral character.
  const GOALS = [
    { xp: 10, id: "small", label: "A little daily", sub: "10 XP · one short sitting" },
    { xp: 20, id: "steady", label: "Find your rhythm", sub: "20 XP · a little more practice" },
    { xp: 40, id: "deep", label: "Go deeper", sub: "40 XP · make time to explore" },
  ];
  const MAX_FREEZES = 2;

  function freshState() {
    return {
      v: 2,
      onboarded: false,
      name: "",
      goal: 10,
      sound: false,
      theme: "system",
      labs: {},
      labNotes: {},
      examDate: EXAM_DATE,
      sits: "practice", // retained for compatibility with the course family
      focus: "", // "This week I'm on: [subject]" (subject id or "")
      xp: 0, // completed practice
      days: {}, // dayKey -> XP that day
      streak: 0,
      bestStreak: 0,
      lastDay: null,
      freezes: 1,
      freezeWeek: null,
      done: {}, // lessonId | roundupId -> { perfect, at }
      sittings: {}, // lessonId -> sittings completed so far
      items: {}, // itemId -> { box, due, right, wrong, traps: {type: n}, tag }
      crossExamBest: 0,
      practices: 0,
      dailies: {}, // dayKey -> { subject, score, total, ms, ids }
      dailyStreak: 0,
      mocks: [], // { at, size, score, total, subjects: {choices: [got, total], ...}, traps: {type: n}, ms }
      trapLog: [], // [{ d, t }] most recent 500 distractor types chosen (for «your top trap this week»)
      answered: 0,
      correct: 0,
      badges: {}, // badgeId -> dayKey
      updatedAt: 0,
    };
  }

  /** Whitelist saved/imported progress. Content and code never come from a backup. */
  function normalizeState(raw, ix) {
    const out = freshState();
    const object = (v) => v && typeof v === "object" && !Array.isArray(v);
    if (!object(raw)) return out;
    const count = (v, max = 1000000000) => Number.isFinite(v) && v >= 0 ? Math.min(max, Math.floor(v)) : 0;
    const score = (v, total) => Number.isFinite(v) && v >= 0 ? Math.min(total, v) : 0;
    const date = (v) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v) && dayKey(parseDay(v)) === v;
    const entries = (v) => object(v) ? Object.entries(v) : [];
    const nodes = new Set(pathNodes(ix).map((n) => n.id));
    const lessons = new Set(ix.lessons.map((l) => l.id));
    const labs = new Set(["metrics", "tax", "spillover", "commons", "public-good", "budget"]);
    for (const k of ["onboarded", "sound"]) if (typeof raw[k] === "boolean") out[k] = raw[k];
    if (typeof raw.name === "string") out.name = raw.name.slice(0, 30);
    if ([10, 20, 40].includes(raw.goal)) out.goal = raw.goal;
    if (["system", "light", "dark"].includes(raw.theme)) out.theme = raw.theme;
    if (SUBJECT_IDS.includes(raw.focus)) out.focus = raw.focus;
    for (const k of ["xp", "streak", "bestStreak", "crossExamBest", "practices", "dailyStreak", "answered", "correct"]) out[k] = count(raw[k]);
    out.correct = Math.min(out.correct, out.answered);
    out.bestStreak = Math.max(out.streak, out.bestStreak);
    if (Number.isFinite(raw.freezes) && raw.freezes >= 0) out.freezes = count(raw.freezes, MAX_FREEZES);
    for (const k of ["lastDay", "freezeWeek"]) if (date(raw[k])) out[k] = raw[k];
    for (const [d, xp] of entries(raw.days)) if (date(d) && Number.isFinite(xp) && xp >= 0) out.days[d] = count(xp);
    for (const [id, v] of entries(raw.done)) if (nodes.has(id) && object(v) && date(v.at)) out.done[id] = { at: v.at, perfect: v.perfect === true };
    for (const [id, v] of entries(raw.sittings)) if (lessons.has(id) && Number.isFinite(v) && v >= 0) out.sittings[id] = count(v, lessonSittings(ix, id).length);
    for (const [id, v] of entries(raw.items)) if (ix.items.has(id) && object(v) && date(v.due)) {
      const item = { box: Math.max(1, count(v.box, INTERVALS.length)), due: v.due, right: count(v.right), wrong: count(v.wrong) };
      const traps = {};
      for (const [t, n] of entries(v.traps)) if (Object.hasOwn(TRAP_TYPES, t) && Number.isFinite(n) && n >= 0) traps[t] = count(n);
      if (Object.keys(traps).length) item.traps = traps;
      if (Object.hasOwn(SELF_TAGS, v.tag)) item.tag = v.tag;
      out.items[id] = item;
    }
    for (const [d, v] of entries(raw.dailies)) if (date(d) && object(v) && SUBJECT_IDS.includes(v.subject)) {
      const total = count(v.total, 1000);
      out.dailies[d] = { subject: v.subject, score: score(v.score, total), total, ms: count(v.ms, 86400000), ids: Array.isArray(v.ids) ? [...new Set(v.ids.filter((id) => ix.items.has(id)))].slice(0, 1000) : [] };
    }
    if (Array.isArray(raw.mocks)) out.mocks = raw.mocks.filter((v) => object(v) && date(v.at)).slice(-100).map((v) => {
      const total = count(v.total, 1000), subjects = {}, traps = {};
      for (const [sub, pair] of entries(v.subjects)) if (SUBJECT_IDS.includes(sub) && Array.isArray(pair) && pair.length === 2) { const n = count(pair[1], 1000); subjects[sub] = [score(pair[0], n), n]; }
      for (const [t, n] of entries(v.traps)) if (Object.hasOwn(TRAP_TYPES, t)) traps[t] = count(n, 1000);
      return { at: v.at, size: count(v.size, 1000), score: score(v.score, total), total, subjects, traps, ms: count(v.ms, 86400000) };
    });
    if (Array.isArray(raw.trapLog)) out.trapLog = raw.trapLog.filter((v) => object(v) && date(v.d) && Object.hasOwn(TRAP_TYPES, v.t)).slice(-500).map((v) => ({ d: v.d, t: String(v.t) }));
    for (const [id, at] of entries(raw.badges)) if (BADGES.some((b) => b.id === id) && date(at)) out.badges[id] = at;
    for (const [id, v] of entries(raw.labs)) if (labs.has(id) && object(v) && date(v.at)) out.labs[id] = { at: v.at, endings: Array.isArray(v.endings) ? [...new Set(v.endings.filter((x) => typeof x === "string" && /^[\w-]{1,80}$/.test(x)))].slice(0, 20) : [] };
    for (const [id, v] of entries(raw.labNotes)) if (labs.has(id) && typeof v === "string") out.labNotes[id] = v.slice(0, 5000);
    out.updatedAt = count(raw.updatedAt, 30000000000000);
    return out;
  }

  /**
   * Record activity on `today` and update the streak («practice days»).
   * Weekends never break a streak. A missed weekday uses a freeze (freeze) if one is left.
   * One free freeze per week (capped at MAX_FREEZES), +1 every 7-day streak.
   */
  function touchStreak(s, today) {
    const out = { streakUp: false, usedFreeze: 0, reset: false };
    const wk = weekKey(today);
    if (s.freezeWeek !== wk) {
      s.freezeWeek = wk;
      if (s.freezes < 1) s.freezes = 1;
    }
    if (s.lastDay === today) return out;
    if (!s.lastDay || s.lastDay > today) {
      s.streak = 1;
    } else {
      const missed = missedWeekdays(s.lastDay, today);
      if (missed === 0) s.streak += 1;
      else if (missed <= s.freezes) { s.freezes -= missed; out.usedFreeze = missed; s.streak += 1; }
      else { s.streak = 1; out.reset = true; }
    }
    out.streakUp = true;
    s.lastDay = today;
    if (s.streak > s.bestStreak) s.bestStreak = s.streak;
    if (s.streak > 0 && s.streak % 7 === 0 && s.freezes < MAX_FREEZES) s.freezes += 1;
    return out;
  }
  function liveStreak(s, today) {
    if (!s.lastDay) return 0;
    if (s.lastDay === today) return s.streak;
    const missed = missedWeekdays(s.lastDay, today);
    const available = s.freezeWeek !== weekKey(today) ? Math.max(1, s.freezes) : s.freezes;
    return missed <= available ? s.streak : 0;
  }
  function addXp(s, today, n) {
    s.xp += n;
    s.days[today] = (s.days[today] || 0) + n;
  }
  function weekXp(s, today) {
    const start = weekKey(today);
    let t = 0;
    for (const [k, v] of Object.entries(s.days)) if (k >= start && k <= today) t += v;
    return t;
  }
  /** Legacy function name retained for the inherited UI; the value is XP. */
  function fmtMinutes(n) { return `${n} XP`; }

  // ---------- ranks ----------
  const RANKS = [
    { id: "newcomer", name: "Newcomer", xp: 0 }, { id: "curious", name: "Curious learner", xp: 120 },
    { id: "regular", name: "Regular visitor", xp: 300 }, { id: "practitioner", name: "Practitioner", xp: 600 },
    { id: "explorer", name: "Wide explorer", xp: 1000 }, { id: "returning", name: "Returning learner", xp: 1600 },
    { id: "seasoned", name: "Seasoned learner", xp: 2400 }, { id: "familiar", name: "Familiar face", xp: 3400 },
    { id: "lifelong", name: "Lifelong learner", xp: 4800 },
  ];
  /** Practice milestones, never professional credentials or moral ratings. */
  function rankOf(s) {
    let cur = RANKS[0];
    for (const r of RANKS) if (s.xp >= r.xp) cur = r;
    const next = RANKS[RANKS.indexOf(cur) + 1] || null;
    return { rank: cur, next, toNext: next ? next.xp - s.xp : 0 };
  }

  // ---------- compatibility with the family UI (no exam deadline) ----------
  function examDate() { return null; }
  function countdown() { return { days: null, date: null, label: "At your own pace", time: null, note: "", phase: { id: "foundations", label: "Keep exploring", sub: "Short practice, varied examples, spaced review" } }; }

  // ---------- spaced review (Leitner boxes) ----------
  const INTERVALS = [1, 3, 7, 14, 30, 60];
  function reviewCap() { return null; }
  function capDue(s, due) { return due; }
  function learn(s, id, today) {
    if (!s.items[id]) s.items[id] = { box: 1, due: capDue(s, addDays(today, INTERVALS[0]), today), right: 0, wrong: 0 };
  }
  /**
   * Grade one answer. A miss drops the item to box 1. `weight: 0.5` (self-graded swipe cards)
   * drops only one box on a miss and still promotes on a hit. `trap` records the distractor type chosen.
   */
  function grade(s, id, correct, today, { weight = 1, trap = null } = {}) {
    learn(s, id, today);
    const it = s.items[id];
    if (correct) {
      it.right += 1;
      if (it.due <= today) it.box = Math.min(it.box + 1, INTERVALS.length);
    } else {
      it.wrong += 1;
      it.box = weight < 1 ? Math.max(1, it.box - 1) : 1;
      if (trap) recordTrap(s, id, trap, today);
    }
    it.due = capDue(s, addDays(today, INTERVALS[it.box - 1]), today);
  }
  /** The distractor type the learner fell for, on the item and in the course-wide log. */
  function recordTrap(s, id, trap, today) {
    const t = String(trap);
    if (s.items[id]) { s.items[id].traps = s.items[id].traps || {}; s.items[id].traps[t] = (s.items[id].traps[t] || 0) + 1; }
    s.trapLog = (s.trapLog || []).concat({ d: today, t }).slice(-500);
  }
  /** The learner's own one-tap reason for a miss (reflection tags). */
  function selfTag(s, id, tag) { if (s.items[id] && SELF_TAGS[tag]) s.items[id].tag = tag; }
  /** Distractor types fallen for in the last `days` days, most frequent first: [[type, count], ...]. */
  function topTraps(s, today, days = 7) {
    const since = addDays(today, -days);
    const tally = {};
    for (const e of s.trapLog || []) if (e.d >= since) tally[e.t] = (tally[e.t] || 0) + 1;
    return Object.entries(tally).sort((a, b) => b[1] - a[1]);
  }
  /** Items due today; in unit roundup every learned item is due (pulled forward), oldest first. */
  function dueItems(s, today) {
    return Object.entries(s.items)
      .filter(([, v]) => v.due <= today)
      .sort((a, b) => (a[1].due < b[1].due ? -1 : a[1].due > b[1].due ? 1 : a[1].box - b[1].box))
      .map(([k]) => k);
  }
  /** «Mistakes» notebook: items missed at least twice, worst first. */
  function notebookItems(s) {
    return Object.entries(s.items).filter(([, v]) => v.wrong >= 2).sort((a, b) => b[1].wrong - a[1].wrong || a[1].box - b[1].box).map(([k]) => k);
  }

  // ---------- source labels ----------
  /** Cards carry a `src` written for the authors (it may name research notes such as «civpro.md §5»). The learner sees only the source description. */
  function cleanSrc(src) {
    const parts = String(src || "").split(/[;·]/).map((seg) => seg
      .replace(/\b[\w.-]+\.(?:md|jsonl?|txt)\b(?:\s*§[\w.,§ -]*)?/gi, " ")
      .replace(/\[(?:V|K|M|R|P|READ|SEC|MEMORY|U|\?|UNSURE)\]/g, " ")
      .replace(/§\s*(?=[A-Za-z])/g, " ")
      .replace(/\(\s*\)/g, " ")
      .replace(/\s+/g, " ").trim()
      .replace(/^[,\s]+|[,\s]+$/g, "")).filter(Boolean);
    return parts.join(" · ") || "Oikos";
  }

  // ---------- answer normalisation (English) ----------
  const ARTICLES = /\b(?:a|an|the)\b/g;
  const normCache = new Map();
  /** Lowercase, strip accents, punctuation and articles, collapse spaces. */
  function norm(str) {
    const key = String(str || "");
    let out = normCache.get(key);
    if (out === undefined) {
      out = key
        .normalize("NFD").replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .replace(/[’']/g, "")
        .replace(/[.,;:!?"“”«»()[\]{}\-–—/\\]/g, " ")
        .replace(ARTICLES, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (normCache.size > 50000) normCache.clear();
      normCache.set(key, out);
    }
    return out;
  }
  const WORD_NUMBERS = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, twentyone: 21, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100, thousand: 1000, million: 1000000 };
  /** Number words and formatting normalize, but sign, magnitude and units remain meaningful.
   * Unitless variants belong in the item's authored alt list. */
  function normNum(str) {
    let t = String(str ?? "").toLowerCase().replace(/−/g, "-")
      .replace(/([a-z])-(?=[a-z])/g, "$1 ")
      .replace(/\b\d{1,3}(?:,\d{3})+(?:\.\d+)?\b/g, (value) => value.replace(/,/g, ""))
      .replace(/\$/g, " usd ").replace(/€/g, " eur ").replace(/£/g, " gbp ")
      .replace(/\b(?:negative|minus)\s+(?=\d|[a-z])/g, "-")
      .replace(/([-+])\s*(usd|eur|gbp)\s+(?=\d|[a-z])/g, "$2 $1");
    const words = Object.keys(WORD_NUMBERS).concat("and").sort((a,b) => b.length-a.length).join("|");
    const pattern = new RegExp(`\\b(?:${words})(?:[ \t]+(?:${words}))*\\b`, "g");
    t = t.replace(pattern, (phrase) => {
      if (phrase === "and") return phrase;
      let total = 0, part = 0;
      for (const word of phrase.split(/\s+/)) {
        if (word === "and") continue;
        const value = WORD_NUMBERS[word];
        if (word === "hundred") part = Math.max(1,part)*100;
        else if (word === "thousand" || word === "million") { total += Math.max(1,part)*value; part=0; }
        else part += value;
      }
      return String(total+part);
    });
    t = t.replace(/[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?/g, (value) => Number.isFinite(Number(value)) ? ` ${Number(value)} ` : value);
    t = t.replace(/%|\bpercent(?:age)?\b/g, " percent ")
      .replace(/\b(?:dollars?|usd)\b/g, "usd")
      .replace(/\b(?:euros?|eur)\b/g, "eur")
      .replace(/\b(?:pounds?|gbp)\b/g, "gbp")
      .replace(/\b(days?|years?|months?|hours?|minutes?|weeks?|places?|points?)\b/g, (unit) => unit.replace(/s$/, ""))
      .replace(/[;:!?"“”'’()]/g," ").replace(/\s+/g," ").trim();
    const parts = t.split(" "), currency = parts.filter((x) => ["usd","eur","gbp"].includes(x));
    return parts.filter((x) => !["usd","eur","gbp"].includes(x)).concat(currency).join(" ");
  }
  /** Compatibility helper; authored Oikos items do not ask for source descriptions. */
  function citeKey(str) { return norm(str); }
  function sameAnswer(a, b) {
    if (/\d/.test(String(a)) || /\d/.test(String(b))) return normNum(a) !== "" && normNum(a) === normNum(b);
    return norm(a) === norm(b);
  }
  function accepts(answers, typed) { return (Array.isArray(answers) ? answers : [answers]).some((a) => sameAnswer(a, typed)); }
  function acceptsCite(answers, typed) { return (Array.isArray(answers) ? answers : [answers]).some((a) => citeKey(a) !== "" && citeKey(a) === citeKey(typed)); }
  /** Stem → display tokens (punctuation kept on the token). */
  function tokens(text) { return String(text).split(/\s+/).filter(Boolean); }
  const stripMarks = (w) => norm(w).replace(/\s/g, "");

  // ---------- course index ----------
  const KINDS = ["rule", "hypo", "argue", "steps", "pairs", "sort", "num", "term", "trap"];
  const WEIGHT = { hypo: 2, argue: 1.5, steps: 1.5, pairs: 2, sort: 2, num: 1, case: 1, term: 1, trap: 1 };
  const itemWeight = (it) => (it.kind === "rule" ? 1 + ((it.quiz || []).length) : WEIGHT[it.kind] || 1);
  const catGroup = (it) => String(it.cat || "").split(/[.\s]/)[0].toUpperCase();
  const drillable = (it) => !!it && Object.hasOwn(STATUS_LABELS, it.status);

  function sortUnits(units) {
    const n = (u) => (u.id === "u0_example" ? 0 : parseInt(String(u.id).replace(/^u/, ""), 10) || 999);
    return units.slice().sort((a, b) => n(a) - n(b));
  }

  function indexCourse(units) {
    const course = { units: sortUnits(units) };
    const items = new Map();
    const lessons = [];
    const byKind = {};
    const bySubject = {};
    for (const u of course.units) {
      for (const l of u.lessons) {
        lessons.push({ ...l, unitId: u.id });
        for (const it of l.items) {
          const full = { ...it, lessonId: l.id, unitId: u.id, subject: it.subject || u.subject || "choices" };
          items.set(it.id, full);
          (byKind[it.kind] = byKind[it.kind] || []).push(full);
          (bySubject[full.subject] = bySubject[full.subject] || []).push(full);
        }
      }
    }
    for (const k of KINDS) byKind[k] = byKind[k] || [];
    byKind.case = []; // legacy renderer compatibility; Oikos has no legal case cards
    const unitOf = (id) => course.units.find((u) => u.id === id);
    const rules = new Map(byKind.rule.map((r) => [r.id, r]));
    /** hypos that apply a rule card */
    const siblings = (ruleId) => byKind.hypo.filter((h) => h.rule === ruleId);
    /** scenario items (hypo + argue) of a subject the daily drill and mocks can draw from */
    const examItems = (subject) => (bySubject[subject] || []).filter((x) => (x.kind === "hypo" || x.kind === "argue") && drillable(x));
    const subjectsPresent = SUBJECT_IDS.filter((id) => course.units.some((u) => u.subject === id));
    return { course, items, lessons, byKind, bySubject, unitOf, rules, siblings, examItems, subjectsPresent };
  }

  /** Items of a lesson split into sittings of roughly SITTING_WEIGHT graded steps. */
  function lessonSittings(ix, lessonId) {
    const l = ix.lessons.find((x) => x.id === lessonId);
    if (!l) return [];
    const out = [[]];
    let w = 0;
    for (const it of l.items) {
      const iw = itemWeight(it);
      if (w + iw > SITTING_WEIGHT && out[out.length - 1].length) { out.push([]); w = 0; }
      out[out.length - 1].push(it.id);
      w += iw;
    }
    if (out.length > 1 && w < SITTING_WEIGHT / 2) out[out.length - 2].push(...out.pop());
    return out;
  }

  // ---------- path: first lesson of every unit open, sequential inside, unit roundup last ----------
  function pathNodes(ix) {
    const nodes = [];
    for (const u of ix.course.units) {
      u.lessons.forEach((l, i) => nodes.push({ id: l.id, unitId: u.id, title: l.title, letter: String(i + 1), kind: "lesson", index: i }));
      nodes.push({ id: `${u.id}-review`, unitId: u.id, title: "Put it together", letter: "★", kind: "roundup", index: u.lessons.length });
    }
    return nodes;
  }
  function isUnlocked(ix, s, nodeId) {
    if (s.done[nodeId]) return true;
    const nodes = pathNodes(ix);
    const n = nodes.find((x) => x.id === nodeId);
    if (!n) return false;
    const unitNodes = nodes.filter((x) => x.unitId === n.unitId);
    if (n.kind === "roundup") return unitNodes.filter((x) => x.kind === "lesson").every((x) => s.done[x.id]);
    return n.index === 0 || !!s.done[unitNodes[n.index - 1].id];
  }
  /** Next thing to do: the focus subject's unit in progress, else any unit in progress, else the first open node. */
  function nextNode(ix, s) {
    const nodes = pathNodes(ix).filter((n) => !s.done[n.id] && isUnlocked(ix, s, n.id));
    const started = (n) => n.index > 0 || (s.sittings[n.id] || 0) > 0;
    if (s.focus) {
      const mine = nodes.filter((n) => (ix.unitOf(n.unitId) || {}).subject === s.focus);
      const f = mine.find(started) || mine[0];
      if (f) return f;
    }
    return nodes.find(started) || nodes[0] || null;
  }
  function unitProgress(ix, s, unitId) {
    const nodes = pathNodes(ix).filter((n) => n.unitId === unitId);
    const done = nodes.filter((n) => s.done[n.id]).length;
    return { done, total: nodes.length };
  }
  /** Sittings still to play in the whole course path (lessons count their remaining parts, a unit roundup counts one). */
  function remainingSittings(ix, s) {
    let n = 0;
    for (const node of pathNodes(ix)) {
      if (s.done[node.id]) continue;
      n += node.kind === "roundup" ? 1 : Math.max(0, lessonSittings(ix, node.id).length - (s.sittings[node.id] || 0));
    }
    return n;
  }

  // ---------- randomness ----------
  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  /** End a phrase with a full stop unless it already ends in terminal punctuation (issue labels end in a question mark). */
  function dot(str) { const t = String(str == null ? "" : str).trim(); return /[.?!…)"”]$/.test(t) ? t : `${t}.`; }
  function shuffle(arr, r) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function pickDistinct(pool, n, r, exclude = [], key = (x) => x) {
    const seen = new Set(exclude.map(key));
    const out = [];
    for (const x of shuffle(pool, r)) {
      if (seen.has(key(x))) continue;
      seen.add(key(x));
      out.push(x);
      if (out.length === n) break;
    }
    return out;
  }
  /** Seed from a date so the Question of the Day is the same if reopened. */
  function dateSeed(key) { let h = 7; for (const c of key) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; }
  /** Largest-remainder split of n draws across shares. */
  function apportion(n, shares) {
    const raw = shares.map((sh) => n * sh);
    const base = raw.map(Math.floor);
    let left = n - base.reduce((a, b) => a + b, 0);
    const order = raw.map((v, i) => [v - base[i], i]).sort((a, b) => b[0] - a[0]);
    for (const [, i] of order) { if (left <= 0) break; base[i] += 1; left -= 1; }
    return base;
  }

  // ---------- labels ----------
  const L = {
    guess: "First guess", hypo: "Best answer", grid: "Decision, then reason", transfer: "New facts, same idea", argue: "Best response",
    build: "Build the elements", steps: "Put the steps in order", apply: "Apply the steps", match: "Match", sort: "Sort",
    stance: "Which lens?", cite: "Recall", num: "The number", find: "Tap the deciding facts", spot: "Spot the trap",
    trapType: "Name the distractor", swipe: "Flash review", review: "Review", again: "Try it again", cross: "Quick recall",
    quiz: "Quick check", rule: "Principle", case: "Example", term: "Term", holding: "The takeaway", meaning: "The meaning", reverse: "The term",
  };
  const wrap = (s) => `<span class="w">${s}</span>`;
  const labelOf = (it) => ({ term: it.term, case: it.name, num: it.ask, rule: it.title, hypo: it.issue, trap: it.wrong }[it.kind] || it.id);
  const meaningOf = (it) => ({ term: it.meaning, case: it.holding, num: it.answer, rule: it.cite }[it.kind] || "");
  const shortLabel = (t, n = 48) => (String(t).length > n ? String(t).slice(0, n - 1).trimEnd() + "…" : String(t));
  /** Text of a hypo option: the shape writers use ({text, why, trap}) or a bare string. */
  const optText = (o) => (typeof o === "string" ? o : o.text);
  /** The verdict word of a Yes/No x because option: "Yes", "No", "Admissible", "Grant"… */
  const verdictOf = (text) => String(optText(text)).split(/[,:]/)[0].trim();

  // ---------- question builders ----------
  // Every question: { type, itemId, label, prompt, ..., answer, explain }.
  function distinctBy(pool, n, r, exclude, key) { return pickDistinct(pool, n, r, exclude, key); }

  /** The guess-first opener. Ethical principles often overlap, so never manufacture wrong
   * issue labels from neighboring cases. Without authored distinctions, pretest the reviewed
   * scenario itself; the same no-penalty mechanism still precedes teaching. */
  function qIssue(ix, it, r) {
    const wrong = distinctBy((it.issueDistractors || []).filter((x) => norm(x) !== norm(it.issue)), 3, r, [it.issue], norm);
    if (it.issue && wrong.length === 3) return { type: "mcq", itemId: it.id, guess: true, label: L.guess, prompt: "What is this question really about?", stem: it.short || it.stem, options: shuffle([it.issue, ...wrong], r), answer: it.issue, explain: `${dot(it.issue)} ${it.say || ""}`.trim() };
    return { ...qHypo(ix, it, r, { label: L.guess }), guess: true, ms: null };
  }
  /** The applied scenario: stem, call, four options, one best answer. Every option keeps its why and trap type for the feedback. */
  function qHypo(ix, it, r, { label } = {}) {
    const options = shuffle(it.options.map((o, i) => ({ text: optText(o), why: o.why || "", trap: i === it.answer ? null : (o.trap || null) })), r);
    const key = it.options[it.answer];
    const rule = it.rule ? ix.rules.get(it.rule) : null;
    return {
      type: "hypo", itemId: it.id, label: label || (it.transfer ? L.transfer : it.kind === "argue" ? L.argue : L.hypo), subject: it.subject, issue: it.issue || null,
      stem: it.stem, call: it.call, assume: it.assume || null, options, answer: optText(key), ms: HYPO_MS,
      explain: `${key.why || ""}${rule && rule.say ? " " + rule.say : ""}`.trim() || it.say,
      ruleId: it.rule || null, sourceIds: it.sourceIds || [], status: it.status,
    };
  }
  /** Verdict first (Yes/No, Admit/Exclude, Grant/Deny), then the reason among the two options that share it. */
  function qGrid(ix, it, r) {
    if (!it.grid) return null;
    const groups = {};
    it.options.forEach((o, i) => { (groups[verdictOf(o)] = groups[verdictOf(o)] || []).push(i); });
    const verdicts = Object.keys(groups);
    if (verdicts.length !== 2 || verdicts.some((v) => groups[v].length !== 2)) return null;
    const base = qHypo(ix, it, r);
    return { ...base, type: "grid", label: it.transfer ? L.transfer : L.grid, verdicts: shuffle(verdicts, r), verdictAnswer: verdictOf(it.options[it.answer]) };
  }
  const qArgue = (ix, it, r) => qHypo(ix, it, r, { label: it.transfer ? L.transfer : L.argue });
  /** Tap the fact(s) in the stem that decide the answer. */
  function qFind(ix, it) {
    if (!it.facts || !it.facts.length) return null;
    const toks = tokens(it.stem);
    const keys = toks.map(stripMarks);
    const answer = new Set();
    const groups = []; // one group of token indices per deciding fact: tapping any word of a phrase selects the phrase
    for (const f of it.facts) {
      const want = tokens(f).map(stripMarks);
      for (let i = 0; i + want.length <= keys.length; i++) {
        if (want.every((w, k) => keys[i + k] === w)) {
          const g = [];
          for (let k = 0; k < want.length; k++) { answer.add(i + k); g.push(i + k); }
          groups.push(g);
          break;
        }
      }
    }
    if (!answer.size) return null;
    return { type: "find", itemId: it.id, label: L.find, prompt: it.findAsk || `Tap the words that decide: ${it.call}`, words: toks, answer: [...answer].sort((a, b) => a - b), groups, explain: (it.options[it.answer].why || it.say || "").trim() };
  }
  /** A wrong option shown as a student's pick: key or distractor? then the fix. */
  function qSpotOption(ix, it, r) {
    const wrongs = it.options.map((o, i) => i).filter((i) => i !== it.answer && it.options[i].trap);
    if (!wrongs.length) return null;
    const showWrong = r() < 0.65;
    const i = showWrong ? wrongs[Math.floor(r() * wrongs.length)] : it.answer;
    const shown = it.options[i];
    const fixOptions = shuffle(it.options.map(optText), r);
    return { type: "spot", itemId: it.id, label: L.spot, prompt: `${it.call} A classmate answered:`, stem: it.stem, shown: optText(shown), isRight: !showWrong, fixOptions, fix: optText(it.options[it.answer]), trapType: showWrong ? shown.trap : null, explain: (showWrong ? `${TRAP_TYPES[shown.trap] || "Distractor"}: ${shown.why || ""} ${it.options[it.answer].why || ""}` : shown.why || "").trim() };
  }

  // rules
  /** Assemble the elements of a rule, claim, defense or test from tiles (ordered, or as a set when `ordered: false`). */
  function qBuild(ix, it, r) {
    if (!it.elements || it.elements.length < 2) return null;
    // Ethical/practical principles overlap. A neighboring principle's true element is not
    // a valid wrong answer here; use only the explicitly authored misconceptions.
    const notMine = (t) => !it.elements.some((e) => norm(e) === norm(t));
    const extra = distinctBy((it.distractorElements || []).filter(notMine), 2, r, it.elements, norm);
    if (!extra.length) return null; // the authoring validator requires an explicit wrong tile
    const ordered = it.ordered === true;
    return { type: "build", itemId: it.id, label: ordered ? L.build : `${L.build} (any order)`, prompt: it.buildAsk || `${it.title}: ${ordered ? "the elements, in order" : "pick every element"}`, tiles: shuffle([...it.elements, ...extra], r), answer: it.elements, orderFree: !ordered, joiner: " ", explain: `${dot(it.elements.join(" → "))} ${it.say}` };
  }
  /** Recognize which ethical lens a statement uses, without ranking the lenses. */
  function qStance(ix, it, r) {
    const keys = Object.keys(it.split || {}).filter((k) => SPLIT_LABELS[k] && it.split[k]);
    if (keys.length < 2) return null;
    const buckets = keys.map((k) => SPLIT_LABELS[k]);
    const items = keys.map((k) => ({ text: it.split[k], bucket: SPLIT_LABELS[k], why: it.splitNote || "" }));
    return { type: "bucket", itemId: it.id, label: L.stance, prompt: it.title, buckets, items: shuffle(items, r), answer: items, explain: it.splitNote || `${it.say} The stated facts determine which lens or condition is relevant.` };
  }
  const citeable = () => false;
  const qCite = () => null; // legacy API retained; source description drills are not Oikos content
  /** Inline quick check after a rule card. */
  function qQuiz(ix, it, r, i) {
    const q = (it.quiz || [])[i];
    if (!q) return null;
    const base = { itemId: it.id, label: L.quiz, explain: q.why || it.say };
    if (q.t === "mcq") return { ...base, type: "mcq", prompt: q.q, options: shuffle(q.options, r), answer: q.a };
    if (q.t === "tf") return { ...base, type: "tf", prompt: q.q, answer: q.a, yes: "True", no: "False" };
    if (q.t === "bucket") return { ...base, type: "bucket", label: L.sort, prompt: q.q || "Sort each one", buckets: q.buckets, items: shuffle(q.items, r), answer: q.items };
    return null;
  }
  /** Numbers that get tested: a tested number or deadline (`num`), mcq with 3 options or a typed answer. */
  function numDistractors(ix, it, r) {
    const accepted = [it.answer, ...(it.alt || [])];
    return distinctBy((it.distractors || []).filter((value) => !accepts(accepted, value)), 3, r, accepted, normNum);
  }
  function qNum(ix, it, r, { mcq = false, guess = false, label } = {}) {
    const explain = `${it.answer}. ${it.say}`;
    if (mcq || guess) {
      const wrong = numDistractors(ix, it, r).slice(0, 2);
      if (wrong.length < 2) return null;
      return { type: "mcq", itemId: it.id, guess, label: label || (guess ? L.guess : L.num), prompt: it.ask, options: shuffle([it.answer, ...wrong], r), answer: it.answer, explain };
    }
    return { type: "type", itemId: it.id, label: L.num, prompt: it.ask, answer: [it.answer, ...(it.alt || [])], numeric: true, placeholder: "type the number", fallbackOptions: shuffle([it.answer, ...numDistractors(ix, it, r)], r), explain };
  }

  // steps
  function qStepsBuild(ix, it, r) {
    const extra = distinctBy((it.distractors || []).filter((d) => !it.steps.some((s) => norm(s) === norm(d))), 3, r, it.steps, norm);
    return { type: "build", itemId: it.id, label: L.steps, prompt: it.title, tiles: shuffle([...it.steps, ...extra], r), answer: it.steps, orderFree: false, joiner: " ", explain: `${it.steps.map((s, i) => `${i + 1}. ${s}`).join(" ")} ${it.say}` };
  }
  function qStepsApply(ix, it, r) {
    const a = it.applyTo;
    if (!a || !a.stop) return null;
    const opts = distinctBy(it.steps.filter((s) => norm(s) !== norm(a.stop)), 3, r, [a.stop], norm);
    return { type: "mcq", itemId: it.id, label: L.apply, prompt: "Which step comes next in this routine?", stem: a.facts, options: shuffle([a.stop, ...opts], r), answer: a.stop, explain: a.why || it.say };
  }

  // pairs, sort
  /** A match set from a `pairs` item: at most 5 pairs per draw (the renderer's shape), the item's own spare tiles when it has them. */
  function qPairs(ix, it, r) {
    const uniq = [];
    const seenL = new Set(), seenR = new Set();
    for (const p of shuffle(it.pairs, r)) {
      const a = norm(p.l), b = norm(p.r);
      if (seenL.has(a) || seenR.has(b)) continue;
      seenL.add(a); seenR.add(b); uniq.push(p);
      if (uniq.length === 5) break;
    }
    if (uniq.length < 3) return null;
    const pairs = uniq.map((p) => [p.l, p.r, it.id]);
    const spare = distinctBy((it.spare || []).concat(it.pairs.filter((p) => !uniq.includes(p)).map((p) => p.r)).filter((x) => !pairs.some((p) => norm(p[1]) === norm(x))), 2, r, [], norm);
    return { type: "match", itemId: it.id, itemIds: [it.id], label: it.set || L.match, prompt: spare.length ? `Match each pair (${spare.length} on the right ${spare.length === 1 ? "is" : "are"} spare)` : "Tap a left tile, then its match", pairs, left: shuffle(pairs.map((p) => p[0]), r), right: shuffle(pairs.map((p) => p[1]).concat(spare), r), spare, explain: it.say };
  }
  /** A match from term / case / num cards in a sitting. */
  function qMatchItems(ix, its, r) {
    const uniq = [];
    const seenL = new Set(), seenM = new Set();
    for (const x of shuffle(its.filter((y) => labelOf(y) && meaningOf(y)), r)) {
      const a = norm(labelOf(x)), b = norm(meaningOf(x));
      if (seenL.has(a) || seenM.has(b)) continue;
      seenL.add(a); seenM.add(b); uniq.push(x);
      if (uniq.length === 4) break;
    }
    if (uniq.length < 3) return null;
    const pairs = uniq.map((it) => [labelOf(it), meaningOf(it), it.id]);
    return { type: "match", itemId: null, itemIds: uniq.map((x) => x.id), label: L.match, prompt: "Tap a left tile, then its match", pairs, left: shuffle(pairs.map((p) => p[0]), r), right: shuffle(pairs.map((p) => p[1]), r), spare: [] };
  }
  function qSort(ix, it, r) {
    const items = shuffle(it.items, r).slice(0, 8);
    return { type: "bucket", itemId: it.id, label: L.sort, prompt: it.q, buckets: it.buckets, items, answer: items, explain: it.say };
  }

  // cases, terms
  const qCaseHolding = () => null;
  const qCaseName = () => null;
  const termNames = (it) => [it.term, ...(it.alt || [])].map(norm);
  const distinctTerm = (a, b) => a.id !== b.id && !termNames(a).some((name) => termNames(b).includes(name));
  function qTermMeaning(ix, it, r, { guess = false, label } = {}) {
    const pool = ix.byKind.term.filter((x) => distinctTerm(x, it) && norm(x.meaning) !== norm(it.meaning));
    let wrong = distinctBy(pool.filter((x) => x.unitId === it.unitId), 3, r, [it], (x) => norm(x.meaning));
    if (wrong.length < 3) wrong = wrong.concat(distinctBy(pool, 3 - wrong.length, r, [it, ...wrong], (x) => norm(x.meaning)));
    if (wrong.length < 2) return null;
    return { type: "mcq", itemId: it.id, guess, label: label || (guess ? L.guess : L.meaning), prompt: guess ? `You may not have met it yet. What could ${wrap(it.term)} mean?` : `What does ${wrap(it.term)} mean?`, word: it.term, sub: it.literal ? `literally: ${it.literal}` : "", options: shuffle([it.meaning, ...wrong.map((x) => x.meaning)], r), answer: it.meaning, explain: `${it.term}: ${it.meaning}${it.use ? " " + it.use : ""}${it.hook && norm(it.hook) !== norm(it.use) ? " " + it.hook : ""}` };
  }
  function qTermReverse(ix, it, r) {
    const pool = ix.byKind.term.filter((x) => distinctTerm(x, it));
    let wrong = distinctBy(pool.filter((x) => x.lang === it.lang), 3, r, [it], (x) => norm(x.term));
    if (wrong.length < 3) wrong = wrong.concat(distinctBy(pool, 3 - wrong.length, r, [it, ...wrong], (x) => norm(x.term)));
    if (wrong.length < 2) return null;
    return { type: "mcq", itemId: it.id, label: L.reverse, prompt: `Which course term most precisely matches ${wrap("“" + it.meaning + "”")}?`, options: shuffle([it.term, ...wrong.map((x) => x.term)], r), answer: it.term, explain: `${it.term}${it.literal ? ` (literally “${it.literal}”)` : ""}: ${it.meaning}` };
  }

  /** Generate the concept name before seeing options; the existing type renderer supplies a fallback. */
  function qTermType(ix, it, r) {
    const fallback = qTermReverse(ix, it, r);
    return { type: "type", itemId: it.id, label: "Recall the term", prompt: `Which course term most precisely matches “${it.meaning}”?`, answer: [it.term, ...(it.alt || [])], placeholder: "type the term", fallbackOptions: fallback ? fallback.options : [it.term], explain: `${it.term}: ${it.meaning}${it.use ? " " + it.use : ""}` };
  }

  // traps
  function qSpot(ix, it, r) {
    const showWrong = r() < 0.6;
    // The correction must be distinguished from plausible mistakes in this scenario.
    // Cross-course repairs can be either irrelevant or also defensible here.
    const wrong = distinctBy((it.fixDistractors || []).filter((x) => norm(x) !== norm(it.right) && norm(x) !== norm(it.wrong)), 2, r, [it.right, it.wrong], norm);
    const fixOptions = shuffle([it.right, it.wrong, ...wrong], r);
    return { type: "spot", itemId: it.id, label: L.spot, prompt: "A classmate answered:", stem: it.stem, shown: showWrong ? it.wrong : it.right, isRight: !showWrong, fixOptions, fix: it.right, trapType: showWrong && /^\d+$/.test(String(it.cat)) ? it.cat : null, explain: it.why };
  }
  /** Name the distractor type of a trap (only for traps tagged with a type 1-11). */
  function qTrapType(ix, it, r) {
    if (!/^\d+$/.test(String(it.cat)) || !TRAP_TYPES[it.cat]) return null;
    const right = TRAP_TYPES[it.cat];
    // Several diagnostic tags can honestly fit one mistake. Score a taxonomy distinction
    // only when the author has supplied three reviewed, inapplicable categories for this case.
    const wrong = distinctBy((it.categoryDistractors || []).filter((x) => Object.values(TRAP_TYPES).includes(x) && x !== right), 3, r, [right]);
    if (wrong.length !== 3) return null;
    return { type: "mcq", itemId: it.id, label: L.trapType, prompt: `Why is this option wrong? ${wrap("“" + it.wrong + "”")}`, stem: it.stem, options: shuffle([right, ...wrong], r), answer: right, explain: `${dot(right)} ${it.why}` };
  }
  // swipe (self-graded flashcards)
  function swipeCard(it, i = 0) {
    if (it.kind === "term") return { itemId: it.id, front: it.term, sub: it.literal ? `literally: ${it.literal}` : "", back: it.meaning, hook: it.use || it.hook || "" };
    if (it.kind === "num") return { itemId: it.id, front: it.ask, sub: "", back: it.answer, hook: it.say };
    if (it.kind === "case") return { itemId: it.id, front: `${it.name} (${it.year})`, sub: it.facts || "", back: it.holding, hook: "" };
    if (it.kind === "rule") { const tf = (it.quiz || []).filter((q) => q.t === "tf"); const q = tf[i % Math.max(1, tf.length)]; if (q) return { itemId: it.id, front: q.q, sub: "True or false?", back: q.a ? "True" : "False", hook: q.why || "" }; return { itemId: it.id, front: it.title, sub: it.cite || "", back: it.say, hook: (it.elements || []).join(" · ") }; }
    return null;
  }
  function qSwipe(cards) {
    return { type: "swipe", itemId: null, itemIds: cards.map((c) => c.itemId), label: L.swipe, prompt: "Say the answer in your head, flip, then be honest.", cards };
  }

  /** The intro (teach) step for any item kind. */
  const qIntro = (it) => ({ type: "intro", itemId: it.id, kind: it.kind });
  const qAssume = (unit) => ({ type: "intro", itemId: null, kind: "assume", unitId: unit.id });

  /** The quick check right after an intro (or the question itself, for kinds that have no intro). */
  function qCheck(ix, it, r) {
    switch (it.kind) {
      case "hypo": return (it.grid && r() < 0.5 && qGrid(ix, it, r)) || qHypo(ix, it, r);
      case "argue": return qArgue(ix, it, r);
      case "steps": return qStepsBuild(ix, it, r);
      case "pairs": return qPairs(ix, it, r);
      case "sort": return qSort(ix, it, r);
      case "num": return qNum(ix, it, r, { mcq: true }) || qNum(ix, it, r);
      case "case": return qCaseHolding(ix, it, r);
      case "term": return qTermMeaning(ix, it, r);
      case "trap": return qSpot(ix, it, r);
      default: return null;
    }
  }
  /** Practice questions for an item (the harder ones). */
  function qPractice(ix, it, r) {
    const out = [];
    switch (it.kind) {
      case "rule": out.push(qBuild(ix, it, r)); out.push(qStance(ix, it, r)); out.push(qCite(ix, it, r)); break;
      case "hypo": out.push(qFind(ix, it, r)); if (r() < 0.5) out.push(qSpotOption(ix, it, r)); break;
      case "steps": out.push(qStepsApply(ix, it, r)); break;
      case "num": out.push(qNum(ix, it, r)); break;
      case "case": out.push(qCaseName(ix, it, r)); break;
      case "term": out.push(qTermType(ix, it, r)); break;
      case "trap": out.push(qTrapType(ix, it, r) || qSpot(ix, it, r)); break;
      default: break;
    }
    return out.filter(Boolean);
  }
  /** One retrieval question for a learned item (review, Quick recall pool, notebook). */
  function qReview(ix, it, r, s = null) {
    const roll = r();
    switch (it.kind) {
      case "rule": {
        const alts = [];
        if ((it.quiz || []).length) alts.push(() => qQuiz(ix, it, r, Math.floor(roll * it.quiz.length)));
        if ((it.elements || []).length >= 2) alts.push(() => qBuild(ix, it, r));
        if (it.split) alts.push(() => qStance(ix, it, r));
        if (citeable(it)) alts.push(() => qCite(ix, it, r));
        if (!alts.length) return null;
        return alts[Math.floor(roll * alts.length)]() || (alts[0]() || null);
      }
      case "hypo": {
        // review prefers an unseen sibling (same rule, new facts) so the learner cannot pass by remembering the stem
        let target = it;
        if (s && it.rule) { const unseen = ix.siblings(it.rule).filter((h) => h.id !== it.id && !s.items[h.id] && drillable(h)); if (unseen.length) target = unseen[Math.floor(roll * unseen.length)]; }
        if (target === it && roll < 0.2) return qFind(ix, it, r) || qHypo(ix, it, r, { label: L.review });
        const q = (target.grid && roll > 0.7 && qGrid(ix, target, r)) || qHypo(ix, target, r);
        return { ...q, label: target === it ? L.review : L.transfer };
      }
      case "argue": return qArgue(ix, it, r);
      case "steps": return roll < 0.6 || !it.applyTo ? qStepsBuild(ix, it, r) : qStepsApply(ix, it, r);
      case "pairs": return qPairs(ix, it, r);
      case "sort": return qSort(ix, it, r);
      case "num": return roll < 0.5 ? qNum(ix, it, r) : qNum(ix, it, r, { mcq: true }) || qNum(ix, it, r);
      case "case": return roll < 0.6 ? qCaseHolding(ix, it, r) || qCaseName(ix, it, r) : qCaseName(ix, it, r) || qCaseHolding(ix, it, r);
      case "term": return roll < 0.6 ? qTermMeaning(ix, it, r, { label: L.review }) || qTermReverse(ix, it, r) : qTermReverse(ix, it, r) || qTermMeaning(ix, it, r, { label: L.review });
      case "trap": return roll < 0.7 ? qSpot(ix, it, r) : qTrapType(ix, it, r) || qSpot(ix, it, r);
      default: return null;
    }
  }
  /** Which items can open a lesson with a no-penalty guess. */
  function qGuess(ix, it, r) {
    switch (it.kind) {
      case "hypo": return qIssue(ix, it, r);
      case "term": return qTermMeaning(ix, it, r, { guess: true });
      case "case": return qCaseHolding(ix, it, r, { guess: true });
      case "num": return qNum(ix, it, r, { guess: true });
      default: return null;
    }
  }

  // ---------- lesson / unit roundup / practice ----------
  const quizzable = (it) => it.kind !== "rule" || (it.quiz || []).length > 0 || (it.elements || []).length >= 2 || !!it.split || citeable(it);
  const hasIntro = (it) => ["rule", "steps", "case", "term", "num", "trap"].includes(it.kind);
  const pairable = (it) => ["term", "case", "num"].includes(it.kind);

  /**
   * One sitting of a lesson: the unit's assumption card on the very first sitting → guess first (pretest, no
   * penalty) → each item's intro + quick check (hypos are asked, never introduced; transfer hypos go to practice)
   * → practice (held-back / harder questions) → a match round → one or two older due items. Missed questions are re-queued by the UI.
   */
  function buildLesson(ix, s, lessonId, seed, sitting = 0) {
    const r = rng(seed);
    const sittings = lessonSittings(ix, lessonId);
    const ids = sittings[Math.min(sitting, sittings.length - 1)] || [];
    const its = ids.map((id) => ix.items.get(id));
    const steps = [];
    const lesson = ix.lessons.find((l) => l.id === lessonId);
    const unit = lesson && ix.unitOf(lesson.unitId);
    if (unit && unit.assume && unit.lessons[0].id === lessonId && sitting === 0) steps.push(qAssume(unit));
    const guessable = its.find((x) => !x.transfer && qGuess(ix, x, r));
    if (guessable) { const g = qGuess(ix, guessable, r); if (g) steps.push(g); }

    const practice = [];
    for (const it of its) {
      if (it.kind === "rule") {
        steps.push(qIntro(it));
        (it.quiz || []).forEach((_, i) => { const q = qQuiz(ix, it, r, i); if (q) steps.push(q); });
        practice.push(...qPractice(ix, it, r));
        continue;
      }
      if (it.transfer) { practice.push(qCheck(ix, it, r)); continue; }
      if (hasIntro(it)) steps.push(qIntro(it));
      const chk = qCheck(ix, it, r);
      if (chk) steps.push(chk);
      practice.push(...qPractice(ix, it, r));
    }
    const transfers = practice.filter((q) => q && q.label === L.transfer);
    const rest = shuffle(practice.filter((q) => q && !transfers.includes(q)), r);
    steps.push(...shuffle([...transfers, ...rest.slice(0, Math.max(2, 5 - transfers.length))], r));

    const matchable = its.filter(pairable);
    if (matchable.length >= 3) { const m = qMatchItems(ix, matchable, r); if (m) steps.push(m); }

    const own = new Set(its.map((x) => x.id));
    const older = dueItems(s, dayKey()).filter((id) => !own.has(id) && ix.items.has(id)).slice(0, 2);
    for (const id of older) { const q = qReview(ix, ix.items.get(id), r, s); if (q) steps.push({ ...q, label: L.review }); }
    return steps.filter(Boolean);
  }

  /** unit roundup: 8-10 mixed retrieval questions from the unit, interleaved by kind, plus a match when the unit allows. */
  function buildRoundup(ix, s, unitId, seed) {
    const r = rng(seed);
    const unit = ix.unitOf(unitId);
    const its = unit.lessons.flatMap((l) => l.items.map((x) => ix.items.get(x.id))).filter(quizzable);
    const steps = [];
    const boundary = shuffle(its.filter((it) => it.boundary && ["hypo", "argue", "trap", "sort"].includes(it.kind)), r)[0];
    const picks = boundary ? [boundary, ...interleave(shuffle(its.filter((it) => it !== boundary), r), 7)] : interleave(shuffle(its, r), 8);
    for (const it of picks) { const q = it === boundary ? qCheck(ix, it, r) : qReview(ix, it, r, s); if (q) steps.push(q); }
    const matchable = its.filter(pairable);
    if (matchable.length >= 3) { const m = qMatchItems(ix, matchable, r); if (m) steps.push(m); }
    return steps;
  }

  /** Never two items of the same kind, subject or rule in a row when it can be avoided. */
  function interleave(items, n = items.length) {
    const out = [];
    const pool = items.slice();
    const sig = (x) => `${x.kind}|${x.subject || ""}|${x.rule || x.id}`;
    while (pool.length && out.length < n) {
      const last = out[out.length - 1];
      let i = last ? pool.findIndex((x) => x.kind !== last.kind && x.subject !== last.subject) : 0;
      if (i < 0) i = last ? pool.findIndex((x) => x.kind !== last.kind) : 0;
      if (i < 0) i = pool.findIndex((x) => sig(x) !== sig(last));
      if (i < 0) i = 0;
      out.push(pool.splice(i, 1)[0]);
    }
    return out;
  }

  /**
   * Review: due items first (oldest due, lowest box), then 30% from the Mistakes notebook, then the
   * weakest boxes; interleaved by subject and kind. 10 questions.
   */
  function buildPractice(ix, s, seed, n = 10) {
    const r = rng(seed);
    const today = dayKey();
    const has = (id) => ix.items.has(id) && quizzable(ix.items.get(id));
    const due = dueItems(s, today).filter(has);
    const notebook = notebookItems(s).filter((id) => has(id) && !due.includes(id));
    const weak = Object.entries(s.items).filter(([id]) => has(id) && !due.includes(id) && !notebook.includes(id)).sort((a, b) => a[1].box - b[1].box || b[1].wrong - a[1].wrong).map(([id]) => id);
    const nb = Math.round(n * 0.3);
    let ids = due.slice(0, n - Math.min(nb, notebook.length)).concat(notebook.slice(0, nb));
    if (ids.length < n) ids = ids.concat(weak.slice(0, n - ids.length));
    const picked = interleave(ids.slice(0, n).map((id) => ix.items.get(id)));
    return picked.map((it) => qReview(ix, it, r, s)).filter(Boolean);
  }
  /** Flash review: due concepts first, then the focus topic, then anything learned. */
  function buildSwipe(ix, s, seed, n = 25) {
    const r = rng(seed);
    const today = dayKey();
    const swipable = (x) => x && (["term", "num", "case"].includes(x.kind) || (x.kind === "rule" && (x.quiz || []).some((q) => q.t === "tf")));
    const all = [...ix.items.values()].filter(swipable);
    const due = dueItems(s, today).map((id) => ix.items.get(id)).filter(swipable);
    const focus = all.filter((x) => s.focus && x.subject === s.focus && !due.includes(x));
    const learned = all.filter((x) => s.items[x.id] && !due.includes(x) && !focus.includes(x));
    const set = due.slice(0, 15).concat(shuffle(focus, r).slice(0, 10));
    const fill = shuffle(learned.length ? learned : all.filter((x) => !set.includes(x)), r);
    const cards = set.concat(fill).slice(0, n).map((it, i) => swipeCard(it, i)).filter(Boolean);
    return cards.length ? qSwipe(shuffle(cards, r)) : null;
  }

  // ---------- Quick recall (speed round) ----------
  const crossable = (x) => x && drillable(x) && x.status !== "ethics" && x.speed !== false && (x.kind === "term" || (x.speed === true && (["num", "sort", "pairs"].includes(x.kind) || (x.kind === "rule" && (x.quiz || []).some((q) => q.t === "tf")))));
  function crossExamPool(ix, s) {
    let pool = Object.keys(s.items).map((id) => ix.items.get(id)).filter(crossable);
    if (pool.length < 6) pool = ix.course.units.flatMap((u) => u.lessons.slice(0, 1).flatMap((l) => l.items.map((x) => ix.items.get(x.id)))).filter(crossable);
    if (pool.length < 6) pool = [...ix.items.values()].filter(crossable);
    return pool;
  }
  /** Three options (or true/false), 15 seconds, one miss and the witness walks. */
  function crossExamQuestion(ix, s, r) {
    const pool = crossExamPool(ix, s);
    if (!pool.length) return null;
    for (const it of shuffle(pool, r)) {
    let q = null;
    if (it.kind === "num") q = qNum(ix, it, r, { mcq: true });
    else if (it.kind === "term") q = qTermMeaning(ix, it, r);
    else if (it.kind === "case") q = qCaseHolding(ix, it, r);
    else if (it.kind === "sort") { const row = it.items[Math.floor(r() * it.items.length)]; q = it.buckets.length === 2 ? { type: "tf", itemId: it.id, label: L.cross, prompt: `${it.q} ${wrap(row.text)}`, answer: row.bucket === it.buckets[0], yes: it.buckets[0], no: it.buckets[1], explain: row.why || it.say } : { type: "mcq", itemId: it.id, label: L.cross, prompt: `${it.q} ${wrap(row.text)}`, options: shuffle([row.bucket, ...distinctBy(it.buckets.filter((b) => b !== row.bucket), 2, r)], r), answer: row.bucket, explain: row.why || it.say }; }
    else if (it.kind === "pairs") { const row = it.pairs[Math.floor(r() * it.pairs.length)]; const wrong = distinctBy(it.pairs.filter((p) => norm(p.r) !== norm(row.r)).map((p) => p.r).concat(it.spare || []), 2, r, [row.r], norm); if (wrong.length === 2) q = { type: "mcq", itemId: it.id, label: L.cross, prompt: wrap(row.l), options: shuffle([row.r, ...wrong], r), answer: row.r, explain: `${row.l}: ${row.r}` }; }
    else if (it.kind === "rule") { const tf = (it.quiz || []).filter((x) => x.t === "tf"); q = citeable(it) && (r() < 0.5 || !tf.length) ? qCite(ix, it, r, { mcq: true }) : (tf.length ? qQuiz(ix, it, r, it.quiz.indexOf(tf[Math.floor(r() * tf.length)])) : null); }
    if (!q) continue;
    if (q.type === "mcq" && q.options.length > 3) { const wrong = q.options.filter((o) => o !== q.answer).slice(0, 2); q = { ...q, options: shuffle([q.answer, ...wrong], r) }; }
    return { ...q, guess: false, label: L.cross, ms: CROSS_MS };
    }
    return null;
  }

  // ---------- Question of the Day and mocks ----------
  /** Exam-shaped items of a subject the learner can be asked: from units she started, else the subject's first lessons, else the whole subject. */
  function examPool(ix, s, subject, need = 1) {
    const all = ix.examItems(subject);
    const started = new Set(Object.keys(s.items).map((id) => (ix.items.get(id) || {}).unitId).filter(Boolean));
    let pool = all.filter((x) => started.has(x.unitId));
    if (pool.length < need) pool = pool.concat(all.filter((x) => !pool.includes(x) && ix.unitOf(x.unitId).lessons[0].id === x.lessonId));
    if (pool.length < need) pool = all;
    return pool;
  }
  /** Draw n items of a subject following balanced topic sampling, filling shortfalls from the rest of the subject. */
  function drawSubject(ix, s, subject, n, r, exclude = new Set()) {
    const pool = examPool(ix, s, subject, n).filter((x) => !exclude.has(x.id));
    const mix = CATEGORY_MIX[subject];
    const picked = [];
    if (mix) {
      const counts = apportion(n, mix.map((g) => g.share));
      mix.forEach((g, i) => { const grp = pool.filter((x) => g.cats.includes(catGroup(x)) && !picked.includes(x)); picked.push(...shuffle(grp, r).slice(0, counts[i])); });
    }
    if (picked.length < n) picked.push(...shuffle(pool.filter((x) => !picked.includes(x)), r).slice(0, n - picked.length));
    return picked;
  }
  /** A conditional scenario for daily and mixed practice, independent of lesson labels. */
  const asExamQ = (ix, it, r, subject) => ({ ...(it.kind === "argue" ? qArgue(ix, it, r) : qHypo(ix, it, r, { label: L.hypo })), subject, marks: 1 });
  /** Question of the Day: date-seeded, weekday → subject, 5 scenario questions, no hypo repeated within 14 days. */
  function buildDaily(ix, s, dateKey) {
    const r = rng(dateSeed(dateKey));
    const wanted = dailySubject(dateKey);
    const recent = new Set(Object.entries(s.dailies || {}).filter(([d]) => d < dateKey && daysBetween(d, dateKey) <= DAILY_NO_REPEAT_DAYS).flatMap(([, v]) => v.ids || []));
    let subject = wanted;
    let picks = drawSubject(ix, s, subject, DAILY_N, r, recent);
    if (picks.length < DAILY_N) picks = drawSubject(ix, s, subject, DAILY_N, r);
    if (!picks.length) {
      // the course has nothing for this subject yet: walk the week until something teaches
      for (let k = 1; k < SUBJECT_IDS.length && !picks.length; k++) { subject = SUBJECT_IDS[(SUBJECT_IDS.indexOf(wanted) + k) % SUBJECT_IDS.length]; picks = drawSubject(ix, s, subject, DAILY_N, r, recent); }
    }
    if (!picks.length) { const any = [...ix.items.values()].filter((x) => (x.kind === "hypo" || x.kind === "argue") && drillable(x)); picks = shuffle(any, r).slice(0, DAILY_N); subject = picks[0] ? picks[0].subject : wanted; }
    const steps = picks.map((it) => asExamQ(ix, it, r, it.subject));
    return { subject, title: subjectLabel(subject), total: steps.length, minutes: null, steps, date: dateKey, ids: picks.map((x) => x.id) };
  }
  /** Untimed mixed practice balances topics; the seed rotates extra questions. */
  function buildMock(ix, s, seed, size = 25) {
    const r = rng(seed);
    // A partial course draws from the topics that already have authored scenarios.
    const subjects = ix.subjectsPresent.length ? ix.subjectsPresent : Object.keys(ix.bySubject).filter((id) => ix.examItems(id).length);
    if (!subjects.length) return { size, total: 0, minutes: null, steps: [] };
    const base = Math.floor(size / subjects.length);
    let extra = size - base * subjects.length;
    const order = shuffle(subjects, r);
    const counts = Object.fromEntries(subjects.map((id) => [id, base]));
    for (const id of order) { if (extra <= 0) break; counts[id] += 1; extra -= 1; }
    let steps = [];
    for (const id of subjects) steps.push(...drawSubject(ix, s, id, counts[id], r).map((it) => asExamQ(ix, it, r, id)));
    steps = shuffle(steps, r);
    return { size, total: steps.length, minutes: null, steps };
  }
  /** An untimed set of scenarios from one topic. */
  function buildSubjectSet(ix, s, subject, seed, n = 25) {
    const r = rng(seed);
    const steps = drawSubject(ix, s, subject, n, r).map((it) => asExamQ(ix, it, r, subject));
    return { size: n, subject, total: steps.length, minutes: null, steps: shuffle(steps, r) };
  }
  /** Score a finished run of marked questions: per-subject [got, total]. */
  function scoreSubjects(results) {
    const out = {};
    for (const { q, score } of results) {
      if (!q.subject || !q.marks) continue;
      out[q.subject] = out[q.subject] || [0, 0];
      out[q.subject][0] += (q.marks || 0) * score;
      out[q.subject][1] += q.marks || 0;
    }
    return out;
  }
  /** Distractor types fallen for in a run: {type: count}. */
  function trapTally(results) {
    const out = {};
    for (const { trap } of results) if (trap) out[trap] = (out[trap] || 0) + 1;
    return out;
  }
  function recordDaily(s, dateKey, score, total, subject, ids = [], ms = 0) {
    const prev = addDays(dateKey, -1);
    const had = !!s.dailies[dateKey];
    s.dailies[dateKey] = { subject, score, total, ids, ms };
    if (!had) s.dailyStreak = s.dailies[prev] || (isWeekend(prev) && (s.dailies[addDays(prev, -1)] || s.dailies[addDays(prev, -2)])) ? s.dailyStreak + 1 : 1;
  }

  // ---------- badges ----------
  const BADGES = [
    { id: "first_step", name: "First explorer", desc: "Your first lesson", test: (s) => Object.keys(s.done).length >= 1 },
    { id: "steady", name: "Showing up", desc: "A 7-day practice streak", test: (s) => s.bestStreak >= 7 },
    { id: "all_topics", name: "Wide perspective", desc: "A lesson in every topic", test: (s, ix) => ix && ix.subjectsPresent.length === SUBJECT_IDS.length && SUBJECT_IDS.every((sub) => ix.course.units.some((u) => u.subject === sub && u.lessons.some((l) => s.done[l.id]))) },
    { id: "revisited", name: "Made to stick", desc: "Every principle of one topic in box 3 or higher", test: (s, ix) => ix && SUBJECT_IDS.some((sub) => { const rs = ix.byKind.rule.filter((x) => x.subject === sub); return rs.length >= 3 && rs.every((x) => (s.items[x.id] || {}).box >= 3); }) },
    { id: "roundup", name: "Putting it together", desc: "Complete a unit roundup", test: (s) => Object.keys(s.done).some((id) => id.endsWith("-review")) },
    { id: "quick_recall", name: "Familiar ideas", desc: "Recall 15 simple distinctions in a round", test: (s) => s.crossExamBest >= 15 },
    { id: "daily_habit", name: "Daily visitor", desc: "7 daily challenges in a row", test: (s) => s.dailyStreak >= 7 },
    { id: "scenario_practice", name: "Connecting ideas", desc: "Complete a mixed scenario practice", test: (s) => s.mocks.length >= 1 },
    { id: "whole_course", name: "The whole picture", desc: "Complete every unit roundup", test: (s, ix) => ix && ix.course.units.length > 0 && ix.course.units.every((u) => s.done[`${u.id}-review`]) },
  ];
  function awardBadges(s, today, ix) {
    const fresh = [];
    for (const b of BADGES) if (!s.badges[b.id] && b.test(s, ix)) { s.badges[b.id] = today; fresh.push(b); }
    return fresh;
  }

  return {
    EXAM_DATE, EXAM_TIME, EXAM_PRESETS, CROSS_MS, HYPO_MS, MINUTES_PER_Q, GOALS, MAX_FREEZES, INTERVALS, BADGES, RANKS, L,
    SUBJECTS, SUBJECT_IDS, OTHER_SUBJECTS, CATEGORY_MIX, DAILY_BY_WEEKDAY, DAILY_N, dailySubject, STATUS_LABELS, TRAP_TYPES, SELF_TAGS, CALL_TYPES, SPLIT_LABELS, KINDS,
    dayKey, parseDay, addDays, daysBetween, weekKey, isWeekend, weekday, missedWeekdays, fmtDay, fmtMinutes, subjectLabel,
    freshState, normalizeState, touchStreak, liveStreak, addXp, weekXp, rankOf, countdown, examDate, reviewCap,
    learn, grade, recordTrap, selfTag, topTraps, cleanSrc, dueItems, notebookItems,
    norm, normNum, citeKey, sameAnswer, accepts, acceptsCite, tokens, stripMarks, verdictOf, optText,
    indexCourse, sortUnits, lessonSittings, itemWeight, catGroup, drillable, citeable, quizzable, pathNodes, isUnlocked, nextNode, unitProgress, remainingSittings,
    rng, shuffle, pickDistinct, dateSeed, apportion, interleave, labelOf, meaningOf, shortLabel,
    qIssue, qHypo, qGrid, qArgue, qFind, qSpotOption, qBuild, qStance, qCite, qQuiz, qNum, qStepsBuild, qStepsApply, qPairs, qMatchItems, qSort,
    qCaseHolding, qCaseName, qTermMeaning, qTermReverse, qTermType, qSpot, qTrapType, swipeCard, qSwipe, qIntro, qAssume, qCheck, qPractice, qReview, qGuess,
    buildLesson, buildRoundup, buildPractice, buildSwipe, crossExamQuestion, crossExamPool,
    examPool, drawSubject, buildDaily, buildMock, buildSubjectSet, scoreSubjects, trapTally, recordDaily, awardBadges,
  };
})();

if (typeof module !== "undefined") module.exports = { Engine };
