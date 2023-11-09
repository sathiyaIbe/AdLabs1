/* eslint-disable */
'use client'
import React, { useState } from 'react'
import gsap from 'gsap'
import { animations } from 'framer-motion'

const AccordItem = ({header,text,no}) => {
    const [active,setActive]=useState(Boolean)
    const handleToggle = (event,no) => {
      const arr=[".icon0",".icon1", '.icon2', ".icon3"]
      const arr1=[".container0",".container1", '.container2', ".container3"]

     const a=   gsap.to(arr[no],{
         rotate:0,
        })
    const b=    gsap.fromTo(arr1[no],{
          opacity:0,
          duration:1,
          y:40},{
            ease:'easeOut',
             y:0,
             opacity:1,
        })
        
        event.preventDefault();
        setActive(!active);
      };
  return (
    <div className='flex flex-col '>
      <div className=" flex justify-between">
      <h1 className="question_text">{header}</h1>
    <button className='md:self-end ' onClick={(e)=>{handleToggle(e,no)}} type="button">
    <svg id="#icon"  width="32" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className={'icon'+no} fill-rule="evenodd" clip-rule="evenodd" d="M21.9597 24.9919C21.6582 25.2934 21.1694 25.2934 20.8679 24.9919L13.148 17.272C12.8465 16.9705 12.8465 16.4817 13.148 16.1802C13.4495 15.8787 13.9383 15.8787 14.2397 16.1802L21.4138 23.3542L28.5878 16.1802C28.8893 15.8787 29.3781 15.8787 29.6796 16.1802C29.981 16.4817 29.981 16.9705 29.6796 17.272L21.9597 24.9919Z" fill="#0618DD"/>
<rect x="2.32715" y="1.5" width="38.1728" height="38.1728" rx="19.0864" stroke="#0618DD" stroke-width="3"/>
</svg>

      </button>
     
      </div>
      <div
        className={`md:pl-[62px] duration-600 ease-in-out faq_tag ${"container"+no}   ${
          active ? "block" : "hidden"
        }`}
      >
        {/* <p className="answer_text py-3  leading-relaxed ">tasaaa</p> */}
        {text.map(element => {
            return(
        <p className="answer_text py-3  leading-relaxed ">{element}</p>
            )
      })}
        
      </div>
  </div>
  )
}

export default AccordItem