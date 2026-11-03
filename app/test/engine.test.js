// Engine unit tests: streaks, spaced review, normalisers, unlocking, countdown, drills, mocks, ranks, badges.
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadUnits } = require("../src/course.js");
const { Engine: E } = require("../src/engine.js");

const IX = E.indexCourse(loadUnits({ example: true }).filter((u) => u.id === "u0_example")); // fixture: the example unit only

test("weekends never break a streak", () => {
  const s = E.freshState();
  E.touchStreak(s, "2026-10-30"); // Fri
  E.touchStreak(s, "2026-11-02"); // Mon
  assert.equal(s.streak, 2);
  assert.equal(s.freezes, 1);
});

test("a missed weekday uses a freeze, two missed reset", () => {
  const s = E.freshState();
  E.touchStreak(s, "2026-11-02");
  const a = E.touchStreak(s, "2026-11-04");
  assert.equal(a.usedFreeze, 1);
  assert.equal(s.streak, 2);
  const b = E.touchStreak(s, "2026-11-07");
  assert.ok(b.reset);
  assert.equal(s.streak, 1);
});

test("same-day activity doesn't double count and a 7-day streak earns a freeze", () => {
  const s = E.freshState();
  E.touchStreak(s, "2026-11-02");
  E.touchStreak(s, "2026-11-02");
  assert.equal(s.streak, 1);
  for (let d = 1; d < 7; d++) E.touchStreak(s, E.addDays("2026-11-02", d));
  assert.equal(s.streak, 7);
  assert.equal(s.freezes, 2);
});

test("leitner boxes climb on time, drop on a miss, and reach the 60-day box", () => {
  const s = E.freshState();
  E.learn(s, "x", "2026-11-02");
  assert.equal(s.items.x.due, "2026-11-03");
  E.grade(s, "x", true, "2026-11-03");
  assert.equal(s.items.x.box, 2);
  assert.equal(s.items.x.due, "2026-11-06");
  E.grade(s, "x", true, "2026-11-04"); // early: no promotion
  assert.equal(s.items.x.box, 2);
  E.grade(s, "x", false, "2026-11-06");
  assert.equal(s.items.x.box, 1);
  let day = "2026-11-07";
  for (let i = 0; i < 6; i++) { day = s.items.x.due; E.grade(s, "x", true, day); }
  assert.equal(s.items.x.box, 6);
  assert.equal(E.daysBetween(day, s.items.x.due), 60);
});

test("a self-graded flash miss drops one box only", () => {
  const s = E.freshState();
  E.learn(s, "w", "2026-11-01");
  s.items.w.box = 4;
  E.grade(s, "w", false, "2026-11-01", { weight: 0.5 });
  assert.equal(s.items.w.box, 3);
});

test("review has no exam cap and no calendar phase pulls future cards forward", () => {
  const s = E.freshState();
  s.examDate = "2027-07-28"; // even a legacy field cannot cap review
  E.learn(s, "x", "2027-07-01"); s.items.x.box = 5;
  E.grade(s, "x", true, "2027-07-02");
  assert.equal(s.items.x.box, 6);
  assert.equal(s.items.x.due, E.addDays("2027-07-02", 60));
  assert.equal(E.reviewCap(s), null);
  assert.deepEqual(E.dueItems(s, "2027-07-15"), []);
});

test("the notebook holds items missed twice, worst first, and remembers the distractor type and the self-tag", () => {
  const s = E.freshState();
  E.grade(s, "a", false, "2026-11-01", { trap: 1 }); E.grade(s, "a", false, "2026-11-01", { trap: 1 }); E.grade(s, "a", false, "2026-11-01", { trap: 6 });
  E.grade(s, "b", false, "2026-11-01"); E.grade(s, "b", false, "2026-11-01");
  E.grade(s, "c", false, "2026-11-01");
  assert.deepEqual(E.notebookItems(s), ["a", "b"]);
  assert.deepEqual(s.items.a.traps, { 1: 2, 6: 1 });
  E.selfTag(s, "a", "misread");
  assert.equal(s.items.a.tag, "misread");
  assert.deepEqual(E.topTraps(s, "2026-11-03"), [["1", 2], ["6", 1]]);
  assert.deepEqual(E.topTraps(s, "2026-11-20"), [], "only the last seven days");
});

