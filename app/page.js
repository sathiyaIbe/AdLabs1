'use client'
import { useEffect } from 'react';
import {  Navbar } from '../components';
import { Services, BluePrint, Team, Faq, Hero, Contact, Footer, World } from '../sections';
import {gsap,ScrollTrigger} from 'gsap/all';
import Lenis from '@studio-freight/lenis'

const Page = () => {
  useEffect(()=>{

  
    const lenis = new Lenis({
     

    })
  
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  
})
return(
  <div
  
>
    {/* <Navbar /> */}
    <Hero />  
        <Services />
  <BluePrint />
      <Faq />
     <Team />
     <Contact />
     <Footer /> 
   {/* <WhatsNew />
    <World />
    <Contact />
    <Feedback />
    <Footer /> */}
  </div>
);
}
export default Page;
