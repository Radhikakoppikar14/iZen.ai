import {Link,useParams} from 'react-router-dom';
const T={
 'zenlight':'ZenLight®','zenlight-use-cases':'ZenLight® Use Cases','zenlight-online-offline-voice':'ZenLight®: Online, Offline & Voice',
 'leap':'iZen-LEAP: Online, Offline & Edge','government':'Defense & Government Overview','capability-statement':'Capability Statement',
 'workforce-programs':'Workforce Programs','boots2bytes':'Boots2Bytes®','spark2skill':'Spark2Skill™','academy':'iZen-Academy','custom-training':'Custom Training & Content',
 'about':'About iZen ai','leadership':'Leadership & Advisors','investors':'Investors','news':'News & Resources','privacy-policy':'Privacy Policy'};
export default function Soon(){const {slug}=useParams();const title=T[slug]||'This page';
 return(<section className="wrap py-24 text-center max-w-2xl mx-auto"><h1 className="h-display text-4xl md:text-5xl font-light leading-[1.15]">{title}</h1>
  <p className="mt-5 text-lg text-steel">This page is being prepared for the new iZen site. In the meantime, request a briefing and we will connect you with the right person.</p>
  <div className="mt-8 flex flex-wrap justify-center gap-3"><a href="#/briefing" className="btn btn-p">Request a Briefing</a><Link to="/" className="btn btn-d">Back to home</Link></div>
  <p className="mt-8 text-sm text-steel">(510) 449-8617 · <a className="underline" href="mailto:info@iZen.ai">info@iZen.ai</a></p></section>)}