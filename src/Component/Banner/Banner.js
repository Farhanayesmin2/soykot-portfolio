import React from "react";
import { Link } from "react-router-dom";
import banner2 from "../../images/pexels-pixabay-219692.jpg";

import { FcRight, IconName } from "react-icons/fc";
import banner1 from "../../images/pexels-peng-liu-169647.jpg";
import banner3 from "../../images/pexels-osmany-mederos-14357627.jpg";
import banner4 from "../../images/pexels-irina-iriser-1366957.jpg";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div className="relative ">
      <img
        src={banner1}
        className="absolute object-cover object-right-bottom w-full h-full  "
        alt=""
      />
      <div className="relative  top-0 bg-gray-900 bg-blend-color bg-opacity-75">
        <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row ">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 mx-auto mt-12 ">
              <h1 className="max-w-lg mb-6 font-mono font-bold lg:text-5xl tracking-tight text-white sm:text-4xl sm:leading-none">
                Welcome
              </h1>
              <h2 className="max-w-lg mb-6 font-mono font-bold lg:text-4xl tracking-tight text-white sm:text-4xl sm:leading-none">
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

              <p className="max-w-xl text-base text-gray-400 md:text-lg">
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

              <div className="shadow-gray-900 bg-opacity-75  shadow-2xl py-6 px-4 rounded bg-gradient-to-l from-pink-200 via-rose-400 to-pink-600 text-gray-50">
                <div className="container mx-auto">
                  {/* <div className="flex flex-col lg:flex-row  items-center justify-between">
                    <h2 className="text-center flex items-center animate-pulse text-xl tracking-tighter font-sherif font-bold">
                      For Clear Information,Click<FcRight></FcRight>
                   
                    </h2> */}

                  <button
                    type="button"
                    class="text-black bg-gradient-to-r from-pink-900 via-pink-200 to-pink-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    <Link to="/">More Details </Link>{" "}
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
