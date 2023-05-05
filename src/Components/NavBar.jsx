import React, { useEffect, useState } from 'react'
import Logo from './Logo';
import Google from './Google';
import { Link } from 'react-router-dom';
import coignImg from "../assets/coign.png"

const NavBar = () => {
  const [click,setClick]=useState(false)
 
 
  const clickHandler=()=>{
    console.log("NavBar  ::: clickHandler ::: came")
    setClick(a=>!a)
  }

  return (
    <header
      className={`fixed  z-20 w-full   transition-all duration-200 ${
        click ? "bg-[#11141c]" : ""
      } `}
      onClick={() => {
        if (click) {
          setClick(false)
        }
      }}
    >
      <nav
        className={`flex items-center mx-auto pt-4 pb-3 justify-between w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-50% center-elment section`}
      >
        <Link to="" className="!bg-white navButton">
          {/* <Logo></Logo> */}
          <img src={coignImg} alt="" className="h-6" />
        </Link>
        <div className="hidden lg:flex navButton items-center   gap-3 !cursor-default">
          <a href="/#cirriculum" className="navItem">
            Curriculum
          </a>
          {/* <Link to="/" className="navItem">
            Mentorship
          </Link> */}
          <Link to="/" className="navItem">
            Events
          </Link>
          {/* <Link to={''} className='navItem'>About Us</Link> */}
        </div>
        <div
          className="navButton hidden lg:block   font-semibold !bg-[#3a44a1] "
          style={{ transform: "none" }}
        >
          <Link to="/student" className="text-white">
            Register
          </Link>
        </div>
        <div className="flex gap-3 lg:hidden">
          {/* <button className="navSmallScreenButton" >
            <Google></Google>
          </button> */}
          <button className="navSmallScreenButton" onClick={clickHandler}>
            <div className="block absolute top-1/2 left-1/2 w-5 transform -translate-x-1/2 -translate-y-1/3">
              <span
                aria-hidden="true"
                className={`absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out ${
                  click === true ? "rotate-45" : "-translate-y-[7px]"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out ${
                  click === true ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-[1.5px] w-5 transform bg-gray-50 transition duration-300 ease-in-out ${
                  click === true ? "-rotate-45" : "translate-y-[7px]"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`transform none  ${
          click ? "translate-x-0 block" : "-translate-x-[200%]"
        } duration-300  center-elment bg-backgroundColor  border-[#1E1E1E]  border-t-[1px]   w-[100%] lg:w-[80%] xl:w-[70%] 2xl:w-50%   py-4 lg:hidden`}
      >
        <a
          href="/#cirriculum"
          className="mb-2 text-[18px] cursor-pointer pl-[20px] text-white mt-[10px]"
        >
          Curriculum
        </a>

        <br />
        <a
          href="#mentorship"
          className="mb-2 text-[18px] cursor-pointer pl-[20px] text-white mt-[10px]"
        >
          Events
        </a>
        <br />
        <Link
          to="/student"
          className="mb-2 text-[18px] cursor-pointer pl-[20px] text-white mt-[10px]"
        >
          Register
        </Link>
        {/* <br/> */}
        {/* <Link to={'aboutUs'} className='mb-2 !text-[18px] cursor-pointer pl-[20px] text-white mt-[10px]'>About Us</Link> */}
      </div>
    </header>
  );
}

export default NavBar