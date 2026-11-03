# Oikos institutions author handoff

Completed 2 November 2026. Authored only native `app/src/units/u07.js`–`u12.js` and the institutions research/handoff files. No Agora content, UI, engine, or deployment was changed by this author.

## Scope and teaching lineage

Six units contain 24 lessons and 144 semantic items: four lessons of six items in each unit. Each lesson has a rule with worked examples and two different inline checks, a linked application, and a new held-back transfer after the prerequisite. Fourth lessons contain substantive boundaries and all of their items are marked `boundary:true`. Lesson objectives, takeaways and ungraded fieldwork remain in the inherited data schema. All nine native item kinds occur across these units; there are no invented interaction types.

| Unit | Lesson progression | Boundary tested |
| --- | --- | --- |
| u07 Commons | Resource classification; private/group return; fitted governance; changing conditions | Feasible exclusion can change with technology; resource capacity and governance rules can change |
| u08 Information | Unequal information; selection; hidden action; verification scope | A fee or audit verifies only its stated object, not every quality or outcome |
| u09 Power | Usable alternatives; switching; buyer power; profit and surplus | A price or revenue increase cannot alone identify aggregate welfare or fairness |
| u10 Work | Delegation and goals; incomplete contracts; risk and competing tasks; measurement | Identical expectations can hide risk; missing respondents limit population claims |
| u11 Distribution | Measures and distributions; transfer/resource/budget ledgers; fairness criteria; Pareto and explicit objectives | Possible compensation is not actual compensation; a criterion does not establish universal justice |
| u12 Evidence | Counterfactuals; assignment versus receipt; spillovers and transport; uncertainty and decisions | Conditional causal estimates, adherence, exposure, sensitivity thresholds and values remain distinct |

Normative disagreement is placed in fieldwork rather than treated as a universal scored verdict. Scored fairness cases explicitly supply their criterion. Fictional money and payoff values are not statements of moral worth. Theory uses `status:model`, practical inference routines use `practice`, normative criteria use `ethics`, and original applications use `fictional`.

## Sources and provenance

`institutions-research.md` records research and proposed examples. `institutions-sources.json` supplies I1–I14, each with the precise page, publisher, support and limits. The parent merges these into the course registry. The unit set draws on CORE Econ, Ostrom’s primary Nobel lecture, OECD analysis, Holmström’s primary lecture, the conceptual Goodhart taxonomy, and the 2026 Green and Magenta Books. A preprint or conditional model is not presented as a universal empirical law.

u12 additionally uses the already registered E8 toolkit by Duflo, Glennerster and Kremer. This author opened its original PDF and checked its assignment/receipt, spillover and external-validity sections. No new effect sizes are asserted. All numerical examples and scenarios are original and fictional. Public-good language explicitly means non-rival plus non-excludable for a *pure* public good, with feasibility of exclusion distinguished from merely free access.

## Arithmetic checked independently during authoring

| Unit | Recomputed examples |
| --- | --- |
| u07 | A contribution costs 1 and returns 0.5 to each of four people: private change −0.5, group change +1. Four contributions of 10 yield 20 to each at the stated multiplier. A noticeboard costing 10 and returning 4 to each of four gives private −6 and group +6. A capacity change from 100 to 80 cannot support the old 100-unit aggregate use without another source. |
| u08 | An equally weighted 900/300 pool averages 600. A 600 offer excludes a seller requiring 700 while retaining one requiring 200; the old mixture cannot be retained after that selection. |
| u09 | Staying costs 240 annually; switching costs 12×10+150=270, or 120 when the migration fee is removed. At price 70, one buyer yields profit 50 and buyer surplus 0; at 50, two yield profit 60 and buyer surplus 20. Profit +20 with buyer surplus −30 sums to −10 only under the stated comparable-surplus assumptions. |
| u10 | An equal chance of 100 or 300 has expected payment 200, as does fixed 200; their risk differs. No unstated risk preference is keyed. Identical guaranteed pay and other terms remove that stated risk contrast. |
| u11 | 10,10,10,10,60 have mean 20 and median 10. A 100 transfer plus 10 administration produces 110 payer outlay but 10 additional resource cost under the no-other-effects model. An actual 20 transfer turns 90/20 into 70/40, a Pareto improvement over 60/40. Maximin among 70/30 and 55/50 selects 55/50 only under the supplied objective. |
| u12 | DiD=(70−50)−(55−45)=10 percentage points, conditional on identifying assumptions for a causal reading. Assigned-group rates 60/100 and 50/100 differ by 10 points, not a guaranteed attendance effect or significance result. Cost 600 / 10 additional completions=60. A sensitivity range of 8–12 gives costs 75–50; a ceiling of 70 is not satisfied throughout. |

Every numeric card has authored incorrect calculations and `speed:false`. Numeric accepted aliases are intentional; no multi-step calculation is timed. Every facts-bearing scenario has exact source spans and a narrowly matching `findAsk`. Wrong answer explanations identify misconceptions rather than judge a learner’s character. Every trap has two plausible, local `fixDistractors`.

## Corrections following independent review

Both other agents independently read all six units. Verified corrections included:

- u07-r1/so1/h1/h1b: replace free-access inference with explicit infeasibility of exclusion and newly enforceable technology. Add the private-good sandwich example before classification. Improve u07-tr4’s wrong repair into a plausible quota-inertia misconception.
- u08-r3: name moral hazard in its prior worked example, explicitly separating the arrangement from personal moral worth.
- u09-tr4: replace cash-balance wording with comparable seller profit and buyer surplus before summing welfare changes. Name monopsony power in the preceding worked example. Clarify u09-h1b’s newly usable option.
- u10-x1: turn an otherwise legitimate question into an asserted incorrect shortcut so only the intended answer fits. Include the full identical-terms predicate in u10-h3b’s evidence span.
- u12-so2: remove the no-offer assignment clause from the receipt row; it now states only that Leo receives notes from a friend. u12-r2 explicitly teaches that chance differences can remain between randomized groups before asking about perfect realized balance.

Natural option shortening retained conditional facts in stems and explanations. Final longest-or-tied key counts (whitespace word count) are u07 5/11, u08 0/11, u09 5/10, u10 6/11, u11 4/10, u12 6/11. Length counts are diagnostics rather than claims of equal item difficulty. The final four u12 key-only trims are h1, h1b, h2 and h3b; the sales reviewer independently verified all four in final context and closed the full six-unit signoff.

## Verification and advisory warnings

All twelve production units pass the content validator with zero errors. The native content test suite passed 19/19 after the complete unit set was present and again after the final four u12 key-only refinements. All 42 registered source IDs resolve, with no missing item references. Tests cover generated sittings, held-back transfer order, boundary selection, authored numeric alternatives, local trap repairs and exact-span prompts. Schema success is not evidence of educational efficacy.

The validator reports 16 advisories, all in this unit set: 13 focused matching/sorting sets and three accepted numeric aliases. The compact sets deliberately distinguish four resource types, relevant information/role categories, fairness criteria or tightly controlled contrast cases; adding duplicate rows merely to meet an advisory count would not add a new discrimination. Numeric aliases `10 points` and `10 pp` are accepted only in a prompt explicitly asking for percentage points; `60 units per additional completion` is an explicit form of the asked unit. They need not normalize to the shortened display answer because the engine accepts authored aliases. The content tests confirm no accepted numeric value is emitted as a wrong alternative.

Limits: this author reviewed authored data and generated-question checks, not an independent learner trial. Root owns browser QA, shared-engine changes and publication. Review reports provide the independent content signoffs.
