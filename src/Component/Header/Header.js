import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/student.png"
const Header = () => {
  return (
    <div>
      <header class="text-gray-600 body-font bg-gradient-to-l from-[#ffefc6] via-rose-200
] to-[#ffefc6] shadow-lg">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link to="/home" class="mr-5 text-pink-900 font-semibold hover:text-gray-900">
              Home
            </Link>
            <Link to="/home" class="mr-5 text-pink-900 font-semibold hover:text-gray-900">
              Blog
            </Link>
            <Link to="/home" class="mr-5 text-pink-900 font-semibold hover:text-gray-900">
              About
            </Link>
            <Link to="/home" class="mr-5 text-pink-900 font-semibold hover:text-gray-900">
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
           <button type="button" class="text-black font-sans text-medium h-12 w-auto  bg-gradient-to-br from-rose-800 via-[#ffefc6] to-rose-900 hover:bg-gradient-to-t hover:from-pink-800 hover:via-[#ffefc6] hover:to-pink-800 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-semibold rounded-lg px-5 py-2.5 text-center mr-2 mb-2 shadow-2xl ">
             Hire Me
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