test("the English normaliser ignores case, punctuation and articles; the number normaliser reads dollars, days and words", () => {
  assert.ok(E.accepts(["the opportunity-cost concept"], "Opportunity cost concept."));
  assert.ok(E.accepts(["30 days"], "thirty days"));
  assert.ok(E.accepts(["30 days", "30"], "30"));
  assert.ok(E.accepts(["$75,000", "75000"], "75000"));
  assert.ok(E.accepts(["$75,000"], "seventy-five thousand dollars"));
  assert.ok(E.accepts(["21 days", "21"], "Twenty-one"));
  assert.ok(!E.accepts(["30 days"], "31 days"));
  assert.ok(!E.accepts(["$75,000"], "$75,001"));
  assert.equal(E.norm("An opposing party's statement, offered!"), "opposing partys statement offered");
});

test("first lesson of every unit is open, the rest unlock in order, unit roundup last", () => {
  const s = E.freshState();
  const u = IX.course.units[0];
  assert.ok(E.isUnlocked(IX, s, u.lessons[0].id));
  assert.ok(!E.isUnlocked(IX, s, u.lessons[1].id));
  assert.ok(!E.isUnlocked(IX, s, `${u.id}-review`));
  s.done[u.lessons[0].id] = { perfect: true, at: "2026-11-01" };
  assert.ok(E.isUnlocked(IX, s, u.lessons[1].id));
  s.done[u.lessons[1].id] = { perfect: false, at: "2026-11-01" };
  s.done[u.lessons[2].id] = { perfect: false, at: "2026-11-01" };
  assert.ok(E.isUnlocked(IX, s, `${u.id}-review`));
  assert.equal(E.nextNode(IX, s).id, `${u.id}-review`);
  assert.deepEqual(E.unitProgress(IX, s, u.id), { done: 3, total: 4 });
});

test("lessons are split into sittings by weight and every item is served once", () => {
  for (const l of IX.lessons) {
    const sittings = E.lessonSittings(IX, l.id);
    assert.deepEqual(sittings.flat(), l.items.map((i) => i.id));
    for (const sit of sittings) assert.ok(sit.length >= 1);
  }
});

test("Oikos has no exam countdown, deadline or credential claim", () => {
  const s = E.freshState();
  assert.equal(s.examDate, null);
  assert.equal(E.EXAM_DATE, null);
  assert.deepEqual(E.EXAM_PRESETS, []);
  for (const date of ["2026-11-02", "2027-07-29", "2030-01-01"]) {
    assert.equal(E.countdown(s, date).days, null);
    assert.equal(E.countdown(s, date).phase.id, "foundations");
  }
  assert.equal(E.HYPO_MS, null);
});

test("daily practice rotates through all twelve topics and records a daily streak", () => {
  const cycle = Array.from({length: 12}, (_, i) => E.dailySubject(E.addDays("2026-11-02", i)));
  assert.deepEqual(cycle, E.SUBJECT_IDS);
  assert.equal(E.dailySubject("2026-11-14"), cycle[0]);
  assert.ok(E.SUBJECT_IDS.includes(E.dailySubject("2026-01-01")));
  const s = E.freshState(), d = E.buildDaily(IX, s, "2026-11-02");
  assert.ok(d.steps.length >= 1 && d.steps.length <= E.DAILY_N);
  assert.equal(d.minutes, null);
  assert.deepEqual(d, E.buildDaily(IX, s, "2026-11-02"));
  E.recordDaily(s, "2026-11-02", 4, 5, "choices", d.ids, 400000);
  E.recordDaily(s, "2026-11-03", 5, 5, "margins");
  assert.equal(s.dailyStreak, 2);
  E.recordDaily(s, "2026-11-03", 3, 5, "margins");
  assert.equal(s.dailyStreak, 2);
  E.recordDaily(s, "2026-11-09", 2, 5, "choices");
  assert.equal(s.dailyStreak, 1);
});

