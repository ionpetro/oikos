(function () {
  const unit = {
  "id": "u08",
  "title": "What does each side know?",
  "subject": "information",
  "blurb": "Find the information gap without mistaking uncertainty for dishonesty.",
  "assume": "All cases and prices are fictional. Hidden information is not itself wrongdoing. Model conclusions depend on the stated knowledge, preferences and alternatives.",
  "lessons": [
    {
      "id": "u08l1",
      "title": "Unknown to whom?",
      "objective": "Distinguish asymmetric information from uncertainty shared by everyone.",
      "takeaway": "Name the relevant fact and who knows it before choosing a remedy.",
      "fieldwork": "Choose a decision and list what you know, what another party knows, and what neither side knows.",
      "items": [
        {
          "id": "u08-r1",
          "kind": "rule",
          "say": "Asymmetric information means relevant information is known by some parties and not others.",
          "status": "model",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Ask “unknown to whom?” before asking for more data.",
          "title": "Map the information",
          "elements": [
            "Name the decision-relevant fact",
            "Identify who knows it",
            "Distinguish knowledge from an unsupported claim",
            "Separate shared uncertainty from unequal information"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat every uncertain outcome as someone’s secret"
          ],
          "ex": [
            {
              "facts": "A device seller has a reliable battery test that the buyer has not seen.",
              "result": "Battery-test information is asymmetric."
            },
            {
              "facts": "Neither party knows next month’s weather; both see the same forecast.",
              "result": "This is shared uncertainty, not an established information advantage."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Every unknown future event proves asymmetric information.",
              "a": false,
              "why": "An event may be unknown to everyone."
            },
            {
              "t": "mcq",
              "q": "Both parties receive the same verified inspection. What changes?",
              "options": [
                "That particular information gap shrinks",
                "Every future risk disappears",
                "The seller’s motives become known"
              ],
              "a": "That particular information gap shrinks",
              "why": "A report resolves only the facts it establishes."
            }
          ]
        },
        {
          "id": "u08-t1",
          "kind": "term",
          "say": "Relevant information about an interaction that some parties know and others do not.",
          "status": "practice",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "A seller’s private inspection result differs from weather neither side can know.",
          "term": "Asymmetric information",
          "meaning": "Relevant information about an interaction that some parties know and others do not.",
          "use": "A seller’s private inspection result differs from weather neither side can know.",
          "lang": "english",
          "alt": [
            "information asymmetry"
          ]
        },
        {
          "id": "u08-p1",
          "kind": "pairs",
          "say": "Map knowledge, evidence and uncertainty separately.",
          "status": "practice",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Use the distinguishing condition, not just a familiar label.",
          "pairs": [
            {
              "l": "Seller alone has a reliable battery report",
              "r": "Unequal information about a known condition"
            },
            {
              "l": "Both parties have only the same forecast",
              "r": "Shared uncertainty about a future event"
            },
            {
              "l": "Both receive the same verified test result",
              "r": "The specified information becomes shared"
            },
            {
              "l": "A confident claim has no supporting record",
              "r": "Confidence alone does not establish knowledge"
            }
          ]
        },
        {
          "id": "u08-h1",
          "kind": "hypo",
          "say": "An unequal information position does not prove deceit.",
          "status": "fictional",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A seller has a reliable inspection showing a refurbished laptop’s battery capacity. The buyer has no access to that report.",
          "call": "What information problem is established?",
          "options": [
            {
              "text": "Every future failure is already known to the seller.",
              "why": "A present battery report does not reveal every future event.",
              "trap": 7
            },
            {
              "text": "The seller has relevant information the buyer lacks.",
              "why": "The same condition is known to one side through the report."
            },
            {
              "text": "Both parties know nothing about the battery.",
              "why": "The seller has the reliable inspection.",
              "trap": 11
            },
            {
              "text": "The buyer’s uncertainty proves the seller lied.",
              "why": "No false statement is given.",
              "trap": 3
            }
          ],
          "answer": 1,
          "rule": "u08-r1",
          "issue": "who knows what",
          "facts": [
            "seller has a reliable inspection",
            "buyer has no access to that report"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap who has the reliable report and who lacks access."
        },
        {
          "id": "u08-h1b",
          "kind": "hypo",
          "say": "A useful disclosure can be bounded.",
          "status": "fictional",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "The seller shares the reliable battery report with the buyer. Both can read its tested capacity, but neither knows whether the laptop will be damaged next month.",
          "call": "Which conclusion fits?",
          "options": [
            {
              "text": "The battery-report gap is reduced; future uncertainty remains.",
              "why": "Sharing the report resolves that information difference only."
            },
            {
              "text": "All future uncertainty has vanished.",
              "why": "The report does not predict accidental future damage.",
              "trap": 7
            },
            {
              "text": "The battery report remains private to the seller.",
              "why": "The stated sharing changes that fact.",
              "trap": 11
            },
            {
              "text": "The report proves neither party can make a mistake.",
              "why": "A capacity test establishes no such general guarantee.",
              "trap": 7
            }
          ],
          "answer": 0,
          "rule": "u08-r1",
          "issue": "who knows what",
          "facts": [
            "shares the reliable battery report",
            "neither knows whether the laptop will be damaged"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the report-sharing action and the remaining unknown."
        },
        {
          "id": "u08-x1",
          "kind": "hypo",
          "say": "The existence of a transaction does not prove a secret.",
          "status": "fictional",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "Two event organizers have the same weather forecast. Neither has additional information about whether rain will occur. One offers to sell the other a canopy.",
          "call": "What can you infer about information?",
          "options": [
            {
              "text": "The seller must secretly know rain is certain.",
              "why": "Selling a canopy does not establish private weather knowledge.",
              "trap": 3
            },
            {
              "text": "The buyer necessarily knows more because they asked.",
              "why": "No extra knowledge is stated.",
              "trap": 3
            },
            {
              "text": "A future weather risk is shared uncertainty here.",
              "why": "The given information sets are the same on that question."
            },
            {
              "text": "There can be no trade while weather is uncertain.",
              "why": "Uncertainty does not rule out every mutually useful exchange.",
              "trap": 7
            }
          ],
          "answer": 2,
          "rule": "u08-r1",
          "issue": "who knows what",
          "facts": [
            "same weather forecast",
            "Neither has additional information"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the equal-information conditions."
        }
      ]
    },
    {
      "id": "u08l2",
      "title": "Who stays in the market?",
      "objective": "Track how a pooled offer changes the participating sellers.",
      "takeaway": "Recalculate the pool after some sellers withdraw.",
      "fieldwork": "Before relying on an average, ask whether the offer changes who is included.",
      "items": [
        {
          "id": "u08-r2",
          "kind": "rule",
          "say": "When quality is hidden, a pooled price can make some types withdraw and change what buyers should expect.",
          "status": "model",
          "sourceIds": [
            "I4"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10)",
          "hook": "The people who stay can change the average.",
          "title": "Check the selected pool",
          "elements": [
            "State buyers’ information and valuation assumptions",
            "Check each type’s willingness to participate",
            "Update the pool when participants leave",
            "Recalculate rather than reusing the old average"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume the original average survives every withdrawal"
          ],
          "ex": [
            {
              "facts": "Equal numbers of devices are worth 900 and 300 to risk-neutral buyers. Sellers require 700 and 200. Buyers cannot see type.",
              "result": "Initial expected value is 600. At 600 the high-quality sellers withdraw; the remaining pool is worth 300."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A 600 pooled price meets a high-quality seller’s 700 minimum.",
              "a": false,
              "why": "It is 100 below that seller’s stated minimum."
            },
            {
              "t": "mcq",
              "q": "All high-quality sellers have withdrawn. Which expected value uses the remaining pool?",
              "options": [
                "600",
                "900",
                "300"
              ],
              "a": "300",
              "why": "Only the low-quality devices remain in this example."
            }
          ],
          "exceptions": [
            "Hidden quality need not collapse every market; verified information can change participation."
          ]
        },
        {
          "id": "u08-t2",
          "kind": "term",
          "say": "A hidden-attribute problem in which offered terms change which types participate in an exchange.",
          "status": "practice",
          "sourceIds": [
            "I4"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10)",
          "hook": "A pooled offer may drive higher-quality sellers out before a sale.",
          "term": "Adverse selection",
          "meaning": "A hidden-attribute problem in which offered terms change which types participate in an exchange.",
          "use": "A pooled offer may drive higher-quality sellers out before a sale.",
          "lang": "english"
        },
        {
          "id": "u08-n2",
          "kind": "num",
          "say": "Half of 900 plus half of 300 is 600.",
          "status": "fictional",
          "sourceIds": [
            "I4"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10)",
          "hook": "Keep the units and the comparison visible.",
          "ask": "Before any withdrawal, half the offered devices are worth 900 units to buyers and half 300. Risk-neutral buyers cannot distinguish them. What is the expected value of a random offered device?",
          "answer": "600 units",
          "alt": [
            "600"
          ],
          "distractors": [
            "1200 units",
            "300 units"
          ],
          "speed": false
        },
        {
          "id": "u08-h2",
          "kind": "hypo",
          "say": "Participation depends on each type’s threshold.",
          "status": "fictional",
          "sourceIds": [
            "I4"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "Equal numbers of high- and low-quality devices initially enter a pool. Buyers value them at 900 and 300 units, respectively. High-quality sellers require at least 700; low-quality sellers require 200. Buyers offer 600 without observing type.",
          "call": "Which participation change follows?",
          "options": [
            {
              "text": "Both types must accept because 600 is the initial average.",
              "why": "The high-quality sellers require more than 600.",
              "trap": 2
            },
            {
              "text": "Only high-quality sellers accept.",
              "why": "Their minimum exceeds the offer; the low-quality minimum does not.",
              "trap": 5
            },
            {
              "text": "Both types necessarily withdraw.",
              "why": "The offer exceeds the low-quality sellers’ minimum.",
              "trap": 5
            },
            {
              "text": "High-quality sellers decline the 600 offer.",
              "why": "600 is below their 700 threshold."
            }
          ],
          "answer": 3,
          "rule": "u08-r2",
          "issue": "selection into exchange",
          "facts": [
            "High-quality sellers require at least 700",
            "Buyers offer 600"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the high-quality sellers’ minimum and the offered price."
        },
        {
          "id": "u08-h2b",
          "kind": "hypo",
          "say": "Verified type can change the feasible exchange.",
          "status": "fictional",
          "sourceIds": [
            "I4"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A reliable inspection now identifies a high-quality device. Its buyer values it at 900 units and its seller accepts 700 or more. Ignore inspection costs and other effects. Both accept their boundary price.",
          "call": "Which price interval permits a mutually acceptable trade?",
          "options": [
            {
              "text": "700–900 units, including endpoints.",
              "why": "Both stated thresholds are met throughout that range."
            },
            {
              "text": "Only 600 units because the old pool average controls.",
              "why": "The buyer now observes this device’s type.",
              "trap": 11
            },
            {
              "text": "Any price below 900, including 100.",
              "why": "Prices below 700 fail the seller’s minimum.",
              "trap": 2
            },
            {
              "text": "Exactly 800 is mandatory.",
              "why": "The midpoint is one possibility, not a requirement.",
              "trap": 7
            }
          ],
          "answer": 0,
          "rule": "u08-r2",
          "issue": "selection into exchange",
          "facts": [
            "buyer values it at 900 units",
            "seller accepts 700 or more"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the buyer’s valuation and seller’s minimum."
        },
        {
          "id": "u08-x2",
          "kind": "hypo",
          "say": "Recompute expectations for the options still available.",
          "status": "fictional",
          "sourceIds": [
            "I4"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A used-bike pool originally contains ten bikes. Five reliable bikes require at least 400 units from their sellers; five basic bikes require 100. Buyers cannot observe type and offer 250. All reliable-bike sellers withdraw. The remaining bikes are each worth 200 to buyers.",
          "call": "What value should buyers use for the remaining pool under these facts?",
          "options": [
            {
              "text": "The original pool’s value regardless of withdrawal.",
              "why": "The pool’s composition has changed.",
              "trap": 11
            },
            {
              "text": "200 per remaining bike.",
              "why": "All remaining bikes have the stated 200 value."
            },
            {
              "text": "400 because reliable sellers required it.",
              "why": "Those sellers have left and their minimum is not the remaining buyers’ value.",
              "trap": 4
            },
            {
              "text": "Zero because any information gap destroys value.",
              "why": "The remaining bikes are explicitly worth 200.",
              "trap": 7
            }
          ],
          "answer": 1,
          "rule": "u08-r2",
          "issue": "selection into exchange",
          "facts": [
            "All reliable-bike sellers withdraw",
            "remaining bikes are each worth 200"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the withdrawal fact and the remaining bikes’ stated value."
        }
      ]
    },
    {
      "id": "u08l3",
      "title": "Actions, outcomes and blame",
      "objective": "Recognize hidden action while preserving uncertainty about its cause.",
      "takeaway": "A poor result may reflect an action, an external event, or both.",
      "fieldwork": "For one outcome measure, list two different processes that could produce the same result.",
      "items": [
        {
          "id": "u08-r3",
          "kind": "rule",
          "say": "A hidden-action problem combines conflicting interests with a consequential action that cannot be observed or verified.",
          "status": "model",
          "sourceIds": [
            "I5"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "The scoreboard shows a result, not a complete account of the work.",
          "title": "Do not read effort from one result",
          "elements": [
            "Identify the parties and their interests",
            "Name the action rather than just the outcome",
            "Check what can be observed or verified",
            "Consider other causes of the result"
          ],
          "ordered": false,
          "distractorElements": [
            "Infer low effort from every unfavorable outcome"
          ],
          "ex": [
            {
              "facts": "A service client values maintenance, while maintenance costs the contractor effort. The client cannot verify whether it occurred.",
              "result": "This is a potential hidden-action problem, also called moral hazard; the label describes the arrangement, not the person’s moral worth."
            },
            {
              "facts": "A power outage interrupts service despite recorded maintenance.",
              "result": "The interruption alone does not prove maintenance was skipped."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Moral hazard is a diagnosis that the agent is an immoral person.",
              "a": false,
              "why": "It names an information and incentive problem."
            },
            {
              "t": "mcq",
              "q": "A result depends on both maintenance and weather. What does one failure reveal?",
              "options": [
                "The worker’s motive with certainty",
                "An outcome that needs further evidence",
                "That all monitoring is pointless"
              ],
              "a": "An outcome that needs further evidence",
              "why": "Different causes can lead to the same result."
            }
          ]
        },
        {
          "id": "u08-t3",
          "kind": "term",
          "say": "A hidden-action problem when one party’s incentives and unobservable or unverifiable actions affect another.",
          "status": "practice",
          "sourceIds": [
            "I5"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "The label identifies a problem in the arrangement, not a person’s moral worth.",
          "term": "Moral hazard",
          "meaning": "A hidden-action problem when one party’s incentives and unobservable or unverifiable actions affect another.",
          "use": "The label identifies a problem in the arrangement, not a person’s moral worth.",
          "lang": "english",
          "alt": [
            "hidden action"
          ]
        },
        {
          "id": "u08-so3",
          "kind": "sort",
          "say": "Separate the structure of the problem from an accusation.",
          "status": "fictional",
          "sourceIds": [
            "I5"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Classify the stated facts, not the person.",
          "q": "What do these fictional facts establish?",
          "buckets": [
            "Hidden-action concern",
            "Outcome alone is insufficient"
          ],
          "items": [
            {
              "text": "Maintenance is costly to the contractor, benefits the client, and cannot be verified.",
              "bucket": "Hidden-action concern",
              "why": "Both conflicting incentives and unverifiable action are stated."
            },
            {
              "text": "A machine failed; maintenance and external causes have not been checked.",
              "bucket": "Outcome alone is insufficient",
              "why": "Failure does not identify the action taken."
            },
            {
              "text": "An owner wants accurate reports; a manager benefits from concealment and reports cannot be checked.",
              "bucket": "Hidden-action concern",
              "why": "The consequential action and verification problem are explicit."
            },
            {
              "text": "A storm damages a maintained building.",
              "bucket": "Outcome alone is insufficient",
              "why": "The observed damage need not indicate skipped maintenance."
            }
          ]
        },
        {
          "id": "u08-h3",
          "kind": "hypo",
          "say": "A mechanism is not proof that someone exploited it.",
          "status": "fictional",
          "sourceIds": [
            "I5"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A contractor is paid a fixed fee for a month of service. Preventive maintenance costs them effort and benefits the client. Whether maintenance occurred cannot be verified by the client or an independent reviewer.",
          "call": "What concern is established?",
          "options": [
            {
              "text": "A potential hidden-action incentive problem.",
              "why": "The action matters, interests differ, and verification is unavailable."
            },
            {
              "text": "Proof the contractor skipped every check.",
              "why": "The scenario describes incentives and information, not observed conduct.",
              "trap": 3
            },
            {
              "text": "Proof the client should disclose all private data.",
              "why": "Unrelated data do not establish maintenance.",
              "trap": 10
            },
            {
              "text": "No information problem because the fee is fixed.",
              "why": "Fixed payment does not make the action verifiable.",
              "trap": 5
            }
          ],
          "answer": 0,
          "rule": "u08-r3",
          "issue": "hidden action and outcomes",
          "facts": [
            "maintenance costs them effort and benefits the client",
            "cannot be verified"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the conflict over maintenance and the lack of verification."
        },
        {
          "id": "u08-h3b",
          "kind": "hypo",
          "say": "Evidence about the action can defeat an accusation.",
          "status": "fictional",
          "sourceIds": [
            "I5"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "Independent records verify the contractor completed every required maintenance check. A documented external power failure then stops the service.",
          "call": "What changes in the explanation?",
          "options": [
            {
              "text": "The service failure proves skipped maintenance anyway.",
              "why": "That conflicts with the verified records.",
              "trap": 11
            },
            {
              "text": "All future maintenance incentives are irrelevant.",
              "why": "This event does not settle every future incentive problem.",
              "trap": 7
            },
            {
              "text": "This interruption is not evidence of omitted required checks.",
              "why": "The checks are verified and an external cause is documented."
            },
            {
              "text": "The client must pay any new fee the contractor requests.",
              "why": "The facts do not authorize new terms.",
              "trap": 3
            }
          ],
          "answer": 2,
          "rule": "u08-r3",
          "issue": "hidden action and outcomes",
          "facts": [
            "verify the contractor completed every required maintenance check",
            "documented external power failure"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the verified maintenance and documented external cause."
        },
        {
          "id": "u08-x3",
          "kind": "hypo",
          "say": "State the uncertainty as carefully as the concern.",
          "status": "fictional",
          "sourceIds": [
            "I5"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A funder requires grant money to be used for equipment. A recipient could gain privately by using it elsewhere, and spending cannot be verified. No evidence yet shows what was purchased.",
          "call": "Which conclusion is warranted?",
          "options": [
            {
              "text": "The recipient certainly diverted the money.",
              "why": "No evidence establishes actual spending.",
              "trap": 3
            },
            {
              "text": "There is a hidden-action concern, not proof of diversion.",
              "why": "Incentives and unverifiable use create the concern."
            },
            {
              "text": "Every grant recipient is dishonest.",
              "why": "The scenario establishes no universal claim about people.",
              "trap": 7
            },
            {
              "text": "The concern disappears because the grant has a written purpose.",
              "why": "A written purpose does not make actual use verifiable.",
              "trap": 5
            }
          ],
          "answer": 1,
          "rule": "u08-r3",
          "issue": "hidden action and outcomes",
          "facts": [
            "could gain privately by using it elsewhere",
            "spending cannot be verified"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the private incentive and the inability to verify spending."
        }
      ]
    },
    {
      "id": "u08l4",
      "title": "What does the proof prove?",
      "objective": "Evaluate information remedies within their tested scope.",
      "takeaway": "A relevant check reduces a particular uncertainty; it need not answer every question.",
      "fieldwork": "Reflect on a badge or guarantee you rely on. What exactly is verified, and who can contest it?",
      "items": [
        {
          "id": "u08-r4",
          "kind": "rule",
          "say": "Inspect what a signal, test or guarantee establishes before relying on it.",
          "status": "practice",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "A flashlight lights one part of the room.",
          "title": "Match the check to the claim",
          "elements": [
            "Name the exact claim",
            "Check the test’s independence and scope",
            "Check whether a promised remedy can be delivered",
            "Keep unresolved questions visible"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat an expensive badge as proof of every quality"
          ],
          "ex": [
            {
              "facts": "A current independent battery test confirms capacity, but says nothing about software updates.",
              "result": "It supports the battery claim only."
            },
            {
              "facts": "A warranty promises repair but the provider has no verified repair capacity.",
              "result": "The promised remedy itself needs checking."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A costly certificate always proves product quality.",
              "a": false,
              "why": "Its meaning depends on the process and what was verified."
            },
            {
              "t": "mcq",
              "q": "A test verifies only battery capacity. Which claim can it support?",
              "options": [
                "Every future software update",
                "The tested battery capacity",
                "The owner’s honesty in every setting"
              ],
              "a": "The tested battery capacity",
              "why": "The evidence has a defined scope."
            }
          ],
          "boundary": true
        },
        {
          "id": "u08-t4",
          "kind": "term",
          "say": "Checking a claim against relevant evidence that can establish or challenge it.",
          "status": "practice",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Read the scope of a test before treating it as proof of a broader promise.",
          "term": "Verification",
          "meaning": "Checking a claim against relevant evidence that can establish or challenge it.",
          "use": "Read the scope of a test before treating it as proof of a broader promise.",
          "lang": "english",
          "boundary": true
        },
        {
          "id": "u08-st4",
          "kind": "steps",
          "say": "Verify the claim you actually need to decide.",
          "status": "practice",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Use the routine as a checking aid, not a universal script.",
          "title": "A claim-check routine",
          "steps": [
            "State the exact claim",
            "Inspect relevant evidence and its limits",
            "Identify unresolved material questions",
            "Choose a bounded next step"
          ],
          "distractors": [
            "Treat a confident badge as sufficient evidence",
            "Demand unrelated private records"
          ],
          "applyTo": {
            "facts": "You have stated a claim about battery capacity but have not inspected the available test.",
            "stop": "Inspect relevant evidence and its limits",
            "why": "The next step is to see whether the test establishes that claim."
          },
          "boundary": true
        },
        {
          "id": "u08-h4",
          "kind": "hypo",
          "say": "A bounded check can be sufficient for a bounded question.",
          "status": "fictional",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A current independent test confirms a device has at least eight hours of battery use under the buyer’s stated workload. The buyer asks only whether that battery requirement is met.",
          "call": "Does this evidence address the stated question?",
          "options": [
            {
              "text": "Yes, because it tests the relevant battery condition.",
              "why": "The scope and workload match the buyer’s requirement."
            },
            {
              "text": "No, because a test cannot prove every future feature.",
              "why": "The buyer asked a narrower question that the test addresses.",
              "trap": 10
            },
            {
              "text": "Yes, because it guarantees unlimited software support.",
              "why": "That broader claim was not tested.",
              "trap": 1
            },
            {
              "text": "No, because all seller-provided information is worthless.",
              "why": "Independence and matching scope are explicitly stated.",
              "trap": 7
            }
          ],
          "answer": 0,
          "rule": "u08-r4",
          "issue": "scope of verification",
          "facts": [
            "current independent test",
            "buyer asks only whether that battery requirement is met"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "grid": true,
          "findAsk": "Tap the independent-test condition and the buyer’s narrow question."
        },
        {
          "id": "u08-tr4",
          "kind": "trap",
          "say": "A costly signal needs a relevant verification process.",
          "status": "fictional",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Repair the reasoning without inventing new facts.",
          "stem": "A supplier buys an expensive badge. The badge issuer verifies only that the fee was paid, not service quality.",
          "wrong": "The badge proves the supplier delivers excellent service.",
          "right": "The badge verifies payment, not service quality.",
          "why": "The verification process does not establish the asserted quality.",
          "cat": 5,
          "fixDistractors": [
            "Treat a higher badge fee as proof of higher service quality.",
            "Assume payment verification guarantees every future service outcome."
          ],
          "rule": "u08-r4",
          "boundary": true
        },
        {
          "id": "u08-x4",
          "kind": "hypo",
          "say": "Use the evidence without stretching its conclusion.",
          "status": "fictional",
          "sourceIds": [
            "I4",
            "I5"
          ],
          "src": "Hidden attributes and adverse selection (The Economy 2.0, §10.10) · Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A training provider presents a current independent audit confirming that its course includes ten supervised practice hours. It advertises guaranteed job placement, which the audit did not examine.",
          "call": "Which statement is supported by this audit?",
          "options": [
            {
              "text": "Every graduate will receive a job.",
              "why": "Placement was outside the audit’s scope.",
              "trap": 3
            },
            {
              "text": "The provider is dishonest about all other matters.",
              "why": "The audit’s limits do not prove that broader accusation.",
              "trap": 7
            },
            {
              "text": "There is no useful information because placement is untested.",
              "why": "The audit establishes the narrower practice-hours claim.",
              "trap": 10
            },
            {
              "text": "The audited course includes the stated practice hours.",
              "why": "That is the specific condition independently checked."
            }
          ],
          "answer": 3,
          "rule": "u08-r4",
          "issue": "scope of verification",
          "facts": [
            "confirming that its course includes ten supervised practice hours",
            "job placement, which the audit did not examine"
          ],
          "transfer": true,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap what the audit confirms and what it did not examine."
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
