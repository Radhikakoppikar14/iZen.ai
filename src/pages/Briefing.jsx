import {useState} from 'react';import {Link} from 'react-router-dom';
const INT=['ZenLight','OpsZen pilot','iZen-LEAP','SBIR Phase III award','Partnership','Investor','Workforce Programs','Other'];
const AREA=['Training','Maintenance','Inspection','Other'];
const F=({label,children})=><label className="block text-sm font-semibold text-ink">{label}<div className="mt-1 font-normal">{children}</div></label>;
const inp="w-full border border-ink/20 rounded-md px-3 py-2 bg-white";
export default function Briefing(){const [v,setV]=useState({name:'',org:'',role:'',email:'',agency:'',interest:INT[0],area:AREA[0],msg:''});const set=k=>e=>setV({...v,[k]:e.target.value});
 const submit=e=>{e.preventDefault();const b=`Name: ${v.name}\nOrganization: ${v.org}\nRole: ${v.role}\nEmail: ${v.email}\nAgency: ${v.agency}\nInterest: ${v.interest}\nArea: ${v.area}\n\n${v.msg}`;
  window.location.href='mailto:info@iZen.ai?subject='+encodeURIComponent('Briefing request: '+v.interest)+'&body='+encodeURIComponent(b)};
 return(<section className="wrap py-16 max-w-2xl"><h1 className="h-display text-4xl md:text-5xl font-light leading-[1.15]">Request a Briefing</h1>
  <p className="mt-4 text-lg text-steel">Let’s talk about your workforce and operations.</p>
  <form onSubmit={submit} className="mt-8 grid gap-4">
   <F label="Name"><input required className={inp} value={v.name} onChange={set('name')}/></F>
   <F label="Email"><input required type="email" className={inp} value={v.email} onChange={set('email')}/></F>
   <div className="grid md:grid-cols-2 gap-4"><F label="Organization"><input required className={inp} value={v.org} onChange={set('org')}/></F><F label="Role"><input className={inp} value={v.role} onChange={set('role')}/></F></div>
   <F label="Agency (optional)"><input className={inp} value={v.agency} onChange={set('agency')}/></F>
   <div className="grid md:grid-cols-2 gap-4"><F label="I am interested in"><select className={inp} value={v.interest} onChange={set('interest')}>{INT.map(o=><option key={o}>{o}</option>)}</select></F>
    <F label="Area of interest"><select className={inp} value={v.area} onChange={set('area')}>{AREA.map(o=><option key={o}>{o}</option>)}</select></F></div>
   <F label="Message"><textarea rows="4" className={inp} value={v.msg} onChange={set('msg')}/></F>
   <button type="submit" className="btn btn-p justify-self-start">Send request</button>
   <p className="text-xs text-steel">Sending opens your email app with the request ready to send to info@iZen.ai. By submitting, you agree to our <a className="underline" href="#/page/privacy-policy">Privacy Policy</a>.</p></form>
  <p className="mt-6"><Link to="/" className="underline text-steel">Back to home</Link></p></section>)}