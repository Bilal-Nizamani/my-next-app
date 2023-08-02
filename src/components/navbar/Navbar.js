import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isHidden,setIsHidden]= useState(true)
  const transitionHover='hover:scale-105    duration-500  hover:text-sky-700   hover:border-sky-700'
  const liClassname=` ${transitionHover} border-b-2 border-gray-900 ${'mx-[10px]'}  my-4 cursor-pointer `

  
  const burgerHandler =()=>{
    setIsHidden((prevState) => !prevState);  }
  return (
    <nav
      className="w-full md:h-14 h-auto sticky top-0 bg-indigo-200   flex flex-wrap justify-between
     px-4 md:px-5 items-center"
    >
      <div className="text-2xl text-indigo-700 font-bold">PW Skills</div>

      <ul className={'md:flex hidden font-semibold'}>
        <li className={`${transitionHover} mx-[10px] cursor-pointer`}>
          <Link href='/'>Home</Link>
        </li>
        <li className={`${transitionHover} mx-[10px] cursor-pointer`}>
        <Link href='/product-section'>
          About Us
        </Link>
            </li>
        <li className={`${transitionHover} mx-[10px] cursor-pointer`}>Contact Us</li>
      </ul>
      
      <div
        className="hidden md:block px-2 py-2 bg-indigo-700
      text-white rounded font-bold cursor-pointer"
      >
        Login/Signup
      </div>
      <div className={`${transitionHover}   text-4xl md:hidden`} >
        <Link  onClick={burgerHandler}  href="#">
          &#8801;
        </Link>
      </div>
      <ul className={` w-full  flex-col duration-500 ${isHidden ? 'opacity-0 h-0 ':' opacity-100 h-[150px]'} font-semibold`}>
        <li className={liClassname}>
          <Link href='/'>Home</Link>
        </li>
        <li className={ liClassname}>
        <Link  href='/product-section'>
          About Us
        </Link>
            </li>
        <li className={liClassname} >Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
