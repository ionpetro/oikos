(function () {
  const unit = {
  "id": "u10",
  "title": "Reward the work that matters",
  "subject": "work",
  "blurb": "Design for delegated work, incomplete agreements, risk and multiple tasks.",
  "assume": "Cases are fictional. Incentive models describe possible mechanisms, not fixed traits of workers. Expected pay does not determine everyone’s preferences.",
  "lessons": [
    {
      "id": "u10l1",
      "title": "Who acts for whom?",
      "objective": "Identify delegated roles, interests and relevant information.",
      "takeaway": "Delegation can create useful cooperation and also a need to check alignment.",
      "fieldwork": "Map one delegated task: who relies on it, who performs it, and what each can observe.",
      "items": [
        {
          "id": "u10-r1",
          "kind": "rule",
          "say": "A principal relies on an agent to act; examine the task, interests, information and authority rather than assuming perfect alignment.",
          "status": "model",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Hiring someone to carry the message does not specify every incentive.",
          "title": "Map the delegated task",
          "elements": [
            "Name who delegates and who acts",
            "Compare the parties’ relevant objectives",
            "Check what each can observe",
            "State the agent’s decision authority"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume an agent’s objective must match the principal’s"
          ],
          "ex": [
            {
              "facts": "A college hires a recruiter to enroll suitable students; the recruiter is paid for every enrollment.",
              "result": "The college is principal and recruiter is agent. Enrollment rewards may omit suitability."
            },
            {
              "facts": "Both parties receive verified suitability results and pay depends on the stated quality condition.",
              "result": "Those changes can improve alignment on that condition without proving every objective matches."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Every principal–agent relationship proves the agent has acted badly.",
              "a": false,
              "why": "It describes roles; conduct requires evidence."
            },
            {
              "t": "mcq",
              "q": "Which question tests alignment in the recruiting example?",
              "options": [
                "Does the reward depend on suitability?",
                "Is the recruiter’s title impressive?",
                "Does every agent dislike the principal?"
              ],
              "a": "Does the reward depend on suitability?",
              "why": "It connects the reward to the delegated objective."
            }
          ]
        },
        {
          "id": "u10-t1",
          "kind": "term",
          "say": "An arrangement in which one party relies on another to act on its behalf.",
          "status": "practice",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "The principal delegates; the agent acts. Either role can hold information the other lacks.",
          "term": "Principal–agent relationship",
          "meaning": "An arrangement in which one party relies on another to act on its behalf.",
          "use": "The principal delegates; the agent acts. Either role can hold information the other lacks.",
          "lang": "english",
          "alt": [
            "principal agent relationship"
          ]
        },
        {
          "id": "u10-p1",
          "kind": "pairs",
          "say": "Roles, incentives and authority are different parts of delegation.",
          "status": "practice",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Use the distinguishing condition, not just a familiar label.",
          "pairs": [
            {
              "l": "A college delegates recruitment",
              "r": "Principal in this arrangement"
            },
            {
              "l": "A recruiter performs the delegated task",
              "r": "Agent in this arrangement"
            },
            {
              "l": "The reward counts enrollments but omits suitability",
              "r": "Potential objective misalignment"
            },
            {
              "l": "The recruiter can explain terms but cannot approve discounts",
              "r": "A boundary on delegated authority"
            }
          ]
        },
        {
          "id": "u10-h1",
          "kind": "hypo",
          "say": "Diagnose the reward rule before accusing the person.",
          "status": "fictional",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A college delegates recruitment to a contractor. The college wants suitable enrollments; the contractor’s bonus counts every enrollment regardless of suitability. No misconduct has been observed.",
          "call": "What concern is justified?",
          "options": [
            {
              "text": "The contractor certainly deceived every student.",
              "why": "No misconduct is established.",
              "trap": 3
            },
            {
              "text": "The reward may diverge from the delegated objective.",
              "why": "The bonus omits the suitability condition."
            },
            {
              "text": "There is no issue because a contract exists.",
              "why": "A contract does not by itself align the measured reward.",
              "trap": 5
            },
            {
              "text": "All enrollment bonuses are necessarily harmful.",
              "why": "This example does not establish that universal claim.",
              "trap": 7
            }
          ],
          "answer": 1,
          "rule": "u10-r1",
          "issue": "delegation and alignment",
          "facts": [
            "college wants suitable enrollments",
            "bonus counts every enrollment regardless of suitability"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the principal’s objective and what the contractor’s bonus counts."
        },
        {
          "id": "u10-h1b",
          "kind": "hypo",
          "say": "A repaired incentive can address a specific mismatch.",
          "status": "fictional",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "The college now pays the bonus only for independently verified suitable enrollments. The verification is reliable for that stated criterion.",
          "call": "What has changed?",
          "options": [
            {
              "text": "No incentive question can ever remain.",
              "why": "One aligned condition does not settle every task or future case.",
              "trap": 7
            },
            {
              "text": "The recruiter is no longer an agent.",
              "why": "The delegated role remains.",
              "trap": 5
            },
            {
              "text": "The reward now includes verified suitability.",
              "why": "Suitability is now explicitly verified and rewarded."
            },
            {
              "text": "The earlier bonus rule must still control.",
              "why": "The rule has changed.",
              "trap": 11
            }
          ],
          "answer": 2,
          "rule": "u10-r1",
          "issue": "delegation and alignment",
          "facts": [
            "only for independently verified suitable enrollments",
            "verification is reliable"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the new reward condition and the reliability of verification."
        },
        {
          "id": "u10-x1",
          "kind": "hypo",
          "say": "A delegated job may have more than one objective.",
          "status": "fictional",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A store owner asks a manager to minimize spoilage while keeping safe stock for customers. The manager is rewarded only for the lowest inventory count; lost sales and stockouts are not included.",
          "call": "What should be examined?",
          "options": [
            {
              "text": "Whether minimizing the measured count conflicts with keeping usable stock.",
              "why": "The reward includes only one part of the owner’s stated objective."
            },
            {
              "text": "Whether every customer should stop buying.",
              "why": "That does not examine the delegated arrangement.",
              "trap": 6
            },
            {
              "text": "Whether the manager must have stolen inventory.",
              "why": "No theft is established.",
              "trap": 3
            },
            {
              "text": "A low count alone proves the whole task is complete.",
              "why": "The objective also includes safe availability.",
              "trap": 9
            }
          ],
          "answer": 0,
          "rule": "u10-r1",
          "issue": "delegation and alignment",
          "facts": [
            "minimize spoilage while keeping safe stock",
            "rewarded only for the lowest inventory count"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the owner’s two-part objective and the narrower reward."
        }
      ]
    },
    {
      "id": "u10l2",
      "title": "The contract cannot say everything",
      "objective": "Distinguish incomplete specification from permission to ignore commitments.",
      "takeaway": "Unspecified contingencies need a decision process; they do not create unlimited authority.",
      "fieldwork": "Identify one task where future circumstances cannot all be listed. Who should decide when a new condition appears?",
      "items": [
        {
          "id": "u10-r2",
          "kind": "rule",
          "say": "An incomplete contract cannot specify and verifiably enforce every relevant aspect of an exchange.",
          "status": "practice",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "The map can omit a road without giving you every key.",
          "title": "Plan for what cannot be specified",
          "elements": [
            "Identify what is specified and verifiable",
            "Identify consequential gaps or contingencies",
            "Clarify decision rights and review routes",
            "Keep existing commitments visible"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat every gap as permission to do anything"
          ],
          "ex": [
            {
              "facts": "An IT agreement specifies response hours but cannot list every future software incident.",
              "result": "The agreement needs a workable route for new incidents; the response-hours promise still matters."
            },
            {
              "facts": "A proposed extra service requires an approval that has not been given.",
              "result": "An unspecified contingency does not supply that approval."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A detailed written contract necessarily covers every future contingency.",
              "a": false,
              "why": "Detail does not establish complete specification or verifiability."
            },
            {
              "t": "mcq",
              "q": "A new task falls outside a manager’s stated authority. Which action fits?",
              "options": [
                "Assume the gap grants unlimited authority",
                "Use the agreed approval route",
                "Declare all earlier commitments void"
              ],
              "a": "Use the agreed approval route",
              "why": "A gap and permission are different facts."
            }
          ]
        },
        {
          "id": "u10-t2",
          "kind": "term",
          "say": "An agreement that does not specify in a verifiably enforceable way every relevant aspect of an exchange.",
          "status": "practice",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Complex future work may need assigned decision rights and a review process.",
          "term": "Incomplete contract",
          "meaning": "An agreement that does not specify in a verifiably enforceable way every relevant aspect of an exchange.",
          "use": "Complex future work may need assigned decision rights and a review process.",
          "lang": "english"
        },
        {
          "id": "u10-st2",
          "kind": "steps",
          "say": "Check authority before relying on a new commitment.",
          "status": "practice",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Use the routine as a checking aid, not a universal script.",
          "title": "A routine for a consequential contract gap",
          "steps": [
            "Identify the new condition",
            "Check existing commitments and authority",
            "Use the agreed decision route",
            "Record the resulting scope and responsibilities"
          ],
          "distractors": [
            "Assume silence authorizes every action",
            "Erase the original terms without agreement"
          ],
          "applyTo": {
            "facts": "A team has identified a new incident but has not checked the agreed service scope or decision authority.",
            "stop": "Check existing commitments and authority",
            "why": "The new condition is known; the next step is to locate the existing boundary."
          }
        },
        {
          "id": "u10-h2",
          "kind": "hypo",
          "say": "A gap needs governance, not an invented permission.",
          "status": "fictional",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "An IT agreement promises weekday support. A new weekend task was not anticipated. The support lead can propose changes but only the director can approve additional staffing.",
          "call": "What follows from the gap?",
          "options": [
            {
              "text": "The lead may promise any weekend staffing.",
              "why": "The approval boundary remains explicit.",
              "trap": 2
            },
            {
              "text": "The weekday promise has vanished.",
              "why": "The new task does not erase the earlier commitment.",
              "trap": 3
            },
            {
              "text": "Use the director’s approval route for staffing.",
              "why": "The specified decision authority governs the change."
            },
            {
              "text": "Every incomplete agreement is worthless.",
              "why": "A gap does not remove all useful commitments.",
              "trap": 7
            }
          ],
          "answer": 2,
          "rule": "u10-r2",
          "issue": "incomplete contracts and authority",
          "facts": [
            "only the director can approve additional staffing"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the stated approval authority for additional staffing."
        },
        {
          "id": "u10-h2b",
          "kind": "hypo",
          "say": "A resolved gap can support a concrete commitment.",
          "status": "fictional",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "The director now approves a specific staffed weekend session, and the support team confirms capacity. The approved scope and hours are recorded.",
          "call": "What has changed?",
          "options": [
            {
              "text": "Communicate the session within its approved scope.",
              "why": "Both authority and capacity for that specific commitment are established."
            },
            {
              "text": "All future weekend work is automatically approved.",
              "why": "The approval covers one specified session.",
              "trap": 7
            },
            {
              "text": "The earlier gap makes any later approval impossible.",
              "why": "An agreement can be clarified and revised.",
              "trap": 5
            },
            {
              "text": "The lead should hide the approved hours.",
              "why": "Hiding them would undermine the recorded scope.",
              "trap": 10
            }
          ],
          "answer": 0,
          "rule": "u10-r2",
          "issue": "incomplete contracts and authority",
          "facts": [
            "director now approves a specific staffed weekend session",
            "support team confirms capacity"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the approval and the confirmed capacity."
        },
        {
          "id": "u10-x2",
          "kind": "hypo",
          "say": "Permission for one task does not automatically cover another.",
          "status": "fictional",
          "sourceIds": [
            "I5",
            "I8"
          ],
          "src": "Principal–agent relationships, hidden actions, and incomplete contracts (The Economy 2.0, §10.8) · Pay for Performance and Beyond",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A research assistant may collect approved survey responses. A new proposal would publish identifiable responses, which requires a separate review under the project’s agreed rules. That review has not occurred.",
          "call": "What is the appropriate inference?",
          "options": [
            {
              "text": "Collection permission automatically includes publication.",
              "why": "The project explicitly requires a separate review.",
              "trap": 2
            },
            {
              "text": "The new publication requires that review before reliance.",
              "why": "The stated decision rule applies to the new use."
            },
            {
              "text": "No research can continue because one use is unresolved.",
              "why": "The approved collection task and proposed publication differ.",
              "trap": 7
            },
            {
              "text": "An incomplete plan removes every information boundary.",
              "why": "A gap does not erase the stated review rule.",
              "trap": 5
            }
          ],
          "answer": 1,
          "rule": "u10-r2",
          "issue": "incomplete contracts and authority",
          "facts": [
            "requires a separate review",
            "That review has not occurred"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the separate review requirement and its incomplete status."
        }
      ]
    },
    {
      "id": "u10l3",
      "title": "Risk and competing tasks",
      "objective": "Separate average pay from risk and inspect rewards across multiple activities.",
      "takeaway": "Incentives act across the whole job, including difficult-to-measure work.",
      "fieldwork": "Name an outcome affected by both a worker’s action and an external condition. How should uncertainty be recognized?",
      "items": [
        {
          "id": "u10-r3",
          "kind": "rule",
          "say": "An incentive changes the appeal of activities and may shift risk; the best design depends on the tasks, measures and preferences.",
          "status": "model",
          "sourceIds": [
            "I8"
          ],
          "src": "Pay for Performance and Beyond",
          "hook": "A bonus pulls on the whole job, not just its named target.",
          "title": "Consider the whole job and its risk",
          "elements": [
            "Identify all valuable competing tasks",
            "Check which results are measured reliably",
            "Separate controllable actions from external risk",
            "Compare reward designs without assuming identical preferences"
          ],
          "ordered": false,
          "distractorElements": [
            "Reward one count as if every other task were free"
          ],
          "ex": [
            {
              "facts": "A bonus pays only for ticket closures while careful diagnosis takes time and is not measured.",
              "result": "The reward can make diagnosis less attractive relative to closures."
            },
            {
              "facts": "Plan A pays 200 for certain; Plan B pays 100 or 300 with equal chances, independent of effort.",
              "result": "Both average 200, but only B exposes pay to that stated risk; preferences are not given."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Equal expected pay guarantees two plans are equally preferred.",
              "a": false,
              "why": "The plans differ in risk and people may value that differently."
            },
            {
              "t": "mcq",
              "q": "Quantity and quality compete for time, but only quantity is rewarded. What needs checking?",
              "options": [
                "The full task portfolio",
                "Only the employee’s job title",
                "Whether all bonuses are impossible"
              ],
              "a": "The full task portfolio",
              "why": "A narrow reward can displace valuable work outside the measure."
            }
          ]
        },
        {
          "id": "u10-t3",
          "kind": "term",
          "say": "Allocating effort among several activities whose rewards or resource demands can interact.",
          "status": "practice",
          "sourceIds": [
            "I8"
          ],
          "src": "Pay for Performance and Beyond",
          "hook": "Time spent meeting a quantity target may leave less time for unmeasured quality.",
          "term": "Multitasking",
          "meaning": "Allocating effort among several activities whose rewards or resource demands can interact.",
          "use": "Time spent meeting a quantity target may leave less time for unmeasured quality.",
          "lang": "english"
        },
        {
          "id": "u10-n3",
          "kind": "num",
          "say": "0.5×100+0.5×300=200; expected pay is not a guaranteed payment.",
          "status": "fictional",
          "sourceIds": [
            "I8"
          ],
          "src": "Pay for Performance and Beyond",
          "hook": "Keep the units and the comparison visible.",
          "ask": "A fictional pay plan gives 100 units with probability 0.5 and 300 units with probability 0.5. What is its expected payment?",
          "answer": "200 units",
          "alt": [
            "200"
          ],
          "distractors": [
            "400 units",
            "100 units"
          ],
          "speed": false
        },
        {
          "id": "u10-h3",
          "kind": "hypo",
          "say": "An average does not erase uncertainty.",
          "status": "fictional",
          "sourceIds": [
            "I8"
          ],
          "src": "Pay for Performance and Beyond",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A plan pays 200 for certain. Another pays 100 or 300 with equal probability, driven only by an external lottery. No information is given about the worker’s preferences.",
          "call": "Which comparison is justified?",
          "options": [
            {
              "text": "The risky plan guarantees 200.",
              "why": "200 is its average, not either realized payment.",
              "trap": 5
            },
            {
              "text": "Every worker must prefer the risky plan.",
              "why": "Preferences are not specified.",
              "trap": 3
            },
            {
              "text": "The plans have the same expected pay but different risk.",
              "why": "Both average 200; their possible payments differ."
            },
            {
              "text": "The fixed plan proves workers will exert no effort.",
              "why": "The scenario establishes no effort response.",
              "trap": 3
            }
          ],
          "answer": 2,
          "rule": "u10-r3",
          "issue": "risk and multiple tasks",
          "facts": [
            "pays 200 for certain",
            "pays 100 or 300 with equal probability"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the two payment distributions."
        },
        {
          "id": "u10-h3b",
          "kind": "hypo",
          "say": "Changing the distribution can remove a particular difference.",
          "status": "fictional",
          "sourceIds": [
            "I8"
          ],
          "src": "Pay for Performance and Beyond",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A different plan pays 200 for certain, just like the first plan. All other stated terms, including tasks and timing, are identical.",
          "call": "Does the earlier pay-risk difference remain?",
          "options": [
            {
              "text": "Yes, because two names always imply different risk.",
              "why": "The specified payment and other terms are identical.",
              "trap": 5
            },
            {
              "text": "No, the stated pay distributions are now identical.",
              "why": "Both guarantee the same amount under the same terms."
            },
            {
              "text": "Yes, because someone might privately prefer a name.",
              "why": "That does not establish a difference in pay risk.",
              "trap": 6
            },
            {
              "text": "No, because uncertainty never matters.",
              "why": "The conclusion follows from identical terms, not that generalization.",
              "trap": 1
            }
          ],
          "answer": 1,
          "rule": "u10-r3",
          "issue": "risk and multiple tasks",
          "facts": [
            "pays 200 for certain, just like the first plan",
            "All other stated terms, including tasks and timing, are identical"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "grid": true,
          "findAsk": "Tap the identical payment and other-terms conditions."
        },
        {
          "id": "u10-x3",
          "kind": "hypo",
          "say": "A valuable unmeasured activity can carry the opportunity cost.",
          "status": "fictional",
          "sourceIds": [
            "I8"
          ],
          "src": "Pay for Performance and Beyond",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A lab rewards the number of samples processed. Careful contamination checks take time away from processing, and the reward does not include them. The lab values both output and reliable results.",
          "call": "Which concern follows?",
          "options": [
            {
              "text": "Paying for throughput guarantees reliability.",
              "why": "The reward omits a competing activity needed for reliability.",
              "trap": 2
            },
            {
              "text": "Every technician must be dishonest.",
              "why": "The incentive structure does not establish misconduct.",
              "trap": 3
            },
            {
              "text": "All measurement should be abandoned.",
              "why": "The problem is a mismatch, not proof every measure fails.",
              "trap": 7
            },
            {
              "text": "The reward may divert time from contamination checks.",
              "why": "The activities compete for time and only one is rewarded."
            }
          ],
          "answer": 3,
          "rule": "u10-r3",
          "issue": "risk and multiple tasks",
          "facts": [
            "checks take time away from processing",
            "reward does not include them"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the time competition and the omitted reward condition."
        }
      ]
    },
    {
      "id": "u10l4",
      "title": "A measure you can challenge",
      "objective": "Design a measurement plan that can detect its own limitations.",
      "takeaway": "Define the outcome, denominator and follow-up, then check whether the metric still represents the task.",
      "fieldwork": "Reflect on a metric you use: how could a person improve its score without improving the goal, and how could an error be appealed?",
      "items": [
        {
          "id": "u10-r4",
          "kind": "rule",
          "say": "A useful measure needs a clear outcome, population and time window, plus checks for omitted work and changed behavior.",
          "status": "practice",
          "sourceIds": [
            "I8",
            "I9"
          ],
          "src": "Pay for Performance and Beyond · Categorizing Variants of Goodhart's Law",
          "hook": "Keep the ruler, but check what it measures.",
          "title": "Specify the measurement plan",
          "elements": [
            "Define the outcome and denominator",
            "Set a relevant follow-up window",
            "Check quality and changing case mix",
            "Provide a way to inspect and correct records"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume adding more targets guarantees alignment"
          ],
          "ex": [
            {
              "facts": "Two teams count closures, but one drops difficult cases from its denominator.",
              "result": "Their rates are not comparable without addressing the different included cases."
            },
            {
              "facts": "An audited count covers every identical task and verifies the required quality at the relevant follow-up.",
              "result": "It can support that bounded performance claim; measurement is not automatically useless."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A metric becoming a target proves it can never provide useful information.",
              "a": false,
              "why": "The warning calls for checking alignment, not abandoning every measure."
            },
            {
              "t": "mcq",
              "q": "Cases are removed from one team’s denominator after failure. What needs repair?",
              "options": [
                "The comparable inclusion rule",
                "The team’s logo",
                "The spelling of the target"
              ],
              "a": "The comparable inclusion rule",
              "why": "The rates no longer describe the same eligible population."
            }
          ],
          "boundary": true
        },
        {
          "id": "u10-t4",
          "kind": "term",
          "say": "A specification of the outcome, included cases, observation period and checks used to interpret a measure.",
          "status": "practice",
          "sourceIds": [
            "I8",
            "I9"
          ],
          "src": "Pay for Performance and Beyond · Categorizing Variants of Goodhart's Law",
          "hook": "Decide what counts before seeing which definition makes a team look best.",
          "term": "Measurement plan",
          "meaning": "A specification of the outcome, included cases, observation period and checks used to interpret a measure.",
          "use": "Decide what counts before seeing which definition makes a team look best.",
          "lang": "english",
          "boundary": true
        },
        {
          "id": "u10-p4",
          "kind": "pairs",
          "say": "A rate needs a population, a time window and checks.",
          "status": "practice",
          "sourceIds": [
            "I8",
            "I9"
          ],
          "src": "Pay for Performance and Beyond · Categorizing Variants of Goodhart's Law",
          "hook": "Use the distinguishing condition, not just a familiar label.",
          "pairs": [
            {
              "l": "Which cases enter the rate",
              "r": "Denominator definition"
            },
            {
              "l": "When later failures are checked",
              "r": "Follow-up window"
            },
            {
              "l": "Whether case difficulty has changed",
              "r": "Case-mix check"
            },
            {
              "l": "How an incorrect record can be contested",
              "r": "Correction route"
            }
          ],
          "boundary": true
        },
        {
          "id": "u10-h4",
          "kind": "hypo",
          "say": "A checked measure can remain useful within its scope.",
          "status": "fictional",
          "sourceIds": [
            "I8",
            "I9"
          ],
          "src": "Pay for Performance and Beyond · Categorizing Variants of Goodhart's Law",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A fictional team counts completed repairs only after a reliable 30-day check. Every eligible repair is included, task difficulty is fixed, and the measure matches the stated goal of repairs still working at 30 days.",
          "call": "Can this count support that narrow goal?",
          "options": [
            {
              "text": "No, because every target is necessarily useless.",
              "why": "The stated alignment and checks address this narrow question.",
              "trap": 7
            },
            {
              "text": "Yes, because it proves every customer’s lifetime wellbeing.",
              "why": "That conclusion exceeds the observed outcome and period.",
              "trap": 1
            },
            {
              "text": "Yes, within the stated population and 30-day scope.",
              "why": "The definition and verification match the bounded goal."
            },
            {
              "text": "No, because a different job might need another measure.",
              "why": "Another context does not invalidate this specified use.",
              "trap": 10
            }
          ],
          "answer": 2,
          "rule": "u10-r4",
          "issue": "bounded measurement design",
          "facts": [
            "Every eligible repair is included",
            "measure matches the stated goal of repairs still working at 30 days"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "grid": true,
          "findAsk": "Tap the population coverage and the outcome/time match."
        },
        {
          "id": "u10-tr4",
          "kind": "trap",
          "say": "A better score may reflect changed reporting rather than improved work.",
          "status": "fictional",
          "sourceIds": [
            "I8",
            "I9"
          ],
          "src": "Pay for Performance and Beyond · Categorizing Variants of Goodhart's Law",
          "hook": "Repair the reasoning without inventing new facts.",
          "stem": "A closure target leads a team to remove unresolved cases from its reported denominator. The underlying service has not improved.",
          "wrong": "The higher reported rate proves better service.",
          "right": "Recalculate with the agreed eligible cases and report the exclusion.",
          "why": "Changing the denominator can raise the rate without improving the service.",
          "cat": 9,
          "fixDistractors": [
            "Keep only easy cases so the rate stays comparable to the new target.",
            "Add a second target while leaving the altered denominator unexamined."
          ],
          "rule": "u10-r4",
          "boundary": true
        },
        {
          "id": "u10-x4",
          "kind": "hypo",
          "say": "Unknown outcomes are not automatically successes or failures.",
          "status": "fictional",
          "sourceIds": [
            "I8",
            "I9"
          ],
          "src": "Pay for Performance and Beyond · Categorizing Variants of Goodhart's Law",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A mentoring program claims improved retention using only participants who answered a follow-up survey. Half the original participants did not respond, and their retention is unknown. The stated goal concerns all original participants.",
          "call": "What should the evaluation acknowledge?",
          "options": [
            {
              "text": "Unknown nonrespondent outcomes limit the claim about everyone.",
              "why": "Respondents alone do not establish retention for everyone originally included."
            },
            {
              "text": "Every nonrespondent must have dropped out.",
              "why": "Their outcomes are unknown.",
              "trap": 3
            },
            {
              "text": "Every nonrespondent must still be enrolled.",
              "why": "Their outcomes are unknown.",
              "trap": 3
            },
            {
              "text": "The response rate proves the mentors intended to deceive.",
              "why": "The incomplete data do not establish intent.",
              "trap": 3
            }
          ],
          "answer": 0,
          "rule": "u10-r4",
          "issue": "bounded measurement design",
          "facts": [
            "Half the original participants did not respond",
            "goal concerns all original participants"
          ],
          "transfer": true,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the missing-response fact and the population named by the goal."
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
