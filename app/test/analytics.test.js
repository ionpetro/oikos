const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
for(const [folder,app,hostname] of [['oikos', 'oikos', 'oikos-azure-five.vercel.app']]){
 const source=fs.readFileSync(require('node:path').join(__dirname,'../src/analytics.js'),'utf8');
 function setup(host,stored){const storage=new Map(stored||[]);const c={location:{hostname:host},document:{referrer:'https://example.com/private?secret=test',createElement:()=>({}),getElementsByTagName:()=>[{parentNode:{insertBefore(){}}}]},URL,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)}};c.window=c;vm.runInNewContext(source,c);return{c,storage};}
 const local=setup('localhost').c;assert.equal(local.PulseAnalytics,undefined);
 const {c,storage}=setup(hostname),ph=c.posthog,config=ph._i[0][1];assert.equal(config.autocapture,false);assert.equal(config.disable_session_recording,true);assert.equal(config.capture_pageview,false);
 const events=()=>ph.filter(x=>x[0]==='capture');assert.deepEqual(Array.from(events(),x=>x[1]),['$pageview','app_opened']);assert.equal(events()[1][2].first_visit,true);
 c.PulseAnalytics.track('question_answered',{item_id:'lesson-card',correct:true,ms:500,name:'Private',answer:'Private text',reflections:['private'],app:'wrong'});
 const e=events().at(-1);assert.equal(e[2].app,app);assert.equal(e[2].item_id,'lesson-card');assert.equal(e[2].name,undefined);assert.equal(e[2].answer,undefined);assert.equal(e[2].reflections,undefined);
 const returner=setup(hostname,storage).c.posthog.filter(x=>x[0]==='capture')[1];assert.equal(returner[2].first_visit,false);
 const sanitized=config.before_send({properties:{$current_url:'https://test.com/lesson?name=private#value',$referrer:'https://example.com/page?private=1'}});assert.equal(sanitized.properties.$current_url,'https://test.com/lesson');assert.equal(sanitized.properties.$referrer,'https://example.com/page');
 console.log(`${app}: production gating, queued events, return visits, app isolation and private-input filtering passed`);
}
