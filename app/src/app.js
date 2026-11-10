// UI for "Oikos". Depends on globals OIKOS_UNITS (src/units/*.js) and Engine (engine.js).
(() => {
  "use strict";
  const E = Engine;
  const IX = E.indexCourse(typeof OIKOS_UNITS !== "undefined" ? OIKOS_UNITS : []);
  const LS_KEY = "oikos:family:v1";

  // ---------- helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const today = () => E.dayKey();
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const seed = () => Math.floor(Math.random() * 2 ** 31);
  const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
  const LETTERS = ["A", "B", "C", "D"];
  const mmss = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };

  /** Explicit learning analytics on the production website only. */
  function track(event, props = {}) { try { window.PulseAnalytics?.track(event, props); } catch { /* optional */ } }
  // ---------- sister apps ----------
  /** The family of free, open-source learning apps. Keep this list the same in Skepsis, Carpe, Gnothi, Objection, Agora and Oikos (app.js and site.mjs). */
  const FAMILY = [
    {"id": "skepsis", "name": "Skepsis", "url": "https://skepsis-greek.vercel.app", "repo": "https://github.com/ionpetro/skepsis", "en": "the Greek hiding in everyday English", "el": "οι ελληνικές ρίζες που κρύβονται στα αγγλικά"},
    {"id": "carpe", "name": "Carpe", "url": "https://carpe-latin.vercel.app", "repo": "https://github.com/ionpetro/carpe", "en": "Latin for Greece's national exams", "el": "Λατινικά για τις Πανελλαδικές"},
    {"id": "gnothi", "name": "Gnothi", "url": "https://gnothi-greek.vercel.app", "repo": "https://github.com/ionpetro/gnothi", "en": "Ancient Greek for Greece's national exams", "el": "Αρχαία Ελληνικά για τις Πανελλαδικές"},
    {"id": "objection", "name": "Objection", "url": "https://objection-bar.vercel.app", "repo": "https://github.com/ionpetro/objection", "en": "prep for the US bar exam", "el": "προετοιμασία για τις εξετάσεις δικηγόρων των ΗΠΑ"},
    {"id": "agora", "name": "Agora", "url": "https://agora-sales-xi.vercel.app", "repo": "https://github.com/ionpetro/agora", "en": "sales and negotiation, with ethics", "el": "πωλήσεις και διαπραγμάτευση, με ηθική"},
    {"id": "oikos", "name": "Oikos", "url": "https://oikos-azure-five.vercel.app", "repo": "https://github.com/ionpetro/oikos", "en": "economics and incentives", "el": "οικονομικά και κίνητρα"},
    {"id": "guanxi", "name": "Guanxi", "url": "https://guanxi-mandarin.vercel.app", "repo": "https://github.com/ionpetro/guanxi", "en": "Mandarin and local culture", "el": "Μανδαρινικά και τοπική κουλτούρα"},
    {"id": "everyday-ethics", "name": "Everyday Ethics", "url": "https://everyday-ethics-ion.wintrypenny4.chatgpt.site", "repo": "https://github.com/ionpetro/everyday-ethics", "en": "everyday choices and ethical judgment · private preview", "el": "καθημερινές επιλογές και ηθική κρίση · ιδιωτική προεπισκόπηση"},
  ];
  /** Links to the other apps in the family, tagged so each app's analytics shows where visitors came from. */
  const sisterLinks = () => FAMILY.filter((a) => a.id !== "oikos").map((a) => `<a href="${a.url}/?utm_source=oikos&utm_medium=sister_link" target="_blank" rel="noopener" data-sister="${a.id}">${a.name}</a> (${a.en}; <a href="${a.repo}" target="_blank" rel="noopener noreferrer" aria-label="${a.name} on GitHub">GitHub</a>)`).join(" · ");
  const sisterNote = () => `<p class="sister">More free, open-source apps like this: ${sisterLinks()}</p>`;
  const REPO = "https://github.com/ionpetro/oikos";
  const ghLink = (cls, where, inner, label) => (REPO ? `<a class="${cls}" href="${REPO}" target="_blank" rel="noopener" data-gh="${where}" aria-label="${label || "The Oikos code on GitHub"}" title="${label || "The Oikos code on GitHub"}">${inner}</a>` : "");
  const FREE_NOTE = "Oikos is free and always will be. The code is open (MIT). No account, no ads. PostHog counts visits and learning activity, without recordings or typed text. Your progress and reflections stay in this browser; export a backup from Me to keep them.";

  // ---------- GitHub star prompt ----------
  // Asked on the lesson-finished screen, never as a pop-up (same rules as Skepsis): ask after the
  // first finished lesson; if "Not now", ask once more on a later day after a perfect lesson
  // or the daily goal. Never more than twice, never again after a click.
  const STAR_KEY = "oikos-star-v1";
  const starState = () => { try { return JSON.parse(localStorage.getItem(STAR_KEY) || "{}") || {}; } catch { return {}; } };
  const saveStar = (st) => { try { localStorage.setItem(STAR_KEY, JSON.stringify(st)); } catch { /* storage blocked: we just may ask again */ } };
  /** Counts this finished lesson and returns why to ask now ("first_lesson", "perfect", "daily_goal"), or null. */
  function starMoment({ perfect, goalHit }) {
    const st = starState();
    st.lessons = (st.lessons || 0) + 1;
    let why = null;
    if (!st.clicked && (st.asks || 0) === 0) why = "first_lesson";
    else if (!st.clicked && st.asks === 1 && st.lastAsk !== today() && (perfect || goalHit)) why = perfect ? "perfect" : "daily_goal";
    if (why) { st.asks = (st.asks || 0) + 1; st.lastAsk = today(); }
    saveStar(st);
    return why ? { why, lessons: st.lessons, ask: st.asks } : null;
  }

  // ---------- icons ----------
  const I = {
    github: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    flame: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c1 3.5-1.6 5.3-2.9 7.3C7.6 11.5 7 13 7 14.6 7 18.1 9.3 21 12 21s5-2.6 5-6.2c0-2.1-.9-3.7-2-5 .1 1.6-.5 2.8-1.6 3.3.5-3.6-.6-7.6-1.4-11.1z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 4 6v6c0 4.5 3.4 7.6 8 9 4.6-1.4 8-4.5 8-9V6z"/><path d="M12 7v10M8 12h8"/></svg>',
    gavel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m14 4 6 6M8 10l6-6M10 12l-7 7M12 6l6 6M3 21h8"/></svg>',
    scales: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v18M6 21h12M4 8h16M6 8l-3 7h6zM18 8l-3 7h6z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/></svg>',
    bench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11h18v3H3zM5 14v6M19 14v6M8 11V6h8v5"/></svg>',
    redo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    paper: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h6M9 16h6"/></svg>',
    cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="6" width="12" height="15" rx="2"/><path d="M8 3h11a1 1 0 0 1 1 1v13"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4h12l-2 4 2 4H5"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 2.9 6.6 7.1.7-5.4 4.8 1.6 7L12 17.5 5.8 21.1l1.6-7L2 9.3l7.1-.7z"/></svg>',
  };
  const amicusIcon = `<span style="color:var(--brand)">${I.scales}</span>`;
  /** A brass seal with a letter, for badges. */
  function seal(letter) {
    return `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="21" fill="var(--brass)"/><circle cx="24" cy="24" r="17" fill="none" stroke="var(--brass-deep)" stroke-width="2" stroke-dasharray="3 2"/><text x="24" y="31" text-anchor="middle" font-family="Fraunces, Georgia, serif" font-weight="700" font-size="20" fill="#1d1500">${esc(letter)}</text></svg>`;
  }

  /** Pip, the beaver. Same family mood API and SVG footprint. */
  function mascot(mood = "happy") {
    const sad = mood === "sad", sleepy = mood === "sleepy", cheer = mood === "cheer";
    const eyes = sleepy ? '<path d="M47 48q5 4 10 0M72 48q5 4 10 0" fill="none" stroke="var(--m-ink)" stroke-width="3" stroke-linecap="round"/>' : '<ellipse cx="52" cy="48" rx="3.3" ry="4" fill="var(--m-ink)"/><ellipse cx="77" cy="48" rx="3.3" ry="4" fill="var(--m-ink)"/><circle cx="53" cy="47" r="1" fill="white"/><circle cx="78" cy="47" r="1" fill="white"/>';
    const arms = cheer ? '<path d="M35 80Q16 67 20 51M94 80Q112 67 109 51" fill="none" stroke="var(--m-shell)" stroke-width="11" stroke-linecap="round"/>' : '<ellipse cx="36" cy="84" rx="8" ry="17" fill="var(--m-shell)" transform="rotate(-25 36 84)"/><ellipse cx="94" cy="84" rx="8" ry="17" fill="var(--m-shell)" transform="rotate(25 94 84)"/>';
    return `<svg class="mascot" viewBox="0 0 130 116" role="img" aria-label="Pip, the beaver">
      <ellipse cx="65" cy="110" rx="45" ry="4" fill="var(--line)"/>
      <ellipse cx="105" cy="88" rx="13" ry="26" fill="var(--m-band)" transform="rotate(36 105 88)"/>
      <path d="m96 75 15 18m-18-9 16 18m-7-30-7 30m17-24-8 28" stroke="var(--m-shell)" stroke-width="1.5" opacity=".8"/>
      <ellipse cx="65" cy="83" rx="32" ry="28" fill="var(--m-shell)"/><ellipse cx="65" cy="88" rx="21" ry="20" fill="var(--m-belly)"/>
      ${arms}<ellipse cx="46" cy="107" rx="14" ry="6" fill="var(--m-band)"/><ellipse cx="84" cy="107" rx="14" ry="6" fill="var(--m-band)"/>
      <circle cx="38" cy="27" r="11" fill="var(--m-shell)"/><circle cx="92" cy="27" r="11" fill="var(--m-shell)"/><circle cx="38" cy="27" r="6" fill="var(--m-tongue)"/><circle cx="92" cy="27" r="6" fill="var(--m-tongue)"/>
      <rect x="32" y="24" width="66" height="54" rx="25" fill="var(--m-skin)"/><path d="M53 27l10-10 4 9 10-5-4 9" fill="var(--m-skin)"/>
      ${eyes}<ellipse cx="55" cy="64" rx="13" ry="10" fill="var(--m-belly)"/><ellipse cx="75" cy="64" rx="13" ry="10" fill="var(--m-belly)"/><ellipse cx="65" cy="58" rx="8" ry="5" fill="var(--m-ink)"/>
      ${sad ? '<path d="M56 73q9-6 18 0" fill="none" stroke="var(--m-ink)" stroke-width="2.5"/>' : '<path d="M55 69q10 13 20 0" fill="var(--m-ink)"/><rect x="60" y="70" width="10" height="9" rx="2" fill="#fffdf8"/><path d="M65 70v9" stroke="var(--m-ink)" stroke-width="1"/>'}
      <path d="M44 80q21 7 42 0v8q-21 7-42 0z" fill="var(--brand)"/><path d="m70 85 12 6-8 13-8-17" fill="var(--brand)"/>
      ${mood === "robe" ? '<path d="M44 90h24v15H44z" fill="var(--brass)"/><path d="M48 94h16m-16 5h12" stroke="var(--m-ink)" stroke-width="1.5"/>' : ''}
      ${sleepy ? '<text x="105" y="28" fill="var(--muted)" font-family="Georgia" font-style="italic">z z</text>' : ''}
    </svg>`;
  }

  // ---------- sound ----------
  let actx = null;
  function tone(freqs, dur = 0.09, type = "triangle", gap = 0.07, vol = 0.12) {
    if (!S.sound) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      freqs.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = type; o.frequency.value = f;
        const t0 = actx.currentTime + i * gap;
        g.gain.setValueAtTime(0.0001, t0);
        g.gain.exponentialRampToValueAtTime(vol, t0 + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
        o.connect(g).connect(actx.destination);
        o.start(t0); o.stop(t0 + dur + 0.02);
      });
    } catch { /* audio is optional */ }
  }
  const sfx = { right: () => tone([660, 990]), wrong: () => tone([196, 147], 0.16, "square", 0.1, 0.05), done: () => tone([523, 659, 784, 1047], 0.14, "triangle", 0.09), tick: () => tone([880], 0.03, "sine", 0, 0.04), gavel: () => tone([110, 90], 0.08, "square", 0.05, 0.08) };
  const buzz = (ms) => { try { navigator.vibrate && navigator.vibrate(ms); } catch { /* optional */ } };

  function confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = document.createElement("canvas");
    c.id = "confetti"; document.body.appendChild(c);
    const ctx = c.getContext("2d"); const dpr = window.devicePixelRatio || 1;
    c.width = innerWidth * dpr; c.height = innerHeight * dpr; ctx.scale(dpr, dpr);
    const css = getComputedStyle(document.documentElement);
    const cols = ["--brass", "--brand", "--ok", "--flame", "--bad"].map((v) => css.getPropertyValue(v).trim());
    const ps = [...Array(110)].map(() => ({ x: innerWidth / 2 + (Math.random() - 0.5) * 120, y: innerHeight * 0.35, vx: (Math.random() - 0.5) * 11, vy: -Math.random() * 12 - 4, s: 5 + Math.random() * 6, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, c: pick(cols) }));
    let f = 0;
    (function step() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (const p of ps) { p.vy += 0.35; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.vx *= 0.99; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); }
      if (++f < 150) requestAnimationFrame(step); else c.remove();
    })();
  }
  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  // ---------- state ----------
  let storedProgress = null;
  let progressConflict = false;
  function loadLocal() {
    try { const raw = localStorage.getItem(LS_KEY); storedProgress = raw; if (raw) return E.normalizeState(JSON.parse(raw), IX); } catch { /* storage can be blocked */ }
    return E.freshState();
  }
  let S = loadLocal();
  /** Progress numbers PostHog attaches to every event, so any event can be cut by how far along someone is. */
  function progressProps() {
    return { xp: S.xp, streak: S.streak, best_streak: S.bestStreak, goal_xp: S.goal, lessons_done: Object.keys(S.done || {}).length, answered: S.answered, correct: S.correct,
      accuracy_all: S.answered ? Math.round((S.correct / S.answered) * 100) / 100 : null, days_active: Object.keys(S.days || {}).length,
      cross_exam_best: S.crossExamBest, mocks_taken: (S.mocks || []).length, onboarded: !!S.onboarded, sits: S.sits, focus: S.focus || null, rank: E.rankOf(S).rank.id };
  }
  function syncProgress() { /* Progress remains in local storage; events carry only selected metrics. */ }
  function trackAppOpened() { /* analytics.js records one app_opened per page load. */ }
  function trackDayProgress(prevTodayXp, st) {
    const now = S.days[today()] || 0;
    if (prevTodayXp < S.goal && now >= S.goal) track("daily_goal_reached", { goal_xp: S.goal, today_xp: now });
    if (st && st.streakUp) track("streak_extended", { streak: S.streak, best_streak: S.bestStreak, used_freeze: st.usedFreeze > 0 });
  }
  const runProps = () => (run ? { mode: run.mode, node_id: run.node ? run.node.id : null, unit_id: run.node ? run.node.unitId || null : null, sitting: run.sitting ?? null, steps: run.steps.length, size: run.size || null } : {});
  const stepProps = (q) => ({ step_index: run ? run.i : null, q_type: q.type, item_id: q.itemId || (q.itemIds || [])[0] || null, item_ids: q.itemIds || null, subject: q.subject || null, guess: !!q.guess, requeued: run ? run.requeued.has(run.i) : false, label: q.label || null });

  function save() {
    if (progressConflict) return;
    S.updatedAt = Date.now();
    const next = JSON.stringify(S);
    const commit = () => {
      if (progressConflict) return;
      try {
        if (localStorage.getItem(LS_KEY) !== storedProgress) { blockStaleProgress(); return; }
        localStorage.setItem(LS_KEY, next);
        storedProgress = next;
      } catch { /* private mode: progress lives for this session only */ }
    };
    // Serialize writes between tabs where supported; the snapshot check also protects older browsers.
    if (navigator.locks?.request) navigator.locks.request(LS_KEY, commit).catch(commit);
    else commit();
  }
  function blockStaleProgress() {
    if (progressConflict) return;
    progressConflict = true;
    queueMicrotask(() => {
      clearTimeout(timer); clearInterval(mockTimer);
      const box = document.createElement("div");
      box.className = "quitbox progress-conflict";
      box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true");
      box.setAttribute("aria-labelledby", "progress-conflict-title");
      box.innerHTML = `<div class="card"><h2 id="progress-conflict-title">Progress changed in another tab</h2><p>This tab has stopped saving so it cannot replace the newer progress. Reload to continue from the latest saved version.</p><p class="muted">You can first export this tab’s work as a separate backup. The two versions are not merged automatically.</p><div class="col"><button class="btn ghost" id="conflict-export">Export this tab’s work</button><button class="btn" id="conflict-reload">Reload latest progress</button></div></div>`;
      for (const child of document.body.children) child.inert = true;
      document.body.appendChild(box);
      $("#conflict-export").addEventListener("click", exportProgress);
      $("#conflict-reload").addEventListener("click", () => location.reload());
      $("#conflict-reload").focus();
    });
  }
  addEventListener("storage", e => {
    if ((e.key === LS_KEY || e.key === null) && e.newValue !== storedProgress) blockStaleProgress();
  });

  // ---------- UI state ----------
  const ui = { tab: "learn", overlay: null, lexFilter: "all", lexQuery: "", confirmReset: false };
  const TABS = [{ id: "learn", label: "Learn", icon: I.scales }, { id: "lex", label: "Field guide", icon: I.book }, { id: "me", label: "Me", icon: I.bench }];
  function setTab(id) { if (id !== ui.tab) track("tab_viewed", { tab: id }); ui.tab = id; if (location.hash !== `#${id}`) history.replaceState(null, "", `#${id}`); render(); scrollTo(0, 0); }
  addEventListener("hashchange", () => { const h = location.hash.slice(1); if (TABS.some((t) => t.id === h) && h !== ui.tab) { ui.tab = h; render(); } });
  const app = () => $("#app");

  function topbar() {
    const t = today(), st = E.liveStreak(S, t), active = S.lastDay === t;
    return `<header class="topbar">
      <div class="topbar-main">
      <div class="wordmark">Oikos<small>FOLLOW THE INCENTIVE</small></div>
      <div class="stats">
        <span class="stat flame ${active ? "" : "cold"}" title="${active ? "Your streak is safe for today" : "Do one sitting to keep the streak"}">${I.flame}<span>${st}</span></span>
        <span class="stat" title="Streak freezes (streak freezes)" style="color:var(--brand)">${I.shield}<span>${S.freezes}</span></span>
        <span class="stat xp" title="Practice XP">${I.clock}<span>${S.xp}</span></span>
      </div>
      </div>
      ${ghLink("gh", "topbar", `${I.github}<span class="gh-label">${I.star}<span class="gh-text">Star</span></span>`, "Star Oikos on GitHub")}
    </header>`;
  }
  function tabbar() {
    return `<nav class="tabbar" aria-label="Sections"><div class="tabbar-inner">${TABS.map((t) => `<button class="tab" data-tab="${t.id}" ${ui.tab === t.id ? 'aria-current="page"' : ""}>${t.icon}<span>${t.label}</span></button>`).join("")}</div></nav>`;
  }
  function siteNote() { return `<footer class="sitenote">${sisterNote()}<p><b>${FREE_NOTE}</b></p>${ghLink("btn ghost gh-cta", "footer", `${I.github}<span>Star it on GitHub</span>`)}<p class="sitenote-sub">A star helps other people find it.</p><p>Economics and incentives, with ethics in every unit. Models state their assumptions; cases and quantities are fictional. Every card links its sources. XP measures practice, not your character.</p></footer>`; }

  function render() {
    if (!S.onboarded) { app().innerHTML = topbar() + onboarding(); bindOnboarding(); return; }
    const body = { learn: learnView, lex: lexView, me: meView }[ui.tab]();
    app().innerHTML = topbar() + `<main class="view">${body}${siteNote()}</main>` + tabbar();
    bindCommon();
  }

  // ---------- onboarding ----------
  function onboarding() {
    return `<div class="onboard">
      ${mascot("cheer")}
      <h1>Oikos</h1>
      <p class="tag-line">Follow the incentive. See the whole cost.</p>
      <p class="lede">I'm Pip. Let's explore what gets rewarded, who bears hidden costs, and how the rules change our choices. Short sittings, fresh situations, and room to get it wrong. No hearts, no penalties, and weekends never break a streak.</p>
      <div class="card col">
        <h3><label for="ob-name">What should I call you?</label></h3>
        <input type="text" id="ob-name" placeholder="Your name" value="${esc(S.name)}" autocomplete="given-name" maxlength="30">
        <h3>How much each day?</h3>
        <div class="goalopts">${E.GOALS.map((g) => `<button class="goalopt" data-goal="${g.xp}" aria-pressed="${S.goal === g.xp}"><b>${g.label}</b><small>${g.sub}</small></button>`).join("")}</div>

      </div>
      <button class="btn block gold" id="ob-go">Start exploring</button>
      <p class="muted" style="text-align:center;font-size:13px;font-weight:700">Try a guess. Learn the idea. Use it in a different situation. We'll bring it back before it fades.</p>
      <footer class="sitenote"><p>${FREE_NOTE}</p>${ghLink("btn ghost gh-cta", "onboarding", `${I.github}<span>The code on GitHub</span>`)}</footer>
    </div>`;
  }
  function bindOnboarding() {
    $$("[data-goal]").forEach((b) => b.addEventListener("click", () => { S.goal = +b.dataset.goal; S.name = $("#ob-name").value.trim(); render(); }));
    $$("[data-exam]").forEach((b) => b.addEventListener("click", () => { S.examDate = b.dataset.exam; S.name = $("#ob-name").value.trim(); render(); }));
    $$("[data-gh]").forEach((a) => a.addEventListener("click", () => track("github_clicked", { where: a.dataset.gh })));
    $("#ob-go").addEventListener("click", () => { S.name = $("#ob-name").value.trim(); S.onboarded = true; save(); track("onboarding_completed", { goal: S.goal, exam_date: S.examDate }); render(); const n = E.nextNode(IX, S); if (n) startNode(n); });
  }

  // ---------- docket (learn) tab ----------
  function ruleOfDay() {
    const pool = IX.byKind.rule.length ? IX.byKind.rule : IX.byKind.term;
    if (!pool.length) return null;
    return pool[(Math.abs(E.daysBetween("2026-01-01", today())) * 7) % pool.length];
  }
  const greetings = ["Ready for a little practice?", "Who gains? Who pays? What changes?", "Change a rule. Notice what follows.", "Every rule rewards something. Let’s find out what."];
  function learnView() {
    const t = today();
    const todayXp = S.days[t] || 0;
    const pct = Math.min(1, todayXp / S.goal);
    const C = 2 * Math.PI * 24;
    const next = E.nextNode(IX, S);
    const due = E.dueItems(S, t).length;
    const learned = Object.keys(S.items).length;
    const daily = S.dailies[t];
    const rod = ruleOfDay();
    const name = S.name ? `${S.name}, ` : "";
    const late = new Date().getHours() >= 23;
    const greet = todayXp >= S.goal ? `${name}today's goal is complete. Nicely done.` : S.lastDay === t ? `${name}welcome back. Ready for another little practice?` : `${name}${name ? (g => g.charAt(0).toLowerCase() + g.slice(1))(pick(greetings)) : pick(greetings)}`;
    const nb = E.notebookItems(S).length;
    const mockOpen = (Object.keys(S.done).length >= 1 || Object.keys(S.sittings).length >= 1) && learned >= 10; // one finished sitting is enough: a lesson can take 2-3
    const sessionOpen = Object.keys(S.done).filter((k) => k.endsWith("-review")).length >= 4;
    return `
      <section class="hero">${mascot(late ? "sleepy" : todayXp >= S.goal ? "cheer" : "happy")}<div class="bubble">${esc(greet.charAt(0).toUpperCase() + greet.slice(1))}</div></section>
      <section class="card goalring">
        <svg viewBox="0 0 58 58" aria-hidden="true"><circle class="track" cx="29" cy="29" r="24" fill="none" stroke-width="8"/><circle class="fill" cx="29" cy="29" r="24" fill="none" stroke-width="8" stroke-linecap="round" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - pct)).toFixed(1)}"/></svg>
        <div style="flex:1;min-width:0"><div class="eyebrow">Today's goal</div><h3 class="tnum">${todayXp} / ${S.goal} XP</h3><p class="muted" style="font-weight:700;font-size:14px">${E.isWeekend(t) ? "Weekend: optional, the streak is safe." : "Weekends never break the streak."}</p></div>
        ${next ? `<button class="btn" data-start="${next.id}">${Object.keys(S.done).length || Object.keys(S.sittings).length ? "Continue" : "Start"}</button>` : ""}
      </section>
      <section class="quick">
        <button class="tile ${daily ? "done" : ""}" data-act="daily"><span style="color:var(--brand)">${I.cal}</span><b>Daily practice</b><span>${daily ? `today: ${daily.score}/${daily.total}` : `${esc(E.subjectLabel(E.dailySubject(t)))} · 5 situations`}</span></button>
        <button class="tile" data-act="practice" ${learned < 3 ? "disabled" : ""}><span style="color:var(--ok)">${I.redo}</span><b>Review</b><span>${learned < 3 ? "Opens after your first sitting" : due ? `${plural(due, "card", "cards")} due today` : "Strengthen the weak boxes"}</span></button>
        <button class="tile" data-act="cross"><span style="color:var(--flame)">${I.mic}</span><b>Quick thinking</b><span>15 s a question · best ${S.crossExamBest}</span></button>
        <button class="tile" data-act="mock" ${mockOpen ? "" : "disabled"}><span style="color:var(--brass-deep)">${I.paper}</span><b>Mixed challenge</b><span>${mockOpen ? "25 situations · take your time" : "Opens after your first sitting and 10 cards"}</span></button>
        <button class="tile" data-act="swipe"><span style="color:var(--brand)">${I.cards}</span><b>Flash review</b><span>Think, reveal, then self-check</span></button>
        <button class="tile" data-act="notebook" ${!nb ? "disabled" : ""}><span style="color:var(--bad)">${I.book}</span><b>Try again</b><span>${nb ? plural(nb, "card", "cards") + " in the notebook" : "Cards missed twice land here"}</span></button>
        ${sessionOpen ? `<button class="tile" data-act="session"><span style="color:var(--brass-deep)">${I.bench}</span><b>Long challenge</b><span>100 situations · take your time</span></button>` : ""}
      </section>
      <section class="quick"><button class="tile" data-act="labs"><span style="color:var(--brand)">${I.scales}</span><b>Rule labs</b><span>Six experiments · change the rules</span></button><button class="tile" data-act="sources"><span style="color:var(--brass-deep)">${I.book}</span><b>Behind the lessons</b><span>Sources, evidence, and limits</span></button></section>
      ${rod ? `<section class="card wotd col" style="gap:6px">
        <div class="eyebrow">Idea of the day${rod.cite ? ` · ${esc(rod.cite)}` : ""}</div>
        <div class="big">${esc(rod.title || rod.term)}</div>
        <p style="font-weight:800">${esc(rod.say)}</p>
        ${rod.elements ? `<p class="muted" style="font-weight:700">${rod.elements.map(esc).join(" · ")}</p>` : rod.meaning ? `<p class="muted" style="font-weight:700">${esc(rod.meaning)}</p>` : ""}
      </section>` : ""}
      ${coursePath()}`;
  }

  /** The family path: one milestone per unit, a stone per lesson, a roundup last. */
  function coursePath() {
    if (!IX.course.units.length) return `<section class="card empty">${mascot("sad")}<h3>The course could not load</h3><p class="muted">Please reload to try again.</p></section>`;
    const nodes = E.pathNodes(IX);
    const next = E.nextNode(IX, S);
    return `<section class="via"><h2>Your path through Oikos</h2>${IX.course.units.map((u, i) => {
      const uNodes = nodes.filter((n) => n.unitId === u.id);
      const pr = E.unitProgress(IX, S, u.id);
      const started = pr.done > 0 || uNodes.some((n) => S.sittings[n.id]);
      const focus = S.focus && u.subject === S.focus;
      return `<div class="milestone">
        <div class="mile ${pr.done === pr.total ? "done" : started ? "open" : ""}" title="Unit ${i + 1}">${i + 1}</div>
        <div class="ucard ${focus ? "focus" : ""}">
          <div class="row" style="justify-content:space-between;align-items:flex-start"><h2>${esc(u.title)}</h2><div class="exam-tags"><span class="tag">${esc(E.subjectLabel(u.subject))}</span>${focus ? '<span class="tag focus">this week</span>' : ""}</div></div>
          <p>${esc(u.blurb)}</p>
          <div class="ubar"><i style="width:${pr.total ? (pr.done / pr.total) * 100 : 0}%"></i></div>
          <div class="stones">${uNodes.map((n) => {
            const done = !!S.done[n.id]; const open = E.isUnlocked(IX, S, n.id); const cur = next && next.id === n.id;
            const sits = n.kind === "lesson" ? E.lessonSittings(IX, n.id).length : 1; const did = S.sittings[n.id] || 0;
            return `<button class="stone ${n.kind === "roundup" ? "boss" : ""} ${done ? "done" : open ? "" : "locked"} ${cur ? "current" : ""}" ${open ? `data-start="${n.id}"` : "disabled"} title="${esc(n.title)}" aria-label="${esc(n.title)}${done ? " (done)" : open ? "" : " (locked)"}">${done ? I.check.replace('aria-hidden="true"', 'aria-hidden="true" width="22" height="22"') : n.letter}${sits > 1 && !done ? `<span class="sit">${did}/${sits}</span>` : ""}</button>`;
          }).join("")}</div>
        </div></div>`;
    }).join("")}</section>`;
  }

  // ---------- outline tab ----------
  const LEX_FILTERS = [["all", "All"], ["rule", "Principles"], ["hypo", "Situations"], ["term", "Terms"], ["steps", "Sequences"], ["pairs", "Connections"], ["sort", "Distinctions"], ["trap", "Traps"], ["notebook", "Try again"], ["learned", "Seen"]];
  function lexView() {
    const q = E.norm(ui.lexQuery);
    const nb = new Set(E.notebookItems(S));
    const items = [...IX.items.values()].filter((it) => {
      const f = ui.lexFilter;
      if (["rule", "hypo", "term", "steps", "pairs", "sort", "trap"].includes(f) && (f === "hypo" ? !["hypo", "argue"].includes(it.kind) : it.kind !== f)) return false;
      if (f === "notebook" && !nb.has(it.id)) return false;
      if (f === "learned" && !S.items[it.id]) return false;
      return !q || E.norm(JSON.stringify(it)).includes(q);
    });
    return `
      <section class="col" style="gap:6px"><div class="eyebrow">Field guide</div><h1>Everything Oikos teaches</h1><p class="muted" style="font-weight:700">Principles, useful distinctions, and the situations that test them. Every card shows its source and the kind of claim it makes.</p></section>
      <input class="search" id="lex-q" type="search" placeholder="Search: incentives, tax, shared resources…" value="${esc(ui.lexQuery)}" aria-label="Search">
      <div class="chips" role="group" aria-label="Filter">${LEX_FILTERS.map(([k, l]) => `<button class="fchip" data-filter="${k}" aria-pressed="${ui.lexFilter === k}">${l}</button>`).join("")}</div>
      <section class="lex">${items.length ? items.slice(0, ui.lexLimit || 40).map(lexCard).join("") : `<div class="card empty">${mascot("sad")}<p class="muted">Nothing found. Try another word.</p></div>`}${items.length > (ui.lexLimit || 40) ? `<button class="btn ghost block" id="lex-more">Show more (${items.length - (ui.lexLimit || 40)} remaining)</button>` : ""}</section>`;
  }
  function statusPill(it) {
    const labels = { model: "Conditional model", evidence: "Research finding", practice: "Practice guidance", ethics: "Ethical commitment", fictional: "Fictional case" };
    return `<span class="pill">${esc(labels[it.status] || "Practice guidance")}</span>${S.items[it.id] ? '<span class="pill learned">seen</span>' : ""}`;
  }
  function sourceCredit(it) {
    const names = [...new Set((it.sourceIds || []).map(id => OIKOS_SOURCES.find(s => s.id === id)?.publisher).filter(Boolean))];
    return names.slice(0, 2).join(" · ") + (names.length > 2 ? ` · +${names.length - 2} sources` : "");
  }
  function sourceLinks(ids) {
    const sources = (ids || []).map(id => OIKOS_SOURCES.find(s => s.id === id)).filter(Boolean);
    return sources.length ? `<details class="sources"><summary>Sources and limits</summary>${sources.map(s => `<p><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a><br><small>${esc(s.publisher)}. ${esc(s.note)}</small></p>`).join("")}</details>` : "";
  }
  function lexCard(it) {
    const head = it.kind === "rule" ? `<b>${esc(it.title)}</b>${it.cite ? `<span class="m">${esc(it.cite)}</span>` : ""}`
      : it.kind === "hypo" || it.kind === "argue" ? `<b style="font-size:17px">${esc(it.issue || it.call)}</b><span class="m">${esc(E.subjectLabel(it.subject))} · ${esc(it.call)}</span>`
      : it.kind === "case" ? `<b>${esc(it.name)}</b><span class="m">${it.year}</span>`
      : it.kind === "term" ? `<b class="serif">${esc(it.term)}</b><span class="m">${esc(it.meaning)}</span>`
      : it.kind === "num" ? `<b style="font-size:17px">${esc(it.ask)}</b><span class="m">${esc(it.answer)}</span>`
      : it.kind === "steps" ? `<b>${esc(it.title)}</b><span class="m">${it.steps.length} steps</span>`
      : it.kind === "pairs" ? `<b>${esc(it.set || "Match set")}</b><span class="m">${it.pairs.length} pairs</span>`
      : it.kind === "sort" ? `<b>${esc(it.q)}</b><span class="m">${it.buckets.join(" / ")}</span>`
      : `<b style="font-size:16px">${esc(it.stem)}</b><span class="m"><span class="struck">${esc(it.wrong)}</span> → ${esc(it.right)}</span>`;
    const body = it.kind === "rule" ? `<p class="ex">${it.elements.map(esc).join(" · ")}</p>` : it.kind === "case" ? `<p class="ex">${esc(it.holding)}</p>` : "";
    const detail = ["hypo", "argue"].includes(it.kind)
      ? `<p>${esc(it.stem)}</p><p><b>${esc(it.call)}</b></p><ol>${it.options.map((o, i) => `<li><b>${i === it.answer ? "Best response: " : ""}${esc(o.text)}</b><br>${esc(o.why)}</li>`).join("")}</ol>`
      : it.kind === "steps" ? `<ol>${it.steps.map(x => `<li>${esc(x)}</li>`).join("")}</ol>`
      : it.kind === "pairs" ? `<dl>${it.pairs.map(x => `<dt><b>${esc(x.l)}</b></dt><dd>${esc(x.r)}</dd>`).join("")}</dl>`
      : it.kind === "sort" ? `<ul>${it.items.map(x => `<li>${esc(x.text)}<br><b>${esc(x.bucket)}</b>: ${esc(x.why)}</li>`).join("")}</ul>` : "";
    return `<article class="card lexcard"><div class="lexhead">${head}</div>${body}${it.say !== it.meaning ? `<p class="say">${esc(it.say)}</p>` : ""}${detail ? `<details class="sources"><summary>Read the example</summary>${detail}</details>` : ""}${it.hook ? `<p class="ex">${esc(it.hook)}</p>` : ""}<div class="row" style="justify-content:space-between;flex-wrap:wrap"><div class="pills">${statusPill(it)}</div><span class="muted" style="font-size:12px;font-weight:700">${esc(sourceCredit(it))}</span></div>${sourceLinks(it.sourceIds)}</article>`;
  }

  // ---------- chambers (me) tab ----------
  function meView() {
    const t = today();
    const learned = Object.keys(S.items).length;
    const acc = S.answered ? Math.round((S.correct / S.answered) * 100) : 0;
    const total = IX.items.size;
    const lastMock = S.mocks[S.mocks.length - 1];
    const rk = E.rankOf(S);
    const traps = E.topTraps(S, t);
    const subjectOpts = [["", "Explore every topic"]].concat(E.SUBJECTS.map((s) => [s.id, s.label]));
    return `
      <section class="hero">${mascot()}<div class="bubble">${learned ? `You have met ${learned} of ${total} cards.` : "Do one lesson to start the collection."}${lastMock ? ` Last challenge: ${Math.round(lastMock.score)}/${lastMock.total}.` : ""}</div></section>
      <section class="card rank"><div><div class="eyebrow">Rank</div><h2 class="serif">${esc(rk.rank.name)}</h2><p class="muted" style="font-weight:700;font-size:14px">${rk.next ? `${rk.toNext === 1 ? "1 XP" : `${rk.toNext} XP`} to ${esc(rk.next.name)}` : "Keep putting the ideas into practice."}</p></div><div><div class="eyebrow">XP this week</div><h2 class="tnum">${E.fmtMinutes(E.weekXp(S, t))}</h2></div></section>
      <section class="grid2">
        ${[["Practice XP", S.xp], ["Best streak", plural(S.bestStreak, "day", "days")], ["Practice accuracy", `${acc}%`], ["Quick thinking", S.crossExamBest], ["Daily practices", Object.keys(S.dailies).length], ["Mixed challenges", S.mocks.length]].map(([h, v]) => `<div class="card"><div class="eyebrow">${h}</div><h2 class="tnum">${v}</h2></div>`).join("")}
      </section>
      ${traps.length ? `<section class="card col" style="gap:6px"><div class="eyebrow">Your top trap this week</div><h3>${esc(E.TRAP_TYPES[traps[0][0]])} (${traps[0][1]})</h3><p class="muted" style="font-weight:700;font-size:14px">${traps.slice(1, 4).map(([k, n]) => `${esc(E.TRAP_TYPES[k])} (${n})`).join(" · ")}</p></section>` : ""}
      <section class="col"><h2>Badges</h2><div class="badges">${E.BADGES.map((b) => `<div class="badge ${S.badges[b.id] ? "" : "off"}">${seal(b.name[0])}<b>${esc(b.name)}</b><span>${esc(b.desc)}</span></div>`).join("")}</div></section>
      <section class="card">
        <div class="setting"><div><label for="set-name">Name</label><small>How Pip greets you</small></div><input type="text" id="set-name" value="${esc(S.name)}" maxlength="30"></div>
        <div class="setting" style="flex-direction:column;align-items:stretch"><label>Daily goal</label><div class="goalopts">${E.GOALS.map((g) => `<button class="goalopt" data-goal="${g.xp}" aria-pressed="${S.goal === g.xp}"><b>${g.label}</b><small>${g.sub}</small></button>`).join("")}</div></div>
        <div class="setting"><div><label for="set-focus">This week I'm on</label><small>Steers Continue and the flash cards</small></div><select id="set-focus">${subjectOpts.map(([v, l]) => `<option value="${v}" ${S.focus === v ? "selected" : ""}>${esc(l)}</option>`).join("")}</select></div>
        <div class="setting"><div><label for="set-sound">Sounds</label><small>Optional chimes and celebration</small></div><input type="checkbox" class="switch" id="set-sound" ${S.sound ? "checked" : ""}></div>
        <div class="setting"><div><label>Streak freezes: ${S.freezes}</label><small>One free each week; another every 7-day streak (up to 2). A missed weekday uses one.</small></div></div>
        <div class="setting"><div><label for="set-theme">Appearance</label><small>Match your device, or choose a theme</small></div><select id="set-theme"><option value="system" ${!S.theme || S.theme === 'system' ? 'selected' : ''}>System</option><option value="light" ${S.theme === 'light' ? 'selected' : ''}>Light</option><option value="dark" ${S.theme === 'dark' ? 'selected' : ''}>Dark</option></select></div>
        <div class="setting"><div><label>Progress backup</label><small>Save your practice and lab reflections</small></div><button class="btn ghost small" id="export">Export</button><button class="btn ghost small" id="import">Import</button><input id="import-file" type="file" accept="application/json" hidden></div>
        <div class="setting"><div><label>Rule labs</label><small>${Object.keys(S.labs || {}).length} explored · reflection, without a score</small></div><button class="btn ghost small" data-act="labs">Open</button></div>
        <div class="setting"><div><label>Start over</label><small>Erases the progress on this device</small></div>${ui.confirmReset ? `<div class="row"><button class="btn clay small" id="reset-yes">Erase</button><button class="btn ghost small" id="reset-no">Keep</button></div>` : `<button class="btn ghost small" id="reset">Reset</button>`}</div>
      </section>`;
  }

  // ---------- wiring ----------
  function bindCommon() {
    const root = app();
    $$("[data-gh]", root).forEach((a) => a.addEventListener("click", () => track("github_clicked", { where: a.dataset.gh })));
    $$("[data-sister]", root).forEach((a) => a.addEventListener("click", () => track("sister_app_clicked", { to: a.dataset.sister })));
    $$("[data-tab]", root).forEach((b) => b.addEventListener("click", () => setTab(b.dataset.tab)));
    $$("[data-start]", root).forEach((b) => b.addEventListener("click", () => startNode(E.pathNodes(IX).find((n) => n.id === b.dataset.start))));
    $$("[data-goal]", root).forEach((b) => b.addEventListener("click", () => { const from = S.goal; S.goal = +b.dataset.goal; if (from !== S.goal) track("goal_changed", { from_xp: from, to_xp: S.goal }); save(); render(); }));
    $$("[data-exam]", root).forEach((b) => b.addEventListener("click", () => { S.examDate = b.dataset.exam; track("setting_changed", { setting: "exam_date", value: S.examDate }); save(); render(); }));
    $$("[data-filter]", root).forEach((b) => b.addEventListener("click", () => { ui.lexFilter = b.dataset.filter; ui.lexLimit = 40; render(); }));
    const act = (a, fn) => { const el = root.querySelector(`[data-act="${a}"]`); if (el) el.addEventListener("click", fn); };
    act("practice", () => startRun("practice"));
    act("notebook", () => startRun("notebook"));
    act("daily", () => startRun("daily"));
    act("swipe", () => startRun("swipe"));
    act("cross", () => startCross());
    act("mock", () => startMock(25));
    act("session", () => startMock(100));
    act("labs", openLabs);
    act("sources", openSources);
    const more = $("#lex-more"); if (more) more.addEventListener("click", () => { ui.lexLimit = (ui.lexLimit || 40) + 40; const y = scrollY; render(); scrollTo(0, y); });
    const q = $("#lex-q");
    if (q) q.addEventListener("input", (e) => { clearTimeout(ui.lexTimer); const v = e.target.value.trim(); ui.lexTimer = setTimeout(() => { if (v) track("outline_searched", { query: v.slice(0, 40), filter: ui.lexFilter || null }); }, 1200); ui.lexQuery = e.target.value; ui.lexLimit = 40; const pos = e.target.selectionStart; render(); const n = $("#lex-q"); n.focus(); n.setSelectionRange(pos, pos); });
    const on = (id, ev, fn) => { const el = $(id); if (el) el.addEventListener(ev, fn); };
    on("#set-name", "change", (e) => { S.name = e.target.value.trim(); save(); });
    on("#set-exam", "change", (e) => { if (/^\d{4}-\d{2}-\d{2}$/.test(e.target.value)) { track("setting_changed", { setting: "exam_date", value: e.target.value }); S.examDate = e.target.value; save(); render(); } });
    on("#set-sits", "change", (e) => { S.sits = e.target.value === "nextgen" ? "nextgen" : "mbe"; track("setting_changed", { setting: "sits", value: S.sits }); save(); });
    on("#set-focus", "change", (e) => { S.focus = e.target.value; track("setting_changed", { setting: "focus", value: S.focus || null }); save(); });
    on("#set-sound", "change", (e) => { S.sound = e.target.checked; track("setting_changed", { setting: "sound", value: S.sound }); save(); });
    on("#set-theme", "change", e => { S.theme = e.target.value; applyTheme(); save(); });
    on("#export", "click", exportProgress);
    on("#import", "click", () => $("#import-file").click());
    on("#import-file", "change", importProgress);
    on("#reset", "click", () => { ui.confirmReset = true; render(); });
    on("#reset-no", "click", () => { ui.confirmReset = false; render(); });
    on("#reset-yes", "click", () => { track("progress_reset", progressProps()); const keep = { sound: S.sound, name: S.name }; S = Object.assign(E.freshState(), keep); ui.confirmReset = false; applyTheme(); save(); render(); });
  }

  // ---------- runner ----------
  let run = null;
  function later(fn, ms) {
    const owner = run, step = run?.i;
    return setTimeout(() => { if (!progressConflict && run === owner && run?.i === step && $(".lesson")) fn(); }, ms);
  }
  function startNode(node) {
    if (!node) return;
    if (node.kind === "roundup") startRun("roundup", node);
    else startRun("lesson", node);
  }
  function startRun(mode, node = null) {
    const sd = seed();
    let steps = [], meta = {};
    if (mode === "lesson") { const sit = S.sittings[node.id] || 0; const total = E.lessonSittings(IX, node.id).length; steps = E.buildLesson(IX, S, node.id, sd, Math.min(sit, total - 1)); meta = { sitting: Math.min(sit, total - 1), sittings: total }; }
    else if (mode === "roundup") steps = E.buildRoundup(IX, S, node.unitId, sd);
    else if (mode === "practice") steps = E.buildPractice(IX, S, sd);
    else if (mode === "notebook") { const r = E.rng(sd); steps = E.notebookItems(S).map((id) => IX.items.get(id)).filter(Boolean).slice(0, 10).map((it) => E.qReview(IX, it, r, S)).filter(Boolean); }
    else if (mode === "daily") { const d = E.buildDaily(IX, S, today()); steps = d.steps; meta = { daily: d }; }
    else if (mode === "swipe") { const sw = E.buildSwipe(IX, S, sd); steps = sw ? [sw] : []; }
    if (!steps.length) { toast("Nothing to do here yet"); return; }
    track("lesson_started", { mode, node_id: node ? node.id : null, unit_id: node ? node.unitId || null : null, steps: steps.length });
    run = { mode, node, steps, i: 0, misses: 0, combo: 0, maxCombo: 0, right: 0, scored: 0, requeued: new Set(), answered: false, start: Date.now(), results: [], ...meta };
    ui.overlay = "lesson";
    if (mode === "daily") introScreen(`Daily practice · ${esc(meta.daily.title)}`, `${plural(steps.length, "question", "questions")} on one topic. Take your time. The same set stays available today; answers are explained as you go.`, "Begin");
    else drawStep();
  }
  function introScreen(title, text, btn, mood = "happy") {
    shell(`<div class="results">${mascot(mood)}<h1>${title}</h1><p class="story" style="max-width:38ch">${text}</p></div>`, footerBtn(btn, "gold"));
    $("#next").addEventListener("click", drawStep);
  }
  function closeRun() {
    run = null; ui.overlay = null;
    const o = $(".lesson"); if (o) o.remove();
    const qb = $(".quitbox"); if (qb) qb.remove();
    document.body.classList.remove("run-open");
    app().inert = false;
    clearTimeout(timer); clearInterval(mockTimer);
    render();
    $(`[data-tab="${ui.tab}"]`)?.focus({ preventScroll: true });
  }
  /** X or Escape. A run with graded answers asks first; Quick thinking and an untouched run just close. */
  function dismissQuit() {
    $(".quitbox")?.remove();
    const lesson = $(".lesson");
    if (lesson) { lesson.inert = false; $("#quit")?.focus(); }
    else app().inert = false;
  }
  function requestClose() {
    const quitProps = () => ({ ...runProps(), at_step: run.i, answered: run.scored, right: run.right, seconds: Math.round((Date.now() - run.start) / 1000) });
    const untouched = !run || run.mode === "lab" || run.mode === "library" ? true : run.mode === "mock" ? !run.choices.some((c) => c != null) : run.scored === 0;
    if (run && !run.finished && run.mode !== "cross" && untouched) track("lesson_quit", quitProps());
    if (!run || run.finished || run.mode === "cross" || untouched) return closeRun();
    if ($(".quitbox")) return;
    const box = document.createElement("div");
    box.className = "quitbox"; box.setAttribute("role", "alertdialog"); box.setAttribute("aria-label", "Leave the sitting"); box.setAttribute("aria-modal", "true"); $(".lesson").inert = true;
    box.innerHTML = `<div class="card"><p>${run.mode === "mock" ? "Leave the challenge? Nothing is scored until you submit." : "Leaving? What you answered counts for review, but the sitting stays unfinished."}</p><div class="row"><button class="btn ghost" id="quit-stay">Stay</button><button class="btn clay" id="quit-go">Leave</button></div></div>`;
    document.body.appendChild(box);
    $("#quit-stay").addEventListener("click", dismissQuit);
    $("#quit-go").addEventListener("click", () => { track("lesson_quit", quitProps()); save(); closeRun(); });
    box.addEventListener("click", (e) => { if (e.target === box) dismissQuit(); });
    $("#quit-stay").focus();
  }
  function shell(inner, footer = "") {
    let o = $(".lesson");
    if (!o) { o = document.createElement("div"); o.className = "lesson"; o.setAttribute("role", "dialog"); o.setAttribute("aria-modal", "true"); o.setAttribute("aria-label", "Oikos practice"); app().inert = true; document.body.appendChild(o); document.body.classList.add("run-open"); }
    const prog = run.mode === "cross" ? 100 : run.steps.length ? (run.i / run.steps.length) * 100 : 0;
    const top = run.mode === "cross" ? `<div style="flex:1;font-weight:900">Quick thinking · <span class="tnum">${run.right}</span> ${run.right === 1 ? "answer" : "answers"}</div>`
      : ["library", "lab"].includes(run.mode) ? `<div style="flex:1;font-weight:900">${run.mode === "lab" ? "Rule lab · no timer" : "Explore"}</div>`
      : run.mode === "mock" ? `<div class="progress" aria-hidden="true"><i style="width:${prog}%"></i></div><span class="combo tnum" id="mock-clock">${run.finished ? "" : `${run.i + 1}/${run.steps.length}`}</span>`
      : `<div class="progress" aria-hidden="true"><i style="width:${prog}%"></i></div><span class="combo">${run.combo >= 3 ? `${I.flame.replace("<svg", '<svg width="14" height="14"')} ${run.combo}` : ""}</span>`;
    o.innerHTML = `<div class="lesson-inner">
        <div class="lesson-top"><button class="xbtn" id="quit" aria-label="Leave">${I.x}</button>${top}</div>
        ${run.mode === "cross" ? '<div class="timer"><i id="timer"></i></div>' : ""}
        <div class="stage" id="stage" tabindex="-1">${inner}</div>
      </div><div class="footer" id="footer">${footer}</div>`;
    $("#quit").addEventListener("click", requestClose);
    $("#stage").focus({ preventScroll: true });
    return o;
  }
  const footerBtn = (label, cls = "", id = "next", disabled = false) => `<div class="footer-inner"><button class="btn block ${cls}" id="${id}" ${disabled ? "disabled" : ""}>${label}</button></div>`;

  function drawStep() {
    if (run.i >= run.steps.length) return finishRun();
    run.answered = false;
    const q = run.steps[run.i];
    run.stepAt = Date.now();
    track("lesson_step_viewed", { ...runProps(), ...stepProps(q) });
    const draw = { intro: drawIntro, mcq: drawMcq, tf: drawTf, hypo: drawHypo, grid: drawGrid, build: drawBuild, match: drawMatch, bucket: drawBucket, find: drawFind, spot: drawSpot, type: drawType, swipe: drawSwipe }[q.type];
    if (draw) draw(q); else advance();
  }
  function advance() { run.i += 1; drawStep(); }
  function header(q) {
    const marks = q.marks && run.mode !== "mock" ? `<span class="marks">${q.subject ? esc(E.subjectLabel(q.subject)) : ""}</span>` : "";
    return `<div class="qlabel ${q.guess ? "guess" : ""}">${esc(q.label)}${q.guess ? " · no penalty" : ""}${marks}</div>`;
  }
  /** Highlight a phrase inside text (case-insensitive, first match). */
  function hl(text, w) {
    if (!w) return esc(text);
    const i = text.toLowerCase().indexOf(String(w).toLowerCase());
    if (i < 0) return esc(text);
    return `${esc(text.slice(0, i))}<span class="hl">${esc(text.slice(i, i + w.length))}</span>${esc(text.slice(i + w.length))}`;
  }
  const wordBlock = (q) => (q.word ? `<div class="bigword ${q.word.length > 18 ? "sentence" : ""}">${hl(q.word, q.hl)}</div>${q.sub ? `<div class="sub">${esc(q.sub)}</div>` : ""}` : "") + (q.stem ? `<div class="stemblock">${esc(q.stem)}</div>` : "");

  // ---------- intro cards ----------
  function drawIntro(q) {
    const pills = (arr) => `<div class="pills">${arr.filter(Boolean).map((p) => `<span class="pill">${esc(p)}</span>`).join("")}</div>`;
    let inner = "";
    if (q.kind === "assume") {
      const u = IX.unitOf(q.unitId);
      inner = `<div class="qlabel">The setting · ${esc(E.subjectLabel(u.subject))}</div><h1>${esc(u.title)}</h1><div class="rulebox"><b>Assume:</b> ${esc(u.assume)}</div><p class="story">${esc(u.blurb)}</p>`;
      shell(`<div class="intro">${inner}</div>`, footerBtn("Noted"));
      $("#next").addEventListener("click", advance); $("#next").focus();
      return;
    }
    const it = IX.items.get(q.itemId);
    E.learn(S, it.id, today());
    const k = it.kind;
    const prov = [it.assume ? `Assume: ${it.assume}` : null];
    if (k === "rule") {
      const split = it.split ? Object.entries(it.split).filter(([key]) => E.SPLIT_LABELS[key]).map(([key, v]) => `<div class="ex"><b>${esc(E.SPLIT_LABELS[key])}</b><span>${esc(v)}</span></div>`).join("") : "";
      inner = `<div class="qlabel">Principle${it.cite ? ` · ${esc(it.cite)}` : ""}</div><h1>${esc(it.title)}</h1><p class="story" style="font-weight:800">${esc(it.say)}</p>
        <div class="rulebox"><b>${it.ordered === false ? "Keep in view" : "Steps, in order"}:</b><${it.ordered === false ? "ul" : "ol"} class="steplist" style="margin-top:6px">${it.elements.map((e) => `<li>${esc(e)}</li>`).join("")}</${it.ordered === false ? "ul" : "ol"}></div>
        ${(it.exceptions || []).length ? `<div class="trapbox"><b>Exceptions and limits:</b> ${it.exceptions.map(esc).join(" · ")}</div>` : ""}
        ${split ? `<div class="exlist">${split}</div>${it.splitNote ? `<p class="muted" style="font-weight:700">${esc(it.splitNote)}</p>` : ""}` : ""}
        ${(it.numbers || []).length ? `<div class="exlist">${it.numbers.map((n) => `<div class="ex"><b>${esc(n.value)}</b><span>${esc(n.label)}</span></div>`).join("")}</div>` : ""}
        <div class="exlist">${(it.ex || []).map((e) => `<div class="ex"><span>${esc(e.facts)}</span><b>${esc(e.result)}</b></div>`).join("")}</div>
        ${it.hook ? `<div class="hookbox">${amicusIcon}<span>${esc(it.hook)}</span></div>` : ""}${pills((it.terms || []).concat(prov))}`;
    } else if (k === "steps") {
      inner = `<div class="qlabel">A useful sequence</div><h1>${esc(it.title)}</h1><ol class="steplist">${it.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol><p class="story">${esc(it.say)}</p>${pills(prov)}`;
    } else if (k === "case") {
      inner = `<div class="qlabel">Case · ${esc(E.subjectLabel(it.subject))}</div><div class="headline"><span class="bigword sentence">${esc(it.name)}</span><span class="sub">${it.year}</span></div>
        <p class="meaning" style="font-size:19px">${esc(it.holding)}</p>${it.facts ? `<p class="story">${esc(it.facts)}</p>` : ""}
        ${it.overrules ? `<div class="trapbox"><b>Replaces:</b> ${esc(it.overrules)}</div>` : ""}${it.overruledBy ? `<div class="trapbox"><b>No longer good law:</b> replaced by ${esc(it.overruledBy)}</div>` : ""}
        <p class="muted" style="font-weight:800">In one breath: ${esc(it.say)}</p>${pills(prov)}`;
    } else if (k === "term") {
      const LANG = { latin: "Latin", french: "Law French", english: "Useful term" };
      inner = `<div class="qlabel">${esc(LANG[it.lang] || "Term")}</div><div class="headline"><span class="bigword">${esc(it.term)}</span>${it.literal ? `<span class="sub">literally: ${esc(it.literal)}</span>` : ""}</div>
        <p class="meaning">${esc(it.meaning)}</p>${it.use ? `<div class="rulebox"><b>Use it at work:</b> ${esc(it.use)}</div>` : ""}${it.hook && it.hook !== it.use ? `<div class="hookbox">${amicusIcon}<span>${esc(it.hook)}</span></div>` : ""}${it.pairWith ? `<p class="muted" style="font-weight:700">Contrast with: ${esc(it.pairWith)}</p>` : ""}${pills(prov)}`;
    } else if (k === "num") {
      inner = `<div class="qlabel">The number</div><p class="prompt">${esc(it.ask)}</p><div class="bigword">${esc(it.answer)}</div><p class="story">${esc(it.say)}</p>${pills(prov)}`;
    } else if (k === "trap") {
      inner = `<div class="qlabel">Trap · ${esc(E.TRAP_TYPES[it.cat] || E.SELF_TAGS[it.cat] || it.cat)}</div><div class="stemblock">${esc(it.stem)}</div><div class="answerbox"><span class="struck">${esc(it.wrong)}</span></div><div class="answerbox ok">${esc(it.right)}</div><p class="story">${esc(it.why)}</p>${pills(prov)}`;
    }
    shell(`<div class="intro">${inner}${it.say && ["term", "trap"].includes(k) && it.say !== it.meaning ? `<p class="muted" style="font-weight:800">In one breath: ${esc(it.say)}</p>` : ""}<p class="muted" style="font-size:12px;font-weight:700">${esc(sourceCredit(it))}</p>${statusPill(it)}${sourceLinks(it.sourceIds)}</div>`, footerBtn("Got it"));
    $("#next").addEventListener("click", advance);
    $("#next").focus();
  }

  // ---------- mcq / tf ----------
  function drawMcq(q) {
    const inner = `${header(q)}<p class="prompt">${q.prompt}</p>${wordBlock(q)}<div class="options" role="group">${q.options.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
    shell(inner, "");
    $$(".opt").forEach((b) => b.addEventListener("click", () => answerMcq(q, +b.dataset.i)));
    if (run.mode === "cross") startTimer(() => answerMcq(q, -1));
  }
  function answerMcq(q, idx) {
    if (run.answered) return;
    run.answered = true;
    const ok = idx >= 0 && q.options[idx] === q.answer;
    $$(".opt").forEach((b, i) => { b.disabled = true; if (q.options[i] === q.answer) b.classList.add("right"); else if (i === idx) b.classList.add("wrong"); else b.classList.add("dim"); });
    resolve(q, ok, idx < 0 ? "Time's up." : null);
  }
  function drawTf(q) {
    const inner = `${header(q)}<p class="prompt">${esc(q.prompt)}</p>${wordBlock(q)}<div class="tfrow"><button class="opt" data-v="1"><span class="k">1</span>${esc(q.yes)}</button><button class="opt" data-v="0"><span class="k">2</span>${esc(q.no)}</button></div>`;
    shell(inner, "");
    $$(".opt").forEach((b) => b.addEventListener("click", () => answerTf(q, b.dataset.v === "1", b)));
    if (run.mode === "cross") startTimer(() => answerTf(q, null, null));
  }
  function answerTf(q, v, btn) {
    if (run.answered) return;
    run.answered = true;
    const ok = v === q.answer;
    $$(".opt").forEach((b) => { b.disabled = true; if ((b.dataset.v === "1") === q.answer) b.classList.add("right"); else if (b === btn) b.classList.add("wrong"); });
    resolve(q, ok, v === null ? "Time's up." : null);
  }

  // ---------- applied scenario ----------
  function hypoMarkup(q, { silent = false, chosen = null } = {}) {
    return `${silent ? `<div class="qlabel">Question ${run.i + 1} of ${run.steps.length}</div>` : header(q)}
      ${q.assume ? `<div class="assume">Assume: ${esc(q.assume)}</div>` : ""}
      <div class="stemblock">${esc(q.stem)}</div>
      <p class="call">${esc(q.call)}</p>

      <div class="options hypo-opts" role="group" aria-label="Answer options">${q.options.map((o, i) => `<button class="opt ${chosen === i ? "chosen" : ""}" data-i="${i}" ${silent ? `aria-pressed="${chosen === i}"` : ""}><span class="k">${LETTERS[i]}</span><span>${esc(o.text)}</span></button>`).join("")}</div>`;
  }
  function drawHypo(q) {
    if (run.mode === "mock") return drawMockStep(q);
    shell(hypoMarkup(q), "");
    startPace();
    $$(".opt").forEach((b) => b.addEventListener("click", () => answerHypo(q, +b.dataset.i)));
  }
  function startPace() {
    const bar = $("#pace");
    if (!bar) return;
    bar.style.transition = "none"; bar.style.transform = "scaleX(1)";
    requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.transition = `transform ${E.HYPO_MS}ms linear`; bar.style.transform = "scaleX(0)"; }));
  }
  function revealOptions(q, idx) {
    $$(".opt").forEach((b, i) => {
      const o = q.options[i];
      b.disabled = true;
      if (o.text === q.answer) b.classList.add("right"); else if (i === idx) b.classList.add("wrong"); else b.classList.add("dim");
      if (o.why) b.insertAdjacentHTML("beforeend", `<span class="why">${o.trap ? `<b>${esc(E.TRAP_TYPES[o.trap] || "Distractor")}.</b> ` : ""}${esc(o.why)}</span>`);
    });
  }
  function answerHypo(q, idx) {
    if (run.answered) return;
    run.answered = true;
    const o = q.options[idx];
    const ok = o.text === q.answer;
    revealOptions(q, idx);
    resolve(q, ok, ok ? null : `${E.TRAP_TYPES[o.trap] ? E.TRAP_TYPES[o.trap] + "." : "Try again."}`, ok ? 1 : 0, { trap: o.trap || null, selfTag: !ok });
  }
  /** Verdict first, then the reason among the two options that share it. */
  function drawGrid(q) {
    if (run.mode === "mock") return drawMockStep(q);
    const inner = `${header(q)}${q.assume ? `<div class="assume">Assume: ${esc(q.assume)}</div>` : ""}<div class="stemblock">${esc(q.stem)}</div><p class="call">${esc(q.call)}</p>
      <p class="muted" style="font-weight:800">First the decision, then the reason.</p><div class="tfrow">${q.verdicts.map((v, i) => `<button class="opt" data-v="${i}"><span class="k">${i + 1}</span>${esc(v)}</button>`).join("")}</div>`;
    shell(inner, "");
    startPace();
    $$(".opt").forEach((b) => b.addEventListener("click", () => {
      if (run.answered) return;
      const v = q.verdicts[+b.dataset.v];
      const okV = v === q.verdictAnswer;
      $$(".opt").forEach((x) => { x.disabled = true; if (q.verdicts[+x.dataset.v] === q.verdictAnswer) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); });
      if (!okV) { run.answered = true; sfx.gavel(); const picked = q.options.find((o) => E.verdictOf(o.text) === v) || {}; resolve(q, false, "Recheck the decision.", 0, { trap: picked.trap || 4, selfTag: true }); return; }
      sfx.right();
      later(() => {
        const pair = q.options.map((o, i) => [o, i]).filter(([o]) => E.verdictOf(o.text) === v);
        const inner2 = `${header(q)}<div class="stemblock short">${esc(q.stem)}</div><p class="call">${esc(q.call)}</p><p class="muted" style="font-weight:800">${esc(v)}. Now the reason:</p>
          <div class="options hypo-opts">${pair.map(([o, i], k) => `<button class="opt" data-i="${i}"><span class="k">${k + 1}</span><span>${esc(o.text)}</span></button>`).join("")}</div>`;
        shell(inner2, "");
        $$(".opt").forEach((x) => x.addEventListener("click", () => {
          if (run.answered) return;
          run.answered = true;
          const o = q.options[+x.dataset.i];
          const ok = o.text === q.answer;
          $$(".opt").forEach((y) => { const oo = q.options[+y.dataset.i]; y.disabled = true; if (oo.text === q.answer) y.classList.add("right"); else if (y === x) y.classList.add("wrong"); if (oo.why) y.insertAdjacentHTML("beforeend", `<span class="why">${oo.trap ? `<b>${esc(E.TRAP_TYPES[oo.trap] || "Distractor")}.</b> ` : ""}${esc(oo.why)}</span>`); });
          resolve(q, ok, ok ? null : "The decision fits, but its reason needs another look.", ok ? 1 : 0.5, { trap: o.trap || 1, selfTag: !ok });
        }));
      }, 450);
    }));
  }

  // ---------- build (ordered or free) ----------
  function drawBuild(q) {
    const placed = [];
    const inner = `${header(q)}<p class="prompt">${esc(q.prompt)}</p>${wordBlock(q)}<div class="slots ${q.orderFree ? "free" : ""}" id="slots" aria-live="polite"></div>
      <div class="bank" id="bank">${q.tiles.map((t, i) => `<button class="chip" data-i="${i}">${esc(t)}</button>`).join("")}</div>`;
    shell(inner, footerBtn("Check", "", "check", true));
    const slots = $("#slots"), check = $("#check");
    const redraw = () => {
      slots.innerHTML = placed.map((i, k) => `<button class="chip placed" data-k="${k}"><span class="n">${k + 1}</span>${esc(q.tiles[i])}</button>`).join("");
      $$("#bank .chip").forEach((b) => b.classList.toggle("used", placed.includes(+b.dataset.i)));
      $$(".chip", slots).forEach((b) => b.addEventListener("click", () => { if (run.answered) return; placed.splice(+b.dataset.k, 1); redraw(); }));
      check.disabled = placed.length === 0;
    };
    $$("#bank .chip").forEach((b) => b.addEventListener("click", () => { if (run.answered || placed.includes(+b.dataset.i)) return; placed.push(+b.dataset.i); sfx.tick(); redraw(); }));
    check.addEventListener("click", () => {
      if (run.answered) return;
      run.answered = true;
      const got = placed.map((i) => q.tiles[i]);
      const ok = q.orderFree ? got.length === q.answer.length && got.every((t) => q.answer.some((a) => E.norm(a) === E.norm(t))) : got.length === q.answer.length && got.every((t, i) => E.norm(t) === E.norm(q.answer[i]));
      resolve(q, ok);
    });
  }

  // ---------- bucket (sort one by one) ----------
  function drawBucket(q) {
    let i = 0, bad = false, busy = false;
    const inner = `${header(q)}<p class="prompt">${esc(q.prompt)}</p><div class="bucketcard" id="bcard"></div><div class="bwhy" id="bwhy" role="status"></div><div class="buckets" id="buckets">${q.buckets.map((b, k) => `<button class="bucketbtn" data-b="${k}"><span class="k">${k + 1}</span>${esc(b)}</button>`).join("")}</div><div class="bcount" id="bcount"></div>`;
    shell(inner, "");
    const card = $("#bcard"), count = $("#bcount"), why = $("#bwhy");
    const show = () => { card.textContent = q.items[i].text; card.className = "bucketcard"; why.textContent = ""; count.textContent = `${i + 1} / ${q.items.length}`; busy = false; $$(".bucketbtn").forEach(b => b.disabled = false); $("#stage").focus({ preventScroll: true }); };
    $$(".bucketbtn").forEach((b) => b.addEventListener("click", () => {
      if (run.answered || busy) return; // a second tap while the card flashes must not skip an item
      busy = true;
      const good = q.buckets[+b.dataset.b] === q.items[i].bucket;
      card.classList.add(good ? "ok" : "bad");
      if (!good && q.items[i].why) why.textContent = `${q.items[i].bucket}: ${q.items[i].why}`;
      if (good) sfx.right(); else { sfx.wrong(); bad = true; }
      $$(".bucketbtn").forEach(x => x.disabled = true);
      const nextItem = () => { $("#footer").innerHTML = ""; i += 1; if (i >= q.items.length) { run.answered = true; resolve(q, !bad, bad ? "Some landed in the wrong bucket." : null); } else show(); };
      if (good) later(nextItem, 420);
      else {
        // Give the learner time to read the explanation; retain the family footer/Continue pattern.
        $("#footer").innerHTML = footerBtn("Continue", "clay");
        $("#next").addEventListener("click", nextItem);
        $("#next").focus();
      }
    }));
    show();
  }

  // ---------- find (tap words in the stem) ----------
  function drawFind(q) {
    const sel = new Set();
    const groups = q.groups && q.groups.length ? q.groups : [q.answer];
    const groupOf = (i) => groups.find((g) => g.includes(i)) || [i]; // a phrase is tapped as one: any word selects the whole fact
    const n = groups.length;
    const inner = `${header(q)}<p class="prompt">${esc(q.prompt)}</p><p class="muted" style="font-weight:700;font-size:14px">${n === 1 ? "One fact decides it. Tap a word in it." : `${["", "", "Two", "Three", "Four", "Five"][n] || n} facts decide it. Tap a word in each.`}</p><div class="findtext" id="find">${q.words.map((w, i) => `<button class="tok" data-i="${i}">${esc(w)}</button>`).join("")}</div>`;
    shell(inner, footerBtn("Check", "", "check", true));
    const check = $("#check");
    const toks = $$(".tok");
    toks.forEach((b) => b.addEventListener("click", () => {
      if (run.answered) return;
      const g = groupOf(+b.dataset.i);
      const on = !sel.has(g[0]);
      for (const i of g) { if (on) sel.add(i); else sel.delete(i); toks[i].classList.toggle("sel", on); }
      check.disabled = sel.size === 0;
    }));
    check.addEventListener("click", () => {
      if (run.answered) return;
      run.answered = true;
      const want = new Set(q.answer);
      let ok = sel.size === want.size;
      toks.forEach((b) => { const i = +b.dataset.i; b.classList.remove("sel"); if (want.has(i) && sel.has(i)) b.classList.add("ok"); else if (sel.has(i)) { b.classList.add("bad"); ok = false; } else if (want.has(i)) { b.classList.add("miss"); ok = false; } });
      resolve(q, ok);
    });
  }

  // ---------- spot the trap ----------
  function drawSpot(q) {
    const inner = `${header(q)}${q.stem ? `<div class="stemblock short">${esc(q.stem)}</div>` : ""}<p class="prompt" style="font-size:18px">${esc(q.prompt)}</p><div class="answerbox">${esc(q.shown)}</div><p class="muted" style="font-weight:800">This answer is…</p>
      <div class="tfrow"><button class="opt" data-v="1"><span class="k">1</span>The key</button><button class="opt" data-v="0"><span class="k">2</span>A distractor</button></div>`;
    shell(inner, "");
    $$(".opt").forEach((b) => b.addEventListener("click", () => {
      if (run.answered) return;
      const saysRight = b.dataset.v === "1";
      const ok1 = saysRight === q.isRight;
      $$(".opt").forEach((x) => { x.disabled = true; if ((x.dataset.v === "1") === q.isRight) x.classList.add("right"); else if (x === b) x.classList.add("wrong"); });
      if (q.isRight || !ok1) { run.answered = true; resolve(q, ok1); return; }
      sfx.right();
      later(() => {
        const inner2 = `${header(q)}${q.stem ? `<div class="stemblock short">${esc(q.stem)}</div>` : ""}<div class="answerbox"><span class="struck">${esc(q.shown)}</span></div><p class="muted" style="font-weight:800">Right, a distractor${q.trapType ? ` (${esc(E.TRAP_TYPES[q.trapType] || "")})` : ""}. Which is the key?</p>
          <div class="options">${q.fixOptions.map((o, i) => `<button class="opt" data-i="${i}"><span class="k">${i + 1}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
        shell(inner2, "");
        $$(".opt").forEach((x) => x.addEventListener("click", () => {
          if (run.answered) return;
          run.answered = true;
          const ok = q.fixOptions[+x.dataset.i] === q.fix;
          $$(".opt").forEach((y, i) => { y.disabled = true; if (q.fixOptions[i] === q.fix) y.classList.add("right"); else if (y === x) y.classList.add("wrong"); else y.classList.add("dim"); });
          resolve(q, ok);
        }));
      }, 500);
    }));
  }

  // ---------- typed answer (numbers, rule numbers), with a «show me options» fallback ----------
  function drawType(q) {
    const inner = `${header(q)}<p class="prompt">${esc(q.prompt)}</p>${wordBlock(q)}<input class="typein" id="typein" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${esc(q.placeholder || "type the answer")}" aria-label="Answer" inputmode="${q.numeric ? "decimal" : "text"}">
      ${q.fallbackOptions ? `<button class="linkbtn" id="show-opts" style="align-self:center">Show me options</button>` : ""}`;
    shell(inner, footerBtn("Check", "", "check", true));
    const inp = $("#typein"), check = $("#check");
    inp.addEventListener("input", () => { check.disabled = !inp.value.trim(); });
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && !check.disabled) check.click(); });
    const so = $("#show-opts");
    // «Show me options»: downgrade to a multiple-choice question, no penalty.
    if (so) so.addEventListener("click", () => { run.steps[run.i] = { ...q, type: "mcq", label: `${q.label} · options`, options: q.fallbackOptions, answer: q.answer[0] }; drawStep(); });
    check.addEventListener("click", () => {
      if (run.answered) return;
      run.answered = true;
      const ok = q.cite ? E.acceptsCite(q.answer, inp.value) : E.accepts(q.answer, inp.value);
      inp.classList.add(ok ? "ok" : "bad"); inp.disabled = true;
      resolve(q, ok);
    });
    later(() => inp.focus(), 50);
  }

  // ---------- swipe (self-graded flashcards) ----------
  function drawSwipe(q) {
    let i = 0, flipped = false, known = 0;
    const show = () => {
      const c = q.cards[i];
      shell(`${header(q)}<p class="prompt" style="font-size:17px">${esc(q.prompt)}</p>
        <div class="flashcard" id="card" role="button" tabindex="0">${flipped ? `<div class="front" style="font-size:20px;color:var(--muted)">${esc(c.front)}</div><div class="back">${esc(c.back)}</div>${c.hook ? `<div class="hk">${esc(c.hook)}</div>` : ""}` : `<div class="front">${esc(c.front)}</div>${c.sub ? `<div class="sub">${esc(c.sub)}</div>` : ""}<div class="hk">tap to flip</div>`}</div>
        <div class="swipecount">${i + 1} / ${q.cards.length}</div>`,
      `<div class="footer-inner"><div class="swipebar"><button class="btn clay" id="no" ${flipped ? "" : "disabled"}>Not yet</button><button class="btn olive" id="yes" ${flipped ? "" : "disabled"}>Knew it</button></div></div>`);
      const flip = () => { flipped = true; sfx.tick(); show(); $("#yes").focus(); };
      $("#card").addEventListener("click", flip);
      $("#card").addEventListener("keydown", e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); e.stopPropagation(); flip(); } });
      const next = (ok) => { E.grade(S, c.itemId, ok, today(), { weight: 0.5 }); run.scored += 1; if (ok) { known += 1; run.right += 1; } else run.misses += 1; save(); i += 1; flipped = false; if (i >= q.cards.length) { run.answered = true; run.results.push({ q, score: known / q.cards.length }); advance(); } else show(); };
      $("#yes").addEventListener("click", () => next(true));
      $("#no").addEventListener("click", () => next(false));
    };
    show();
  }

  // ---------- match (with spare right-hand items) ----------
  function drawMatch(q) {
    let selL = null, selR = null, done = 0, bad = false;
    const inner = `${header(q)}<p class="prompt" style="font-size:18px">${esc(q.prompt)}</p><div class="match">
      <div class="mcol">${q.left.map((l) => `<button class="mbtn left" data-l="${esc(l)}">${esc(l)}</button>`).join("")}</div>
      <div class="mcol">${q.right.map((r) => `<button class="mbtn" data-r="${esc(r)}">${esc(r)}</button>`).join("")}</div></div>`;
    shell(inner, "");
    const tryPair = () => {
      if (selL == null || selR == null) return;
      const lb = $(`[data-l="${CSS.escape(selL)}"]`), rb = $(`[data-r="${CSS.escape(selR)}"]`);
      const ok = q.pairs.some(([a, b]) => a === selL && b === selR);
      if (ok) { sfx.right(); [lb, rb].forEach((b) => { b.classList.remove("sel"); b.classList.add("ok"); b.disabled = true; }); done++; if (done === q.pairs.length) { run.answered = true; resolve(q, !bad, bad ? "With a few misses along the way." : null); } }
      else { bad = true; sfx.wrong(); buzz(40); [lb, rb].forEach((b) => { b.classList.remove("sel"); b.classList.add("bad"); setTimeout(() => b.classList.remove("bad"), 350); }); }
      selL = selR = null;
    };
    $$("[data-l]").forEach((b) => b.addEventListener("click", () => { $$("[data-l]").forEach((x) => x.classList.remove("sel")); selL = b.dataset.l; b.classList.add("sel"); tryPair(); }));
    $$("[data-r]").forEach((b) => b.addEventListener("click", () => { $$("[data-r]").forEach((x) => x.classList.remove("sel")); selR = b.dataset.r; b.classList.add("sel"); tryPair(); }));
  }

  // ---------- grading and feedback ----------
  const RIGHT = ["Exactly.", "That fits the situation.", "Good reasoning.", "You caught the important detail."];
  const WRONG = ["Not yet. It comes back at the end.", "Not yet. Read why.", "We'll see it again. That is how it sticks.", "Into the notebook it goes."];
  const GUESS = ["A useful first attempt. Now we learn it.", "That was a first guess. Let’s look at the idea."];

  function resolve(q, ok, why = null, score = ok ? 1 : 0, { trap = null, selfTag = false } = {}) {
    clearTimeout(timer);
    track("question_answered", { ...runProps(), ...stepProps(q), correct: !!ok, score, graded: !q.guess, ms: run.stepAt ? Date.now() - run.stepAt : null, combo: ok ? run.combo + 1 : 0, trap: trap || null });
    const t = today();
    if (q.guess) { (ok ? sfx.right : sfx.tick)(); showFeedback(true, ok ? "Good instinct." : pick(GUESS), q, true); return; }
    run.scored += 1; S.answered += 1;
    if (ok) { run.right += 1; S.correct += 1; run.combo += 1; run.maxCombo = Math.max(run.maxCombo, run.combo); sfx.right(); buzz(15); }
    else { run.misses += 1; run.combo = 0; sfx.wrong(); buzz([30, 40, 30]); }
    const ids = q.itemIds || (q.itemId ? [q.itemId] : []);
    for (const id of ids) E.grade(S, id, ok, t, { trap });
    run.results.push({ q, score, trap, ms: run.stepAt ? Date.now() - run.stepAt : 0 });
    save();
    if (run.mode === "cross") { showFeedback(ok, ok ? pick(RIGHT) : why || "The round is complete.", q); return; }
    if (!ok && !run.requeued.has(run.i) && run.mode !== "daily") {
      run.requeued.add(run.steps.length);
      run.steps.push({ ...q, label: E.L.again, marks: undefined });
    }
    showFeedback(ok, ok ? (run.combo >= 3 ? `${run.combo} in a row.` : pick(RIGHT)) : why || pick(WRONG), q, false, selfTag && !ok ? ids[0] : null);
  }
  function answerText(q) {
    if (q.type === "mcq") return esc(q.answer);
    if (q.type === "hypo" || q.type === "grid") return esc(q.answer);
    if (q.type === "build") return esc(q.answer.join(q.orderFree ? " · " : " → "));
    if (q.type === "type") return esc(q.answer[0]);
    if (q.type === "tf") return esc(q.answer ? q.yes : q.no);
    if (q.type === "find") return esc((q.groups && q.groups.length ? q.groups : [q.answer]).map((g) => g.map((i) => q.words[i]).join(" ")).join(" · "));
    if (q.type === "spot") return esc(q.fix);
    return "";
  }
  function showFeedback(ok, title, q, neutral = false, tagItem = null) {
    const f = $("#footer");
    f.className = `footer ${ok ? "right" : "wrong"}`;
    const ans = !ok && answerText(q) ? `<b>Best answer:</b> ${answerText(q)}<br>` : "";
    const lastCross = run.mode === "cross" && !ok;
    const tags = tagItem ? `<div class="selftags" role="group" aria-label="Why did you miss it?"><span>Why did you miss it?</span>${Object.entries(E.SELF_TAGS).map(([k, l]) => `<button class="fchip" data-tag="${k}">${esc(l)}</button>`).join("")}</div>` : "";
    f.innerHTML = `<div class="footer-inner" role="status">
      <div class="fb-amicus">${mascot(ok || neutral ? "happy" : "sad")}<div><div class="fb-title">${ok || neutral ? I.check.replace("<svg", '<svg width="26" height="26"') : I.x.replace("<svg", '<svg width="26" height="26"')} ${esc(title)}</div>
      <div class="fb-body">${ans}${esc(q.explain || "")}${sourceLinks(IX.items.get(q.itemId)?.sourceIds)}</div></div></div>${tags}
      <button class="btn block ${ok || neutral ? "olive" : "clay"}" id="next">${lastCross ? "See the score" : "Continue"}</button></div>`;
    $$("[data-tag]", f).forEach((b) => b.addEventListener("click", () => { E.selfTag(S, tagItem, b.dataset.tag); track("miss_tagged", { item_id: tagItem, tag: b.dataset.tag }); $$("[data-tag]", f).forEach((x) => x.setAttribute("aria-pressed", x === b)); }));
    const next = $("#next");
    next.addEventListener("click", () => (run.mode === "cross" ? (ok ? nextCross() : finishCross()) : advance()));
    next.focus();
  }

  function finishRun() {
    const t = today();
    const perfect = run.misses === 0;
    const base = { lesson: 10, roundup: 15, practice: 8, notebook: 8, daily: run.scored, swipe: 5 }[run.mode] || 8;
    const gained = base + (perfect && run.scored > 0 ? 5 : 0) + (run.maxCombo >= 5 ? 2 : 0);
    const wasActive = S.lastDay === t;
    const prevTodayXp = S.days[t] || 0;
    E.addXp(S, t, gained);
    const st = E.touchStreak(S, t);
    trackDayProgress(prevTodayXp, st);
    if (run.mode === "practice" || run.mode === "notebook") S.practices += 1;
    let sittingLine = "";
    if (run.node && run.mode === "lesson") {
      const total = run.sittings;
      S.sittings[run.node.id] = Math.max(S.sittings[run.node.id] || 0, run.sitting + 1);
      if (S.sittings[run.node.id] >= total) S.done[run.node.id] = { perfect, at: t };
      else sittingLine = `Sitting ${run.sitting + 1} of ${total}. The next one picks up where you left off.`;
    }
    if (run.node && run.mode === "roundup") S.done[run.node.id] = { perfect, at: t };
    let scoreLine = "";
    if (run.mode === "daily") {
      const got = run.results.filter((x) => x.q.marks).reduce((a, x) => a + x.score, 0);
      const ms = run.results.reduce((a, x) => a + (x.ms || 0), 0);
      E.recordDaily(S, t, Math.round(got), run.daily.total, run.daily.subject, run.daily.ids, ms);
      scoreLine = `Today: ${Math.round(got)} / ${run.daily.total} in ${mmss(ms)} (take the time you need).`;
    }
    const fresh = E.awardBadges(S, t, IX);
    save();
    run.finished = true;
    track("lesson_completed", { ...runProps(), accuracy: run.scored ? run.right / run.scored : 1, perfect, misses: run.misses, xp: gained, seconds: Math.round((Date.now() - run.start) / 1000), max_combo: run.maxCombo, streak: S.streak, used_freeze: !!(st && st.usedFreeze), traps: E.trapTally(run.results) });
    for (const b of fresh) track("badge_earned", { badge: b.id || b.name });
    syncProgress();
    const relatedIds = run.mode === "roundup" ? ({u03:["metrics"],u05:["tax"],u06:["spillover"],u07:["commons","public-good"],u10:["metrics"],u11:["budget"]}[run.node?.unitId] || []) : [];
    const relatedLabs = Models.LABS.filter(l => relatedIds.includes(l.id));
    const acc = run.scored ? Math.round((run.right / run.scored) * 100) : 100;
    const secs = Math.round((Date.now() - run.start) / 1000);
    const star = starMoment({ perfect, goalHit: prevTodayXp < S.goal && (S.days[t] || 0) >= S.goal });
    sfx.done(); if (perfect || fresh.length) confetti();
    const streakLine = !wasActive && st.streakUp ? (st.usedFreeze ? `A freeze saved the streak. ${plural(S.streak, "day", "days")} of practice.` : S.streak > 1 ? `${plural(S.streak, "day", "days")} of practice.` : "Day 1 of practice. See you tomorrow.") : `Streak: ${plural(S.streak, "day", "days")}.`;
    shell(`<div class="results">
      ${mascot("cheer")}
      <h1>${perfect && run.scored ? "Beautifully practiced." : acc < 50 ? pick(["A useful first try.", "The notebook learns first.", "Again, with the notebook."]) : pick(["Well practiced.", "A little stronger.", "Well reasoned."])}</h1>
      <div class="resgrid">
        <div class="res gold"><div class="h">XP earned</div><div class="v">+${gained}</div></div>
        <div class="res olive"><div class="h">${run.mode === "swipe" ? "Self-check" : "Accuracy"}</div><div class="v">${acc}%</div></div>
        <div class="res flame"><div class="h">Time</div><div class="v">${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}</div></div>
      </div>
      ${scoreLine ? `<p style="font-weight:900">${esc(scoreLine)}</p>` : ""}
      <p style="font-weight:800">${esc(streakLine)}</p>
      ${sittingLine ? `<p class="muted" style="font-weight:700">${esc(sittingLine)}</p>` : ""}
      ${run.node && run.mode === "lesson" && IX.lessons.find(l => l.id === run.node.id)?.fieldwork ? `<div class="rulebox" style="text-align:left"><b>Try it at work</b><p>${esc(IX.lessons.find(l => l.id === run.node.id).fieldwork)}</p><small>Optional reflection. Nothing to submit or score.</small></div>` : ""}
      ${relatedLabs.length ? `<div class="card col" style="text-align:left"><div class="eyebrow">Explore the idea</div><p>Try changing the rules in a related experiment. No timer or score.</p>${relatedLabs.map(l=>`<button class="btn ghost" data-result-lab="${esc(l.id)}">${esc(l.title)}</button>`).join("")}</div>` : ""}
      ${fresh.map((b) => `<div class="newbadge">${seal(b.name[0]).replace("<svg", '<svg width="40" height="40"')}<div>New badge: ${esc(b.name)}<br><span class="muted">${esc(b.desc)}</span></div></div>`).join("")}
      ${star ? starCard() : ""}
    </div>`, footerBtn("Continue", "gold"));
    $$("[data-result-lab]").forEach(b=>b.addEventListener("click",()=>startLab(b.dataset.resultLab)));
    $(".progress > i") && ($(".progress > i").style.width = "100%");
    $("#next").addEventListener("click", closeRun);
    $("#next").focus();
    if (star) bindStarCard(star);
  }

  // ---------- mixed practice: answers hidden until submission; untimed, with flag and return ----------
  let mockTimer = null;
  function startMock(size) {
    const m = E.buildMock(IX, S, seed(), size);
    if (!m.steps.length) { toast("No situations available yet"); return; }
    track("mock_started", { size, questions: m.steps.length });
    run = { mode: "mock", node: null, size, steps: m.steps, i: 0, misses: 0, combo: 0, maxCombo: 0, right: 0, scored: 0, requeued: new Set(), answered: false, start: Date.now(), results: [], choices: m.steps.map(() => null), flags: new Set(), deadline: Date.now() + m.minutes * 60000, minutes: m.minutes };
    ui.overlay = "lesson";
    const name = size >= 100 ? "Long challenge" : "Mixed challenge";
    shell(`<div class="results">${mascot("robe")}<h1>${name}</h1><p class="story" style="max-width:38ch">${m.steps.length} situations. Take your time. Answers stay hidden until you submit; flag a situation to revisit it. Afterwards, review each explanation and the principles worth practicing again.</p></div>`, footerBtn("Begin", "gold"));
    $("#next").addEventListener("click", () => { run.start = Date.now(); drawStep(); });
  }
  function tickMock() {
    const el = $("#mock-clock");
    if (el) el.textContent = mmss(run.deadline - Date.now());
    if (Date.now() >= run.deadline) { clearInterval(mockTimer); toast("Time. Pencils down."); submitMock(); }
  }
  function drawMockStep(q) {
    const chosen = run.choices[run.i];
    const flagged = run.flags.has(run.i);
    shell(hypoMarkup(q, { silent: true, chosen }), `<div class="footer-inner"><div class="mocknav">
      <button class="btn ghost" id="prev" ${run.i === 0 ? "disabled" : ""}>Back</button>
      <button class="btn ghost ${flagged ? "flagged" : ""}" id="flag" aria-pressed="${flagged}">${I.flag}<span>${flagged ? "Flagged" : "Flag"}</span></button>
      <button class="btn" id="next">${run.i === run.steps.length - 1 ? "Review and submit" : "Next"}</button></div></div>`);
    $$(".opt").forEach((b) => b.addEventListener("click", () => { run.choices[run.i] = +b.dataset.i; $$(".opt").forEach((x) => { x.classList.toggle("chosen", x === b); x.setAttribute("aria-pressed", String(x === b)); }); sfx.tick(); }));
    $("#prev").addEventListener("click", () => { run.i -= 1; drawStep(); });
    $("#flag").addEventListener("click", () => { if (run.flags.has(run.i)) run.flags.delete(run.i); else run.flags.add(run.i); drawStep(); });
    $("#next").addEventListener("click", () => { if (run.i === run.steps.length - 1) mockReview(); else { run.i += 1; drawStep(); } });
  }
  function mockReview() {
    const blank = run.choices.filter((c) => c == null).length;
    shell(`<div class="intro"><div class="qlabel">Review</div><h1>${blank ? `${plural(blank, "question", "questions")} unanswered` : "Every question answered"}</h1><p class="story">Tap a number to go back. You can revisit any situation before submitting. Unanswered situations will count as missed.</p>
      <div class="palette">${run.steps.map((_, i) => `<button class="pal ${run.choices[i] == null ? "blank" : ""} ${run.flags.has(i) ? "flagged" : ""}" data-go="${i}" aria-label="Question ${i + 1}, ${run.choices[i] == null ? "unanswered" : "answered"}${run.flags.has(i) ? ", flagged" : ""}">${i + 1}</button>`).join("")}</div></div>`,
    `<div class="footer-inner"><button class="btn block gold" id="submit">Submit</button></div>`);
    $$("[data-go]").forEach((b) => b.addEventListener("click", () => { run.i = +b.dataset.go; drawStep(); }));
    $("#submit").addEventListener("click", submitMock);
  }
  function submitMock() {
    if (run.finished) return;
    clearInterval(mockTimer);
    const t = today();
    run.results = run.steps.map((q, i) => { const c = run.choices[i]; const o = c == null ? null : q.options[c]; const ok = !!o && o.text === q.answer; E.grade(S, q.itemId, ok, t, { trap: o && o.trap ? o.trap : null }); S.answered += 1; if (ok) S.correct += 1; return { q, score: ok ? 1 : 0, trap: o && !ok ? o.trap || null : null, chosen: c }; });
    const subjects = E.scoreSubjects(run.results);
    const traps = E.trapTally(run.results);
    const score = run.results.reduce((a, x) => a + x.score, 0);
    const ms = Date.now() - run.start;
    S.mocks.push({ at: t, size: run.size, score, total: run.steps.length, subjects, traps, ms });
    const gained = run.size >= 200 ? 60 : run.size >= 100 ? 30 : 15;
    const prevTodayXp = S.days[t] || 0;
    E.addXp(S, t, gained);
    const st = E.touchStreak(S, t);
    trackDayProgress(prevTodayXp, st);
    const fresh = E.awardBadges(S, t, IX);
    save();
    run.finished = true;
    track("mock_completed", { size: run.size, score, total: run.steps.length, seconds: Math.round(ms / 1000), subjects, traps, xp: gained });
    for (const b of fresh) track("badge_earned", { badge: b.id || b.name });
    syncProgress();
    sfx.done(); if (score === run.steps.length || fresh.length) confetti();
    const rules = [...new Set(run.results.filter((x) => !x.score).map((x) => x.q.ruleId).filter(Boolean))].slice(0, 6).map((id) => IX.rules.get(id)).filter(Boolean);
    const trapRows = Object.entries(traps).sort((a, b) => b[1] - a[1]);
    shell(`<div class="results">
      ${mascot(score / run.steps.length >= 0.7 ? "cheer" : "robe")}
      <h1>${score} / ${run.steps.length}</h1>
      <div class="resgrid"><div class="res gold"><div class="h">XP earned</div><div class="v">+${gained}</div></div><div class="res olive"><div class="h">Per situation</div><div class="v">${mmss(ms / run.steps.length)}</div></div><div class="res flame"><div class="h">Time</div><div class="v">${mmss(ms)}</div></div></div>
      <div class="secbars">${Object.entries(subjects).map(([sub, [g, m]]) => `<div class="secbar"><span>${esc(E.subjectLabel(sub))}</span><div class="bar"><i style="width:${m ? (g / m) * 100 : 0}%"></i></div><span class="tnum">${Math.round(g)}/${Math.round(m)}</span></div>`).join("")}</div>
      ${trapRows.length ? `<div class="secbars"><div class="eyebrow" style="text-align:left">Distractors you fell for</div>${trapRows.map(([k, n]) => `<div class="secbar"><span>${esc(E.TRAP_TYPES[k] || k)}</span><div class="bar"><i style="width:${(n / run.steps.length) * 100}%;background:var(--bad)"></i></div><span class="tnum">${n}</span></div>`).join("")}</div>` : ""}
      ${rules.length ? `<div class="secbars"><div class="eyebrow" style="text-align:left">Practice these principles</div>${rules.map((r) => `<div class="secbar" style="grid-template-columns:1fr"><span>${esc(r.title)}${r.cite ? ` · ${esc(r.cite)}` : ""}</span></div>`).join("")}</div>` : ""}
      ${fresh.map((b) => `<div class="newbadge">${seal(b.name[0]).replace("<svg", '<svg width="40" height="40"')}<div>New badge: ${esc(b.name)}</div></div>`).join("")}
    </div>`, `<div class="footer-inner"><button class="btn block gold" id="walk">Walk through the answers</button><button class="btn block ghost" id="next">Done</button></div>`);
    $("#next").addEventListener("click", closeRun);
    $("#walk").addEventListener("click", () => { run.i = 0; walkMock(); });
  }
  /** After a mock: every question with the chosen option, the key and every why. */
  function walkMock() {
    const q = run.steps[run.i];
    const chosen = run.choices[run.i];
    shell(hypoMarkup(q, { silent: true, chosen }), `<div class="footer-inner"><div class="mocknav"><button class="btn ghost" id="prev" ${run.i === 0 ? "disabled" : ""}>Back</button><button class="btn ghost" id="done">Done</button><button class="btn" id="next" ${run.i === run.steps.length - 1 ? "disabled" : ""}>Next</button></div></div>`);
    revealOptions(q, chosen == null ? -1 : chosen);
    $("#stage").insertAdjacentHTML("beforeend", `<p class="story">${esc(q.explain || "")}</p>${sourceLinks(IX.items.get(q.itemId)?.sourceIds)}`);
    $("#prev").addEventListener("click", () => { run.i -= 1; walkMock(); });
    $("#next").addEventListener("click", () => { run.i += 1; walkMock(); });
    $("#done").addEventListener("click", closeRun);
  }

  // ---------- Quick thinking ----------
  let timer = null;
  function startCross() {
    track("cross_started", { best: S.crossExamBest });
    run = { mode: "cross", node: null, steps: [], i: 0, misses: 0, combo: 0, maxCombo: 0, right: 0, scored: 0, requeued: new Set(), answered: false, start: Date.now(), results: [], r: E.rng(seed()) };
    ui.overlay = "lesson";
    shell(`<div class="results">${mascot("robe")}<h1>Quick thinking</h1><p class="story" style="max-width:34ch">Fifteen seconds per question. Recall terms and simple distinctions until you miss one. Thoughtful decisions belong in the untimed lessons and rule labs.</p><p class="muted" style="font-weight:800">Best: ${S.crossExamBest}</p></div>`, footerBtn("Start the round", "gold"));
    $("#next").addEventListener("click", nextCross);
  }
  function nextCross() {
    const q = E.crossExamQuestion(IX, S, run.r);
    if (!q) { toast("No quick questions available yet"); return closeRun(); }
    run.steps = [q]; run.i = 0;
    drawStep();
  }
  function startTimer(onTimeout) {
    const bar = $("#timer");
    if (bar) { bar.style.transition = "none"; bar.style.transform = "scaleX(1)"; requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.transition = `transform ${E.CROSS_MS}ms linear`; bar.style.transform = "scaleX(0)"; })); }
    clearTimeout(timer);
    timer = setTimeout(onTimeout, E.CROSS_MS);
  }
  function finishCross() {
    const t = today();
    const score = run.right;
    const best = score > S.crossExamBest;
    if (best) S.crossExamBest = score;
    const gained = Math.min(score * 3, 30);
    const prevTodayXp = S.days[t] || 0;
    if (gained > 0) { E.addXp(S, t, gained); trackDayProgress(prevTodayXp, E.touchStreak(S, t)); }
    const fresh = E.awardBadges(S, t, IX);
    track("cross_finished", { witnesses: score, new_best: best && score > 0, best: S.crossExamBest, xp: gained, seconds: Math.round((Date.now() - run.start) / 1000) });
    for (const b of fresh) track("badge_earned", { badge: b.id || b.name });
    syncProgress();
    save();
    run.finished = true;
    if (best && score > 0) confetti();
    sfx.done();
    shell(`<div class="results">${mascot(score >= 5 ? "cheer" : "sad")}
      <h1>${score === 0 ? "A fresh start next time" : best ? "New best." : `${plural(score, "answer", "answers")} in a row.`}</h1>
      <div class="resgrid"><div class="res gold"><div class="h">XP earned</div><div class="v">+${gained}</div></div><div class="res flame"><div class="h">Answers</div><div class="v">${score}</div></div><div class="res olive"><div class="h">Best</div><div class="v">${S.crossExamBest}</div></div></div>
      ${fresh.map((b) => `<div class="newbadge">${seal(b.name[0]).replace("<svg", '<svg width="40" height="40"')}<div>New badge: ${esc(b.name)}</div></div>`).join("")}
    </div>`, `<div class="footer-inner"><button class="btn block gold" id="again">Try another round</button><button class="btn block ghost" id="next">Done</button></div>`);
    $("#again").addEventListener("click", startCross);
    $("#next").addEventListener("click", closeRun);
  }

  // ---------- local progress, sources, and rule labs ----------
  function applyTheme() {
    if (S.theme && S.theme !== "system") document.documentElement.dataset.theme = S.theme;
    else delete document.documentElement.dataset.theme;
  }
  function exportProgress() {
    const url = URL.createObjectURL(new Blob([JSON.stringify({ app: "oikos-family", version: 1, exportedAt: new Date().toISOString(), state: S }, null, 2)], { type: "application/json" }));
    const a = document.createElement("a"); a.href = url; a.download = `oikos-progress-${today()}.json`; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  async function importProgress(e) {
    const file = e.target.files[0]; if (!file) return;
    try {
      if (file.size > 2000000) throw new Error("large");
      const raw = await file.text();
      if (progressConflict) { e.target.value = ""; return; }
      const data = JSON.parse(raw);
      if (data.app !== "oikos-family" || data.version !== 1 || !data.state || typeof data.state !== "object") throw new Error("format");
      const next = E.normalizeState(data.state, IX);
      const box = document.createElement("div"); box.className = "quitbox";
      box.setAttribute("role", "alertdialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Import progress");
      box.innerHTML = `<div class="card"><h2>Bring your progress here?</h2><p>This backup has ${plural(Object.keys(next.done).length, "completed lesson or roundup", "completed lessons or roundups")} and ${next.xp} XP. It will replace this browser's current progress.</p><div class="row"><button class="btn ghost" id="import-no">Keep current</button><button class="btn" id="import-yes">Import backup</button></div></div>`;
      document.body.appendChild(box); app().inert = true;
      const dismiss = () => { box.remove(); app().inert = false; $("#import")?.focus(); };
      $("#import-no").addEventListener("click", dismiss);
      $("#import-yes").addEventListener("click", () => { S = next; save(); applyTheme(); dismiss(); render(); toast("Progress imported."); });
      $("#import-no").focus();
    } catch { toast("That file is not a supported Oikos backup. Your progress is unchanged."); }
    e.target.value = "";
  }
  function libraryRun(mode = "library") {
    run = { mode, steps: [], i: 0, scored: 0, right: 0, combo: 0, requeued: new Set(), start: Date.now() };
    ui.overlay = "lesson";
  }
  function openSources() {
    libraryRun();
    shell(`<div class="intro"><div class="qlabel">Behind the lessons</div><h1>Ideas, evidence, and limits</h1><p class="story">Oikos follows the same learning engine as Carpe and Objection: a first guess, short teaching, harder retrieval, fresh transfer, mixed practice, and spaced return. The course explores incentives, economic models, and the people affected by them.</p><div class="rulebox"><b>Four recurring questions</b><p>What gets rewarded? Who bears the cost? What assumptions matter? Who gets a say?</p></div><p class="story">Those are ethical teaching commitments. Sources support the underlying principles, not the invented outcomes of our fictional cases. Conditional models, research findings, practice guidance, fictional cases, and ethical commitments have different labels. Ethical choices can carry real costs; completing a course does not establish changed behavior.</p><p class="story">A model explains what follows from its assumptions. It does not prove what people will do, or settle which distribution is fair. No live AI grades your answers or reads your reflections. Progress stays in this browser unless you export it. Fonts load from Google Fonts.</p><div class="lab-list">${OIKOS_SOURCES.map(s => `<article class="card"><div class="eyebrow">${esc(s.id)} · ${esc(s.publisher)}</div><h3><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}</a></h3><p class="story" style="font-size:15px;margin-top:8px">${esc(s.note)}</p></article>`).join("")}</div></div>`, footerBtn("Back", "ghost"));
    $("#next").addEventListener("click", closeRun);
  }
  function openLabs() {
    libraryRun();
    shell(`<div class="intro"><div class="qlabel">Rule labs</div><h1>Change a rule. Follow its effects.</h1><p class="story">Make a prediction, run a small model, and inspect who gains or loses. Change one assumption and try again. These are fictional experiments with explicit rules, not forecasts. There is no timer or moral score.</p><div class="lab-list">${Models.LABS.map(l => `<article class="card col"><div class="eyebrow">${esc(l.tag)}</div><h2>${esc(l.title)}</h2><p>${esc(l.description)}</p><button class="btn" data-lab="${esc(l.id)}">${S.labs?.[l.id] ? "Explore again" : "Try the experiment"}</button>${S.labNotes?.[l.id] ? `<details class="sources"><summary>Your last reflection</summary><p style="white-space:pre-wrap">${esc(S.labNotes[l.id])}</p></details>` : ""}</article>`).join("")}</div></div>`, footerBtn("Back", "ghost"));
    $$("[data-lab]").forEach(b => b.addEventListener("click", () => startLab(b.dataset.lab)));
    $("#next").addEventListener("click", closeRun);
  }
  function startLab(id) {
    const lab = Models.LABS.find(l => l.id === id); if (!lab) return;
    libraryRun("lab"); run.lab = lab; run.params = Models.values(id); run.prediction = ""; run.hasResult = false;
    drawLab();
  }
  function drawLab() {
    const lab = run.lab, result = run.hasResult ? Models.compute(lab.id, run.params) : null;
    const value = (n,u) => u === "$" ? `$${Models.fmt(n)}` : `${Models.fmt(n)}${u ? ` ${u}` : ""}`;
    shell(`<div class="intro"><div class="qlabel">Rule lab · ${esc(lab.tag)}</div><h1>${esc(lab.title)}</h1><p class="stemblock">${esc(lab.context)}</p>
      <details class="sources model-assumptions" open><summary>Assumptions of this model</summary><ul>${lab.assumptions.map(a=>`<li>${esc(a)}</li>`).join("")}</ul></details>
      <div class="card col model-controls"><h2>Choose the rules</h2>${lab.fields.map(f=>`<div class="col" style="gap:6px"><label for="model-${esc(f.id)}">${esc(f.label)}</label><select id="model-${esc(f.id)}" data-model-field="${esc(f.id)}">${f.options.map(o=>`<option value="${esc(o.value)}" ${run.params[f.id]===o.value ? "selected" : ""}>${esc(o.label)}</option>`).join("")}</select></div>`).join("")}</div>
      <label for="lab-prediction" class="prompt">Your prediction <span class="muted">(optional, unscored)</span></label><p>${esc(lab.predict)}</p><textarea id="lab-prediction" class="lab-reflection" maxlength="1500" placeholder="I expect… because…">${esc(run.prediction)}</textarea>
      <p class="muted model-status" id="model-status" role="status">${result ? "Calculated under the rules shown above." : "Run the model when you are ready to compare."}</p>
      ${result ? `<section id="lab-results" tabindex="-1" class="col model-results"><div class="qlabel">What follows from these assumptions</div><h2>Compare the outcomes</h2><p><b>Baseline:</b> ${esc(lab.baseline)}.</p><div class="model-table-wrap"><table class="model-table"><caption>Baseline compared with your chosen rules</caption><thead><tr><th scope="col">Outcome</th><th scope="col">Baseline</th><th scope="col">Your rule</th></tr></thead><tbody>${result.rows.map(r=>`<tr><th scope="row">${esc(r.label)}</th><td>${esc(value(r.baseline,r.unit))}</td><td>${esc(value(r.chosen,r.unit))}</td></tr>`).join("")}</tbody></table></div><p class="muted" style="font-size:13px">Displayed values round to two decimals. Calculations use unrounded values.</p><p class="story">${esc(result.explanation)}</p><details class="sources"><summary>Show the calculation</summary>${result.equations.map(e=>`<p class="model-equation">${esc(e)}</p>`).join("")}</details><div class="rulebox"><b>Whose perspective?</b><p>${esc(result.perspective)}</p></div><p class="story">${esc(lab.limits)}</p>${run.prediction ? `<details class="sources"><summary>Your prediction</summary><p>${esc(run.prediction)}</p></details>` : ""}<label for="lab-note" class="prompt">${esc(lab.reflection)}</label><textarea class="lab-reflection" id="lab-note" maxlength="5000" placeholder="What changed my mind? What is still missing?">${esc(S.labNotes?.[lab.id] || "")}</textarea><p class="muted" style="font-size:13px">Your reflection saves on this device as you write. No grade.</p>${sourceLinks(lab.sourceIds)}<button class="btn ghost" id="lab-change">Change one assumption</button></section>` : ""}
      </div>`, `<div class="footer-inner"><button class="btn block" id="lab-run">${result ? "Run again" : "Run the model"}</button><button class="btn block ghost" id="next">Back to labs</button></div>`);
    $("#lab-prediction").addEventListener("input",e=>{run.prediction=e.target.value;});
    $$("[data-model-field]").forEach(el=>el.addEventListener("change",()=>{
      run.params[el.dataset.modelField]=el.value;run.hasResult=false;
      if($("#lab-results")) $("#lab-results").hidden=true;
      $("#model-status").textContent="Rules changed. Run the model to update the comparison.";
      $("#lab-run").textContent="Run with these rules";
    }));
    $("#lab-run").addEventListener("click",()=>{
      run.hasResult=true;
      S.labs ||= {};S.labs[lab.id]={at:today(),endings:["explored"]};save();
      drawLab(); const resultEl = $("#lab-results"); resultEl?.focus({preventScroll:true}); resultEl?.scrollIntoView({block:"start"});
    });
    if(result){
      $("#lab-note").addEventListener("input",e=>{S.labNotes ||= {};S.labNotes[lab.id]=e.target.value.slice(0,5000);save();});
      $("#lab-change").addEventListener("click",()=>{$("[data-model-field]")?.focus();});
    }
    $("#next").addEventListener("click",openLabs);
  }

  // ---------- keyboard ----------
  addEventListener("keydown", (e) => {
    const dialog = $(".progress-conflict") || $(".quitbox") || $(".lesson");
    if (e.key === "Tab" && dialog) {
      const focusable = [...dialog.querySelectorAll('button:not([disabled]), input:not([disabled]), textarea, select, a[href], summary, [role="button"][tabindex="0"]')].filter(el => el.getClientRects().length);
      if (focusable.length) {
        const first = focusable[0], last = focusable.at(-1);
        if (e.shiftKey && (!dialog.contains(document.activeElement) || document.activeElement === first || document.activeElement.id === "stage")) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    if (progressConflict) return;
    if (e.key === "Escape" && dialog?.classList.contains("quitbox")) {
      e.preventDefault(); dialog.querySelector("#import-no, #quit-stay")?.click(); return;
    }
    if (ui.overlay !== "lesson" || !run) return;
    if (e.target && ["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName) && e.key !== "Escape") return;
    const qb = $(".quitbox");
    if (qb) { if (e.key === "Escape") { e.preventDefault(); dismissQuit(); } return; }
    if (e.key === "Escape") return requestClose();
    if (run.mode === "library" || run.mode === "lab") return;
    const k = e.key.toLowerCase();
    if ((/^[1-4]$/.test(k) || /^[a-d]$/.test(k)) && !run.answered) { const opts = $$(".options .opt, .tfrow .opt, .buckets .bucketbtn"); const b = opts[/^[1-4]$/.test(k) ? +k - 1 : LETTERS.indexOf(k.toUpperCase())]; if (b) { e.preventDefault(); b.click(); } }
    if (e.key === "Enter" && !e.target?.closest("button, a, summary, [role=button], textarea, input, select")) { const n = $("#next") || $("#check"); if (n && !n.disabled && document.activeElement !== n) { e.preventDefault(); n.click(); } }
  });

  // ---------- boot ----------
  const h = location.hash.slice(1);
  if (TABS.some((t) => t.id === h)) ui.tab = h;
  applyTheme();
  render();
  trackAppOpened();
})();
