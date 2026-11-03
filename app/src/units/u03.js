// Original Oikos content. Scenarios and numerical inputs are fictional unless identified otherwise.
(function () {
  const unit = {
  "id": "u03",
  "title": "What does the system reward?",
  "blurb": "Distinguish the target, the measure and the response.",
  "subject": "incentives",
  "assume": "All workplace cases and pay figures are fictional. A calculated reward is not a forecast of anyone’s behavior. Research findings retain their stated setting; explaining an incentive does not excuse deception or harm.",
  "lessons": [
    {
      "id": "u03l1",
      "title": "Read the reward mechanism",
      "objective": "Identify what a reward formula changes without claiming it determines behavior.",
      "takeaway": "Calculate what is rewarded, then ask how people may respond.",
      "fieldwork": "Write down one actual reward rule. Separate its mechanical payment from your hypothesis about the response.",
      "items": [
        {
          "id": "u03-l1-rule",
          "kind": "rule",
          "say": "An incentive alters the rewards or costs of an action; behavior still depends on context.",
          "status": "model",
          "sourceIds": [
            "F4",
            "F6"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "A signpost changes the route’s appeal; it does not move the traveler.",
          "title": "A reward changes a comparison, not a person into a formula",
          "elements": [
            "Identify the rewarded action",
            "Calculate the relevant reward change",
            "Separate the payment rule from a behavioral prediction"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat a reward formula as proof of a person’s motive",
            "Assume money is everyone’s only consideration"
          ],
          "ex": [
            {
              "facts": "A task pays $4 per verified completion. Five more verified completions add $20.",
              "result": "That is a payment calculation; it does not prove how many extra completions a worker will make."
            },
            {
              "facts": "A quality requirement is added before a completion earns payment.",
              "result": "The rewarded action changes from recording output to meeting the stated verification rule."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Knowing the bonus formula is enough to know every worker’s response.",
              "a": false,
              "why": "Constraints, other motives and task characteristics still matter."
            },
            {
              "t": "mcq",
              "q": "A $3 reward applies to each verified case. What does one extra verified case add mechanically?",
              "options": [
                "A guaranteed extra hour of effort",
                "$3 of reward",
                "Proof that the worker values only pay"
              ],
              "a": "$3 of reward",
              "why": "The formula determines the added payment, not the complete behavioral response."
            }
          ]
        },
        {
          "id": "u03-l1-term",
          "kind": "term",
          "say": "A reward, penalty or other consequence that changes the relative attractiveness of an action.",
          "status": "model",
          "sourceIds": [
            "F4",
            "F6"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Follow the consequence attached to the next action.",
          "term": "Incentive",
          "meaning": "A reward, penalty or other consequence that changes the relative attractiveness of an action.",
          "use": "Distinguish what an arrangement rewards from what people actually do.",
          "lang": "english"
        },
        {
          "id": "u03-l1-h1",
          "kind": "hypo",
          "say": "Calculate the payment without inventing the response.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F6"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Calculate the payment without inventing the response.",
          "stem": "A repair team earns $5 for each completed safety check recorded and verified. Two more verified checks would qualify. No cap or other pay rule applies.",
          "call": "What does the formula establish?",
          "issue": "mechanical reward change",
          "rule": "u03-l1-rule",
          "options": [
            {
              "text": "Every worker will perform exactly two more checks.",
              "why": "The formula does not determine everyone’s choices.",
              "trap": 3
            },
            {
              "text": "Two more qualifying checks add $10.",
              "why": "The payment rule gives $5 times two."
            },
            {
              "text": "The extra payment proves all repairs are now safe.",
              "why": "A qualifying check count is not a complete safety outcome.",
              "trap": 7
            },
            {
              "text": "The team’s entire pay is $10.",
              "why": "The scenario gives an addition, not total pay.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "$5 for each",
            "No cap or other pay rule applies"
          ],
          "findAsk": "Which details establish the per-check rate and exclude a cap or other pay formula?"
        },
        {
          "id": "u03-l1-num",
          "kind": "num",
          "say": "Five qualifying completions times $4 gives $20.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F6"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Five qualifying completions times $4 gives $20.",
          "ask": "A team receives $4 for each verified completion, with no cap. How much extra reward do five additional verified completions earn, in dollars?",
          "answer": "$20",
          "distractors": [
            "$4",
            "$9",
            "$5"
          ],
          "speed": false,
          "alt": [
            "20",
            "20 dollars"
          ]
        },
        {
          "id": "u03-l1-h2",
          "kind": "hypo",
          "say": "Read the condition attached to the number.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F6"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Read the condition attached to the number.",
          "stem": "A new rule pays the same $5 per safety check only after an independent reviewer verifies it. A worker records two checks, but neither has yet been verified.",
          "call": "What payment is established under the new rule?",
          "issue": "qualifying condition",
          "rule": "u03-l1-rule",
          "options": [
            {
              "text": "The two records already establish a $10 bonus.",
              "why": "This omits the new qualifying condition.",
              "trap": 2
            },
            {
              "text": "The rule proves the worker falsified both checks.",
              "why": "Lack of verification does not establish falsification.",
              "trap": 3
            },
            {
              "text": "No new bonus is established yet.",
              "why": "The required verification has not occurred."
            },
            {
              "text": "The worker can never receive payment for them.",
              "why": "Later verification could satisfy the rule.",
              "trap": 7
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "neither has yet been verified"
          ],
          "findAsk": "Which detail shows that the checks have not met the payment condition?"
        },
        {
          "id": "u03-l1-pairs",
          "kind": "pairs",
          "say": "A goal, a measure and a response are different claims.",
          "status": "practice",
          "sourceIds": [
            "F4",
            "F6"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "A goal, a measure and a response are different claims.",
          "set": "Separate the parts of a reward arrangement",
          "pairs": [
            {
              "l": "The result the organization actually wants",
              "r": "Goal"
            },
            {
              "l": "The recorded quantity used to track progress",
              "r": "Measure"
            },
            {
              "l": "The rule connecting recorded performance to payment",
              "r": "Reward formula"
            },
            {
              "l": "The extra payment for one more qualifying unit",
              "r": "Marginal reward"
            },
            {
              "l": "An explanation of how the rule might change action",
              "r": "Response hypothesis"
            }
          ],
          "spare": [
            "Proof of every participant’s motives"
          ],
          "mode": "concept"
        },
        {
          "id": "u03-l1-transfer",
          "kind": "argue",
          "say": "The rewarded count is not automatically the desired result.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F6"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "The rewarded count is not automatically the desired result.",
          "stem": "A college offers staff a reward for each employer agreement signed. A colleague predicts that usable placements will rise by exactly the same percentage as signatures. No evidence about placement quality or staff response is supplied.",
          "call": "Which reply is warranted?",
          "issue": "rewarded action versus outcome",
          "rule": "u03-l1-rule",
          "options": [
            {
              "text": "The same percentage is guaranteed by the reward rule.",
              "why": "No stated relationship equates signatures with usable placements.",
              "trap": 3
            },
            {
              "text": "The reward cannot affect signatures at all.",
              "why": "The absence of evidence is not proof of no effect.",
              "trap": 3
            },
            {
              "text": "Any reward for agreements is inherently deceptive.",
              "why": "The arrangement alone does not establish deception.",
              "trap": 7
            },
            {
              "text": "Signatures are rewarded; usable placements need separate evidence.",
              "why": "The formula concerns agreements, while the desired outcome may differ."
            }
          ],
          "answer": 3,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "No evidence about placement quality or staff response is supplied"
          ],
          "findAsk": "Which detail blocks the claimed prediction about usable placements?"
        }
      ]
    },
    {
      "id": "u03l2",
      "title": "Notice the work the measure misses",
      "objective": "Distinguish a proxy from a goal and identify a task-allocation risk under explicit conditions.",
      "takeaway": "A precise measure can still measure the wrong slice of the job.",
      "fieldwork": "Name one valuable task that your current success measure does not capture.",
      "items": [
        {
          "id": "u03-l2-rule",
          "kind": "rule",
          "say": "When tasks compete for attention, rewarding one measure can divert effort from other valuable work.",
          "status": "model",
          "sourceIds": [
            "F4",
            "F6",
            "E7"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents; Manheim and Garrabrant — arXiv, 2018, revised 2019: Categorizing Variants of Goodhart's Law",
          "hook": "A sharp photograph of one corner is not a picture of the whole room.",
          "title": "Check the whole job, not just the measurable task",
          "elements": [
            "Name the intended outcome",
            "Check what the measure captures",
            "Identify competing unmeasured tasks",
            "Look for ways the measure can rise without the goal"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat accurate counting as proof of complete measurement",
            "Assume stronger rewards always improve every task"
          ],
          "ex": [
            {
              "facts": "A fixed hour can go to quick closures or careful follow-up. Only closures earn a bonus.",
              "result": "The rule can make follow-up relatively less rewarding; the actual response needs evidence."
            },
            {
              "facts": "A report counts closures perfectly but ignores reopened cases.",
              "result": "The count can be accurate while still missing durable resolution."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A perfectly counted metric must fully represent the organization’s goal.",
              "a": false,
              "why": "Accuracy of a count and completeness of the goal are separate."
            },
            {
              "t": "mcq",
              "q": "Which fact makes diversion of attention a plausible concern?",
              "options": [
                "The tasks compete for the same limited time",
                "Every task improves together at no cost",
                "The measure includes every relevant outcome"
              ],
              "a": "The tasks compete for the same limited time",
              "why": "Competing uses of attention create the stated tradeoff."
            }
          ]
        },
        {
          "id": "u03-l2-term",
          "kind": "term",
          "say": "An observed indicator used to stand in for a broader outcome that is not measured directly.",
          "status": "model",
          "sourceIds": [
            "F4",
            "F6",
            "E7"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents; Manheim and Garrabrant — arXiv, 2018, revised 2019: Categorizing Variants of Goodhart's Law",
          "hook": "A ticket count is an indicator, not the customer’s whole experience.",
          "term": "Proxy measure",
          "meaning": "An observed indicator used to stand in for a broader outcome that is not measured directly.",
          "use": "Ask how the proxy could improve while the desired outcome does not.",
          "lang": "english"
        },
        {
          "id": "u03-l2-h1",
          "kind": "hypo",
          "say": "Read the desired outcome as well as the rewarded count.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F6",
            "E7"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents; Manheim and Garrabrant — arXiv, 2018, revised 2019: Categorizing Variants of Goodhart's Law",
          "hook": "Read the desired outcome as well as the rewarded count.",
          "stem": "A support team’s goal is durable resolution. Log A has 20 closed tickets and 2 reopened; log B has 30 closed and 15 reopened. In this exercise, durable means closed without reopening in the observed window.",
          "call": "What do these logs show?",
          "issue": "proxy versus durable outcome",
          "rule": "u03-l2-rule",
          "options": [
            {
              "text": "B improves both counts because 30 exceeds 20.",
              "why": "It ignores the reopened cases.",
              "trap": 9
            },
            {
              "text": "A has only 2 durable resolutions.",
              "why": "Two is the reopened count, not the durable count.",
              "trap": 5
            },
            {
              "text": "B has more closures but fewer durable resolutions.",
              "why": "A has 18 durable resolutions; B has 15."
            },
            {
              "text": "The logs prove the bonus caused reopening.",
              "why": "They do not identify the cause of either pattern.",
              "trap": 3
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "durable means closed without reopening"
          ],
          "findAsk": "Which phrase defines the outcome used to compare the logs?"
        },
        {
          "id": "u03-l2-num",
          "kind": "num",
          "say": "A has 18 and B has 15; A exceeds B by 3.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F6",
            "E7"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents; Manheim and Garrabrant — arXiv, 2018, revised 2019: Categorizing Variants of Goodhart's Law",
          "hook": "A has 18 and B has 15; A exceeds B by 3.",
          "ask": "Log A has 20 closed tickets and 2 reopened. Log B has 30 closed and 15 reopened. Durable means closed minus reopened in the stated window. How many more durable resolutions does A have than B?",
          "answer": "3 resolutions",
          "distractors": [
            "10 resolutions",
            "13 resolutions",
            "18 resolutions"
          ],
          "speed": false,
          "alt": [
            "3",
            "three resolutions"
          ]
        },
        {
          "id": "u03-l2-h2",
          "kind": "hypo",
          "say": "A plausible mechanism is not an observed magnitude.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F6",
            "E7"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents; Manheim and Garrabrant — arXiv, 2018, revised 2019: Categorizing Variants of Goodhart's Law",
          "hook": "A plausible mechanism is not an observed magnitude.",
          "stem": "A technician has a fixed hour for inspections and customer documentation. Both matter to the service; more time on one leaves less on the other. Only inspection count earns extra pay. The actual response has not been observed.",
          "call": "Which concern follows from these facts?",
          "issue": "competing tasks",
          "rule": "u03-l2-rule",
          "options": [
            {
              "text": "Documentation will certainly fall to zero.",
              "why": "The magnitude and actual response are not established.",
              "trap": 7
            },
            {
              "text": "Documentation cannot be affected because it is unpaid.",
              "why": "The shared time constraint connects the activities.",
              "trap": 5
            },
            {
              "text": "Inspection counts must be fraudulent.",
              "why": "A possible allocation effect does not establish falsification.",
              "trap": 3
            },
            {
              "text": "Documentation may receive less attention.",
              "why": "The reward favors one task that competes for the same hour."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "more time on one leaves less on the other",
            "actual response has not been observed"
          ],
          "findAsk": "Which details establish a time tradeoff while leaving actual behavior unknown?"
        },
        {
          "id": "u03-l2-sort",
          "kind": "sort",
          "say": "A metric can be reliably counted and still leave out important work.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F6",
            "E7"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents; Manheim and Garrabrant — arXiv, 2018, revised 2019: Categorizing Variants of Goodhart's Law",
          "hook": "A metric can be reliably counted and still leave out important work.",
          "q": "Which aspect of measurement does each fact address? Coverage may be adequate or reveal a gap.",
          "buckets": [
            "Counting accuracy",
            "Coverage of the goal",
            "Neither alone"
          ],
          "items": [
            {
              "text": "An audit confirms that every logged closure was counted once.",
              "bucket": "Counting accuracy",
              "why": "It verifies the count, not whether closure equals lasting resolution."
            },
            {
              "text": "The score includes the stated goal’s speed and verified lasting-quality dimensions.",
              "bucket": "Coverage of the goal",
              "why": "It addresses those specified dimensions of the goal."
            },
            {
              "text": "A manager says the dashboard looks professional.",
              "bucket": "Neither alone",
              "why": "Appearance establishes neither property."
            },
            {
              "text": "A recount reproduces the same total of recorded cases.",
              "bucket": "Counting accuracy",
              "why": "It supports reliable counting of the records."
            },
            {
              "text": "The measure omits a quality dimension explicitly included in the goal.",
              "bucket": "Coverage of the goal",
              "why": "It establishes a gap in goal coverage."
            },
            {
              "text": "The bonus became larger this month.",
              "bucket": "Neither alone",
              "why": "Reward size does not establish the measure’s accuracy or completeness."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u03-l2-transfer",
          "kind": "hypo",
          "say": "Ask which valuable work the count leaves outside the frame.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F6",
            "E7"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Getting the work done: Contracts, principals, and agents; Manheim and Garrabrant — arXiv, 2018, revised 2019: Categorizing Variants of Goodhart's Law",
          "hook": "Ask which valuable work the count leaves outside the frame.",
          "stem": "A volunteer coordinator counts meals packed. The stated goal also requires correct allergen labels. Packing and label checking share limited staff time, but labels are not included in the reward. No safety outcome has yet been measured.",
          "call": "What is the strongest supported design concern?",
          "issue": "unmeasured quality dimension",
          "rule": "u03-l2-rule",
          "options": [
            {
              "text": "The reward may neglect the label-checking task.",
              "why": "The omitted goal component competes for the same staff time."
            },
            {
              "text": "The numbers prove volunteers have harmed recipients.",
              "why": "No such outcome is observed in the scenario.",
              "trap": 3
            },
            {
              "text": "Packed-meal count fully measures the stated goal.",
              "why": "The goal also includes correct labels.",
              "trap": 9
            },
            {
              "text": "More packed meals necessarily mean more correct labels.",
              "why": "The reward and constraints do not establish that relationship.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "Packing and label checking share limited staff time",
            "labels are not included in the reward"
          ],
          "findAsk": "Which details connect limited time with an unrewarded part of the goal?"
        }
      ]
    },
    {
      "id": "u03l3",
      "title": "A penalty can change the meaning",
      "objective": "Interpret a bounded finding without turning its mechanism into a universal prediction.",
      "takeaway": "A new price or penalty can change more than the cash calculation.",
      "fieldwork": "For a proposed fee, write both the intended response and one alternative interpretation people might make.",
      "items": [
        {
          "id": "u03-l3-rule",
          "kind": "rule",
          "say": "A particular fine increased late pickups in one study; that does not show every fine will backfire.",
          "status": "evidence",
          "sourceIds": [
            "F5",
            "E5"
          ],
          "src": "Uri Gneezy and Aldo Rustichini, Journal of Legal Studies; author copy at UC San Diego: A Fine Is a Price; Journal of Economic Perspectives 25(4), 2011 — Gneezy, Meier and Rey-Biel; Columbia-hosted paper: When and Why Incentives (Don't) Work to Modify Behavior",
          "hook": "A new sign can change the meaning of the door as well as the price of entry.",
          "title": "Keep the observed finding and the explanation distinct",
          "elements": [
            "Name the intervention and studied setting",
            "Report what was observed",
            "Separate a proposed mechanism from what was established",
            "Check limits before applying the result elsewhere"
          ],
          "ordered": false,
          "distractorElements": [
            "Infer that all penalties increase the penalized behavior",
            "Treat one interpretation as the only possible cause"
          ],
          "ex": [
            {
              "facts": "Gneezy and Rustichini studied ten Israeli day-care centers over twenty weeks; six introduced a late-pickup fine.",
              "result": "Late pickups increased in the fine condition. The authors did not claim every fine would have this effect."
            },
            {
              "facts": "A different service proposes a much larger fee under different rules.",
              "result": "The day-care finding alone does not establish the response in that new setting."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "The study establishes that every late fee increases lateness.",
              "a": false,
              "why": "Its intervention and setting are bounded; size and context may matter."
            },
            {
              "t": "mcq",
              "q": "A team says customers might interpret a fine as permission to be late. What kind of statement is that?",
              "options": [
                "A guarantee about all customers",
                "A proposed mechanism to examine",
                "A direct count of late pickups"
              ],
              "a": "A proposed mechanism to examine",
              "why": "An interpretation can help explain behavior, but it is not itself the observed outcome count."
            }
          ],
          "exceptions": [
            "The reported pattern does not uniquely prove motivational crowding out."
          ]
        },
        {
          "id": "u03-l3-term",
          "kind": "term",
          "say": "A reduction in an existing motivation caused by an external reward, penalty or intervention.",
          "status": "model",
          "sourceIds": [
            "F5",
            "E5"
          ],
          "src": "Uri Gneezy and Aldo Rustichini, Journal of Legal Studies; author copy at UC San Diego: A Fine Is a Price; Journal of Economic Perspectives 25(4), 2011 — Gneezy, Meier and Rey-Biel; Columbia-hosted paper: When and Why Incentives (Don't) Work to Modify Behavior",
          "hook": "An added price can sometimes weaken another reason for acting.",
          "term": "Motivational crowding out",
          "meaning": "A reduction in an existing motivation caused by an external reward, penalty or intervention.",
          "use": "Treat it as a possible mechanism to investigate, not an automatic effect of every payment.",
          "lang": "english",
          "alt": [
            "crowding out of motivation"
          ]
        },
        {
          "id": "u03-l3-h1",
          "kind": "hypo",
          "say": "Use a counterexample to question certainty, not to create a new certainty.",
          "status": "fictional",
          "sourceIds": [
            "F5",
            "E5"
          ],
          "src": "Uri Gneezy and Aldo Rustichini, Journal of Legal Studies; author copy at UC San Diego: A Fine Is a Price; Journal of Economic Perspectives 25(4), 2011 — Gneezy, Meier and Rey-Biel; Columbia-hosted paper: When and Why Incentives (Don't) Work to Modify Behavior",
          "hook": "Use a counterexample to question certainty, not to create a new certainty.",
          "stem": "A team reads the day-care study: late pickups increased after a particular fine was introduced in six of ten centers. The team now proposes a fee for late returns at a tool library with different users and rules.",
          "call": "What does that finding establish for the tool library?",
          "issue": "transport of a bounded finding",
          "rule": "u03-l3-rule",
          "options": [
            {
              "text": "The tool-library fee will certainly increase late returns.",
              "why": "This treats a bounded result as a universal forecast.",
              "trap": 7
            },
            {
              "text": "The fee will certainly eliminate late returns.",
              "why": "The scenario provides no basis for that certainty.",
              "trap": 3
            },
            {
              "text": "Fees never affect behavior in any setting.",
              "why": "The cited study itself reports a change.",
              "trap": 7
            },
            {
              "text": "A possible unintended response deserves investigation.",
              "why": "The earlier finding motivates a question; it does not establish the new setting’s effect."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "different users and rules"
          ],
          "findAsk": "Which detail limits direct transfer of the study’s result to the tool library?"
        },
        {
          "id": "u03-l3-trap",
          "kind": "trap",
          "say": "Bound the finding and leave the mechanism testable.",
          "status": "fictional",
          "sourceIds": [
            "F5",
            "E5"
          ],
          "src": "Uri Gneezy and Aldo Rustichini, Journal of Legal Studies; author copy at UC San Diego: A Fine Is a Price; Journal of Economic Perspectives 25(4), 2011 — Gneezy, Meier and Rey-Biel; Columbia-hosted paper: When and Why Incentives (Don't) Work to Modify Behavior",
          "hook": "Bound the finding and leave the mechanism testable.",
          "stem": "A workshop adds a late-cleanup fee. Someone cites one day-care study where a particular fine increased late pickups.",
          "wrong": "The fee must make cleanup later in every workshop.",
          "right": "The study shows an unintended response is possible; this workshop’s effect still needs evidence.",
          "why": "A result from a particular intervention does not determine every setting or fee size.",
          "fixDistractors": [
            "The fee must eliminate lateness because penalties always deter.",
            "The study proves every participant consciously purchased permission to be late."
          ],
          "cat": 7
        },
        {
          "id": "u03-l3-h2",
          "kind": "hypo",
          "say": "A policy label can hide more than one intervention.",
          "status": "fictional",
          "sourceIds": [
            "F5",
            "E5"
          ],
          "src": "Uri Gneezy and Aldo Rustichini, Journal of Legal Studies; author copy at UC San Diego: A Fine Is a Price; Journal of Economic Perspectives 25(4), 2011 — Gneezy, Meier and Rey-Biel; Columbia-hosted paper: When and Why Incentives (Don't) Work to Modify Behavior",
          "hook": "A policy label can hide more than one intervention.",
          "stem": "A club announces that a small late fee buys an optional extra hour. Previously, staying late required explicit permission. The payment and the stated access rule change together.",
          "call": "Which interpretation fits the change?",
          "issue": "bundled change in rules",
          "rule": "u03-l3-rule",
          "options": [
            {
              "text": "This changes both the price and the permission structure.",
              "why": "The new extra-hour entitlement is not merely a higher cost for the old action."
            },
            {
              "text": "Only the monetary cost has changed.",
              "why": "The stated permission rule also changes.",
              "trap": 9
            },
            {
              "text": "Any later stay proves members became less considerate.",
              "why": "The club now explicitly allows a different activity.",
              "trap": 3
            },
            {
              "text": "The fee’s effect can be attributed to price alone.",
              "why": "Two relevant features change together.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "buys an optional extra hour",
            "Previously, staying late required explicit permission"
          ],
          "findAsk": "Which details show that the rule for permission changed?"
        },
        {
          "id": "u03-l3-sort",
          "kind": "sort",
          "say": "Observed, hypothesized and universal are different levels of claim.",
          "status": "fictional",
          "sourceIds": [
            "F5",
            "E5"
          ],
          "src": "Uri Gneezy and Aldo Rustichini, Journal of Legal Studies; author copy at UC San Diego: A Fine Is a Price; Journal of Economic Perspectives 25(4), 2011 — Gneezy, Meier and Rey-Biel; Columbia-hosted paper: When and Why Incentives (Don't) Work to Modify Behavior",
          "hook": "Observed, hypothesized and universal are different levels of claim.",
          "q": "Classify the statement. Do not infer that a hypothesis has been proved.",
          "buckets": [
            "Observed or described fact",
            "Possible mechanism",
            "Unsupported generalization"
          ],
          "items": [
            {
              "text": "In the described trial, recorded late pickups increased after the fine began.",
              "bucket": "Observed or described fact",
              "why": "This reports the stated observation."
            },
            {
              "text": "Some parents may have understood the fee as permission.",
              "bucket": "Possible mechanism",
              "why": "This proposes an interpretation, not a directly established motive."
            },
            {
              "text": "Every fine increases the behavior it targets.",
              "bucket": "Unsupported generalization",
              "why": "The universal claim exceeds a bounded study."
            },
            {
              "text": "This particular fee might weaken a pre-existing norm.",
              "bucket": "Possible mechanism",
              "why": "That is a mechanism to investigate."
            },
            {
              "text": "The new service has not yet collected outcome data.",
              "bucket": "Observed or described fact",
              "why": "It reports the evidence currently available."
            },
            {
              "text": "No organization can ever use a penalty effectively.",
              "bucket": "Unsupported generalization",
              "why": "The limited finding does not establish this claim."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u03-l3-transfer",
          "kind": "argue",
          "say": "Separate changed rules before assigning a single cause.",
          "status": "fictional",
          "sourceIds": [
            "F5",
            "E5"
          ],
          "src": "Uri Gneezy and Aldo Rustichini, Journal of Legal Studies; author copy at UC San Diego: A Fine Is a Price; Journal of Economic Perspectives 25(4), 2011 — Gneezy, Meier and Rey-Biel; Columbia-hosted paper: When and Why Incentives (Don't) Work to Modify Behavior",
          "hook": "Separate changed rules before assigning a single cause.",
          "stem": "A coworking space introduces a charge and tells members that late checkout is now an allowed paid option. Late checkout increases. No comparison condition separates the permission message from the charge.",
          "call": "What can the increase alone establish?",
          "issue": "price and meaning change together",
          "rule": "u03-l3-rule",
          "options": [
            {
              "text": "The charge alone caused the entire increase.",
              "why": "The message is another changed feature.",
              "trap": 9
            },
            {
              "text": "It does not isolate the charge from the permission message.",
              "why": "Both changed together, so their separate effects are not identified here."
            },
            {
              "text": "The message alone caused the entire increase.",
              "why": "The charge changed as well.",
              "trap": 9
            },
            {
              "text": "Members’ ethical character has been measured.",
              "why": "The outcome does not measure moral worth.",
              "trap": 4
            }
          ],
          "answer": 1,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "No comparison condition separates the permission message from the charge"
          ],
          "findAsk": "Which detail prevents isolating the charge from the permission message?"
        }
      ]
    },
    {
      "id": "u03l4",
      "title": "Test the system before scaling",
      "objective": "Distinguish a mechanism hypothesis from evidence and preserve measurement limits in a pilot.",
      "takeaway": "A credible pilot measures the goal and tests an explanation rather than celebrating a count.",
      "fieldwork": "Before changing a reward, name the outcome, comparison, omitted work and condition that would make you revise it.",
      "items": [
        {
          "id": "u03-l4-rule",
          "kind": "rule",
          "say": "Treat an incentive design as a hypothesis to examine, not an outcome already guaranteed.",
          "status": "practice",
          "sourceIds": [
            "F4",
            "F3",
            "E8",
            "E9"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Economic models: How to see more by looking at less; Duflo, Glennerster and Kremer — December 2006 methods chapter draft, J-PAL: Using Randomization in Development Economics Research: A Toolkit; Deaton and Cartwright — October 2017 author version, published Social Science & Medicine 210 (2018): Understanding and Misunderstanding Randomized Controlled Trials",
          "hook": "Write what would change your mind before reading the dashboard.",
          "title": "A trial needs a question, a comparison and a complete enough measure",
          "elements": [
            "State the intended outcome and possible mechanism",
            "Choose a defensible comparison",
            "Measure important effects beyond the rewarded count",
            "State the setting and unresolved limits"
          ],
          "ordered": false,
          "distractorElements": [
            "Credit every before-after change to the reward",
            "Scale a metric increase without checking the stated goal"
          ],
          "ex": [
            {
              "facts": "A new bonus begins during a seasonal rush and closures rise. No comparison is available.",
              "result": "The increase alone does not isolate the bonus’s causal effect."
            },
            {
              "facts": "A pilot tracks closures, durable resolution and staff burden under a planned comparison.",
              "result": "It can address more of the intended question; its results still need interpretation and scope limits."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An unresolved causal effect is the same as an effect of zero.",
              "a": false,
              "why": "Not identified and zero are different claims."
            },
            {
              "t": "mcq",
              "q": "A pilot improves its target count but leaves its quality goal unmeasured. What follows?",
              "options": [
                "Quality necessarily declined",
                "The full goal is already established",
                "The quality claim remains unresolved"
              ],
              "a": "The quality claim remains unresolved",
              "why": "The count alone does not measure the omitted outcome."
            }
          ]
        },
        {
          "id": "u03-l4-term",
          "kind": "term",
          "say": "A testable explanation of how a change might produce an outcome.",
          "status": "model",
          "sourceIds": [
            "F4",
            "F3",
            "E8",
            "E9"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Economic models: How to see more by looking at less; Duflo, Glennerster and Kremer — December 2006 methods chapter draft, J-PAL: Using Randomization in Development Economics Research: A Toolkit; Deaton and Cartwright — October 2017 author version, published Social Science & Medicine 210 (2018): Understanding and Misunderstanding Randomized Controlled Trials",
          "hook": "A proposed chain is not yet an observed effect.",
          "term": "Mechanism hypothesis",
          "meaning": "A testable explanation of how a change might produce an outcome.",
          "use": "Specify the steps connecting a reward to behavior, then ask what evidence could distinguish them.",
          "lang": "english"
        },
        {
          "id": "u03-l4-h1",
          "kind": "hypo",
          "say": "Uncertain causation is not a finding of no effect.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F3",
            "E8",
            "E9"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Economic models: How to see more by looking at less; Duflo, Glennerster and Kremer — December 2006 methods chapter draft, J-PAL: Using Randomization in Development Economics Research: A Toolkit; Deaton and Cartwright — October 2017 author version, published Social Science & Medicine 210 (2018): Understanding and Misunderstanding Randomized Controlled Trials",
          "hook": "Uncertain causation is not a finding of no effect.",
          "stem": "A support bonus starts in December. Closures rise, but demand also rises seasonally. There is no comparison group or further evidence separating those changes.",
          "call": "Which conclusion is warranted?",
          "issue": "before-after limitation",
          "rule": "u03-l4-rule",
          "options": [
            {
              "text": "The increase alone does not isolate the bonus’s effect.",
              "why": "Seasonal demand remains an alternative explanation."
            },
            {
              "text": "The entire increase was caused by the bonus.",
              "why": "The comparison does not separate demand from the bonus.",
              "trap": 3
            },
            {
              "text": "The bonus had exactly zero effect.",
              "why": "A zero effect has not been established either.",
              "trap": 3
            },
            {
              "text": "Seasonality proves incentives never matter.",
              "why": "One unresolved comparison cannot support that universal statement.",
              "trap": 7
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "demand also rises seasonally",
            "no comparison group"
          ],
          "boundary": true,
          "findAsk": "Which details identify a competing explanation and the missing comparison?"
        },
        {
          "id": "u03-l4-steps",
          "kind": "steps",
          "say": "A trial needs its question and measurement plan before its success story.",
          "status": "practice",
          "sourceIds": [
            "F4",
            "F3",
            "E8",
            "E9"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Economic models: How to see more by looking at less; Duflo, Glennerster and Kremer — December 2006 methods chapter draft, J-PAL: Using Randomization in Development Economics Research: A Toolkit; Deaton and Cartwright — October 2017 author version, published Social Science & Medicine 210 (2018): Understanding and Misunderstanding Randomized Controlled Trials",
          "hook": "A trial needs its question and measurement plan before its success story.",
          "title": "Frame a focused incentive trial",
          "steps": [
            "State the outcome and response hypothesis",
            "Plan the comparison and measurements before rollout",
            "Collect the planned outcomes and record deviations",
            "Interpret the result and its limits before scaling"
          ],
          "distractors": [
            "Declare success from the target count alone",
            "Invent a causal explanation after seeing any increase"
          ],
          "applyTo": {
            "facts": "The team has agreed its outcome and response hypothesis. It has not decided how to compare outcomes or measure quality.",
            "stop": "Plan the comparison and measurements before rollout",
            "why": "The next step is to plan the comparison and measures before changing the rule."
          }
        },
        {
          "id": "u03-l4-h2",
          "kind": "hypo",
          "say": "Keep useful evidence and name the missing dimensions.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F3",
            "E8",
            "E9"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Economic models: How to see more by looking at less; Duflo, Glennerster and Kremer — December 2006 methods chapter draft, J-PAL: Using Randomization in Development Economics Research: A Toolkit; Deaton and Cartwright — October 2017 author version, published Social Science & Medicine 210 (2018): Understanding and Misunderstanding Randomized Controlled Trials",
          "hook": "Keep useful evidence and name the missing dimensions.",
          "stem": "A pilot’s stated goal includes speed, durable resolution and manageable staff burden. The report measures only speed and says the whole goal has been achieved. No information about the other two dimensions is available.",
          "call": "Which response identifies the evidence gap?",
          "issue": "incomplete success measure",
          "rule": "u03-l4-rule",
          "options": [
            {
              "text": "Speed improvement proves durable resolution improved.",
              "why": "No such relationship is supplied.",
              "trap": 3
            },
            {
              "text": "The report has not measured two parts of its stated goal.",
              "why": "Faster service alone does not establish resolution or burden."
            },
            {
              "text": "The pilot must have harmed staff.",
              "why": "Unmeasured burden does not establish harm.",
              "trap": 3
            },
            {
              "text": "The speed data must be discarded as worthless.",
              "why": "It can inform one part of the goal while remaining incomplete.",
              "trap": 7
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "measures only speed",
            "No information about the other two dimensions is available"
          ],
          "boundary": true,
          "findAsk": "Which details show that the report lacks evidence on the rest of its stated goal?"
        },
        {
          "id": "u03-l4-trap",
          "kind": "trap",
          "say": "A bounded result can be useful without becoming universal.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F3",
            "E8",
            "E9"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Economic models: How to see more by looking at less; Duflo, Glennerster and Kremer — December 2006 methods chapter draft, J-PAL: Using Randomization in Development Economics Research: A Toolkit; Deaton and Cartwright — October 2017 author version, published Social Science & Medicine 210 (2018): Understanding and Misunderstanding Randomized Controlled Trials",
          "hook": "A bounded result can be useful without becoming universal.",
          "stem": "A reward trial shows higher measured output at one site. It did not measure safety and did not test other sites.",
          "wrong": "We have proved the reward improves every workplace outcome everywhere.",
          "right": "The measured result is limited to its site and outcome; safety and transfer remain open.",
          "why": "The observation does not establish unmeasured outcomes or identical effects elsewhere.",
          "fixDistractors": [
            "The trial proves safety was unaffected because it was omitted.",
            "The trial proves rewards never work outside this site."
          ],
          "cat": 7,
          "boundary": true
        },
        {
          "id": "u03-l4-transfer",
          "kind": "hypo",
          "say": "Finding a missing effect is a chance to improve the test.",
          "status": "fictional",
          "sourceIds": [
            "F4",
            "F3",
            "E8",
            "E9"
          ],
          "src": "Bengt Holmström, Nobel lecture hosted by MIT Economics: Pay for Performance and Beyond; CORE Econ: Economic models: How to see more by looking at less; Duflo, Glennerster and Kremer — December 2006 methods chapter draft, J-PAL: Using Randomization in Development Economics Research: A Toolkit; Deaton and Cartwright — October 2017 author version, published Social Science & Medicine 210 (2018): Understanding and Misunderstanding Randomized Controlled Trials",
          "hook": "Finding a missing effect is a chance to improve the test.",
          "stem": "A warehouse plans a reversible bonus pilot. Workers identify an important maintenance task omitted from the output measure. Management agrees that maintenance is part of the trial’s stated objective and has not begun the pilot.",
          "call": "Which action best addresses the stated gap?",
          "issue": "revise the measurement plan",
          "rule": "u03-l4-rule",
          "options": [
            {
              "text": "Keep the omission so the pilot is easier to declare successful.",
              "why": "That would knowingly leave the stated goal untested.",
              "trap": 9
            },
            {
              "text": "Assume maintenance improves whenever output rises.",
              "why": "No such connection is given.",
              "trap": 3
            },
            {
              "text": "Include maintenance in the plan before drawing success claims.",
              "why": "The acknowledged objective needs measurement or an explicit limitation."
            },
            {
              "text": "Declare the pilot impossible because one omission was found.",
              "why": "The plan is still open to a relevant correction.",
              "trap": 7
            }
          ],
          "answer": 2,
          "transfer": true,
          "callType": "accurate",
          "facts": [
            "maintenance is part of the trial’s stated objective",
            "has not begun the pilot"
          ],
          "boundary": true,
          "findAsk": "Which details establish that maintenance belongs in the objective and that the pilot can still be revised before launch?"
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
