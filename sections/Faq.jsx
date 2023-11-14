/* eslint-disable */
/* eslint-disable */
'use client';

import {gsap, ScrollTrigger } from "gsap/all";
import AccordItem from "../components/js/AccordItem";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Faq = () => {
//   gsap.registerPlugin(ScrollTrigger)
//   const triggerRefFaq=useRef(null)
//   useEffect(()=>{

//   const ctxFaq=gsap.context(()=>{
//   const charss=SplitType.create('.faq', {type:'chars'})
//   gsap.from(charss.words,{
//     scrollTrigger:{
//       trigger:triggerRefFaq.current,
//       start:'top 80%',
//         end:'top 20%',
//       scrub:true,
//     },
   
//       opacity:0,
//       y:40,
//       transform:'bottom',
//       ease:"easeOut",
//       stagger:0.2,
//       duration:1,
    
//   })
// });
// return ()=>ctxFaq.revert();
// },[])

  const data1=["We work best with SMEs who are already doing at least RM5k+ Online Monthly Revenue."]
  const data2=["Yes, we do work with smaller brands than <RM5K/m a Month in one of the two special cases:",
  "a) Brands with great products, high growth, and a strong team.",
  "b) Brands that have third-party funding, such as venture capital or financing from other businesses to support their experimentation stagen"]
  const data3=["There are no contracts or long-term commitments. You can pause or cancel your subscription anytime in the first 6 months."]
  const data4=["With our proven track record of success in managing creative and analytical teams, we can help you to avoid the risks associated with this process by taking care of everything from campaign planning and execution to quality control."]
  return(
  <section  id='FAQ' className=" flex flex-col  pb-24 ">
    <div className="w-[80%] self-center">
    <motion.h1  variants={fadeIn("up", "tween",0.25,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }} className="service_header faq mt-11 mb-11">Frequently
asked questions</motion.h1>
<motion.div variants={fadeIn("up", "tween",0.35,0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
       className="flex flex-col self-center gap-6 md:gap-11">
<AccordItem header="What type of businesses do you work with?" text={data1} no={"0"} />
            <hr className="hr_line_question " />
            <AccordItem header="Do you work with brands that generate revenue of <RM5K/mth?" text={data2} no={"1"} />
            <hr className="hr_line_question " />
            <AccordItem header="Can I cancel if I don’t like it?" no={"2"} text={data3}  />
            <hr className="hr_line_question " />

            <AccordItem header="Is it worth it for me to invest in my own performance team?" no={"3"} text={data4} />

            <hr className="hr_line_question " />
</motion.div>
    </div>
  </section>
);
  }
export default Faq;

