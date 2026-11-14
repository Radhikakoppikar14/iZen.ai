import {Link} from 'react-router-dom';import {BRIEF} from '../App.jsx';import {IMG,Img,Logos} from '../images.jsx';import {CountUp} from '../motion.jsx';
// HashRouter treats "#id" as a route, so in-page anchors scroll via JS instead of href="#id"
const go=id=>e=>{e.preventDefault();document.getElementById(id)?.scrollIntoView()};
const H=({children})=><h2 className="h-display text-3xl font-extrabold mb-6">{children}</h2>;
export default function OpsZen(){return(<>
<section className="bg-white text-ink"><div className="wrap py-16 grid md:grid-cols-2 gap-10 items-center"><div>
 <h1 className="h-display pb-1 text-4xl md:text-5xl lg:text-6xl !font-light leading-[1.15] rise">OpsZen™: <span className="grad-text">Trusted AI</span> for High-Consequence Work.</h1>
 <p className="mt-5 text-lg text-steel max-w-xl">Guides maintainers and inspectors at the point of work, hands-free, online or offline, grounded in approved sources.</p>
 <p className="mt-4 text-sm text-steel">Prepare is available now. Perform is available for pilots.</p>
 <div className="mt-7 flex flex-wrap gap-3"><a href={BRIEF} className="btn btn-p">Request a Briefing</a><a href="#pilot" onClick={go('pilot')} className="btn btn-d">How a pilot works</a></div></div>
 <div className="float"><Img src={IMG.banner} className="w-full h-auto rise"/></div></div>
 <div className="border-t border-ink/10"><Logos items={[['tradewinds','DoD CDAO Tradewinds Solutions Marketplace, Awardable'],['devx','Army Applications Laboratory DevX Autonomy Marketplace, Award-Ready'],['gsa','GSA MAS approved company']]}/></div></section>

<section className="wrap pt-16"><H>The problem</H><div className="grid md:grid-cols-3 gap-6">{[['~75%','of maintainers lacked necessary experience at one Air Force base (GAO-26-109154, June 2026)'],['<30%','of time maintainers can spend fixing equipment (McKinsey, 2021)'],['~$125K','per hour, a typical industrial outage (ABB, 2023)']].map(([n,t])=><div key={n} className="border-l-4 border-signal pl-4"><CountUp text={n}/><p className="text-steel mt-1">{t}</p></div>)}</div></section>

<section id="workflow" className="wrap pt-16 scroll-mt-20"><H>The workflow</H><ol className="grid md:grid-cols-4 gap-4">{['Inspect','Maintain','Reinspect','Document'].map((s,i)=><li key={s} className="bg-white p-5 border-t-4 border-teal"><p className="text-sm text-steel">Step {i+1}</p><p className="text-xl font-bold">{s}</p></li>)}</ol></section>

<section id="agents" className="wrap pt-16 scroll-mt-20"><H>Two AI agents, one platform</H><div className="grid md:grid-cols-2 gap-6">
 <div className="bg-white p-6"><h3 className="text-xl font-bold">maintAIneer™: OpsZen Maintenance Guidance</h3><p className="mt-2 text-steel">For maintainers carrying out repairs. Step-by-step guidance grounded in approved sources. Listed on the DoW Tradewinds Solutions Marketplace.</p><p className="mt-4 text-sm font-semibold">Part of the OpsZen platform.</p></div>
 <div className="bg-white p-6"><h3 className="text-xl font-bold">VerifAI™: OpsZen Inspection Guidance</h3><p className="mt-2 text-steel">The quality inspector’s AI companion. Guides inspection steps and supports a traceable record. Listed on the DoW Tradewinds Solutions Marketplace.</p><p className="mt-4 text-sm font-semibold">Part of the OpsZen platform.</p></div></div></section>

<section className="wrap pt-16"><H>What makes OpsZen different</H><div className="grid md:grid-cols-3 gap-5">{[['Prepare + Perform','Prepares workers before work (ZenLight) and guides them during execution.'],['Works anywhere','Runs online or offline, even on lightweight edge hardware via iZen-LEAP.'],['Efficient and hands-free','Quick semantic search and hands-free voice interaction.'],['Source-grounded and traceable','Auditable guidance rooted in approved sources.'],['Compliance and safety','Built for high-consequence work, with step-by-step guidance.'],['Unified knowledge layer','Maps both structured and unstructured data.']].map(([t,d])=><div key={t} className="bg-white p-5"><p className="font-bold">{t}</p><p className="text-sm text-steel mt-1">{d}</p></div>)}</div>
 <p className="mt-6 text-steel">Prepare with ZenLight, perform with OpsZen. <a className="underline" href="#/page/zenlight">See ZenLight</a>.</p></section>

<section id="deployment" className="wrap pt-16 scroll-mt-20"><H>Deployment &amp; security</H><div className="bg-ink text-white grid md:grid-cols-[1fr_auto] gap-6 items-center p-6 md:p-8"><p className="max-w-2xl text-lg">OpsZen runs in the cloud, on-premises, or on lightweight edge hardware through iZen-LEAP, so it works in disconnected and low-bandwidth settings. Security and data handling details are available in a briefing.</p><Img src={IMG.leap} className="h-32 w-auto justify-self-center"/></div></section>

<section id="pilot" className="wrap pt-16 scroll-mt-20"><H>How a pilot works</H><ol className="grid md:grid-cols-4 gap-4">{[['Scope','Pick the equipment, procedures and team.'],['Setup','Load your approved sources.'],['Workflow validation','Test guidance against real tasks.'],['Success criteria','Agree measures before you start.']].map(([t,d],i)=><li key={t} className="bg-white p-5"><p className="font-bold">{i+1}. {t}</p><p className="text-sm text-steel mt-1">{d}</p></li>)}</ol>
 <h3 className="font-bold text-xl mt-10">Ways to buy</h3><p className="text-steel mt-2">DoW CDAO Tradewinds (Awardable) · Army DevX Autonomy Marketplace (Award-Ready) · GSA MAS contract 47QTCA24D0059.</p></section>

<section className="wrap pt-16 text-center"><H>Let’s talk about your workforce and operations.</H><a href={BRIEF} className="btn btn-p">Request a Briefing</a><p className="mt-4"><Link to="/" className="underline text-steel">Back to home</Link></p></section></>)}