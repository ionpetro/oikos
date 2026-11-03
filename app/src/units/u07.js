(function () {
  const unit = {
  "id": "u07",
  "title": "Share a resource",
  "subject": "commons",
  "blurb": "Recognize shared benefits, limited stocks and workable rules.",
  "assume": "All cases and numbers are fictional. Payoff models do not predict everyone’s motives. Resource type and ownership are distinct.",
  "lessons": [
    {
      "id": "u07l1",
      "title": "What kind of shared thing?",
      "objective": "Classify rivalry and feasible exclusion.",
      "takeaway": "Ownership does not determine whether use depletes availability.",
      "fieldwork": "Describe the capacity and access rules of one shared resource.",
      "items": [
        {
          "id": "u07-r1",
          "kind": "rule",
          "say": "Rivalry concerns available use; excludability concerns access. Neither determines the best ownership form.",
          "status": "model",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "You can copy the guide; you cannot share the last bite.",
          "title": "Check rivalry and exclusion",
          "elements": [
            "Check whether use reduces others’ availability",
            "Check whether access can be restricted",
            "State the capacity assumed"
          ],
          "ordered": false,
          "distractorElements": [
            "Classify all government services as public goods"
          ],
          "ex": [
            {
              "facts": "A digital guide has unlimited copying capacity; preventing access is impractical under the current technology.",
              "result": "It is a pure public good: non-rival and non-excludable."
            },
            {
              "facts": "A subscription archive has spare capacity; fish in a lake with impractical access control are depleted by catches.",
              "result": "The archive is a club good; the fish stock is a common-pool resource."
            },
            {
              "facts": "A sandwich can be sold to one person and is used up when eaten.",
              "result": "It is a private good: excludable and rival."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Government ownership makes a sandwich non-rival.",
              "a": false,
              "why": "Eating it still removes it from others."
            },
            {
              "t": "mcq",
              "q": "A password-protected archive has spare capacity. Which description fits?",
              "options": [
                "Excludable and non-rival",
                "Non-excludable and rival",
                "Rival because access costs money"
              ],
              "a": "Excludable and non-rival",
              "why": "Access can be restricted without one reading reducing another."
            }
          ]
        },
        {
          "id": "u07-t1",
          "kind": "term",
          "say": "A resource whose use reduces others’ available use and for which excluding users is difficult.",
          "status": "practice",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "An open fish stock can be depleted regardless of its ownership label.",
          "term": "Common-pool resource",
          "meaning": "A resource whose use reduces others’ available use and for which excluding users is difficult.",
          "use": "An open fish stock can be depleted regardless of its ownership label.",
          "lang": "english",
          "alt": [
            "common pool resource"
          ]
        },
        {
          "id": "u07-so1",
          "kind": "sort",
          "say": "Use the two characteristics, not the ownership label.",
          "status": "fictional",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Classify the stated facts, not the person.",
          "q": "Classify using the stated access and capacity.",
          "buckets": [
            "Pure public good",
            "Club good",
            "Common-pool resource",
            "Private good"
          ],
          "items": [
            {
              "text": "A guide can be copied without limit, and restricting access is impractical.",
              "bucket": "Pure public good",
              "why": "It is non-rival and non-excludable here."
            },
            {
              "text": "A members-only archive has ample capacity.",
              "bucket": "Club good",
              "why": "Access is restricted; consumption is non-rival."
            },
            {
              "text": "A lake has a finite fish stock and restricting access is impractical.",
              "bucket": "Common-pool resource",
              "why": "Catches reduce the stock and exclusion is impractical."
            },
            {
              "text": "A purchased sandwich is eaten by its buyer.",
              "bucket": "Private good",
              "why": "It is excludable and consumed by use."
            }
          ]
        },
        {
          "id": "u07-h1",
          "kind": "hypo",
          "say": "Creation cost does not make later use rival.",
          "status": "fictional",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A town map is online; preventing access is impractical under the current technology. Copying it does not reduce availability; server capacity is ample.",
          "call": "Which description fits?",
          "options": [
            {
              "text": "A private good because creating it cost money.",
              "why": "Creation cost does not establish rivalry or exclusion.",
              "trap": 5
            },
            {
              "text": "A pure public good in this setting.",
              "why": "Exclusion is impractical and use is non-rival."
            },
            {
              "text": "A common-pool resource because it is shared.",
              "why": "Sharing does not imply depletion.",
              "trap": 5
            },
            {
              "text": "A club good because towns have residents.",
              "why": "No membership restriction is stated.",
              "trap": 3
            }
          ],
          "answer": 1,
          "rule": "u07-r1",
          "issue": "rivalry and exclusion",
          "facts": [
            "preventing access is impractical under the current technology",
            "Copying it does not reduce availability"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the phrases establishing impractical exclusion and non-rival copying."
        },
        {
          "id": "u07-h1b",
          "kind": "hypo",
          "say": "Access can change while rivalry stays fixed.",
          "status": "fictional",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "New access-control technology makes an enforceable subscription feasible for the map. Reading it still leaves every copy available, with ample server capacity.",
          "call": "What changes?",
          "options": [
            {
              "text": "It becomes rival because people pay.",
              "why": "Payment changes access, not the stated rivalry.",
              "trap": 5
            },
            {
              "text": "It becomes an open fish stock.",
              "why": "Reading does not deplete the map.",
              "trap": 10
            },
            {
              "text": "It becomes a club good.",
              "why": "Exclusion is feasible while use remains non-rival."
            },
            {
              "text": "It remains non-excludable because maps are useful.",
              "why": "Usefulness does not remove the subscription restriction.",
              "trap": 5
            }
          ],
          "answer": 2,
          "rule": "u07-r1",
          "issue": "rivalry and exclusion",
          "facts": [
            "New access-control technology makes an enforceable subscription feasible",
            "Reading it still leaves every copy available"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the changed access condition and the unchanged copying condition."
        },
        {
          "id": "u07-x1",
          "kind": "hypo",
          "say": "Shared ownership does not remove physical capacity.",
          "status": "fictional",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A workshop has one drill. While one member uses it, nobody else can. A booking system can restrict use to members.",
          "call": "Which description fits?",
          "options": [
            {
              "text": "Rival and excludable.",
              "why": "Use occupies the only drill, and access can be restricted."
            },
            {
              "text": "Non-rival because ownership is shared.",
              "why": "Shared ownership does not add another drill.",
              "trap": 5
            },
            {
              "text": "Non-excludable because booking takes effort.",
              "why": "The system can restrict access despite that effort.",
              "trap": 3
            },
            {
              "text": "A pure public good because it is useful.",
              "why": "Usefulness is not the classification test.",
              "trap": 4
            }
          ],
          "answer": 0,
          "rule": "u07-r1",
          "issue": "rivalry and exclusion",
          "facts": [
            "While one member uses it, nobody else can",
            "restrict use to members"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the capacity condition and the membership restriction."
        }
      ]
    },
    {
      "id": "u07l2",
      "title": "Private return, shared benefit",
      "objective": "Compare individual and group returns.",
      "takeaway": "A material-payoff tension is not proof of universal selfishness.",
      "fieldwork": "Name a task whose benefits reach someone who did not provide its effort.",
      "items": [
        {
          "id": "u07-r2",
          "kind": "rule",
          "say": "A contribution can benefit the group while returning less to its contributor than it costs.",
          "status": "model",
          "sourceIds": [
            "I1"
          ],
          "src": "Public good games and cooperation (The Economy 2.0, §4.6)",
          "hook": "Count your share and everyone’s shares separately.",
          "title": "Count whose return",
          "elements": [
            "Count the contributor’s cost",
            "Count their own return",
            "Count benefits to all participants",
            "Separate payoff from predicted behavior"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume everyone values only their own tokens"
          ],
          "ex": [
            {
              "facts": "One token contributed returns 0.5 tokens to each of four people.",
              "result": "Private net return is−0.5; group net return is 4×0.5−1=+1."
            },
            {
              "facts": "A different fund returns 1.2 privately for each token contributed.",
              "result": "With no other costs, private net return becomes+0.2."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Positive group returns prove everyone will contribute.",
              "a": false,
              "why": "Preferences, expectations and rules also matter."
            },
            {
              "t": "mcq",
              "q": "A contribution costs 1 and returns 1.2 privately. What is its private net return?",
              "options": [
                "−0.2",
                "+0.2",
                "+1.2"
              ],
              "a": "+0.2",
              "why": "Subtract the one-token contribution cost."
            }
          ]
        },
        {
          "id": "u07-t2",
          "kind": "term",
          "say": "Benefiting from a cooperative activity without contributing to its provision.",
          "status": "practice",
          "sourceIds": [
            "I1"
          ],
          "src": "Public good games and cooperation (The Economy 2.0, §4.6)",
          "hook": "Describe the contribution pattern without inventing a person’s motive.",
          "term": "Free riding",
          "meaning": "Benefiting from a cooperative activity without contributing to its provision.",
          "use": "Describe the contribution pattern without inventing a person’s motive.",
          "lang": "english"
        },
        {
          "id": "u07-n2",
          "kind": "num",
          "say": "Forty contributions ×0.5 gives 20 tokens per team.",
          "status": "fictional",
          "sourceIds": [
            "I1"
          ],
          "src": "Public good games and cooperation (The Economy 2.0, §4.6)",
          "hook": "Keep the units and the comparison visible.",
          "ask": "Four teams each contribute 10 tokens. Each token contributed returns 0.5 tokens to each team. No tokens are retained outside the fund. How many tokens does each team receive?",
          "answer": "20 tokens",
          "alt": [
            "20",
            "twenty tokens"
          ],
          "distractors": [
            "5 tokens",
            "40 tokens"
          ],
          "speed": false
        },
        {
          "id": "u07-h2",
          "kind": "hypo",
          "say": "State whose payoff you calculate.",
          "status": "fictional",
          "sourceIds": [
            "I1"
          ],
          "src": "Public good games and cooperation (The Economy 2.0, §4.6)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "In a one-round fund, each contribution costs its contributor 1 token and returns 0.5 to each of four teams, including the contributor. Others’ contributions are fixed.",
          "call": "What is the private effect of one extra contribution?",
          "options": [
            {
              "text": "A gain of 1 token.",
              "why": "That is the group’s net gain, not the contributor’s.",
              "trap": 4
            },
            {
              "text": "A loss of 0.5 tokens.",
              "why": "The contributor pays 1 and receives 0.5."
            },
            {
              "text": "A gain of 2 tokens.",
              "why": "That sums all benefits and omits the cost.",
              "trap": 9
            },
            {
              "text": "No change because everyone benefits.",
              "why": "The private cost and return differ.",
              "trap": 5
            }
          ],
          "answer": 1,
          "rule": "u07-r2",
          "issue": "private and group returns",
          "facts": [
            "costs its contributor 1 token",
            "returns 0.5 to each of four teams"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the stated private cost and per-team return."
        },
        {
          "id": "u07-h2b",
          "kind": "hypo",
          "say": "Recalculate after a payoff changes.",
          "status": "fictional",
          "sourceIds": [
            "I1"
          ],
          "src": "Public good games and cooperation (The Economy 2.0, §4.6)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A new fund returns 1.2 tokens privately for each token contributed. There are no other costs or risks. The team values only its own tokens.",
          "call": "Does the earlier private-loss conclusion still apply?",
          "options": [
            {
              "text": "Yes, because all shared funds cause private losses.",
              "why": "The given private return exceeds its cost.",
              "trap": 7
            },
            {
              "text": "No, because private net return is+0.2.",
              "why": "The changed return reverses the earlier comparison."
            },
            {
              "text": "Yes, because four teams must share equally.",
              "why": "No such condition is stated for this fund.",
              "trap": 3
            },
            {
              "text": "No, because the team must value others equally.",
              "why": "The private calculation needs no assumption of altruism.",
              "trap": 1
            }
          ],
          "answer": 1,
          "rule": "u07-r2",
          "issue": "private and group returns",
          "facts": [
            "returns 1.2 tokens privately",
            "no other costs or risks"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "grid": true,
          "findAsk": "Tap the private-return amount and the absence of other costs or risks."
        },
        {
          "id": "u07-x2",
          "kind": "hypo",
          "say": "A new setting needs the same accounting boundary.",
          "status": "fictional",
          "sourceIds": [
            "I1"
          ],
          "src": "Public good games and cooperation (The Economy 2.0, §4.6)",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "Four neighbors use a shared noticeboard. One contributed hour costs its contributor 10 payoff units and gives 4 units to each neighbor, including the contributor. Units are comparable and there are no other effects.",
          "call": "Which calculation fits one contributed hour?",
          "options": [
            {
              "text": "Private gain 6; group loss 6.",
              "why": "This reverses the comparison.",
              "trap": 5
            },
            {
              "text": "Private gain 4; group gain 16.",
              "why": "Both omit the contribution cost.",
              "trap": 9
            },
            {
              "text": "Private loss 10; group gain 4.",
              "why": "This omits the contributor’s return and other neighbors.",
              "trap": 9
            },
            {
              "text": "Private loss 6; group gain 6.",
              "why": "Private:4−10=−6. Group:4×4−10=6."
            }
          ],
          "answer": 3,
          "rule": "u07-r2",
          "issue": "private and group returns",
          "facts": [
            "costs its contributor 10 payoff units",
            "gives 4 units to each neighbor"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the contributed hour’s cost and benefit per neighbor."
        }
      ]
    },
    {
      "id": "u07l3",
      "title": "Make rules usable",
      "objective": "Diagnose governance conditions rather than choose a magic ownership label.",
      "takeaway": "Rules need resource fit, participation, monitoring and a way to resolve disputes.",
      "fieldwork": "Ask who checks your shared resource and how an incorrect record can be challenged.",
      "items": [
        {
          "id": "u07-r3",
          "kind": "rule",
          "say": "A shared-resource rule must fit its resource and users; an ownership label is not a complete design.",
          "status": "practice",
          "sourceIds": [
            "I3"
          ],
          "src": "Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "A rule on the wall needs a way to work.",
          "title": "Inspect the arrangements",
          "elements": [
            "Identify the resource and authorized users",
            "Check limits against local conditions",
            "Make monitoring and dispute resolution workable",
            "Include affected users in revision"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume an ownership label guarantees success"
          ],
          "ex": [
            {
              "facts": "A cooperative sets water turns but cannot observe withdrawals.",
              "result": "It needs workable records before relying on compliance claims."
            },
            {
              "facts": "A copied quota comes from a basin with different seasonal flow.",
              "result": "Check local conditions before adopting the number."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Successful governance requires one universal ownership form.",
              "a": false,
              "why": "Ostrom documents diverse arrangements, not one recipe."
            },
            {
              "t": "mcq",
              "q": "A withdrawal reading is disputed. Which feature helps?",
              "options": [
                "An accessible correction process",
                "An automatic permanent ban",
                "A new ownership slogan"
              ],
              "a": "An accessible correction process",
              "why": "It allows errors and actual breaches to be distinguished."
            }
          ]
        },
        {
          "id": "u07-t3",
          "kind": "term",
          "say": "Arrangements for making, implementing, monitoring and revising decisions about shared activity.",
          "status": "practice",
          "sourceIds": [
            "I3"
          ],
          "src": "Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Ask who decides, who monitors, and who can challenge a record.",
          "term": "Governance",
          "meaning": "Arrangements for making, implementing, monitoring and revising decisions about shared activity.",
          "use": "Ask who decides, who monitors, and who can challenge a record.",
          "lang": "english"
        },
        {
          "id": "u07-st3",
          "kind": "steps",
          "say": "Check the resource before choosing its limit.",
          "status": "practice",
          "sourceIds": [
            "I3"
          ],
          "src": "Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Use the routine as a checking aid, not a universal script.",
          "title": "A resource-rule review routine",
          "steps": [
            "Describe the resource and users",
            "Check conditions and current use",
            "Discuss a feasible rule and review route",
            "Try it and review recorded effects"
          ],
          "distractors": [
            "Copy a quota without checking local supply",
            "Punish a disputed reading before checking it"
          ],
          "applyTo": {
            "facts": "The group has identified its canal and farms but has not checked seasonal flow.",
            "stop": "Check conditions and current use",
            "why": "The feasible limit depends on resource conditions."
          }
        },
        {
          "id": "u07-h3",
          "kind": "hypo",
          "say": "A disputed record calls for an evidence check.",
          "status": "fictional",
          "sourceIds": [
            "I3"
          ],
          "src": "Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A canal group has an accessible correction process. A farmer reports that a meter reading includes a neighbor’s withdrawal. There is no urgent safety risk.",
          "call": "What uses the existing process?",
          "options": [
            {
              "text": "Permanently exclude the farmer before checking.",
              "why": "This bypasses the available correction process.",
              "trap": 2
            },
            {
              "text": "Cancel every withdrawal rule forever.",
              "why": "One disputed record does not prove no rule can work.",
              "trap": 7
            },
            {
              "text": "Check the reading through the correction process.",
              "why": "It can distinguish an error from an actual breach."
            },
            {
              "text": "Assume objecting proves dishonesty.",
              "why": "The objection does not establish motive.",
              "trap": 3
            }
          ],
          "answer": 2,
          "rule": "u07-r3",
          "issue": "workable governance",
          "facts": [
            "accessible correction process",
            "meter reading includes a neighbor’s withdrawal"
          ],
          "transfer": false,
          "callType": "decision",
          "findAsk": "Tap the available review route and the claimed meter error."
        },
        {
          "id": "u07-h3b",
          "kind": "hypo",
          "say": "Verification can change the justified response.",
          "status": "fictional",
          "sourceIds": [
            "I3"
          ],
          "src": "Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "The check confirms a reading was wrongly assigned. The governing rules require incorrect records to be corrected before sanctions.",
          "call": "What follows?",
          "options": [
            {
              "text": "Correct the record before considering a sanction.",
              "why": "This applies the verified fact and stated procedure."
            },
            {
              "text": "Keep the sanction to preserve appearances.",
              "why": "Appearances do not override the correction requirement.",
              "trap": 4
            },
            {
              "text": "Conclude all other users complied.",
              "why": "One correction does not establish everyone’s behavior.",
              "trap": 7
            },
            {
              "text": "Publish unrelated private details.",
              "why": "Those details are not necessary to correct the reading.",
              "trap": 10
            }
          ],
          "answer": 0,
          "rule": "u07-r3",
          "issue": "workable governance",
          "facts": [
            "reading was wrongly assigned",
            "corrected before sanctions"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the verified error and the rule about correction timing."
        },
        {
          "id": "u07-x3",
          "kind": "hypo",
          "say": "Copy the question, not an unchecked quota.",
          "status": "fictional",
          "sourceIds": [
            "I3"
          ],
          "src": "Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A tool group copies a ten-user workshop rule from another group. Its own safe capacity is six. Members can revise the rule before reopening.",
          "call": "Which response addresses the mismatch?",
          "options": [
            {
              "text": "Keep ten because it worked elsewhere.",
              "why": "The earlier setting does not establish this room’s capacity.",
              "trap": 11
            },
            {
              "text": "Agree a feasible limit first.",
              "why": "The known capacity and available revision route guide the next step."
            },
            {
              "text": "Assume private ownership expands the room.",
              "why": "Ownership does not create space.",
              "trap": 3
            },
            {
              "text": "Remove all limits because participation matters.",
              "why": "Participation does not remove the capacity constraint.",
              "trap": 5
            }
          ],
          "answer": 1,
          "rule": "u07-r3",
          "issue": "workable governance",
          "facts": [
            "safe capacity is six",
            "revise the rule before reopening"
          ],
          "transfer": true,
          "callType": "decision",
          "findAsk": "Tap the local capacity limit and the available revision opportunity."
        }
      ]
    },
    {
      "id": "u07l4",
      "title": "When conditions change",
      "objective": "Reassess feasibility and compliance without inventing motives.",
      "takeaway": "A changed resource can require a changed rule; review can also confirm a rule still fits.",
      "fieldwork": "What evidence should trigger revision of a rule you follow, and who can raise it?",
      "items": [
        {
          "id": "u07-r4",
          "kind": "rule",
          "say": "Capacity, membership, measurement and access can change whether a familiar rule works.",
          "status": "practice",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "The river does not read last year’s agreement.",
          "title": "Check the changed condition",
          "elements": [
            "Identify the changed condition",
            "Check records before attributing breach",
            "Reassess feasibility with affected users"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat every missed contribution as selfishness"
          ],
          "ex": [
            {
              "facts": "A drought lowers supply below last year’s allocation.",
              "result": "Recalculate the feasible limit; agreement does not create water."
            },
            {
              "facts": "Capacity, membership and verified use remain compatible.",
              "result": "Review can support retaining the rule while watching for new evidence."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Unchanged membership guarantees unchanged capacity.",
              "a": false,
              "why": "Resource supply can change independently."
            },
            {
              "t": "mcq",
              "q": "A notice never reached some users. What should be checked?",
              "options": [
                "Access to the process",
                "Their supposed bad character",
                "Whether every rule should vanish"
              ],
              "a": "Access to the process",
              "why": "A communication gap differs from deliberate noncompliance."
            }
          ],
          "boundary": true
        },
        {
          "id": "u07-t4",
          "kind": "term",
          "say": "Acting in accordance with an applicable rule.",
          "status": "practice",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Check what was required and what occurred before labeling a breach.",
          "term": "Compliance",
          "meaning": "Acting in accordance with an applicable rule.",
          "use": "Check what was required and what occurred before labeling a breach.",
          "lang": "english",
          "boundary": true
        },
        {
          "id": "u07-tr4",
          "kind": "trap",
          "say": "A prior agreement does not remove a new constraint.",
          "status": "fictional",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Repair the reasoning without inventing new facts.",
          "stem": "A cooperative allocated 100 water units last year. This year only 80 are available and no stored supply exists.",
          "wrong": "The 100-unit allocation remains feasible because everyone agreed last year.",
          "right": "Reassess the allocation against the 80 available units.",
          "why": "Agreement cannot create the missing 20 units.",
          "cat": 11,
          "fixDistractors": [
            "Keep the 100-unit quota because reducing it would disrupt members’ plans.",
            "Let each member independently take the full 80 units."
          ],
          "rule": "u07-r4",
          "boundary": true
        },
        {
          "id": "u07-h4",
          "kind": "hypo",
          "say": "A boundary check can support keeping a workable rule.",
          "status": "fictional",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A tool library verifies unchanged capacity and membership. Records show its booking rule works, with no unresolved access problem.",
          "call": "Must review itself lead to a replacement rule?",
          "options": [
            {
              "text": "Yes, because review proves failure.",
              "why": "A review can find a rule still workable.",
              "trap": 7
            },
            {
              "text": "No, because no new mismatch is established.",
              "why": "The stated evidence supports retaining it while staying open to new facts."
            },
            {
              "text": "Yes, because shared resources cannot be governed.",
              "why": "The scenario describes a functioning arrangement.",
              "trap": 7
            },
            {
              "text": "No, because rules should never change.",
              "why": "A future relevant change can justify revision.",
              "trap": 1
            }
          ],
          "answer": 1,
          "rule": "u07-r4",
          "issue": "revising shared rules",
          "facts": [
            "unchanged capacity and membership",
            "no unresolved access problem"
          ],
          "transfer": false,
          "callType": "decision",
          "boundary": true,
          "grid": true,
          "findAsk": "Tap the unchanged capacity/membership condition and the absence of an access problem."
        },
        {
          "id": "u07-x4",
          "kind": "hypo",
          "say": "Add the requests before declaring a rule feasible.",
          "status": "fictional",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Identify the stated constraint before choosing an answer.",
          "stem": "A shared room allows one hour per user. New members join. The room has twelve available hours, while requests now total twenty hours.",
          "call": "Which conclusion follows?",
          "options": [
            {
              "text": "Individual one-hour requests prove the rule remains feasible.",
              "why": "Individual compliance does not guarantee aggregate feasibility.",
              "trap": 9
            },
            {
              "text": "New members must be dishonest.",
              "why": "Excess demand does not establish anyone’s motive.",
              "trap": 3
            },
            {
              "text": "Reassess allocation within the twelve-hour capacity.",
              "why": "Total requested use exceeds the stated available time."
            },
            {
              "text": "Membership automatically increases available hours.",
              "why": "No extra capacity is stated.",
              "trap": 3
            }
          ],
          "answer": 2,
          "rule": "u07-r4",
          "issue": "revising shared rules",
          "facts": [
            "twelve available hours",
            "requests now total twenty hours"
          ],
          "transfer": true,
          "callType": "decision",
          "boundary": true,
          "findAsk": "Tap the available capacity and total requested use."
        },
        {
          "id": "u07-p4",
          "kind": "pairs",
          "say": "Different problems call for different repairs.",
          "status": "practice",
          "sourceIds": [
            "I2",
            "I3"
          ],
          "src": "Public goods and bads, open access, and shared resources (The Economy 2.0, §10.7) · Beyond Markets and States: Polycentric Governance of Complex Economic Systems",
          "hook": "Use the distinguishing condition, not just a familiar label.",
          "pairs": [
            {
              "l": "Use is assigned to the wrong member",
              "r": "Correct a measurement error"
            },
            {
              "l": "Supply falls below total allocations",
              "r": "Reassess the resource limit"
            },
            {
              "l": "A notice never reaches some members",
              "r": "Check access to the process"
            },
            {
              "l": "Verified use and capacity remain compatible",
              "r": "Retention can be reasonable"
            }
          ],
          "boundary": true
        }
      ]
    }
  ]
};
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
