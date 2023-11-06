/* eslint-disable */
'use client';
import {gsap,ScrollTrigger} from "gsap/all";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
const Team = () => {
  const sectionRefTeam = useRef(null);

useEffect(()=>{
  const ctxTeam=gsap.context(()=>{
    const arr1=["#first","#second","#third"]
    const charss=SplitType.create('.team', {type:'chars'})
    gsap.from(charss.chars,{
      scrollTrigger:{
        trigger:sectionRefTeam.current,
        start:'top 80%',
          end:'top 20%',
        scrub:true,
      },
      opacity:0,
      scaleY:0,
      y:-20,
      transformOrigin:'top',
      stagger:0.1,
    })
    const t=gsap.timeline({
      scrollTrigger:{
        trigger:sectionRefTeam.current,
        start:'top center',
        end:'bottom center',
        toggleActions:'play none none reset'
      }
    })

    const arr=gsap.utils.toArray('.first_team')
    arr.map((element,i) => {
      t.to(element,{
        opacity:1,
        scaleY:1,
        duration:1,
       transform:'bottom',
      })
      .fromTo(arr1[i],{
        opacity:0,
        
        rotationY:90,
      },{
        opacity:1,
        rotationY:0,
        duration:0.5,
      },)

    });
    
  })
  return () => ctxTeam.revert()
});
  return(
  <section ref={sectionRefTeam} className="flex flex-col min-h-screen max-w-[100vw] pb-24">
    <div className=" flex flex-col self-center w-[80%] items-center">
        <div className="self-center md:w-[60%]  mt-6 mb-6 flex flex-col gap-6">
      <h1 className="service_header team" style={{color:'#0618DD'}}>The Team</h1>
      <p className="hero_text  ">With over 7 years combined strategic and hand-on experience in all areas, rest assured that our team has the context and experience to deliver results.</p>
    </div>
    <div className="w-[90%] self-center flex md:flex-row items-center  md:justify-center flex-col mt-11">
      <div className="flex flex-col justify-center  " >
        <div className="flex justify-center gap-3 first_team opacity-0 ">
        <svg  width="70" height="63" viewBox="0 0 70 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.497 13.2419C45.1023 11.8592 42.6582 10.519 40.2952 9.02309C39.2112 8.3634 38.1376 7.5658 37.3077 6.60132C36.18 5.29061 36.3705 3.06086 37.5075 1.78131C38.3161 0.870396 40.3675 0.353567 41.0202 1.21223C43.6132 4.57612 47.666 5.13473 51.1297 6.75956C54.0799 8.13764 57.252 9.02334 60.2022 10.4014C62.3485 11.3953 64.5304 12.5307 66.3131 14.0525C70.552 17.6787 70.2193 23.3446 65.5005 26.1135C58.9435 29.9474 52.202 33.4666 44.9206 35.8581C43.4989 36.3066 41.9708 36.6315 40.4917 36.613C38.2269 36.5818 36.7951 33.4671 38.2888 31.7516C39.5529 30.3197 41.189 29.1701 42.758 27.9924C45.1608 26.1832 47.6701 24.4977 50.3347 22.5925C49.6503 21.8472 49.3093 21.1507 48.8527 21.0702C41.0268 19.9277 33.2244 20.013 25.5887 22.1928C19.1837 24.0023 13.6234 27.1939 9.76997 32.9194C4.35328 40.9797 4.46331 50.6116 10.3094 58.4067C10.9621 59.2654 11.6924 60.0142 12.2031 60.6077C11.966 62.5332 10.8377 62.7723 9.80021 62.4168C7.47742 61.6179 5.71948 60.0749 4.37443 57.9613C-1.79764 48.0365 -0.466329 35.2279 7.60678 26.6035C12.332 21.5911 17.9838 18.1057 24.6682 16.2709C30.1715 14.7639 35.7649 14.2121 41.4371 14.152C43.3833 14.1129 45.3226 14.166 47.2652 14.173C47.332 13.9004 47.4021 13.5818 47.497 13.2419Z" fill="black"/>
</svg>
    <p  className="team_text rotate-6">LOSH</p>
        </div>
        <img id='first' src='/team_img_1.png' className="opacity-0 w-[80%] self-center" alt='team_img'/>
      </div>
      <div className="flex flex-col  " >
        <div className="flex justify-end   first_team opacity-0">

    <p className="team_text rotate-[-12deg] md:rotate-12 md:relative  md:bottom-[30px]">Amir</p>
    <svg className=" relative top-[10%]" width="54" height="71" viewBox="0 0 54 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0929 61.6535C26.8578 61.6962 29.6451 61.6776 32.4374 61.8346C33.7055 61.8834 35.0315 62.0577 36.2258 62.4965C37.8488 63.0928 38.7675 65.1334 38.3968 66.8045C38.1337 67.9938 36.5931 69.4436 35.605 69.011C31.7028 67.3341 27.8905 68.8183 24.0738 69.0844C20.8259 69.3161 17.6236 70.086 14.3757 70.3177C12.0171 70.4938 9.55844 70.5637 7.26048 70.1018C1.79273 68.9966 -0.673758 63.885 2.10126 59.1697C5.96379 52.6297 10.1407 46.2746 15.3381 40.642C16.3618 39.5584 17.5387 38.531 18.8399 37.8273C20.8336 36.7525 23.6001 38.7768 23.13 41.0023C22.7225 42.8684 21.8526 44.6689 21.055 46.4612C19.8362 49.211 18.4643 51.9046 17.0636 54.8656C18.0242 55.1838 18.661 55.6262 19.0991 55.4744C26.4919 52.6642 33.2666 48.7929 38.8765 43.1728C43.5914 38.4752 46.8959 32.9812 47.4761 26.1042C48.2858 16.4267 43.5026 8.06574 34.6021 4.10062C33.614 3.66811 32.6116 3.36935 31.8767 3.09933C31.1468 1.30191 32.0162 0.543897 33.0955 0.349577C35.5135 -0.0827993 37.8001 0.409745 40.0037 1.60163C50.2253 7.26857 55.2953 19.1062 52.4394 30.5691C50.7504 37.2474 47.5091 43.0426 42.5624 47.8983C38.4881 51.8929 33.8701 55.0969 28.944 57.9096C27.2628 58.8907 25.5428 59.7881 23.8423 60.7273C23.9166 60.998 24.0104 61.3104 24.0929 61.6535Z" fill="black"/>
</svg> 

        </div>
        <img id='second' src='/team_img_1.png'  className="opacity-0  relative bottom-[10px] w-[80%] self-center" alt='team_img'/>
      </div>
      <div className="flex flex-col " >
        <div className="flex justify-center gap-3 first_team opacity-0">
        <svg width="70" height="63" viewBox="0 0 70 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.497 13.2419C45.1023 11.8592 42.6582 10.519 40.2952 9.02309C39.2112 8.3634 38.1376 7.5658 37.3077 6.60132C36.18 5.29061 36.3705 3.06086 37.5075 1.78131C38.3161 0.870396 40.3675 0.353567 41.0202 1.21223C43.6132 4.57612 47.666 5.13473 51.1297 6.75956C54.0799 8.13764 57.252 9.02334 60.2022 10.4014C62.3485 11.3953 64.5304 12.5307 66.3131 14.0525C70.552 17.6787 70.2193 23.3446 65.5005 26.1135C58.9435 29.9474 52.202 33.4666 44.9206 35.8581C43.4989 36.3066 41.9708 36.6315 40.4917 36.613C38.2269 36.5818 36.7951 33.4671 38.2888 31.7516C39.5529 30.3197 41.189 29.1701 42.758 27.9924C45.1608 26.1832 47.6701 24.4977 50.3347 22.5925C49.6503 21.8472 49.3093 21.1507 48.8527 21.0702C41.0268 19.9277 33.2244 20.013 25.5887 22.1928C19.1837 24.0023 13.6234 27.1939 9.76997 32.9194C4.35328 40.9797 4.46331 50.6116 10.3094 58.4067C10.9621 59.2654 11.6924 60.0142 12.2031 60.6077C11.966 62.5332 10.8377 62.7723 9.80021 62.4168C7.47742 61.6179 5.71948 60.0749 4.37443 57.9613C-1.79764 48.0365 -0.466329 35.2279 7.60678 26.6035C12.332 21.5911 17.9838 18.1057 24.6682 16.2709C30.1715 14.7639 35.7649 14.2121 41.4371 14.152C43.3833 14.1129 45.3226 14.166 47.2652 14.173C47.332 13.9004 47.4021 13.5818 47.497 13.2419Z" fill="black"/>
</svg>
    <p className="team_text rotate-6">Farra</p>
        </div>
        <img id='third' src='/team_img_1.png'   className="opacity-0 w-[80%] self-center" alt='team_img'/>
      </div>
    </div>
    </div>
  </section>
);
  }
export default Team;
