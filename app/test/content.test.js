// Content checks: every unit file (example included) passes the validator, and the engine can build
// valid questions from it across many seeds. Writers run `npm test` after editing their unit.
const test = require("node:test");
const assert = require("node:assert/strict");
const { loadUnits, unitFiles } = require("../src/course.js");
const { validateCourse } = require("../tools/validate.js");
const { Engine: E } = require("../src/engine.js");

const units = loadUnits({ example: true });
const IX = E.indexCourse(units);
const answerKey = (value) => /\d/.test(String(value)) ? E.normNum(value) : E.norm(value);

test("the example unit is present and every unit file exports its unit", () => {
  assert.ok(units.some((u) => u.id === "u0_example"), "u0_example.js must export the example unit");
  for (const u of units) assert.ok(u && u.id && Array.isArray(u.lessons), "unit must be an object with id and lessons");
  assert.equal(unitFiles({ example: false }).filter((f) => f.endsWith("u0_example.js")).length, 0, "the real build must skip the example");
});

test("every unit passes the content validator", () => {
  const r = validateCourse(units);
  assert.deepEqual(r.errors, [], `content errors:\n${r.errors.join("\n")}`);
});

test("the example unit uses every item kind", () => {
  const ex = units.find((u) => u.id === "u0_example");
  const kinds = new Set(ex.lessons.flatMap((l) => l.items.map((i) => i.kind)));
  for (const k of E.KINDS) assert.ok(kinds.has(k), `example lacks kind ${k}`);
  assert.ok(ex.lessons.flatMap((l) => l.items).some((i) => i.kind === "hypo" && i.grid), "example needs a grid hypo");
  assert.ok(ex.lessons.flatMap((l) => l.items).some((i) => i.kind === "hypo" && i.transfer), "example needs a transfer hypo");
});

test("every hypo has four distinct options, exactly one key, a why on each, and traps on the distractors", () => {
  for (const it of IX.byKind.hypo) {
    assert.equal(it.options.length, 4, `${it.id}: 4 options`);
    assert.equal(new Set(it.options.map((o) => answerKey(o.text))).size, 4, `${it.id}: distinct options`);
    assert.equal(it.options.filter((o, i) => i === it.answer).length, 1, `${it.id}: one key`);
    it.options.forEach((o, i) => { assert.ok(o.why, `${it.id} option ${i}: why`); if (i !== it.answer) assert.ok(E.TRAP_TYPES[o.trap], `${it.id} option ${i}: trap type`); else assert.ok(!o.trap, `${it.id}: the key has no trap`); });
    assert.ok(IX.rules.has(it.rule), `${it.id}: rule ${it.rule} exists`);
  }
});

test("every rule's elements build from tiles exactly with plausible extra tiles", () => {
  const r = E.rng(3);
  for (const it of IX.byKind.rule) {
    const q = E.qBuild(IX, it, r);
    assert.ok(q, `${it.id}: build question`);
    assert.deepEqual(q.answer, it.elements);
    for (const e of it.elements) assert.ok(q.tiles.includes(e), `${it.id}: tile "${e}"`);
    assert.ok(q.tiles.length > it.elements.length, `${it.id}: distractor tiles`);
  }
});

