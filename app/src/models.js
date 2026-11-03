// Oikos rule labs. Deliberately small, deterministic models, never behavioral forecasts.
// All quantities and people are invented. Currency is an accounting unit in the model.
const Models = (() => {
  const field = (id, label, options, value) => ({id,label,options:options.map(([value,label])=>({value:String(value),label})),value:String(value)});
  const LABS = [
    {
      id:'metrics', tag:'Incentives · units 3 & 10', title:'You get what you count',
      description:'Two work plans. Two bonus rules. Does the better-paid plan solve more problems?',
      context:'A fictional support team can use a fast plan (12 tickets closed, 6 durably resolved) or a careful plan (8 closed, all 8 resolved). These outputs are fixed assumptions. Each worker has the same base pay; only the bonus is shown.',
      assumptions:['A closed ticket can reopen; a durable resolution does not.','Verified resolutions can be measured perfectly here. Audit cost, effort, customer needs and gaming after a rule change are omitted.','The calculator ranks cash bonuses. It does not predict which plan a person will choose.'],
      fields:[field('rule','Pay $2 for each…',[['closed','Logged closure'],['resolved','Verified resolution']],'closed')],
      predict:'Which plan earns more under your rule? Will that also mean more durable resolutions?',
      reflection:'What might workers do that this model leaves out? How would you check quality without making the measurement system harmful?',
      sourceIds:['F4','E5','E7'], baseline:'Bonus per logged closure',
      limits:'Quality is perfectly observable in this example. Real work has several dimensions, verification costs, and people who adapt to the measurement.',
    },
    {
      id:'tax', tag:'Tax incidence · unit 5', title:'Who really pays?',
      description:'Move the collection point. Change price responsiveness. Watch the economic burden.',
      context:'A competitive fictional market has inverse demand P = 100 − bQ and supply P = Q. Q is divisible units per day; P is dollars per unit. A per-unit tax creates a wedge between the buyer price and the seller’s net price. There are no spillovers, evasion or administrative costs.',
      assumptions:['Buyers and sellers are price takers, the curves stay fixed, and the market clears.','A larger b means quantity demanded responds less to a $1 price change. This is a slope, not an elasticity estimate.','Revenue is a transfer to the public budget, not a resource loss. No use of that revenue is modeled.'],
      fields:[field('slope','Demand response to a $1 price change',[[.5,'More responsive: 2 units'],[1,'1 unit'],[2,'Less responsive: 0.5 units']],1),field('tax','Tax per traded unit',[[0,'$0'],[10,'$10'],[20,'$20']],20),field('collector','Who sends the tax payment?',[["seller","Seller"],["buyer","Buyer"]],'seller')],
      predict:'Which side bears more of the tax as a price change? Does changing who sends the payment change the result in this model?',
      reflection:'Who benefits from the revenue? What might change if evasion, market power, or a useful tax-funded service were included?',
      sourceIds:['F10','F11','F12'], baseline:'No tax, with the same demand response',
      limits:'The incidence result is conditional on these competitive curves. It is not an estimate for a real tax or a verdict on whether a tax is worthwhile.',
    },
    {
      id:'spillover', tag:'External costs · unit 6', title:'The missing invoice',
      description:'A workshop earns gains from production while its neighbors bear a cost.',
      context:'Fictional output Q is divisible and modeled continuously. Marginal benefit is 100 − 5Q and marginal private cost is 10 + 5Q; totals are the areas under these curves, rather than sums of separate whole-unit margins. Each unit also causes an assumed monetary harm h to neighbors. The quantity maximizing private net gains is 9. Compare it with your chosen output.',
      assumptions:['All benefits and costs use the same fictional dollar measure and are known with certainty.','The calculator adds up benefits and private costs across output, starting from zero. There is no fixed cost.','Summing money gains and losses is a criterion used here, not proof of fair compensation or permission to cause harm.'],
      fields:[field('quantity','Units produced',[[0,'0'],[3,'3'],[6,'6'],[8,'8'],[9,'9'],[10,'10']],6),field('harm','Neighbor harm per unit',[[10,'$10'],[30,'$30']],30)],
      predict:'Does reducing output increase the total after counting neighbor harm? What changes when the assumed harm is smaller?',
      reflection:'Whose losses can be priced, and whose cannot? Would compensation, consent, or a right to a clean environment change the decision?',
      sourceIds:['F13','F14','E11'], baseline:'9 units, with the same harm per unit',
      limits:'The model assumes a money value for harm. It does not establish that affected people accept that value, receive compensation, or consent.',
    },
    {
      id:'commons', tag:'Shared resources · unit 7', title:'One lake, four fleets',
      description:'A catch rule changes what is left to grow. Explore compliance and the next three seasons.',
      context:'A fictional lake starts with 100 tonnes of fish biomass. Four fleets harvest, then the remaining biomass grows by 25%, capped at 100 tonnes. Compare three seasons of a common catch limit with a baseline where each fleet requests 10 tonnes per season.',
      assumptions:['Growth is a deliberately simplified rule, not a biological estimate. Weather, species, costs, livelihoods and migration are absent.','If requests exceed stock, all catch requests are reduced proportionally. Fractional tonnes are allowed.','An optional noncomplying fleet requests 20 tonnes each season; the other three follow your limit.'],
      fields:[field('limit','Seasonal limit per complying fleet',[[0,'0 tonnes'],[5,'5 tonnes'],[10,'10 tonnes'],[15,'15 tonnes']],5),field('outside','Fleets that request 20 tonnes instead',[[0,'None: all four comply'],[1,'One: the other three comply']],0)],
      predict:'Will your rule leave more biomass after three seasons? Is an equal limit enough if one fleet does not follow it?',
      reflection:'Who designs and monitors the rule? What would make it legitimate and workable for fleets with different needs or equipment?',
      sourceIds:['I2','E10','F16'], baseline:'All four fleets request 10 tonnes each season',
      limits:'A stable resource stock does not by itself show that a rule is fair, affordable to enforce, or resilient to ecological shocks.',
    },
    {
      id:'public-good', tag:'Cooperation · unit 7', title:'The shared pot',
      description:'Keep credits or contribute them. Separate your payoff from the group total.',
      context:'Four players start with 10 credits each. Contributed credits are multiplied by m and the result is divided equally among all four, including noncontributors. Uncontributed credits stay with their owner. Others’ contributions remain fixed while you vary yours.',
      assumptions:['The multiplier is a fictional productive technology. No additional costs or effects are modeled.','Players can value fairness or reciprocity; the table measures credits only.','Changing your contribution does not make the other players respond in this single-round comparison.'],
      fields:[field('you','Your contribution',[[0,'0 credits'],[5,'5 credits'],[10,'10 credits']],5),field('others','Each other player contributes',[[0,'0 credits'],[5,'5 credits'],[10,'10 credits']],5),field('multiplier','Multiplier on the shared pot',[[1.6,'1.6×'],[4.8,'4.8×']],1.6)],
      predict:'What happens to your payoff and the group total when you contribute more? Does the answer change at the larger multiplier?',
      reflection:'What would communication, repeated interaction, or a shared rule change? Which values are missing from a credits-only payoff?',
      sourceIds:['I1','E10'], baseline:'You contribute zero; others and multiplier unchanged',
      limits:'A lower personal credit payoff does not prove that cooperation is irrational: people may value other outcomes. Payoff incentives are not observed behavior.',
    },
    {
      id:'budget', tag:'Distribution · unit 11', title:'The same total, different lives',
      description:'Distribute a fixed grant and compare outcomes. The calculator cannot choose your fairness principle.',
      context:'Three fictional households start with 20, 40 and 100 credits. A public fund holds 60 more credits, already financed outside this exercise. Distribute all 60. No one’s work, prices or needs change in this calculation.',
      assumptions:['Equal grants give 20 to each household. Raising the floor gives 40, 20 and 0. Proportional grants give 7.5, 15 and 37.5.','All transfers exhaust the same fund. Tax financing, administrative costs, household size, need and behavioral responses are not modeled.','A larger total and a fairer distribution are different questions. These policies all have the same total.'],
      fields:[field('rule','Allocation rule',[["equal","Equal grants"],["floor","Raise the lowest balances"],["proportional","Proportional to starting credits"]],'floor')],
      predict:'Which household gains most? Does a different distribution change the total amount available?',
      reflection:'Which fairness criterion would you defend, and why? What information about needs, rights, financing or voice would you want before deciding?',
      sourceIds:['F15','E1','E3','E4'], baseline:'Equal grants: 20 credits per household',
      limits:'Credit balances alone do not capture wellbeing, need, rights or opportunity. No allocation earns an ethical score, and financing is deliberately outside this comparison.',
    },
  ];
  const LAB_IDS = LABS.map(l=>l.id);
  const fmt = n => String(Number(n.toFixed(2))); // also removes rounded negative zero
  function values(id, input = {}) {
    const lab=LABS.find(l=>l.id===id);
    if(!lab) throw new Error('Unknown lab');
    return Object.fromEntries(lab.fields.map(f=>{
      const v=Object.hasOwn(input,f.id)?String(input[f.id]):f.value;
      if(!f.options.some(o=>o.value===v))throw new Error(`Invalid ${f.id}`);
      return [f.id,v];
    }));
  }
  function compute(id,input={}) {
    const v=values(id,input), rows=[], equations=[];
    const row=(label,baseline,chosen,unit='')=>rows.push({label,baseline,chosen,unit});
    let explanation='', perspective='';
    if(id==='metrics') {
      const verified=v.rule==='resolved',fast=verified?12:24,careful=16;
      row('Fast plan · bonus',24,fast,'$');row('Careful plan · bonus',16,careful,'$');
      row('Fast plan · unresolved tickets',6,6);row('Careful plan · unresolved tickets',0,0);
      equations.push(`Fast bonus = 2 × ${verified?6:12} = $${fast}`,`Careful bonus = 2 × 8 = $16`);
      explanation=`The ${verified?'careful':'fast'} plan earns the larger bonus under this rule. The assumed work outputs stay fixed; the reward ranking changes when the measure changes.`;
      perspective='The worker sees a cash reward. The customer sees whether the problem stays solved. The organization must also consider verification costs and unmeasured work.';
    }
    if(id==='tax') {
      const b=+v.slope,t=+v.tax,q0=100/(b+1),q=(100-t)/(b+1),p0=q0,pb=100-b*q,ps=q,rev=t*q,loss=.5*t*(q0-q);
      row('Units traded per day',q0,q,'units');row('Buyer price per unit',p0,pb,'$');row('Seller net price per unit',p0,ps,'$');
      row('Public revenue per day',0,rev,'$');row('Buyer price increase per unit',0,pb-p0,'$');row('Seller net-price fall per unit',0,p0-ps,'$');row('Lost total surplus per day',0,loss,'$');
      equations.push(`100 − ${b}Q = Q + ${t}; Q = (100 − ${t}) / ${b+1}`,`Buyer price − seller net price = $${t}`,`Revenue = ${t} × ${fmt(q)}; lost surplus = ½ × ${t} × (${fmt(q0)} − ${fmt(q)})`);
      explanation=`With this demand response, buyers bear $${fmt(pb-p0)} and sellers $${fmt(p0-ps)} of the $${t} wedge per traded unit. Having the ${v.collector} send the payment changes neither price in this model.`;
      perspective='Buyers, sellers, and the public budget have different outcomes. The loss measure counts forgone mutually beneficial trades; revenue itself is a transfer. The benefits of public spending are outside the model.';
    }
    if(id==='spillover') {
      const q=+v.quantity,h=+v.harm,net=x=>90*x-5*x*x,harm=x=>h*x,social=x=>net(x)-harm(x),best=(90-h)/10;
      row('Output',9,q,'units');row('Private net gains',net(9),net(q),'$');row('Neighbor harm',harm(9),harm(q),'$');row('Net gains including harm',social(9),social(q),'$');
      equations.push('Private net gains = 90Q − 5Q²',`Neighbor harm = ${h}Q; net gains including harm = ${90-h}Q − 5Q²`,`For this money-sum criterion, the maximizing quantity is (90 − ${h}) / 10 = ${best}`);
      explanation=`Your quantity produces $${fmt(social(q))} in net gains including harm, compared with $${fmt(social(9))} at 9 units. Under the stated money values, ${best} units maximizes that sum.`;
      perspective='Private gains accrue to buyers and the workshop together; neighbors bear harm. A positive sum neither compensates neighbors nor settles their rights.';
    }
    if(id==='commons') {
      const simulate=(limit,outside)=>{
        let stock=100,total=0;const seasons=[];
        for(let season=1;season<=3;season++){
          const requested=(4-outside)*limit+outside*20,catchTotal=Math.min(stock,requested);
          stock=Math.min(100,(stock-catchTotal)*1.25);total+=catchTotal;seasons.push(stock);
        }return {stock,total,seasons};
      };
      const base=simulate(10,0),chosen=simulate(+v.limit,+v.outside);
      for(let i=0;i<3;i++)row(`Biomass after season ${i+1}`,base.seasons[i],chosen.seasons[i],'tonnes');
      row('Total catch over three seasons',base.total,chosen.total,'tonnes');
      equations.push(`Seasonal requests = ${4-+v.outside} × ${v.limit} + ${v.outside} × 20 tonnes`,'Actual catch = smaller of total requests and available stock','Next stock = min(100, 1.25 × (current stock − actual catch))');
      explanation=`The chosen rule leaves ${fmt(chosen.stock)} tonnes after three seasons and permits ${fmt(chosen.total)} tonnes of total catch. Keeping more stock can require foregoing catch now.`;
      perspective='Fleets need livelihoods, communities may depend on the lake, and future users inherit the stock. Equal tonnage does not establish equal burden, and enforcement has costs.';
    }
    if(id==='public-good') {
      const own=+v.you,other=+v.others,m=+v.multiplier,payout=x=>m*(x+3*other)/4,share0=payout(0),share=payout(own);
      row('Your final credits',10+share0,10-own+share,'credits');
      row('Each other player’s final credits',10-other+share0,10-other+share,'credits');
      row('Group total',40+(m-1)*3*other,40+(m-1)*(own+3*other),'credits');
      row('Total contribution',3*other,own+3*other,'credits');
      equations.push(`Shared return per player = ${m} × (your contribution + 3 × ${other}) / 4`,`Your credits = 10 − your contribution + shared return`,`One extra credit contributed changes your own credits by −1 + ${m}/4 = ${fmt(-1+m/4)}`);
      explanation=`At a ${m}× multiplier, one more credit contributed ${m<4?'reduces':'increases'} your own credit payoff by ${fmt(Math.abs(-1+m/4))}, while increasing the group total by ${fmt(m-1)}. Others are held fixed.`;
      perspective='A private monetary incentive can differ from a collective gain. Fairness, reciprocity, trust, repeated interaction and the value of others’ outcomes are not measured by this table.';
    }
    if(id==='budget') {
      const start=[20,40,100],grants={equal:[20,20,20],floor:[40,20,0],proportional:[7.5,15,37.5]}[v.rule],base=start.map(x=>x+20),chosen=start.map((x,i)=>x+grants[i]);
      start.forEach((_,i)=>row(`Household ${['A','B','C'][i]} final credits`,base[i],chosen[i],'credits'));
      row('Public fund remaining',0,0,'credits');row('Household total',220,220,'credits');row('Highest minus lowest',Math.max(...base)-Math.min(...base),Math.max(...chosen)-Math.min(...chosen),'credits');
      equations.push(`Chosen grants: ${grants.join(' + ')} = 60 credits`,'Final household credits = starting credits + grant','160 household credits + 60 fund credits = 220 credits before and after distribution');
      explanation='All three allocation rules distribute 60 credits and leave a household total of 220. Who has those credits changes; the arithmetic cannot select a fairness principle.';
      perspective='Equal grants, raising the lowest balances, and proportional grants use different criteria. Ask what each household needs, where the fund came from, and who participates in the decision.';
    }
    return {values:v,rows,equations,explanation,perspective};
  }
  function validateLabs(sources) {
    const errors=[],sourceIds=sources?new Set(sources.map(s=>s.id)):null;
    for(const lab of LABS){
      for(const key of ['id','tag','title','description','context','predict','reflection','baseline','limits'])if(typeof lab[key]!=='string'||!lab[key])errors.push(`${lab.id}: missing ${key}`);
      if(!lab.sourceIds.length || (sourceIds&&lab.sourceIds.some(id=>!sourceIds.has(id))))errors.push(`${lab.id}: sourceIds must be known`);
      if(lab.assumptions.length<2)errors.push(`${lab.id}: assumptions required`);
      if(new Set(lab.fields.map(f=>f.id)).size!==lab.fields.length)errors.push(`${lab.id}: duplicate fields`);
      for(const f of lab.fields)if(!f.options.some(o=>o.value===f.value)||new Set(f.options.map(o=>o.value)).size!==f.options.length)errors.push(`${lab.id}: invalid options`);
      const walk=(i,input)=>{
        if(i<lab.fields.length){for(const o of lab.fields[i].options)walk(i+1,{...input,[lab.fields[i].id]:o.value});return;}
        const r=compute(lab.id,input);
        if(!r.rows.length||r.rows.some(row=>!Number.isFinite(row.baseline)||!Number.isFinite(row.chosen)))errors.push(`${lab.id}: nonfinite or empty result`);
      };walk(0,{});
    }
    if(new Set(LAB_IDS).size!==LAB_IDS.length)errors.push('Duplicate lab IDs');
    return {errors,warnings:[],labs:LABS.length};
  }
  return {LABS,LAB_IDS,compute,values,validateLabs,fmt};
})();
if(typeof module!=='undefined')module.exports=Models;