test("mixed practice balances all twelve topics without time pressure", () => {
  const template = IX.byKind.hypo[0];
  const units = E.SUBJECT_IDS.map((subject, i) => ({ id: `u${i + 1}`, title: subject, blurb: "Practice", subject,
    lessons: [{id: `u${i + 1}l1`, title: "Practice", items: Array.from({length: 8}, (_, k) => ({ ...template, subject, id: `u${i + 1}-h-${k}` }))}] }));
  const ix = E.indexCourse(units), seen = new Set();
  for (let seed = 1; seed <= 40; seed++) {
    const m = E.buildMock(ix, E.freshState(), seed, 25);
    assert.equal(m.steps.length, 25); assert.equal(m.minutes, null);
    const counts = {};
    for (const q of m.steps) { counts[q.subject] = (counts[q.subject] || 0) + 1; assert.equal(q.ms, null); }
    assert.deepEqual(Object.values(counts).sort(), [...Array(11).fill(2), 3]);
    seen.add(Object.keys(counts).find((k) => counts[k] === 3));
  }
  assert.ok(seen.size > 1);
  const set = E.buildSubjectSet(ix, E.freshState(), "margins", 4, 8);
  assert.equal(set.steps.length, 8); assert.equal(set.minutes, null);
});

test("subject scoring and the trap tally", () => {
  const res = [{ q: { subject: "incidence", marks: 1 }, score: 1 }, { q: { subject: "incidence", marks: 1 }, score: 0, trap: 6 }, { q: { subject: "margins", marks: 1 }, score: 0, trap: 6 }, { q: { subject: "margins", marks: 1 }, score: 0, trap: 4 }];
  assert.deepEqual(E.scoreSubjects(res), { incidence: [1, 2], margins: [0, 2] });
  assert.deepEqual(E.trapTally(res), { 6: 2, 4: 1 });
});

test("ranks count practice XP without claiming time spent or qualification", () => {
  const s = E.freshState();
  assert.equal(E.rankOf(s).rank.name, "Newcomer");
  s.xp = 120; assert.equal(E.rankOf(s).rank.name, "Curious learner");
  assert.equal(E.rankOf(s).next.name, "Regular visitor");
  s.xp = 9999; assert.equal(E.rankOf(s).rank.name, "Lifelong learner");
  assert.equal(E.rankOf(s).next, null);
  assert.equal(E.fmtMinutes(260), "260 XP");
  assert.deepEqual(E.GOALS.map((g) => g.xp), [10, 20, 40]);
});

test("badges award once for practice activity", () => {
  const s = E.freshState();
  s.done.x = { perfect: true, at: "2026-11-01" };
  assert.deepEqual(E.awardBadges(s, "2026-11-01", IX).map((b) => b.id), ["first_step"]);
  assert.deepEqual(E.awardBadges(s, "2026-11-02", IX), []);
  s.crossExamBest = 15;
  assert.deepEqual(E.awardBadges(s, "2026-11-02", IX).map((b) => b.id), ["quick_recall"]);
  s.mocks.push({ at: "2026-11-02", size: 25, score: 25, total: 25 });
  assert.deepEqual(E.awardBadges(s, "2026-11-02", IX).map((b) => b.id), ["scenario_practice"]);
  s.done["u0_example-review"] = { perfect: true, at: "2026-11-02" };
  assert.deepEqual(E.awardBadges(s, "2026-11-02", IX).map((b) => b.id).sort(), ["roundup", "whole_course"]);
});

test("week xp only counts this week", () => {
  const s = E.freshState();
  E.addXp(s, "2026-10-30", 10);
  E.addXp(s, "2026-11-02", 15);
  assert.equal(E.weekXp(s, "2026-11-03"), 15);
  assert.equal(E.weekKey("2026-11-08"), "2026-11-02");
});

test("find marks exactly the deciding phrases in the stem", () => {
  const it = IX.items.get("u0-h-spillover"), q = E.qFind(IX, it);
  assert.equal(q.answer.map((i) => q.words[i]).join(" "), "neighbor harm valued at 30 credits.");
  assert.equal(q.groups.length, it.facts.length);
  assert.deepEqual(q.groups.flat().slice().sort((a, b) => a - b), q.answer);
});

