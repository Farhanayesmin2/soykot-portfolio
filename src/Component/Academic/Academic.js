import React from 'react';
import { Fade,JackInTheBox,Zoom } from "react-awesome-reveal";
const Academic = () => {
    return (
        <div>
            <section   className="text-[#b6fbfd]">

   
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block text-[#0cf2f8] px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute text-[#0cf2f8]  top-0 left-0 z-0  w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-[#b6fbfd]">Academic</span>
          </span>{' '}
        <span className="relative text-[#b6fbfd]" >Project</span> 
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
         There are some tiny project on my  
        </p>
      </div>
      <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
        <div className="space-y-6 sm:px-16">
          <div className="flex flex-col max-w-md sm:flex-row justify-center items-center">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-xl shadow-[#0cf2f8] bg-[#000000]">
              <h1 className='text-3xl text-[#0cf2f8]'>1</h1>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-2">
              Project:
                    </h6>
                    <Fade direction='left
                  '>

                   
              <p className="text-sm text-gray-300">
             Designing and development of a Residential Area; Project on: Monsurabad Niribili Abashon Prokolpo-
5.
                      </p>
                       </Fade>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-xl shadow-[#0cf2f8] bg-[#000000]">
              <h1 className='text-3xl text-[#0cf2f8]'>2</h1>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
              Project:
                    </h6>
               <Fade direction='left'>
              <p className="text-sm text-gray-300">
           Rural Growth center identification, a case study on Silimpur Union, Bhangura upazila, Bangladesh.
                      </p>
                      </Fade>
            </div>
          </div>
          
        </div>
        <div className="space-y-6 sm:px-16">
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-xl shadow-[#0cf2f8] bg-[#000000]">
              <h1 className='text-3xl text-[#0cf2f8]'>3</h1>
               
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
             Project:
                    </h6>
                    <Fade direction='right'>
              <p className="text-sm text-gray-300">
             Socio-economic and Environmental Impact Analysis due to Infrastructure Development Projects in
Bangladesh: a case study on Ishwardi-Pabna Railway Project.
                      </p>
                      </Fade>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-xl shadow-[#0cf2f8] bg-[#000000]">
              <h1 className='text-3xl text-[#0cf2f8]'>4</h1>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
               Project:
                    </h6>
                     <Fade direction='right'>
              <p className="text-sm text-gray-300">
               Air Quality Vulnerability Assessment on Ishwardi Upazila.
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

export default Academic;