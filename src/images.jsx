// All images come from the live izen.ai site. For production, download them into /public/images
// and change the paths here: one edit swaps every page.
const L='https://izen.ai/wp-content/uploads';
export const IMG={
 banner:L+'/elementor/thumbs/Banner-img-1024x802-new-gradient-r3g76fh4ysws2vlfc9uofgg3eevr73funosruym2gw.png',
 leap:L+'/elementor/thumbs/Leap-img-Box-with-white-Logo-Transparent-r3g576bkvxbacyeg8po722c4xfid8hn83t8a3hf474.png',
 earth:L+'/elementor/thumbs/icons8-earth-r3g6s4dljin0ulr2f68evkomgp9ezecvzc43t8fnuc.png',
 nowifi:L+'/elementor/thumbs/icons8-no-wifi-r3g6s699x6plhtoc471o0k7jnh05eskcnlf2rscvhw.png',
 learn:L+'/elementor/thumbs/icons8-learn-r3g6s5bfqcob67pp9on1g2g3234s73gmbgrlaie9o4.png',
 content:L+'/elementor/thumbs/icons8-content-r3g6s3frcolqizsfkntsb2x5vbe1rp95n7gmbyh20k.png',
 devx:L+'/2026/06/iZen-DevX-Autonomy-Award-ready-2026-Opt-2.png',
 tradewinds:L+'/2025/09/14_Awardable_logo_transparent_bg_2_black-white.png',
 gsa:L+'/2024/03/GSA-MAS.png',
 doe:L+'/2024/03/US_DEPARTMENT_OF_ENERGY_Logo.png',
 onr:L+'/2024/03/ONR-Logo.png',
 techconnect:L+'/2025/06/TechConnect-Challenge-2025-Awardee.png',
 skillbridge:L+'/2025/03/DoD-skillbridge-Partner.png',
 defense2024:L+'/2024/11/Defense-Innovation-2024-Awardee.png'
};
// Hides itself if an image ever fails to load, so no broken-image icons show.
export const Img=({src,alt='',className})=><img src={src} alt={alt} loading="lazy" className={className} onError={e=>{e.currentTarget.style.display='none'}}/>;
export const Logos=({items,className='py-5'})=><ul className={'wrap grid gap-3 sm:grid-cols-2 lg:grid-cols-3 '+className}>{items.map(([k,alt])=><li key={k} className="flex items-center gap-3 bg-white border border-ink/10 rounded-md px-3 py-2"><span className="flex items-center justify-center h-14 w-24 shrink-0"><Img src={IMG[k]} alt={alt} className="max-h-full max-w-full object-contain mix-blend-multiply"/></span><span className="text-xs text-steel leading-snug">{alt}</span></li>)}</ul>;