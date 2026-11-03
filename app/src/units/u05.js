// Original Oikos content. Scenarios and numerical inputs are fictional unless identified otherwise.
(function () {
  const unit = {
  "id": "u05",
  "title": "Who responds, and who pays?",
  "blurb": "Measure responsiveness, separate revenue from profit, and trace a tax through both sides of a trade.",
  "subject": "incidence",
  "assume": "Treat all tax examples as hypothetical model calculations, not legal or financial advice. State the baseline, time horizon and market assumptions.",
  "lessons": [
    {
      "id": "u05l1",
      "title": "Measure responsiveness",
      "objective": "Calculate a specified price elasticity and distinguish elastic, inelastic and zero response.",
      "takeaway": "Elasticity compares percentage changes; the denominator and the conditions matter.",
      "fieldwork": "Choose a purchase and name one alternative or time constraint that could affect its price responsiveness.",
      "items": [
        {
          "id": "u05-l1-rule",
          "kind": "rule",
          "say": "Demand’s price elasticity measures quantity responsiveness to price under stated conditions.",
          "status": "model",
          "sourceIds": [
            "F10",
            "F11"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing",
          "hook": "Before dividing, check the units, percentage bases and what is held fixed.",
          "title": "Compare percentage changes",
          "elements": [
            "Use percentage quantity change divided by percentage price change",
            "State whether reporting the magnitude or the signed value",
            "Use the specified percentage base consistently"
          ],
          "ordered": false,
          "distractorElements": [
            "Divide a change in units by a change in dollars",
            "Treat inelastic demand as no response at all"
          ],
          "ex": [
            {
              "facts": "Price rises from $20 to $24 and quantity falls from 60 to 50. Use midpoint percentages: changes divided by the average of old and new values.",
              "result": "The magnitude is (10 / 55) ÷ (4 / 22) = 1. A magnitude above 1 is elastic, below 1 inelastic; exactly 1 is unit elastic."
            },
            {
              "facts": "Under stated fixed conditions, a 10% price rise accompanies a 4% quantity fall.",
              "result": "The magnitude is 4% / 10% = 0.4: inelastic, but quantity still changes. This relationship is not automatically causal evidence from uncontrolled data."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "Inelastic demand means quantity never changes when price changes.",
              "a": false,
              "why": "Inelastic means the percentage response is smaller in magnitude; zero is a special case."
            },
            {
              "t": "mcq",
              "q": "A stated price change is 5% and the quantity response is −15%. What is the elasticity magnitude?",
              "options": [
                "3",
                "0.33",
                "10"
              ],
              "a": "3",
              "why": "Use the magnitude of −15% divided by 5%, giving 3."
            }
          ]
        },
        {
          "id": "u05-l1-term",
          "kind": "term",
          "say": "The percentage response of quantity demanded to a percentage price change, under specified conditions.",
          "status": "model",
          "sourceIds": [
            "F10",
            "F11"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing",
          "hook": "The result depends on the market, price range, alternatives and time period.",
          "term": "Price elasticity of demand",
          "meaning": "The percentage response of quantity demanded to a percentage price change, under specified conditions.",
          "use": "When using magnitudes, a value above 1 is elastic and below 1 is inelastic.",
          "lang": "english",
          "alt": [
            "demand price elasticity"
          ]
        },
        {
          "id": "u05-l1-h1",
          "kind": "hypo",
          "say": "Elasticity is a ratio, not a difference or a raw percentage.",
          "status": "fictional",
          "sourceIds": [
            "F10",
            "F11"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing",
          "hook": "Elasticity is a ratio, not a difference or a raw percentage.",
          "stem": "In a controlled hypothetical demand comparison, price rises 20% and quantity demanded falls 30%. These percentages use the specified consistent comparison method, and all non-price conditions are fixed.",
          "call": "What is demand’s price-elasticity magnitude?",
          "issue": "Elasticity ratio",
          "rule": "u05-l1-rule",
          "options": [
            {
              "text": "0.67, so this response is inelastic.",
              "why": "That reverses the ratio; quantity percentage goes on top.",
              "trap": 5
            },
            {
              "text": "10, because the two percentages differ by ten.",
              "why": "Elasticity is a ratio of percentage changes, not their difference.",
              "trap": 5
            },
            {
              "text": "−30, because quantity fell by thirty percent.",
              "why": "The quantity percentage alone is not the ratio, and the question asks for magnitude.",
              "trap": 9
            },
            {
              "text": "1.5, so this response is elastic.",
              "why": "The magnitude is 30 / 20 = 1.5, above 1."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u05-l1-num",
          "kind": "num",
          "say": "The magnitude is (20 / 90) divided by (2 / 11), or 1.222… .",
          "status": "fictional",
          "sourceIds": [
            "F10",
            "F11"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing",
          "hook": "The magnitude is (20 / 90) divided by (2 / 11), or 1.222… .",
          "ask": "Price rises from $10 to $12 and quantity demanded falls from 100 to 80 units, with other conditions fixed. Use midpoint percentages: change divided by the average of old and new values. What is demand’s price-elasticity magnitude, rounded to two decimal places?",
          "answer": "1.22",
          "distractors": [
            "0.82",
            "1.00",
            "10.00"
          ],
          "speed": false
        },
        {
          "id": "u05-l1-h2",
          "kind": "hypo",
          "say": "A zero response in a specified comparison is not a universal forecast.",
          "status": "fictional",
          "sourceIds": [
            "F10",
            "F11"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing",
          "hook": "A zero response in a specified comparison is not a universal forecast.",
          "stem": "In a second hypothetical comparison, price rises by 10% and quantity demanded stays exactly unchanged. The price change is nonzero, and all other conditions are fixed.",
          "call": "What magnitude follows for this observed interval?",
          "issue": "Zero response",
          "rule": "u05-l1-rule",
          "options": [
            {
              "text": "Zero for this interval.",
              "why": "The quantity percentage change is zero, so the ratio to a nonzero price percentage is zero."
            },
            {
              "text": "One, because the same number of units is bought.",
              "why": "Unit elasticity means equal percentage magnitudes, not unchanged quantity.",
              "trap": 5
            },
            {
              "text": "Undefined, because quantity did not change.",
              "why": "The denominator is the nonzero price percentage, not the quantity change.",
              "trap": 5
            },
            {
              "text": "Zero at every price and every future date.",
              "why": "A stated interval does not establish all other price ranges or time horizons.",
              "trap": 7
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "quantity demanded stays exactly unchanged",
            "The price change is nonzero"
          ],
          "findAsk": "Which details make the elasticity ratio zero rather than undefined?"
        },
        {
          "id": "u05-l1-sort",
          "kind": "sort",
          "say": "Elastic and inelastic describe relative percentage responses.",
          "status": "fictional",
          "sourceIds": [
            "F10",
            "F11"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing",
          "hook": "Elastic and inelastic describe relative percentage responses.",
          "q": "Classify these stated demand-elasticity magnitudes.",
          "buckets": [
            "Elastic",
            "Inelastic",
            "Unit elastic"
          ],
          "items": [
            {
              "text": "Magnitude 2.0.",
              "bucket": "Elastic",
              "why": "A magnitude above 1 is elastic."
            },
            {
              "text": "Magnitude 0.4.",
              "bucket": "Inelastic",
              "why": "A magnitude below 1 is inelastic."
            },
            {
              "text": "Magnitude 1.0.",
              "bucket": "Unit elastic",
              "why": "Exactly 1 is unit elastic."
            },
            {
              "text": "Quantity changes 12% for a 6% price change, using the specified percentage method.",
              "bucket": "Elastic",
              "why": "12 / 6 = 2."
            },
            {
              "text": "Quantity changes 3% for a 10% price change, using the specified percentage method.",
              "bucket": "Inelastic",
              "why": "3 / 10 = 0.3."
            },
            {
              "text": "Quantity and price change by equal nonzero percentage magnitudes.",
              "bucket": "Unit elastic",
              "why": "Their ratio is 1."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u05-l1-transfer",
          "kind": "argue",
          "say": "Do not turn limited responsiveness into no response or a timeless prediction.",
          "status": "fictional",
          "sourceIds": [
            "F10",
            "F11"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing",
          "hook": "Do not turn limited responsiveness into no response or a timeless prediction.",
          "stem": "A transport report estimates a demand-elasticity magnitude of 0.3 for one month and one fare range. A manager says a fare rise therefore cannot reduce passenger journeys at all, now or later.",
          "call": "Which correction follows?",
          "issue": "Responsiveness and scope",
          "rule": "u05-l1-rule",
          "options": [
            {
              "text": "An estimate below one means journeys must rise when fares rise.",
              "why": "The magnitude alone does not reverse the stated demand relationship.",
              "trap": 5
            },
            {
              "text": "Inelastic can still mean fewer journeys; this estimate also has a limited scope.",
              "why": "A magnitude of 0.3 is a response below 1, not zero, and the estimate refers to a stated month and range."
            },
            {
              "text": "A magnitude of 0.3 proves the operator’s profit will rise.",
              "why": "Profit also depends on costs and the size of the changes.",
              "trap": 9
            },
            {
              "text": "The estimate establishes a magnitude of 3 for all future fare changes.",
              "why": "That both inverts the value and expands its scope without evidence.",
              "trap": 7
            }
          ],
          "answer": 1,
          "transfer": true,
          "callType": "accurate"
        }
      ]
    },
    {
      "id": "u05l2",
      "title": "Separate revenue from profit",
      "objective": "Calculate revenue and relevant cost changes before inferring a profit change.",
      "takeaway": "Revenue is price times quantity; profit also subtracts costs.",
      "fieldwork": "Take a simple pricing idea. Write the quantity and cost information you would need before predicting profit.",
      "items": [
        {
          "id": "u05-l2-rule",
          "kind": "rule",
          "say": "Revenue is price times quantity; a profit comparison also needs the relevant costs.",
          "status": "model",
          "sourceIds": [
            "F10",
            "F11",
            "F2"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing; OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Use one consistent row of price, quantity and costs for each option.",
          "title": "Price is only one factor",
          "elements": [
            "Multiply price by the corresponding quantity",
            "Compare the costs under each option",
            "Keep unchanged costs from distorting the difference"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume a higher price always raises revenue",
            "Treat revenue and profit as the same amount"
          ],
          "ex": [
            {
              "facts": "At $10 and 100 units, revenue is $1,000. At $12 and 80 units, revenue is $960. Variable cost is $4 per unit; all other costs are unchanged.",
              "result": "Revenue falls $40, but variable costs fall $80. Profit therefore rises $40: (960 − 320) − (1,000 − 400)."
            },
            {
              "facts": "Two prices produce known revenues, but their costs are not supplied.",
              "result": "Revenue can be compared, but the profit ranking cannot be established without the relevant cost information."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "A fall in revenue necessarily means a fall in profit.",
              "a": false,
              "why": "Costs may fall by more than revenue, so the profit change needs both."
            },
            {
              "t": "mcq",
              "q": "Which expression calculates revenue for one option?",
              "options": [
                "Price minus unit cost",
                "Quantity minus total cost",
                "Price multiplied by quantity"
              ],
              "a": "Price multiplied by quantity",
              "why": "Revenue is the total received from sales before subtracting costs."
            }
          ]
        },
        {
          "id": "u05-l2-term",
          "kind": "term",
          "say": "The amount received from sales, calculated here as price multiplied by quantity sold.",
          "status": "model",
          "sourceIds": [
            "F10",
            "F11",
            "F2"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing; OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Revenue is not what remains after paying expenses.",
          "term": "Revenue",
          "meaning": "The amount received from sales, calculated here as price multiplied by quantity sold.",
          "use": "Selling 100 units at $10 produces $1,000 revenue before costs.",
          "lang": "english",
          "alt": [
            "sales revenue"
          ]
        },
        {
          "id": "u05-l2-h1",
          "kind": "hypo",
          "say": "Known prices and quantities settle revenue; missing costs still matter for profit.",
          "status": "fictional",
          "sourceIds": [
            "F10",
            "F11",
            "F2"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing; OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Known prices and quantities settle revenue; missing costs still matter for profit.",
          "stem": "A workshop sells 200 tickets at $5 each under option A, or 150 tickets at $6 under option B. All tickets in each option sell at its stated price. The relevant costs have not been supplied.",
          "call": "Which conclusion is established?",
          "issue": "Revenue versus profit",
          "rule": "u05-l2-rule",
          "options": [
            {
              "text": "Revenue falls by $100; the profit change is not yet known.",
              "why": "Revenue is $1,000 under A and $900 under B. Missing cost information prevents a profit comparison."
            },
            {
              "text": "Profit falls by $100 because revenue falls by $100.",
              "why": "That assumes the relevant costs remain identical without being told so.",
              "trap": 2
            },
            {
              "text": "Revenue rises by $150 because each ticket costs a dollar more.",
              "why": "Quantity also changes; use each option’s price multiplied by its own quantity.",
              "trap": 9
            },
            {
              "text": "Both revenue and profit rise because the ticket price is higher.",
              "why": "A higher price alone does not establish either conclusion.",
              "trap": 7
            }
          ],
          "answer": 0,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "The relevant costs have not been supplied"
          ],
          "findAsk": "Which detail prevents the revenue calculation from settling the profit change?"
        },
        {
          "id": "u05-l2-pairs",
          "kind": "pairs",
          "say": "Define the accounting measure before comparing options.",
          "status": "practice",
          "sourceIds": [
            "F10",
            "F11",
            "F2"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing; OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Define the accounting measure before comparing options.",
          "set": "Keep the accounts separate",
          "pairs": [
            {
              "l": "Revenue",
              "r": "Price multiplied by units sold"
            },
            {
              "l": "Total variable cost here",
              "r": "Unit variable cost multiplied by units sold"
            },
            {
              "l": "Profit here",
              "r": "Revenue minus all included costs"
            },
            {
              "l": "Unchanged fixed cost",
              "r": "A cost with the same amount under both options"
            },
            {
              "l": "Unit contribution here",
              "r": "Price minus unit variable cost"
            }
          ],
          "spare": [
            "Revenue plus every avoided expense counted twice"
          ],
          "mode": "concept"
        },
        {
          "id": "u05-l2-h2",
          "kind": "hypo",
          "say": "A lower-revenue option can have higher profit when costs fall more.",
          "status": "fictional",
          "sourceIds": [
            "F10",
            "F11",
            "F2"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing; OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "A lower-revenue option can have higher profit when costs fall more.",
          "stem": "For the same workshop, A sells 200 tickets at $5 and B sells 150 at $6. Each attendee creates $4 of variable cost. All other costs are unchanged.",
          "call": "How does profit under B compare with A?",
          "issue": "Costs change too",
          "rule": "u05-l2-rule",
          "options": [
            {
              "text": "It is $100 lower.",
              "why": "That counts only the revenue fall and omits the $200 reduction in variable costs.",
              "trap": 9
            },
            {
              "text": "It is $100 higher.",
              "why": "A contributes $1,000 − $800 = $200; B contributes $900 − $600 = $300. Unchanged other costs cancel in the difference."
            },
            {
              "text": "It is unchanged because all other costs are unchanged.",
              "why": "Variable costs still change with attendance.",
              "trap": 9
            },
            {
              "text": "It is $300 higher.",
              "why": "$300 is B’s contribution before unchanged costs, not the difference from A’s $200.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u05-l2-num",
          "kind": "num",
          "say": "B contributes $700 and A $600, so the profit difference is $100.",
          "status": "fictional",
          "sourceIds": [
            "F10",
            "F11",
            "F2"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing; OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "B contributes $700 and A $600, so the profit difference is $100.",
          "ask": "Option A sells 120 items at $8; option B sells 100 at $10. Variable cost is $3 per item in either option; all other costs are unchanged. What is profit under B minus profit under A, in dollars? Enter an exact signed difference.",
          "answer": "$100",
          "distractors": [
            "$40",
            "-$60",
            "$1,000"
          ],
          "speed": false,
          "alt": [
            "100",
            "+100",
            "+$100"
          ]
        },
        {
          "id": "u05-l2-transfer",
          "kind": "hypo",
          "say": "Keep the difference between options separate from each option’s absolute result.",
          "status": "fictional",
          "sourceIds": [
            "F10",
            "F11",
            "F2"
          ],
          "src": "OpenStax / Rice University: Price Elasticity of Demand and Price Elasticity of Supply; OpenStax / Rice University: Elasticity and Pricing; OpenStax / Rice University: How Individuals Make Choices Based on Their Budget Constraint",
          "hook": "Keep the difference between options separate from each option’s absolute result.",
          "stem": "A community venue compares two ticket plans. Plan A gives $960 revenue and $400 avoidable costs; plan B gives $980 revenue and $350 avoidable costs. A separate $800 cost is identical under both plans. No other cash effects differ.",
          "call": "Which cash comparison is correct?",
          "issue": "Common costs and difference",
          "rule": "u05-l2-rule",
          "options": [
            {
              "text": "B leaves only $20 more because that is the revenue difference.",
              "why": "That ignores the $50 reduction in avoidable costs.",
              "trap": 9
            },
            {
              "text": "A leaves more because its avoidable costs are higher.",
              "why": "Higher costs reduce, rather than increase, the remainder.",
              "trap": 5
            },
            {
              "text": "B leaves $70 more, although both totals are negative after the $800 cost.",
              "why": "A leaves −$240 and B −$170. The common $800 changes each level, but cancels from the $70 difference."
            },
            {
              "text": "B’s total is $630 after every cost in the scenario.",
              "why": "$630 is before subtracting the common $800 cost.",
              "trap": 9
            }
          ],
          "answer": 2,
          "transfer": true,
          "callType": "accurate"
        }
      ]
    },
    {
      "id": "u05l3",
      "title": "Follow the tax wedge",
      "objective": "Calculate buyer price, seller receipt, tax revenue and incidence relative to a common no-tax baseline.",
      "takeaway": "A per-unit tax creates a wedge between what buyers pay and sellers receive; who remits it is a different question.",
      "fieldwork": "For a hypothetical fee, sketch buyer payment, seller receipt and the amount transferred to the authority.",
      "items": [
        {
          "id": "u05-l3-rule",
          "kind": "rule",
          "say": "Tax incidence compares each side’s price change with a specified no-tax baseline.",
          "status": "model",
          "sourceIds": [
            "F11",
            "F12"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax",
          "hook": "Label the gross buyer price and net seller receipt before calculating.",
          "title": "Trace both sides of the payment",
          "elements": [
            "Subtract seller receipt from buyer price to find the per-unit wedge",
            "Use the same no-tax baseline for each side",
            "Multiply the tax per unit by the taxed quantity for tax revenue"
          ],
          "ordered": false,
          "distractorElements": [
            "Assign the entire burden to whoever sends the payment",
            "Multiply the tax by the old quantity despite a changed quantity"
          ],
          "ex": [
            {
              "facts": "Without tax the price is $20. With a $6 tax, buyers pay $23, sellers keep $17 and 54 units trade.",
              "result": "Buyers pay $3 more and sellers receive $3 less per unit. The wedge is $6 and tax revenue is $6 × 54 = $324."
            },
            {
              "facts": "The seller sends the $6 payment to the authority in this same example.",
              "result": "That remittance duty does not change the stated economic split: the buyer-price increase and seller-receipt decrease each equal $3."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "The party remitting a tax necessarily bears its entire economic incidence.",
              "a": false,
              "why": "Remittance identifies who sends the payment; incidence follows the price changes relative to the baseline."
            },
            {
              "t": "mcq",
              "q": "Buyers pay $18, sellers keep $14, and 30 units trade. What is tax revenue?",
              "options": [
                "$540",
                "$120",
                "$420"
              ],
              "a": "$120",
              "why": "The wedge is $4 per unit; $4 × 30 = $120."
            }
          ]
        },
        {
          "id": "u05-l3-term",
          "kind": "term",
          "say": "The distribution of a tax’s economic burden, measured here by price changes relative to a specified no-tax baseline.",
          "status": "model",
          "sourceIds": [
            "F11",
            "F12"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax",
          "hook": "This per-unit price measure is not a complete welfare assessment.",
          "term": "Tax incidence",
          "meaning": "The distribution of a tax’s economic burden, measured here by price changes relative to a specified no-tax baseline.",
          "use": "Compare the buyer-price increase and seller-receipt decrease; do not infer them from the remittance duty.",
          "lang": "english"
        },
        {
          "id": "u05-l3-h1",
          "kind": "hypo",
          "say": "Use changes from the same baseline, not gross price levels.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax",
          "hook": "Use changes from the same baseline, not gross price levels.",
          "stem": "Without tax, a hypothetical market price is $20. With a $6 per-unit tax, buyers pay $23 and sellers receive $17 after remitting the tax. The post-tax quantity is 54.",
          "call": "What is the per-unit price incidence?",
          "issue": "Price incidence",
          "rule": "u05-l3-rule",
          "options": [
            {
              "text": "Sellers bear all $6 because they remit the payment.",
              "why": "Remittance is not the same as economic incidence.",
              "trap": 5
            },
            {
              "text": "Buyers bear $3 and sellers $3 relative to the baseline.",
              "why": "Buyers pay 23 − 20 = $3 more; sellers receive 20 − 17 = $3 less."
            },
            {
              "text": "Buyers bear $23 and sellers $17 of the tax.",
              "why": "Those are price levels, not changes attributable to the tax.",
              "trap": 4
            },
            {
              "text": "Each side bears $6 because both participate in trade.",
              "why": "That counts a total of $12 against a $6 wedge.",
              "trap": 5
            }
          ],
          "answer": 1,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u05-l3-num",
          "kind": "num",
          "say": "Revenue uses the taxed quantity: $8 × 74 = $592.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax",
          "hook": "Revenue uses the taxed quantity: $8 × 74 = $592.",
          "ask": "A market has a per-unit tax of $8 and a post-tax quantity of 74 units. The no-tax quantity was 80. Assuming full collection and no other taxes, what is tax revenue in dollars? Enter an exact amount.",
          "answer": "$592",
          "distractors": [
            "$640",
            "$74",
            "$8"
          ],
          "speed": false,
          "alt": [
            "592"
          ]
        },
        {
          "id": "u05-l3-h2",
          "kind": "hypo",
          "say": "Unequal incidence still adds to the per-unit tax wedge.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax",
          "hook": "Unequal incidence still adds to the per-unit tax wedge.",
          "stem": "A second model has a no-tax price of $20. After an $8 per-unit tax, buyers pay $26 and sellers keep $18. Sellers remit the payment; 74 units trade.",
          "call": "Which per-unit split follows?",
          "issue": "Unequal price incidence",
          "rule": "u05-l3-rule",
          "options": [
            {
              "text": "Buyers bear $2 and sellers $6.",
              "why": "That reverses the two changes from the baseline.",
              "trap": 5
            },
            {
              "text": "Sellers bear $8 because remittance is assigned to them.",
              "why": "The observed buyer-price increase places part of the burden on buyers.",
              "trap": 5
            },
            {
              "text": "Buyers bear $6 and sellers $2.",
              "why": "The buyer increase is 26 − 20 = $6; the seller decrease is 20 − 18 = $2. Together they equal the $8 wedge."
            },
            {
              "text": "Buyers bear $8 because $26 is the highest listed price.",
              "why": "Compare prices with the $20 baseline rather than selecting the largest level.",
              "trap": 4
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate"
        },
        {
          "id": "u05-l3-sort",
          "kind": "sort",
          "say": "Keep the administrative duty, economic effect and total collection distinct.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax",
          "hook": "Keep the administrative duty, economic effect and total collection distinct.",
          "q": "What does each independent hypothetical statement describe?",
          "buckets": [
            "Remittance duty",
            "Economic incidence",
            "Tax revenue"
          ],
          "items": [
            {
              "text": "The seller sends the tax payment to the authority.",
              "bucket": "Remittance duty",
              "why": "This identifies the party responsible for remitting the tax."
            },
            {
              "text": "Buyers pay $6 more per unit than in the no-tax baseline.",
              "bucket": "Economic incidence",
              "why": "This measures a buyer-price change."
            },
            {
              "text": "The authority collects $8 on each of 74 units.",
              "bucket": "Tax revenue",
              "why": "This determines total tax revenue."
            },
            {
              "text": "Sellers receive $2 less per unit than without tax.",
              "bucket": "Economic incidence",
              "why": "This measures a seller-receipt change."
            },
            {
              "text": "The rules require the buyer to submit the payment.",
              "bucket": "Remittance duty",
              "why": "This states an administrative obligation, not its incidence."
            },
            {
              "text": "Total collections are $592.",
              "bucket": "Tax revenue",
              "why": "This is the amount received by the authority."
            }
          ],
          "mode": "contrast"
        },
        {
          "id": "u05-l3-transfer",
          "kind": "hypo",
          "say": "Trace a new tax example through gross payment and net receipt.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax",
          "hook": "Trace a new tax example through gross payment and net receipt.",
          "stem": "A hypothetical ticket tax is $4. Without it, the ticket price is $10; with it, buyers pay $13 and the venue keeps $9. The venue sends the tax payment. No other charges differ.",
          "call": "Which claim is supported?",
          "issue": "Transfer the wedge",
          "rule": "u05-l3-rule",
          "options": [
            {
              "text": "The venue bears $4 because it transfers the money.",
              "why": "The price changes show a $3 buyer share as well.",
              "trap": 5
            },
            {
              "text": "The tax has no buyer effect because tickets still sell.",
              "why": "Continued purchases do not erase the $3 price increase.",
              "trap": 6
            },
            {
              "text": "Tax revenue is $4 regardless of the number of tickets sold.",
              "why": "$4 is the per-ticket amount; total revenue also needs quantity.",
              "trap": 9
            },
            {
              "text": "The buyer-price increase is $3 and the venue’s receipt falls $1.",
              "why": "Both changes are relative to the same $10 baseline and add to the $4 wedge."
            }
          ],
          "answer": 3,
          "transfer": true,
          "callType": "accurate"
        }
      ]
    },
    {
      "id": "u05l4",
      "title": "Respect incidence assumptions",
      "objective": "State the conditions behind incidence predictions and distinguish them from distributional or policy judgments.",
      "takeaway": "The less responsive side tends to bear more in the competitive model; a full policy assessment needs more than incidence.",
      "fieldwork": "Name one real-world feature that could make a simple tax-incidence model incomplete: adjustment time, avoidance, information, market power or use of revenue.",
      "items": [
        {
          "id": "u05-l4-rule",
          "kind": "rule",
          "say": "Under the competitive benchmark, relative responsiveness affects the split; policy judgment needs additional information.",
          "status": "model",
          "sourceIds": [
            "F11",
            "F12",
            "F15",
            "E11"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax; CORE Econ: Evaluating institutions and outcomes: Fairness; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "A model can explain a burden without justifying it.",
          "title": "Keep incidence conditional",
          "elements": [
            "Compare supply and demand responsiveness under the stated horizon",
            "Check collection, information and market-structure assumptions",
            "Keep incidence, revenue use and ethical assessment distinct"
          ],
          "ordered": false,
          "distractorElements": [
            "Assume remittance never matters under any real-world conditions",
            "Infer a fair policy from an incidence percentage alone"
          ],
          "ex": [
            {
              "facts": "In the standard competitive model with full collection, unchanged information and no administrative or liquidity differences, buyers or sellers can remit the same per-unit tax.",
              "result": "Changing only the remitter leaves the same tax wedge and modeled outcome. With usual curves, the less price-responsive side bears a larger share of a small tax’s price incidence."
            },
            {
              "facts": "A tax changes disclosure, avoidance or administrative costs when the remitter changes.",
              "result": "Those conditions differ from the simple equivalence case. Incidence alone also does not establish fairness, compensation or the value of revenue use."
            }
          ],
          "quiz": [
            {
              "t": "tf",
              "q": "The same remittance-equivalence prediction automatically applies when avoidance costs change.",
              "a": false,
              "why": "That alters a condition held fixed by the equivalence comparison."
            },
            {
              "t": "mcq",
              "q": "Which fact is needed to interpret a claim that buyers bear most of a tax?",
              "options": [
                "A claim that buyers are less deserving",
                "The comparative responsiveness and model conditions",
                "The identity of the person printing the bill"
              ],
              "a": "The comparative responsiveness and model conditions",
              "why": "Relative responsiveness helps explain incidence within the specified model; it does not rank people morally."
            }
          ]
        },
        {
          "id": "u05-l4-term",
          "kind": "term",
          "say": "The assignment of responsibility for remitting a tax under the stated tax rules.",
          "status": "model",
          "sourceIds": [
            "F11",
            "F12",
            "F15",
            "E11"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax; CORE Econ: Evaluating institutions and outcomes: Fairness; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Separate the assigned remitter from the price-based burden.",
          "term": "Statutory incidence",
          "meaning": "The assignment of responsibility for remitting a tax under the stated tax rules.",
          "use": "An exercise may assign the seller to send the tax while buyers bear part of its economic burden.",
          "lang": "english",
          "alt": [
            "tax remittance responsibility"
          ]
        },
        {
          "id": "u05-l4-h1",
          "kind": "hypo",
          "say": "Relative elasticity can predict a direction without giving an exact percentage.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12",
            "F15",
            "E11"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax; CORE Econ: Evaluating institutions and outcomes: Fairness; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Relative elasticity can predict a direction without giving an exact percentage.",
          "stem": "In a standard competitive model, a small per-unit tax is fully collected. Demand is less price-responsive than supply over the specified horizon. No other model conditions change.",
          "call": "What does this benchmark predict?",
          "issue": "Relative responsiveness",
          "rule": "u05-l4-rule",
          "options": [
            {
              "text": "Sellers bear all the tax whenever they submit the payment.",
              "why": "Remittance does not identify the burden under these assumptions.",
              "trap": 5
            },
            {
              "text": "The buyer share must be exactly three quarters.",
              "why": "Relative ranking alone does not provide a numerical percentage.",
              "trap": 3
            },
            {
              "text": "Buyers bear the larger share of the price incidence.",
              "why": "The less responsive side bears relatively more in the stated competitive model."
            },
            {
              "text": "Buyers bear more because their needs are morally less important.",
              "why": "The model concerns responsiveness, not the moral worth of buyers or needs.",
              "trap": 4
            }
          ],
          "answer": 2,
          "transfer": false,
          "callType": "accurate",
          "facts": [
            "Demand is less price-responsive than supply",
            "No other model conditions change"
          ],
          "findAsk": "Which details support the comparative-incidence prediction within the fixed model?",
          "boundary": true
        },
        {
          "id": "u05-l4-h2",
          "kind": "hypo",
          "say": "An equivalence result belongs to its stated conditions.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12",
            "F15",
            "E11"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax; CORE Econ: Evaluating institutions and outcomes: Fairness; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "An equivalence result belongs to its stated conditions.",
          "stem": "Two otherwise identical competitive models impose the same $4 tax. One assigns remittance to sellers; the other to buyers. Collection is complete, information is unchanged, and there are no administrative, timing or liquidity differences.",
          "call": "What does the benchmark comparison predict?",
          "issue": "Remittance equivalence",
          "rule": "u05-l4-rule",
          "options": [
            {
              "text": "A different burden solely because the payment form names a buyer.",
              "why": "Within this benchmark, the named remitter alone does not determine incidence.",
              "trap": 5
            },
            {
              "text": "No tax revenue when buyers remit directly.",
              "why": "Full collection is explicitly assumed in both cases.",
              "trap": 3
            },
            {
              "text": "Every actual tax system must behave identically in every setting.",
              "why": "The conclusion applies only under the specified assumptions.",
              "trap": 7
            },
            {
              "text": "The same modeled price wedge and quantity.",
              "why": "Only remittance assignment changes; all conditions that support equivalence are held fixed."
            }
          ],
          "answer": 3,
          "transfer": false,
          "callType": "accurate",
          "boundary": true
        },
        {
          "id": "u05-l4-trap",
          "kind": "trap",
          "say": "Identify the changed assumption without inventing its effect.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12",
            "F15",
            "E11"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax; CORE Econ: Evaluating institutions and outcomes: Fairness; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Identify the changed assumption without inventing its effect.",
          "stem": "A proposal changes the remitter and also changes how visible the tax is to buyers. A report applies a model that held information unchanged.",
          "wrong": "The model proves the policy cannot alter any response.",
          "right": "The information condition changed, so this equivalence result alone does not settle the response.",
          "why": "A theorem with fixed information cannot automatically be transferred to a comparison that changes information. The direction needs evidence or another explicit model.",
          "fixDistractors": [
            "The information change proves quantity will fall by exactly half.",
            "Remittance assignment alone determines the full burden regardless of information."
          ],
          "cat": 2,
          "boundary": true
        },
        {
          "id": "u05-l4-sort",
          "kind": "sort",
          "say": "Do not turn a per-unit split into a complete distributional assessment.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12",
            "F15",
            "E11"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax; CORE Econ: Evaluating institutions and outcomes: Fairness; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Do not turn a per-unit split into a complete distributional assessment.",
          "q": "Does this follow from a calculation showing buyers bear $6 of an $8 tax wedge?",
          "buckets": [
            "Established by this calculation",
            "Needs additional information or judgment"
          ],
          "items": [
            {
              "text": "The buyer share of the per-unit wedge is 75%.",
              "bucket": "Established by this calculation",
              "why": "6 / 8 = 0.75."
            },
            {
              "text": "The policy is fair to every low-income household.",
              "bucket": "Needs additional information or judgment",
              "why": "Incidence alone lacks household circumstances and a fairness criterion."
            },
            {
              "text": "The seller share of that wedge is $2.",
              "bucket": "Established by this calculation",
              "why": "The remaining part of the $8 wedge is $2."
            },
            {
              "text": "Revenue is spent on effective compensation.",
              "bucket": "Needs additional information or judgment",
              "why": "Revenue use is not specified by the price split."
            },
            {
              "text": "Buyers’ per-unit price increase exceeds sellers’ receipt decrease.",
              "bucket": "Established by this calculation",
              "why": "The stated split is $6 versus $2."
            },
            {
              "text": "Every buyer’s total welfare loss is exactly $6.",
              "bucket": "Needs additional information or judgment",
              "why": "A per-unit price change is not a complete person-level welfare measure."
            }
          ],
          "mode": "contrast",
          "boundary": true
        },
        {
          "id": "u05-l4-transfer",
          "kind": "argue",
          "say": "Use incidence as evidence for deliberation, not a hidden moral score.",
          "status": "fictional",
          "sourceIds": [
            "F11",
            "F12",
            "F15",
            "E11"
          ],
          "src": "OpenStax / Rice University: Elasticity and Pricing; CORE Econ: The effect of a tax; CORE Econ: Evaluating institutions and outcomes: Fairness; US Environmental Protection Agency, 2024: Guidelines for Preparing Economic Analyses, third edition",
          "hook": "Use incidence as evidence for deliberation, not a hidden moral score.",
          "stem": "A city’s model estimates that renters bear most of a hypothetical housing fee’s price incidence. The report does not describe income differences, adjustment options or how collections are used. A council member says the estimate alone proves the fee is fair.",
          "call": "Which response fits the evidence?",
          "issue": "Incidence and judgment",
          "rule": "u05-l4-rule",
          "options": [
            {
              "text": "The estimate informs burden; fairness still needs criteria and missing facts.",
              "why": "Who bears the modeled price change is relevant but does not settle distribution, alternatives or revenue use."
            },
            {
              "text": "The estimate proves the fee is unfair under every possible criterion.",
              "why": "The opposite universal judgment also exceeds the supplied facts.",
              "trap": 7
            },
            {
              "text": "Fairness is settled once the assigned remitter is identified.",
              "why": "Remittance is neither a complete burden measure nor a fairness criterion.",
              "trap": 4
            },
            {
              "text": "Renters’ income and adjustment options cannot matter after a model is calculated.",
              "why": "Those omitted facts can matter to evaluating consequences and fairness.",
              "trap": 7
            }
          ],
          "answer": 0,
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
