import {useState,useEffect} from 'react';import {useReveal,useScrolled,useProgress} from './motion.jsx';
import {Routes,Route,Link,useLocation,useNavigate} from 'react-router-dom';
import Home from './pages/Home.jsx';import OpsZen from './pages/OpsZen.jsx';import Soon from './pages/Soon.jsx';import Briefing from './pages/Briefing.jsx';
const L='https://izen.ai';
export const BRIEF='#/briefing';
const META={'/':['iZen ai | ZenLight and OpsZen: Trusted AI for the workforce and the work','ZenLight prepares the workforce. OpsZen guides the work. Trusted AI for high-consequence frontline work, available through SBIR Phase III, GSA MAS, Tradewinds and Army DevX.'],'/opszen':['OpsZen™: Trusted AI for High-Consequence Work | iZen ai','OpsZen guides maintainers and inspectors at the point of work, hands-free, online or offline, grounded in approved sources. Available for pilots through Tradewinds, Army DevX and GSA MAS.']};
const P=(id,page='/')=>({page,id});
const S=k=>({to:'/page/'+k});
// Client menu (review doc section 3). Every link stays inside this site: built pages, sections of Home/OpsZen, or a "being prepared" page.
const MENU=[
 ['OpsZen',{to:'/opszen'},[['Overview',{to:'/opszen'}],['maintAIneer™: Maintenance Guidance',P('agents','/opszen')],['VerifAI™: Inspection Guidance',P('agents','/opszen')],['How It Works',P('workflow','/opszen')],['Deployment & Security',P('deployment','/opszen')]]],
 ['ZenLight',S('zenlight'),[['Overview',S('zenlight')],['Use Cases',S('zenlight-use-cases')],['Online, Offline & Voice',S('zenlight-online-offline-voice')],['Buy Through SBIR Phase III',P('how-to-buy')]]],
 ['Platform',P('how-it-fits'),[['How ZenLight and OpsZen Work Together',P('how-it-fits')],['iZen-LEAP: Online, Offline & Edge',S('leap')],['Security & Data',P('deployment','/opszen')]]],
 ['How to Buy',P('how-to-buy'),[['SBIR Phase III (Sole Source)',P('how-to-buy')],['GSA MAS',P('how-to-buy')],['Tradewinds & Army DevX',P('how-to-buy')],['Capability Statement',S('capability-statement')],['Defense & Government Overview',S('government')]]],
 ['Workforce Programs',S('workforce-programs'),[['Boots2Bytes®',S('boots2bytes')],['Spark2Skill™',S('spark2skill')],['iZen-Academy',S('academy')],['Custom Training & Content',S('custom-training')]]],
 ['Company',S('about'),[['About',S('about')],['Leadership & Advisors',S('leadership')],['Investors',S('investors')],['News & Resources',S('news')],['Contact',{to:'/briefing'}]]]
];
const Chev=({c=''})=><svg viewBox="0 0 12 12" className={'w-3 h-3 ml-2 transition-transform duration-200 '+c} aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>;
// One link component for all three kinds of target: router page, external izen.ai page, or a section on Home/OpsZen
const Item=({t,c,after,children})=>{const nav=useNavigate();const {pathname}=useLocation();
 if(t.to)return <Link to={t.to} className={c} onClick={after}>{children}</Link>;
 if(t.ext)return <a href={t.ext} className={c}>{children}</a>;
 return <a href="#" className={c} onClick={e=>{e.preventDefault();after&&after();const run=()=>document.getElementById(t.id)?.scrollIntoView();if(pathname===t.page)run();else{nav(t.page);setTimeout(run,250)}}}>{children}</a>};
