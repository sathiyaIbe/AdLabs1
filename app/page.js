'use client'
import {  Navbar } from '../components';
import { Services, BluePrint, Team, Faq, Hero, Contact, Footer, World } from '../sections';
import Lenis from '@studio-freight/lenis';
import {gsap,ScrollTrigger} from 'gsap/all';
const Page = () => {
  const lenis = new Lenis({
    smooth: true,
  })


  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
return(
  <div>
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
