# Independent Rule-lab model review

Reviewed 2026-11-02 against the actual `app/src/models.js` and `app/test/models.test.js`, not the illustrative parameter choices in the earlier research brief. The reviewer did not edit either model file or the UI.

## Scope and conclusion

Read all six lab contracts, equations, input choices, calculations and explanations. Checked the complete supported input space: metrics 2, tax 18, spillover 12, commons 8, public-good 18 and budget 3, for **61 combinations**. Independently checked key algebra, units, accounting identities, boundary cases and the difference between conditional model implications and observed behavior. Parent-authored model tests were also run successfully.

**No mathematical or ethical-framing blocker found.** The two minor display/wording findings below require no model change. Source references resolve through the merged registry. The model contracts state omitted mechanisms, allow reflection rather than moral scoring, and do not turn calculated incentives into fabricated forecasts of human choices.

| Model | Independent mathematical/semantic check |
| --- | --- |
| `metrics` | Fixed fast-plan outputs are 12 closures/6 durable resolutions; careful is 8/8. Paying 2 per closure produces 24 versus16; paying per verified resolution produces12 versus16. The reward ranking reverses without claiming output changed. Perfect verification and omitted audit/effort costs are explicit. This teaches metric alignment, not a causal estimate of an incentive intervention. |
| `tax` | From inverse demand `Pc=100-bQ`, supply `Ps=Q` and wedge `Pc-Ps=t`, quantity is `(100-t)/(b+1)`. Relative to the same-slope no-tax baseline, buyer burden is `t/(b+1)` and seller burden is `bt/(b+1)` per traded unit. Their sum equals the tax; quantity loss is `t/(b+1)`. Revenue is `tQ`, and the triangle loss is `t²/[2(b+1)]`. All allowed inputs remain interior. Collector identity changes neither outcome. Tax receipts are correctly separated from resource loss; the benefits of public spending are outside this model. |
| `spillover` | Integrating `MB=100-5Q` and `MC=10+5Q` gives private net gains `90Q-5Q²`. Subtracting the stated constant per-unit harm h gives `(90-h)Q-5Q²`, maximized at `(90-h)/10`: 8 units for h10 and6 for h30. Both optima are selectable. At h30/Q6, private gains360, harm180 and net180 reconcile; the Q9 baseline gives135. Q0 has zero modeled flows. The text names this money-sum criterion and does not equate the maximum with compensation or permission. |
| `commons` | Harvest occurs before growth; actual aggregate catch cannot exceed stock; next stock is capped at100 after multiplying the remainder by1.25. Four compliant fleets at5 each sustain100 and harvest60 across three seasons. Baseline requests40 each season lead to75,43.75,4.6875 stock. A fleet requesting20 changes the stipulated withdrawal, without the calculator claiming a real probability of noncompliance. Stocks remain nonnegative, and depletion is absorbing under this simplified rule. The proportional-reduction assumption is consistent with the aggregate calculation; no individual catch allocation is displayed. |
| `public-good` | For own contribution c, others each o, multiplier m, own credits are `10-c+m(c+3o)/4`; each other's are `10-o+m(c+3o)/4`. Their sum is `40+(m-1)(c+3o)`. The own-payoff marginal effect is `-1+m/4`, negative at1.6 and positive at4.8; the group effect is m−1. This crosses a genuine conditional incentive boundary. Holding others fixed is explicit; the result does not declare cooperation irrational or inevitable. |
| `budget` | Initial household credits sum160; fund60. Grants equal20/20/20, floor40/20/0 and proportional7.5/15/37.5 each exhaust60. Final household total is220 under every option. Floor produces60/60/100; proportional grants are proportional to20/40/100. The model neither creates resources through redistribution nor chooses a universal fairness principle. Financing and behavioral responses are explicitly outside the comparison. |

## Findings

1. **Minor, fixed — negative zero in tax display.** At slope0.5 or2 and tax0, floating-point subtraction produced a tiny negative buyer-price change, rendered as “$-0”. Reported to the parent; the formatter now normalizes rounded zero, with a regression test. Underlying equilibrium and accounting were correct. The UI already states that displayed values are rounded while calculations use full precision.
2. **Minor, fixed — budget stock/flow labels.** The context and identity use starting credit balances, while a few choices/limits called these “income”. Without a stated income period, “starting credits” and “lowest balances” are more precise. The parent's final labels, limits and perspective now use credit balances; verified directly. This did not affect the valid allocation arithmetic.

After both corrections, all **14 model tests pass**. Both findings are closed.

## Review limits

The coverage applies to the authored 61 combinations, not arbitrary continuous parameters, real ecological forecasts or empirical tax/incentive effects. Invalid field values are rejected. The hypothetical quantities are clearly distinguished from source-supported concepts. Sources support the methods and distinctions; they are not estimates for these fictional cases.

No participant gets an ethical score. Reflection can defend alternative priorities using the stated outcomes and omitted considerations. Exact mathematical conclusions are answerable under their assumptions; broader institutional choices remain open to reasoned disagreement. Browser interaction is reviewed separately by the parent agent.
