# Oikos browser verification

Parent integration review, 2 November 2026. Tested through the actual in-app browser against the static working preview. Test activity belongs to a separate localhost origin; no existing course progress was changed.

## Completed interactions

- Onboarding, the inherited learning path, three navigation tabs, Pip's mascot placement, and light/dark appearance. Checked the layout at a 390 × 844 phone viewport and at normal browser width; restored the viewport after testing.
- Completed both first-unit lessons “Which options are actually open?” and “Find the next-best alternative.” Observed unscored first guess, direct instruction, immediate checks, varied harder retrieval, fresh transfer, and end-of-sitting retries. Deliberate mistakes keep explanatory feedback visible until Continue. Correct classification can advance automatically. Completion awards practice XP and provides unscored fieldwork.
- Verified typed numeric grading: `100 percent` is rejected for a dollar answer; the authored alias `100 dollars` is accepted on retry. The numerical multiple-choice check offers relevant authored mistakes rather than unrelated values.
- Checked exact-fact selection with precise prompts. Correctly selecting the cancelled job and the remaining-options condition passes; selecting the avoidable input cost and shared time slot passes. Earlier broad prompts and incomplete fact spans were reported, corrected, and independently reviewed.
- Completed a five-question daily set, receiving 5/5 and the expected completion state. Ordinary scenarios have no countdown. Completed a five-card flash review, including reveal before self-assessment.
- Entered mixed practice, selected and flagged an answer, moved forward and back, and verified both states remain announced. Leaving the unfinished challenge requires a confirmation and does not score it. Added pressed-state semantics to the inherited visual selection controls and rechecked them in the accessibility tree.
- Searched the Field guide for tax incidence, expanded provenance, and verified the visible source links and limits. Guide content carries distinct conditional-model and fictional-case labels.
- Exported a test backup, opened import confirmation, cancelled without replacement, and then imported the same backup. Two completed lessons, 24 XP, six explored labs, appearance and the tax reflection survived the round trip. Reload also preserved learning state.
- Independently raised stale-tab finding was fixed with guarded, serialized saves and a conflict dialog. In two actual tabs, saving a changed daily goal in the first stopped the older second tab from saving; its export remained available, and Reload latest restored the newer goal with 46 XP intact. Closed the second test tab and restored the original test goal. Web Locks serialize writes where supported; other browsers retain the snapshot/event guard. There is no automatic merge of divergent progress.
- All six Rule labs were run through their actual controls. Prediction, baseline comparison, equations, omitted assumptions, affected perspectives, source links and unscored reflection are available. Changing inputs hides stale results until rerun. Result focus/scrolling was corrected so the comparison heading is visible.
- Tax lab: symmetric tax20 gives quantity40, buyer60, seller40, receipts800, surplus loss100. Changing demand slope and collection side produces the checked asymmetric burden while keeping collection-side equivalence. The reflection “Check how the public revenue is used before evaluating the policy.” survives backup/import.
- Public-good lab: own10, others5, multiplier1.6 yields own10, each other15 and group55. Metrics lab: verified-resolution pay gives12 versus16 while unresolved cases stay6 versus0. Commons lab: limit5 with one fleet requesting20 gives end stocks81.25,57.81,28.52 and total catch105. Spillover lab: quantity6/harm10 gives private360, external60, net300. Budget lab: floor allocation gives60/60/100, total220.
- Console warning/error log was empty at the integration checkpoint.
- Opened the complete twelve-unit production build on its separate fresh local origin, checked onboarding, all unit headings, and both themes. Imported an explicitly generated QA-only fixture completing the four Unit 5 lessons, then manually completed its nine-question roundup (including its six-row classification and four-pair matching). The roundup saved completion, awarded22XP, and its “Who really pays?” button opened the tax lab directly. This tests integration; the imported prerequisite completions are test data, not manually completed lessons.

## Findings resolved during interaction

1. The room-availability example used “free” ambiguously; changed to “available.”
2. Exact-fact questions asked broad questions while grading a narrower pair of spans. Added an authored `findAsk` contract and precise prompts; included missing confirmation wording where needed.
3. Conditional-model labels and ordinary ethical reflection remain separate from correctness scoring.
4. Lab results initially focused too far down the screen; explicit focus and scroll now start at the comparison heading. Lab/library headers use Explore rather than an empty lesson-progress bar.

## Limits

This is sampled manual interaction, not a claim that every authored question was manually played. Automated generation checks cover every lesson and roundup across multiple seeds, and independent content reviewers read all units separately. The model review checks all 61 supported input combinations. No learner trial or claim of measured educational efficacy is made. Source publishing and the final independent critic are recorded separately.
