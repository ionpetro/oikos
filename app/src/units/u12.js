(function () {
  const unit = {
  "id": "u12",
  "title": "Did the rule make a difference?",
  "subject": "evidence",
  "blurb": "Compare credible alternatives, trace what was assigned, and keep uncertainty visible.",
  "assume": "Cases and numbers are fictional. A causal estimate is not a moral verdict, a guaranteed forecast, or an instruction to experiment on people without appropriate safeguards.",
  "lessons": [
    {
      "id": "u12l1",
      "title": "What would have happened anyway?",
      "objective": "Separate observed change from a defensible causal comparison.",
      "takeaway": "An outcome after a rule is not automatically an outcome caused by that rule.",
      "fieldwork": "Pick a change you credit to a new rule. What else changed, and what comparison could challenge your explanation?",
      "items": [
        {
          "id": "u12-r1",
          "kind": "rule",
          "say": "A causal claim compares an observed outcome with what would have happened without the intervention.",
          "status": "practice",
          "sourceIds": [
            "I14"
          ],
          "src": "Magenta Book: Central Government guidance on evaluation",
          "hook": "The missing comparison is what would have happened without the rule.",
          "title": "Build a counterfactual",
          "elements": [
            "Define the outcome and period",
            "Identify a credible without-intervention comparison",
            "Check other changes and selection",
            "Distinguish calculation from causal assumptions"
          ],
          "ordered": false,
          "distractorElements": [
            "Attribute every before-after change to the new rule"
          ],
          "ex": [
            {
              "facts": "A pilot completion rate rises 50%→70%; a comparison group rises 45%→55% in the same period.",
              "result": "The pilot rises 20 percentage points and the comparison 10. The difference-in-differences is 20−10=10 points."
            },
            {
              "facts": "We want to interpret that 10-point calculation as an effect.",
              "result": "We need a credible common untreated trend and no other differential change explaining the result. Two before/after observations do not establish those assumptions."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A before-after increase alone identifies the effect of a new policy.",
              "a": false,
              "why": "Other changes can explain some or all of the increase."
            },
            {
              "t": "mcq",
              "q": "What does a difference-in-differences calculation subtract?",
              "options": [
                "The comparison group’s change from the pilot’s change",
                "The pilot’s final level from its initial level only",
                "The total sample size from the completion count"
              ],
              "a": "The comparison group’s change from the pilot’s change",
              "why": "It compares changes; a causal reading needs additional assumptions."
            }
          ]
        },
        {
          "id": "u12-t1",
          "kind": "term",
          "say": "The outcome that would occur for the relevant people in the alternative situation being compared.",
          "status": "practice",
          "sourceIds": [
            "I14"
          ],
          "src": "Magenta Book: Central Government guidance on evaluation",
          "hook": "For a policy effect, ask what their outcome would have been without that policy.",
          "term": "Counterfactual",
          "meaning": "The outcome that would occur for the relevant people in the alternative situation being compared.",
          "use": "For a policy effect, ask what their outcome would have been without that policy.",
          "lang": "english"
        },
        {
          "id": "u12-n1",
          "kind": "num",
          "say": "(70−50)−(55−45)=10 percentage points; arithmetic does not establish causal assumptions.",
          "status": "fictional",
          "sourceIds": [
            "I14"
          ],
          "src": "Magenta Book: Central Government guidance on evaluation",
          "hook": "Keep the units and the comparison visible.",
          "ask": "A pilot rate changes 50%→70%; a comparison rate changes 45%→55%. Compute pilot change minus comparison change, in percentage points.",
          "answer": "10 percentage points",
          "alt": [
            "10",
            "10 points",
            "10 pp"
          ],
          "distractors": [
            "20 percentage points",
            "15 percentage points"
          ],
          "speed": false
        },
        {
          "id": "u12-h1",
          "kind": "hypo",
          "say": "Describe the change without assigning an unsupported cause.",
          "status": "fictional",
          "sourceIds": [
            "I14"
          ],
          "src": "Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A college introduces coaching. Completion rises from 50% to 70%. During the same period, it also changes admissions and adds a transport service. No comparison group is available.",
          "call": "What does this establish?",
          "options": [
            {
              "text": "Coaching alone caused a 20-point increase.",
              "why": "The other changes and absent counterfactual prevent that attribution.",
              "trap": 2
            },
            {
              "text": "Completion rose; coaching’s contribution remains uncertain.",
              "why": "The outcome change is observed, but its cause is not isolated."
            },
            {
              "text": "Coaching had exactly zero effect.",
              "why": "Failure to identify an effect is not proof of zero effect.",
              "trap": 3
            },
            {
              "text": "The transport service necessarily explains every gain.",
              "why": "No evidence isolates that alternative explanation either.",
              "trap": 3
            }
          ],
          "answer": 1,
          "rule": "u12-r1",
          "issue": "change versus causation",
          "facts": [
            "also changes admissions and adds a transport service",
            "No comparison group is available"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the other simultaneous changes and the absent comparison."
        },
        {
          "id": "u12-h1b",
          "kind": "hypo",
          "say": "A model can support a conditional estimate without verifying itself.",
          "status": "fictional",
          "sourceIds": [
            "I14"
          ],
          "src": "Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A fictional analysis uses a comparison group and explicitly assumes a common untreated trend, no other differential changes, stable measurement and no spillovers. Pilot change is 20 points and comparison change is 10 points.",
          "call": "Under those assumptions, what is the difference-in-differences estimate?",
          "options": [
            {
              "text": "20 points, ignoring the comparison change.",
              "why": "That is the pilot’s before-after change.",
              "trap": 9
            },
            {
              "text": "30 points, adding the two changes.",
              "why": "The method subtracts the comparison change.",
              "trap": 5
            },
            {
              "text": "10 points, under these assumptions.",
              "why": "20−10=10; the assumptions qualify its causal interpretation."
            },
            {
              "text": "10 points, proving the assumptions are true.",
              "why": "A calculation cannot verify its own identifying assumptions.",
              "trap": 1
            }
          ],
          "answer": 2,
          "rule": "u12-r1",
          "issue": "change versus causation",
          "facts": [
            "explicitly assumes a common untreated trend, no other differential changes, stable measurement and no spillovers"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the assumptions that qualify the causal interpretation."
        },
        {
          "id": "u12-x1",
          "kind": "hypo",
          "say": "Carry the counterfactual question into a new setting.",
          "status": "fictional",
          "sourceIds": [
            "I14"
          ],
          "src": "Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A library starts reminders in June. Returns improve in June, when holiday opening hours also change. Its report has no comparison for what returns would have done without reminders.",
          "call": "Which claim is supported?",
          "options": [
            {
              "text": "Reminders are proven useless.",
              "why": "The report does not establish a zero effect.",
              "trap": 3
            },
            {
              "text": "Reminders caused the entire improvement.",
              "why": "Timing alone does not separate their effect from other changes.",
              "trap": 2
            },
            {
              "text": "Opening hours caused the entire improvement.",
              "why": "That explanation is also unisolated.",
              "trap": 3
            },
            {
              "text": "Returns improved; the reminder effect remains unisolated.",
              "why": "The missing counterfactual limits the causal claim."
            }
          ],
          "answer": 3,
          "rule": "u12-r1",
          "issue": "change versus causation",
          "facts": [
            "holiday opening hours also change",
            "no comparison for what returns would have done without reminders"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the other simultaneous change and the absent without-reminder comparison."
        }
      ]
    },
    {
      "id": "u12l2",
      "title": "An offer is not attendance",
      "objective": "Distinguish random assignment from later participation.",
      "takeaway": "Keep people in their assigned groups when estimating an offer’s effect; participation can introduce selection.",
      "fieldwork": "For a voluntary program, how might people who attend differ from those who decline? How would you report both participation and outcomes?",
      "items": [
        {
          "id": "u12-r2",
          "kind": "rule",
          "say": "Random assignment supports a comparison of assigned offers; voluntary receipt is a different variable and can be selective.",
          "status": "practice",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "Offer, attendance and outcome are three different records.",
          "title": "Follow the assignment",
          "elements": [
            "Record the original assignment",
            "Measure outcomes for both assigned groups",
            "Report who actually participated",
            "Keep the offer effect distinct from the receipt effect"
          ],
          "ordered": false,
          "distractorElements": [
            "Drop nonparticipants to preserve the original random comparison"
          ],
          "ex": [
            {
              "facts": "100 people are randomly offered coaching and 100 are not. Outcomes are recorded for everyone;60 and 50 respectively complete a credential.",
              "result": "The assigned-group difference is 60%−50%=10 percentage points. This intention-to-treat comparison estimates the offer effect, with sampling uncertainty. Chance differences between assigned groups can remain."
            },
            {
              "facts": "Only some offered people attend; attendance is voluntary.",
              "result": "Comparing attenders with nonattenders can mix program effects with prior differences. Randomizing the offer did not randomize that later choice."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Random assignment guarantees every measured characteristic is exactly balanced.",
              "a": false,
              "why": "Chance differences can remain; randomization addresses selection through assignment, not perfect realized balance."
            },
            {
              "t": "mcq",
              "q": "An intention-to-treat comparison follows which groups?",
              "options": [
                "Those originally assigned, whether or not they attended",
                "Only the most enthusiastic attenders",
                "People regrouped by their final outcome"
              ],
              "a": "Those originally assigned, whether or not they attended",
              "why": "Keeping assignment preserves the comparison of the offer."
            }
          ]
        },
        {
          "id": "u12-t2",
          "kind": "term",
          "say": "An outcome comparison using people’s original assignment, regardless of whether they received the offered intervention.",
          "status": "practice",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "For a randomized offer, it targets the effect of that offer rather than automatically the effect of attending.",
          "term": "Intention-to-treat comparison",
          "meaning": "An outcome comparison using people’s original assignment, regardless of whether they received the offered intervention.",
          "use": "For a randomized offer, it targets the effect of that offer rather than automatically the effect of attending.",
          "lang": "english",
          "alt": [
            "ITT comparison",
            "intention to treat"
          ]
        },
        {
          "id": "u12-so2",
          "kind": "sort",
          "say": "Track assignment, receipt and outcome separately.",
          "status": "fictional",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "Classify the stated facts, not the person.",
          "q": "Classify what the record describes.",
          "buckets": [
            "Assignment",
            "Receipt",
            "Outcome"
          ],
          "items": [
            {
              "text": "A lottery offers Mina a workshop place.",
              "bucket": "Assignment",
              "why": "The lottery determines the offer."
            },
            {
              "text": "Mina attends two sessions.",
              "bucket": "Receipt",
              "why": "This records what she actually receives."
            },
            {
              "text": "Mina completes a credential at follow-up.",
              "bucket": "Outcome",
              "why": "This is the measured result."
            },
            {
              "text": "Leo receives workshop notes from a friend.",
              "bucket": "Receipt",
              "why": "This records indirect exposure; original assignment is tracked separately."
            }
          ]
        },
        {
          "id": "u12-h2",
          "kind": "hypo",
          "say": "The causal question determines which groups to compare.",
          "status": "fictional",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A lottery offers 100 people tutoring;100 receive no offer. Attendance is voluntary. Outcomes are recorded for all 200 people. The stated question is the effect of offering tutoring.",
          "call": "Which comparison matches that question?",
          "options": [
            {
              "text": "Compare the two original assignment groups.",
              "why": "This keeps assignment and targets the offer effect."
            },
            {
              "text": "Only attenders versus everyone not offered tutoring.",
              "why": "Voluntary attendance can select a different group.",
              "trap": 2
            },
            {
              "text": "Only successful attenders versus unsuccessful controls.",
              "why": "Selecting by outcome destroys the intended comparison.",
              "trap": 5
            },
            {
              "text": "Only the offered people before and after tutoring.",
              "why": "This discards the randomized comparison group.",
              "trap": 9
            }
          ],
          "answer": 0,
          "rule": "u12-r2",
          "issue": "assignment versus receipt",
          "facts": [
            "Attendance is voluntary",
            "effect of offering tutoring"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the participation condition and the stated offer-effect question."
        },
        {
          "id": "u12-h2b",
          "kind": "hypo",
          "say": "A changed adherence condition changes which comparison is available.",
          "status": "fictional",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "In another trial, every person receives exactly the version assigned: all offered people attend and none of the others do. Outcomes are complete. Assume no spillovers and no other difference created by assignment.",
          "call": "Do assignment and receipt identify different groups here?",
          "options": [
            {
              "text": "Yes, because they can never coincide.",
              "why": "The scenario explicitly says they coincide.",
              "trap": 7
            },
            {
              "text": "No, because the scenario specifies complete adherence.",
              "why": "Under these conditions the assigned groups also match receipt."
            },
            {
              "text": "Yes, because outcome records must be missing.",
              "why": "The scenario states outcomes are complete.",
              "trap": 3
            },
            {
              "text": "No, because every trial proves universal effectiveness.",
              "why": "Coinciding groups says nothing about a universal effect.",
              "trap": 1
            }
          ],
          "answer": 1,
          "rule": "u12-r2",
          "issue": "assignment versus receipt",
          "facts": [
            "every person receives exactly the version assigned"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "grid": true,
          "findAsk": "Tap the condition saying assigned treatment and actual receipt coincide."
        },
        {
          "id": "u12-x2",
          "kind": "hypo",
          "say": "Voluntary uptake can matter without invalidating every evaluation.",
          "status": "fictional",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A firm randomly offers a travel subsidy. Some employees decline it. An analyst discards decliners and calls the remaining comparison “the randomized effect of being offered a subsidy.”",
          "call": "What is the error?",
          "options": [
            {
              "text": "Decliners necessarily have identical outcomes to users.",
              "why": "That is not established.",
              "trap": 3
            },
            {
              "text": "Randomization makes recording uptake unnecessary.",
              "why": "Uptake matters for understanding what was delivered.",
              "trap": 5
            },
            {
              "text": "Dropping decliners replaces the original assigned-group comparison.",
              "why": "Dropping decliners no longer compares the original assigned groups."
            },
            {
              "text": "A voluntary program can never be evaluated.",
              "why": "An offer can be evaluated even with incomplete uptake.",
              "trap": 7
            }
          ],
          "answer": 2,
          "rule": "u12-r2",
          "issue": "assignment versus receipt",
          "facts": [
            "Some employees decline it",
            "discards decliners"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the voluntary nonparticipation and the analyst’s exclusion of those people."
        }
      ]
    },
    {
      "id": "u12l3",
      "title": "Effects cross boundaries",
      "objective": "Identify exposure across groups and limits to transferring a result.",
      "takeaway": "Who else receives exposure, and what changes in the new setting?",
      "fieldwork": "Choose a program tested elsewhere. Name one mechanism, resource or access condition you would check before expecting the same effect.",
      "items": [
        {
          "id": "u12-r3",
          "kind": "rule",
          "say": "Spillovers can affect comparison groups; an effect in one setting need not stay the same in another.",
          "status": "practice",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "The boundary drawn on a study diagram may not stop real contact.",
          "title": "Check exposure and context",
          "elements": [
            "Map exposure beyond assigned recipients",
            "State the comparison actually created",
            "Check mechanisms and conditions in a new setting",
            "Distinguish useful evidence from a guaranteed forecast"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume random assignment blocks all contact between groups"
          ],
          "ex": [
            {
              "facts": "Tutoring recipients share lesson notes with comparison students.",
              "result": "The groups no longer differ only by isolated exposure. Sharing may affect the comparison; measure it rather than assume zero spillovers."
            },
            {
              "facts": "An online pilot succeeds where everyone has reliable internet. A proposed site has unreliable connections.",
              "result": "External validity asks whether the result carries to the new setting. Access and delivery conditions need checking."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Random assignment prevents people from sharing an intervention’s benefits.",
              "a": false,
              "why": "Assignment does not prevent interactions after assignment."
            },
            {
              "t": "mcq",
              "q": "Which change most directly raises a transfer question for the online pilot?",
              "options": [
                "The new site lacks reliable internet",
                "The report uses a different font",
                "The same outcome is written in a table"
              ],
              "a": "The new site lacks reliable internet",
              "why": "A delivery condition that supports the mechanism has changed."
            }
          ]
        },
        {
          "id": "u12-t3",
          "kind": "term",
          "say": "The extent to which a finding is applicable to other populations, settings, times or implementations.",
          "status": "practice",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "A credible result in one place does not by itself prove the same effect elsewhere.",
          "term": "External validity",
          "meaning": "The extent to which a finding is applicable to other populations, settings, times or implementations.",
          "use": "A credible result in one place does not by itself prove the same effect elsewhere.",
          "lang": "english"
        },
        {
          "id": "u12-p3",
          "kind": "pairs",
          "say": "Name the boundary that changed before extending a claim.",
          "status": "practice",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "Use the distinguishing condition, not just a familiar label.",
          "pairs": [
            {
              "l": "Controls use notes shared by participants",
              "r": "Cross-group exposure"
            },
            {
              "l": "New site lacks the pilot’s internet access",
              "r": "Changed implementation condition"
            },
            {
              "l": "The sample omits the group now being served",
              "r": "Changed target population"
            },
            {
              "l": "A short pilot is used to predict five-year effects",
              "r": "Changed time horizon"
            }
          ]
        },
        {
          "id": "u12-h3",
          "kind": "argue",
          "say": "A contrast must describe the exposure actually present.",
          "status": "fictional",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "Students are individually randomized to a study workshop or no offer. Workshop students share the materials with students in the no-offer group. The report claims it measures the effect versus completely unexposed students.",
          "call": "What needs correction?",
          "options": [
            {
              "text": "The assignment must have been fraudulent.",
              "why": "Sharing after assignment does not establish fraud.",
              "trap": 3
            },
            {
              "text": "The comparison group was not completely unexposed.",
              "why": "The reported exposure contrast is inaccurate."
            },
            {
              "text": "Sharing guarantees the estimated effect is exactly zero.",
              "why": "Its magnitude depends on what exposure changes.",
              "trap": 7
            },
            {
              "text": "All outcomes should be deleted from the analysis.",
              "why": "The evidence needs appropriate interpretation, not automatic deletion.",
              "trap": 10
            }
          ],
          "answer": 1,
          "rule": "u12-r3",
          "issue": "exposure and transport",
          "facts": [
            "share the materials with students in the no-offer group"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the cross-group exposure that contradicts the report’s unexposed-control claim."
        },
        {
          "id": "u12-h3b",
          "kind": "argue",
          "say": "Resolving one limitation does not resolve every limitation.",
          "status": "fictional",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A different workshop trial documents that comparison students received no workshop content through any route during follow-up. The report makes only the narrow claim that this particular cross-group sharing problem was absent.",
          "call": "Is that narrow claim supported?",
          "options": [
            {
              "text": "Yes, because all possible evaluation problems are eliminated.",
              "why": "No sharing does not resolve every other limitation.",
              "trap": 1
            },
            {
              "text": "No, because every trial must contain sharing.",
              "why": "The supplied evidence contradicts that absolute claim.",
              "trap": 7
            },
            {
              "text": "Yes, because that absence is documented.",
              "why": "The evidence supports absence of this specific sharing problem."
            },
            {
              "text": "No, because randomization never provides useful information.",
              "why": "That is an unsupported universal rejection.",
              "trap": 7
            }
          ],
          "answer": 2,
          "rule": "u12-r3",
          "issue": "exposure and transport",
          "facts": [
            "comparison students received no workshop content through any route during follow-up"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "grid": true,
          "findAsk": "Tap the recorded absence of workshop exposure in the comparison group."
        },
        {
          "id": "u12-x3",
          "kind": "hypo",
          "say": "Use earlier evidence to inform a new test, not erase context.",
          "status": "fictional",
          "sourceIds": [
            "E8",
            "I14"
          ],
          "src": "Using Randomization in Development Economics Research: A Toolkit · Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "An online job-search pilot improved outcomes in a connected urban sample. A college wants to promise the same gain to rural learners who often lack internet access. It has no local delivery evidence.",
          "call": "Which response fits the evidence?",
          "options": [
            {
              "text": "Check local access and delivery before promising the same gain.",
              "why": "The proposed setting changes a condition needed to receive the program."
            },
            {
              "text": "Promise the same gain because the first study was credible.",
              "why": "Credibility in the original setting does not guarantee transport.",
              "trap": 7
            },
            {
              "text": "Discard the pilot as useless in every setting.",
              "why": "The result can still inform mechanisms and further inquiry.",
              "trap": 7
            },
            {
              "text": "Assume rural learners dislike learning.",
              "why": "The facts concern access, not preferences or character.",
              "trap": 3
            }
          ],
          "answer": 0,
          "rule": "u12-r3",
          "issue": "exposure and transport",
          "facts": [
            "rural learners who often lack internet access",
            "no local delivery evidence"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the changed access condition and the absence of local delivery evidence."
        }
      ]
    },
    {
      "id": "u12l4",
      "title": "Decide with uncertainty visible",
      "objective": "Combine a credible effect estimate, costs, distribution and a stated decision rule.",
      "takeaway": "An evaluation can narrow uncertainty while leaving value choices and implementation risks for deliberation.",
      "fieldwork": "Design a small evaluation question for a rule you might change. Who should shape its safeguards, outcomes, distributional questions and stopping conditions?",
      "items": [
        {
          "id": "u12-r4",
          "kind": "rule",
          "say": "Separate what the intervention changed from whether its costs, distribution and uncertainty justify it under an explicit objective.",
          "status": "practice",
          "sourceIds": [
            "I13",
            "I14"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government · Magenta Book: Central Government guidance on evaluation",
          "hook": "Keep the effect estimate, decision threshold and value judgment distinct.",
          "title": "Evaluate the claim and the decision",
          "elements": [
            "State the outcome and decision criterion",
            "Assess the comparison and uncertainty",
            "Include incremental costs and affected groups",
            "Report limits and possible revisions"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat a favorable point estimate as a guaranteed outcome"
          ],
          "ex": [
            {
              "facts": "A credible fictional estimate is 10 additional completions; incremental cost is 600 units over the same period.",
              "result": "The point estimate of cost per additional completion is 600÷10=60 units. Dividing by total completions answers a different question."
            },
            {
              "facts": "A sensitivity range is 8–12 additional completions with the same 600 cost. An agreed ceiling is 70 units per additional completion.",
              "result": "At 8 the cost is 75; at 12 it is 50. The estimate is not below the ceiling throughout the range."
            },
            {
              "facts": "A small study reports an uncertain estimate compatible with gains, no change and losses.",
              "result": "That does not prove exactly zero effect. Describe the uncertainty and the information a decision still needs."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "An uncertain estimate proves the true effect is exactly zero.",
              "a": false,
              "why": "A range allowing several effects does not establish one exact effect."
            },
            {
              "t": "mcq",
              "q": "Which denominator answers cost per additional completion?",
              "options": [
                "All completions observed in the pilot",
                "The estimated completions caused by the intervention",
                "Only the number attending the launch"
              ],
              "a": "The estimated completions caused by the intervention",
              "why": "The word additional refers to the estimated causal increment."
            }
          ],
          "boundary": true
        },
        {
          "id": "u12-st4",
          "kind": "steps",
          "say": "Plan the comparison before judging the result.",
          "status": "practice",
          "sourceIds": [
            "I13",
            "I14"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government · Magenta Book: Central Government guidance on evaluation",
          "hook": "Use the routine as a checking aid, not a universal script.",
          "title": "A practical evaluation routine",
          "steps": [
            "Define the question and decision criterion",
            "Plan a credible comparison and safeguards",
            "Record assignment, delivery and outcomes",
            "Assess effects, uncertainty, costs and distribution",
            "Communicate the conclusion and its limits"
          ],
          "distractors": [
            "Choose only the most favorable outcome after seeing results",
            "Erase people whose outcomes complicate the story"
          ],
          "applyTo": {
            "facts": "The question, criterion, comparison and safeguards are agreed. Delivery is starting; outcome data have not yet been collected.",
            "stop": "Record assignment, delivery and outcomes",
            "why": "The next step is to collect the planned records before analyzing outcomes."
          },
          "boundary": true
        },
        {
          "id": "u12-n4",
          "kind": "num",
          "say": "600÷10=60; this point estimate still inherits uncertainty in the effect estimate.",
          "status": "fictional",
          "sourceIds": [
            "I13",
            "I14"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government · Magenta Book: Central Government guidance on evaluation",
          "hook": "Keep the units and the comparison visible.",
          "ask": "Incremental program cost is 600 units. The stated credible point estimate is 10 additional completions over the same period. What is cost per additional completion?",
          "answer": "60 units",
          "alt": [
            "60",
            "60 units per additional completion"
          ],
          "distractors": [
            "10 units",
            "6000 units"
          ],
          "speed": false,
          "boundary": true
        },
        {
          "id": "u12-h4",
          "kind": "hypo",
          "say": "Check the boundary of a stated criterion, not only the central estimate.",
          "status": "fictional",
          "sourceIds": [
            "I13",
            "I14"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government · Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A committee’s stated test requires cost per additional completion to stay at or below 70 units across an agreed sensitivity range. Cost is 600 and additional completions range from 8 to 12.",
          "call": "Does this option pass that stated test?",
          "options": [
            {
              "text": "Yes, because the central estimate 10 gives 60.",
              "why": "The test applies throughout the range, not only at its center.",
              "trap": 2
            },
            {
              "text": "Yes, because any positive effect makes cost irrelevant.",
              "why": "That discards the stated cost criterion.",
              "trap": 4
            },
            {
              "text": "No, because the 8-completion case costs 75 each.",
              "why": "600÷8=75 exceeds the 70-unit ceiling."
            },
            {
              "text": "No, because every uncertain program must be rejected.",
              "why": "Only this conditional test is at issue, not a universal ban.",
              "trap": 1
            }
          ],
          "answer": 2,
          "rule": "u12-r4",
          "issue": "evaluation and uncertainty",
          "facts": [
            "requires cost per additional completion to stay at or below 70 units across an agreed sensitivity range",
            "Cost is 600 and additional completions range from 8 to 12"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "grid": true,
          "findAsk": "Tap the test’s full-range requirement and the cost/effect range being tested."
        },
        {
          "id": "u12-tr4",
          "kind": "trap",
          "say": "Name the denominator that matches the question.",
          "status": "fictional",
          "sourceIds": [
            "I13",
            "I14"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government · Magenta Book: Central Government guidance on evaluation",
          "hook": "Repair the reasoning without inventing new facts.",
          "stem": "A pilot has 60 total completions. A credible comparison estimates 10 of them are additional. Incremental program cost is 600 units in the same period.",
          "wrong": "Cost per additional completion is 10 units because 600÷60=10.",
          "right": "Using the estimated additional 10 gives 60 units per additional completion.",
          "why": "The wrong denominator counts completions that would have happened without the program.",
          "cat": 4,
          "fixDistractors": [
            "Use zero cost because some people would complete anyway.",
            "Multiply 600 by 10 because additional effects require multiplication."
          ],
          "rule": "u12-r4",
          "boundary": true
        },
        {
          "id": "u12-x4",
          "kind": "argue",
          "say": "Evidence informs deliberation without silently choosing every value.",
          "status": "fictional",
          "sourceIds": [
            "I13",
            "I14"
          ],
          "src": "The Green Book: Appraisal and evaluation in central government · Magenta Book: Central Government guidance on evaluation",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A council has a credible estimate that a fee change reduces congestion. The evaluation has not assessed who bears the costs, access barriers or the council’s competing objectives. A speaker says the effect alone proves adoption is ethically required.",
          "call": "Which response is justified?",
          "options": [
            {
              "text": "Reducing congestion is never relevant.",
              "why": "It is relevant evidence, even if insufficient for the full judgment.",
              "trap": 7
            },
            {
              "text": "The effect informs the decision; distribution and objectives remain unresolved.",
              "why": "A causal result does not determine how to weigh all affected interests."
            },
            {
              "text": "The estimate proves all affected groups benefit.",
              "why": "It measures congestion, not every group’s complete experience.",
              "trap": 5
            },
            {
              "text": "Economic evidence can resolve only arithmetic and never causal questions.",
              "why": "Credible evaluation can inform causation as well as arithmetic.",
              "trap": 5
            }
          ],
          "answer": 1,
          "rule": "u12-r4",
          "issue": "evaluation and uncertainty",
          "facts": [
            "has not assessed who bears the costs, access barriers or the council’s competing objectives"
          ],
          "transfer": true,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the distributional and objective questions that the evaluation has not assessed."
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