test("the grid splits decision and reason while preserving the correct key", () => {
  const it = IX.items.get("u0-h-spillover"), q = E.qGrid(IX, it, E.rng(2));
  assert.deepEqual(q.verdicts.slice().sort(), ["No", "Yes"]);
  assert.equal(q.verdictAnswer, "No");
  assert.equal(q.options.filter((o) => E.verdictOf(o.text) === "No").length, 2);
});

test("hypo review prefers an unseen sibling with the same rule", () => {
  const s = E.freshState();
  const seen = IX.items.get("u0-h-marginal");
  const sib = { ...seen, id: "u0-h-marginal-2" };
  const ix = { ...IX, siblings: () => [seen, sib], items: new Map([...IX.items, [sib.id, sib]]) };
  E.learn(s, seen.id, "2026-11-01");
  const q = E.qReview(ix, seen, E.rng(1), s);
  assert.equal(q.itemId, sib.id);
  assert.equal(q.label, E.L.transfer);
});

test("terms generate typed recall with aliases and a recognition fallback", () => {
  const it = { ...IX.items.get("u0-t-gdp"), alt: ["gross domestic product"] };
  const q = E.qTermType(IX, it, E.rng(1));
  assert.equal(q.type, "type"); assert.ok(!q.prompt.includes("<span"));
  assert.ok(E.accepts(q.answer, "gdp"));
  assert.ok(E.accepts(q.answer, "Gross domestic product."));
  assert.ok(!E.accepts(q.answer, "household income"));
  assert.ok(q.fallbackOptions.includes("GDP"));
  assert.ok(E.qPractice(IX, it, E.rng(3)).some((x) => x.type === "type"));
  assert.equal(E.qCite(IX, IX.byKind.rule[0], E.rng(1)), null);
});

test("source labels remove internal note filenames without hiding the named source", () => {
  assert.equal(E.cleanSrc("BEA GDP guide; measurement.md §5.1"), "BEA GDP guide");
  assert.equal(E.cleanSrc("EPA economic analysis; ethics.md §3 [READ]"), "EPA economic analysis");
  assert.equal(E.cleanSrc("notes.md §1"), "Oikos");
});

test("remaining sittings count every part still to play and shrink as parts and unit roundups are done", () => {
  const s = E.freshState();
  const total = E.remainingSittings(IX, s);
  const nodes = E.pathNodes(IX);
  const expected = nodes.reduce((a, n) => a + (n.kind === "roundup" ? 1 : E.lessonSittings(IX, n.id).length), 0);
  assert.equal(total, expected);
  const first = nodes.find((n) => n.kind === "lesson");
  s.sittings[first.id] = 1;
  assert.equal(E.remainingSittings(IX, s), total - 1);
  s.done[first.id] = { perfect: false, at: "2026-11-01" };
  assert.equal(E.remainingSittings(IX, s), total - E.lessonSittings(IX, first.id).length);
  const ru = nodes.find((n) => n.kind === "roundup");
  s.done[ru.id] = { perfect: true, at: "2026-11-01" };
  assert.equal(E.remainingSittings(IX, s), total - E.lessonSittings(IX, first.id).length - 1);
});

test("the focus subject steers the next node", () => {
  const mk = (sub, i) => ({ id: `u${i}`, title: sub, blurb: "x", subject: sub, assume: "x", lessons: [{ id: `u${i}l1`, title: "x", items: [{ id: `u${i}-t`, kind: "term", term: `t${i}`, lang: "english", meaning: `m${i}`, say: "s", status: "practice", src: "x" }] }] });
  const ix = E.indexCourse([mk("choices", 1), mk("margins", 2)]);
  const s = E.freshState();
  assert.equal(E.nextNode(ix, s).unitId, "u1");
  s.focus = "margins";
  assert.equal(E.nextNode(ix, s).unitId, "u2");
});


test("live streak includes the same new-week freeze as completed practice", () => {
  const s = E.freshState();
  E.touchStreak(s, "2026-11-02"); E.touchStreak(s, "2026-11-04"); E.touchStreak(s, "2026-11-05");
  assert.equal(s.freezes, 0); assert.equal(E.liveStreak(s, "2026-11-09"), 3);
  E.touchStreak(s, "2026-11-09"); assert.equal(s.streak, 4);
});

