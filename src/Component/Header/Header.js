import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/student.png"
import Banner from "../Banner/Banner";
import banner1 from "../../images/pexels-peng-liu-169647.jpg";
const Header = () => {
  return (
    <div className="" >
      <header class="text-gray-600 body-font ">
 
        

        {/* bg-gradient-to-l from-[#d3eaf2] via-[#bee0ec]
] to-[#d3eaf2] shadow-lg */}
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto bg-none">
          
            <Link to="/home" class="mr-5 hover:text-pink-900 font-semibold text-[#00008B]">
              Home
            </Link>
            <Link to="/home" class="mr-5 hover:text-pink-900  font-semibold text-[#00008B]">
              Blog
            </Link>
            <Link to="/home" class="mr-5 hover:text-pink-900  font-semibold text-[#00008B]">
              About
            </Link>
            <Link to="/home" class="mr-5 hover:text-pink-900  font-semibold text-[#00008B]">
              Contact Me
            </Link>
          </nav>
          <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                      <img
                          className="w-12 h-12"
                          src={logo}
                      
                      
                      />
            <span class="ml-3 font-sans text-pink-900 font-semibold text-xl"><span className="text-2xl font-bold text-pink-800 animate-pulse">S</span>oykot <span className="text-2xl font-bold text-pink-800 animate-pulse">H</span>ossain</span>
                  </a>
                  









                  <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                     
           <button type="button" class="text-[#00008B]  font-sans text-medium h-12 w-auto  bg-gradient-to-br from-rose-800 via-[#ffefc6] to-rose-900 hover:bg-gradient-to-t hover:from-pink-800 hover:via-[#ffefc6] hover:to-pink-800 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-lg px-5 py-2.5 text-center mr-2 mb-2 shadow-2xl ">
             Hire Me
                      </button>
                      <div class="relative">
    <img class="w-10 h-10 rounded-full" src={logo} alt="profile pic"/>
    <span class="bottom-0 left-7 top-8 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
          </div>
        </div>
      </header>
      <Banner></Banner>
    </div>
  );
};

export default Header;
