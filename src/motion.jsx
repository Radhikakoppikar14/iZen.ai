import {useLayoutEffect,useEffect,useRef,useState} from 'react';
const reduced=()=>typeof matchMedia!=='undefined'&&matchMedia('(prefers-reduced-motion: reduce)').matches;

// Restarts a CSS animation from the beginning.
const restart=el=>{el.style.animation='none';void el.offsetWidth;el.style.animation=''};

// Fades sections up and staggers grid children EVERY time they scroll into view (and resets when they leave, so they replay).
// The hero replays its entrance whenever you scroll back up to it. `k` changes on every navigation, so opening a page always replays.
export function useReveal(k){
 useLayoutEffect(()=>{
  if(reduced()||!('IntersectionObserver' in window))return;
  const els=[...document.querySelectorAll('main section:not(:first-child), main section:not(:first-child) .grid')];
  const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('in',e.isIntersecting)),{threshold:.08,rootMargin:'0px 0px -6% 0px'});
  els.forEach(el=>{el.classList.add(el.matches('section')?'reveal':'reveal-group');io.observe(el)});
  const hero=document.querySelector('main section:first-child');let seen=true;
  const ho=hero?new IntersectionObserver(([e])=>{if(e.isIntersecting){if(!seen)hero.querySelectorAll('.rise').forEach(restart);seen=true}else seen=false},{threshold:.2}):null;
  if(ho)ho.observe(hero);
  return()=>{io.disconnect();if(ho)ho.disconnect()};
 },[k]);
}

// True once the page has scrolled a little (used to shrink the header and deepen its shadow).
export function useScrolled(){
 const [s,setS]=useState(false);
 useEffect(()=>{const f=()=>setS(window.scrollY>24);f();window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
 return s;
}

// Counts a stat like "~75%", "<30%" or "~$125K" up from 0 every time it scrolls into view.
export function CountUp({text}){
 const m=text.match(/^(\D*)(\d+)(.*)$/);const ref=useRef(null);
 const [v,setV]=useState(m&&reduced()?+m[2]:0);
 useEffect(()=>{
  if(!m||reduced()||!('IntersectionObserver' in window)){if(m)setV(+m[2]);return}
  let raf=0;
  const io=new IntersectionObserver(([e])=>{
   cancelAnimationFrame(raf);
   if(!e.isIntersecting){setV(0);return}
   const t0=performance.now(),to=+m[2],d=1200;
   const step=t=>{const k=Math.min((t-t0)/d,1);setV(Math.round(to*(1-Math.pow(1-k,3))));if(k<1)raf=requestAnimationFrame(step)};
   raf=requestAnimationFrame(step);
  },{threshold:.6});
  io.observe(ref.current);return()=>{cancelAnimationFrame(raf);io.disconnect()};
 },[]);
 return <p ref={ref} className="text-4xl font-extrabold h-display tabular-nums">{m?m[1]+v+m[3]:text}</p>;
}

// 0..1 of how far the page is scrolled (drives the thin gradient progress line under the header).
export function useProgress(){
 const [p,setP]=useState(0);
 useEffect(()=>{const f=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;setP(h>0?Math.min(window.scrollY/h,1):0)};f();window.addEventListener('scroll',f,{passive:true});window.addEventListener('resize',f);return()=>{window.removeEventListener('scroll',f);window.removeEventListener('resize',f)}},[]);
 return p;
}