test("default rule construction is an unordered selection with distractors", () => {
  const it = { ...IX.byKind.rule[0] }; delete it.ordered;
  const q = E.qBuild(IX, it, E.rng(4));
  assert.equal(q.orderFree, true);
  assert.ok(q.tiles.length > q.answer.length);
});

test("building a lesson never grades the cold guess or mutates progress", () => {
  const s = E.freshState(), before = JSON.stringify(s);
  const qs = E.buildLesson(IX, s, IX.lessons[0].id, 1);
  assert.equal(JSON.stringify(s), before);
  assert.ok(qs.some((q) => q.guess === true));
  assert.ok(qs.some((q) => q.type === "intro"));
  assert.ok(qs.some((q) => q.type === "build" || q.type === "type"));
  const transfer = qs.findIndex((q) => q.label === E.L.transfer);
  assert.ok(transfer > qs.findLastIndex((q) => q.type === "intro"));
});

test("sparse quick-recall pools terminate instead of recursively retrying forever", () => {
  const it = IX.byKind.term[0];
  const ix = E.indexCourse([{id:"u1", subject:"choices", lessons:[{id:"u1l1", items:[it]}]}]);
  assert.equal(E.crossExamQuestion(ix, E.freshState(), E.rng(2)), null);
});

test("term explanation does not repeat identical use and hook lines", () => {
  const it = { ...IX.byKind.term[0], use: "One memorable example.", hook: "One memorable example." };
  const q = E.qTermMeaning(IX, it, E.rng(2));
  assert.equal(q.explain.split("One memorable example.").length - 1, 1);
});

test("progress import round-trips supported learning and reflection state", () => {
  const s = E.freshState(), day = "2026-11-02", it = IX.byKind.term[0], l = IX.lessons[0];
  s.onboarded = true; s.theme = "dark"; s.name = "Learner";
  E.learn(s, it.id, day); E.grade(s, it.id, false, day, {trap: 3}); E.selfTag(s, it.id, "addedFact");
  E.touchStreak(s, day); E.addXp(s, day, 10);
  s.done[l.id] = {at: day, perfect: false}; s.sittings[l.id] = 1;
  s.labs.metrics = {at: day, endings: ["explored"]}; s.labNotes.metrics = "I would ask what evidence is needed.";
  E.recordDaily(s, day, 2, 3, "choices", [it.id], 5000);
  s.mocks.push({at: day, size: 12, total: 3, score: 2, subjects:{choices:[2,3]}, traps:{3:1}, ms:1000});
  assert.deepEqual(E.normalizeState(JSON.parse(JSON.stringify(s)), IX), s);
});

test("progress import rejects foreign IDs, malformed dates, nonfinite numbers and untrusted fields", () => {
  const id = IX.byKind.term[0].id, lesson = IX.lessons[0].id;
  const raw = JSON.parse('{"__proto__":{"polluted":true}}');
  Object.assign(raw, { xp: Infinity, correct: 10, answered: 2, goal: 999, freezes: 999, theme:"evil", name:"x".repeat(100), sound:"yes", examDate:"2030-01-01",
    done:{unknown:{at:"2026-11-02"}, [lesson]:{at:"2026-02-30",perfect:true}},
    sittings:{[lesson]:Infinity,unknown:1},
    days:{"2026-02-30":999,"2026-11-02":-2},
    items:{unknown:{due:"2026-11-02"},[id]:{box:Infinity,due:"2026-11-02",right:"Infinity",wrong:-1,traps:{evil:99,3:Infinity},tag:"evil"}},
    labNotes:{metrics:"x".repeat(6000),unknown:"bad"}, labs:{metrics:{at:"2026-11-02",endings:["explored","explored","<script>"]},unknown:{at:"2026-11-02"}},
    badges:{unknown:"2026-11-02"}, trapLog:[{d:"invalid",t:3},{d:"2026-11-02",t:999}],
    mocks:[{at:"2026-11-02",size:Infinity,score:99,total:3,subjects:{unknown:[1,1]},traps:{bad:2},ms:Infinity}],
  });
  const s = E.normalizeState(raw, IX);
  assert.equal(s.xp, 0); assert.equal(s.correct, 2); assert.equal(s.freezes, 2);
  assert.equal(s.goal, 10); assert.equal(s.theme, "system"); assert.equal(s.name.length,30); assert.equal(s.sound,false); assert.equal(s.examDate,null);
  assert.deepEqual(s.done,{}); assert.deepEqual(s.sittings,{}); assert.deepEqual(s.days,{});
  assert.deepEqual(s.items[id],{box:1,due:"2026-11-02",right:0,wrong:0});
  assert.deepEqual(s.labs,{metrics:{at:"2026-11-02",endings:["explored"]}});
  assert.equal(s.labNotes.metrics.length,5000); assert.equal(s.labNotes.unknown,undefined);
  assert.deepEqual(s.badges,{}); assert.deepEqual(s.trapLog,[]);
  assert.equal(s.mocks[0].score,3); assert.equal(s.mocks[0].ms,0); assert.deepEqual(s.mocks[0].subjects,{});
  assert.equal({}.polluted,undefined); assert.ok(!Object.hasOwn(s,"__proto__"));
  assert.deepEqual(E.normalizeState([],IX),E.freshState());
});