/** Structural checks a rendered question must satisfy. */
function checkQ(q, where) {
  assert.ok(q && q.type, `${where}: empty question`);
  if (q.type === "intro") { assert.ok(q.kind === "assume" ? IX.unitOf(q.unitId) : IX.items.has(q.itemId), `${where}: intro of unknown item`); return; }
  assert.ok(q.label, `${where}: label`);
  if (q.type === "mcq") {
    assert.ok(q.options.includes(q.answer), `${where}: answer missing from options (${q.prompt})`);
    assert.equal(new Set(q.options.map(answerKey)).size, q.options.length, `${where}: duplicate options ${q.options.join("|")}`);
    assert.ok(q.options.length >= 3, `${where}: too few options`);
  } else if (q.type === "hypo" || q.type === "grid") {
    assert.ok(q.stem && q.call, `${where}: stem and call`);
    assert.equal(q.options.length, 4, `${where}: 4 options`);
    assert.ok(q.options.some((o) => o.text === q.answer), `${where}: key among options`);
    if (IX.items.get(q.itemId).kind === "hypo") assert.equal(q.options.filter((o) => !o.trap).length, 1, `${where}: one untrapped option`);
    assert.equal(q.ms, E.HYPO_MS);
    if (q.type === "grid") { assert.equal(q.verdicts.length, 2); assert.ok(q.verdicts.includes(q.verdictAnswer), `${where}: verdict answer`); assert.equal(E.verdictOf(q.answer), q.verdictAnswer); }
  } else if (q.type === "tf") {
    assert.equal(typeof q.answer, "boolean", where);
    assert.ok(q.yes && q.no, `${where}: tf needs yes/no labels`);
  } else if (q.type === "build") {
    for (const p of q.answer) assert.ok(q.tiles.includes(p), `${where}: tile "${p}" missing`);
    assert.ok(q.tiles.length > q.answer.length, `${where}: no distractor tiles`);
    assert.equal(typeof q.orderFree, "boolean", where);
  } else if (q.type === "match") {
    assert.ok(q.pairs.length >= 3 && q.pairs.length <= 5, `${where}: ${q.pairs.length} pairs`);
    assert.equal(new Set(q.pairs.map((p) => E.norm(p[0]))).size, q.pairs.length, `${where}: duplicate left`);
    assert.equal(new Set(q.pairs.map((p) => E.norm(p[1]))).size, q.pairs.length, `${where}: duplicate right`);
    assert.equal(q.right.length, q.pairs.length + q.spare.length, `${where}: right column size`);
    for (const sp of q.spare) assert.ok(!q.pairs.some((p) => E.norm(p[1]) === E.norm(sp)), `${where}: spare "${sp}" is also an answer`);
  } else if (q.type === "bucket") {
    assert.ok(q.buckets.length >= 2, where);
    for (const it of q.items) assert.ok(q.buckets.includes(it.bucket), `${where}: bucket ${it.bucket}`);
  } else if (q.type === "find") {
    assert.ok(q.answer.length >= 1, `${where}: find has no target`);
    for (const i of q.answer) assert.ok(q.words[i] !== undefined, `${where}: bad token index`);
  } else if (q.type === "spot") {
    assert.ok(q.fixOptions.includes(q.fix), `${where}: fix not among options`);
    assert.equal(typeof q.isRight, "boolean", where);
    assert.ok(q.fixOptions.includes(q.shown), `${where}: shown option is among the fixes`);
  } else if (q.type === "type") {
    assert.ok(Array.isArray(q.answer) && q.answer.length >= 1, where);
    assert.ok(q.fallbackOptions && q.fallbackOptions.includes(q.answer[0]), `${where}: the «show me options» fallback holds the answer`);
  } else if (q.type === "swipe") {
    assert.ok(q.cards.length >= 1, where);
    for (const c of q.cards) assert.ok(c.front && c.back && IX.items.has(c.itemId), `${where}: card`);
  } else assert.fail(`${where}: unknown question type ${q.type}`);
}

