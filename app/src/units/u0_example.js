// Complete all-nine-kind authoring/test fixture; excluded from the built course.
(function () {
  const unit = {
    id: "u0_example", title: "Economic reasoning: authoring example", subject: "choices",
    blurb: "A complete miniature of the inherited lesson family: predict, learn, retrieve, change a condition and reflect.",
    assume: "All quantities and scenarios are invented. A model's stated criterion determines its calculation; the result is not a moral judgment or an empirical forecast.",
    lessons: [
      { id: "u0_examplel1", title: "Compare the next change", items: [
        {
          id: "u0-r-marginal", kind: "rule", status: "model", sourceIds: ["E1", "E11"], src: "Economic model assumptions; EPA economic-analysis guidelines",
          title: "Compare the feasible change", say: "Under a net-benefit criterion, compare the next feasible change with its alternative.",
          elements: ["Name the feasible alternative", "Count the additional benefit", "Count the additional opportunity cost"],
          distractorElements: ["Recover past spending even when it cannot be changed", "Choose the largest total without comparing the change"],
          hook: "A full basket does not tell you whether the next apple is worth its cost.",
          ex: [{facts: "An extra workshop brings 30 credits of benefit and costs 20 credits, with no other effects.", result: "The additional net benefit is 10 credits under this stated criterion."}, {facts: "The extra workshop instead costs 40 credits for the same 30-credit benefit.", result: "It reduces net benefit by 10; the changed cost reverses the conclusion."}],
          quiz: [{t: "tf", q: "Past spending that cannot be recovered necessarily makes the next workshop worthwhile.", a: false, why: "Unchangeable past spending does not alter the additional benefit or cost."}, {t: "mcq", q: "The only additional benefit is 12 credits and the only additional cost is 15. What follows under a net-benefit criterion?", options: ["The change reduces net benefit by 3 credits", "The change raises net benefit by 27 credits", "The benefit alone establishes an improvement"], a: "The change reduces net benefit by 3 credits", why: "Compare 12 with 15; neither the gross benefit nor their sum is the net change."}]
        },
        {
          id: "u0-t-opportunity", kind: "term", status: "model", sourceIds: ["E1", "E11"], src: "Economic choice and opportunity cost",
          term: "Opportunity cost", meaning: "The value of the best feasible alternative forgone by a choice", alt: ["cost of the best forgone alternative"], lang: "english",
          say: "A choice uses resources that could have served another feasible purpose.", hook: "The road not taken counts only if it was actually open.", use: "Using the only room for a workshop can displace a valuable rehearsal."
        },
        {
          id: "u0-h-marginal", kind: "hypo", status: "fictional", sourceIds: ["E1", "E11"], src: "Invented application of marginal comparison",
          stem: "A venue can add one workshop. It would bring 30 credits of benefit and use resources worth 20 credits in their best alternative. The goal is to maximize net benefits. Capacity is available and there are no other effects.",
          call: "Which conclusion follows under that criterion?", issue: "additional benefits and opportunity costs", rule: "u0-r-marginal", facts: ["30 credits of benefit", "20 credits in their best alternative"], findAsk: "Tap the two amounts compared to calculate this change’s net benefit.", answer: 1,
          options: [{text: "Reject it because any resource cost rules out a gain.", why: "A cost must be compared with the additional benefit.", trap: 5}, {text: "Add it: the additional net benefit is 10 credits.", why: "The stipulated 30-credit benefit exceeds the 20-credit opportunity cost by 10."}, {text: "Add it because the net gain is 50 credits.", why: "Adding benefit and cost does not calculate net benefit.", trap: 5}, {text: "Its positive net benefit proves every affected person gains.", why: "An aggregate gain alone does not show who receives it or bears the cost.", trap: 7}],
          say: "A conditional net gain does not establish that every person benefits."
        },
        {
          id: "u0-a-marginal", kind: "argue", status: "fictional", sourceIds: ["E1"], src: "Invented distinction between model and judgment",
          stem: "A club's model values an extra event's benefits at 50 credits and costs at 35. The model leaves accessibility effects unmeasured. The committee asks what the calculation establishes.",
          call: "Which statement is best supported?", issue: "calculation versus complete evaluation", rule: "u0-r-marginal", answer: 0,
          options: [{text: "The measured net benefit is 15; accessibility still needs consideration.", why: "This reports the modeled difference while identifying an omitted effect."}, {text: "The event is uniquely fair because 50 exceeds 35.", why: "This calculation does not establish a complete fairness criterion.", trap: 7}, {text: "Unmeasured accessibility effects necessarily equal zero.", why: "Not measured is different from absent.", trap: 3}, {text: "The omission makes subtraction impossible.", why: "The measured difference can still be calculated and qualified.", trap: 5}],
          say: "Calculate the stated model and name what its result does not settle."
        },
        {
          id: "u0-h-transfer", kind: "hypo", status: "fictional", sourceIds: ["E1", "E11"], src: "Invented new setting for marginal comparison",
          stem: "A library can extend opening by one hour. That hour yields benefits valued at 18 credits and uses staff time worth 24 credits in its best alternative. Its stated goal is net benefits; all other effects are zero in this model.",
          call: "What follows for the extra hour in this model?", issue: "comparing the marginal change", rule: "u0-r-marginal", transfer: true, boundary: true, answer: 2,
          options: [{text: "Extend because any positive benefit is sufficient.", why: "The 18-credit benefit is smaller than the 24-credit cost.", trap: 2}, {text: "Extend because net benefit is 42 credits.", why: "The sum is not net benefit.", trap: 5}, {text: "Do not extend: the added net benefit is minus 6 credits.", why: "Under the stipulated criterion, 18 minus 24 is negative."}, {text: "The calculation proves libraries should never extend hours.", why: "Different costs, benefits or objectives could change the conclusion.", trap: 7}],
          facts: ["18 credits", "24 credits"], findAsk: "Tap the stated added benefit and the stated staff-time opportunity cost.", say: "A changed comparison can reverse the answer without changing the method."
        },
        {
          id: "u0-s-compare", kind: "steps", status: "practice", sourceIds: ["E1", "E11"], src: "Transparent model comparison routine",
          title: "Compare one specified change", steps: ["State the baseline and feasible change", "List additional benefits and opportunity costs", "Compute the net change and state its limits"],
          distractors: ["Treat an unmeasured effect as zero without saying so", "Choose a conclusion before identifying the baseline"],
          applyTo: {facts: "You have stated the baseline and the feasible change but have not identified any incremental effects.", stop: "List additional benefits and opportunity costs", why: "The next calculation needs the incremental inputs first."},
          say: "A calculation needs a comparison before it needs arithmetic.", hook: "Label both sides of the bridge before measuring the crossing."
        }
      ]},
      { id: "u0_examplel2", title: "See effects outside the payment", items: [
        {
          id: "u0-r-spillover", kind: "rule", status: "model", sourceIds: ["E11"], src: "EPA economic-analysis guidelines: externalities",
          title: "Separate private and external effects", say: "A private gain need not include costs or benefits borne by people outside the transaction.",
          elements: ["Identify who receives the private gain", "Identify effects outside the transaction", "Keep the evaluation criterion explicit"],
          distractorElements: ["Treat unpriced effects as nonexistent", "Assume a positive total compensates every loser"],
          hook: "A receipt can end before the consequences do.",
          ex: [{facts: "A workshop earns a 20-credit private gain but causes 30 credits of stated neighbor harm.", result: "Under an unweighted money-sum criterion, the net change including harm is minus 10."}, {facts: "The harm is reduced to 5 while private gain stays 20.", result: "The same criterion now gives plus 15; the neighbors still bear the remaining harm."}],
          quiz: [{t:"tf",q:"A positive aggregate balance guarantees actual compensation to everyone harmed.",a:false,why:"The total does not specify a transfer to the harmed people."},{t:"mcq",q:"A neighbor effect is important but cannot be monetized here. How should the analysis treat it?",options:["Describe it separately and state the limitation","Assign it zero because no price is available","Count it as revenue for the workshop"],a:"Describe it separately and state the limitation",why:"An absent monetary estimate does not establish that the effect is absent."}]
        },
        {
          id: "u0-t-externality", kind: "term", status: "model", sourceIds: ["E11"], src: "EPA economic-analysis guidelines",
          term: "Externality", meaning: "An effect on others that is not reflected in the decision maker's private costs or benefits", lang: "english",
          say: "Some effects fall outside the decision maker's private calculation.", hook: "The consequence crosses the boundary of the receipt.", use: "Uncompensated noise can affect neighbors who did not buy the workshop's product."
        },
        {
          id: "u0-h-spillover", kind: "hypo", status: "fictional", sourceIds: ["E11"], src: "Invented external-cost comparison",
          stem: "A workshop expansion has a private net gain of 20 credits. Its only other effect is neighbor harm valued at 30 credits. The evaluation criterion is the unweighted sum of these money values, with no compensation assumed.",
          call: "Does the expansion increase net gains under this criterion?", issue: "private gains and external costs", rule: "u0-r-spillover", grid: true, answer: 3,
          options: [{text:"Yes, because the workshop gains 20 credits.",why:"This omits the stated 30-credit external cost.",trap:2},{text:"Yes, because all money values should be added as benefits.",why:"A harm is a cost under the stated criterion.",trap:5},{text:"No, because any external effect always rules out an improvement.",why:"The conclusion depends on magnitudes; a smaller harm could change it.",trap:7},{text:"No, because 20 minus 30 is minus 10 credits.",why:"The stated harm exceeds the private net gain under this criterion."}],
          facts: ["neighbor harm valued at 30 credits"], findAsk: "Tap the phrase naming the external harm omitted by a private-gain-only comparison.", say: "A positive private result can coexist with a negative total under a stated criterion."
        },
        {
          id: "u0-p-quantities", kind: "pairs", status: "model", sourceIds: ["E1", "E2", "E11"], src: "Economic measurement distinctions", mode: "concept",
          pairs: [{l:"Extra benefit from one more unit",r:"Marginal benefit"},{l:"Best feasible alternative forgone",r:"Opportunity cost"},{l:"Domestic production over a period",r:"GDP"},{l:"Effect outside private costs or benefits",r:"Externality"},{l:"Sales receipts before deducting production costs",r:"Revenue"}],
          spare: ["A complete moral ranking"], say: "Different economic quantities answer different questions."
        },
        {
          id: "u0-n-spillover", kind: "num", status: "fictional", sourceIds: ["E11"], src: "Invented external-cost calculation",
          ask: "A change creates $20 of private net gain and $30 of external harm, with no other effects. What is net gain including the harm, in dollars?", answer: "-$10", alt: ["-10", "minus ten dollars"], distractors: ["$50", "$10", "$20"], speed: false,
          say: "20 minus 30 equals minus 10; subtract the external cost rather than adding it.", hook: "Check the sign before celebrating the total."
        },
        {
          id: "u0-t-gdp", kind: "term", status: "practice", sourceIds: ["E2"], src: "US Bureau of Economic Analysis GDP learning guide",
          term: "GDP", alt: ["gross domestic product"], meaning: "The value of final goods and services produced within an economy over a period", lang: "english",
          say: "GDP measures production, not every dimension of well-being.", hook: "An output gauge is not the whole dashboard.", use: "An output increase does not tell you how its gains are distributed."
        }
      ]},
      { id: "u0_examplel3", title: "Separate evidence and evaluation", items: [
        {
          id: "u0-r-evidence", kind: "rule", status: "practice", sourceIds: ["E8", "E9"], src: "Duflo, Glennerster and Kremer; Deaton and Cartwright",
          title: "State what the comparison establishes", say: "Causal inference needs a defensible comparison; a result's scope still needs examination.",
          elements: ["Name the intervention and comparison", "Check the assignment and measurement", "State the population and transfer limits"],
          distractorElements: ["Treat any before-after change as the intervention's effect", "Assume one trial establishes the same effect everywhere"],
          hook: "A window onto one setting is not a map of every setting.",
          ex: [{facts:"A bonus starts during a busy season and measured output rises, without a comparison group.",result:"The before-after difference does not isolate the bonus from seasonal change."},{facts:"A well-implemented randomized trial estimates an effect for its sample.",result:"Transport to a different population needs further justification."}],
          quiz: [{t:"tf",q:"Random assignment guarantees exactly identical groups in every finite sample.",a:false,why:"Chance imbalance remains possible; randomization is not exact matching."},{t:"mcq",q:"A trial estimates an effect in participating workplaces. What remains to assess before applying it elsewhere?",options:["Whether the relevant settings and mechanisms differ","Whether the effect can be declared universal immediately","Whether a causal study is automatically useless"],a:"Whether the relevant settings and mechanisms differ",why:"Local causal evidence can be valuable without automatically transporting unchanged."}]
        },
        {
          id: "u0-t-counterfactual", kind: "term", status: "model", sourceIds: ["E8"], src: "Randomization toolkit: causal comparison",
          term: "Counterfactual", meaning: "What would occur for the same target under the specified alternative condition", lang: "english",
          say: "An effect compares an outcome with what would occur under the alternative.", hook: "The missing branch matters.", use: "The outcome without a bonus is not automatically last month's outcome."
        },
        {
          id: "u0-so-claims", kind: "sort", status: "practice", sourceIds: ["E1"], src: "Philosophy of economics: positive and normative claims", mode: "category",
          q: "Does this statement assert a descriptive/conditional claim or an evaluative priority? Classification does not establish that it is true.", buckets: ["Descriptive or conditional", "Evaluative priority"],
          items: [{text:"In this model, a 10-credit tax lowers traded quantity by five units.",bucket:"Descriptive or conditional",why:"This states a consequence of a specified model."},{text:"We ought to prioritize the least-resourced household.",bucket:"Evaluative priority",why:"This selects a distributional criterion."},{text:"Measured output rose after the new bonus started.",bucket:"Descriptive or conditional",why:"This reports a pattern without yet establishing its cause."},{text:"Residents' consent should constrain the proposed expansion.",bucket:"Evaluative priority",why:"This states a process requirement."},{text:"The survey's median reported income is 30 credits.",bucket:"Descriptive or conditional",why:"This reports a sample statistic."},{text:"Equal grants are the fairest allocation in this case.",bucket:"Evaluative priority",why:"This evaluates an allocation under a fairness judgment."}],
          say: "Separate what is claimed to happen from what is claimed to matter."
        },
        {
          id: "u0-tr-output", kind: "trap", status: "fictional", sourceIds: ["E2", "E3"], src: "Invented GDP inference, informed by BEA and OECD", cat: 7,
          stem: "A fictional economy's real GDP rises. You have no information about distribution, unpaid work, health or environmental effects.",
          wrong: "Every resident's well-being must have improved.", right: "Measured real output rose; individual well-being needs additional information.",
          fixDistractors: ["Every resident's well-being must have worsened.", "GDP growth establishes that income was shared equally."],
          why: "The production measure alone does not establish each person's outcomes or a complete welfare ranking.", say: "A production statistic cannot carry every welfare claim.", hook: "One gauge cannot tell you every passenger's experience."
        },
        {
          id: "u0-a-evidence", kind: "argue", status: "fictional", sourceIds: ["E8", "E9"], src: "Invented interpretation of a workplace comparison", rule: "u0-r-evidence", issue: "before-after versus causal inference", boundary: true, transfer: true,
          stem: "A warehouse introduces a bonus in December and output rises. December also brings a seasonal demand increase. No comparison workplace, assignment procedure or further evidence is available.",
          call: "Which conclusion is warranted by the information given?", answer: 2,
          options: [{text:"The bonus caused the entire increase.",why:"The seasonal change has not been separated from the bonus.",trap:3},{text:"The bonus had no effect at all.",why:"The information does not establish a zero effect either.",trap:3},{text:"The change alone does not isolate the bonus's causal effect.",why:"An alternative explanation remains without a defensible comparison."},{text:"Seasonality proves bonuses never affect output.",why:"One unresolved case cannot support a universal conclusion.",trap:7}],
          say: "An unresolved causal effect is not the same as a zero effect."
        }
      ]}
    ]
  };
  if (typeof module !== "undefined") module.exports = unit;
  else (globalThis.OIKOS_UNITS = globalThis.OIKOS_UNITS || []).push(unit);
})();
