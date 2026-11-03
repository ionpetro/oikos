const test = require('node:test');
const assert = require('node:assert/strict');
const M = require('../src/models.js');
const sources = require('../src/sources.json');
const near = (actual,expected) => assert.ok(Math.abs(actual-expected)<1e-8,`${actual} != ${expected}`);
const out = (r,label,side='chosen') => { const row=r.rows.find(x=>x.label===label); assert.ok(row,label); return row[side]; };
const combinations = lab => lab.fields.reduce((all,f)=>all.flatMap(v=>f.options.map(o=>({...v,[f.id]:o.value}))),[{}]);

test('six Rule labs have complete source, assumption, prediction and reflection contracts',()=>{
  assert.deepEqual(M.LAB_IDS,['metrics','tax','spillover','commons','public-good','budget']);
  assert.deepEqual(M.validateLabs(sources).errors,[]);
  for(const lab of M.LABS) {
    assert.ok(lab.assumptions.length>=3 && lab.limits && lab.predict && lab.reflection);
    assert.ok(!Object.hasOwn(lab,'score'),'labs do not rank moral worth');
  }
});

test('every allowed input combination returns finite, reproducible comparisons',()=>{
  let count=0;
  for(const lab of M.LABS)for(const input of combinations(lab)){
    count++;
    const r=M.compute(lab.id,input);
    assert.deepEqual(r,M.compute(lab.id,input));
    assert.ok(r.rows.length && r.equations.length && r.explanation && r.perspective);
    assert.equal(new Set(r.rows.map(x=>x.label)).size,r.rows.length);
    for(const row of r.rows)assert.ok(Number.isFinite(row.baseline)&&Number.isFinite(row.chosen));
  }
  assert.equal(count,61);
});

test('inputs outside a model contract are rejected rather than silently clipped',()=>{
  assert.throws(()=>M.compute('unknown'));
  for(const lab of M.LABS)for(const f of lab.fields){
    for(const value of ['invalid',Infinity,-999999,null,{}])assert.throws(()=>M.compute(lab.id,{[f.id]:value}),`${lab.id}/${f.id}/${value}`);
  }
});

test('changing a rewarded measure reverses cash ranking without inventing changed work output',()=>{
  const a=M.compute('metrics',{rule:'closed'}),b=M.compute('metrics',{rule:'resolved'});
  assert.equal(out(a,'Fast plan · bonus'),24);assert.equal(out(a,'Careful plan · bonus'),16);
  assert.equal(out(b,'Fast plan · bonus'),12);assert.equal(out(b,'Careful plan · bonus'),16);
  for(const r of [a,b]){assert.equal(out(r,'Fast plan · unresolved tickets'),6);assert.equal(out(r,'Careful plan · unresolved tickets'),0);}
});

test('symmetric tax example clears the market and reconciles the $20 wedge',()=>{
  const r=M.compute('tax',{slope:1,tax:20,collector:'seller'});
  assert.equal(out(r,'Units traded per day','baseline'),50);assert.equal(out(r,'Units traded per day'),40);
  assert.equal(out(r,'Buyer price per unit'),60);assert.equal(out(r,'Seller net price per unit'),40);
  assert.equal(out(r,'Public revenue per day'),800);assert.equal(out(r,'Lost total surplus per day'),100);
  assert.equal(out(r,'Buyer price increase per unit'),10);assert.equal(out(r,'Seller net-price fall per unit'),10);
});

test('tax burden follows responsiveness and is invariant to the collection side',()=>{
  for(const b of [.5,1,2])for(const t of [0,10,20]){
    const a=M.compute('tax',{slope:b,tax:t,collector:'seller'}),c=M.compute('tax',{slope:b,tax:t,collector:'buyer'});
    assert.deepEqual(a.rows,c.rows);
    const q=out(a,'Units traded per day'),pb=out(a,'Buyer price per unit'),ps=out(a,'Seller net price per unit');
    near(pb,100-b*q);near(ps,q);near(pb-ps,t);
    near(out(a,'Buyer price increase per unit')+out(a,'Seller net-price fall per unit'),t);
    near(out(a,'Public revenue per day'),t*q);
    if(t===0)for(const row of a.rows)near(row.baseline,row.chosen);
  }
  assert.ok(out(M.compute('tax',{slope:2,tax:20}),'Buyer price increase per unit')>out(M.compute('tax',{slope:.5,tax:20}),'Buyer price increase per unit'));
});