test("every lesson sitting and unit roundup builds valid questions across many seeds", () => {
  const s = E.freshState();
  for (let seed = 1; seed <= 40; seed++) {
    for (const l of IX.lessons) {
      const sittings = E.lessonSittings(IX, l.id);
      assert.ok(sittings.length >= 1, `${l.id}: no sittings`);
      sittings.forEach((_, k) => {
        const steps = E.buildLesson(IX, s, l.id, seed, k);
        const scored = steps.filter((q) => q.type !== "intro" && !q.guess);
        assert.ok(scored.length >= 3, `${l.id} sitting ${k}: only ${scored.length} scored steps`);
        assert.ok(scored.length <= 26, `${l.id} sitting ${k}: ${scored.length} scored steps is too long for one sitting`);
        steps.forEach((q, i) => checkQ(q, `${l.id} s${k} #${i} seed ${seed}`));
        const transfers = sittings[k].filter((id) => IX.items.get(id).transfer);
        for (const id of transfers) {
          assert.ok(steps.some((q) => q.itemId === id && q.label === E.L.transfer), `${l.id}: transfer item ${id} never asked as transfer`);
          assert.ok(!steps.some((q) => q.itemId === id && q.type === "intro"), `${l.id}: transfer item ${id} must not get an intro`);
        }
        for (const id of sittings[k]) if (IX.items.get(id).kind === "hypo") assert.ok(!steps.some((q) => q.type === "intro" && q.itemId === id), `${l.id}: hypo ${id} must never get an intro (it would give the answer away)`);
      });
    }
    for (const u of IX.course.units) E.buildRoundup(IX, s, u.id, seed).forEach((q, i) => checkQ(q, `${u.id} roundup #${i} seed ${seed}`));
  }
});

test("the first sitting of a unit's first lesson opens with the assumption card and a no-penalty guess", () => {
  for (const u of IX.course.units) {
    const steps = E.buildLesson(IX, E.freshState(), u.lessons[0].id, 1, 0);
    if (u.assume) assert.deepEqual(steps[0], { type: "intro", itemId: null, kind: "assume", unitId: u.id });
    const g = steps.find((q) => q.guess);
    if (g) assert.equal(g.label, E.L.guess);
  }
});

test("review questions exist for every quizzable item", () => {
  const r = E.rng(11);
  for (const it of IX.items.values()) {
    if (!E.quizzable(it)) continue;
    const q = E.qReview(IX, it, r);
    assert.ok(q, `${it.id}: no review question`);
    checkQ(q, `review ${it.id}`);
  }
});

test("practice, flash review, Quick recall, Question of the Day and mocks build valid questions for a learner", () => {
  const s = E.freshState();
  for (const it of [...IX.items.values()].slice(0, 30)) E.learn(s, it.id, "2026-10-01");
  const steps = E.buildPractice(IX, s, 7);
  assert.ok(steps.length >= 5, "practice too short");
  steps.forEach((q, i) => checkQ(q, `practice #${i}`));
  const sw = E.buildSwipe(IX, s, 3);
  if (sw) checkQ(sw, "swipe");
  const r = E.rng(5);
  for (let i = 0; i < 200; i++) { const q = E.crossExamQuestion(IX, s, r); checkQ(q, `cross #${i}`); if (q.type === "mcq") assert.equal(q.options.length, 3, "Quick recall has 3 options"); assert.equal(q.ms, E.CROSS_MS); }
  for (let i = 0; i < 50; i++) checkQ(E.crossExamQuestion(IX, E.freshState(), r), `cross new #${i}`);
  for (let d = 0; d < 14; d++) {
    const day = E.addDays("2026-11-02", d);
    const daily = E.buildDaily(IX, s, day);
    assert.ok(daily.steps.length >= 1, `${day}: empty daily`);
    assert.ok(daily.steps.length <= E.DAILY_N);
    daily.steps.forEach((q, i) => { checkQ(q, `daily ${day} #${i}`); assert.equal(q.marks, 1, "daily question is worth one mark"); assert.ok(q.subject, "daily question names its subject"); });
    assert.deepEqual(E.buildDaily(IX, s, day).steps.map((q) => q.itemId), daily.steps.map((q) => q.itemId), "daily is the same when reopened");
    assert.ok(daily.steps.every((q) => E.drillable(IX.items.get(q.itemId))), "daily draws sourced practice items");
  }
  for (const size of [12, 25]) {
    const mock = E.buildMock(IX, s, 9, size);
    assert.ok(mock.steps.length >= 1 && mock.steps.length <= size);
    assert.equal(mock.minutes, null, "mixed scenarios have no time pressure");
    mock.steps.forEach((q, i) => { checkQ(q, `mock ${size} #${i}`); assert.ok(q.subject && q.marks === 1); });
  }
  const sub = E.buildSubjectSet(IX, s, IX.byKind.hypo[0].subject, 2);
  sub.steps.forEach((q, i) => checkQ(q, `subject set #${i}`));
});


