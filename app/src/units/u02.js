// Original Oikos content. Scenarios and numerical inputs are fictional unless identified otherwise.
(function () {
  const unit = {
  "id": "u02",
  "title": "What changes with one more?",
  "blurb": "Compare the next step, not just the size of the total.",
  "subject": "margins",
  "assume": "All examples are fictional. Financial comparisons use only the explicitly listed consequences. A past commitment can create a future cost; do not assume that every earlier payment is unrecoverable.",
  "lessons": [
    {
      "id": "u02l1",
      "title": "Totals are not additions",
      "objective": "Calculate a change from two totals and distinguish it from an average.",
      "takeaway": "Ask how the next option changes benefits and costs.",
      "fieldwork": "Find one proposal justified by a total. Write the baseline and the added benefit or cost instead.",
      "items": [
        {
          "id": "u02-l1-rule",
          "kind": "rule",
          "say": "An additional net benefit is the change in benefits minus the change in costs.",
          "status": "model",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "The next step is measured from where you stand.",
          "title": "Subtract the baseline before comparing changes",
          "elements": [
            "State the baseline and proposed amount",
            "Subtract baseline totals from new totals",
            "Compare the added benefit with the added cost"
          ],
          "ordered": false,
          "distractorElements": [
            "Use the new total as though all of it were additional",
            "Substitute an average for the next unit’s effect"
          ],
          "ex": [
            {
              "facts": "Total benefit rises from $50 to $80; total cost rises from $30 to $42.",
              "result": "Added benefit is $30, added cost is $12, and added net benefit is $18."
            },
            {
              "facts": "Total benefit stays $80 while total cost rises from $42 to $47.",
              "result": "This change adds no benefit and costs $5: net benefit falls $5."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A larger total benefit guarantees a positive additional net benefit.",
              "a": false,
              "why": "Additional cost can be larger than the benefit increase."
            },
            {
              "t": "mcq",
              "q": "Benefit rises from $40 to $55. What is the marginal benefit of that change?",
              "options": [
                "$15",
                "$55",
                "$95"
              ],
              "a": "$15",
              "why": "Subtract the baseline: $55 minus $40."
            }
          ],
          "exceptions": [
            "The comparison needs the same period, units and included effects on both sides."
          ]
        },
        {
          "id": "u02-l1-term",
          "kind": "term",
          "say": "The additional benefit from a specified increase in an activity.",
          "status": "model",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "The next slice is different from the whole cake.",
          "term": "Marginal benefit",
          "meaning": "The additional benefit from a specified increase in an activity.",
          "use": "Compare total benefit with and without the added activity.",
          "lang": "english"
        },
        {
          "id": "u02-l1-h1",
          "kind": "hypo",
          "say": "Compare differences on both sides.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Compare differences on both sides.",
          "stem": "A cooperative is comparing three jobs with four. Total revenue would rise from $160 to $190, and total cost from $110 to $135. There are no other effects. Its criterion is net revenue minus cost.",
          "call": "What does taking the fourth job change?",
          "issue": "additional net benefit",
          "rule": "u02-l1-rule",
          "options": [
            {
              "text": "Net benefit rises by $5.",
              "why": "Revenue adds $30 and cost adds $25, leaving $5 more."
            },
            {
              "text": "Net benefit rises by $55.",
              "why": "That is the new total net benefit, not its change from $50.",
              "trap": 5
            },
            {
              "text": "Net benefit falls by $25.",
              "why": "This counts the added cost but omits the $30 added revenue.",
              "trap": 9
            },
            {
              "text": "Net benefit rises by $190.",
              "why": "Most of that revenue already belongs to the baseline.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "from $160 to $190",
            "from $110 to $135"
          ],
          "findAsk": "Which two changes must be compared to calculate the fourth job’s additional net benefit?"
        },
        {
          "id": "u02-l1-sort",
          "kind": "sort",
          "say": "Totals, averages and additions answer different questions.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Totals, averages and additions answer different questions.",
          "q": "Classify each figure in this stated comparison: total benefit is $80 for two sessions and $105 for three.",
          "buckets": [
            "Total",
            "Average per session",
            "Additional third-session benefit"
          ],
          "items": [
            {
              "text": "$80 for the two-session baseline",
              "bucket": "Total",
              "why": "It is the benefit of the whole baseline amount."
            },
            {
              "text": "$105 for all three sessions",
              "bucket": "Total",
              "why": "It is the complete three-session benefit."
            },
            {
              "text": "$40 per session at two sessions",
              "bucket": "Average per session",
              "why": "$80 divided by two gives this average."
            },
            {
              "text": "$35 per session at three sessions",
              "bucket": "Average per session",
              "why": "$105 divided by three gives this average."
            },
            {
              "text": "$25 gained by moving from two to three",
              "bucket": "Additional third-session benefit",
              "why": "$105 minus $80 isolates the third session."
            },
            {
              "text": "The difference $105 − $80",
              "bucket": "Additional third-session benefit",
              "why": "This calculates the additional benefit, not an average."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u02-l1-h2",
          "kind": "hypo",
          "say": "A changed additional cost can reverse the conclusion.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "A changed additional cost can reverse the conclusion.",
          "stem": "For the same move from three jobs to four, revenue still rises from $160 to $190. Revised information says total cost would rise from $110 to $150. No other effects differ.",
          "call": "What does the revised cost imply under the same net-benefit criterion?",
          "issue": "changed incremental cost",
          "rule": "u02-l1-rule",
          "options": [
            {
              "text": "Take it because $190 is larger than $160.",
              "why": "This ignores the larger cost increase.",
              "trap": 9
            },
            {
              "text": "The fourth job lowers net benefit by $10.",
              "why": "Its $30 additional revenue is less than its $40 additional cost."
            },
            {
              "text": "It raises net benefit by $40.",
              "why": "$40 is the added cost, not the net gain.",
              "trap": 5
            },
            {
              "text": "It still adds $5 because the revenue figures are unchanged.",
              "why": "The relevant cost information has changed.",
              "trap": 11
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "total cost would rise from $110 to $150"
          ],
          "findAsk": "Which detail supplies the revised total-cost comparison?"
        },
        {
          "id": "u02-l1-num",
          "kind": "num",
          "say": "Subtract $80 from $105; do not divide the new total by three.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Subtract $80 from $105; do not divide the new total by three.",
          "ask": "Total benefit is $80 for two sessions and $105 for three. What is the third session’s additional benefit, in dollars?",
          "answer": "$25",
          "distractors": [
            "$105",
            "$35",
            "$40"
          ],
          "speed": false,
          "alt": [
            "25",
            "25 dollars"
          ]
        },
        {
          "id": "u02-l1-transfer",
          "kind": "hypo",
          "say": "A marginal conclusion applies to the specified change.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "A marginal conclusion applies to the specified change.",
          "stem": "A library compares opening six days with seven. The seventh day adds benefits valued at 18 credits and staff costs of 24 credits. The stated criterion is total benefits minus costs; no other effects differ.",
          "call": "What follows for this one-day extension?",
          "issue": "additional benefit versus cost",
          "rule": "u02-l1-rule",
          "options": [
            {
              "text": "It adds 42 credits of net benefit.",
              "why": "Costs must be subtracted under the stated criterion.",
              "trap": 5
            },
            {
              "text": "It must be added because existing days are valuable.",
              "why": "The value of existing days does not establish the seventh day’s margin.",
              "trap": 6
            },
            {
              "text": "It reduces the stated net benefit by 6 credits.",
              "why": "The additional comparison is 18 minus 24."
            },
            {
              "text": "Libraries should never open seven days.",
              "why": "Other inputs or criteria could give another result.",
              "trap": 7
            }
          ],
          "answer": 2,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "adds benefits valued at 18 credits",
            "staff costs of 24 credits"
          ],
          "findAsk": "Which two amounts describe the extension’s added benefits and costs?"
        }
      ]
    },
    {
      "id": "u02l2",
      "title": "Choose how many, under stated conditions",
      "objective": "Use an incremental schedule and check all feasible quantities when identifying the best total.",
      "takeaway": "A positive total does not make every extra unit worthwhile.",
      "fieldwork": "For a repeated activity, ask whether the next unit has the same benefit and cost as the previous one.",
      "items": [
        {
          "id": "u02-l2-rule",
          "kind": "rule",
          "say": "With the specified schedule, compare each added benefit and cost before choosing an amount.",
          "status": "model",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "A profitable basket can still contain one apple too many.",
          "title": "Check the next unit and the feasible totals",
          "elements": [
            "Use the stated incremental benefits",
            "Include each incremental opportunity cost",
            "Check the feasible totals under the objective"
          ],
          "ordered": false,
          "distractorElements": [
            "Continue whenever the total remains positive",
            "Assume a first-unit gain applies to all later units"
          ],
          "ex": [
            {
              "facts": "Three separable units add benefits 50, 30 and 10; each costs 20.",
              "result": "Net totals are 0, 30, 40 and 30. Two units maximize this stated total."
            },
            {
              "facts": "The third unit instead costs 5, with all other entries unchanged.",
              "result": "It now adds 5, so three units give the larger total."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A fourth unit can reduce net benefit even when four units still have a positive total.",
              "a": true,
              "why": "The extra unit’s contribution can be negative while earlier gains remain."
            },
            {
              "t": "mcq",
              "q": "One more unit adds benefit 12 and cost 17. What is its marginal net benefit?",
              "options": [
                "29",
                "−5",
                "5"
              ],
              "a": "−5",
              "why": "12 minus 17 is −5."
            }
          ],
          "exceptions": [
            "The schedule here has separable units. Thresholds and bundles require comparing whole feasible options."
          ]
        },
        {
          "id": "u02-l2-term",
          "kind": "term",
          "say": "The additional cost, including relevant forgone alternatives, of a specified increase in activity.",
          "status": "model",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Ask what one more actually uses.",
          "term": "Marginal cost",
          "meaning": "The additional cost, including relevant forgone alternatives, of a specified increase in activity.",
          "use": "Use the next unit’s cost rather than the average of earlier units.",
          "lang": "english"
        },
        {
          "id": "u02-l2-h1",
          "kind": "hypo",
          "say": "The next unit must improve the comparison, not merely leave something positive.",
          "status": "fictional",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "The next unit must improve the comparison, not merely leave something positive.",
          "stem": "A studio has completed three jobs. A fourth would bring $10 of additional benefit and cost $20. The existing jobs’ $70 net benefit will be unchanged. There are no other effects, and the goal is maximum net benefit.",
          "call": "Which conclusion follows for the fourth job?",
          "issue": "margin versus positive total",
          "rule": "u02-l2-rule",
          "options": [
            {
              "text": "Add it because $60 would still be positive.",
              "why": "A positive total can be worse than the available $70 baseline.",
              "trap": 4
            },
            {
              "text": "Stop at three: the fourth subtracts $10.",
              "why": "The fourth lowers the total from $70 to $60."
            },
            {
              "text": "Add it because every job creates some benefit.",
              "why": "Its $10 benefit is smaller than its cost.",
              "trap": 9
            },
            {
              "text": "Cancel all jobs because the fourth loses money.",
              "why": "The prior jobs retain their stated $70 gain.",
              "trap": 7
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "existing jobs’ $70 net benefit will be unchanged"
          ],
          "findAsk": "Which detail holds the existing jobs’ net benefit fixed?"
        },
        {
          "id": "u02-l2-num",
          "kind": "num",
          "say": "The net totals are $0, $40, $65, $70 and $60; the maximum is at three.",
          "status": "fictional",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "The net totals are $0, $40, $65, $70 and $60; the maximum is at three.",
          "ask": "Up to four separable jobs add benefits of $60, $45, $25 and $10 in that order. Each costs $20; no other effects occur. Which number of jobs maximizes net benefit among 0, 1, 2, 3 and 4?",
          "answer": "3 jobs",
          "distractors": [
            "4 jobs",
            "2 jobs",
            "1 job"
          ],
          "speed": false,
          "alt": [
            "3",
            "three jobs"
          ]
        },
        {
          "id": "u02-l2-h2",
          "kind": "hypo",
          "say": "Keep the method; update the inputs.",
          "status": "fictional",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Keep the method; update the inputs.",
          "stem": "The studio’s fourth job still adds $10 of benefit, but a verified process change reduces its additional cost to $5. The previous jobs remain unchanged, and no other effect occurs.",
          "call": "What follows under the same net-benefit goal?",
          "issue": "changed marginal cost",
          "rule": "u02-l2-rule",
          "options": [
            {
              "text": "Stop because fourth jobs always lose money.",
              "why": "The result depended on the original $20 cost.",
              "trap": 11
            },
            {
              "text": "Add it because the entire project now costs only $5.",
              "why": "The new figure is the fourth job’s cost, not every job’s total.",
              "trap": 5
            },
            {
              "text": "Add the fourth job: it now contributes $5.",
              "why": "The changed cost makes the additional benefit exceed the additional cost."
            },
            {
              "text": "Its additional net benefit is $15.",
              "why": "That adds benefit and cost instead of subtracting.",
              "trap": 5
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "reduces its additional cost to $5",
            "no other effect occurs"
          ],
          "findAsk": "Which details identify the changed cost and exclude other new effects?"
        },
        {
          "id": "u02-l2-trap",
          "kind": "trap",
          "say": "Positive is not the same as greatest.",
          "status": "fictional",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Positive is not the same as greatest.",
          "stem": "Four sessions produce total net benefits of $60; three produce $70. Both are feasible and the goal is to maximize that total.",
          "wrong": "Four sessions are best because $60 is positive.",
          "right": "Three sessions are better under this goal because $70 exceeds $60.",
          "why": "The relevant comparison is with the feasible alternative, not with zero alone.",
          "fixDistractors": [
            "Four are best because the average can be ignored.",
            "Reject both because neither total equals zero."
          ],
          "cat": 4
        },
        {
          "id": "u02-l2-transfer",
          "kind": "hypo",
          "say": "Do not invent a tie-breaker that the model does not contain.",
          "status": "fictional",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Do not invent a tie-breaker that the model does not contain.",
          "stem": "A repair shop can run zero, one or two evening clinics. Their complete net benefits are respectively 0, 25 and 25 credits. Both positive options meet every constraint. The only stated goal is maximum net benefit.",
          "call": "What does this model identify?",
          "issue": "ties under an objective",
          "rule": "u02-l2-rule",
          "options": [
            {
              "text": "Two clinics uniquely maximize the total.",
              "why": "One clinic has exactly the same total.",
              "trap": 3
            },
            {
              "text": "One clinic uniquely maximizes the total.",
              "why": "Two clinics have exactly the same total.",
              "trap": 3
            },
            {
              "text": "Zero clinics maximize the total because there is no cost.",
              "why": "Their complete net benefit is lower than 25.",
              "trap": 4
            },
            {
              "text": "One and two clinics tie for the maximum.",
              "why": "Both give 25; the stated criterion does not break the tie."
            }
          ],
          "answer": 3,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "25 and 25 credits",
            "only stated goal"
          ],
          "findAsk": "Which details establish the tie in net benefit and the absence of another stated goal?"
        }
      ]
    },
    {
      "id": "u02l3",
      "title": "Leave irrecoverable costs in the past",
      "objective": "Separate sunk expenditure from the costs and benefits changed by a live decision.",
      "takeaway": "Past spending matters for records; only recoverable or future consequences change this comparison.",
      "fieldwork": "In one current project, separate irrecoverable past spending from future obligations and recoverable amounts.",
      "items": [
        {
          "id": "u02-l3-rule",
          "kind": "rule",
          "say": "A sunk cost is already incurred and cannot be recovered by the options now available.",
          "status": "model",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "The rear-view mirror records the journey; it does not show the next turn.",
          "title": "Ask which consequences can still change",
          "elements": [
            "Identify the live alternatives",
            "Separate irrecoverable past costs",
            "Compare future and recoverable consequences"
          ],
          "ordered": false,
          "distractorElements": [
            "Continue solely to make past spending feel worthwhile",
            "Assume all costs created by an old decision are sunk"
          ],
          "ex": [
            {
              "facts": "An event spent $600 irrecoverably. Going ahead adds $260 receipts and $120 costs, with no other effects.",
              "result": "Continuing adds $140 compared with cancelling; the old $600 is common to both."
            },
            {
              "facts": "Cancelling would incur a fee tomorrow.",
              "result": "That fee is a future consequence to include, even if the contract was signed earlier."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A cancellation fee due only if you cancel is irrelevant because the contract was signed last month.",
              "a": false,
              "why": "The payment differs between the current alternatives and belongs in the comparison."
            },
            {
              "t": "mcq",
              "q": "Which amount is sunk in the stated decision?",
              "options": [
                "A deposit returned if you stop",
                "A fee payable only if you continue",
                "A past nonrefundable fee unchanged by either option"
              ],
              "a": "A past nonrefundable fee unchanged by either option",
              "why": "Only the last amount is both incurred and unrecoverable across the options."
            }
          ]
        },
        {
          "id": "u02-l3-term",
          "kind": "term",
          "say": "A cost already incurred that cannot be recovered through the options now available.",
          "status": "model",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Past and irrecoverable are both necessary.",
          "term": "Sunk cost",
          "meaning": "A cost already incurred that cannot be recovered through the options now available.",
          "use": "Do not confuse a historical contract with an unavoidable future payment.",
          "lang": "english"
        },
        {
          "id": "u02-l3-h1",
          "kind": "hypo",
          "say": "A sound action still needs a sound reason.",
          "status": "fictional",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "A sound action still needs a sound reason.",
          "stem": "An event has spent $600 that cannot be recovered. Continuing would bring $260 in new receipts and require $120 in new costs. Cancelling brings no further receipt or cost. All other effects are stipulated equal.",
          "call": "Which statement fits a net-cash comparison from now?",
          "issue": "sunk spending and live options",
          "rule": "u02-l3-rule",
          "options": [
            {
              "text": "Cancel because $260 cannot repay the old $600.",
              "why": "Recovering the sunk amount is not an available alternative.",
              "trap": 4
            },
            {
              "text": "Continue only because $600 has already been spent.",
              "why": "That is a reason about the unchanged past, not the live $140 gain.",
              "trap": 1
            },
            {
              "text": "Continuing improves future net cash by $140.",
              "why": "The $600 is unchanged; the live difference is $260 minus $120."
            },
            {
              "text": "Continuing creates a new $460 loss.",
              "why": "This reintroduces the common sunk expense into only one option.",
              "trap": 5
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "$600 that cannot be recovered",
            "All other effects are stipulated equal"
          ],
          "findAsk": "Which details remove the old expenditure and other effects from the difference between live options?"
        },
        {
          "id": "u02-l3-sort",
          "kind": "sort",
          "say": "An earlier decision can still leave live financial consequences.",
          "status": "fictional",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "An earlier decision can still leave live financial consequences.",
          "q": "Classify the amount from the decision maker’s current options.",
          "buckets": [
            "Sunk",
            "Still changes with the choice"
          ],
          "items": [
            {
              "text": "Last month’s nonrefundable booking fee; neither option recovers it.",
              "bucket": "Sunk",
              "why": "It is incurred and unrecoverable."
            },
            {
              "text": "A refundable deposit returned only on cancellation.",
              "bucket": "Still changes with the choice",
              "why": "The refund differs between options."
            },
            {
              "text": "Tomorrow’s wages paid only if the event runs.",
              "bucket": "Still changes with the choice",
              "why": "They are an avoidable future expense."
            },
            {
              "text": "Yesterday’s completed, nonrefundable design work.",
              "bucket": "Sunk",
              "why": "The work cannot be undone or refunded here."
            },
            {
              "text": "A cancellation charge triggered by stopping today.",
              "bucket": "Still changes with the choice",
              "why": "It is a consequence of a live option."
            },
            {
              "text": "Past travel spending with no refund or resale value.",
              "bucket": "Sunk",
              "why": "It is already incurred and cannot be recovered."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u02-l3-h2",
          "kind": "hypo",
          "say": "Removing a bad reason does not choose the answer for you.",
          "status": "fictional",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Removing a bad reason does not choose the answer for you.",
          "stem": "A course fee is nonrefundable. A learner can finish its remaining sessions or use the time for a confirmed paid task. Future enjoyment, learning, effort and income differ between the options, but have not been compared.",
          "call": "What follows from the fee being sunk?",
          "issue": "sunk fee and incomplete comparison",
          "rule": "u02-l3-rule",
          "options": [
            {
              "text": "They should always finish any paid course.",
              "why": "This treats the sunk fee as sufficient reason.",
              "trap": 5
            },
            {
              "text": "They should immediately abandon the course.",
              "why": "Future learning or enjoyment could justify continuing.",
              "trap": 3
            },
            {
              "text": "The paid task must win because it produces cash.",
              "why": "The learner’s full objective has not been specified.",
              "trap": 4
            },
            {
              "text": "Compare the remaining consequences before choosing.",
              "why": "The fee alone does not establish which live option is preferable."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "Future enjoyment, learning, effort and income differ",
            "have not been compared"
          ],
          "findAsk": "Which details show that future consequences still need comparison?"
        },
        {
          "id": "u02-l3-steps",
          "kind": "steps",
          "say": "A sunk-cost check narrows the comparison; it does not erase the future.",
          "status": "practice",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "A sunk-cost check narrows the comparison; it does not erase the future.",
          "title": "Separate the past from the decision",
          "steps": [
            "List the available next actions",
            "Mark amounts unchanged and unrecoverable across those actions",
            "List future payments, receipts and recoveries that differ",
            "Compare those consequences under the stated objective"
          ],
          "distractors": [
            "Add an irrecoverable cost to only one option",
            "Discard a refund merely because its deposit was paid earlier"
          ],
          "applyTo": {
            "facts": "You have listed the live actions and marked the common irrecoverable spending. You have not listed the remaining payments or refunds.",
            "stop": "List future payments, receipts and recoveries that differ",
            "why": "Next identify the consequences that differ."
          }
        },
        {
          "id": "u02-l3-transfer",
          "kind": "hypo",
          "say": "A project’s history is not a substitute for evaluating its next experiment.",
          "status": "fictional",
          "sourceIds": [
            "F2"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "A project’s history is not a substitute for evaluating its next experiment.",
          "stem": "A firm paid for a prototype that has no resale value. It can stop now or pay for a further test. The old prototype expense is identical under either option; the new test might provide useful information, but its value and price are not given.",
          "call": "What can be concluded?",
          "issue": "sunk cost without future inputs",
          "rule": "u02-l3-rule",
          "options": [
            {
              "text": "The old expense alone cannot justify the new test.",
              "why": "The test requires its own comparison of future information value and cost."
            },
            {
              "text": "Every further test wastes money because the prototype cannot be sold.",
              "why": "Useful information could still have value.",
              "trap": 7
            },
            {
              "text": "A further test is required to recover the prototype expense.",
              "why": "The scenario says that expense cannot be recovered.",
              "trap": 3
            },
            {
              "text": "The test has zero opportunity cost because development has started.",
              "why": "Starting a project does not remove future resource costs.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "old prototype expense is identical under either option"
          ],
          "findAsk": "Which detail makes the old expense irrelevant to the difference between the live options?"
        }
      ]
    },
    {
      "id": "u02l4",
      "title": "Refunds, thresholds and bundles",
      "objective": "Compare complete feasible packages when refunds or complementary activities alter marginal reasoning.",
      "takeaway": "Check what can be recovered and what must be chosen together.",
      "fieldwork": "Before a continuation decision, look for one recoverable amount or package requirement that a one-step comparison could miss.",
      "items": [
        {
          "id": "u02-l4-rule",
          "kind": "rule",
          "say": "Recoveries and complementarities can change which complete option has the higher net benefit.",
          "status": "model",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Check the return policy and the pieces that fit together.",
          "title": "Compare the actual packages available",
          "elements": [
            "Include recoverable amounts as live alternatives",
            "Identify activities that must be evaluated together",
            "Compare all relevant feasible packages"
          ],
          "ordered": false,
          "distractorElements": [
            "Call every paid deposit sunk",
            "Reject a beneficial bundle because its first component alone loses"
          ],
          "ex": [
            {
              "facts": "Continuing returns $140 from now; cancelling returns a $200 deposit. Nothing else differs.",
              "result": "Cancelling returns $60 more; the deposit is a live alternative."
            },
            {
              "facts": "One setup session costs 15 credits and gives no benefit. Adding its required second session costs 15 more and creates 50 credits of total benefit.",
              "result": "The complete two-session package nets 20, although setup alone nets −15."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A refundable deposit is sunk merely because it was paid yesterday.",
              "a": false,
              "why": "A recovery still available today changes the current comparison."
            },
            {
              "t": "mcq",
              "q": "The only feasible choices are no program or a two-part program costing 30 and benefiting 50. What maximizes the stated net benefit?",
              "options": [
                "The full program, with net benefit 20",
                "No program, because the first part has a cost",
                "The first part alone, although it is unavailable"
              ],
              "a": "The full program, with net benefit 20",
              "why": "Compare feasible complete alternatives, not an unavailable partial program."
            }
          ]
        },
        {
          "id": "u02-l4-term",
          "kind": "term",
          "say": "A relationship in which doing one activity increases the usefulness or payoff of another.",
          "status": "model",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "A key and a lock are not evaluated as two unrelated objects.",
          "term": "Complementarity",
          "meaning": "A relationship in which doing one activity increases the usefulness or payoff of another.",
          "use": "A setup step may have little value alone but enable a valuable complete service.",
          "lang": "english"
        },
        {
          "id": "u02-l4-h1",
          "kind": "hypo",
          "say": "A recoverable past payment is a present alternative.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "A recoverable past payment is a present alternative.",
          "stem": "An event has $600 of irrecoverable spending and a separate $200 deposit refundable only if cancelled now. Continuing brings $260 new receipts and $120 new costs, with no deposit refund. No other consequences differ.",
          "call": "Which option provides more net cash from now?",
          "issue": "recoverable deposit",
          "rule": "u02-l4-rule",
          "options": [
            {
              "text": "Continue because $260 exceeds $120.",
              "why": "This omits the recoverable deposit in the alternative.",
              "trap": 9
            },
            {
              "text": "Continue because the $200 deposit is already paid.",
              "why": "It remains recoverable, so it is not sunk.",
              "trap": 5
            },
            {
              "text": "Cancel to recover the entire $800 previously paid.",
              "why": "Only the separate $200 deposit is refundable.",
              "trap": 3
            },
            {
              "text": "Cancel: its $200 return exceeds continuing’s $140.",
              "why": "Continuing produces $260 minus $120; cancellation recovers the separate $200."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "$200 deposit refundable only if cancelled now",
            "No other consequences differ"
          ],
          "boundary": true,
          "findAsk": "Which details make the refund conditional on cancellation and exclude other differing consequences?"
        },
        {
          "id": "u02-l4-num",
          "kind": "num",
          "say": "Continuing returns $140 versus a $200 refund: $140 minus $200 is −$60.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Continuing returns $140 versus a $200 refund: $140 minus $200 is −$60.",
          "ask": "Continuing an event brings $260 new receipts and $120 new costs. Cancelling instead refunds a $200 deposit. Nothing else differs. What is continuing’s net-cash advantage over cancelling, in dollars?",
          "answer": "-$60",
          "distractors": [
            "$140",
            "$340",
            "$60"
          ],
          "speed": false,
          "alt": [
            "-60",
            "minus 60 dollars"
          ]
        },
        {
          "id": "u02-l4-h2",
          "kind": "hypo",
          "say": "Evaluate the offered bundle, not an imaginary fragment.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Evaluate the offered bundle, not an imaginary fragment.",
          "stem": "A training program can be skipped or bought as two sessions. Setup alone is unavailable. The pair costs 30 credits and creates 50 credits of benefit. All consequences are included, and the goal is maximum net benefit.",
          "call": "Which comparison fits the available choice?",
          "issue": "complete feasible package",
          "rule": "u02-l4-rule",
          "options": [
            {
              "text": "The pair nets 20, compared with zero for skipping.",
              "why": "The program is the complete feasible package."
            },
            {
              "text": "Reject it because setup has no standalone benefit.",
              "why": "The standalone setup is not the offered choice.",
              "trap": 10
            },
            {
              "text": "Buy only setup to avoid the second session’s cost.",
              "why": "That partial package is unavailable.",
              "trap": 3
            },
            {
              "text": "The pair nets 80 because both benefit and cost matter.",
              "why": "Both matter, but cost is subtracted.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "Setup alone is unavailable",
            "All consequences are included"
          ],
          "boundary": true,
          "findAsk": "Which details rule out buying setup alone and establish the completeness of the benefit comparison?"
        },
        {
          "id": "u02-l4-trap",
          "kind": "trap",
          "say": "Local comparisons need the right feasible unit.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Local comparisons need the right feasible unit.",
          "stem": "A service requires both installation and activation. Installation alone has negative net benefit; the complete feasible package has positive net benefit under the stated criterion.",
          "wrong": "Installation alone loses, so the complete package must lose.",
          "right": "Compare the complete package with its feasible alternative.",
          "why": "The first component’s standalone result does not determine the package result when the components work together.",
          "fixDistractors": [
            "Treat installation cost as zero because activation needs it.",
            "Choose activation alone even though it cannot operate without installation."
          ],
          "cat": 10,
          "boundary": true
        },
        {
          "id": "u02-l4-transfer",
          "kind": "hypo",
          "say": "Compare the full schedule when an early step enables a later benefit.",
          "status": "fictional",
          "sourceIds": [
            "F2",
            "F3"
          ],
          "src": "OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Compare the full schedule when an early step enables a later benefit.",
          "stem": "A maker can choose zero, one or two production stages. One stage costs 15 credits and yields no benefit. Two stages cost 30 total and yield 50 total. No other effects occur; the goal is maximum net benefit.",
          "call": "Which option meets that goal?",
          "issue": "lumpy benefits and complete options",
          "rule": "u02-l4-rule",
          "options": [
            {
              "text": "Zero stages, because stage one alone loses 15.",
              "why": "This ignores the feasible complementary two-stage package.",
              "trap": 9
            },
            {
              "text": "Two stages, with net benefit 20.",
              "why": "The complete totals are 0, −15 and 20; two is highest."
            },
            {
              "text": "One stage, because it has the smallest positive cost.",
              "why": "Lowest positive cost is not the stated net-benefit objective.",
              "trap": 4
            },
            {
              "text": "Two stages, with net benefit 35.",
              "why": "The two-stage package costs 30 total, not only 15.",
              "trap": 9
            }
          ],
          "answer": 1,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "Two stages cost 30 total and yield 50 total",
            "goal is maximum net benefit"
          ],
          "boundary": true,
          "findAsk": "Which details state the pair’s total payoff inputs and the criterion used to compare options?"
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