export default function App(){
 const [open,setOpen]=useState(false);const [sub,setSub]=useState(null);const {pathname,key}=useLocation();useReveal(key);const scrolled=useScrolled();const prog=useProgress();const close=()=>{setOpen(false);setSub(null)};
 useEffect(()=>{setOpen(false);setSub(null);window.scrollTo(0,0);const m=META[pathname]||META['/'];document.title=m[0];document.querySelector('meta[name="description"]')?.setAttribute('content',m[1])},[pathname,key]);
 return(<>
 <header className={"bg-white text-ink sticky top-0 z-20 transition-shadow duration-300 "+(scrolled?"shadow-md":"shadow-sm")}><div aria-hidden="true" className="absolute left-0 top-0 h-[3px] bg-gradient-to-r from-[#5B9BED] to-[#CA64BD]" style={{width:(prog*100)+"%"}}/><div className={"w-full px-5 lg:px-8 flex items-center justify-between transition-all duration-300 "+(scrolled?"h-16":"h-20")}>
  <Link to="/" aria-label="iZen ai home"><img src={L+'/wp-content/uploads/2024/06/iZEN_LOGO-New-Options-2-2-68x68.png'} alt="iZen ai" className={"transition-all duration-300 "+(scrolled?"h-11 w-11":"h-14 w-14")}/></Link>
  <div className="hidden lg:flex items-center gap-6 xl:gap-8">
   <nav className="flex items-center gap-5 xl:gap-8 text-[15px] xl:text-[17px]">{MENU.map(([n,t,kids])=><div key={n} className="group relative">
    <Item t={t} c="nav-top inline-flex items-center py-4 whitespace-nowrap hover:text-[#60A8E8] transition-colors">{n}<Chev c="group-hover:rotate-180 group-focus-within:rotate-180"/></Item>
    <ul className="absolute left-1/2 -translate-x-1/2 top-full min-w-[15rem] bg-white shadow-lg rounded-md py-2 border border-ink/10 text-base invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200">{kids.map(([k,kt])=><li key={k}><Item t={kt} c="block px-5 py-2 whitespace-nowrap transition-all duration-200 hover:bg-paper hover:text-signal hover:pl-7">{k}</Item></li>)}</ul></div>)}</nav>
   <div className="flex items-center gap-3"><a href={BRIEF} className="btn btn-p py-2.5 whitespace-nowrap">Request a Briefing</a>
    <button type="button" aria-label="Search" className="p-2 text-signal hover:scale-110 transition-transform"><svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21"/></svg></button></div></div>
  <button className="lg:hidden p-2" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button></div>
  {open&&<div className="menu-in lg:hidden px-5 pb-5 flex flex-col max-h-[80vh] overflow-y-auto">{MENU.map(([n,t,kids])=><div key={n}><button type="button" className="w-full flex items-center justify-between py-3 text-left" aria-expanded={sub===n} onClick={()=>setSub(sub===n?null:n)}>{n}<Chev c={sub===n?'rotate-180':''}/></button>{sub===n&&<ul className="pl-4 pb-2">{kids.map(([k,kt])=><li key={k}><Item t={kt} after={close} c="block py-2 text-ink/80">{k}</Item></li>)}</ul>}</div>)}
   <div className="pt-3"><a href={BRIEF} className="btn btn-p w-full text-center">Request a Briefing</a></div></div>}
 </header>
 <main key={key} className="page-in"><Routes><Route path="/" element={<Home/>}/><Route path="/opszen" element={<OpsZen/>}/><Route path="/briefing" element={<Briefing/>}/><Route path="/page/:slug" element={<Soon/>}/></Routes></main>
 <footer className="bg-ink text-white/80 mt-20"><div className="wrap py-12 grid gap-8 md:grid-cols-3 text-sm">
  <div><p className="font-bold text-white text-base mb-2">iZen ai, Inc.</p><p>Builds trusted AI that prepares the workforce and guides the work.</p></div>
  <div><p className="font-semibold text-white mb-2">Explore</p><ul className="space-y-1">{[['Investors','#/page/investors'],['Capability Statement','#/page/capability-statement'],['GSA Schedule (47QTCA24D0059)','#/page/government'],['Privacy Policy','#/page/privacy-policy']].map(([n,t])=><li key={n}><a className="hover:text-white" href={t}>{n}</a></li>)}</ul></div>
  <div><p className="font-semibold text-white mb-2">Contact</p><p>(510) 449-8617<br/><a href="mailto:info@iZen.ai">info@iZen.ai</a><br/>4556 Fernandez St, Union City, CA 94587</p></div>
 </div><p className="wrap pb-8 text-xs">© iZen ai, Inc. All rights reserved.</p></footer></>);
}