test("all twelve production units use the inherited semantic schema", () => {
  const real = loadUnits();
  assert.deepEqual(real.map((u) => u.id), E.SUBJECT_IDS.map((_, i) => `u${String(i + 1).padStart(2, "0")}`));
  assert.deepEqual(real.map((u) => u.subject), E.SUBJECT_IDS);
  for (const u of real) {
    assert.equal(u.lessons.length, 4, `${u.id}: three teaching lessons and a boundary lesson`);
    assert.ok(u.lessons.flatMap((l) => l.items).some((it) => it.boundary), `${u.id}: nonexample boundary`);
  }
});

test("transfers follow a taught prerequisite and appear after all introductions in their sitting", () => {
  for (const l of IX.lessons) {
    const sittings = E.lessonSittings(IX, l.id);
    for (const it of l.items.filter((x) => x.transfer)) {
      const ruleAt = l.items.findIndex((x) => x.kind === "rule" && x.id === it.rule);
      const caseAt = l.items.indexOf(it);
      assert.ok(ruleAt >= 0 && ruleAt < caseAt, `${it.id}: prerequisite is earlier in this lesson`);
      const target = sittings.findIndex((ids) => ids.includes(it.id));
      const prior = sittings.findIndex((ids) => ids.includes(it.rule));
      assert.ok(prior <= target, `${it.id}: prerequisite cannot be in a future sitting`);
      for (let seed = 1; seed <= 40; seed++) {
        const qs = E.buildLesson(IX, E.freshState(), l.id, seed, target);
        const at = qs.findIndex((q) => q.itemId === it.id && q.label === E.L.transfer);
        const lastIntro = qs.reduce((v, q, i) => q.type === "intro" ? i : v, -1);
        assert.ok(at > lastIntro, `${it.id}: cold transfer belongs to the separate practice phase`);
      }
    }
  }
});

test("every production roundup includes an authored boundary case across 40 seeds", () => {
  for (const u of IX.course.units.filter((x) => x.id !== "u0_example")) {
    for (let seed = 1; seed <= 40; seed++) {
      const qs = E.buildRoundup(IX, E.freshState(), u.id, seed);
      assert.ok(qs.some((q) => IX.items.get(q.itemId)?.boundary && ["hypo", "grid", "spot", "bucket"].includes(q.type)), `${u.id}, seed ${seed}: boundary scenario/diagnosis missing`);
    }
  }
});

test("quick recall never draws an ethical judgment, policy scenario or unapproved calculation", () => {
  const s = E.freshState();
  for (const it of IX.items.values()) E.learn(s, it.id, "2026-11-02");
  const pool = E.crossExamPool(IX, s);
  assert.ok(pool.length);
  for (const it of pool) {
    assert.notEqual(it.status, "ethics", it.id);
    assert.ok(!["hypo", "argue"].includes(it.kind), it.id);
    assert.ok(it.kind === "term" || it.speed === true, it.id);
  }
});


test("rule construction uses authored misconceptions, never other principles' true elements", () => {
  for (const it of IX.byKind.rule) for (let seed = 1; seed <= 40; seed++) {
    const q = E.qBuild(IX, it, E.rng(seed));
    assert.ok(q);
    const wrong = q.tiles.filter((t) => !q.answer.includes(t));
    assert.ok(wrong.length >= 1);
    for (const t of wrong) assert.ok(it.distractorElements.includes(t), `${it.id}: borrowed a potentially valid principle as a wrong tile: ${t}`);
  }
});


