/* eslint-disable */
'use client';

const Footer = () => (
  <div className="flex flex-col pb-11  ">
  <div className=" flex flex-col gap-6 w-[90%]  self-center">
<div className="flex self-center justify-center  ">
 <h1 className="footer_header relative text-center md:left-[4%] left-[2%] w-fit">AD</h1>
 <img src='./footer_flask.png' className="object-none relative hidden md:block z-40 right-[0%] mt-6" alt=''/>
 <img src='./footer_flask_mob.png' className="object-none relative md:hidden z-40 right-[4%] mt-6" alt=''/>

 <h1 className="footer_header  relative right-[8%] md:right-[4%] w-fit">LABS</h1>

</div>

<div className="self-center  flex gap-6">
 <a href='#Main' className="footer_button ">Who we are</a>
 <a href='#Services' className="footer_button ">What we do</a>
 <a href='FAQ' className="footer_button">FAQ</a>
 <a href='Contact' className="footer_button">Grow with us</a>


</div>
<div className="flex gap-3 self-center">
<button className=""> <img src='/fb.svg' alt='icon'/></button>
<button className=""> <img src='/yt.svg' alt='icon'/></button>
<button className=""> <img src='/ig.svg' alt='icon'/></button>
<button className=""> <img src='/tt.svg' alt='icon'/></button>

</div>

<div className="flex  justify-between">
 <p className="footer_text">Based in Petaling Jaya, Malaysia</p>
 <p className="footer_text">AdLabs Sdn Bhd, 2023</p>

</div>
  </div>
 </div>
);

export default Footer;
