import React from "react";
import { IoFootballOutline } from "react-icons/io5";
import { FaCameraRetro, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { GiJugglingClubs } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { Zoom } from "react-awesome-reveal";
const AcademicPro = () => {
  return (
    <div>
      <section class=" text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h3 class="text-[#b6fbfd]  font-serif sm:text-2xl font-semibold   text-3xl">
              Co-curricular Activities
            </h3>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3  ">
            <Zoom direction="down
            " >
              <>
            <a
              class="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-shadow-[#0cf2f8] hover:shadow-[#0cf2f8]"
              href="/services/digital-campaigns"
            >
              <div class="flex items-center justify-center mb-4">
                <FaUserTie class="w-12 h-12 text-[#0cf2f8]" />
              </div>

              <h2 class="mt-4 text-xl font-bold text-white">Vice-President</h2>

              <p class="mt-1 text-sm text-gray-300">
                Vice-President at United students of Bogura, Pabna University of
                Science And Technology.
              </p>
            </a></>
            </Zoom>
            <Zoom direction="down
            ">
              <>
            <a
              class="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-shadow-[#0cf2f8] hover:shadow-[#0cf2f8]"
              href="/services/digital-campaigns"
            >
              <div class="flex items-center justify-center mb-4">
                <IoFootballOutline class="w-12 h-12 text-[#0cf2f8] "></IoFootballOutline>
              </div>
              <h2 class="mt-4 text-xl font-bold text-white">Spots secretary</h2>

              <p class="mt-1 text-sm text-gray-300">
                Spots secretary at URP Association, Pabna University of Science
                And Technology.
              </p>
            </a></>
            </Zoom>
            <Zoom direction="down
            "><>
            <a
              class="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-shadow-[#0cf2f8] hover:shadow-[#0cf2f8]"
              href="/services/digital-campaigns"
            >
              <div class="flex items-center justify-center mb-4">
                <FaUserGraduate class="w-12 h-12 text-[#0cf2f8] "></FaUserGraduate>
              </div>

              <h2 class="mt-4 text-xl font-bold text-white">
                General secretary
              </h2>

              <p class="mt-1 text-sm text-gray-300">
                General secretary at public university student’s association of
                salmara.
              </p>
            </a></>
            </Zoom>
            <Zoom direction="down
            ">
              <>
            <a
              class="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-shadow-[#0cf2f8] hover:shadow-[#0cf2f8]"
              href="/services/digital-campaigns"
            >
              <div class="flex items-center justify-center mb-4">
                <FaCameraRetro class="w-12 h-12 text-[#0cf2f8] "></FaCameraRetro>
              </div>

              <h2 class="mt-4 text-xl font-bold text-white">Active member</h2>

              <p class="mt-1 text-sm text-gray-300">
                Active member of Photography Society, Pabna University of
                Science And Technology.
              </p>
            </a></>
            </Zoom>
            <Zoom direction="down
            ">
               <>
            <a
              class="block rounded-xl border border-gray-500 p-8 shadow-xl transition hover:border-shadow-[#0cf2f8] hover:shadow-[#0cf2f8]"
              href="/services/digital-campaigns"
            >
              <div class="flex items-center justify-center mb-4">
                <IoIosPeople class="w-12 h-12 text-[#0cf2f8] "></IoIosPeople>
              </div>
              <h2 class="mt-4 text-xl font-bold text-white"> Active member</h2>

              <p class="mt-1 text-sm text-gray-300">
                Active member of UMESAS, Sonatola, Bogra.
              </p>
              <br></br>
            </a></>
            </Zoom>
            <Zoom direction="down
            ">
              <>
            <a
              class="block rounded-xl border border-gray-500 p-7 shadow-xl transition hover:border-shadow-[#0cf2f8] hover:shadow-[#0cf2f8]"
              href="/services/digital-campaigns"
            >
              <div class="flex items-center justify-center mb-4">
                <GiJugglingClubs class="w-12 h-12 text-[#0cf2f8] "></GiJugglingClubs>
              </div>
              <h2 class="mt-4 text-xl font-bold text-white">Joint Secretary</h2>

              <p class="mt-1 text-sm text-gray-300">
                Joint Secretary at Hiatpur Supreme fighters club.
              </p>
            </a></>
            </Zoom>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademicPro;