test("trap repairs use four authored scenario-relevant alternatives across 40 seeds", () => {
  for (const it of IX.byKind.trap) for (let seed = 1; seed <= 40; seed++) {
    const q = E.qSpot(IX, it, E.rng(seed));
    assert.deepEqual(q.fixOptions.slice().sort(), [it.right, it.wrong, ...it.fixDistractors].sort());
    assert.equal(new Set(q.fixOptions).size, 4);
  }
});


test("cold guesses use authored alternatives, never overlapping neighboring issue labels", () => {
  for (const it of IX.byKind.hypo) for (let seed = 1; seed <= 40; seed++) {
    const q = E.qIssue(IX, it, E.rng(seed));
    assert.equal(q.guess, true);
    if (it.issueDistractors) {
      assert.deepEqual(q.options.slice().sort(), [it.issue, ...it.issueDistractors].sort());
    } else {
      assert.equal(q.type, "hypo");
      assert.equal(q.call, it.call);
      assert.equal(q.answer, it.options[it.answer].text);
      assert.deepEqual(q.options.map(o => o.text).sort(), it.options.map(o => o.text).sort());
    }
  }
  const it = IX.items.get("u0-h-spillover");
  const q = E.qIssue(IX, it, E.rng(2));
  assert.ok(!q.options.some(o => E.optText(o) === "distribution of consequences"), "a cross-rule label that also describes the facts must not become a wrong answer");
  const authored = {...it,issueDistractors:["a change in the money supply", "the nominal exchange rate", "seasonal measurement"]};
  const issueQ = E.qIssue(IX, authored, E.rng(2));
  assert.equal(issueQ.type, "mcq");
  assert.equal(issueQ.answer, it.issue);
  assert.deepEqual(issueQ.options.slice().sort(), [it.issue,...authored.issueDistractors].sort());
});

test("every numerical exercise uses authored mistakes and excludes all accepted answers from distractors", () => {
  for(const it of IX.byKind.num) for(let seed=1;seed<=40;seed++) {
    const q=E.qNum(IX,it,E.rng(seed),{mcq:true});
    assert.ok(q,`${it.id}: numerical quick check`);
    for(const option of q.options.filter(o=>o!==q.answer)) {
      assert.ok(it.distractors.includes(option),`${it.id}: an unrelated value was generated`);
      assert.ok(!E.accepts([it.answer,...(it.alt||[])],option),`${it.id}: accepted answer shown as wrong`);
    }
    assert.equal(new Set(q.options.map(E.normNum)).size,q.options.length);
    const typed=E.qNum(IX,it,E.rng(seed));
    for(const accepted of typed.answer) assert.ok(E.accepts(typed.answer,accepted));
  }
});

test("the validator distinguishes signed scenario choices while rejecting equivalent numeric spellings", () => {
  const fixture=structuredClone(units.find(u=>u.id==="u0_example"));
  const scenario=fixture.lessons.flatMap(l=>l.items).find(it=>it.kind==="hypo");
  scenario.options.forEach((o,i)=>o.text=["$10","-$10","$20","$30"][i]);
  assert.deepEqual(validateCourse([fixture]).errors,[]);
  scenario.options[1].text="10 dollars";
  assert.ok(validateCourse([fixture]).errors.some(e=>e.includes("options: duplicate")));
});

test("exact-span retrieval requires an authored inference prompt and preserves it", () => {
  const fixture=structuredClone(units.find(u=>u.id==="u0_example"));
  const it=fixture.lessons.flatMap(l=>l.items).find(it=>it.id==="u0-h-spillover");
  const prompt="Tap the phrase naming the external harm omitted by a private-gain-only comparison.";
  assert.equal(it.findAsk,prompt);
  assert.equal(E.qFind(IX,it).prompt,prompt);
  delete it.findAsk;
  assert.ok(validateCourse([fixture]).errors.some(e=>e.includes(it.id)&&e.includes("findAsk")),"broad scenario calls cannot silently substitute for a precise evidence request");
});
