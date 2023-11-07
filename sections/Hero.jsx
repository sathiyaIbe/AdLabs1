
/* eslint-disable */
'use client';
import {gsap,ScrollTrigger} from 'gsap/all';
import { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
const Hero = () => {
  const triggerRef1 = useRef(null);
  

  gsap.registerPlugin(ScrollTrigger)

const sectionRef=useRef()
  useEffect(()=>{

    const charss=SplitType.create('.hero_header', {type:'chars'})
    const heroText=SplitType.create('.heroText',{types:'chars'})

const ctx=gsap.context(()=>{
    const pin = gsap.to(
      triggerRef1,
      {

        scrollTrigger: {
          trigger: triggerRef1.current,
          pin: false,
          end:'+=100',
        },

      }
    );

    const t=gsap.timeline({
      scrollTrigger:{
        trigger:triggerRef1.current,
        start:'top 100%',
        end:'bottom 0%',
        toggleActions:'play restart none reset'
      }
    })


 t.fromTo(charss.chars,{
     fontFamily:'Manrope-Bold',
      scaleY:0,
      y:-20,
      transformOrigin:'top'},{
      stagger:0.02,
      duration:0.3,
      scaleY:1,
    }).fromTo(heroText.chars,{
     fontFamily:'Spartan',
      scaleY:0,
      y:-20,
      transformOrigin:'top'},{
      stagger:0.02,
      duration:0.3,
      scaleY:1,
    })
  }, triggerRef1)
    return () => ctx.revert();  //cleaedUp
},[])
  return(
  <section ref={triggerRef1} className="section_container pb-11">

    <div className="self-center flex justify-center mt-6 mb-6">
      <img src='/MainLogo.svg' className="pt-6 w-[60%] items-center" alt='logo' />
    </div>
    <div ref={sectionRef} className="md:w-[75%] w-[90%] self-center flex flex-col gap-3">
      <h1 className="hero_header opacity-1">Supercharge your growth with performance-based Ads that deliver <span className="text-[#0618DD]">real results. </span> </h1>
      <p style={{fontFamily:'Spartan'}} className="hero_text md:w-[70%] self-center heroText hidden md:block">Ad Labs is a Paid Advertising Agency that will bring your brand forward with a Return on 
      Ad Spend. We leverage data to develop high-performing ad creatives and expertly manage campaigns to achieve maximum ROI.</p>
    </div>
  </section>
);
  }

export default Hero;
