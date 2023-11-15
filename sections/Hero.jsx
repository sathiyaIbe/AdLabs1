
/* eslint-disable */
'use client';
import { Power1 } from 'gsap/all';
import {gsap,ScrollTrigger} from 'gsap/all';
import { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
const Hero = () => {
  const triggerRef1 = useRef(null);
  

  gsap.registerPlugin(ScrollTrigger)

const sectionRef=useRef()
//   useEffect(()=>{

//     const charss=SplitType.create('.hero_header', {type:'chars'})
//     const heroText=SplitType.create('.heroText',{types:'words'})

// const ctx=gsap.context(()=>{
//     const pin = gsap.to(
//       triggerRef1,
//       {

//         scrollTrigger: {
//           trigger: triggerRef1.current,
//           pin: false,
//           end:'+=100',
//         },

//       }
//     );

//     const t=gsap.timeline({
//       scrollTrigger:{
//         trigger:triggerRef1.current,
//         start:'top 100%',
//         end:'bottom 0%',
//         // toggleActions:'play restart none reset'
//       }
//     })


//  t.fromTo(charss.words,{
//       y:30,
//       opacity:0,
//  },{
//       duration:1,
//       opacity:1,
//       stagger:0.1,
//       y:0,
//       ease:"easeOut"
//     }).fromTo(heroText.words,{
//       y:20,
//       opacity:0,
//  },{
//       opacity:1,
//       stagger:0.05,
//       y:0,
//       ease:"easeOut"
//     })
//   }, triggerRef1)
//     return () => ctx.revert();  //cleaedUp
// },[])
  return(
  <section id="WhoWeAre" ref={triggerRef1} className="section_container md:justify-cente ">
<div className='flex flex-col justify-center md:justify-star  min-h-screen'>
    <div className="self-center  mb-6  flex flex-col">
      <img src='/Logo_Animation.gif' className=" md:w-[50%] w-[60%] self-center" alt='logo' />
    </div>
    <div ref={sectionRef} className=" md:w-[60%] w-[80%] mb-36  self-center flex flex-col justify-center gap-11">
      <div className=' self-center'>
      <h1 className="hero_header opacity-1">Supercharge your growth with performance-based Ads that deliver <span className="text-[#0618DD]">real results. </span> </h1>
      </div>
      <div className=' self-center'>
      <p style={{fontFamily:'Spartan'}} className="hero_text  self-center heroText hidden md:block">Ad Labs is a Paid Advertising Agency that will bring your brand forward with a Return on 
      Ad Spend. We leverage data to develop high-performing ad creatives and expertly manage campaigns to achieve maximum ROI.</p>
    </div>
    </div>
    </div>
  </section>
);
  }

export default Hero;
