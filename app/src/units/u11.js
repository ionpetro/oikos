(function () {
  const unit = {
  "id": "u11",
  "title": "Beyond the average",
  "subject": "distribution",
  "blurb": "Separate totals, individual changes, resource costs and fairness criteria.",
  "assume": "All distributions are fictional. Monetary totals do not measure moral worth or all wellbeing. Every scored comparison states its population, assumptions or objective.",
  "lessons": [
    {
      "id": "u11l1",
      "title": "A total is not a person",
      "objective": "Read distributions and distinguish a money measure from a broader outcome.",
      "takeaway": "Report what is measured, for whom and over what period before interpreting an average.",
      "fieldwork": "Choose an average you encounter. What distribution or non-money outcome would make it more informative?",
      "items": [
        {
          "id": "u11-r1",
          "kind": "rule",
          "say": "Income, output and wellbeing answer different questions; an average can hide large differences within its population.",
          "status": "practice",
          "sourceIds": [
            "I10",
            "I12",
            "I13"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Measuring economic inequality: The Gini coefficient (The Economy 2.0, §5.12) · The Green Book: Appraisal and evaluation in central government",
          "hook": "The average household is a calculation, not a resident.",
          "title": "Name the measure and the distribution",
          "elements": [
            "Name the quantity and period",
            "Specify the included people or households",
            "Inspect individual or group differences",
            "Keep unmeasured outcomes visible"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat a higher money average as proof everyone is better off"
          ],
          "ex": [
            {
              "facts": "Five equal-size households receive annual incomes 10,10,10,10 and 60 in the same price units.",
              "result": "Their mean is 20; the median, the middle sorted value, is 10."
            },
            {
              "facts": "A course earns more revenue but has no learning-outcome evidence.",
              "result": "The revenue change alone does not establish greater learning or wellbeing."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An average income of 20 means every household receives 20.",
              "a": false,
              "why": "Many distributions can have that same average."
            },
            {
              "t": "mcq",
              "q": "Which information is needed before comparing two income averages?",
              "options": [
                "The population and time period",
                "Only the larger printed number",
                "Whether the chart uses blue"
              ],
              "a": "The population and time period",
              "why": "A changed population or period can change what the comparison means."
            }
          ]
        },
        {
          "id": "u11-t1",
          "kind": "term",
          "say": "The middle value after observations are ordered; with an even count, the average of the two middle values.",
          "status": "practice",
          "sourceIds": [
            "I10",
            "I12",
            "I13"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Measuring economic inequality: The Gini coefficient (The Economy 2.0, §5.12) · The Green Book: Appraisal and evaluation in central government",
          "hook": "For 10,10,10,10,60 the median is 10 even though the mean is 20.",
          "term": "Median",
          "meaning": "The middle value after observations are ordered; with an even count, the average of the two middle values.",
          "use": "For 10,10,10,10,60 the median is 10 even though the mean is 20.",
          "lang": "english"
        },
        {
          "id": "u11-n1",
          "kind": "num",
          "say": "The total 100 divided by five households gives 20.",
          "status": "fictional",
          "sourceIds": [
            "I10",
            "I12",
            "I13"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Measuring economic inequality: The Gini coefficient (The Economy 2.0, §5.12) · The Green Book: Appraisal and evaluation in central government",
          "hook": "Keep the units and the comparison visible.",
          "ask": "Five equal-size households have annual incomes 10,10,10,10 and 60 in the same units. What is their mean annual income?",
          "answer": "20 units",
          "alt": [
            "20"
          ],
          "distractors": [
            "10 units",
            "100 units"
          ],
          "speed": false
        },
        {
          "id": "u11-h1",
          "kind": "hypo",
          "say": "Ask who moves in each direction.",
          "status": "fictional",
          "sourceIds": [
            "I10",
            "I12",
            "I13"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Measuring economic inequality: The Gini coefficient (The Economy 2.0, §5.12) · The Green Book: Appraisal and evaluation in central government",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A town’s average income rises. The report also shows that one group’s income fell and another group’s rose. Prices and the measured population are unchanged.",
          "call": "Which conclusion is supported?",
          "options": [
            {
              "text": "Every resident’s income increased.",
              "why": "The report explicitly records a group whose income fell.",
              "trap": 5
            },
            {
              "text": "The average increase hides different group experiences.",
              "why": "A higher average can coexist with a group loss."
            },
            {
              "text": "The group loss proves the average cannot rise.",
              "why": "Larger gains elsewhere can increase the average.",
              "trap": 5
            },
            {
              "text": "The town’s complete wellbeing must have improved.",
              "why": "Income alone does not establish every dimension of wellbeing.",
              "trap": 7
            }
          ],
          "answer": 1,
          "rule": "u11-r1",
          "issue": "averages and distribution",
          "facts": [
            "one group’s income fell",
            "another group’s rose"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the opposite directions of the two groups’ income changes."
        },
        {
          "id": "u11-h1b",
          "kind": "hypo",
          "say": "Individual data can support a stronger but still bounded statement.",
          "status": "fictional",
          "sourceIds": [
            "I10",
            "I12",
            "I13"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Measuring economic inequality: The Gini coefficient (The Economy 2.0, §5.12) · The Green Book: Appraisal and evaluation in central government",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A new report verifies that each household’s real income increased, with household membership and the period defined consistently. It contains no evidence about health or leisure.",
          "call": "What can be concluded?",
          "options": [
            {
              "text": "Every dimension of wellbeing improved.",
              "why": "The report does not measure health, leisure or every other dimension.",
              "trap": 7
            },
            {
              "text": "Some household income must have fallen.",
              "why": "That contradicts the verified individual changes.",
              "trap": 3
            },
            {
              "text": "Each household’s measured real income increased.",
              "why": "The report supports this narrower statement."
            },
            {
              "text": "No useful conclusion can ever come from income data.",
              "why": "A bounded income conclusion is supported.",
              "trap": 7
            }
          ],
          "answer": 2,
          "rule": "u11-r1",
          "issue": "averages and distribution",
          "facts": [
            "each household’s real income increased",
            "no evidence about health or leisure"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the individual income finding and the unmeasured dimensions."
        },
        {
          "id": "u11-x1",
          "kind": "hypo",
          "say": "A money flow is not a complete outcome measure.",
          "status": "fictional",
          "sourceIds": [
            "I10",
            "I12",
            "I13"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Measuring economic inequality: The Gini coefficient (The Economy 2.0, §5.12) · The Green Book: Appraisal and evaluation in central government",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A tutoring company’s revenue doubles after a price increase. Student numbers stay fixed. No learning or satisfaction measures were collected.",
          "call": "Which inference is warranted?",
          "options": [
            {
              "text": "Revenue increased; improved learning is unestablished.",
              "why": "The supplied financial change does not measure learning."
            },
            {
              "text": "Learning must have doubled.",
              "why": "Revenue and learning are different quantities.",
              "trap": 5
            },
            {
              "text": "Every student is worse off.",
              "why": "No complete evidence of student wellbeing is supplied.",
              "trap": 3
            },
            {
              "text": "The company’s output of tutoring hours must have doubled.",
              "why": "Neither revenue nor a price increase establishes more hours.",
              "trap": 5
            }
          ],
          "answer": 0,
          "rule": "u11-r1",
          "issue": "averages and distribution",
          "facts": [
            "revenue doubles after a price increase",
            "No learning or satisfaction measures were collected"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the financial change and the absence of learning/satisfaction measures."
        }
      ]
    },
    {
      "id": "u11l2",
      "title": "Payments and real resources",
      "objective": "Separate a transfer, a funding requirement and a resource cost.",
      "takeaway": "A payment can redistribute income without itself using a resource; delivering it can still have real costs.",
      "fieldwork": "Trace a payment between two parties. Which resources are used to deliver it, and who receives the benefit?",
      "items": [
        {
          "id": "u11-r2",
          "kind": "rule",
          "say": "A transfer moves purchasing power; distinguish it from real resource use and from the funder’s budget outlay.",
          "status": "model",
          "sourceIds": [
            "I13"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government",
          "hook": "Follow the payment, then follow the time and materials.",
          "title": "Keep two ledgers",
          "elements": [
            "State which parties are included",
            "Track who pays and receives the transfer",
            "Identify additional resource opportunity costs",
            "Keep distribution and budget effects visible"
          ],
          "ordered": false,
          "distractorElements": [
            "Count a transfer as new production merely because money moves"
          ],
          "ex": [
            {
              "facts": "A funder pays 100 to an included recipient. Processing uses time and materials valued at 10. Assume no other effects.",
              "result": "The transfer is 100, the additional resource cost is 10, and the funder’s cash outlay is 110 if it also pays that processing bill."
            },
            {
              "facts": "A recipient values the support more than the funder values the money.",
              "result": "Calling the payment a transfer does not establish zero welfare effect; that needs preferences and a criterion."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A transfer is irrelevant to recipients because it is not new production.",
              "a": false,
              "why": "It changes their purchasing power and the distribution."
            },
            {
              "t": "mcq",
              "q": "Which part is additional resource use in the example?",
              "options": [
                "The processing time and materials",
                "The 100 counted once as payer loss and again as new production",
                "Every payment automatically creates resources"
              ],
              "a": "The processing time and materials",
              "why": "The resources have an opportunity cost distinct from the transfer."
            }
          ]
        },
        {
          "id": "u11-t2",
          "kind": "term",
          "say": "A redistribution of money or purchasing power between included parties, rather than itself producing or consuming goods and services.",
          "status": "practice",
          "sourceIds": [
            "I13"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government",
          "hook": "A grant can be a transfer while administering it uses real resources.",
          "term": "Economic transfer",
          "meaning": "A redistribution of money or purchasing power between included parties, rather than itself producing or consuming goods and services.",
          "use": "A grant can be a transfer while administering it uses real resources.",
          "lang": "english"
        },
        {
          "id": "u11-n2",
          "kind": "num",
          "say": "The funder pays 100+10=110; budget outlay differs from additional resource cost.",
          "status": "fictional",
          "sourceIds": [
            "I13"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government",
          "hook": "Keep the units and the comparison visible.",
          "ask": "A funder pays a 100-unit grant and a separate 10-unit administration bill. What is its total cash outlay?",
          "answer": "110 units",
          "alt": [
            "110"
          ],
          "distractors": [
            "100 units",
            "10 units"
          ],
          "speed": false
        },
        {
          "id": "u11-so2",
          "kind": "sort",
          "say": "A budget payment and a resource cost are different descriptions.",
          "status": "fictional",
          "sourceIds": [
            "I13"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government",
          "hook": "Classify the stated facts, not the person.",
          "q": "In this fictional grant, distinguish the flow from the resource use. All parties are inside the analysis.",
          "buckets": [
            "Transfer or budget flow",
            "Additional resource use"
          ],
          "items": [
            {
              "text": "100 units move from funder to recipient without an exchange of goods.",
              "bucket": "Transfer or budget flow",
              "why": "The payment reallocates purchasing power."
            },
            {
              "text": "Staff spend two hours processing the grant instead of other useful work.",
              "bucket": "Additional resource use",
              "why": "The staff time has an opportunity cost."
            },
            {
              "text": "The funder’s bank balance falls by the grant payment.",
              "bucket": "Transfer or budget flow",
              "why": "This records who finances the payment."
            },
            {
              "text": "Paper and transport are consumed in delivering the grant.",
              "bucket": "Additional resource use",
              "why": "The delivery uses materials and services."
            }
          ]
        },
        {
          "id": "u11-h2",
          "kind": "hypo",
          "say": "Do not erase distribution when separating resource use.",
          "status": "fictional",
          "sourceIds": [
            "I13"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A 100-unit transfer goes from an included funder to an included recipient. Administration consumes time and materials with a 10-unit opportunity cost. Assume no other resource effects or behavioral responses.",
          "call": "What is the stated additional resource cost?",
          "options": [
            {
              "text": "110 units because the whole cash payment is new resource use.",
              "why": "The 100 transfer itself does not use resources in this model.",
              "trap": 5
            },
            {
              "text": "Zero because every related activity is a transfer.",
              "why": "Administration consumes resources worth 10.",
              "trap": 2
            },
            {
              "text": "10 units, while the 100 transfer changes distribution.",
              "why": "This separates resource use from the redistribution."
            },
            {
              "text": "200 units because payer and recipient must be added.",
              "why": "That double-counts the same transfer and ignores the stated resource cost.",
              "trap": 9
            }
          ],
          "answer": 2,
          "rule": "u11-r2",
          "issue": "transfers and resource costs",
          "facts": [
            "100-unit transfer goes from an included funder to an included recipient",
            "Administration consumes time and materials with a 10-unit opportunity cost"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the transfer between included parties and the separately stated resource cost."
        },
        {
          "id": "u11-x2",
          "kind": "hypo",
          "say": "A transfer can have consequences beyond the payment itself.",
          "status": "fictional",
          "sourceIds": [
            "I13"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A fictional voucher moves 50 units from a funder to a recipient. The previous model assumed no behavioral response. New evidence shows that providing the voucher also changes service use and waiting times.",
          "call": "What must change in the analysis?",
          "options": [
            {
              "text": "Keep treating the earlier no-response model as complete.",
              "why": "The new evidence contradicts that assumption.",
              "trap": 11
            },
            {
              "text": "Include the additional service and waiting-time effects.",
              "why": "The transfer classification does not remove the newly identified effects."
            },
            {
              "text": "Declare the policy automatically harmful.",
              "why": "The direction and value of all effects have not been assessed.",
              "trap": 3
            },
            {
              "text": "Declare every waiting minute worth zero because it has no price.",
              "why": "An unpriced effect is not necessarily valueless.",
              "trap": 5
            }
          ],
          "answer": 1,
          "rule": "u11-r2",
          "issue": "transfers and resource costs",
          "facts": [
            "previous model assumed no behavioral response",
            "changes service use and waiting times"
          ],
          "transfer": true,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the old no-response assumption and the new service/waiting-time effects."
        }
      ]
    },
    {
      "id": "u11l3",
      "title": "Fair by which criterion?",
      "objective": "Recognize and apply a stated fairness criterion without declaring it universal.",
      "takeaway": "A calculation can apply a rule; it cannot silently choose the rule’s moral priority.",
      "fieldwork": "Reflect on an allocation you care about. How might need, contribution, equal shares and process give different answers?",
      "items": [
        {
          "id": "u11-r3",
          "kind": "rule",
          "say": "Fairness can concern an outcome or the process that produced it; different criteria may rank the same allocation differently.",
          "status": "ethics",
          "sourceIds": [
            "I10"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3)",
          "hook": "Before computing a fair share, name what “fair” means.",
          "title": "Make the criterion explicit",
          "elements": [
            "Equal shares compares amounts per person",
            "Need prioritizes relevant unmet requirements",
            "Contribution considers relevant inputs or effort",
            "Procedure examines how decisions are made"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume the largest total settles every fairness question"
          ],
          "ex": [
            {
              "facts": "Four equal-status members adopt an equal-share rule for 40 tokens.",
              "result": "Applying that rule gives 10 each; it does not prove equal shares is best in every setting."
            },
            {
              "facts": "Another group adopts a verified-need rule; one member has greater unmet need.",
              "result": "That rule can support unequal shares. A fair-process question asks whether participants had an appropriate voice."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An unequal allocation is incompatible with every possible fairness criterion.",
              "a": false,
              "why": "Need or contribution criteria can support unequal shares."
            },
            {
              "t": "mcq",
              "q": "“Who had a meaningful chance to challenge the decision?” asks about what?",
              "options": [
                "The decision process",
                "Only the total number of tokens",
                "Only the cheapest option"
              ],
              "a": "The decision process",
              "why": "It examines how the allocation was decided."
            }
          ]
        },
        {
          "id": "u11-t3",
          "kind": "term",
          "say": "An assessment of how a decision is made, including relevant participation, consistency and ways to challenge it.",
          "status": "practice",
          "sourceIds": [
            "I10"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3)",
          "hook": "A pleasing total does not by itself establish a fair decision process.",
          "term": "Procedural fairness",
          "meaning": "An assessment of how a decision is made, including relevant participation, consistency and ways to challenge it.",
          "use": "A pleasing total does not by itself establish a fair decision process.",
          "lang": "english"
        },
        {
          "id": "u11-p3",
          "kind": "pairs",
          "say": "Identify the criterion before evaluating its application.",
          "status": "practice",
          "sourceIds": [
            "I10"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3)",
          "hook": "Use the distinguishing condition, not just a familiar label.",
          "pairs": [
            {
              "l": "Give every member the same amount",
              "r": "Equal-share criterion"
            },
            {
              "l": "Prioritize verified unmet requirements",
              "r": "Need criterion"
            },
            {
              "l": "Allocate according to relevant work supplied",
              "r": "Contribution criterion"
            },
            {
              "l": "Check whether people can challenge errors",
              "r": "Procedural criterion"
            }
          ]
        },
        {
          "id": "u11-h3",
          "kind": "hypo",
          "say": "Applying an agreed criterion differs from claiming it is universally best.",
          "status": "fictional",
          "sourceIds": [
            "I10"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A group explicitly agrees to split 40 tokens equally among four members. No additional weighting applies.",
          "call": "Which allocation follows that stated rule?",
          "options": [
            {
              "text": "10 tokens per member.",
              "why": "40÷4=10 under the agreed equal-share rule."
            },
            {
              "text": "All 40 to the most confident speaker.",
              "why": "That is not the stated criterion.",
              "trap": 4
            },
            {
              "text": "20 each to two members and zero to the others.",
              "why": "That does not split equally among all four.",
              "trap": 5
            },
            {
              "text": "Whatever maximizes a different group’s income.",
              "why": "The question asks about this group’s explicit allocation rule.",
              "trap": 6
            }
          ],
          "answer": 0,
          "rule": "u11-r3",
          "issue": "explicit fairness criteria",
          "facts": [
            "split 40 tokens equally among four members",
            "No additional weighting applies"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the equal-share rule and the absence of weighting."
        },
        {
          "id": "u11-h3b",
          "kind": "hypo",
          "say": "A changed criterion can change the justified allocation.",
          "status": "fictional",
          "sourceIds": [
            "I10"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A different group adopts a need-based allocation rule. Reliable information shows one member has greater relevant unmet need. The rule permits that member a larger share.",
          "call": "Does unequal allocation necessarily violate this rule?",
          "options": [
            {
              "text": "Yes, because fairness can only mean equality.",
              "why": "That replaces the stated need criterion with another criterion.",
              "trap": 4
            },
            {
              "text": "No, because the stated criterion permits a larger share for greater need.",
              "why": "The allocation can follow this particular rule."
            },
            {
              "text": "Yes, because information about need is never relevant.",
              "why": "The agreed criterion explicitly uses it.",
              "trap": 5
            },
            {
              "text": "No, because every unequal allocation is always fair.",
              "why": "The conclusion is conditional on the criterion and evidence.",
              "trap": 1
            }
          ],
          "answer": 1,
          "rule": "u11-r3",
          "issue": "explicit fairness criteria",
          "facts": [
            "adopts a need-based allocation rule",
            "rule permits that member a larger share"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "grid": true,
          "findAsk": "Tap the need-based criterion and its permission for a larger share."
        },
        {
          "id": "u11-x3",
          "kind": "hypo",
          "say": "Disagreement about a criterion should be explicit.",
          "status": "fictional",
          "sourceIds": [
            "I10"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A committee ranks proposals by verified benefit to people with the greatest unmet access need. A member argues that the proposal with the largest total revenue must win, without addressing access need.",
          "call": "What is the reasoning problem?",
          "options": [
            {
              "text": "Revenue can never be relevant to any decision.",
              "why": "That would be a universal claim beyond these facts.",
              "trap": 7
            },
            {
              "text": "The revenue figure must be fabricated.",
              "why": "No evidence establishes fabrication.",
              "trap": 3
            },
            {
              "text": "The argument substitutes a different criterion without defending the change.",
              "why": "The announced criterion concerns unmet access need, not revenue alone."
            },
            {
              "text": "The committee must ignore every cost.",
              "why": "The stated priority does not imply that costs are irrelevant.",
              "trap": 3
            }
          ],
          "answer": 2,
          "rule": "u11-r3",
          "issue": "explicit fairness criteria",
          "facts": [
            "ranks proposals by verified benefit to people with the greatest unmet access need",
            "largest total revenue must win"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the announced access criterion and the substituted revenue criterion."
        }
      ]
    },
    {
      "id": "u11l4",
      "title": "Compare under an explicit objective",
      "objective": "Distinguish Pareto improvement from higher totals and from moral approval.",
      "takeaway": "Who loses matters even when the aggregate grows; a stated objective makes a conditional comparison possible.",
      "fieldwork": "Would your preferred option change if its total stayed fixed but its gains moved between groups? Explain the criterion you used.",
      "items": [
        {
          "id": "u11-r4",
          "kind": "rule",
          "say": "A Pareto improvement makes at least one person better off and nobody worse off; a larger total need not do so.",
          "status": "model",
          "sourceIds": [
            "I10",
            "I11"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "“Could pay you back” is not the same as “paid you back.”",
          "title": "State what the comparison establishes",
          "elements": [
            "Compare the same affected people",
            "Check every person’s change",
            "Distinguish actual from possible compensation",
            "State any additional ethical objective"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat potential compensation as if it were already paid"
          ],
          "ex": [
            {
              "facts": "Money is the only payoff. A gives two people 60 and 40; B gives 90 and 20. No outside effects exist.",
              "result": "B has a larger total but the second person loses 20, so it is not a Pareto improvement."
            },
            {
              "facts": "An actual costless transfer of 20 within B gives 70 and 40.",
              "result": "Compared with A, one gains and neither loses. This is a Pareto improvement, not proof of unique fairness."
            },
            {
              "facts": "The explicit objective is the largest minimum payoff. Feasible options give 70/30 or 55/50.",
              "result": "55/50 has the larger minimum,50 rather than 30. That applies the given objective without declaring it universal."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A larger total always means a Pareto improvement.",
              "a": false,
              "why": "Someone can lose even when the total rises."
            },
            {
              "t": "mcq",
              "q": "Which fact turns possible compensation into actual compensation?",
              "options": [
                "A promise that winners could afford it",
                "A completed transfer on the stated terms",
                "A larger aggregate number"
              ],
              "a": "A completed transfer on the stated terms",
              "why": "Capacity to compensate is not the payment itself."
            }
          ],
          "boundary": true
        },
        {
          "id": "u11-t4",
          "kind": "term",
          "say": "A feasible change that makes at least one affected person better off and no affected person worse off.",
          "status": "practice",
          "sourceIds": [
            "I10",
            "I11"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "A higher total with an uncompensated loser does not meet this criterion.",
          "term": "Pareto improvement",
          "meaning": "A feasible change that makes at least one affected person better off and no affected person worse off.",
          "use": "A higher total with an uncompensated loser does not meet this criterion.",
          "lang": "english",
          "boundary": true
        },
        {
          "id": "u11-so4",
          "kind": "sort",
          "say": "Check each change, not only the sum.",
          "status": "fictional",
          "sourceIds": [
            "I10",
            "I11"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "Classify the stated facts, not the person.",
          "q": "Start from payoffs 60 and 40. All alternatives are feasible; money is each person’s only payoff and there are no outside effects.",
          "buckets": [
            "Pareto improvement",
            "Not a Pareto improvement"
          ],
          "items": [
            {
              "text": "The new allocation is 70 and 40.",
              "bucket": "Pareto improvement",
              "why": "One gains 10 and the other is unchanged."
            },
            {
              "text": "The new allocation is 90 and 20.",
              "bucket": "Not a Pareto improvement",
              "why": "The second person loses 20."
            },
            {
              "text": "The new allocation is 60 and 40.",
              "bucket": "Not a Pareto improvement",
              "why": "Nobody becomes strictly better off."
            },
            {
              "text": "The new allocation is 65 and 45.",
              "bucket": "Pareto improvement",
              "why": "Both gain 5."
            }
          ],
          "boundary": true
        },
        {
          "id": "u11-h4",
          "kind": "hypo",
          "say": "A stated objective permits a conditional answer, not a universal moral verdict.",
          "status": "fictional",
          "sourceIds": [
            "I10",
            "I11"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "Two feasible options give groups 70/30 or 55/50 in comparable payoff units. The committee’s explicit objective for this comparison is to maximize the minimum group payoff. No other criterion applies in this exercise.",
          "call": "Which option fits that stated objective?",
          "options": [
            {
              "text": "70/30, because 70 is the largest individual number.",
              "why": "The objective concerns the minimum, not the maximum.",
              "trap": 4
            },
            {
              "text": "Neither can be compared under any criterion.",
              "why": "The scenario supplies an explicit comparable objective.",
              "trap": 5
            },
            {
              "text": "55/50, because its minimum is 50 rather than 30.",
              "why": "It maximizes the minimum among the two stated options."
            },
            {
              "text": "70/30, because it must also have the larger total.",
              "why": "Its total 100 is below 105, and total is not the stated criterion.",
              "trap": 4
            }
          ],
          "answer": 2,
          "rule": "u11-r4",
          "issue": "conditional distribution comparisons",
          "facts": [
            "explicit objective for this comparison is to maximize the minimum group payoff",
            "No other criterion applies"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the specified objective and the exclusion of other criteria."
        },
        {
          "id": "u11-tr4",
          "kind": "trap",
          "say": "Potential compensation is not compensation delivered.",
          "status": "fictional",
          "sourceIds": [
            "I10",
            "I11"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "Repair the reasoning without inventing new facts.",
          "stem": "A change raises one person’s payoff by 30 and lowers another’s by 20. They value only those payoffs. The winner could afford compensation but has paid none.",
          "wrong": "This is already a Pareto improvement because compensation is affordable.",
          "right": "It is not a Pareto improvement while the other person remains worse off.",
          "why": "Possible compensation does not remove an actual loss.",
          "cat": 2,
          "fixDistractors": [
            "Call the loss irrelevant because the total gain is positive.",
            "Count an unpaid promise as a completed 20-unit transfer."
          ],
          "rule": "u11-r4",
          "boundary": true
        },
        {
          "id": "u11-x4",
          "kind": "hypo",
          "say": "A supported yes can still have a limited meaning.",
          "status": "fictional",
          "sourceIds": [
            "I10",
            "I11"
          ],
          "src": "Evaluating institutions and outcomes: Fairness (The Economy 2.0, §5.3) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "In a fictional two-person comparison, an implemented change moves payoffs from 70/30 to 75/35. Both value only these payoffs, the change is feasible, and no one else is affected.",
          "call": "Which claim follows?",
          "options": [
            {
              "text": "It is a Pareto improvement under the stated assumptions.",
              "why": "Both people gain 5 and no other person is affected."
            },
            {
              "text": "It cannot be an improvement because shares remain unequal.",
              "why": "Equality is not required by the Pareto criterion.",
              "trap": 4
            },
            {
              "text": "It proves this is the uniquely fair allocation.",
              "why": "Pareto improvement does not establish unique fairness.",
              "trap": 7
            },
            {
              "text": "The second person loses because their share is smaller.",
              "why": "Their payoff rises 30→35 despite remaining smaller.",
              "trap": 5
            }
          ],
          "answer": 0,
          "rule": "u11-r4",
          "issue": "conditional distribution comparisons",
          "facts": [
            "moves payoffs from 70/30 to 75/35",
            "Both value only these payoffs",
            "no one else is affected"
          ],
          "transfer": true,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the payoff changes, the payoff-only preference condition and the affected-person boundary."
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