test("a term's accepted alias is never generated as a wrong answer or definition", () => {
  const original = IX.items.get("u0-t-gdp"), it = {...original, alt:["Gross domestic product"]};
  const alias = {...original,id:"alias",term:it.alt[0],meaning:"The value of final domestic production over a period."};
  const ix = {...IX,byKind:{...IX.byKind,term:[...IX.byKind.term.filter(t=>t.id!==it.id),it,alias]}};
  for (let seed=1;seed<=40;seed++) {
    const meaning=E.qTermMeaning(ix,it,E.rng(seed));
    const reverse=E.qTermReverse(ix,it,E.rng(seed));
    assert.ok(!meaning.options.includes(alias.meaning));
    assert.ok(!reverse.options.includes(alias.term));
  }
});


test("numeric recall preserves sign, decimal magnitude and units while accepting authored aliases", () => {
  assert.ok(!E.accepts(["$84,000", "84000"], "-84000"));
  assert.ok(!E.accepts(["$84,000", "84000"], "$-84,000"));
  assert.ok(!E.accepts(["4 places", "4", "four"], "-4 places"));
  assert.ok(!E.accepts(["4 places", "4", "four"], "negative four"));
  assert.ok(!E.accepts(["4", "four"], "0.4"));
  assert.ok(!E.accepts(["4", "four"], "40"));
  assert.ok(E.accepts(["4"], "4.0"));
  assert.ok(!E.accepts(["4"], "4%"));
  assert.ok(!E.accepts(["4"], "four percent"));
  assert.ok(E.accepts(["4%"], "four percent"));
  assert.ok(!E.accepts(["30 days"], "30 months"));
  assert.ok(!E.accepts(["30 days"], "30"));
  assert.ok(E.accepts(["30 days", "30"], "thirty"));
  assert.ok(E.accepts(["21 days"], "twenty-one days"));
  assert.ok(E.accepts(["$84,000"], "eighty-four thousand dollars"));
  assert.ok(!E.accepts(["$84,000"], "eighty-four thousand euros"));
});

test("economic quantities retain percentage-point, currency, sign and scale distinctions", () => {
  for (const answer of ["-$10", "$-10", "-10 dollars", "minus ten dollars"]) assert.ok(E.accepts(["-10 USD"], answer), answer);
  assert.ok(!E.accepts(["-$10"], "$10"));
  assert.ok(E.accepts(["0"], 0));
  assert.ok(E.accepts(["0.5"], ".5"));
  assert.ok(E.accepts(["1000"], "1e3"));
  assert.ok(!E.accepts(["1000"], "1e-3"));
  assert.ok(E.accepts(["2 percentage points"], "two percentage-point"));
  assert.ok(!E.accepts(["2 percentage points"], "2%"));
  assert.ok(!E.accepts(["2%"], "0.02"), "a dimensionless equivalent requires an authored alias");
  assert.ok(E.accepts(["2%", "0.02"], "0.02"));
  assert.ok(!E.accepts(["$20 per hour"], "$20 per day"));
  assert.ok(!E.accepts(["€20"], "$20"));
  assert.ok(!E.accepts(["$1020"], "$10,20"), "invalid thousands grouping cannot change a decimal-like input's magnitude");
  assert.ok(!E.accepts(["1.33"], "1.3"), "no undeclared rounding tolerance");
  assert.ok(E.accepts(["0.5", "1/2"], "1/2"));
});

