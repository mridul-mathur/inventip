// "use client";

// import React from 'react'
// import Link from "next/link";


// function footer() {
//     return (
//         <footer className='border h-[40vh] bg-white rounded-t-[3rem] border-black flex' >
//             <div className="logo-div  w-[80%] p-5">
//                 <h1 className='text-head mt-[50px] ml-[50px]' >iNvoat</h1>

//             </div>
//             <div className="menu-div  w-[100%] flex justify-center items-center ">

//                 <div className="mid flex gap-16">
//                     <div className="">
//                         <h3 className='pb-3 capitalize font-extrabold'>menu</h3>
//                         <ul className="capitalize">
//                             <li> <Link href="/" >Home </Link> </li>
//                             <li> <Link href="/about" >About </Link> </li>
//                             <li> <Link href="/expertise" >expertise </Link> </li>
//                             <li> <Link href="/resources" >resources </Link> </li>
//                             <li> <Link href="/careers" >careers </Link> </li>
//                         </ul>
//                     </div>


//                     <div className="">
//                         <h3 className='pb-3 capitalize font-extrabold'>Our Expertise</h3>
//                         <ul className="capitalize">

//                             <li>IP Strategy</li>
//                             <li>IP Research</li>
//                             <li>IP Portfolio Management</li>
//                             <li>Open Inovation</li>
//                         </ul>
//                     </div>

//                     <div className="">
//                         <h3 className='pb-3 capitalize font-extrabold'>More</h3>
//                         <ul className=''>

//                             <li>Contact Us</li>
//                             <li>FAQs</li>
//                             <li>Terms & Conditions</li>
//                         </ul>
//                     </div>
//                 </div>




//             </div >
//         </footer >
//     )
// }

// export default footer

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Set state to true when footer is in view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the footer is visible
    );

    const footerElement = document.querySelector("#footer");
    if (footerElement) {
      observer.observe(footerElement); // Observe the footer
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement); 
      }
    };
  }, []);

  return (
    <motion.footer
      id="footer"
      className="border h-[40vh] bg-white text-black rounded-t-[3rem] border-black flex"
      initial={{ opacity: 0, y: 50 }} 
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }} // Animate when in view
      transition={{ duration: 1 }} // Animation duration
    >
      <div className="logo-div w-[80%] p-5">
        <h1 className="text-head mt-[50px] ml-[50px]">iNvoat</h1>
      </div>
      <div className="menu-div w-[100%] flex justify-center items-center">
        <div className="mid flex gap-16">
          <div className="">
            <h3 className="pb-3 capitalize font-extrabold">menu</h3>
            <ul className="capitalize">
              <li>
                <Link href="/">Home </Link>
              </li>
              <li>
                <Link href="/about">About </Link>
              </li>
              <li>
                <Link href="/expertise">Expertise </Link>
              </li>
              <li>
                <Link href="/resources">Resources </Link>
              </li>
              <li>
                <Link href="/careers">Careers </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="pb-3 capitalize font-extrabold">Our Expertise</h3>
            <ul className="capitalize">
              <li>IP Strategy</li>
              <li>IP Research</li>
              <li>IP Portfolio Management</li>
              <li>Open Innovation</li>
            </ul>
          </div>

          <div className="">
            <h3 className="pb-3 capitalize font-extrabold">More</h3>
            <ul>
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
