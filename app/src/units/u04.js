// Original Oikos content. Scenarios and numerical inputs are fictional unless identified otherwise.
(function () {
  const unit = {
  "id": "u04",
  "title": "How do markets fit together?",
  "blurb": "Read price and quantity through an explicit model, then notice what the model leaves out.",
  "subject": "markets",
  "assume": "Use the stated competitive model only where its assumptions apply. A market outcome does not by itself settle fairness or need.",
  "lessons": [
    {
      "id": "u04l1",
      "title": "Read a demand schedule",
      "objective": "Distinguish a price–quantity relationship from need, preference and a demand shift.",
      "takeaway": "A demand schedule relates quantities buyers would purchase to prices while specified other conditions stay fixed.",
      "fieldwork": "Choose a familiar purchase. List one factor besides its price that could change the quantity you would buy.",
      "items": [
        {
          "id": "u04-l1-rule",
          "kind": "rule",
          "say": "A demand schedule compares quantities at different prices under stated conditions.",
          "status": "model",
          "sourceIds": [
            "F7",
            "F8",
            "F15"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Ask what is changing and what the comparison holds fixed.",
          "title": "Hold the other conditions fixed",
          "elements": [
            "Name the good, buyers and time period",
            "Hold specified non-price conditions fixed",
            "Distinguish willingness and ability to pay from need"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat each price as a different demand curve",
            "Read willingness to pay as a measure of human worth"
          ],
          "ex": [
            {
              "facts": "For one weekly market, buyers would buy 80 boxes at $10 and 60 at $15, with income and other prices fixed.",
              "result": "Moving from $10 to $15 changes quantity demanded along this schedule; it does not by itself shift demand."
            },
            {
              "facts": "A household needs medicine but cannot afford it.",
              "result": "The need can be important even when the household cannot express it as a purchase at the offered price."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A lower quantity purchased at a higher price necessarily means the demand curve shifted.",
              "a": false,
              "why": "With other conditions fixed, this is movement along the same schedule."
            },
            {
              "t": "mcq",
              "q": "What must remain specified when comparing two points on one demand schedule?",
              "options": [
                "The buyers and relevant non-price conditions",
                "An identical quantity at every price",
                "A judgment that every purchase is fair"
              ],
              "a": "The buyers and relevant non-price conditions",
              "why": "A schedule isolates the price relationship by holding the other stated conditions fixed."
            }
          ]
        },
        {
          "id": "u04-l1-term",
          "kind": "term",
          "say": "The amount buyers are willing and able to purchase at a particular price under specified conditions.",
          "status": "model",
          "sourceIds": [
            "F7",
            "F8",
            "F15"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Include a price and a time period.",
          "term": "Quantity demanded",
          "meaning": "The amount buyers are willing and able to purchase at a particular price under specified conditions.",
          "use": "At $15 per box, quantity demanded is 60 boxes per week in the stated schedule.",
          "lang": "english"
        },
        {
          "id": "u04-l1-h1",
          "kind": "hypo",
          "say": "Changing price alone moves along the stated schedule.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F15"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Changing price alone moves along the stated schedule.",
          "stem": "At one farmers’ market, weekly demand is 80 boxes at $10 each and 60 boxes at $15. Income, buyer numbers and other prices stay fixed. The price rises from $10 to $15.",
          "call": "Which description fits this model?",
          "issue": "Movement along demand",
          "rule": "u04-l1-rule",
          "options": [
            {
              "text": "Demand shifts left because fewer boxes are bought.",
              "why": "A change in quantity at a new price is not by itself a shift of the schedule.",
              "trap": 5
            },
            {
              "text": "Buyers’ incomes must have fallen.",
              "why": "The stem explicitly holds income fixed.",
              "trap": 3
            },
            {
              "text": "Quantity demanded falls along the same schedule.",
              "why": "The price changes while the stated non-price conditions stay fixed."
            },
            {
              "text": "The model shows that the remaining buyers need boxes more.",
              "why": "Purchasing at a price does not rank people’s needs.",
              "trap": 4
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "Income, buyer numbers and other prices stay fixed"
          ],
          "findAsk": "Which detail makes this a comparison along one demand schedule?"
        },
        {
          "id": "u04-l1-sort",
          "kind": "sort",
          "say": "The good’s own price and the other determinants play different roles.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F15"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "The good’s own price and the other determinants play different roles.",
          "q": "Classify the change in this market model. Hold all factors not mentioned fixed.",
          "buckets": [
            "Movement along demand",
            "Possible demand shift"
          ],
          "items": [
            {
              "text": "Only the box price rises from $10 to $15.",
              "bucket": "Movement along demand",
              "why": "Changing the good’s own price moves along its existing schedule."
            },
            {
              "text": "More households join the market at every offered box price.",
              "bucket": "Possible demand shift",
              "why": "A change in buyer numbers changes the schedule."
            },
            {
              "text": "Only the box price falls from $15 to $10.",
              "bucket": "Movement along demand",
              "why": "The price change alone is movement along the schedule."
            },
            {
              "text": "Buyers develop a stronger preference for these boxes at each price.",
              "bucket": "Possible demand shift",
              "why": "Preference is a non-price determinant."
            },
            {
              "text": "Only the same box’s posted price changes.",
              "bucket": "Movement along demand",
              "why": "The good’s own price is the variable on the schedule."
            },
            {
              "text": "A close substitute becomes more expensive, changing purchases at each box price.",
              "bucket": "Possible demand shift",
              "why": "The price of another good can shift this demand schedule."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u04-l1-h2",
          "kind": "hypo",
          "say": "A changed non-price condition can change the schedule.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F15"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "A changed non-price condition can change the schedule.",
          "stem": "At the same box price of $10, new households join the market. Buyers now want 100 boxes rather than 80. The old and new comparisons refer to the same week length and product.",
          "call": "What has changed?",
          "issue": "Demand shift",
          "rule": "u04-l1-rule",
          "options": [
            {
              "text": "This is movement caused by a higher box price.",
              "why": "The box price is unchanged.",
              "trap": 3
            },
            {
              "text": "The supply curve must have shifted by 20 boxes.",
              "why": "The facts describe buyers; no supply change is given.",
              "trap": 3
            },
            {
              "text": "Each original household must want more boxes.",
              "why": "Additional buyers can raise the total without changing every original household’s choice.",
              "trap": 7
            },
            {
              "text": "Demand is higher at this unchanged price.",
              "why": "The buyer population changed and quantity demanded rose at the same price."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "At the same box price of $10",
            "new households join the market"
          ],
          "findAsk": "Which details distinguish this change from movement caused by the box price?"
        },
        {
          "id": "u04-l1-trap",
          "kind": "trap",
          "say": "Purchases do not reveal every reason people cannot obtain a good.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F15"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Purchases do not reveal every reason people cannot obtain a good.",
          "stem": "A clinic serves households with different incomes. A household cannot afford a service at the offered price.",
          "wrong": "Its low market demand proves that it has little need for the service.",
          "right": "Ability to pay limits expressed demand; need requires separate evidence.",
          "why": "Market demand combines willingness and ability to purchase. It is not a complete measure of need or a moral ranking.",
          "fixDistractors": [
            "Need can be read directly from purchases once every household sees the same posted price.",
            "If a household cannot buy, the service must have no benefit for it."
          ],
          "cat": 4
        },
        {
          "id": "u04-l1-transfer",
          "kind": "argue",
          "say": "Use market observations without turning them into rankings of need.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F15"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Evaluating institutions and outcomes: Fairness",
          "hook": "Use market observations without turning them into rankings of need.",
          "stem": "A council observes that residents in a low-income area buy fewer tickets for a paid evening bus. It has no information about their travel needs, affordability or the service’s suitability.",
          "call": "Which inference is supported?",
          "issue": "Demand and need",
          "rule": "u04-l1-rule",
          "options": [
            {
              "text": "Ticket purchases alone do not establish residents’ travel needs.",
              "why": "Low purchases can reflect affordability or service fit as well as preferences. Those facts are missing."
            },
            {
              "text": "Fewer tickets prove that residents have less need to travel.",
              "why": "Purchases do not isolate need from the ability to pay or service suitability.",
              "trap": 4
            },
            {
              "text": "Making the fare zero would necessarily fill every bus.",
              "why": "The facts do not establish the response to a different price.",
              "trap": 7
            },
            {
              "text": "Residents must prefer private cars to every public service.",
              "why": "No evidence about alternative travel or preferences is supplied.",
              "trap": 3
            }
          ],
          "answer": 0,
          "transfer": true,
          "callType": "accurate"
        }
      ]
    },
    {
      "id": "u04l2",
      "title": "Find a model’s clearing point",
      "objective": "Use demand and supply schedules to identify an equilibrium and a shortage at a stated price.",
      "takeaway": "Equilibrium in this model is a price where quantities demanded and supplied match.",
      "fieldwork": "For a market you know, name one reason the observed price might not immediately clear it.",
      "items": [
        {
          "id": "u04-l2-rule",
          "kind": "rule",
          "say": "In a competitive schedule model, clearing means quantity demanded equals quantity supplied.",
          "status": "model",
          "sourceIds": [
            "F7",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "A clearing condition is a comparison, not a promise that every market instantly reaches it.",
          "title": "Compare quantities at the same price",
          "elements": [
            "Use the same good and time period",
            "Compare demand and supply at one price",
            "Call excess demand a shortage at that price"
          ],
          "ordered": false,
          "distractorElements": [
            "Compare demand at one price with supply at another",
            "Treat the clearing quantity as a guarantee of fairness"
          ],
          "ex": [
            {
              "facts": "At $10, demand is 80 boxes and supply 40; at $15 both are 60; at $20 demand is 40 and supply 80.",
              "result": "The schedule clears at $15 and 60 boxes. At $10, excess demand is 80 − 40 = 40 boxes."
            },
            {
              "facts": "A market has waiting lists at a posted price, and prices cannot adjust this week.",
              "result": "The model can describe excess demand without promising that adjustment has already occurred."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "The clearing price is found by comparing quantity demanded and supplied at different prices.",
              "a": false,
              "why": "Both quantities must refer to the same price and market."
            },
            {
              "t": "mcq",
              "q": "At a stated price, buyers want 90 units and sellers offer 70. What does the model show?",
              "options": [
                "A surplus of 20 units",
                "A shortage of 20 units",
                "An equilibrium at 80 units"
              ],
              "a": "A shortage of 20 units",
              "why": "Excess demand is 90 − 70 = 20 units at that price."
            }
          ]
        },
        {
          "id": "u04-l2-term",
          "kind": "term",
          "say": "A price and quantity at which quantity demanded equals quantity supplied in the stated market model.",
          "status": "model",
          "sourceIds": [
            "F7",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "Equality is between quantities for the same market and price.",
          "term": "Market equilibrium",
          "meaning": "A price and quantity at which quantity demanded equals quantity supplied in the stated market model.",
          "use": "A table with 60 boxes demanded and 60 supplied at $15 clears at that price.",
          "lang": "english",
          "alt": [
            "equilibrium"
          ]
        },
        {
          "id": "u04-l2-h1",
          "kind": "hypo",
          "say": "At equilibrium, do not add the buyer and seller sides of the same trade.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "At equilibrium, do not add the buyer and seller sides of the same trade.",
          "stem": "A weekly box market has these schedules: at $15, demand 70 and supply 50; at $20, demand 60 and supply 60; at $25, demand 50 and supply 70. Assume these are the relevant competitive schedules.",
          "call": "Which listed price clears this model?",
          "issue": "Market clearing",
          "rule": "u04-l2-rule",
          "options": [
            {
              "text": "$15, because the lower price attracts more buyers.",
              "why": "At $15, demand exceeds supply by 20; attracting more buyers does not create equality.",
              "trap": 9
            },
            {
              "text": "$25, because the higher price offers more boxes.",
              "why": "At $25, supply exceeds demand by 20.",
              "trap": 9
            },
            {
              "text": "$20, with 120 boxes traded.",
              "why": "Demand and supply describe the same traded units; adding the two double-counts them.",
              "trap": 5
            },
            {
              "text": "$20, with 60 boxes traded.",
              "why": "At $20, the two listed quantities both equal 60."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u04-l2-num",
          "kind": "num",
          "say": "Excess demand is quantity demanded minus quantity supplied.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "Excess demand is quantity demanded minus quantity supplied.",
          "ask": "At a posted price of $15 per box, weekly quantity demanded is 70 boxes and quantity supplied is 50. What is excess demand, in boxes? Enter an exact whole number.",
          "answer": "20 boxes",
          "distractors": [
            "120 boxes",
            "60 boxes",
            "-20 boxes"
          ],
          "speed": false,
          "alt": [
            "20"
          ]
        },
        {
          "id": "u04-l2-h2",
          "kind": "hypo",
          "say": "A shortage describes a quantity gap; allocation requires additional rules.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "A shortage describes a quantity gap; allocation requires additional rules.",
          "stem": "The same market has a posted price of $15 this week: buyers want 70 boxes and sellers offer 50. A binding posted-price rule prevents a price change during the week. No allocation rule is specified.",
          "call": "What can be concluded for this week?",
          "issue": "Shortage and allocation",
          "rule": "u04-l2-rule",
          "options": [
            {
              "text": "There is excess demand, but who obtains boxes is unspecified.",
              "why": "Demand exceeds supply by 20. The schedule does not identify the allocation among buyers."
            },
            {
              "text": "The price must immediately rise to $20 despite the rule.",
              "why": "The stated constraint prevents that adjustment this week.",
              "trap": 2
            },
            {
              "text": "Every buyer receives the same proportion of their request.",
              "why": "No proportional allocation rule has been supplied.",
              "trap": 3
            },
            {
              "text": "All 70 requested boxes will be traded at $15.",
              "why": "Only 50 boxes are offered at this price in the stated model.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "prevents a price change during the week",
            "No allocation rule is specified"
          ],
          "findAsk": "Which details prevent assuming immediate price adjustment or a specific allocation?"
        },
        {
          "id": "u04-l2-pairs",
          "kind": "pairs",
          "say": "Buyer and seller schedules describe different sides of the same units.",
          "status": "practice",
          "sourceIds": [
            "F7",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "Buyer and seller schedules describe different sides of the same units.",
          "set": "Keep market quantities distinct",
          "pairs": [
            {
              "l": "Quantity demanded",
              "r": "What buyers would purchase at a stated price"
            },
            {
              "l": "Quantity supplied",
              "r": "What sellers would offer at a stated price"
            },
            {
              "l": "Excess demand",
              "r": "Quantity demanded minus quantity supplied when positive"
            },
            {
              "l": "Excess supply",
              "r": "Quantity supplied minus quantity demanded when positive"
            },
            {
              "l": "Clearing quantity",
              "r": "The common quantity where demand and supply match"
            }
          ],
          "spare": [
            "The sum of buyers’ and sellers’ quantities at equilibrium"
          ],
          "mode": "concept"
        },
        {
          "id": "u04-l2-transfer",
          "kind": "hypo",
          "say": "Separate a model’s shortage calculation from an allocation judgment.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "Separate a model’s shortage calculation from an allocation judgment.",
          "stem": "A college exchange uses a fixed credit price for used calculators. At that price, 40 students want one and owners offer 25. The college has not said whether priority will use a queue, lottery or need criterion.",
          "call": "Which conclusion follows?",
          "issue": "Shortage without allocation",
          "rule": "u04-l2-rule",
          "options": [
            {
              "text": "The 25 calculators necessarily go to the students with greatest need.",
              "why": "No need-based allocation rule is specified.",
              "trap": 3
            },
            {
              "text": "Excess demand is 15; the schedule does not choose who receives one.",
              "why": "The gap is 40 − 25. Allocation and its justification need additional information."
            },
            {
              "text": "There is a surplus of 15 calculators awaiting buyers.",
              "why": "Demand exceeds supply, so the gap is a shortage.",
              "trap": 5
            },
            {
              "text": "The schedule proves that raising the credit price would be fair.",
              "why": "The calculation does not settle the fairness of a policy.",
              "trap": 4
            }
          ],
          "answer": 1,
          "transfer": true,
          "callType": "accurate"
        }
      ]
    },
    {
      "id": "u04l3",
      "title": "Separate shifts from stories",
      "objective": "Predict a directional change only under specified shifts and recognize an indeterminate price when two curves change.",
      "takeaway": "One changed curve supports a conditional prediction; several simultaneous changes need more information.",
      "fieldwork": "Take a price-change story from your day. Write one alternative explanation that the observation alone cannot rule out.",
      "items": [
        {
          "id": "u04-l3-rule",
          "kind": "rule",
          "say": "Directional predictions depend on which schedules move and which remain fixed.",
          "status": "model",
          "sourceIds": [
            "F7",
            "F8",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "Keep a conditional model prediction separate from a diagnosis of real observations.",
          "title": "State which curve changes",
          "elements": [
            "Identify the changing non-price determinant",
            "State what stays fixed",
            "Allow an ambiguous result when shifts pull it in opposite directions"
          ],
          "ordered": false,
          "distractorElements": [
            "Infer a unique cause from a price observation alone",
            "Assume a demand increase always raises price regardless of supply"
          ],
          "ex": [
            {
              "facts": "Demand increases while upward-sloping supply stays fixed and the market moves between clearing points.",
              "result": "The usual model predicts higher equilibrium price and quantity. A supply increase with demand fixed instead predicts lower price and higher quantity."
            },
            {
              "facts": "Demand and supply both increase under the same usual slopes.",
              "result": "Both changes raise equilibrium quantity, but they push price in opposite directions; the price change needs their relative sizes."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A price rise alone uniquely proves demand increased.",
              "a": false,
              "why": "Supply contraction or combinations of changes can also raise price. The observation does not identify a unique cause."
            },
            {
              "t": "mcq",
              "q": "In the stated usual model, demand and supply both increase. What is unresolved without their sizes?",
              "options": [
                "Whether quantity can be compared",
                "Whether both schedules have changed",
                "The direction of the price change"
              ],
              "a": "The direction of the price change",
              "why": "Both shifts raise quantity, but one raises price and the other lowers it."
            }
          ],
          "exceptions": [
            "These directions assume the usual downward-sloping demand and upward-sloping supply, comparative clearing points, and no other changes."
          ]
        },
        {
          "id": "u04-l3-term",
          "kind": "term",
          "say": "A change in quantity demanded at given prices because a non-price determinant changes.",
          "status": "model",
          "sourceIds": [
            "F7",
            "F8",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "Compare quantities at the same price before and after.",
          "term": "Demand shift",
          "meaning": "A change in quantity demanded at given prices because a non-price determinant changes.",
          "use": "More buyers wanting the same product at each price shifts its demand schedule.",
          "lang": "english"
        },
        {
          "id": "u04-l3-h1",
          "kind": "hypo",
          "say": "Name the fixed curve before making the prediction.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "Name the fixed curve before making the prediction.",
          "stem": "In a competitive model with the usual slopes, new buyers increase demand at each price. Supply is unchanged. Compare the old and new market-clearing points, with no other changes.",
          "call": "What does this model predict?",
          "issue": "Demand increase",
          "rule": "u04-l3-rule",
          "options": [
            {
              "text": "A higher price and a higher quantity.",
              "why": "The demand increase meets unchanged upward-sloping supply at a higher clearing price and quantity."
            },
            {
              "text": "A lower price and a higher quantity.",
              "why": "That is the usual direction for a supply increase with demand fixed.",
              "trap": 10
            },
            {
              "text": "A higher price with unchanged quantity in every case.",
              "why": "Upward-sloping supply in this case responds; a fixed-quantity assumption was not given.",
              "trap": 2
            },
            {
              "text": "The same price because sellers’ costs are unchanged.",
              "why": "Unchanged supply does not mean price is fixed when demand shifts.",
              "trap": 5
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "Supply is unchanged",
            "Compare the old and new market-clearing points"
          ],
          "findAsk": "Which details specify the fixed schedule and the outcomes being compared?"
        },
        {
          "id": "u04-l3-sort",
          "kind": "sort",
          "say": "Opposing price effects cannot be resolved by naming only the shift directions.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "Opposing price effects cannot be resolved by naming only the shift directions.",
          "q": "Use the usual downward demand and upward supply slopes; compare clearing points and hold the other curve fixed where stated.",
          "buckets": [
            "Price up, quantity up",
            "Price down, quantity up",
            "Price direction unresolved"
          ],
          "items": [
            {
              "text": "Only demand increases.",
              "bucket": "Price up, quantity up",
              "why": "More demand meets unchanged upward-sloping supply at higher price and quantity."
            },
            {
              "text": "Only supply increases.",
              "bucket": "Price down, quantity up",
              "why": "More supply meets unchanged downward-sloping demand at lower price and higher quantity."
            },
            {
              "text": "Demand and supply both increase; sizes are unknown.",
              "bucket": "Price direction unresolved",
              "why": "Their price effects oppose each other."
            },
            {
              "text": "More buyers shift demand out; supply stays fixed.",
              "bucket": "Price up, quantity up",
              "why": "This is a demand increase with supply fixed."
            },
            {
              "text": "A process improvement shifts supply out; demand stays fixed.",
              "bucket": "Price down, quantity up",
              "why": "This is a supply increase with demand fixed."
            },
            {
              "text": "Both schedules shift outward by unspecified amounts.",
              "bucket": "Price direction unresolved",
              "why": "Quantity rises in the usual model, but price needs relative sizes."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u04-l3-h2",
          "kind": "hypo",
          "say": "When two effects oppose, ask for their sizes rather than choosing one story.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "When two effects oppose, ask for their sizes rather than choosing one story.",
          "stem": "Now both demand and supply increase in that same model. Demand slopes down, supply slopes up, and the relative sizes of the shifts are not given. Compare the two clearing points.",
          "call": "Which conclusion is justified?",
          "issue": "Two shifts",
          "rule": "u04-l3-rule",
          "options": [
            {
              "text": "Price and quantity both rise because demand increased.",
              "why": "That ignores the supply increase’s downward effect on price.",
              "trap": 9
            },
            {
              "text": "Quantity rises; the price direction is not determined.",
              "why": "Both shifts raise clearing quantity but exert opposing pressure on price."
            },
            {
              "text": "Price must remain unchanged because both curves shifted.",
              "why": "An unchanged price requires particular relative shifts, not merely two shifts.",
              "trap": 3
            },
            {
              "text": "Quantity falls because sellers offer more at each price.",
              "why": "An outward supply shift raises quantity in this stated model.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u04-l3-trap",
          "kind": "trap",
          "say": "One observed price is compatible with multiple mechanisms.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "One observed price is compatible with multiple mechanisms.",
          "stem": "A report says only that the market price of repairs increased last month. It gives no quantity, demand, cost or entry information.",
          "wrong": "The price increase proves customers suddenly wanted more repairs.",
          "right": "The price observation alone cannot identify which demand or supply changes occurred.",
          "why": "A price rise can follow a demand increase, a supply decrease or multiple changes. Additional evidence is needed.",
          "fixDistractors": [
            "A price rise proves repair businesses became less productive.",
            "A price rise proves the number of repairs must also have increased."
          ],
          "cat": 3
        },
        {
          "id": "u04-l3-transfer",
          "kind": "hypo",
          "say": "Apply the same shift logic to a new market without inventing magnitudes.",
          "status": "fictional",
          "sourceIds": [
            "F7",
            "F8",
            "F9"
          ],
          "src": "OpenStax / Rice University: Demand, Supply, and Equilibrium in Markets for Goods and Services; OpenStax / Rice University: Shifts in Demand and Supply for Goods and Services; CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?",
          "hook": "Apply the same shift logic to a new market without inventing magnitudes.",
          "stem": "A neighborhood café market gains new customers while a new production method lowers suppliers’ costs. Assume these shift demand and supply outward with usual slopes, no other changes, and unknown shift sizes.",
          "call": "Which prediction is warranted within this model?",
          "issue": "Opposing price effects",
          "rule": "u04-l3-rule",
          "options": [
            {
              "text": "Cheaper servings, because production became less costly.",
              "why": "That ignores the simultaneous increase in demand.",
              "trap": 9
            },
            {
              "text": "Dearer servings, because more customers arrived.",
              "why": "That ignores the simultaneous increase in supply.",
              "trap": 9
            },
            {
              "text": "More café servings, with no definite price direction.",
              "why": "Both outward shifts raise equilibrium quantity, while their effects on price oppose one another."
            },
            {
              "text": "The original price, because two changes always cancel.",
              "why": "Cancellation requires particular magnitudes that are not supplied.",
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
      "id": "u04l4",
      "title": "Know when the benchmark ends",
      "objective": "Recognize omitted market structure, information, access and ethical criteria before applying a competitive benchmark.",
      "takeaway": "A model’s assumptions define its reach; clearing does not prove informed, fair or harmless trade.",
      "fieldwork": "For a market you use, identify one assumption that needs checking before treating its price as a competitive benchmark.",
      "items": [
        {
          "id": "u04-l4-rule",
          "kind": "rule",
          "say": "Competitive clearing is a conditional benchmark, not a complete assessment of a market.",
          "status": "model",
          "sourceIds": [
            "F9",
            "F15",
            "F6"
          ],
          "src": "CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?; CORE Econ: Evaluating institutions and outcomes: Fairness; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Ask what a result establishes, then what still needs evidence or judgment.",
          "title": "Use the benchmark with its conditions",
          "elements": [
            "Check price-taking and relevant information assumptions",
            "Notice costs or effects outside the modeled trade",
            "Separate clearing from distribution and procedural fairness"
          ],
          "ordered": false,
          "distractorElements": [
            "Treat any posted price as a competitive equilibrium",
            "Infer that voluntary purchase proves every relevant person benefits"
          ],
          "ex": [
            {
              "facts": "Many small sellers offer an identical item, and the stated model makes each a price taker.",
              "result": "A price taker treats the market price as given for its own choice; it still chooses whether and how much to supply."
            },
            {
              "facts": "One supplier controls access to an essential service and buyers lack price information.",
              "result": "The simple price-taking, informed-choice benchmark cannot be applied without investigating these differences. A clearing result alone does not settle fairness."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A price taker has no choice about how much to supply.",
              "a": false,
              "why": "Taking the market price as given differs from having no quantity choice."
            },
            {
              "t": "mcq",
              "q": "A schedule clears. Which additional claim is not established by clearing alone?",
              "options": [
                "Demand and supply match at that point",
                "That price pairs with the common quantity",
                "The allocation is procedurally fair"
              ],
              "a": "The allocation is procedurally fair",
              "why": "Fairness involves criteria and facts beyond the equality of quantities."
            }
          ]
        },
        {
          "id": "u04-l4-term",
          "kind": "term",
          "say": "An actor modeled as unable to influence the market price through its own individual choice.",
          "status": "model",
          "sourceIds": [
            "F9",
            "F15",
            "F6"
          ],
          "src": "CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?; CORE Econ: Evaluating institutions and outcomes: Fairness; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Price-taking is an assumption to check, not a description of every business.",
          "term": "Price taker",
          "meaning": "An actor modeled as unable to influence the market price through its own individual choice.",
          "use": "A small supplier in the benchmark chooses quantity taking the price as given.",
          "lang": "english",
          "alt": [
            "price-taker"
          ]
        },
        {
          "id": "u04-l4-h1",
          "kind": "hypo",
          "say": "A visible price does not prove price-taking behavior.",
          "status": "fictional",
          "sourceIds": [
            "F9",
            "F15",
            "F6"
          ],
          "src": "CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?; CORE Econ: Evaluating institutions and outcomes: Fairness; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "A visible price does not prove price-taking behavior.",
          "stem": "A fictional town has one water supplier. Households cannot switch providers, and the supplier can change its own posted tariff. A colleague applies a model assuming every seller takes a market price as given.",
          "call": "What is the immediate modeling problem?",
          "issue": "Price-taking boundary",
          "rule": "u04-l4-rule",
          "options": [
            {
              "text": "A sole supplier must always charge the highest possible tariff.",
              "why": "The facts do not give its constraints or behavior.",
              "trap": 7
            },
            {
              "text": "The supplier’s stated pricing power conflicts with that assumption.",
              "why": "An actor that can set its own tariff is not being described as a price taker."
            },
            {
              "text": "Water cannot have any economically meaningful demand schedule.",
              "why": "Pricing power does not make all demand analysis impossible.",
              "trap": 7
            },
            {
              "text": "The model must be correct because a tariff is observed.",
              "why": "Observing a price does not establish the model’s assumptions.",
              "trap": 2
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "can change its own posted tariff",
            "every seller takes a market price as given"
          ],
          "findAsk": "Which details show the conflict between the setting and the model’s assumption?",
          "boundary": true
        },
        {
          "id": "u04-l4-sort",
          "kind": "sort",
          "say": "Keep the mathematical property distinct from the broader assessment.",
          "status": "fictional",
          "sourceIds": [
            "F9",
            "F15",
            "F6"
          ],
          "src": "CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?; CORE Econ: Evaluating institutions and outcomes: Fairness; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Keep the mathematical property distinct from the broader assessment.",
          "q": "What does each statement establish about a hypothetical allocation?",
          "buckets": [
            "Model clearing",
            "Additional ethical or institutional claim"
          ],
          "items": [
            {
              "text": "Quantity demanded equals quantity supplied at the stated price.",
              "bucket": "Model clearing",
              "why": "This is the model’s clearing condition."
            },
            {
              "text": "Everyone affected had an effective opportunity to contest the rules.",
              "bucket": "Additional ethical or institutional claim",
              "why": "Participation is a procedural claim requiring its own evidence."
            },
            {
              "text": "The chosen price pairs with equal buyer and seller quantities.",
              "bucket": "Model clearing",
              "why": "This restates the quantity equality."
            },
            {
              "text": "People unable to afford the service still have adequate access.",
              "bucket": "Additional ethical or institutional claim",
              "why": "Access is not established by clearing."
            },
            {
              "text": "All harms to neighbors were included in the decision.",
              "bucket": "Additional ethical or institutional claim",
              "why": "Effects on others require separate coverage."
            },
            {
              "text": "The schedule intersection is 40 units at $8.",
              "bucket": "Model clearing",
              "why": "An intersection identifies the modeled clearing point."
            }
          ],
          "mode": "contrast",
          "boundary": true
        },
        {
          "id": "u04-l4-h2",
          "kind": "hypo",
          "say": "Do not replace an unsupported moral conclusion with its unsupported opposite.",
          "status": "fictional",
          "sourceIds": [
            "F9",
            "F15",
            "F6"
          ],
          "src": "CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?; CORE Econ: Evaluating institutions and outcomes: Fairness; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Do not replace an unsupported moral conclusion with its unsupported opposite.",
          "stem": "A textbook market clears at $8. The exercise supplies no facts about buyers’ incomes, essential needs or how rules were chosen. A reader calls the allocation fair solely because it clears.",
          "call": "Which response is justified?",
          "issue": "Clearing and fairness",
          "rule": "u04-l4-rule",
          "options": [
            {
              "text": "The calculation proves the allocation is unfair to every buyer.",
              "why": "Missing fairness evidence does not prove a universal opposite verdict.",
              "trap": 7
            },
            {
              "text": "Any price below $8 would necessarily be fairer.",
              "why": "No fairness criterion or consequences of that alternative are supplied.",
              "trap": 3
            },
            {
              "text": "Clearing alone does not establish the fairness claim.",
              "why": "Fairness needs a stated criterion and relevant information beyond quantity equality."
            },
            {
              "text": "The claim follows because all unmet needs are outside economics.",
              "why": "Needs and distribution can be examined; clearing is simply not their complete assessment.",
              "trap": 4
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "boundary": true
        },
        {
          "id": "u04-l4-trap",
          "kind": "trap",
          "say": "Check the assumption that the case actually contradicts.",
          "status": "fictional",
          "sourceIds": [
            "F9",
            "F15",
            "F6"
          ],
          "src": "CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?; CORE Econ: Evaluating institutions and outcomes: Fairness; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Check the assumption that the case actually contradicts.",
          "stem": "A model assumes buyers know the service quality. In the actual case, the provider alone knows that quality and has not disclosed it.",
          "wrong": "Because purchases occur, the model’s informed-choice assumption is satisfied.",
          "right": "Purchases do not establish informed choice when relevant quality is undisclosed.",
          "why": "Observed buying can occur with unequal information. The stated information assumption needs checking before transferring the benchmark.",
          "fixDistractors": [
            "All purchases made with incomplete information must have zero value.",
            "Information assumptions can be ignored whenever the market has a price."
          ],
          "cat": 2,
          "boundary": true
        },
        {
          "id": "u04-l4-transfer",
          "kind": "argue",
          "say": "Use a bounded model as input to judgment, with its limits visible.",
          "status": "fictional",
          "sourceIds": [
            "F9",
            "F15",
            "F6"
          ],
          "src": "CORE Econ: Supply, demand, and competitive equilibrium: Is this a good model?; CORE Econ: Evaluating institutions and outcomes: Fairness; CORE Econ: Getting the work done: Contracts, principals, and agents",
          "hook": "Use a bounded model as input to judgment, with its limits visible.",
          "stem": "A city uses a competitive parking model to estimate a clearing price. The model does not include effects on nearby residents or access needs. An analyst accurately calculates the price and then says this alone settles the policy choice.",
          "call": "What should the calculation’s scope be?",
          "issue": "Model scope",
          "rule": "u04-l4-rule",
          "options": [
            {
              "text": "It settles the choice because a mathematically correct result includes every effect.",
              "why": "Correct arithmetic does not expand the model’s scope.",
              "trap": 5
            },
            {
              "text": "It has no possible use because every useful model must contain everything.",
              "why": "A limited model can inform part of a decision when its scope is explicit.",
              "trap": 7
            },
            {
              "text": "It proves that residents would reject every paid parking policy.",
              "why": "Their preferences and the consequences of alternatives are not supplied.",
              "trap": 3
            },
            {
              "text": "It estimates clearing under its assumptions; omitted effects and policy criteria remain.",
              "why": "A correct conditional calculation does not add evidence about effects or values outside the model."
            }
          ],
          "answer": 3,
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
