'use client'
import {  Navbar } from '../components';
import { Services, BluePrint, Team, Faq, Hero, Contact, Footer, World } from '../sections';
import {gsap,ScrollTrigger} from 'gsap/all';
const Page = () => {

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