test('tax revenue is a transfer and surplus loss matches the total-surplus change',()=>{
  for(const b of [.5,1,2])for(const t of [0,10,20]){
    const r=M.compute('tax',{slope:b,tax:t}),q=out(r,'Units traded per day'),q0=out(r,'Units traded per day','baseline');
    const total0=100*q0-(b+1)*q0*q0/2;
    const consumer=(100-out(r,'Buyer price per unit'))*q/2;
    const producer=out(r,'Seller net price per unit')*q/2;
    near(total0-consumer-producer-out(r,'Public revenue per day'),out(r,'Lost total surplus per day'));
  }
});

test('external cost arithmetic distinguishes private gain, harm and the stated social criterion',()=>{
  const r=M.compute('spillover',{quantity:6,harm:30});
  assert.equal(out(r,'Private net gains'),360);assert.equal(out(r,'Neighbor harm'),180);assert.equal(out(r,'Net gains including harm'),180);
  assert.equal(out(r,'Net gains including harm','baseline'),135);
  for(const h of [10,30]){
    const best=(90-h)/10;
    const high=out(M.compute('spillover',{quantity:best,harm:h}),'Net gains including harm');
    for(const q of [0,3,6,8,9,10]){
      const v=M.compute('spillover',{quantity:q,harm:h});
      near(out(v,'Private net gains')-out(v,'Neighbor harm'),out(v,'Net gains including harm'));
      assert.ok(high>=out(v,'Net gains including harm'));
    }
  }
});

test('the commons model accounts for harvest before growth and caps biomass',()=>{
  const r=M.compute('commons',{limit:5,outside:0});
  for(const i of [1,2,3])assert.equal(out(r,`Biomass after season ${i}`),100);
  assert.equal(out(r,'Total catch over three seasons'),60);
  near(out(r,'Biomass after season 1','baseline'),75);
  near(out(r,'Biomass after season 2','baseline'),43.75);
  near(out(r,'Biomass after season 3','baseline'),4.6875);
  const none=M.compute('commons',{limit:0,outside:0});assert.equal(out(none,'Total catch over three seasons'),0);
  const depletion=M.compute('commons',{limit:15,outside:1});assert.equal(out(depletion,'Biomass after season 3'),0);
  for(const input of combinations(M.LABS.find(l=>l.id==='commons'))) {
    const x=M.compute('commons',input);
    for(const row of x.rows.filter(r=>r.label.startsWith('Biomass')))assert.ok(row.chosen>=0&&row.chosen<=100);
  }
});

test('a noncomplying fleet changes a nominally sustainable limit outcome',()=>{
  const r=M.compute('commons',{limit:5,outside:1});
  near(out(r,'Biomass after season 1'),81.25);
  assert.ok(out(r,'Biomass after season 3')<100);
});

test('public good outcomes conserve endowments plus the productive pot gain',()=>{
  for(const input of combinations(M.LABS.find(l=>l.id==='public-good'))) {
    const r=M.compute('public-good',input),own=out(r,'Your final credits'),other=out(r,'Each other player’s final credits'),group=out(r,'Group total');
    near(own+3*other,group);
    near(group,40+(+input.multiplier-1)*(+input.you+3*+input.others));
  }
  const all=M.compute('public-good',{you:10,others:10,multiplier:1.6});
  assert.equal(out(all,'Your final credits'),16);assert.equal(out(all,'Group total'),64);
});

test('changing the public good multiplier crosses the individual cash-incentive boundary',()=>{
  for(const m of [1.6,4.8]){
    const a=M.compute('public-good',{you:0,others:5,multiplier:m}),b=M.compute('public-good',{you:10,others:5,multiplier:m});
    const diff=out(b,'Your final credits')-out(a,'Your final credits');
    near(diff,10*(-1+m/4));assert.ok(m<4?diff<0:diff>0);
    assert.ok(out(b,'Group total')>out(a,'Group total'));
  }
});

test('distribution conserves the fund while changing household outcomes',()=>{
  for(const rule of ['equal','floor','proportional']){
    const r=M.compute('budget',{rule});
    near(['A','B','C'].reduce((n,h)=>n+out(r,`Household ${h} final credits`),0),220);
    assert.equal(out(r,'Household total'),220);assert.equal(out(r,'Public fund remaining'),0);
    assert.ok(!Object.hasOwn(r,'score'));
  }
  const r=M.compute('budget',{rule:'floor'});
  assert.equal(out(r,'Household A final credits'),60);assert.equal(out(r,'Household B final credits'),60);assert.equal(out(r,'Household C final credits'),100);
});


test('rounded display never produces negative zero',()=>{
  assert.equal(M.fmt(-1e-12),'0');assert.equal(M.fmt(-.001),'0');assert.equal(M.fmt(-.01),'-0.01');
  for(const slope of [.5,1,2])assert.ok(!M.compute('tax',{slope,tax:0}).explanation.includes('$-0'));
});
