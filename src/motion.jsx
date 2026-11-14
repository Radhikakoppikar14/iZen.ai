import {useLayoutEffect,useEffect,useRef,useState} from 'react';
const reduced=()=>typeof matchMedia!=='undefined'&&matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fades sections up and staggers grid children as they scroll into view. Skips the hero (first section).
export function useReveal(pathname){
 useLayoutEffect(()=>{
  if(reduced()||!('IntersectionObserver' in window))return;
  const els=[...document.querySelectorAll('main section:not(:first-child), main section:not(:first-child) .grid')];
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -6% 0px'});
  els.forEach(el=>{el.classList.add(el.matches('section')?'reveal':'reveal-group');io.observe(el)});
  return()=>io.disconnect();
 },[pathname]);
}

// True once the page has scrolled a little (used to shrink the header and deepen its shadow).
export function useScrolled(){
 const [s,setS]=useState(false);
 useEffect(()=>{const f=()=>setS(window.scrollY>24);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
 return s;
}

// Counts a stat like "~75%", "<30%" or "~$125K" up from 0 when it scrolls into view.
export function CountUp({text}){
 const m=text.match(/^(\D*)(\d+)(.*)$/);const ref=useRef(null);
 const [v,setV]=useState(m&&reduced()?+m[2]:0);
 useEffect(()=>{
  if(!m||reduced()||!('IntersectionObserver' in window)){if(m)setV(+m[2]);return}
  const io=new IntersectionObserver(([e])=>{
   if(!e.isIntersecting)return;io.disconnect();
   const t0=performance.now(),to=+m[2],d=1200;
   const step=t=>{const k=Math.min((t-t0)/d,1);setV(Math.round(to*(1-Math.pow(1-k,3))));if(k<1)requestAnimationFrame(step)};
   requestAnimationFrame(step);
  },{threshold:.6});
  io.observe(ref.current);return()=>io.disconnect();
 },[]);
 return <p ref={ref} className="text-4xl font-extrabold h-display tabular-nums">{m?m[1]+v+m[3]:text}</p>;
}