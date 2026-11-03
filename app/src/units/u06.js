// Original Oikos content. Scenarios and numerical inputs are fictional unless identified otherwise.
(function () {
  const unit = {
  "id": "u06",
  "title": "Who else feels the effects?",
  "blurb": "Trace effects beyond the buyer and seller, compare explicit models, and keep affected people in the decision.",
  "subject": "spillovers",
  "assume": "All numeric harm values are fictional model inputs. A money-based comparison does not grant permission, settle rights or establish that every harm is measurable.",
  "lessons": [
    {
      "id": "u06l1",
      "title": "Look beyond the transaction",
      "objective": "Identify a third-party effect and distinguish it from a direct cost or benefit of the transaction.",
      "takeaway": "An externality reaches someone outside the decision and is not fully reflected in the decision-maker’s incentives.",
      "fieldwork": "Map one ordinary activity: who chooses, who pays, and who else experiences a benefit or harm?",
      "items": [
        {
          "id": "u06-l1-rule",
          "kind": "rule",
          "say": "Some benefits and costs fall outside the buyer–seller transaction.",
          "status": "model",
          "sourceIds": [
            "F13",
            "F17"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution",
          "hook": "Start with people and effects, then draw the transaction boundary.",
          "title": "Map the affected people",
          "elements": [
            "Identify the decision-maker and trading parties",
            "Look for effects on other people",
            "Ask whether those effects enter the decision-maker’s incentives"
          ],
          "ordered": false,
          "distractorElements": [
            "Count only people who receive an invoice",
            "Assume every effect on someone else is harmful"
          ],
          "ex": [
            {
              "facts": "A workshop pays for fuel but emits smoke that harms neighboring residents without compensating them or facing a charge for that harm.",
              "result": "Fuel is a private input cost. The residents’ unpriced harm is a negative externality."
            },
            {
              "facts": "A garden owner plants flowers that also support a neighboring orchard’s pollination without charging the orchard.",
              "result": "The unpriced benefit to the orchard is a positive externality; spillovers can be beneficial as well as harmful."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Every externality is a harm.",
              "a": false,
              "why": "An externality can also be a benefit not fully reflected in the decision-maker’s incentives."
            },
            {
              "t": "mcq",
              "q": "Which effect is the third-party spillover in the workshop example?",
              "options": [
                "The workshop’s fuel bill",
                "The neighbor’s unpriced smoke harm",
                "The customer’s payment for the repair"
              ],
              "a": "The neighbor’s unpriced smoke harm",
              "why": "The neighbor experiences an effect outside the priced repair transaction."
            }
          ]
        },
        {
          "id": "u06-l1-term",
          "kind": "term",
          "say": "A cost or benefit to others that is not fully reflected in the incentives of the person making the decision.",
          "status": "model",
          "sourceIds": [
            "F13",
            "F17"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution",
          "hook": "Ask who experiences an effect without that effect entering the decision.",
          "term": "Externality",
          "meaning": "A cost or benefit to others that is not fully reflected in the incentives of the person making the decision.",
          "use": "Unpriced smoke harm to neighboring residents is a negative externality.",
          "lang": "english",
          "alt": [
            "spillover"
          ]
        },
        {
          "id": "u06-l1-h1",
          "kind": "hypo",
          "say": "A private expense and an external harm enter different parts of the analysis.",
          "status": "fictional",
          "sourceIds": [
            "F13",
            "F17"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution",
          "hook": "A private expense and an external harm enter different parts of the analysis.",
          "stem": "A maker sells a table to a customer and pays for wood and electricity. Sanding dust harms a neighbor who is not part of the sale. The maker faces no charge or agreement concerning that harm.",
          "call": "Which stated effect is the negative externality?",
          "issue": "Third-party harm",
          "rule": "u06-l1-rule",
          "options": [
            {
              "text": "The neighbor’s unpriced dust harm.",
              "why": "It falls outside the sale and is not included in the maker’s stated incentives."
            },
            {
              "text": "The maker’s wood expense.",
              "why": "That is already a private input cost of producing the table.",
              "trap": 10
            },
            {
              "text": "The price the customer pays for the table.",
              "why": "That is part of the transaction between the buyer and maker.",
              "trap": 10
            },
            {
              "text": "Every dollar exchanged during the sale.",
              "why": "A payment alone is not an additional third-party harm.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "not part of the sale",
            "no charge or agreement concerning that harm"
          ],
          "findAsk": "Which details put the neighbor’s harm outside the priced transaction?"
        },
        {
          "id": "u06-l1-sort",
          "kind": "sort",
          "say": "Identify the boundary before labeling the effect.",
          "status": "fictional",
          "sourceIds": [
            "F13",
            "F17"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution",
          "hook": "Identify the boundary before labeling the effect.",
          "q": "Classify each stated effect.",
          "buckets": [
            "Direct transaction effect",
            "Unpriced third-party spillover"
          ],
          "items": [
            {
              "text": "A bakery pays for its flour.",
              "bucket": "Direct transaction effect",
              "why": "The flour expense is a private input cost."
            },
            {
              "text": "Unpriced bakery noise disrupts a neighboring household’s sleep.",
              "bucket": "Unpriced third-party spillover",
              "why": "The household bears an effect outside the bakery’s transactions."
            },
            {
              "text": "A customer enjoys the bread they purchased.",
              "bucket": "Direct transaction effect",
              "why": "The enjoyment is a direct benefit to the purchaser."
            },
            {
              "text": "A gardener’s flowers improve a neighboring orchard’s pollination without payment.",
              "bucket": "Unpriced third-party spillover",
              "why": "The orchard receives an unpriced benefit."
            },
            {
              "text": "A buyer pays the agreed price for a repair.",
              "bucket": "Direct transaction effect",
              "why": "This payment belongs to the repair transaction."
            },
            {
              "text": "A drainage project reduces flooding on a neighboring property whose owner did not contribute.",
              "bucket": "Unpriced third-party spillover",
              "why": "The neighboring owner receives a benefit outside the funding transaction."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u06-l1-h2",
          "kind": "hypo",
          "say": "Not every benefit or cost is an externality.",
          "status": "fictional",
          "sourceIds": [
            "F13",
            "F17"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution",
          "hook": "Not every benefit or cost is an externality.",
          "stem": "In a different case, a building hires and pays a cleaner to clean its own lobby. The stated benefit is a clean lobby for the building that purchased the service. No effect on anyone outside this transaction is described.",
          "call": "Which classification fits the stated benefit?",
          "issue": "Direct benefit boundary",
          "rule": "u06-l1-rule",
          "options": [
            {
              "text": "A positive externality merely because someone benefits.",
              "why": "A direct purchaser’s benefit is not automatically an externality.",
              "trap": 5
            },
            {
              "text": "A direct benefit of the purchased service.",
              "why": "The building receives the service it bought; no separate third-party effect is supplied."
            },
            {
              "text": "A negative externality because a payment was required.",
              "why": "Paying the agreed price does not by itself establish third-party harm.",
              "trap": 5
            },
            {
              "text": "Proof that cleaning can never create any spillovers.",
              "why": "This case supplies no spillover; that is not a universal claim about cleaning.",
              "trap": 7
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u06-l1-pairs",
          "kind": "pairs",
          "say": "A stakeholder map separates roles that may otherwise be collapsed.",
          "status": "practice",
          "sourceIds": [
            "F13",
            "F17"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution",
          "hook": "A stakeholder map separates roles that may otherwise be collapsed.",
          "set": "Map the effect",
          "pairs": [
            {
              "l": "Decision-maker",
              "r": "The actor choosing the activity"
            },
            {
              "l": "Direct buyer",
              "r": "The actor purchasing the stated good or service"
            },
            {
              "l": "Private input cost",
              "r": "An expense borne in carrying out the activity"
            },
            {
              "l": "Negative externality",
              "r": "A harmful effect outside the decision-maker’s accounted incentives"
            },
            {
              "l": "Positive externality",
              "r": "A beneficial effect outside the decision-maker’s accounted incentives"
            }
          ],
          "spare": [
            "Any payment treated as a new resource loss for society"
          ],
          "mode": "concept"
        },
        {
          "id": "u06-l1-transfer",
          "kind": "hypo",
          "say": "Positive spillovers matter without guaranteeing a project’s overall value.",
          "status": "fictional",
          "sourceIds": [
            "F13",
            "F17"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution",
          "hook": "Positive spillovers matter without guaranteeing a project’s overall value.",
          "stem": "A college funds an evening skills class for its enrolled students. Some local employers also benefit when staff share useful techniques with coworkers who did not attend. The example stipulates this extra benefit is real and employers do not pay for it.",
          "call": "Which effect is the positive externality described?",
          "issue": "Benefit beyond participants",
          "rule": "u06-l1-rule",
          "options": [
            {
              "text": "The college’s stated expenditure on teaching staff.",
              "why": "That is a direct expense, not the extra benefit to others.",
              "trap": 10
            },
            {
              "text": "Every benefit received by enrolled students who attend.",
              "why": "Those are direct benefits of the funded instruction.",
              "trap": 10
            },
            {
              "text": "The extra benefit from techniques reaching nonparticipants.",
              "why": "That stipulated benefit reaches others beyond the funded student instruction without payment."
            },
            {
              "text": "A guarantee that all similar classes pay for themselves.",
              "why": "No monetary valuation or universal outcome is supplied.",
              "trap": 7
            }
          ],
          "answer": 2,
          "transfer": true,
          "callType": "accurate"
        }
      ]
    },
    {
      "id": "u06l2",
      "title": "Expand the margin carefully",
      "objective": "Include specified external costs in a marginal comparison without treating the chosen valuation as universal.",
      "takeaway": "Private and inclusive margins can differ; the conclusion belongs to the stated effects and criterion.",
      "fieldwork": "For an activity you know, list one cost that the decision-maker pays and one possible effect borne by someone else.",
      "items": [
        {
          "id": "u06-l2-rule",
          "kind": "rule",
          "say": "A specified social-cost calculation adds the relevant external cost to the private resource cost.",
          "status": "model",
          "sourceIds": [
            "F13",
            "F17",
            "F15"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Ask which effects and whose valuations the arithmetic includes.",
          "title": "State whose costs count",
          "elements": [
            "List the included benefits and costs without double counting",
            "Add external cost to private cost for the stated model",
            "State the criterion and acknowledge omitted effects"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume unmeasured harm equals zero",
            "Treat a monetary maximum as automatic permission"
          ],
          "ex": [
            {
              "facts": "Three units provide marginal benefits of 70, 50 and 30 credits. Each has 20 credits of private cost and 20 of external harm. All modeled effects are included; the criterion is unweighted total benefit minus cost.",
              "result": "Private marginal gains are 50, 30 and 10, favoring three units. Inclusive marginal gains are 30, 10 and −10, favoring two. This is a result under the supplied valuations, not a moral ranking of people."
            },
            {
              "facts": "The external harm has not been measured and may be important.",
              "result": "Its omission is uncertainty, not evidence that it is zero. A complete numerical optimum is not established."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An unmeasured external harm can automatically be entered as zero.",
              "a": false,
              "why": "Missing information does not establish an absence of harm."
            },
            {
              "t": "mcq",
              "q": "Private marginal cost is 12 credits and external marginal cost is 8. What is the stated marginal social cost?",
              "options": [
                "4 credits",
                "20 credits",
                "12 credits"
              ],
              "a": "20 credits",
              "why": "Add the two included costs: 12 + 8 = 20 credits."
            }
          ]
        },
        {
          "id": "u06-l2-term",
          "kind": "term",
          "say": "The additional private resource cost plus additional external cost included in the stated model.",
          "status": "model",
          "sourceIds": [
            "F13",
            "F17",
            "F15"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "The calculation needs a defined boundary and a transparent valuation.",
          "term": "Marginal social cost",
          "meaning": "The additional private resource cost plus additional external cost included in the stated model.",
          "use": "A unit with 20 credits of private cost and 20 of external harm has a modeled marginal social cost of 40.",
          "lang": "english"
        },
        {
          "id": "u06-l2-h1",
          "kind": "hypo",
          "say": "The relevant margin changes when an external cost is included.",
          "status": "fictional",
          "sourceIds": [
            "F13",
            "F17",
            "F15"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "The relevant margin changes when an external cost is included.",
          "stem": "A model permits zero to four units. Marginal benefits are 90, 70, 50 and 30 credits. Each unit costs the producer 20 and causes 20 of external harm. All effects are included at these stipulated values, with no other constraints. The criterion is maximum unweighted total benefit minus cost.",
          "call": "Which quantity maximizes that stated inclusive total?",
          "issue": "Inclusive marginal comparison",
          "rule": "u06-l2-rule",
          "options": [
            {
              "text": "Four units, because each benefits the producer.",
              "why": "Private gains omit the external harm; the fourth unit lowers the stated inclusive total.",
              "trap": 9
            },
            {
              "text": "Three units, because a fourth lowers the inclusive total.",
              "why": "Inclusive marginal gains are 50, 30, 10 and −10. Totals are 0, 50, 80, 90 and 80."
            },
            {
              "text": "Zero units, because any external harm rules out activity.",
              "why": "That is not the stipulated criterion, which compares all included benefits and costs.",
              "trap": 4
            },
            {
              "text": "Two units, because private and external costs are equal.",
              "why": "Equal cost components do not identify the maximizing quantity.",
              "trap": 6
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u06-l2-num",
          "kind": "num",
          "say": "Total benefit 210 minus private cost 60 minus external harm 60 equals 90.",
          "status": "fictional",
          "sourceIds": [
            "F13",
            "F17",
            "F15"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Total benefit 210 minus private cost 60 minus external harm 60 equals 90.",
          "ask": "Marginal benefits for three units are 90, 70 and 50 credits. Each unit uses 20 credits of private resources and causes 20 credits of external harm. Under the stated unweighted benefit-minus-cost criterion, what is the total net benefit of producing all three? Enter exact credits.",
          "answer": "90 credits",
          "distractors": [
            "150 credits",
            "210 credits",
            "30 credits"
          ],
          "speed": false,
          "alt": [
            "90"
          ]
        },
        {
          "id": "u06-l2-h2",
          "kind": "hypo",
          "say": "Changing one decisive fact can change the conditional answer.",
          "status": "fictional",
          "sourceIds": [
            "F13",
            "F17",
            "F15"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Changing one decisive fact can change the conditional answer.",
          "stem": "Keep the same four marginal benefits of 90, 70, 50 and 30 credits and private cost of 20 per unit. A verified change eliminates the external harm without any new cost or other effect. No constraints change; the criterion remains maximum total benefit minus cost.",
          "call": "Which quantity now maximizes the model?",
          "issue": "Changed external cost",
          "rule": "u06-l2-rule",
          "options": [
            {
              "text": "Three units, retaining the earlier answer.",
              "why": "The relevant cost changed, so the comparison must be recalculated.",
              "trap": 11
            },
            {
              "text": "Zero units, because the activity once had a harmful effect.",
              "why": "The current stipulated effects and criterion determine this comparison.",
              "trap": 4
            },
            {
              "text": "Four units, since each now adds positive net benefit.",
              "why": "With external harm zero, every unit adds a positive gain: 70, 50, 30 and 10."
            },
            {
              "text": "Two units, because eliminating harm halves the desired quantity.",
              "why": "No such proportional relationship follows from the marginal values.",
              "trap": 5
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "eliminates the external harm without any new cost or other effect"
          ],
          "findAsk": "Which detail changes the inclusive margin while excluding an offsetting new effect?"
        },
        {
          "id": "u06-l2-trap",
          "kind": "trap",
          "say": "Missing values create limits, not automatic zeros.",
          "status": "fictional",
          "sourceIds": [
            "F13",
            "F17",
            "F15"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Missing values create limits, not automatic zeros.",
          "stem": "An appraisal reports a positive cash return but says noise-related sleep disruption was not measured.",
          "wrong": "Because the unmeasured harm is absent from the spreadsheet, its value is zero.",
          "right": "The harm remains an unmeasured effect; the cash result does not settle the inclusive comparison.",
          "why": "Omission from a calculation is not evidence of no effect. The appraisal should disclose the gap rather than silently assign zero.",
          "fixDistractors": [
            "Any unmeasured harm proves the project’s net effect is negative.",
            "The cash return can be called complete as long as the spreadsheet adds correctly."
          ],
          "cat": 3
        },
        {
          "id": "u06-l2-transfer",
          "kind": "hypo",
          "say": "Use a model’s result at its proper scope.",
          "status": "fictional",
          "sourceIds": [
            "F13",
            "F17",
            "F15"
          ],
          "src": "CORE Econ: The external effects of pollution: Private and social costs and benefits; OpenStax / Rice University: The Economics of Pollution; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Use a model’s result at its proper scope.",
          "stem": "A campus model compares zero, one, two or three night deliveries. Its complete inclusive net benefits are respectively 0, 18, 25 and 21 credits after valuing all modeled effects. The exercise asks only for the largest unweighted total, and supplies no legal or ethical permission to deliver.",
          "call": "Which conclusion matches its scope?",
          "issue": "Arithmetic and permission",
          "rule": "u06-l2-rule",
          "options": [
            {
              "text": "Three deliveries maximize the total because 21 is positive.",
              "why": "A positive total can still be below another feasible total, here 25.",
              "trap": 4
            },
            {
              "text": "Two deliveries are therefore permitted under every relevant rule.",
              "why": "The stem explicitly supplies no such permission.",
              "trap": 3
            },
            {
              "text": "No quantity can be compared because money-based models are always meaningless.",
              "why": "This stated numerical criterion allows a bounded comparison even though it does not settle permission.",
              "trap": 7
            },
            {
              "text": "Two deliveries maximize the stated total; permission is a separate question.",
              "why": "25 is the largest modeled total. That numerical ranking does not create permissions or settle every ethical question."
            }
          ],
          "answer": 3,
          "transfer": true,
          "callType": "accurate"
        }
      ]
    },
    {
      "id": "u06l3",
      "title": "Compare ways to respond",
      "objective": "Compare correction, prevention and compensation without treating any instrument as automatically sufficient.",
      "takeaway": "A response must connect the relevant behavior to the relevant harm under workable monitoring and enforcement.",
      "fieldwork": "For a local spillover, list two possible responses and one fact needed to compare them.",
      "items": [
        {
          "id": "u06-l3-rule",
          "kind": "rule",
          "say": "Taxes, limits, cooperation and compensation work through different mechanisms and conditions.",
          "status": "model",
          "sourceIds": [
            "F14",
            "F16",
            "F17"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; OpenStax / Rice University: The Economics of Pollution",
          "hook": "Name what the instrument changes, what remains, and what must be monitored.",
          "title": "Match the response to the problem",
          "elements": [
            "Identify the harmful activity and feasible alternatives",
            "Check information, monitoring and enforcement",
            "Distinguish preventing harm from transferring money"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume any tax removes all harm",
            "Treat compensation as proof that physical harm disappeared"
          ],
          "ex": [
            {
              "facts": "In an idealized model, a unit creates 10 credits of marginal external harm at the target quantity. A correctly implemented 10-credit per-unit charge makes the chooser face that additional modeled cost.",
              "result": "This illustrates a corrective tax, not a universal tax prescription. It needs reliable harm estimates and the other conditions of the model."
            },
            {
              "facts": "A workshop can reduce noise by changing hours, use a limit, negotiate a monitored agreement or pay a charge.",
              "result": "The comparison needs feasibility, effects, administrative costs and affected parties’ situation. A payment may compensate or alter incentives without undoing physical harm."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Collecting a pollution charge proves that the pollution harm has disappeared.",
              "a": false,
              "why": "A charge is a payment and incentive; remaining physical harm depends on the activity and its effects."
            },
            {
              "t": "mcq",
              "q": "What distinguishes prevention from compensation?",
              "options": [
                "Prevention reduces the harmful effect; compensation provides redress after or alongside it",
                "Compensation guarantees that no harmful effect occurs",
                "Prevention is defined only by a transfer of money"
              ],
              "a": "Prevention reduces the harmful effect; compensation provides redress after or alongside it",
              "why": "Reducing the physical effect and transferring resources to affected people are different mechanisms."
            }
          ]
        },
        {
          "id": "u06-l3-term",
          "kind": "term",
          "say": "A charge designed to make a decision-maker face an external cost that would otherwise be left out.",
          "status": "model",
          "sourceIds": [
            "F14",
            "F16",
            "F17"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; OpenStax / Rice University: The Economics of Pollution",
          "hook": "The appropriate charge depends on the harm and model conditions.",
          "term": "Corrective tax",
          "meaning": "A charge designed to make a decision-maker face an external cost that would otherwise be left out.",
          "use": "In a specified model, a charge can align a private margin with an included external-cost margin.",
          "lang": "english",
          "alt": [
            "Pigouvian tax",
            "Pigovian tax"
          ]
        },
        {
          "id": "u06-l3-h1",
          "kind": "hypo",
          "say": "Match the unit of the charge to the unit of the external cost.",
          "status": "fictional",
          "sourceIds": [
            "F14",
            "F16",
            "F17"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; OpenStax / Rice University: The Economics of Pollution",
          "hook": "Match the unit of the charge to the unit of the external cost.",
          "stem": "A model says each additional delivery causes a known 8-credit external harm over the relevant range. Deliverers currently face none of it. Assume a fully implemented per-delivery charge enters their private cost and all other corrective-model conditions hold.",
          "call": "Which charge adds the stated omitted marginal cost?",
          "issue": "Corrective charge",
          "rule": "u06-l3-rule",
          "options": [
            {
              "text": "Zero credits because the harm falls on someone else.",
              "why": "That is precisely why the omitted external cost matters here.",
              "trap": 5
            },
            {
              "text": "16 credits because both the deliverer and recipient are involved.",
              "why": "The stated external harm is 8; counting parties does not double it.",
              "trap": 5
            },
            {
              "text": "8 credits per delivery.",
              "why": "Under the stated conditions, an 8-credit charge adds the 8-credit external cost to the chooser’s margin."
            },
            {
              "text": "8 credits once for unlimited future deliveries.",
              "why": "A one-time payment would not add 8 credits to each further delivery’s margin.",
              "trap": 10
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u06-l3-steps",
          "kind": "steps",
          "say": "A practical comparison starts with the harm and the people, then the available mechanisms.",
          "status": "practice",
          "sourceIds": [
            "F14",
            "F16",
            "F17"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; OpenStax / Rice University: The Economics of Pollution",
          "hook": "A practical comparison starts with the harm and the people, then the available mechanisms.",
          "title": "Compare a spillover response",
          "steps": [
            "Describe the activity, affected people and effects",
            "Identify feasible responses and their mechanisms",
            "Estimate effects, costs and monitoring needs",
            "Compare under an explicit criterion and disclose gaps"
          ],
          "distractors": [
            "Assume collecting money proves all harm is removed",
            "Exclude people who do not send or receive an invoice"
          ],
          "applyTo": {
            "facts": "A group has mapped the noisy activity and affected residents. It has not yet listed any feasible changes, charges, agreements or limits.",
            "stop": "Identify feasible responses and their mechanisms",
            "why": "After mapping the problem, identify feasible response mechanisms before estimating and comparing them."
          }
        },
        {
          "id": "u06-l3-h2",
          "kind": "hypo",
          "say": "A payment, a behavior change and compensation are separate facts.",
          "status": "fictional",
          "sourceIds": [
            "F14",
            "F16",
            "F17"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; OpenStax / Rice University: The Economics of Pollution",
          "hook": "A payment, a behavior change and compensation are separate facts.",
          "stem": "A delivery operator now pays an 8-credit charge per trip. It still makes some trips, and each remaining trip still produces the stated noise. Collections go to a general account; no compensation program is specified.",
          "call": "What follows?",
          "issue": "Payment versus harm",
          "rule": "u06-l3-rule",
          "options": [
            {
              "text": "The noise is eliminated because every trip has been charged.",
              "why": "The stem says the remaining trips still produce noise.",
              "trap": 5
            },
            {
              "text": "Every affected resident has received full compensation.",
              "why": "No compensation arrangement is specified.",
              "trap": 3
            },
            {
              "text": "The charge cannot influence any decision because some trips remain.",
              "why": "A nonzero remaining activity does not prove the charge had no incentive effect.",
              "trap": 7
            },
            {
              "text": "The charge exists; remaining noise and compensation must be assessed separately.",
              "why": "Paying does not erase the stipulated noise, and the destination of funds does not establish compensation."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "each remaining trip still produces the stated noise",
            "no compensation program is specified"
          ],
          "findAsk": "Which details prevent inferring eliminated harm or delivered compensation?"
        },
        {
          "id": "u06-l3-sort",
          "kind": "sort",
          "say": "An instrument can have several effects, but identify the mechanism actually stated.",
          "status": "fictional",
          "sourceIds": [
            "F14",
            "F16",
            "F17"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; OpenStax / Rice University: The Economics of Pollution",
          "hook": "An instrument can have several effects, but identify the mechanism actually stated.",
          "q": "Which mechanism is explicitly described?",
          "buckets": [
            "Prevention or reduction",
            "Compensation transfer",
            "Incentive charge"
          ],
          "items": [
            {
              "text": "A workshop moves noisy work outside residents’ sleeping hours, reducing disruption.",
              "bucket": "Prevention or reduction",
              "why": "The action reduces the harmful effect."
            },
            {
              "text": "Affected residents receive an agreed payment for a loss already suffered.",
              "bucket": "Compensation transfer",
              "why": "This transfers resources as redress."
            },
            {
              "text": "An operator pays a fee for each noisy trip it chooses.",
              "bucket": "Incentive charge",
              "why": "A per-trip charge changes the marginal private cost."
            },
            {
              "text": "A filter prevents the stated dust from reaching neighbors.",
              "bucket": "Prevention or reduction",
              "why": "The filter reduces exposure itself."
            },
            {
              "text": "A fund pays for repairs to a neighbor’s damaged property.",
              "bucket": "Compensation transfer",
              "why": "The transfer addresses a loss; it is not proof the original event never occurred."
            },
            {
              "text": "Each unit of discharge carries a charge faced by the producer.",
              "bucket": "Incentive charge",
              "why": "The payment varies with the harmful activity."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u06-l3-transfer",
          "kind": "argue",
          "say": "Recognize the information and judgments a choice still requires.",
          "status": "fictional",
          "sourceIds": [
            "F14",
            "F16",
            "F17"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; OpenStax / Rice University: The Economics of Pollution",
          "hook": "Recognize the information and judgments a choice still requires.",
          "stem": "A neighborhood proposes a monitored agreement limiting late deliveries. Another proposes a per-trip fee. Both are feasible proposals, but their effects, monitoring costs and compliance have not been estimated. Residents disagree about acceptable disruption.",
          "call": "What is established?",
          "issue": "Instrument comparison",
          "rule": "u06-l3-rule",
          "options": [
            {
              "text": "The proposals need comparative evidence and an explicit decision criterion.",
              "why": "Feasibility alone does not rank their effects, implementation costs or the contested standard."
            },
            {
              "text": "The fee must dominate because every externality has one universal remedy.",
              "why": "No instrument is automatically best under all conditions.",
              "trap": 7
            },
            {
              "text": "The agreement must work because it uses cooperation.",
              "why": "Cooperation still requires workable rules, monitoring and compliance.",
              "trap": 2
            },
            {
              "text": "The disagreement proves no information about the options could help.",
              "why": "Evidence can inform consequences even when value judgments remain.",
              "trap": 7
            }
          ],
          "answer": 0,
          "transfer": true,
          "callType": "accurate"
        }
      ]
    },
    {
      "id": "u06l4",
      "title": "Do not hide the people in totals",
      "objective": "Distinguish a bounded cost-benefit result from consent, compensation, complete harm measurement and distribution.",
      "takeaway": "A total can inform a decision without speaking for every affected person.",
      "fieldwork": "When you see a claimed net benefit, ask who gains, who loses, which effects are missing, and whether any proposed compensation actually occurs.",
      "items": [
        {
          "id": "u06-l4-rule",
          "kind": "rule",
          "say": "A positive aggregate result does not establish that everyone gains or that compensation occurs.",
          "status": "model",
          "sourceIds": [
            "F14",
            "F15",
            "F16",
            "E11"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; CORE Econ: Evaluating institutions and outcomes: Fairness; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Ask who is missing from the total and what the calculation does not authorize.",
          "title": "Keep totals and people visible",
          "elements": [
            "Show who gains and who loses alongside the total",
            "Distinguish possible compensation from actual compensation",
            "Disclose unmeasured effects, constraints and contested valuations"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume a positive total proves every person is better off",
            "Treat possible payment as consent or completed redress"
          ],
          "ex": [
            {
              "facts": "A model assigns 100 credits of benefit to one group and 40 of loss to another, using a stated common valuation. No transfer occurs.",
              "result": "The modeled total is +60, but the losing group still bears 40. A potential transfer is not an actual one, and the arithmetic does not establish consent."
            },
            {
              "facts": "Two feasible noise-reduction steps avoid 60 credits of harm each; their resource costs are 20 and 50. A third also avoids 60 but costs 90.",
              "result": "Under the complete stipulated unweighted net-benefit criterion, the first two yield gains of 40 and 10; the third loses 30. That criterion favors two steps without settling rights outside the model."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A project with positive modeled total benefit necessarily makes every affected group better off.",
              "a": false,
              "why": "An aggregate gain can coexist with a loss to one group, especially when no compensation occurs."
            },
            {
              "t": "mcq",
              "q": "What does a positive total with no transfer establish about compensation?",
              "options": [
                "That every loser has been paid",
                "That consent is unnecessary",
                "No compensation has been shown"
              ],
              "a": "No compensation has been shown",
              "why": "A possible distribution of gains is different from an actual transfer."
            }
          ]
        },
        {
          "id": "u06-l4-term",
          "kind": "term",
          "say": "A transfer or other redress provided to someone for a specified loss or burden.",
          "status": "model",
          "sourceIds": [
            "F14",
            "F15",
            "F16",
            "E11"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; CORE Econ: Evaluating institutions and outcomes: Fairness; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Compensation does not by itself show consent or undo every physical harm.",
          "term": "Compensation",
          "meaning": "A transfer or other redress provided to someone for a specified loss or burden.",
          "use": "An appraisal should distinguish a proposed payment from one actually delivered to affected people.",
          "lang": "english"
        },
        {
          "id": "u06-l4-h1",
          "kind": "hypo",
          "say": "A positive sum can contain an uncompensated loss.",
          "status": "fictional",
          "sourceIds": [
            "F14",
            "F15",
            "F16",
            "E11"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; CORE Econ: Evaluating institutions and outcomes: Fairness; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "A positive sum can contain an uncompensated loss.",
          "stem": "A project’s fictional appraisal values one group’s benefit at 100 credits and another group’s loss at 40. No compensation is paid. The values are accepted only for this numerical exercise.",
          "call": "What follows from the arithmetic?",
          "issue": "Total and distribution",
          "rule": "u06-l4-rule",
          "options": [
            {
              "text": "Both groups gain because the total is positive.",
              "why": "The total does not change the stated distribution.",
              "trap": 5
            },
            {
              "text": "The second group has received 40 in compensation.",
              "why": "The stem expressly says no compensation is paid.",
              "trap": 3
            },
            {
              "text": "The calculation proves the second group consented.",
              "why": "Valuation and consent are distinct; no consent fact is supplied.",
              "trap": 4
            },
            {
              "text": "The total is +60, while the second group still loses 40.",
              "why": "Adding 100 and −40 gives +60; with no transfer, the modeled loss remains with the second group."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "No compensation is paid"
          ],
          "findAsk": "Which detail prevents treating the modeled loss as already compensated?",
          "boundary": true
        },
        {
          "id": "u06-l4-num",
          "kind": "num",
          "say": "Marginal net benefits are 40, 10 and −30; totals are 0, 40, 50 and 20.",
          "status": "fictional",
          "sourceIds": [
            "F14",
            "F15",
            "F16",
            "E11"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; CORE Econ: Evaluating institutions and outcomes: Fairness; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Marginal net benefits are 40, 10 and −30; totals are 0, 40, 50 and 20.",
          "ask": "Three sequential noise-reduction steps each avoid 60 credits of harm. Their resource costs are 20, 50 and 90 credits. No other effects or constraints apply. Under the stated unweighted net-benefit criterion, how many steps maximize the total? Enter an exact number of steps.",
          "answer": "2 steps",
          "distractors": [
            "1 step",
            "3 steps",
            "0 steps"
          ],
          "speed": false,
          "alt": [
            "2"
          ]
        },
        {
          "id": "u06-l4-h2",
          "kind": "hypo",
          "say": "Count both sides of a transfer; it changes distribution without creating resources.",
          "status": "fictional",
          "sourceIds": [
            "F14",
            "F15",
            "F16",
            "E11"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; CORE Econ: Evaluating institutions and outcomes: Fairness; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Count both sides of a transfer; it changes distribution without creating resources.",
          "stem": "In a revised project, the first group gains 100 credits and the second initially loses 40. A real 45-credit transfer goes from the first group to the second. Assume these are the only effects, credits are directly comparable, and transfer costs are zero.",
          "call": "What is the final numerical distribution?",
          "issue": "Actual transfer",
          "rule": "u06-l4-rule",
          "options": [
            {
              "text": "The first group gains 55 and the second gains 5.",
              "why": "The transfer changes distribution: 100 − 45 = 55 and −40 + 45 = 5. The total remains 60."
            },
            {
              "text": "The total rises from 60 to 105 because 45 is paid.",
              "why": "The payment is a transfer between these groups, not a new benefit created from outside.",
              "trap": 5
            },
            {
              "text": "The first group still gains 100 because only the recipient counts a transfer.",
              "why": "The payer gives up the 45 that the recipient receives.",
              "trap": 9
            },
            {
              "text": "Both groups gain 60 because the total is divided equally.",
              "why": "The specified transfer gives 55 and 5, not an equal split.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "boundary": true
        },
        {
          "id": "u06-l4-trap",
          "kind": "trap",
          "say": "Uncertainty about a harm is not evidence that it is too small to matter.",
          "status": "fictional",
          "sourceIds": [
            "F14",
            "F15",
            "F16",
            "E11"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; CORE Econ: Evaluating institutions and outcomes: Fairness; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Uncertainty about a harm is not evidence that it is too small to matter.",
          "stem": "An appraisal omits an uncertain health effect on a small group and reports a positive total from the effects it did measure.",
          "wrong": "The positive measured total proves the omitted health effect cannot change the ranking.",
          "right": "The measured total is conditional; the omitted effect could matter and should be disclosed and investigated.",
          "why": "The size of the omitted effect is unknown. Neither its irrelevance nor a definite reversed ranking follows from the supplied information.",
          "fixDistractors": [
            "The omitted health effect certainly reverses the ranking, whatever its size.",
            "A small affected group can be excluded from every economic appraisal."
          ],
          "cat": 3,
          "boundary": true
        },
        {
          "id": "u06-l4-transfer",
          "kind": "argue",
          "say": "Keep useful arithmetic alongside its missing effects and unresolved judgments.",
          "status": "fictional",
          "sourceIds": [
            "F14",
            "F15",
            "F16",
            "E11"
          ],
          "src": "CORE Econ: Solving the problem: Regulation, taxation, and compensation; CORE Econ: Evaluating institutions and outcomes: Fairness; Elinor Ostrom; Indiana University Digital Library of the Commons: Beyond Markets and States: Polycentric Governance of Complex Economic Systems; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Keep useful arithmetic alongside its missing effects and unresolved judgments.",
          "stem": "A council compares a flood barrier with no barrier. The model reports benefits exceeding included costs, but omits an unresolved effect on a downstream community. No agreement with that community or mitigation is supplied.",
          "call": "Which statement matches the model’s limits?",
          "issue": "Missing people and effects",
          "rule": "u06-l4-rule",
          "options": [
            {
              "text": "A positive included total proves the downstream community benefits.",
              "why": "Its omitted effect may differ from the effects counted in the total.",
              "trap": 3
            },
            {
              "text": "The modeled gain is conditional; the downstream effect and decision process remain unresolved.",
              "why": "The calculation can inform the included effects without settling an omitted impact or establishing agreement."
            },
            {
              "text": "A possible future payment proves the community has agreed.",
              "why": "Neither an actual payment nor agreement is supplied.",
              "trap": 3
            },
            {
              "text": "The omitted effect makes every included calculation necessarily false.",
              "why": "A bounded calculation may be correct while still incomplete for the decision.",
              "trap": 7
            }
          ],
          "answer": 1,
          "transfer": true,
          "callType": "accurate",
          "boundary": true
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
