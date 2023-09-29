import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/student.png";


import Typewriter from "typewriter-effect";

import { JackInTheBox} from "react-awesome-reveal";
  
const Header = () => {
  return (
    <header
      className="  bg-cover  bg-center object-top w-[100%]  h-[100vh] sm:h-[100%] "
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div class="container  mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto bg-none">
          <Link
            to="/home"
            class="mr-5 hover:text-pink-900 font-semibold text-[#86f9fc]"
          >
            Home
          </Link>
          <Link
            to="/home"
            class="mr-5 hover:text-pink-900  font-semibold text-[#86f9fc]"
          >
            Blog
          </Link>
          <Link
            to="/home"
            class="mr-5 hover:text-pink-900  font-semibold text-[#86f9fc]"
          >
            About
          </Link>
          <Link
            to="/home"
            class="mr-5 hover:text-pink-900  font-semibold text-[#86f9fc]"
          >
            Contact Me
          </Link>
        </nav>
        <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
        
          <span class="ml-3 font-sans text-[#0cf2f8] font-semibold text-xl">
            <span className="text-2xl font-bold text-[#86f9fc] animate-pulse">
              S
            </span>
            oykot{" "}
            <span className="text-2xl font-bold text-[#86f9fc] animate-pulse">
              H
            </span>
            ossain
          </span>
        </a>

        <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 ">
          <button
            type="button"  
            class="text-[#00008B]  font-sans text-medium h-12 w-auto  bg-gradient-to-br from-[#000000] via-[#0cf2f8] to-[#000000] hover:bg-gradient-to-t hover:from-[#000000] hover:via-[#0cf2f8] hover:to-[#000000] focus:ring-4 focus:outline-none focus:ring-[#0cf2f8] dark:focus:ring-[#0cf2f8] font-semibold rounded-lg px-5 py-2.5 text-center mr-2 mb-2 shadow-2xl shadow-[#0cf2f8]"
          >
            Hire Me
          </button>
          <div class="relative">
            <img class="w-10 h-10 rounded-full" src="https://i.ibb.co/THsfhXZ/Soykot-removebg-fotor-bg-remover-20230511191752.png" alt="profile pic" />
            <span class="bottom-0 left-7 top-8 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
        </div>
          </div>
          {/* relative  top-0 bg-gray-900 bg-blend-color bg-opacity-75 
             <div className="sm:mt-0 sm:px-0 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          */}

<div className=" relative top-0 bg-gray-800 bg-blend-color bg-opacity-25  mx-auto mb-6 pb-6 sm:py-0 sm:pb-10">
        <div className="  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
          <div className="flex flex-col items-center justify-between xl:flex-row ">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 mx-auto mt-12 ">
     <JackInTheBox>
     
   
              <h1 className=" hover:skew-x-12 font-semibold text-[#86f9fc]  max-w-lg mb-6   lg:text-5xl text-4xl sm:leading-none tracking-tight  ">
               <span className="font-sans font-bold">W</span><span className="font-serif">elcome</span>
                  </h1>
                 
</JackInTheBox>
              <h2 className="max-w-lg mb-6 font-serif font-bold lg:text-4xl tracking-tight text-white text-3xl sm:leading-none">
                <Typewriter
                  options={{
                    strings: [
                      "Hey,",
                      "I am Soykot Hossain.",
                      "Welcome to my profile.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />{" "}
                <span className="text-teal-accent-400 "></span>
              </h2>

              <p className="max-w-xl  text-gray-50 lg:text-2xl text-lg mb-12">
                <Typewriter
                  options={{
                    strings: [
                      "Planner",
                      "Digital Marketer",
                      "GIS",
                      "Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>

              {/* <div className="shadow-gray-900 bg-opacity-75  shadow-2xl py-6 px-4 rounded bg-gradient-to-l from-pink-200 via-rose-400 to-pink-600 text-gray-50">
                <div className="container mx-auto"> */}
                  {/* <div className="flex flex-col lg:flex-row  items-center justify-between">
                    <h2 className="text-center flex items-center animate-pulse text-xl tracking-tighter font-sherif font-bold">
                      For Clear Information,Click<FcRight></FcRight>
                   
                    </h2> */}
<button  className="bg-[#011819] transform hover:translate-y-3  border-2 px-10 py-3 text-lg font-bold rounded-3xl duration-500 shadow-2xl shadow-[#0cf2f8]  border-[#0cf2f8] hover:bg-[#0cf2f8] hover:text-[#011819] hover:border-[#011819] hover:border-4 hover:shadow-[#000000] hover:shadow-2xl text-[#0cf2f8]">
    Explore More
  </button>
                </div>
                {/* </div> */}
              {/* </div>
            </div> */}
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
