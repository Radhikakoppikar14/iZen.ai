import {Link} from 'react-router-dom';import {BRIEF} from '../App.jsx';import {IMG,Img,Logos} from '../images.jsx';import {CountUp} from '../motion.jsx';
// HashRouter treats "#id" as a route, so in-page anchors scroll via JS instead of href="#id"
const go=id=>e=>{e.preventDefault();document.getElementById(id)?.scrollIntoView()};
const Card=({name,role,line,status,buy,to,ext})=>(<div className="bg-paper border border-[#DCE4F8] p-7 rise flex flex-col">
 <p className="text-signal font-semibold">{role}</p><h2 className="text-3xl font-extrabold h-display mt-1">{name}</h2>
 <p className="mt-3 text-steel">{line}</p><p className="mt-4 text-sm"><b>Status:</b> {status}</p><p className="text-sm mt-1"><b>How to buy:</b> {buy}</p>
 {ext?<a href={to} className="btn btn-d mt-6 self-start">Learn about {name}</a>:<Link to={to} className="btn btn-d mt-6 self-start">Learn about {name}</Link>}</div>);
export default function Home(){return(<>
<section className="bg-white text-ink relative isolate overflow-hidden"><span className="blob blob-a" aria-hidden="true"/><span className="blob blob-b" aria-hidden="true"/><div className="wrap pt-16 pb-14">
 <div className="grid md:grid-cols-2 gap-10 items-center"><div>
  <h1 className="h-display pb-1 text-4xl md:text-5xl lg:text-6xl !font-light leading-[1.15] rise">Trusted AI that <span className="grad-text">prepares the workforce</span> and <span className="grad-text">guides the work</span>.</h1>
  <p className="mt-6 text-lg text-steel max-w-xl rise">ZenLight® gets workers ready for the job. OpsZen™ guides maintainers and inspectors through it, hands-free, online or offline, grounded in approved sources.</p>
  <div className="mt-8 flex flex-wrap gap-3 rise"><a href={BRIEF} className="btn btn-p">Request a Briefing</a><a href="#how-to-buy" onClick={go('how-to-buy')} className="btn btn-d">How to Buy</a></div></div>
  <div className="float"><Img src={IMG.banner} className="w-full h-auto rise"/></div></div>
 <div className="grid md:grid-cols-2 gap-5 mt-14">
  <Card name="OpsZen™" role="Perform" line="Trusted AI for high-consequence work. Step-by-step maintenance and inspection guidance at the point of work." status="Now accepting paid pilots." buy="Tradewinds, Army DevX, GSA MAS." to="/opszen"/>
  <Card name="ZenLight®" role="Prepare" line="AI learning companion for job-ready training. Personalized, scenario-based, voice-enabled." status="Available now." buy="Federal buyers: eligible for SBIR Phase III sole-source awards." to="#/page/zenlight" ext/></div></div>
 <div className="border-t border-ink/10"><ul className="wrap pt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-steel">
  {['SBIR Phase III sole-source eligible','DoW CDAO Tradewinds Awardable','Army DevX Award-Ready','Active GSA MAS contract'].map(t=><li key={t}>{t}</li>)}
  </ul>
  <Logos items={[['devx','Army Applications Laboratory DevX Autonomy Marketplace, Award-Ready'],['tradewinds','DoW CDAO Tradewinds Solutions Marketplace, Awardable'],['gsa','GSA MAS approved company']]}/></div></section>

<section className="wrap pt-20"><h2 className="h-display text-3xl md:text-4xl font-extrabold max-w-2xl">The work has to get done, even when the expert isn’t there.</h2>
 <div className="grid md:grid-cols-3 gap-8 mt-10">{[['~75%','of maintainers lacked the necessary experience at one Air Force base (GAO-26-109154, June 2026).'],['<30%','of their time is what maintainers can spend actually fixing equipment (McKinsey, 2021).'],['~$125K','per hour is a typical industrial outage cost (ABB, 2023).']].map(([n,t])=><div key={n} className="border-l-4 border-signal pl-4"><CountUp text={n}/><p className="mt-2 text-steel">{t}</p></div>)}</div></section>

<section id="how-it-fits" className="wrap pt-20 scroll-mt-20"><h2 className="h-display text-3xl md:text-4xl font-extrabold">How it fits together</h2>
 <ol className="grid md:grid-cols-3 gap-5 mt-8">{[['Prepare with ZenLight','Workers train on your approved content with personalized, scenario-based learning.'],['Inspect and maintain with OpsZen','Hands-free, source-grounded guidance at the point of work.'],['Document a traceable record','Every step is auditable against approved sources.']].map(([t,d],i)=><li key={t} className="bg-white p-6 border-t-4 border-teal"><p className="font-bold text-xl">{i+1}. {t}</p><p className="mt-2 text-steel">{d}</p></li>)}</ol>
 <div className="mt-5 bg-ink text-white grid md:grid-cols-[1fr_auto] gap-6 items-center p-6 md:p-8"><p className="text-lg">Deliver anywhere with <b>iZen-LEAP</b>: ZenLight and OpsZen online, offline, or on portable edge hardware, then sync when you reconnect.</p><Img src={IMG.leap} className="h-32 w-auto justify-self-center float"/></div></section>

<section className="wrap pt-20"><h2 className="h-display text-3xl md:text-4xl font-extrabold">Why iZen</h2>
 <div className="grid md:grid-cols-3 gap-5 mt-8">{[['content','Source-grounded and traceable','Guidance is rooted in your approved sources, so every step can be audited.'],['nowifi','Works where the network doesn’t','Runs online, offline, or on lightweight edge hardware through iZen-LEAP.'],['learn','Prepare and perform on one platform','The same AI that trains workers before the job guides them during it.']].map(([i,t,d])=><div key={t} className="bg-white p-6"><span className="icon-ring"><span><Img src={IMG[i]} className="h-7 w-7"/></span></span><p className="font-bold text-lg">{t}</p><p className="mt-2 text-steel">{d}</p></div>)}</div></section>

<section id="how-to-buy" className="wrap pt-20 scroll-mt-20"><h2 className="h-display text-3xl md:text-4xl font-extrabold">Four ways to buy</h2>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">{[['doe','U.S. Department of Energy','SBIR Phase III','Sole-source awards for qualifying work derived from our DOE SBIR projects. ZenLight and iZen-LEAP.'],['gsa','GSA MAS','GSA MAS','Active contract 47QTCA24D0059.'],['tradewinds','DoW CDAO Tradewinds','Tradewinds','DoW CDAO Solutions Marketplace: Awardable.'],['devx','Army DevX Autonomy Marketplace','Army DevX','Autonomy Marketplace: Award-Ready.']].map(([i,a,t,d])=><div key={t} className="bg-white p-5"><p className="text-xs text-steel mb-1">{a}</p><p className="font-bold">{t}</p><p className="mt-2 text-sm text-steel">{d}</p></div>)}</div></section>

<section className="wrap pt-20"><div className="bg-white p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
 <div><h2 className="h-display text-3xl font-extrabold">Built on $3M in non-dilutive R&amp;D.</h2><p className="mt-3 text-steel">Our core technology was built with funding from the U.S. Department of Energy and the Office of Naval Research. ZenLight won the TechConnect 2025 Innovation Award.</p>
  <ul className="mt-5 flex flex-wrap items-center gap-6">{[['doe','U.S. Department of Energy'],['onr','Office of Naval Research'],['techconnect','TechConnect 2025 Innovation Award']].map(([k,a])=><li key={k}><Img src={IMG[k]} alt={a} className="h-14 w-auto max-w-[8rem] object-contain"/></li>)}</ul></div>
 <div><h3 className="font-bold text-xl">Building the cleared, AI-ready workforce</h3><p className="mt-2 text-steel">Boots2Bytes®, Spark2Skill™ and iZen-Academy run on ZenLight® and show it works with real learners.</p>
  <ul className="mt-4 flex flex-wrap items-center gap-6">{[['skillbridge','DoD SkillBridge partner'],['defense2024','2024 Defense Innovation Challenge awardee']].map(([k,a])=><li key={k}><Img src={IMG[k]} alt={a} className="h-14 w-auto max-w-[8rem] object-contain"/></li>)}</ul>
  <a className="btn btn-d mt-5" href="#/page/workforce-programs">See Workforce Programs</a></div></div></section>

<section className="wrap pt-20 text-center"><h2 className="h-display text-3xl md:text-4xl font-extrabold">Let’s talk about your workforce and operations.</h2><a href={BRIEF} className="btn btn-p mt-6 pulse">Request a Briefing</a></section>
</>)}