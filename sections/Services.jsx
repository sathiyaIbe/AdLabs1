/* eslint-disable */
'use client';
import {gsap, MotionPathPlugin,ScrollTrigger} from "gsap/all";
import { useEffect, useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
const Services = () => {
  const triggerRef2 = useRef(null);

  gsap.registerPlugin(MotionPathPlugin,ScrollTrigger)

  useEffect(() => {
    const ctx1=gsap.context(()=>{
    // const pin = gsap.to(
    //   triggerRef2,
    //   {

    //     scrollTrigger: {
    //       trigger: triggerRef2.current,
    //       pin:true,
    //       end:"+=10",
        
    //     },

    //   }
    // )
const mm=gsap.matchMedia()
const charss=SplitType.create('.services', {type:'chars'})
const heroText=SplitType.create('.service_desc',{type:'chars'})
console.log(heroText)

mm.add("(min-width:768px)",()=>{

  const t1=gsap.timeline({
    scrollTrigger:{
      trigger:triggerRef2.current,
      start:'top center',
      end:'top 20%',
      scrub:true,
      toggleActions:'play none none none',
    }
  })

  t1.from(charss.words,{
    opacity:0,
    y:40,
    transform:'bottom',
    ease:"easeOut",

    stagger:0.2,
    duration:1,
  }).from(heroText.words,{
    y:20,
    opacity:0,
    stagger:0.02,
  }).from(".svg_container",{
    opacity:0,
    y:40,
    transform:'bottom',
    ease:"easeOut",
    duration:1,
  })
})
mm.add("(max-width:768px)",()=>{
  const t1=gsap.timeline({
    scrollTrigger:{
      trigger:triggerRef2.current,
      start:'bottom 100%',
      end:'bottom 80%',
      scrub:true
    },
  })
  t1.from(charss.words,{
    opacity:0,
    y:40,
    transform:'bottom',
    ease:"easeOut",

    stagger:0.5,
    duration:1,
  }).from(heroText.words,{
    y:20,
    opacity:0,
    stagger:0.02,
  }).from(".svg_container",{
    opacity:0,
    y:40,
    transform:'bottom',
    ease:"easeOut",
    duration:1,
  })
})  



gsap.timeline({
  scrollTrigger:{
    trigger:'#svg',
    start:'top 100%',
   
    // markers:true,
    // scrub:true,
  }
})
.to("#blue12",{
  autoAlpha:1,

        duration:10,
        repeat:-1,
        yoyo:true,
       motionPath:{
        path:'#path1',
        align:"#path1",
        alignOrigin:[0.5, 0.5],
        autoRotate:true,

       },
      
    },0).to("#blue13",{
      opacity:1,

      repeat:-1,
        duration:10,
       motionPath:{
        path:'#path2',
        align:"#path2",
        alignOrigin:[0.5, 0.5],
        autoRotate:true,
       },
      
    },0).to("#blue14",{
      repeat:-1,
        duration:10,
       motionPath:{
        path:'#path3',
        align:"#path3",
        alignOrigin:[0.5, 0.5],
        autoRotate:true,
       },
      
    },0)

  },triggerRef2)
   
      return () => ctx1.revert();
   
  }, []);

  return(
  <section ref={triggerRef2} className="md:min-h-[100vh] flex flex-col justify-center pb-11 overflow-hidden">
    <div className="self-center flex flex-col gap-6 mt-11 mb-6">
      <h1 className="service_header services" style={{color:'#0618DD'}}>Our Services</h1>
      <p className="service_text service_desc md:w-[70%] flex w-[90%] self-center">The key to successful advertising is not simply spending more money, but spending on the right platform, audience and ads.</p>
    </div>
   
    {/* <a className="w-fit" id="blue12">sssss</a> */}
    <div className="svg_container mt-6  self-center">
<svg id="svg" width="400" height="120%" viewBox="0 0 544 486" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_218_69)">
<path id="path1" d="M387.8 472.16C364.931 472.16 337.843 462.813 308.441 444.345C261.933 415.17 214.925 366.711 175.995 307.861C137.064 249.011 110.883 186.713 102.262 132.537C93.5505 77.6344 103.85 37.3878 131.347 19.1929C158.843 0.998011 199.907 7.25959 247.005 36.7979C293.513 65.9733 340.52 114.433 379.451 173.282C418.382 232.132 444.562 294.385 453.183 348.607C461.895 403.509 451.595 443.756 424.099 461.951C413.799 468.757 401.548 472.16 387.8 472.16ZM167.691 14.111C154.941 14.111 143.643 17.1965 134.205 23.458C108.524 40.4732 98.95 78.8595 107.344 131.675C115.874 185.17 141.738 246.697 180.26 304.957C218.782 363.217 265.245 411.132 311.118 439.944C356.401 468.348 395.468 474.61 421.195 457.64C446.922 440.625 456.45 402.239 448.056 349.423C439.526 295.928 413.663 234.401 375.14 176.141C336.618 117.881 290.155 69.9662 244.282 41.1538C215.697 23.2312 189.562 14.111 167.737 14.111H167.691Z" fill="black"/>
<path   id="path2" d="M168.374 472.659C154.807 472.659 142.692 469.347 132.438 462.632C104.85 444.573 94.3236 404.372 102.808 349.424C111.157 295.202 137.066 232.814 175.679 173.737C214.292 114.705 261.118 65.974 307.444 36.6171C354.361 6.85193 395.424 0.408849 423.011 18.4676C450.599 36.5264 461.125 76.7276 452.641 131.675C444.292 185.897 418.383 248.286 379.77 307.363C341.157 366.394 294.331 415.125 248.005 444.482C218.512 463.176 191.333 472.705 168.374 472.705V472.659ZM387.03 13.6126C365.114 13.6126 338.888 22.8689 310.212 41.0184C264.475 70.0123 218.239 118.154 179.989 176.595C141.739 235.037 116.148 296.7 107.89 350.241C99.7684 403.056 109.478 441.442 135.251 458.321C144.643 464.492 155.85 467.532 168.419 467.532C190.335 467.532 216.561 458.276 245.237 440.126C290.974 411.133 337.21 362.991 375.46 304.549C413.71 246.108 439.301 184.445 447.559 130.904C455.681 78.0888 445.971 39.7026 420.198 22.8235C410.806 16.6527 399.599 13.6126 387.03 13.6126Z" fill="black"/>
<path  id="path3" d="M276.588 362.538C206.577 362.538 140.739 350.196 91.0548 327.782C40.3723 304.913 12.422 274.15 12.3313 241.208C12.2405 208.267 40.0547 177.367 90.6011 154.227C140.512 131.404 206.849 118.744 277.405 118.563C277.904 118.563 278.358 118.563 278.857 118.563C348.869 118.563 414.706 130.905 464.391 153.319C515.073 176.188 543.023 206.951 543.114 239.893C543.205 272.879 515.391 303.734 464.844 326.874C414.933 349.697 348.597 362.356 278.04 362.538C277.541 362.538 277.087 362.538 276.588 362.538ZM277.45 121.149V123.736C207.62 123.917 142.055 136.395 92.779 158.9C44.1383 181.179 17.4131 210.354 17.5039 241.163C17.5946 271.972 44.4559 301.056 93.142 323.063C142.146 345.205 207.257 357.365 276.543 357.365C277.042 357.365 277.496 357.365 277.95 357.365C347.78 357.184 413.39 344.706 462.621 322.201C511.216 299.967 537.941 270.792 537.896 239.938C537.805 209.129 510.944 180.045 462.258 158.038C412.891 135.76 347.281 123.599 277.405 123.736V121.149H277.45Z" fill="black"/>
<path d="M211.093 63.8214C210.909 59.8297 210.273 57.1037 209.342 54.7187C208.397 52.2165 206.914 49.9499 204.998 48.0765C203.117 46.1688 200.841 44.6919 198.328 43.7501C195.932 42.8236 193.195 42.1902 189.186 42.0088C185.17 41.8257 183.887 41.7822 173.66 41.7822C163.432 41.7822 162.149 41.8257 158.133 42.0077C154.124 42.1902 151.387 42.8242 148.991 43.7512C146.479 44.6925 144.202 46.1688 142.321 48.0765C140.405 49.9494 138.922 52.2159 137.976 54.7182C137.046 57.1037 136.41 59.8297 136.228 63.8209C136.044 67.8206 136 69.0978 136 79.2819C136 89.4667 136.044 90.7444 136.228 94.7436C136.41 98.7348 137.047 101.461 137.978 103.846C138.923 106.348 140.406 108.615 142.322 110.488C144.202 112.396 146.479 113.872 148.992 114.813C151.387 115.741 154.125 116.374 158.133 116.557C162.15 116.739 163.433 116.782 173.66 116.782C183.888 116.782 185.171 116.739 189.187 116.557C193.196 116.374 195.933 115.741 198.328 114.813C203.387 112.865 207.386 108.883 209.342 103.846C210.273 101.461 210.909 98.7348 211.093 94.7436C211.275 90.7439 211.319 89.4667 211.319 79.2825C211.319 69.0978 211.275 67.8206 211.093 63.8214ZM204.314 94.4363C204.146 98.0927 203.533 100.078 203.017 101.4C201.75 104.67 199.155 107.255 195.87 108.517C194.543 109.03 192.549 109.641 188.877 109.808C184.907 109.988 183.716 110.026 173.66 110.026C163.603 110.026 162.412 109.988 158.441 109.808C154.77 109.641 152.776 109.03 151.449 108.517C149.813 107.915 148.333 106.957 147.119 105.711C145.868 104.501 144.905 103.029 144.301 101.4C143.786 100.078 143.172 98.0927 143.005 94.4363C142.824 90.4824 142.785 89.2962 142.785 79.2831C142.785 69.2694 142.824 68.0838 143.005 64.1293C143.173 60.4729 143.786 58.4873 144.301 57.1661C144.905 55.537 145.868 54.0635 147.119 52.8539C148.333 51.6082 149.813 50.6497 151.449 50.0489C152.776 49.5351 154.77 48.9245 158.442 48.7575C162.413 48.5772 163.604 48.5389 173.66 48.5389H173.659C183.715 48.5389 184.906 48.5772 188.877 48.758C192.549 48.9245 194.543 49.5357 195.87 50.0489C197.505 50.6503 198.985 51.6088 200.2 52.8539C201.451 54.0635 202.413 55.537 203.017 57.1661C203.533 58.4873 204.146 60.4729 204.314 64.1293C204.495 68.0832 204.533 69.2694 204.533 79.2825C204.533 89.2962 204.495 90.4818 204.314 94.4363Z" fill="url(#paint0_linear_218_69)"/>
<path d="M173.819 59.9736C163.155 59.9736 154.511 68.6188 154.511 79.2824C154.511 89.946 163.155 98.5907 173.819 98.5907C184.483 98.5907 193.128 89.946 193.128 79.2824C193.128 68.6188 184.483 59.9736 173.819 59.9736ZM173.819 91.8159C166.897 91.8153 161.286 86.2041 161.286 79.2819C161.286 72.3602 166.897 66.7484 173.82 66.7484C180.742 66.749 186.353 72.3602 186.353 79.2819C186.353 86.2041 180.741 91.8159 173.819 91.8159Z" fill="url(#paint1_linear_218_69)"/>
<path d="M420 78.0267C420 98.1143 405.372 114.764 386.25 117.782V89.6598H395.57L397.344 78.0267H386.25V70.4777C386.25 67.2943 387.8 64.1926 392.769 64.1926H397.812V54.2887C397.812 54.2887 393.234 53.5027 388.858 53.5027C379.722 53.5027 373.75 59.0741 373.75 69.1603V78.0267H363.594V89.6598H373.75V117.782C354.628 114.764 340 98.1143 340 78.0267C340 55.8011 357.909 37.7822 380 37.7822C402.091 37.7822 420 55.8011 420 78.0267Z" fill="#1877F2"/>
<path d="M480 199.782C457.912 199.782 440 217.694 440 239.782C440 261.87 457.912 279.782 480 279.782C502.088 279.782 520 261.87 520 239.782C520 217.694 502.088 199.782 480 199.782ZM500.067 230.387V235.803C497.513 235.804 495.032 235.304 492.692 234.317C491.187 233.681 489.785 232.863 488.502 231.873L488.541 248.544C488.525 252.298 487.04 255.825 484.352 258.482C482.164 260.644 479.392 262.02 476.388 262.465C475.682 262.569 474.963 262.623 474.237 262.623C471.021 262.623 467.968 261.581 465.47 259.659C465 259.297 464.55 258.905 464.122 258.482C461.209 255.603 459.707 251.701 459.96 247.595C460.153 244.471 461.404 241.49 463.49 239.155C466.249 236.064 470.109 234.348 474.237 234.348C474.963 234.348 475.682 234.403 476.388 234.507V236.51V242.08C475.718 241.859 475.004 241.738 474.259 241.738C470.488 241.738 467.438 244.815 467.494 248.588C467.53 251.003 468.849 253.113 470.794 254.277C471.708 254.824 472.76 255.163 473.882 255.224C474.762 255.272 475.606 255.15 476.388 254.892C479.082 254.002 481.026 251.471 481.026 248.486L481.035 237.323V216.942H488.493C488.5 217.681 488.575 218.402 488.715 219.101C489.278 221.929 490.872 224.383 493.091 226.055C495.025 227.515 497.435 228.38 500.046 228.38C500.047 228.38 500.069 228.38 500.067 228.378V230.387H500.067Z" fill="black"/>
<path d="M89.6042 199.246C84.2427 196.162 77.3868 197.992 74.2912 203.333L46.5037 251.282C43.4082 256.623 45.2452 263.453 50.6067 266.537C55.9682 269.621 62.8241 267.791 65.9197 262.449L93.7074 214.501C96.8028 209.159 94.9657 202.329 89.6042 199.246Z" fill="#FFC107"/>
<path d="M89.6045 199.245C87.1 197.805 84.2698 197.437 81.6487 197.998C82.7617 198.237 83.8572 198.648 84.8962 199.245C90.2577 202.329 92.0948 209.159 88.9992 214.5L61.2117 262.449C59.5621 265.295 56.8447 267.144 53.8545 267.784C58.4848 268.777 63.4243 266.755 65.9198 262.449L93.7074 214.5C96.8031 209.159 94.966 202.329 89.6045 199.245Z" fill="#FFB300"/>
<path d="M56.1981 268.034C62.3826 268.034 67.3961 263.04 67.3961 256.879C67.3961 250.717 62.3826 245.723 56.1981 245.723C50.0135 245.723 45 250.717 45 256.879C45 263.04 50.0135 268.034 56.1981 268.034Z" fill="#4CAF50"/>
<path d="M53.8549 267.785C53.8543 267.786 53.854 267.787 53.8535 267.788C54.61 267.949 55.394 268.035 56.1987 268.035C62.3832 268.035 67.3967 263.041 67.3967 256.879C67.3967 255.511 67.1481 254.2 66.6954 252.988L61.2123 262.45C59.5625 265.296 56.8451 267.145 53.8549 267.785Z" fill="#43A047"/>
<path d="M121.495 251.282L93.7078 203.333C90.6124 197.992 83.7566 196.162 78.3949 199.246C73.0333 202.329 71.1962 209.159 74.2918 214.501L102.08 262.449C105.175 267.791 112.031 269.621 117.392 266.537C122.754 263.453 124.591 256.623 121.495 251.282Z" fill="#2196F3"/>
<path d="M121.496 251.282L93.7089 203.334C91.2132 199.027 86.2738 197.006 81.6436 197.999C84.6336 198.639 87.3512 200.487 89.0008 203.334L116.788 251.282C119.884 256.623 118.047 263.453 112.685 266.537C111.646 267.135 110.551 267.546 109.438 267.785C112.059 268.346 114.889 267.978 117.394 266.537C122.755 263.453 124.592 256.623 121.496 251.282Z" fill="#1E88E5"/>
<path d="M172.5 447.782C194.315 447.782 212 430.097 212 408.282C212 386.467 194.315 368.782 172.5 368.782C150.685 368.782 133 386.467 133 408.282C133 430.097 150.685 447.782 172.5 447.782Z" fill="#F20000"/>
<path d="M191.325 398.782C190.535 396.328 187.921 394.878 185.493 394.541C176.842 393.621 168.117 393.621 159.465 394.541C157.059 394.878 154.444 396.349 153.654 398.782C152.423 405.057 152.423 411.513 153.654 417.788C154.465 420.236 157.079 421.692 159.507 422.029C168.159 422.944 176.883 422.944 185.535 422.029C187.941 421.692 190.556 420.216 191.346 417.788C192.57 411.511 192.563 405.056 191.325 398.782ZM167.776 415.85V400.715L180.098 408.282C175.946 410.834 171.913 413.319 167.776 415.85Z" fill="white"/>
<path d="M407.265 398.793C407.14 385.625 396.349 374.414 383.21 373.8C368.689 373.128 356.734 384.661 356.734 399.037C356.734 405.792 359.36 412.14 364.124 416.913C368.093 420.889 370.434 425.839 370.854 430.989C369.527 431.683 368.61 433.058 368.61 434.656V434.791H366.737C365.653 434.791 364.775 435.67 364.775 436.753C364.775 437.837 365.653 438.716 366.737 438.716H368.61V440.231H366.737C365.653 440.231 364.775 441.11 364.775 442.194C364.775 443.277 365.653 444.156 366.737 444.156H368.61V444.29C368.61 446.581 370.474 448.446 372.764 448.446H372.818C373.724 452.685 377.493 455.877 382 455.877C386.506 455.877 390.275 452.685 391.181 448.446H391.22C393.51 448.446 395.374 446.581 395.374 444.29V444.156H397.246C398.331 444.156 399.209 443.277 399.209 442.194C399.209 441.11 398.331 440.231 397.246 440.231H395.374V438.716H397.246C398.331 438.716 399.209 437.837 399.209 436.753C399.209 435.67 398.331 434.791 397.246 434.791H395.374V434.656C395.374 433.057 394.456 431.683 393.129 430.989C393.547 425.829 395.879 420.887 399.835 416.941C404.691 412.098 407.33 405.653 407.265 398.793ZM382 451.952C379.676 451.952 377.685 450.495 376.894 448.446H387.105C386.316 450.495 384.325 451.952 382 451.952ZM391.45 444.29C391.45 444.417 391.346 444.521 391.22 444.521C390.99 444.521 371.696 444.521 372.764 444.521C372.638 444.521 372.534 444.417 372.534 444.29V434.656C372.534 434.53 372.638 434.426 372.764 434.426H391.22C391.346 434.426 391.45 434.53 391.45 434.656C391.45 434.857 391.45 444.492 391.45 444.29ZM389.209 430.502H374.774C374.243 424.485 371.492 418.738 366.902 414.14C362.876 410.109 360.659 404.745 360.659 399.037C360.659 386.818 370.851 377.144 383.026 377.721C394.123 378.239 403.235 387.708 403.34 398.829C403.394 404.626 401.165 410.071 397.064 414.162C392.482 418.733 389.736 424.472 389.209 430.502Z" fill="#0618DD"/>
<path d="M394.851 391.06C394.706 390.811 394.362 390.488 394.111 390.331L382.957 384.107C382.363 383.776 381.638 383.777 381.044 384.106L369.888 390.331C369.686 390.508 369.406 390.617 369.148 391.06C368.969 391.369 368.882 391.712 368.882 392.044V406.135C368.882 406.847 369.267 407.502 369.888 407.849L381.044 414.072C381.37 414.254 381.73 414.32 382.001 414.32C382.419 414.32 382.614 414.215 382.993 414.051C382.994 414.051 382.994 414.05 382.995 414.05C382.995 414.05 382.996 414.05 382.995 414.05L394.111 407.848C394.732 407.502 395.118 406.846 395.118 406.135V392.044C395.118 391.76 395.051 391.405 394.851 391.06ZM380.038 409.017L372.806 404.982V395.386L380.038 399.42V409.017ZM382.001 396.02L374.873 392.044L382.001 388.067L389.127 392.044L382.001 396.02ZM391.193 404.982L383.963 409.016V399.42C384.159 399.311 391.64 395.137 391.193 395.386V404.982Z" fill="#0618DD"/>
<path d="M383.963 367.786V363.65C383.963 362.567 383.085 361.688 382 361.688C380.916 361.688 380.038 362.567 380.038 363.65V367.786C380.038 368.869 380.916 369.748 382 369.748C383.085 369.748 383.963 368.869 383.963 367.786Z" fill="#0618DD"/>
<path d="M398.971 372.857L401.036 369.276C401.579 368.338 401.257 367.138 400.318 366.597C399.381 366.056 398.179 366.376 397.637 367.316L395.571 370.897C395.029 371.835 395.351 373.035 396.29 373.577C397.218 374.113 398.423 373.805 398.971 372.857Z" fill="#0618DD"/>
<path d="M409.43 384.756L413.011 382.688C413.95 382.146 414.272 380.946 413.73 380.007C413.186 379.068 411.984 378.747 411.049 379.289L407.467 381.356C406.528 381.899 406.206 383.098 406.749 384.037C407.294 384.981 408.498 385.294 409.43 384.756Z" fill="#0618DD"/>
<path d="M412.54 400.289H416.676C417.76 400.289 418.638 399.411 418.638 398.327C418.638 397.243 417.76 396.365 416.676 396.365H412.54C411.456 396.365 410.578 397.243 410.578 398.327C410.578 399.411 411.456 400.289 412.54 400.289Z" fill="#0618DD"/>
<path d="M367.711 373.577C368.65 373.034 368.972 371.834 368.43 370.896L366.362 367.315C365.818 366.376 364.616 366.056 363.681 366.597C362.742 367.139 362.42 368.339 362.963 369.277L365.03 372.858C365.576 373.801 366.779 374.115 367.711 373.577Z" fill="#0618DD"/>
<path d="M357.25 384.037C357.793 383.098 357.471 381.899 356.532 381.356L352.95 379.289C352.013 378.747 350.812 379.068 350.269 380.007C349.727 380.946 350.049 382.146 350.988 382.688L354.569 384.756C355.502 385.294 356.705 384.98 357.25 384.037Z" fill="#0618DD"/>
<path d="M347.324 396.365C346.239 396.365 345.361 397.243 345.361 398.327C345.361 399.411 346.239 400.289 347.324 400.289H351.459C352.544 400.289 353.421 399.411 353.421 398.327C353.421 397.243 352.544 396.365 351.459 396.365H347.324Z" fill="#0618DD"/>
<path d="M259.645 233.272V315.743L224.473 298.069V214.417L259.645 233.272Z" fill="#0618DD"/>
<path d="M260.882 317.751L223.234 298.834V212.35L260.882 232.528V317.751ZM225.71 297.307L258.407 313.739V234.013L225.71 216.486V297.307Z" fill="#0618DD"/>
<path d="M337.045 185.752L300.932 165.266L225.413 212.594L259.645 233.272L337.045 185.752Z" fill="#0618DD"/>
<path d="M259.631 234.71L223 212.584L300.931 164.543L339.546 186.448L259.631 234.71ZM227.822 212.605L259.657 231.832L334.569 186.472L300.957 167.405L227.822 212.605Z" fill="#0618DD"/>
<path d="M279.721 222.268V189.25C279.721 185.503 274.576 182.465 268.227 182.465C261.878 182.465 256.733 185.503 256.733 189.25V222.268C256.733 222.268 237.27 269.115 235.428 273.299C234.072 276.378 232.324 278.893 232.324 281.784C232.324 289.396 246.661 301.027 268.227 301.027C289.793 301.027 304.561 290.216 304.561 282.493C304.561 279.424 302.929 274.373 301.337 271.089C299.508 267.318 279.721 222.27 279.721 222.27V222.268Z" fill="white"/>
<path d="M268.227 302.229C258.318 302.229 248.845 299.762 241.558 295.284C235.121 291.327 231.121 286.156 231.121 281.783C231.121 279.355 232.159 277.263 233.26 275.048C233.617 274.328 233.988 273.582 234.327 272.815C236.08 268.836 254.074 225.531 255.53 222.028V189.25C255.53 184.772 261.109 181.261 268.227 181.261C275.346 181.261 280.925 184.769 280.925 189.25V222.015C282.459 225.51 300.688 266.991 302.42 270.563C304.08 273.992 305.765 279.189 305.765 282.493C305.765 291.619 289.368 302.229 268.23 302.229H268.227ZM268.227 183.668C262.649 183.668 257.935 186.225 257.935 189.25V222.509L257.843 222.73C257.049 224.643 238.355 269.638 236.526 273.784C236.166 274.604 235.783 275.374 235.412 276.118C234.398 278.157 233.523 279.92 233.523 281.783C233.523 288.142 246.698 299.822 268.225 299.822C289.751 299.822 303.355 289.39 303.355 282.493C303.355 279.584 301.755 274.714 300.252 271.611C298.433 267.861 279.427 224.59 278.618 222.751L278.515 222.519V189.25C278.515 186.225 273.801 183.668 268.225 183.668H268.227Z" fill="#0618DD"/>
<path d="M268.228 197.961C260.702 197.961 254.806 194.135 254.806 189.247C254.806 184.36 260.702 180.534 268.228 180.534C275.754 180.534 281.651 184.36 281.651 189.247C281.651 194.135 275.757 197.961 268.228 197.961ZM268.228 184.391C262.592 184.391 258.661 186.951 258.661 189.247C258.661 191.544 262.589 194.103 268.228 194.103C273.867 194.103 277.793 191.544 277.793 189.247C277.793 186.951 273.865 184.391 268.228 184.391Z" fill="white"/>
<path d="M268.228 199.164C260.027 199.164 253.604 194.81 253.604 189.25C253.604 183.69 260.029 179.335 268.228 179.335C276.426 179.335 282.851 183.69 282.851 189.25C282.851 194.81 276.426 199.164 268.228 199.164ZM268.228 181.74C261.49 181.74 256.009 185.109 256.009 189.25C256.009 193.391 261.49 196.76 268.228 196.76C274.965 196.76 280.447 193.391 280.447 189.25C280.447 185.109 274.965 181.74 268.228 181.74ZM268.228 195.31C262.289 195.31 257.459 192.592 257.459 189.25C257.459 185.907 262.289 183.19 268.228 183.19C274.167 183.19 278.996 185.91 278.996 189.25C278.996 192.59 274.167 195.31 268.228 195.31ZM268.228 185.595C262.817 185.595 259.864 188.01 259.864 189.25C259.864 190.49 262.817 192.905 268.228 192.905C273.638 192.905 276.592 190.49 276.592 189.25C276.592 188.01 273.641 185.595 268.228 185.595Z" fill="#0618DD"/>
<path d="M268.14 293.839C254.949 293.839 244.026 290.505 240.31 285.344C238.778 283.215 238.473 280.863 239.377 278.157L239.629 277.405C242 272.562 253.189 249.714 253.985 248.09C255.885 245.515 260.814 242.942 267.631 242.942C267.849 242.942 268.069 242.942 268.29 242.95C274.024 242.958 279.153 244.424 281.382 246.69C282.044 247.362 282.375 248.048 282.364 248.726L282.359 249.012L294.978 274.901L295.041 274.988C297.626 278.509 298.247 281.657 296.885 284.348C294.011 290.026 282.459 293.839 268.143 293.839H268.138H268.14Z" fill="#E51C1C"/>
<path d="M267.631 244.143C267.838 244.143 268.051 244.143 268.264 244.151H268.29H268.317C274.46 244.159 278.875 245.854 280.525 247.531C280.819 247.83 281.169 248.277 281.164 248.708L281.156 249.281L281.408 249.796L293.853 275.33L293.948 275.524L294.076 275.7C296.405 278.869 296.972 281.521 295.816 283.804C293.183 289.004 281.802 292.639 268.14 292.639C255.522 292.639 244.73 289.425 241.288 284.645C239.997 282.853 239.745 280.856 240.52 278.541L240.746 277.865C243.148 272.959 253.89 251.018 255.015 248.726C256.381 246.958 260.449 244.146 267.631 244.146M267.631 241.742C259.984 241.742 254.884 244.769 252.952 247.47L238.113 277.776H238.239C234.35 289.398 251.228 295.046 268.14 295.046C287.081 295.046 306.067 287.969 296.013 274.278L283.568 248.745C283.623 244.85 276.759 241.76 268.319 241.75C268.088 241.744 267.857 241.742 267.631 241.742Z" fill="#0618DD"/>
<path d="M260.881 234.137V316.606L338.557 271.984V188.338L260.881 234.137Z" fill="white"/>
<path d="M259.438 319.097V233.314L340 185.812V272.82L259.436 319.1L259.438 319.097ZM262.323 234.962V314.112L337.114 271.149V190.866L262.323 234.962Z" fill="#0618DD"/>
<path d="M300.534 262.264L306.113 241.636L310.735 238.969L316.109 253.275L311.76 255.784L310.78 252.747L305.703 255.679L304.702 259.86L300.534 262.264ZM306.523 251.84L309.96 249.856L308.276 244.435L306.523 251.843V251.84Z" fill="#0618DD"/>
<path d="M317.564 252.431V235.022L323.393 231.656C324.956 230.755 326.349 230.258 327.571 230.171C328.793 230.085 329.76 230.481 330.475 231.367C331.187 232.253 331.544 233.711 331.544 235.747C331.544 237.66 331.187 239.463 330.475 241.155C329.76 242.845 328.785 244.366 327.55 245.714C326.312 247.065 324.92 248.185 323.372 249.078L317.567 252.431H317.564ZM321.595 246.032L323.235 245.086C324.541 244.332 325.558 243.315 326.286 242.033C327.014 240.751 327.379 239.424 327.379 238.049C327.379 236.657 327.045 235.729 326.378 235.261C325.71 234.794 324.662 234.972 323.235 235.797L321.595 236.743V246.035V246.032Z" fill="#0618DD"/>
<path d="M268.835 300.187V282.779L272.866 280.453V293.789L282.2 288.399V292.47L268.835 300.185V300.187Z" fill="#0618DD"/>
<path d="M283.779 291.561L289.358 270.933L293.98 268.266L299.354 282.571L295.005 285.081L294.025 282.043L288.948 284.975L287.947 289.156L283.779 291.561ZM289.768 281.136L293.205 279.152L291.521 273.731L289.768 281.136Z" fill="#0618DD"/>
<path d="M300.931 281.656V264.247L310.306 258.834C311.384 258.211 312.272 257.83 312.971 257.689C313.67 257.547 314.217 257.583 314.611 257.799C315.005 258.014 315.286 258.338 315.454 258.771C315.622 259.205 315.704 259.699 315.704 260.256C315.704 260.915 315.583 261.564 315.339 262.198C315.097 262.834 314.803 263.409 314.461 263.929C314.119 264.447 313.796 264.854 313.494 265.151C313.872 265.054 314.298 265.041 314.768 265.109C315.239 265.178 315.649 265.404 315.998 265.785C316.348 266.168 316.521 266.794 316.521 267.666C316.521 269.39 315.993 270.959 314.939 272.37C313.883 273.781 312.34 275.074 310.306 276.246L300.931 281.659V281.656ZM304.87 268.969L309.828 266.108C310.299 265.837 310.719 265.459 311.092 264.973C311.463 264.489 311.649 263.916 311.649 263.254C311.649 262.505 311.455 262.114 311.069 262.074C310.682 262.037 310.267 262.145 309.828 262.4L304.87 265.262V268.967V268.969ZM304.87 276.093L310.123 273.061C310.44 272.877 310.779 272.638 311.137 272.346C311.494 272.054 311.796 271.687 312.049 271.245C312.298 270.804 312.424 270.27 312.424 269.645C312.424 269.054 312.298 268.686 312.049 268.544C311.799 268.402 311.494 268.386 311.137 268.496C310.779 268.607 310.443 268.754 310.123 268.938L304.87 271.97V276.093Z" fill="#0618DD"/>
<path d="M317.893 269.427L320.47 264.731C320.92 264.936 321.511 265.017 322.242 264.978C322.972 264.939 323.763 264.671 324.614 264.179C325.048 263.93 325.466 263.596 325.868 263.183C326.27 262.768 326.47 262.306 326.47 261.791C326.47 261.36 326.251 261.123 325.818 261.084C325.384 261.044 324.767 261.123 323.963 261.32L323.072 261.536C322.412 261.683 321.758 261.751 321.109 261.735C320.46 261.722 319.921 261.53 319.496 261.162C319.07 260.795 318.857 260.164 318.857 259.268C318.857 258.24 319.093 257.184 319.566 256.096C320.039 255.011 320.744 253.962 321.674 252.951C322.604 251.942 323.737 251.051 325.072 250.281C326.131 249.669 327.05 249.264 327.831 249.062C328.609 248.862 329.255 248.778 329.77 248.812C330.285 248.846 330.661 248.928 330.903 249.054L328.735 253.14C328.172 253.035 327.586 253.019 326.977 253.098C326.367 253.177 325.739 253.403 325.098 253.773C324.68 254.015 324.283 254.341 323.905 254.748C323.526 255.158 323.34 255.594 323.34 256.057C323.34 256.572 323.566 256.814 324.015 256.787C324.465 256.761 325.035 256.664 325.726 256.496L326.496 256.299C327.042 256.149 327.592 256.044 328.146 255.981C328.7 255.918 329.21 255.952 329.675 256.08C330.14 256.209 330.514 256.496 330.795 256.94C331.076 257.384 331.215 258.043 331.215 258.924C331.215 259.935 330.921 261.007 330.335 262.143C329.749 263.278 328.961 264.353 327.975 265.372C326.987 266.389 325.891 267.246 324.688 267.942C323.082 268.87 321.737 269.422 320.652 269.6C319.566 269.779 318.649 269.721 317.893 269.427Z" fill="#0618DD"/>
<path d="M271.915 178.548C268.885 178.548 266.42 176.083 266.42 173.054C266.42 170.024 268.885 167.559 271.915 167.559C274.944 167.559 277.409 170.024 277.409 173.054C277.409 176.083 274.944 178.548 271.915 178.548ZM271.915 169.483C269.946 169.483 268.343 171.086 268.343 173.054C268.343 175.022 269.946 176.625 271.915 176.625C273.883 176.625 275.486 175.022 275.486 173.054C275.486 171.086 273.883 169.483 271.915 169.483Z" fill="#0618DD"/>
<path d="M261.614 176.471C256.895 176.471 253.056 172.632 253.056 167.912C253.056 163.193 256.895 159.354 261.614 159.354C266.334 159.354 270.173 163.193 270.173 167.912C270.173 172.632 266.334 176.471 261.614 176.471ZM261.614 161.277C257.956 161.277 254.979 164.254 254.979 167.912C254.979 171.57 257.956 174.547 261.614 174.547C265.272 174.547 268.249 171.57 268.249 167.912C268.249 164.254 265.272 161.277 261.614 161.277Z" fill="#0618DD"/>
<path d="M271.114 158.071C268 158.071 265.47 155.538 265.47 152.427C265.47 149.315 268 146.782 271.114 146.782C274.228 146.782 276.759 149.315 276.759 152.427C276.759 155.538 274.225 158.071 271.114 158.071ZM271.114 148.706C269.062 148.706 267.393 150.374 267.393 152.427C267.393 154.479 269.062 156.148 271.114 156.148C273.166 156.148 274.835 154.479 274.835 152.427C274.835 150.374 273.166 148.706 271.114 148.706Z" fill="#0618DD"/>
</g>
<defs>
<linearGradient id="paint0_linear_218_69" x1="142.321" y1="110.488" x2="204.733" y2="47.811" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD600"/>
<stop offset="0.5" stop-color="#FF0100"/>
<stop offset="1" stop-color="#D800B9"/>
</linearGradient>
<linearGradient id="paint1_linear_218_69" x1="160.166" y1="92.9354" x2="187.472" y2="65.629" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6400"/>
<stop offset="0.5" stop-color="#FF0100"/>
<stop offset="1" stop-color="#FD0056"/>
</linearGradient>
<clipPath id="clip0_218_69">
<rect width="542.58" height="485.999" fill="white" transform="translate(0.536133)"/>
</clipPath>
</defs>
</svg>
 <img className="w-fit absolute " id='blue12' src="/blue_point.png" />
 <img className="w-fit absolute  " id='blue13' src="/blue_point.png" />
 <img className="w-fit absolute " id='blue14' src="/blue_point.png" />

{/* <svg width="357" height="465" viewBox="0 0 357 465" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id='path1' d="M69.3736 464.659C55.8069 464.659 43.692 461.347 33.4376 454.632C5.85028 436.573 -4.67644 396.372 3.80846 341.424C12.1572 287.202 38.0657 224.814 76.6788 165.737C115.292 106.705 162.118 57.974 208.444 28.6171C255.361 -1.14807 296.424 -7.59115 324.011 10.4676C351.599 28.5264 362.125 68.7276 353.641 123.675C345.292 177.897 319.383 240.286 280.77 299.363C242.157 358.394 195.331 407.125 149.005 436.482C119.512 455.176 92.3328 464.705 69.3736 464.705V464.659ZM288.03 5.61263C266.114 5.61263 239.888 14.8689 211.212 33.0184C165.475 62.0123 119.239 110.154 80.9893 168.595C42.7392 227.037 17.1484 288.7 8.89033 342.241C0.768415 395.056 10.4784 433.442 36.2507 450.321C45.6431 456.492 56.8504 459.532 69.419 459.532C91.3345 459.532 117.561 450.276 146.237 432.126C191.974 403.133 238.21 354.991 276.46 296.549C314.71 238.108 340.301 176.445 348.559 122.904C356.681 8.65267 300.599 5.61263 288.03 5.61263Z" fill="black"/>
</svg> */}
    </div>
  </section>
);
  }
export default Services;
