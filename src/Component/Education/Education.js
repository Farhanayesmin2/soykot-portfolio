import React from "react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div className="text-gray-400  text-start">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-1 before:block before:w-32 before:h-3 before:mb-1 before:rounded-lg before:mx-auto sm:before:mx-0 before:bg-[#0cf2f8]">
                <div className="text-center sm:text-left mb-1 before:block before:w-28 before:h-2 before:mb-1 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#0cf2f8]">
                  <div className="text-center sm:text-left mb-5 before:block before:w-24 before:h-1 before:mb-3 before:rounded-lg before:mx-auto sm:before:mx-0 before:bg-[#0cf2f8]"></div>
                </div>
                <AttentionSeeker animate__backInDown>
                  <h3 className="text-3xl text-[#b6fbfd] sm:text-2xl font-bold font-serif">
                    Educatonal
                  </h3> 
                </AttentionSeeker>
                <span className="font-mono text-[#b6fbfd] text-sm font-bold tracking-wider uppercase ">
                  Background
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-600">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#0cf2f8]">
                  <Fade cascade damping={0.1}>
                    <h3 className="text-xl font-semibold tracking-wide">
                      Bachelor of science
                    </h3>
                    <time className="text-xs tracking-wide uppercase ">
                      2020
                    </time>
                    <p className="mt-3">
                      {" "}
                      <span className="font-bold"> Major: </span> Urban and
                      Regional Planning.
                    </p>

                    <p className="mt-3">
                      {" "}
                      <span className="font-bold">University: </span>Pabna
                      University of Science And Technology.
                    </p>
                    <p>
                      <span className="font-bold">CGPA:</span> 3.39
                    </p>
                  </Fade>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#0cf2f8]">
                  <Fade cascade>
                    <h3 className="text-xl font-semibold tracking-wide">
                      Higher Secondary Certificate
                    </h3>
                    <time className="text-xs tracking-wide uppercase ">
                      2016
                    </time>
                    <p className="mt-3">
                      {" "}
                      <span className="font-bold"> Major: </span> Science.
                    </p>

                    <p className="mt-3">
                      {" "}
                      <span className="font-bold">College: </span>Govt.Sha
                      Sultan College, Bogura.
                    </p>
                    <p>
                      <span className="font-bold">GPA:</span> 4.58
                    </p>
                  </Fade>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#0cf2f8]">
                  <Fade cascade>
                    <h3 className="text-xl font-semibold tracking-wide">
                      Secondary School Certificate
                    </h3>
                    <time className="text-xs tracking-wide uppercase ">
                      2014
                    </time>
                    <p className="mt-3">
                      {" "}
                      <span className="font-bold"> Major: </span> Science.
                    </p>

                    <p className="mt-3">
                      {" "}
                      <span className="font-bold">College: </span>Govt. Sonatola
                      Model High School & College.
                    </p>
                    <p>
                      <span className="font-bold">GPA:</span>5.00
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;

