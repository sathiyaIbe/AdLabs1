/* eslint-disable */
'use client';
import { InlineWidget, PopupWidget, useCalendlyEventListener } from "react-calendly";
import {gsap,ScrollTrigger} from "gsap/all";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const Contact = () => {
  const sectionRefContact = useRef(null);

// useEffect(()=>{
//   const ctxTeam=gsap.context(()=>{
//     const arr1=["#first","#second","#third"]

//     const charss=SplitType.create('.contact', {type:'chars'})

//     // const t1=gsap.timeline({
//     //   scrollTrigger:{
//     //     trigger:sectionRefContact.current,
//     //     start:'top 90%',
//     //       end:'top 20%',
//     //     scrub:true,
//     //   },
//     // })
//     // t1.from(charss.words,{
//     //   opacity:0,
//     //   y:40,
//     //   transform:'bottom',
//     //   ease:"easeOut",
  
//     //   stagger:0.2,
//     //   duration:1,
//     // })
// const mm=gsap.matchMedia()
// mm.add("(min-width:768px)",()=>{
//   const t=gsap.timeline({
//     scrollTrigger:{
//       trigger:sectionRefContact.current,
//       start:'top 100%',
//       end:'bottom 100%',
//       scrub:true,
//     }
//   })

//   const arr=gsap.utils.toArray('.contact1')
//   arr.map((element,i) => {
//     t.fromTo(element,{
//       opacity:0,
//       x:50,
     
//     },{
//       opacity:1,
//       x:0,
//       duration:0.5
//     })
//   });
// })

// mm.add("(max-width:768px)",()=>{
//   const t=gsap.timeline({
//     scrollTrigger:{
//       trigger:sectionRefContact.current,
//       start:'top 40%',
//       end:'bottom 90%',
//       scrub:true,
//     }
//   })

//   const arr=gsap.utils.toArray('.contact1')
//   arr.map((element,i) => {
//     t.fromTo(element,{
//       opacity:0,
//       y:50,
     
//     },{
//       opacity:1,
//       y:0,
//       duration:1
//     })
//   });
// })
    
//   })
//   return () => ctxTeam.revert()
// });



  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });
 const pageSettings={
    backgroundColor: 'ffffff',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '00a2ff',
    textColor: '000',
    height:"500",
  }


  return(
  <section id="Contact" ref={sectionRefContact} className="min-h-screen flex flex-col justify-center pb-24">
    <div className="flex flex-col justify-around ">
     <div className="self-center md:w-[60%] w-[80%]  mt-6 mb-6 flex flex-col gap-6">
      <motion.h1  variants={fadeIn("up", "tween",0.25,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
       className="service_header contact">Book your free  30-minute  consultation call</motion.h1>
    </div>
    <div className="flex flex-col  justify-center mt-11">
    <div className=" self-center w-[90%]  flex md:flex-row justify-center  flex-col gap-24  md:gap-0">
      <motion.div variants={fadeIn("up", "tween",0.25,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }} className="basis-1/3 flex flex-col gap-6 order-2 md:order-1">
        <h1 className="contact_header">Here’s what you’ll get from your free strategy call:</h1>
        <div className="flex gap-4 contact1 " >
        <svg width="72" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66699 16.0003C2.66699 8.63653 8.63653 2.66699 16.0003 2.66699C18.1266 2.66699 20.1402 3.16567 21.927 4.05367C22.5865 4.38138 22.8554 5.18162 22.5277 5.84106C22.1999 6.5005 21.3997 6.76942 20.7403 6.4417C19.3139 5.73286 17.7057 5.33366 16.0003 5.33366C10.1093 5.33366 5.33366 10.1093 5.33366 16.0003C5.33366 21.8914 10.1093 26.667 16.0003 26.667C21.8914 26.667 26.667 21.8914 26.667 16.0003C26.667 15.5987 26.6449 15.2027 26.6018 14.8135C26.5209 14.0815 27.0487 13.4226 27.7806 13.3418C28.5125 13.2608 29.1714 13.7886 29.2523 14.5205C29.3061 15.0069 29.3337 15.5006 29.3337 16.0003C29.3337 23.3641 23.3641 29.3337 16.0003 29.3337C8.63653 29.3337 2.66699 23.3641 2.66699 16.0003ZM28.9431 5.72418C29.4638 6.24489 29.4638 7.0891 28.9431 7.60981L16.9431 19.6098C16.4225 20.1305 15.5782 20.1305 15.0575 19.6098L11.0575 15.6098C10.5368 15.0891 10.5368 14.2449 11.0575 13.7242C11.5782 13.2035 12.4224 13.2035 12.9431 13.7242L16.0003 16.7814L27.0575 5.72418C27.5782 5.20349 28.4225 5.20349 28.9431 5.72418Z" fill="#0618DD"/>
</svg>
<p className="contact_text">Walk through our proven process and how it can work for your business. </p>
        </div>
        <div className="flex gap-4 contact1 " >
        <svg width="72" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66699 16.0003C2.66699 8.63653 8.63653 2.66699 16.0003 2.66699C18.1266 2.66699 20.1402 3.16567 21.927 4.05367C22.5865 4.38138 22.8554 5.18162 22.5277 5.84106C22.1999 6.5005 21.3997 6.76942 20.7403 6.4417C19.3139 5.73286 17.7057 5.33366 16.0003 5.33366C10.1093 5.33366 5.33366 10.1093 5.33366 16.0003C5.33366 21.8914 10.1093 26.667 16.0003 26.667C21.8914 26.667 26.667 21.8914 26.667 16.0003C26.667 15.5987 26.6449 15.2027 26.6018 14.8135C26.5209 14.0815 27.0487 13.4226 27.7806 13.3418C28.5125 13.2608 29.1714 13.7886 29.2523 14.5205C29.3061 15.0069 29.3337 15.5006 29.3337 16.0003C29.3337 23.3641 23.3641 29.3337 16.0003 29.3337C8.63653 29.3337 2.66699 23.3641 2.66699 16.0003ZM28.9431 5.72418C29.4638 6.24489 29.4638 7.0891 28.9431 7.60981L16.9431 19.6098C16.4225 20.1305 15.5782 20.1305 15.0575 19.6098L11.0575 15.6098C10.5368 15.0891 10.5368 14.2449 11.0575 13.7242C11.5782 13.2035 12.4224 13.2035 12.9431 13.7242L16.0003 16.7814L27.0575 5.72418C27.5782 5.20349 28.4225 5.20349 28.9431 5.72418Z" fill="#0618DD"/>
</svg>
<p className="contact_text">Learn what specific research methods will drive insights and winning creatives. </p>
        </div>
        <div className="flex gap-4 contact1 " >
        <svg width="72" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66699 16.0003C2.66699 8.63653 8.63653 2.66699 16.0003 2.66699C18.1266 2.66699 20.1402 3.16567 21.927 4.05367C22.5865 4.38138 22.8554 5.18162 22.5277 5.84106C22.1999 6.5005 21.3997 6.76942 20.7403 6.4417C19.3139 5.73286 17.7057 5.33366 16.0003 5.33366C10.1093 5.33366 5.33366 10.1093 5.33366 16.0003C5.33366 21.8914 10.1093 26.667 16.0003 26.667C21.8914 26.667 26.667 21.8914 26.667 16.0003C26.667 15.5987 26.6449 15.2027 26.6018 14.8135C26.5209 14.0815 27.0487 13.4226 27.7806 13.3418C28.5125 13.2608 29.1714 13.7886 29.2523 14.5205C29.3061 15.0069 29.3337 15.5006 29.3337 16.0003C29.3337 23.3641 23.3641 29.3337 16.0003 29.3337C8.63653 29.3337 2.66699 23.3641 2.66699 16.0003ZM28.9431 5.72418C29.4638 6.24489 29.4638 7.0891 28.9431 7.60981L16.9431 19.6098C16.4225 20.1305 15.5782 20.1305 15.0575 19.6098L11.0575 15.6098C10.5368 15.0891 10.5368 14.2449 11.0575 13.7242C11.5782 13.2035 12.4224 13.2035 12.9431 13.7242L16.0003 16.7814L27.0575 5.72418C27.5782 5.20349 28.4225 5.20349 28.9431 5.72418Z" fill="#0618DD"/>
</svg>
<p className="contact_text">Feedback on your current activities & a growth plan focused on increasing revenue.</p>
        </div>
      </motion.div>
      <motion.div variants={fadeIn("up", "tween",0.25,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
       className="basis-2/3 md:hidden  calendly order-1 md:order-2">
      <InlineWidget pageSettings={pageSettings} styles={{
  height: '450px',minWidth:'300px',
  position: 'relative',
}}  url="https://calendly.com/losh-param/30min"
  
/>
      {/* <div class="calendly-inline-widget"
url="https://calendly.com/sathiya_"
style={{"minWidth":"320px", "height":"750px"}}></div> */}
      </motion.div>
      <motion.div variants={fadeIn("up", "tween",0.25,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
       className="basis-2/3  md:block hidden  calendly order-1 md:order-2">
      <InlineWidget pageSettings={pageSettings} styles={{
  height: '350px',minWidth:'300px',
  position: 'relative',
}}  url="https://calendly.com/losh-param/30min"
  
/>
      {/* <div class="calendly-inline-widget"
url="https://calendly.com/sathiya_"
style={{"minWidth":"320px", "height":"750px"}}></div> */}
      </motion.div>
    </div>
    </div>
    </div>
  </section>
)
};

export default Contact;
