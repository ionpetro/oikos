(function () {
  const unit = {
  "id": "u09",
  "title": "When choice is constrained",
  "subject": "power",
  "blurb": "Inspect alternatives, switching barriers and whose gains a price changes.",
  "assume": "Cases are fictional. Market power is an economic concept, not a legal verdict. Cash-surplus comparisons omit nothing unless the scenario explicitly says so.",
  "lessons": [
    {
      "id": "u09l1",
      "title": "Alternatives that actually work",
      "objective": "Assess usable alternatives instead of counting firms alone.",
      "takeaway": "Choice depends on substitutes, entry and practical constraints.",
      "fieldwork": "For a service you use, list one real substitute and one condition that could make it unusable.",
      "items": [
        {
          "id": "u09-r1",
          "kind": "rule",
          "say": "Market power concerns the ability to influence terms; the number of firms alone is not a complete diagnosis.",
          "status": "practice",
          "sourceIds": [
            "I6",
            "I7"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Monopsony and concentration in the labour market, chapter 3",
          "hook": "Five doors are not five exits if four are locked.",
          "title": "Look beyond the headcount",
          "elements": [
            "Identify the relevant product and users",
            "Check usable substitutes",
            "Inspect entry and access barriers",
            "Distinguish evidence of power from a legal conclusion"
          ],
          "ordered": false,
          "distractorElements": [
            "Declare every large provider unlawful"
          ],
          "ex": [
            {
              "facts": "Five apps exist, but only one can read a buyer’s required file format.",
              "result": "The buyer may have fewer usable substitutes than the app count suggests."
            },
            {
              "facts": "A large provider faces easy switching to verified equivalent services.",
              "result": "Its size alone does not establish that it can worsen terms without losing users."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A high market share by itself establishes an unlawful act.",
              "a": false,
              "why": "An economic concern and a legal conclusion require different evidence."
            },
            {
              "t": "mcq",
              "q": "Which fact most directly expands a buyer’s usable choices?",
              "options": [
                "A new logo for the same locked service",
                "A verified equivalent service that accepts their files",
                "A longer list of incompatible products"
              ],
              "a": "A verified equivalent service that accepts their files",
              "why": "The alternative can actually serve the buyer’s need."
            }
          ]
        },
        {
          "id": "u09-t1",
          "kind": "term",
          "say": "The ability of a market participant to influence prices or other terms rather than simply take them as given.",
          "status": "practice",
          "sourceIds": [
            "I6",
            "I7"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Monopsony and concentration in the labour market, chapter 3",
          "hook": "Check how customers or suppliers can respond when terms change.",
          "term": "Market power",
          "meaning": "The ability of a market participant to influence prices or other terms rather than simply take them as given.",
          "use": "Check how customers or suppliers can respond when terms change.",
          "lang": "english"
        },
        {
          "id": "u09-so1",
          "kind": "sort",
          "say": "Investigate the mechanism behind constrained choice.",
          "status": "fictional",
          "sourceIds": [
            "I6",
            "I7"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Monopsony and concentration in the labour market, chapter 3",
          "hook": "Classify the stated facts, not the person.",
          "q": "Which facts directly inform usable alternatives, rather than settle the issue alone?",
          "buckets": [
            "Relevant constraint or alternative",
            "Insufficient by itself"
          ],
          "items": [
            {
              "text": "A verified substitute meets the required format and can accept new users.",
              "bucket": "Relevant constraint or alternative",
              "why": "It is an available alternative for the stated need."
            },
            {
              "text": "The supplier has the largest logo at the trade show.",
              "bucket": "Insufficient by itself",
              "why": "Prominence does not establish substitutability or control."
            },
            {
              "text": "A necessary input is unavailable to potential entrants.",
              "bucket": "Relevant constraint or alternative",
              "why": "The input restriction can limit entry."
            },
            {
              "text": "The provider serves many customers.",
              "bucket": "Insufficient by itself",
              "why": "Scale does not alone establish power or abuse."
            }
          ]
        },
        {
          "id": "u09-h1",
          "kind": "hypo",
          "say": "Count substitutes that meet the actual requirement.",
          "status": "fictional",
          "sourceIds": [
            "I6",
            "I7"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Monopsony and concentration in the labour market, chapter 3",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A college can choose among five scheduling products. Only one currently supports its required accessibility workflow, and the others cannot add it this term.",
          "call": "Which assessment uses the relevant facts?",
          "options": [
            {
              "text": "Five brand names prove equally usable choices.",
              "why": "The required workflow excludes four products for this term.",
              "trap": 2
            },
            {
              "text": "The college has one usable listed option for this requirement.",
              "why": "Compatibility and timing narrow the actual set."
            },
            {
              "text": "The compatible provider has certainly broken the law.",
              "why": "No conduct or applicable legal test is established.",
              "trap": 3
            },
            {
              "text": "The college should ignore accessibility to enlarge the count.",
              "why": "That discards a stated essential requirement.",
              "trap": 4
            }
          ],
          "answer": 1,
          "rule": "u09-r1",
          "issue": "usable alternatives",
          "facts": [
            "Only one currently supports its required accessibility workflow",
            "cannot add it this term"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the compatibility condition and the timing limit on the other providers."
        },
        {
          "id": "u09-h1b",
          "kind": "hypo",
          "say": "New evidence can change the practical choice set.",
          "status": "fictional",
          "sourceIds": [
            "I6",
            "I7"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Monopsony and concentration in the labour market, chapter 3",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "Another scheduling provider now verifies the required accessibility workflow and can implement it this term. Other material terms are available for comparison.",
          "call": "What changes in the assessment?",
          "options": [
            {
              "text": "There is now an additional usable option.",
              "why": "Verified capability and timing change the feasible set."
            },
            {
              "text": "Competition must now be perfect in every respect.",
              "why": "One additional option does not prove that full benchmark.",
              "trap": 7
            },
            {
              "text": "The new provider must always be chosen.",
              "why": "Other terms still need comparison.",
              "trap": 2
            },
            {
              "text": "There is still only one usable provider.",
              "why": "The verified new capability contradicts that claim.",
              "trap": 11
            }
          ],
          "answer": 0,
          "rule": "u09-r1",
          "issue": "usable alternatives",
          "facts": [
            "verifies the required accessibility workflow",
            "can implement it this term"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the verified capability and timely availability of the new option."
        },
        {
          "id": "u09-x1",
          "kind": "hypo",
          "say": "An alternative must fit both the task and the time.",
          "status": "fictional",
          "sourceIds": [
            "I6",
            "I7"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Monopsony and concentration in the labour market, chapter 3",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "Three printers advertise the same service. Your project requires a certified material by Friday. Two confirm they cannot supply it before Monday; one confirms Friday delivery.",
          "call": "Which conclusion is supported?",
          "options": [
            {
              "text": "All three remain timely substitutes.",
              "why": "Two fail the stated delivery requirement.",
              "trap": 2
            },
            {
              "text": "The Friday supplier can charge literally any price.",
              "why": "A thin choice set does not remove budget or the option not to proceed.",
              "trap": 7
            },
            {
              "text": "Only one listed printer meets the stated timing and material.",
              "why": "The confirmations identify the feasible listed option."
            },
            {
              "text": "The other two suppliers must be lying.",
              "why": "Their stated limitations do not prove dishonesty.",
              "trap": 3
            }
          ],
          "answer": 2,
          "rule": "u09-r1",
          "issue": "usable alternatives",
          "facts": [
            "requires a certified material by Friday",
            "Two confirm they cannot supply it before Monday"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the required deadline/material and the two suppliers’ inability to meet it."
        }
      ]
    },
    {
      "id": "u09l2",
      "title": "The cost of switching",
      "objective": "Compare full costs over a stated horizon and identify non-price barriers.",
      "takeaway": "A lower recurring price can be offset by a one-time transition cost.",
      "fieldwork": "Identify what it would take to leave one service: money, time, data, permission and continuity.",
      "items": [
        {
          "id": "u09-r2",
          "kind": "rule",
          "say": "Switching decisions need a common horizon, transition costs and required continuity, not just a headline price.",
          "status": "practice",
          "sourceIds": [
            "I6"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12)",
          "hook": "The monthly price is not the whole moving bill.",
          "title": "Compare the complete transition",
          "elements": [
            "Fix the comparison period",
            "Add recurring costs over that period",
            "Include one-time transition costs once",
            "Check essential service continuity"
          ],
          "ordered": false,
          "distractorElements": [
            "Ignore migration because it is a one-time expense"
          ],
          "ex": [
            {
              "facts": "Old service costs 20 monthly; new service costs 10 plus 150 migration. Compare 12 months, with equal quality and no other costs.",
              "result": "Old costs 240; switching costs 270. The cheaper monthly price is not the cheaper first year."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A one-time migration cost should be added again in every month.",
              "a": false,
              "why": "Count it once unless the scenario says it repeats."
            },
            {
              "t": "mcq",
              "q": "The only required file cannot be exported to a new service. Which issue must be checked?",
              "options": [
                "Whether the new logo looks better",
                "Whether a workable transfer exists",
                "Whether all switching is immoral"
              ],
              "a": "Whether a workable transfer exists",
              "why": "A cost comparison alone does not resolve continuity."
            }
          ]
        },
        {
          "id": "u09-t2",
          "kind": "term",
          "say": "A cost or burden incurred when moving from one supplier or arrangement to another.",
          "status": "practice",
          "sourceIds": [
            "I6"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12)",
          "hook": "Include a stated migration fee once and inspect time or continuity constraints.",
          "term": "Switching cost",
          "meaning": "A cost or burden incurred when moving from one supplier or arrangement to another.",
          "use": "Include a stated migration fee once and inspect time or continuity constraints.",
          "lang": "english"
        },
        {
          "id": "u09-n2",
          "kind": "num",
          "say": "12×10+150=270; count migration once.",
          "status": "fictional",
          "sourceIds": [
            "I6"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12)",
          "hook": "Keep the units and the comparison visible.",
          "ask": "A new service costs 10 units per month plus a one-time 150-unit migration fee. Compare 12 months; no other costs apply. What is the switching total?",
          "answer": "270 units",
          "alt": [
            "270"
          ],
          "distractors": [
            "120 units",
            "1800 units"
          ],
          "speed": false
        },
        {
          "id": "u09-st2",
          "kind": "steps",
          "say": "Compare equivalent periods before choosing.",
          "status": "practice",
          "sourceIds": [
            "I6"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12)",
          "hook": "Use the routine as a checking aid, not a universal script.",
          "title": "A switching-cost comparison",
          "steps": [
            "Set the same comparison horizon",
            "Total each option’s stated costs",
            "Check essential non-price requirements",
            "Choose using the stated objective"
          ],
          "distractors": [
            "Compare one option’s month with another’s year",
            "Count a one-time fee in every month"
          ],
          "applyTo": {
            "facts": "Both options will be compared for 12 months. The costs have not yet been totaled.",
            "stop": "Total each option’s stated costs",
            "why": "The common horizon is set; calculate each complete cost next."
          }
        },
        {
          "id": "u09-h2",
          "kind": "hypo",
          "say": "The best option depends on the stated comparison.",
          "status": "fictional",
          "sourceIds": [
            "I6"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "Over 12 months, staying costs 240 units. Switching costs 270 including migration. Both meet every essential requirement, and the sole stated objective is the lowest 12-month cash cost.",
          "call": "Which option fits that objective?",
          "options": [
            {
              "text": "Switch, because its monthly price is lower.",
              "why": "The total already includes the transition cost.",
              "trap": 9
            },
            {
              "text": "Either, because migration costs never count.",
              "why": "The stated objective includes the full cash cost.",
              "trap": 5
            },
            {
              "text": "Stay, at a 30-unit lower total.",
              "why": "240 is 30 below 270 under the specified objective."
            },
            {
              "text": "Switch, because 270 is lower than 240.",
              "why": "That reverses the arithmetic.",
              "trap": 5
            }
          ],
          "answer": 2,
          "rule": "u09-r2",
          "issue": "complete switching comparison",
          "facts": [
            "staying costs 240 units",
            "Switching costs 270 including migration",
            "sole stated objective is the lowest 12-month cash cost"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the two complete totals and the stated comparison objective."
        },
        {
          "id": "u09-x2",
          "kind": "hypo",
          "say": "A removed barrier can change the answer.",
          "status": "fictional",
          "sourceIds": [
            "I6"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A data service now waives its migration fee. Staying costs 240 units for the next 12 months; switching costs 120. Both have verified equivalent functionality and continuity, with no other costs. Your objective is the lower 12-month cash cost.",
          "call": "What changes?",
          "options": [
            {
              "text": "Stay because the old migration fee still decides.",
              "why": "The fee was explicitly waived.",
              "trap": 11
            },
            {
              "text": "Switch saves 120 units under these assumptions.",
              "why": "240−120=120 and the essential requirements are met."
            },
            {
              "text": "Switch saves 240 units because it is free.",
              "why": "The new service still costs 120.",
              "trap": 9
            },
            {
              "text": "Every customer should switch regardless of their situation.",
              "why": "Other customers may face different costs or requirements.",
              "trap": 7
            }
          ],
          "answer": 1,
          "rule": "u09-r2",
          "issue": "complete switching comparison",
          "facts": [
            "waives its migration fee",
            "Staying costs 240 units",
            "switching costs 120"
          ],
          "transfer": true,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the waived fee and the two revised annual totals."
        }
      ]
    },
    {
      "id": "u09l3",
      "title": "Power on the buying side",
      "objective": "Recognize how usable outside options matter to suppliers and workers.",
      "takeaway": "Many employers on a list need not mean many usable job alternatives.",
      "fieldwork": "Reflect on one non-wage condition that affects which jobs someone can realistically accept.",
      "items": [
        {
          "id": "u09-r3",
          "kind": "rule",
          "say": "Buyer power can arise when suppliers or workers have limited usable alternatives; concentration is only one possible cause.",
          "status": "model",
          "sourceIds": [
            "I7"
          ],
          "src": "Monopsony and concentration in the labour market, chapter 3",
          "hook": "The buyer of work can have bargaining power too.",
          "title": "Inspect buyers of work too",
          "elements": [
            "Identify who buys and who supplies",
            "Check feasible outside options",
            "Consider search and switching frictions",
            "Check evidence of countervailing power"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume many advertised employers eliminate every constraint"
          ],
          "ex": [
            {
              "facts": "Several firms hire, but only one offers the hours a worker can use.",
              "result": "Job differences can limit usable alternatives despite many employers. This potential buyer power in labor markets is called monopsony power."
            },
            {
              "facts": "A new confirmed offer meets those hours without extra moving costs.",
              "result": "The worker now has an additional usable alternative; this does not prove every bargaining imbalance disappears."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Monopsony power can arise only when exactly one employer exists.",
              "a": false,
              "why": "Search frictions and different job conditions can also restrict alternatives."
            },
            {
              "t": "mcq",
              "q": "Which fact most directly improves the stated worker’s outside option?",
              "options": [
                "An unusable vacancy with a higher headline wage",
                "A confirmed feasible offer on compatible hours",
                "An employer’s larger market-share chart"
              ],
              "a": "A confirmed feasible offer on compatible hours",
              "why": "The option can actually be taken."
            }
          ]
        },
        {
          "id": "u09-t3",
          "kind": "term",
          "say": "A buyer’s ability to influence the price or terms paid to suppliers, including wages paid to workers.",
          "status": "practice",
          "sourceIds": [
            "I7"
          ],
          "src": "Monopsony and concentration in the labour market, chapter 3",
          "hook": "It can arise with several employers when workers face limited usable alternatives.",
          "term": "Monopsony power",
          "meaning": "A buyer’s ability to influence the price or terms paid to suppliers, including wages paid to workers.",
          "use": "It can arise with several employers when workers face limited usable alternatives.",
          "lang": "english",
          "alt": [
            "buyer power"
          ]
        },
        {
          "id": "u09-p3",
          "kind": "pairs",
          "say": "Inspect the effective choice set on both sides of an exchange.",
          "status": "practice",
          "sourceIds": [
            "I7"
          ],
          "src": "Monopsony and concentration in the labour market, chapter 3",
          "hook": "Use the distinguishing condition, not just a familiar label.",
          "pairs": [
            {
              "l": "Only one nearby buyer accepts the supplier’s output",
              "r": "Limited purchasing alternatives"
            },
            {
              "l": "Several employers offer incompatible hours",
              "r": "Advertised jobs may be unusable"
            },
            {
              "l": "A comparable confirmed job becomes accessible",
              "r": "The outside option improves"
            },
            {
              "l": "Workers negotiate collectively with effective influence",
              "r": "Countervailing bargaining power may matter"
            }
          ]
        },
        {
          "id": "u09-h3",
          "kind": "hypo",
          "say": "A job has a schedule as well as a wage.",
          "status": "fictional",
          "sourceIds": [
            "I7"
          ],
          "src": "Monopsony and concentration in the labour market, chapter 3",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A worker needs a fixed daytime schedule. Six nearby firms advertise jobs, but only the current employer offers that schedule. No compatible remote or relocation option is available now.",
          "call": "Which conclusion is warranted?",
          "options": [
            {
              "text": "The six advertisements prove six usable job alternatives.",
              "why": "Five do not meet the stated schedule constraint.",
              "trap": 2
            },
            {
              "text": "The worker’s current wage proves their exact moral worth.",
              "why": "Wages do not measure moral worth.",
              "trap": 4
            },
            {
              "text": "The worker can demand any wage without consequences.",
              "why": "Limited alternatives do not establish unlimited bargaining power.",
              "trap": 7
            },
            {
              "text": "Usable job alternatives are narrower than the employer count.",
              "why": "Hours and feasibility limit the current options."
            }
          ],
          "answer": 3,
          "rule": "u09-r3",
          "issue": "buyer power and options",
          "facts": [
            "only the current employer offers that schedule",
            "No compatible remote or relocation option is available"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the compatible-hours constraint and the absence of other feasible options."
        },
        {
          "id": "u09-h3b",
          "kind": "hypo",
          "say": "A better alternative changes a choice without deciding it.",
          "status": "fictional",
          "sourceIds": [
            "I7"
          ],
          "src": "Monopsony and concentration in the labour market, chapter 3",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A second employer now offers the required daytime schedule in a confirmed role. The worker can accept it without extra moving or transition cost.",
          "call": "What can be inferred?",
          "options": [
            {
              "text": "A usable outside option has improved.",
              "why": "The new feasible offer expands the worker’s choice."
            },
            {
              "text": "All labor-market power has disappeared everywhere.",
              "why": "A local change does not establish that universal result.",
              "trap": 7
            },
            {
              "text": "The original employer must legally match every term.",
              "why": "No such obligation is established.",
              "trap": 3
            },
            {
              "text": "The worker must reject the new offer to preserve loyalty.",
              "why": "The scenario gives no such requirement.",
              "trap": 3
            }
          ],
          "answer": 0,
          "rule": "u09-r3",
          "issue": "buyer power and options",
          "facts": [
            "confirmed role",
            "without extra moving or transition cost"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the confirmed offer and the absence of transition costs."
        },
        {
          "id": "u09-x3",
          "kind": "hypo",
          "say": "Time-sensitive sellers also need usable buyers.",
          "status": "fictional",
          "sourceIds": [
            "I7"
          ],
          "src": "Monopsony and concentration in the labour market, chapter 3",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A grower has four potential buyers on a list. Three cannot collect the perishable crop before it spoils. One can collect in time; storage and transport elsewhere are not feasible this week.",
          "call": "Which assessment fits?",
          "options": [
            {
              "text": "Four names guarantee four usable purchasing alternatives.",
              "why": "Three fail the timing constraint.",
              "trap": 2
            },
            {
              "text": "The grower has one feasible listed buyer for this crop this week.",
              "why": "Collection timing and unavailable alternatives narrow the set."
            },
            {
              "text": "The feasible buyer can demand a negative price without refusal.",
              "why": "The scenario does not remove every reservation or refusal option.",
              "trap": 7
            },
            {
              "text": "The crop’s quality must be poor because choices are limited.",
              "why": "Timing constraints establish no quality defect.",
              "trap": 3
            }
          ],
          "answer": 1,
          "rule": "u09-r3",
          "issue": "buyer power and options",
          "facts": [
            "Three cannot collect the perishable crop before it spoils",
            "storage and transport elsewhere are not feasible"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the collection failure and the infeasibility of other routes."
        }
      ]
    },
    {
      "id": "u09l4",
      "title": "Price, profit and the whole gain",
      "objective": "Separate price, revenue, profit and modeled total surplus.",
      "takeaway": "A higher price need not produce higher profit, and profit is not the whole social assessment.",
      "fieldwork": "When comparing two prices, list whose gains change and which effects your calculation omits.",
      "items": [
        {
          "id": "u09-r4",
          "kind": "rule",
          "say": "Compare revenue, cost and buyer gains under the stated quantities; do not read total welfare from price alone.",
          "status": "model",
          "sourceIds": [
            "I6",
            "I11"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "Keep the seller’s till and the whole exchange in separate columns.",
          "title": "Keep the ledgers separate",
          "elements": [
            "Compute revenue from price and quantity",
            "Subtract the stated production costs",
            "Compute buyer surplus from valuations",
            "State omitted effects and avoid a moral ranking"
          ],
          "ordered": false,
          "distractorElements": [
            "Call seller revenue the entire social benefit"
          ],
          "ex": [
            {
              "facts": "Two buyers value one unit each at 70 and 50. Cost is 20 per unit; no fixed cost or spillovers. Both accept equality.",
              "result": "At price 70, one buys: profit 50, buyer surplus 0. At price 50, two buy: profit 60, buyer surplus 20. Total modeled surplus rises 50→80."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "In this example, price 70 gives higher profit than price 50.",
              "a": false,
              "why": "Profit is 50 at 70 and 60 at 50."
            },
            {
              "t": "mcq",
              "q": "What is not established by this cash-surplus example?",
              "options": [
                "The seller’s modeled profit",
                "The buyers’ modeled surplus",
                "A uniquely fair price"
              ],
              "a": "A uniquely fair price",
              "why": "A fairness judgment needs a stated criterion beyond these sums."
            }
          ],
          "exceptions": [
            "This is a supplied comparison, not proof of a unique optimal price over every possible strategy."
          ],
          "boundary": true
        },
        {
          "id": "u09-t4",
          "kind": "term",
          "say": "The buyer’s stated willingness to pay minus the price paid, for the units purchased.",
          "status": "practice",
          "sourceIds": [
            "I6",
            "I11"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "It is a model quantity, not a complete measure of wellbeing.",
          "term": "Buyer surplus",
          "meaning": "The buyer’s stated willingness to pay minus the price paid, for the units purchased.",
          "use": "It is a model quantity, not a complete measure of wellbeing.",
          "lang": "english",
          "alt": [
            "consumer surplus"
          ],
          "boundary": true
        },
        {
          "id": "u09-n4",
          "kind": "num",
          "say": "Revenue 2×50 minus cost 2×20 equals 60.",
          "status": "fictional",
          "sourceIds": [
            "I6",
            "I11"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "Keep the units and the comparison visible.",
          "ask": "Two buyers purchase one unit each at 50 units of money. Each unit costs the seller 20 to produce; there are no fixed costs. What is seller profit?",
          "answer": "60 units",
          "alt": [
            "60"
          ],
          "distractors": [
            "100 units",
            "80 units"
          ],
          "speed": false,
          "boundary": true
        },
        {
          "id": "u09-h4",
          "kind": "hypo",
          "say": "Use the supplied quantities rather than a higher-price shortcut.",
          "status": "fictional",
          "sourceIds": [
            "I6",
            "I11"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "In a fictional cash-only comparison, price 70 sells one unit and yields 50 profit. Price 50 sells two units and yields 60 profit. All costs are already included.",
          "call": "Which claim follows?",
          "options": [
            {
              "text": "Price 70 must maximize profit because it is higher.",
              "why": "The supplied profit comparison contradicts that claim.",
              "trap": 5
            },
            {
              "text": "Price 50 yields 10 more profit in this comparison.",
              "why": "60−50=10."
            },
            {
              "text": "Price 50 is the uniquely just policy for everyone.",
              "why": "The arithmetic does not establish a justice criterion.",
              "trap": 4
            },
            {
              "text": "Both prices have equal profit because the product is unchanged.",
              "why": "Quantity and total costs differ.",
              "trap": 2
            }
          ],
          "answer": 1,
          "rule": "u09-r4",
          "issue": "separate surplus ledgers",
          "facts": [
            "price 70 sells one unit and yields 50 profit",
            "Price 50 sells two units and yields 60 profit"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the two stated price-and-profit comparisons."
        },
        {
          "id": "u09-tr4",
          "kind": "trap",
          "say": "One group’s gain is not the whole ledger.",
          "status": "fictional",
          "sourceIds": [
            "I6",
            "I11"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "Repair the reasoning without inventing new facts.",
          "stem": "A proposal raises seller profit by 20 and lowers buyer surplus by 30, in comparable money units. These are the only effects in the stated model.",
          "wrong": "The seller gains 20, so total modeled surplus must rise 20.",
          "right": "The stated aggregate change is 20−30=−10.",
          "why": "The seller’s gain is only one part of the comparison.",
          "cat": 9,
          "fixDistractors": [
            "Ignore buyers because only seller profit counts as surplus.",
            "Add 20 and 30 as if a buyer loss were a gain."
          ],
          "rule": "u09-r4",
          "boundary": true
        },
        {
          "id": "u09-x4",
          "kind": "hypo",
          "say": "A positive total can coexist with a loser.",
          "status": "fictional",
          "sourceIds": [
            "I6",
            "I11"
          ],
          "src": "Influencing market power, and competition policy (The Economy 2.0, §7.12) · Evaluating outcomes: The Pareto criterion (The Economy 2.0, §4.5)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A fictional booking change raises seller profit from 100 to 115 and lowers total buyer surplus from 80 to 70. Assume these are the only effects, all in comparable money units.",
          "call": "What does the comparison establish?",
          "options": [
            {
              "text": "Everyone is better off.",
              "why": "Buyers lose 10 in the supplied comparison.",
              "trap": 5
            },
            {
              "text": "Total modeled surplus falls 15.",
              "why": "The aggregate change is+15−10=+5.",
              "trap": 5
            },
            {
              "text": "Total modeled surplus rises 5, while buyers lose 10.",
              "why": "The totals change 180→185, with a loss to one group."
            },
            {
              "text": "The change is automatically fair because the total rises.",
              "why": "The model sum does not settle fairness.",
              "trap": 4
            }
          ],
          "answer": 2,
          "rule": "u09-r4",
          "issue": "separate surplus ledgers",
          "facts": [
            "raises seller profit from 100 to 115",
            "lowers total buyer surplus from 80 to 70"
          ],
          "transfer": true,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the seller-profit and buyer-surplus changes."
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
