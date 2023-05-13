import React, { useEffect, useState } from "react";
import banner2 from "../../images/pexels-pixabay-219692.jpg";
import { FcGlobe, FcPhotoReel, IconName } from "react-icons/fc";

import axios from "axios";
import fileDownload from "js-file-download";
const About = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get("/Soykot Hossain Sarker CV-.pdf", {
        responseType: "blob", // Important
      });
      fileDownload(response.data, "Soykot_Hossain_Sarker_CV.pdf");
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <section class="container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 font-serif">
      <h1 className="text-4xl font-bold text-[#0cf2f8] hover:text-pink-900 sm:hidden my-4">
        Profile
      </h1>
      <div class="grid grid-cols-1  lg:grid-cols-2 ">
        <div class="col-span-1 relative h-64 sm:h-80 lg:h-full -top-56 right-12 hidden lg:block ">
          <img
            src="https://i.ibb.co/wRQbScb/Soykot-removebg.png"
            alt="Large Image"
            class="absolute inset-y-0   object-contain sm:object-cover"
          />
        </div>
        {/* <div class="lg:hidden relative col-span-1 h-64 top-32  sm:h-80">
  <img src="https://i.ibb.co/THsfhXZ/Soykot-removebg-fotor-bg-remover-20230511191752.png" alt="Mobile Image" class="absolute bottom-0 left-0 object-contain h-full w-full" />
</div> */}
        <div class="lg:hidden lg:flex lg:w-1/2 lg:justify-center">
          <img
            class="w-[24rem] h-[24rem] mx-auto flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] mt-24"
            src="https://i.ibb.co/THsfhXZ/Soykot-removebg-fotor-bg-remover-20230511191752.png"
            alt=""
          />
        </div>
        <h1 className="text-4xl font-bold text-[#0cf2f8] hover:text-pink-900 lg:hidden my-4">
          Profile
        </h1>

        <div class="col-span-1 flex flex-col justify-center ml-0 pl-0 my-4 ">
          {/* <div class="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12"> md:top-10 md:mt-28*/}
          <h2 class="lg:text-3xl text-xl font-semibold leading-none text-start text-[#b6fbfd] hover:text-pink-900">
            Some information about me.
          </h2>
          <p class="mt-4 mb-8 text-start text-gray-300 text-md">
            A versatile, dynamic and <strong>hard-working</strong> professional
            with a background in Urban and Regional Planning. Possessing
            excellent problem-solving skills and the ability to work effectively
            in a team environment, even under pressure. A creative, determined,
            and <strong>energetic</strong> person with an excellent eye for new
            problem-solving ideas.
          </p>

          <div className="justify-start self-start flex items-start mt-4">
            {/* <a href="/public/Soykot_Hossain_Sarker_CV.pdf" target="_blank" download> */}
            <button
              onClick={handleDownload}
              class="self-start shadow-2xl border-2 border-[#0cf2f8] hover:shadow-[#0cf2f8] font-bold text-[#000000] transform hover:translate-y-3 duration-500 px-10 py-3 text-lg rounded-3xl bg-gradient-to-r from-[#0cf2f8] via-[#c2fcff] to-[#0cf2f8]"
            >
              Download My CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

{
  /* <div className='py-12'>
  <h1 className="text-4xl font-black text-[#0cf2f8] hover:text-pink-900">Profile</h1>

  <section class="dark:bg-gray-800 dark:text-gray-100">
    <div class="container flex flex-col mx-auto lg:flex-row">
      <div class="relative w-full sm:w-72  h-24 lg:w-1/3 lg: sm:-top-16 mx-auto">
        <img src="https://i.ibb.co/wRQbScb/Soykot-removebg.png" class=" object-cover w-full" />
      </div>

      <div class="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
        <h2 class="lg:text-3xl font-semibold leading-none text-start text-[#b6fbfd] hover:text-pink-900">
          Some information about me.
        </h2>
        <p class="mt-4 mb-8 text-start text-gray-300 text-sm">
          A versatile, dynamic and <strong>hard-working</strong> professional with a background in Urban and Regional
          Planning. Possessing excellent problem-solving skills and the ability to work effectively in a team environment,
          even under pressure. A creative, determined, and <strong>energetic</strong> person with an excellent eye for new
          problem-solving ideas.
        </p>

       

                        <div class="absolute">
                       <button class="self-start shadow-2xl border-2 border-[#0cf2f8] hover:shadow-[#0cf2f8] font-bold text-[#000000] transform hover:translate-y-3 duration-500 px-10 py-3 text-lg rounded-3xl bg-gradient-to-r from-[#0cf2f8] via-[#c2fcff] to-[#0cf2f8]">
          About More
        </button>      
        </div>
      </div>
    </div>
  </section>
</div> */
}

// <div class="w-1/2">
//             <img src="https://i.ibb.co/wRQbScb/Soykot-removebg.png" class="object-cover w-full" />
//           </div>
