// Original Oikos content. Scenarios and numerical inputs are fictional unless identified otherwise.
(function () {
  const unit = {
  "id": "u01",
  "title": "What are you giving up?",
  "blurb": "See the real alternatives behind a choice.",
  "subject": "choices",
  "assume": "All people and quantities are fictional. Compare options available in the stated time window. Money is one consideration; no cash calculation establishes the best life choice.",
  "lessons": [
    {
      "id": "u01l1",
      "title": "Which options are actually open?",
      "objective": "Distinguish feasible alternatives from wishes and already-excluded options.",
      "takeaway": "A comparison starts with options you can actually take.",
      "fieldwork": "Choose one small decision. List the time, money, access and commitments that make its alternatives feasible.",
      "items": [
        {
          "id": "u01-l1-rule",
          "kind": "rule",
          "say": "Compare feasible alternatives under the stated constraints.",
          "status": "model",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Check which doors are open before comparing what is behind them.",
          "title": "Start with the available choices",
          "elements": [
            "Name the decision and time window",
            "Check resources and access",
            "Keep relevant commitments visible"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat an unavailable option as the fallback",
            "Assume every constraint is a matter of preference"
          ],
          "ex": [
            {
              "facts": "A meeting room is available only after 3 pm; an event must finish at 2 pm.",
              "result": "That room is not a feasible venue for this event."
            },
            {
              "facts": "The event can instead start at 4 pm, with all other requirements met.",
              "result": "The changed time makes the room a feasible option."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A preferred option can still be infeasible.",
              "a": true,
              "why": "Desirability does not supply missing access, time or resources."
            },
            {
              "t": "mcq",
              "q": "A lab needs an approved supervisor. No supervisor is available today. What follows?",
              "options": [
                "The lab is feasible if demand is high",
                "Today’s lab is not in the feasible set",
                "The lab has no educational value"
              ],
              "a": "Today’s lab is not in the feasible set",
              "why": "The unmet staffing requirement excludes today’s lab; it does not evaluate its value."
            }
          ]
        },
        {
          "id": "u01-l1-term",
          "kind": "term",
          "say": "The alternatives available under the stated resources, access and constraints.",
          "status": "model",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "A wish list includes closed doors; a feasible set does not.",
          "term": "Feasible set",
          "meaning": "The alternatives available under the stated resources, access and constraints.",
          "use": "Check whether an option can be taken before treating it as a fallback.",
          "lang": "english"
        },
        {
          "id": "u01-l1-h1",
          "kind": "hypo",
          "say": "An unavailable bargain is not an available alternative.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "An unavailable bargain is not an available alternative.",
          "stem": "A college must hold a workshop tomorrow. Room A is available tomorrow and meets every requirement. Room B is cheaper but unavailable until next week. The date cannot change.",
          "call": "Which room belongs in tomorrow’s feasible set?",
          "issue": "availability before comparison",
          "rule": "u01-l1-rule",
          "options": [
            {
              "text": "Room B, because it is cheaper.",
              "why": "A lower price does not change its availability.",
              "trap": 2
            },
            {
              "text": "Both, because each is a real room.",
              "why": "An existing resource need not be available in the relevant window.",
              "trap": 3
            },
            {
              "text": "Neither, because A is not cheapest.",
              "why": "Being cheapest is not a stated feasibility requirement.",
              "trap": 4
            },
            {
              "text": "Room A; Room B is unavailable tomorrow.",
              "why": "Only A meets the fixed date and stated requirements."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "unavailable until next week",
            "The date cannot change"
          ],
          "findAsk": "Which details rule out Room B for tomorrow?"
        },
        {
          "id": "u01-l1-sort",
          "kind": "sort",
          "say": "Feasibility depends on the requirements actually stated.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Feasibility depends on the requirements actually stated.",
          "q": "Delivery is due today unless a row explicitly changes the deadline. Assume all other unmentioned requirements are met. Is the option feasible?",
          "buckets": [
            "Feasible",
            "Not feasible"
          ],
          "items": [
            {
              "text": "A confirmed driver and vehicle can deliver today; all requirements are met.",
              "bucket": "Feasible",
              "why": "The required resources and timing are available."
            },
            {
              "text": "The only vehicle arrives tomorrow.",
              "bucket": "Not feasible",
              "why": "Tomorrow misses the fixed deadline."
            },
            {
              "text": "A driver is available, but no required vehicle is available.",
              "bucket": "Not feasible",
              "why": "One available input does not supply the other."
            },
            {
              "text": "A verified courier can deliver today within the authorized budget.",
              "bucket": "Feasible",
              "why": "The courier meets timing and budget."
            },
            {
              "text": "An otherwise suitable courier exceeds the fixed budget and no exception is allowed.",
              "bucket": "Not feasible",
              "why": "The binding budget excludes it."
            },
            {
              "text": "The customer explicitly moves the deadline to tomorrow; the required vehicle will then be available.",
              "bucket": "Feasible",
              "why": "The scenario changes the delivery requirement, making this option feasible."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u01-l1-h2",
          "kind": "hypo",
          "say": "A changed constraint can open an option without making it the best.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "A changed constraint can open an option without making it the best.",
          "stem": "The college can now move its workshop to next week. Room B is confirmed for that date and meets all other requirements. Room A is also available.",
          "call": "What changes in the comparison?",
          "issue": "changed feasible set",
          "rule": "u01-l1-rule",
          "options": [
            {
              "text": "Both rooms can now be compared.",
              "why": "The changed date removes the constraint that excluded B."
            },
            {
              "text": "Room B remains impossible because it was unavailable tomorrow.",
              "why": "The relevant date has changed.",
              "trap": 11
            },
            {
              "text": "B must win once feasible.",
              "why": "Feasibility permits comparison; it does not settle the objective.",
              "trap": 5
            },
            {
              "text": "Room A becomes unavailable when B becomes available.",
              "why": "Nothing states that A’s availability changes.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "move its workshop to next week",
            "Room B is confirmed for that date and meets all other requirements."
          ],
          "findAsk": "Which details make Room B feasible now?"
        },
        {
          "id": "u01-l1-steps",
          "kind": "steps",
          "say": "Check availability before choosing a winner.",
          "status": "practice",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Check availability before choosing a winner.",
          "title": "Check an option before ranking it",
          "steps": [
            "State the decision and deadline",
            "List required resources and commitments",
            "Check each option against those requirements",
            "Compare the feasible options"
          ],
          "distractors": [
            "Rank impossible options as though they were available",
            "Treat a missing approval as already granted"
          ],
          "applyTo": {
            "facts": "You have stated the deadline and listed the staffing and budget requirements. You have not checked the proposed venues.",
            "stop": "Check each option against those requirements",
            "why": "First check whether each venue meets the requirements."
          }
        },
        {
          "id": "u01-l1-transfer",
          "kind": "hypo",
          "say": "Constraints describe the choice; they do not measure a person’s ambition.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Constraints describe the choice; they do not measure a person’s ambition.",
          "stem": "A candidate can attend an interview at 10 am or 4 pm. They have a fixed caregiving duty from 9 am to noon. The employer confirms either time is equally acceptable, and travel is possible at 4 pm.",
          "call": "Which inference uses only the stated constraints?",
          "issue": "feasible schedule",
          "rule": "u01-l1-rule",
          "options": [
            {
              "text": "The candidate should abandon the caregiving duty.",
              "why": "The duty is fixed in this scenario, not an optional preference to discard.",
              "trap": 2
            },
            {
              "text": "The 4 pm interview is feasible.",
              "why": "It avoids the fixed duty and has confirmed employer acceptance and travel."
            },
            {
              "text": "The 10 am slot proves stronger motivation.",
              "why": "No evidence connects this time choice with motivation.",
              "trap": 3
            },
            {
              "text": "Neither interview is possible because mornings are blocked.",
              "why": "The 4 pm option satisfies the listed constraints.",
              "trap": 9
            }
          ],
          "answer": 1,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "fixed caregiving duty from 9 am to noon",
            "travel is possible at 4 pm"
          ],
          "findAsk": "Which details establish the candidate’s time constraint and ability to travel at 4 pm?"
        }
      ]
    },
    {
      "id": "u01l2",
      "title": "Find the next-best alternative",
      "objective": "Identify the best feasible alternative forgone, using net rather than gross pay where appropriate.",
      "takeaway": "The relevant forgone alternative is the best one you cannot also take.",
      "fieldwork": "For one mutually exclusive choice, name the next-best feasible alternative without adding all rejected options.",
      "items": [
        {
          "id": "u01-l2-rule",
          "kind": "rule",
          "say": "Opportunity cost is the value of the best feasible alternative you give up.",
          "status": "model",
          "sourceIds": [
            "F1"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives",
          "hook": "Choose the strongest open road not taken.",
          "title": "Compare with the next-best feasible alternative",
          "elements": [
            "Identify mutually exclusive options",
            "Rank the feasible alternatives by the stated criterion",
            "Use the value of the best forgone option"
          ],
          "ordered": false,
          "distractorElements": [
            "Add the values of every rejected option",
            "Use an impossible option because its payoff is high"
          ],
          "ex": [
            {
              "facts": "A free afternoon can earn $90 net editing or $60 net delivering; it cannot do both. You take neither.",
              "result": "The best forgone cash option is $90, not $150."
            },
            {
              "facts": "The $90 job is cancelled before the decision.",
              "result": "The best remaining forgone cash option is $60."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "The sum of all rejected alternatives is the opportunity cost.",
              "a": false,
              "why": "Only the best feasible forgone alternative supplies this comparison."
            },
            {
              "t": "mcq",
              "q": "You give up a $70-net job when choosing an activity. The activity costs $10 separately. What is the forgone job value?",
              "options": [
                "$10",
                "$80",
                "$70"
              ],
              "a": "$70",
              "why": "The job value is $70; the separate direct expense can be included in a broader cost comparison."
            }
          ],
          "exceptions": [
            "A cash-only ranking does not establish someone’s overall preferences."
          ]
        },
        {
          "id": "u01-l2-term",
          "kind": "term",
          "say": "The value of the best feasible alternative forgone by a choice.",
          "status": "model",
          "sourceIds": [
            "F1"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives",
          "hook": "One afternoon cannot be spent three times.",
          "term": "Opportunity cost",
          "meaning": "The value of the best feasible alternative forgone by a choice.",
          "use": "Compare a use of time with the best other available use, not every possible use.",
          "lang": "english"
        },
        {
          "id": "u01-l2-h1",
          "kind": "hypo",
          "say": "Use the best feasible net alternative.",
          "status": "fictional",
          "sourceIds": [
            "F1"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives",
          "hook": "Use the best feasible net alternative.",
          "stem": "Nia has one Saturday slot. A confirmed editing job pays $120 and requires $20 of materials. Another available job pays $70 net. She volunteers instead. The paid jobs and volunteering use the same slot.",
          "call": "What net cash alternative does volunteering displace?",
          "issue": "best forgone alternative",
          "rule": "u01-l2-rule",
          "options": [
            {
              "text": "$100 from editing.",
              "why": "Editing nets $120 minus $20 and exceeds the other $70 option."
            },
            {
              "text": "$120 from editing.",
              "why": "This omits the required $20 materials.",
              "trap": 9
            },
            {
              "text": "$170 from both jobs.",
              "why": "She cannot perform both jobs in the one slot.",
              "trap": 3
            },
            {
              "text": "$70 from the smaller job.",
              "why": "The $100-net editing option is available and higher under the cash criterion.",
              "trap": 10
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "requires $20 of materials",
            "use the same slot"
          ],
          "findAsk": "Which details explain why using gross pay and adding both jobs would be misleading?"
        },
        {
          "id": "u01-l2-num",
          "kind": "num",
          "say": "Subtract the editing inputs before comparing the two jobs.",
          "status": "fictional",
          "sourceIds": [
            "F1"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives",
          "hook": "Subtract the editing inputs before comparing the two jobs.",
          "ask": "Nia gives up the better of two conflicting jobs: one pays $120 with $20 avoidable materials, the other pays $70 net. What is her forgone net cash alternative, in dollars?",
          "answer": "$100",
          "distractors": [
            "$120",
            "$170",
            "$70"
          ],
          "speed": false,
          "alt": [
            "100",
            "100 dollars"
          ]
        },
        {
          "id": "u01-l2-h2",
          "kind": "hypo",
          "say": "Update opportunity cost when the alternative disappears.",
          "status": "fictional",
          "sourceIds": [
            "F1"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives",
          "hook": "Update opportunity cost when the alternative disappears.",
          "stem": "Before Nia chooses, the editing client cancels. The $70-net job remains confirmed, and volunteering conflicts with it. These are her only remaining options for the slot.",
          "call": "What is the forgone net cash alternative if she volunteers?",
          "issue": "revised fallback",
          "rule": "u01-l2-rule",
          "options": [
            {
              "text": "$100, because the first calculation still applies.",
              "why": "That calculation used an option no longer available.",
              "trap": 11
            },
            {
              "text": "$70, from the job that remains available.",
              "why": "The cancelled job is no longer a feasible alternative."
            },
            {
              "text": "$170, because both offers once existed.",
              "why": "Historical offers do not establish current opportunities.",
              "trap": 3
            },
            {
              "text": "$0, because volunteering has no admission fee.",
              "why": "The fee and the forgone paid job are different considerations.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "the editing client cancels",
            "only remaining options"
          ],
          "findAsk": "Which details rule out retaining the cancelled editing job or assuming another option?"
        },
        {
          "id": "u01-l2-trap",
          "kind": "trap",
          "say": "Do not add mutually exclusive forgone options.",
          "status": "fictional",
          "sourceIds": [
            "F1"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives",
          "hook": "Do not add mutually exclusive forgone options.",
          "stem": "A team uses its only free afternoon for training. The best conflicting alternative is worth $80 under its stated criterion; another is worth $30.",
          "wrong": "Training has an opportunity cost of $110.",
          "right": "The best forgone alternative is worth $80.",
          "why": "The alternatives conflict, so adding both values counts opportunities the team could not jointly take.",
          "fixDistractors": [
            "Use $30 because it is the cheaper alternative.",
            "Use $0 because no cash changes hands."
          ],
          "cat": 5
        },
        {
          "id": "u01-l2-transfer",
          "kind": "hypo",
          "say": "A cash opportunity cost informs a choice without deciding every value.",
          "status": "fictional",
          "sourceIds": [
            "F1"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives",
          "hook": "A cash opportunity cost informs a choice without deciding every value.",
          "stem": "A maker can use one machine-hour for order A, yielding $45 after all avoidable inputs, or order B, yielding $32 on the same basis. Both are feasible. She uses it for a community demonstration instead.",
          "call": "What cash opportunity cost is specified?",
          "issue": "best use of scarce capacity",
          "rule": "u01-l2-rule",
          "options": [
            {
              "text": "$77.",
              "why": "That sums two uses of the same hour.",
              "trap": 3
            },
            {
              "text": "$32.",
              "why": "The higher $45-net option remains feasible.",
              "trap": 10
            },
            {
              "text": "$45.",
              "why": "Order A is the best conflicting cash alternative."
            },
            {
              "text": "The demonstration must be cancelled.",
              "why": "The cash comparison does not state the maker’s complete objective.",
              "trap": 4
            }
          ],
          "answer": 2,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "one machine-hour",
            "Both are feasible"
          ],
          "findAsk": "Which details establish that the two paid orders compete for the same usable resource?"
        }
      ]
    },
    {
      "id": "u01l3",
      "title": "Count time and money once",
      "objective": "Build a transparent direct-plus-forgone comparison without double counting an already net alternative.",
      "takeaway": "Separate the direct expense from the net value of the alternative.",
      "fieldwork": "Write a small comparison with separate columns for new payments, forgone net value and important unpriced effects.",
      "items": [
        {
          "id": "u01-l3-rule",
          "kind": "rule",
          "say": "Direct costs plus a forgone net alternative can form an economic-cost comparison.",
          "status": "model",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Label the boxes before adding their contents.",
          "title": "Keep the accounting boundaries visible",
          "elements": [
            "State what each figure includes",
            "Use the alternative’s net value consistently",
            "Include each relevant cost once",
            "Name effects left outside the calculation"
          ],
          "ordered": false,
          "distractorElements": [
            "Subtract the alternative’s inputs again after using its net value",
            "Treat an unpriced effect as necessarily zero"
          ],
          "ex": [
            {
              "facts": "A workshop costs $30. Attending prevents a job already valued at $80 net.",
              "result": "The stated economic cost is $110; do not subtract the job’s inputs again."
            },
            {
              "facts": "An alternative is quoted as $100 gross with $20 avoidable inputs.",
              "result": "Its net value is $80 before adding the workshop’s own expense."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A job’s materials should be subtracted again after its payoff is already stated net of those materials.",
              "a": false,
              "why": "Doing so counts the same input twice."
            },
            {
              "t": "mcq",
              "q": "An important accessibility effect has no estimate. What should the comparison say?",
              "options": [
                "The effect is zero",
                "The effect should be named as unmeasured",
                "The known costs cannot be added"
              ],
              "a": "The effect should be named as unmeasured",
              "why": "The measured total can be calculated while its omission is made explicit."
            }
          ]
        },
        {
          "id": "u01-l3-term",
          "kind": "term",
          "say": "Direct costs plus the opportunity cost of the best alternative forgone in a specified comparison.",
          "status": "model",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "A receipt shows payments; the comparison can also include a displaced use.",
          "term": "Economic cost",
          "meaning": "Direct costs plus the opportunity cost of the best alternative forgone in a specified comparison.",
          "use": "Check whether a quoted total already includes both components.",
          "lang": "english"
        },
        {
          "id": "u01-l3-h1",
          "kind": "hypo",
          "say": "A free calendar slot may still have a valuable alternative.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "A free calendar slot may still have a valuable alternative.",
          "stem": "A workshop costs $30 to attend. It prevents a confirmed job worth $80 net after all its expenses. Ignore all other effects for this calculation.",
          "call": "What economic cost follows from these inputs?",
          "issue": "direct and forgone cost",
          "rule": "u01-l3-rule",
          "options": [
            {
              "text": "$80.",
              "why": "This omits the workshop’s direct expense.",
              "trap": 9
            },
            {
              "text": "$110.",
              "why": "Add the workshop’s $30 direct expense to the $80 net alternative."
            },
            {
              "text": "$50.",
              "why": "The $30 expense is added to, not subtracted from, the forgone value.",
              "trap": 5
            },
            {
              "text": "$30.",
              "why": "This ignores the displaced job.",
              "trap": 9
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "$30 to attend",
            "$80 net after all its expenses"
          ],
          "findAsk": "Which stated amounts are the direct fee and net earnings forgone?"
        },
        {
          "id": "u01-l3-pairs",
          "kind": "pairs",
          "say": "Labels prevent arithmetic from hiding what a number includes.",
          "status": "practice",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Labels prevent arithmetic from hiding what a number includes.",
          "set": "Keep the entries separate",
          "pairs": [
            {
              "l": "A payment required only if you attend",
              "r": "Direct attendance expense"
            },
            {
              "l": "The best other use you cannot also take",
              "r": "Forgone alternative"
            },
            {
              "l": "Job receipts before its input costs",
              "r": "Gross job pay"
            },
            {
              "l": "Job receipts after its input costs",
              "r": "Net job pay"
            },
            {
              "l": "An important effect with no estimate",
              "r": "Unmeasured consideration"
            }
          ],
          "spare": [
            "Evidence that the higher payer is morally better"
          ],
          "mode": "concept"
        },
        {
          "id": "u01-l3-h2",
          "kind": "hypo",
          "say": "Net the alternative once, then add the separate direct cost.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "Net the alternative once, then add the separate direct cost.",
          "stem": "The same workshop costs $30. The alternative job pays $100 gross and needs $20 of materials that are purchased only if the job is done. There are no other differences in the cash calculation.",
          "call": "Which calculation uses those figures consistently?",
          "issue": "net alternative before comparison",
          "rule": "u01-l3-rule",
          "options": [
            {
              "text": "$30 + $100 = $130.",
              "why": "Gross receipts overstate the net alternative.",
              "trap": 9
            },
            {
              "text": "$30 + $80 − $20 = $90.",
              "why": "The $80 already subtracts the job’s materials.",
              "trap": 5
            },
            {
              "text": "$30 + ($100 − $20) = $110.",
              "why": "Net the alternative’s avoidable inputs, then add the direct workshop expense."
            },
            {
              "text": "$100 − $30 = $70.",
              "why": "This mixes the job’s receipts with the workshop expense and omits job inputs.",
              "trap": 9
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "$100 gross",
            "purchased only if the job is done"
          ],
          "findAsk": "Which details distinguish gross earnings from an expense avoided when the job is skipped?"
        },
        {
          "id": "u01-l3-num",
          "kind": "num",
          "say": "The alternative nets $75; add the separate $25 workshop fee.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "The alternative nets $75; add the separate $25 workshop fee.",
          "ask": "A workshop fee is $25. Attending prevents a job paying $90 gross with $15 of avoidable inputs. Ignoring other effects, what is the workshop’s economic cost in dollars?",
          "answer": "$100",
          "distractors": [
            "$115",
            "$75",
            "$85"
          ],
          "speed": false,
          "alt": [
            "100",
            "100 dollars"
          ]
        },
        {
          "id": "u01-l3-transfer",
          "kind": "argue",
          "say": "A correct sum does not make an incomplete comparison complete.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less",
          "hook": "A correct sum does not make an incomplete comparison complete.",
          "stem": "A council model counts a venue’s $200 rental and $100 of forgone staff-task value. It leaves accessibility effects unmeasured. The chair says the arithmetic proves the event is the best use of the venue.",
          "call": "Which reply is supported?",
          "issue": "measured cost and omitted effects",
          "rule": "u01-l3-rule",
          "options": [
            {
              "text": "The event is best because all listed costs can be added.",
              "why": "A cost total alone does not establish the preferred option.",
              "trap": 4
            },
            {
              "text": "Accessibility effects equal zero until priced.",
              "why": "Missing measurement does not establish absence.",
              "trap": 3
            },
            {
              "text": "The model’s $300 sum is mathematically impossible.",
              "why": "Its scope is incomplete, but the stated numbers can still be added.",
              "trap": 5
            },
            {
              "text": "The measured cost is $300; “best” needs more information.",
              "why": "The sum is valid, but benefits, alternatives and unmeasured effects are not fully evaluated."
            }
          ],
          "answer": 3,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "leaves accessibility effects unmeasured"
          ],
          "findAsk": "Which detail shows that the model omits a potentially relevant effect?"
        }
      ]
    },
    {
      "id": "u01l4",
      "title": "When the constraint changes",
      "objective": "Update a comparison after a relevant constraint changes and distinguish feasibility from preference.",
      "takeaway": "A changed constraint can change the alternative—and the cost of choosing.",
      "fieldwork": "Revisit one earlier decision: name a specific change that would reopen an option and one value the change would not settle.",
      "items": [
        {
          "id": "u01-l4-rule",
          "kind": "rule",
          "say": "Update feasible alternatives when a relevant limit changes; keep the objective separate.",
          "status": "model",
          "sourceIds": [
            "F1",
            "F3",
            "F15"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Loosening one knot does not undo every knot.",
          "title": "Recheck the constraint that actually binds",
          "elements": [
            "Identify the limit that excludes the option",
            "Check whether the change removes that limit",
            "Recompute the relevant alternative",
            "Keep value judgments explicit"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume extra money removes every time conflict",
            "Treat newly feasible as automatically preferred"
          ],
          "ex": [
            {
              "facts": "A $60 permit exceeds a fixed $50 budget. The budget rises to $70 and all other requirements are met.",
              "result": "The permit becomes affordable, but other criteria may still affect the choice."
            },
            {
              "facts": "Two events occur simultaneously. Only the money budget rises.",
              "result": "The time conflict remains unless some scheduling condition also changes."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A larger budget necessarily resolves two simultaneous commitments.",
              "a": false,
              "why": "The binding limit can be time rather than money."
            },
            {
              "t": "mcq",
              "q": "A confirmed alternative becomes unavailable. What should you revisit?",
              "options": [
                "The old estimate must remain fixed",
                "Only the name of the chosen option",
                "The feasible fallback and its value"
              ],
              "a": "The feasible fallback and its value",
              "why": "A changed alternative changes the basis of opportunity-cost comparison."
            }
          ]
        },
        {
          "id": "u01-l4-term",
          "kind": "term",
          "say": "A stated requirement that limits which options can be taken.",
          "status": "model",
          "sourceIds": [
            "F1",
            "F3",
            "F15"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "First find the barrier; then ask which change would remove it.",
          "term": "Feasibility constraint",
          "meaning": "A stated requirement that limits which options can be taken.",
          "use": "A fixed date or required permission can exclude an otherwise attractive option.",
          "lang": "english"
        },
        {
          "id": "u01-l4-h1",
          "kind": "hypo",
          "say": "Removing one feasibility barrier does not supply a complete evaluation.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3",
            "F15"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Removing one feasibility barrier does not supply a complete evaluation.",
          "stem": "A club has $50 for a required permit priced at $60. A donor raises the budget to $70. The permit is available, and every other event requirement is satisfied.",
          "call": "What follows from the budget change?",
          "issue": "relaxing the relevant limit",
          "rule": "u01-l4-rule",
          "options": [
            {
              "text": "The permit price must fall to $50.",
              "why": "Changing the club’s budget does not set the supplier’s price.",
              "trap": 3
            },
            {
              "text": "The event must be the fairest use of money.",
              "why": "Affordability does not establish a fairness ranking.",
              "trap": 4
            },
            {
              "text": "The permit is now affordable.",
              "why": "Its $60 cost fits the new $70 budget."
            },
            {
              "text": "The permit remains unaffordable because it once exceeded the budget.",
              "why": "The relevant budget has changed.",
              "trap": 11
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "raises the budget to $70",
            "every other event requirement is satisfied"
          ],
          "boundary": true,
          "findAsk": "Which details establish the new budget and satisfaction of all other requirements?"
        },
        {
          "id": "u01-l4-sort",
          "kind": "sort",
          "say": "Test the particular constraint, not the appeal of the change.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3",
            "F15"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Test the particular constraint, not the appeal of the change.",
          "q": "Does the new fact remove the stated barrier?",
          "buckets": [
            "Barrier removed",
            "Barrier remains"
          ],
          "items": [
            {
              "text": "Barrier: two fixed simultaneous events. Change: more money, with no scheduling flexibility.",
              "bucket": "Barrier remains",
              "why": "The time conflict remains."
            },
            {
              "text": "Barrier: $60 fee exceeds $50 budget. Change: budget becomes $70; other requirements are met.",
              "bucket": "Barrier removed",
              "why": "The fee now fits."
            },
            {
              "text": "Barrier: required approval is missing. Change: the authorized reviewer grants it.",
              "bucket": "Barrier removed",
              "why": "The missing approval is supplied."
            },
            {
              "text": "Barrier: room unavailable Tuesday. Change: it becomes available Wednesday; Tuesday stays fixed.",
              "bucket": "Barrier remains",
              "why": "Availability still misses the required day."
            },
            {
              "text": "Barrier: travel takes two hours but only one is available. Change: a verified route takes forty minutes.",
              "bucket": "Barrier removed",
              "why": "The revised travel time fits."
            },
            {
              "text": "Barrier: a confirmed job conflicts with volunteering. Change: both remain in the same slot.",
              "bucket": "Barrier remains",
              "why": "The conflict has not changed."
            }
          ],
          "mode": "contrast",
          "boundary": true
        },
        {
          "id": "u01-l4-h2",
          "kind": "hypo",
          "say": "Extra resources help only where they relax a relevant limit.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3",
            "F15"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Extra resources help only where they relax a relevant limit.",
          "stem": "A student has two fixed commitments at 10 am in different places. A scholarship increases their available cash, but neither time can change and no substitute attendee is allowed.",
          "call": "What does the scholarship establish about attending both?",
          "issue": "money versus time",
          "rule": "u01-l4-rule",
          "options": [
            {
              "text": "Both commitments are now feasible because cash increased.",
              "why": "Money has not created a way to attend both.",
              "trap": 3
            },
            {
              "text": "Neither commitment individually is feasible.",
              "why": "The conflict prevents doing both, not necessarily either one.",
              "trap": 7
            },
            {
              "text": "The more expensive commitment must be chosen.",
              "why": "Price is not the student’s stated decision criterion.",
              "trap": 4
            },
            {
              "text": "It does not remove the scheduling conflict.",
              "why": "The relevant time constraint is unchanged."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "neither time can change",
            "no substitute attendee is allowed"
          ],
          "boundary": true,
          "findAsk": "Which details prevent fixing the clash by changing times or sending someone else?"
        },
        {
          "id": "u01-l4-trap",
          "kind": "trap",
          "say": "A cash advantage does not erase an explicit constraint.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3",
            "F15"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "A cash advantage does not erase an explicit constraint.",
          "stem": "A candidate gains access to a higher-paying job, but its hours conflict with a caregiving commitment they have said they will keep.",
          "wrong": "The higher wage proves the candidate should take it.",
          "right": "Check feasibility and the candidate’s stated priorities before recommending it.",
          "why": "The wage alone does not remove the conflict or establish the candidate’s full objective.",
          "fixDistractors": [
            "Assume the caregiving commitment has no value because it is unpaid.",
            "Declare that every higher-paying job is a worse choice."
          ],
          "cat": 4,
          "boundary": true
        },
        {
          "id": "u01-l4-transfer",
          "kind": "hypo",
          "say": "Sometimes the facts settle access while values remain to be discussed.",
          "status": "fictional",
          "sourceIds": [
            "F1",
            "F3",
            "F15"
          ],
          "src": "CORE Econ: Economic decisions: Opportunity costs, economic rents, and incentives; CORE Econ: Economic models: How to see more by looking at less; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Sometimes the facts settle access while values remain to be discussed.",
          "stem": "A community group can use a hall on Friday only if its caretaker is available. The caretaker confirms availability. A rehearsal and a food-distribution event now both fit the hall’s requirements, but the group has not agreed which purpose to prioritize.",
          "call": "What has the new fact settled?",
          "issue": "feasibility without moral ranking",
          "rule": "u01-l4-rule",
          "options": [
            {
              "text": "Both uses are feasible; the priority remains open.",
              "why": "Caretaker availability resolves access, not the group’s evaluative criterion."
            },
            {
              "text": "Food distribution must win under every fairness criterion.",
              "why": "No common criterion has been specified for this comparison.",
              "trap": 4
            },
            {
              "text": "The rehearsal must win because it can sell tickets.",
              "why": "Ticket revenue is not an agreed complete objective.",
              "trap": 4
            },
            {
              "text": "Neither use can be evaluated because access changed.",
              "why": "The change opens feasible options that can now be compared.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "both fit the hall’s requirements",
            "has not agreed which purpose to prioritize"
          ],
          "boundary": true,
          "findAsk": "Which details distinguish feasibility from an unresolved priority?"
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