test("numeric alternatives are authored calculation mistakes and exclude accepted aliases", () => {
  const base = IX.byKind.num[0];
  const it = {...base,answer:"-$10",alt:["-10"],distractors:["$10","$50","-10"]};
  for(let seed=1;seed<=40;seed++) {
    const q=E.qNum(IX,it,E.rng(seed),{mcq:true});
    assert.deepEqual(q.options.slice().sort(),["-$10","$10","$50"].sort());
    const typed=E.qNum(IX,it,E.rng(seed));
    assert.deepEqual(typed.fallbackOptions.slice().sort(),q.options.slice().sort());
  }
});

test("multi-step numerical calculation is untimed unless explicitly marked for simple recall", () => {
  const it=IX.byKind.num[0], s=E.freshState();
  const make=(item)=>E.indexCourse([{id:"u1",subject:"choices",lessons:[{id:"u1l1",items:[item]}]}]);
  const implicit={...it};delete implicit.speed;
  assert.deepEqual(E.crossExamPool(make(implicit),s),[]);
  assert.equal(E.crossExamQuestion(make(implicit),s,E.rng(1)),null);
  const simple={...it,speed:true};
  assert.equal(E.crossExamPool(make(simple),s).length,1);
  assert.ok(E.crossExamQuestion(make(simple),s,E.rng(1)));
});

test("model provenance and all six Rule-lab progress keys survive safe state import", () => {
  assert.equal(E.STATUS_LABELS.model,"Conditional model");
  const raw=E.freshState();
  for(const id of ["metrics","tax","spillover","commons","public-good","budget"]) {
    raw.labs[id]={at:"2026-11-02",endings:["explored"]};raw.labNotes[id]="The outcome depends on the stated assumptions.";
  }
  raw.labs.pilot={at:"2026-11-02",endings:["old"]};raw.labNotes.pilot="Foreign course state";
  const normalized=E.normalizeState(raw,IX);
  assert.equal(Object.keys(normalized.labs).length,6);
  assert.equal(normalized.labs.pilot,undefined);assert.equal(normalized.labNotes.pilot,undefined);
  for(const id of Object.keys(normalized.labs))assert.deepEqual(normalized.labs[id],{at:"2026-11-02",endings:["explored"]});
});

test("overlapping diagnostic tags are feedback unless category alternatives are explicitly authored", () => {
  const it={...IX.byKind.trap[0],cat:4,
    stem:"A higher-paying job conflicts with a caregiving commitment the candidate will keep.",
    wrong:"The higher wage proves the candidate should take it.",
    right:"Check feasible options and the candidate's priorities.",
    why:"The claim both substitutes an unstated objective and leaves a relevant constraint out of the comparison.",
    fixDistractors:["Assume unpaid care has no value.","Declare every higher wage a worse choice."]};
  for(let seed=1;seed<=40;seed++) {
    assert.equal(E.qTrapType(IX,it,E.rng(seed)),null,"Wrong standard and Incomplete comparison can both apply");
    assert.equal(E.qCheck(IX,it,E.rng(seed)).type,"spot");
    assert.ok(E.qPractice(IX,it,E.rng(seed)).some(q=>q.type==="spot"),"later diagnosis/repair must not disappear");
    assert.equal(E.qReview(IX,it,E.rng(seed)).type,"spot");
  }
  const authored={...it,categoryDistractors:[E.TRAP_TYPES[1],E.TRAP_TYPES[8],E.TRAP_TYPES[11]]};
  const q=E.qTrapType(IX,authored,E.rng(1));
  assert.equal(q.answer,E.TRAP_TYPES[4]);
  assert.deepEqual(q.options.slice().sort(),[E.TRAP_TYPES[4],...authored.categoryDistractors].sort());
  assert.equal(E.qTrapType(IX,{...it,categoryDistractors:[E.TRAP_TYPES[4],E.TRAP_TYPES[8],E.TRAP_TYPES[11]]},E.rng(1)),null);
});
