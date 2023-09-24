import React from 'react';
import { FcGlobe } from "react-icons/fc";
import { GiPhotoCamera } from "react-icons/gi";
import { IconName, SiMicrosoftexcel, SiMicrosoftoffice } from "react-icons/si";
import { useSpring, animated,useScroll } from '@react-spring/web'
import { Slide } from 'react-awesome-reveal';

const Skills = () => {


















    return (
        <div>
     
            <section class="text-[#b6fbfd]">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="sm:text-2xl font-semibold  capitalize text-3xl ">explore our <br/> awesome Components</h1>

        <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-[#0cf2f8] rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-[#0cf2f8] rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-[#0cf2f8] rounded-full"></span>
                        <span class="inline-block w-1 h-1 ml-1 bg-[#0cf2f8] rounded-full"></span>
                         <span class="inline-block w-3 h-1 ml-1 bg-[#0cf2f8] rounded-full"></span>
        </div>
<div class="lg:hidden lg:flex lg:w-1/2 lg:justify-center">
                <img class="w-[24rem] h-[24rem] mx-auto flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
            </div>
        <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                        <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                            <Slide direction="left">
                            <div class="space-y-3">
            
   
                    <span class=" transform hover:-translate-y-3 duration-1000 inline-block p-3 text-blue-500 bg-[#000a0a]  border  border-[#0cf2f8] shadow-[#0cf2f8]  shadow-inner rounded-xl hover:text-[#b6fbfd] hover:shadow-2xl hover:shadow-[#0cf2f8]">
                       <FcGlobe className='text-4xl'></FcGlobe>
                    </span> 
  
                    <h1 class="text-xl font-semibold  capitalize text-[#b6fbfd]">  GIS & remote sensing software: </h1>

                    <p class="text-gray-300 dark:text-gray-300">
                        ArcGIS 10.8, QGIS 3.14.
                    </p>
                </div>
  </Slide>
                <Slide direction="right">
                            <div class="space-y-3">
                    <span class="transform hover:-translate-y-3 duration-1000    inline-block p-3 text-fuchsia-500/75 rounded-xl bg-[#000a0a]  border  border-[#0cf2f8] shadow-[#0cf2f8]  shadow-inner hover:text-[#b6fbfd] hover:shadow-2xl hover:shadow-[#0cf2f8]">
                          <GiPhotoCamera className='text-4xl'></GiPhotoCamera>
                    </span>

                    <h1 class="text-xl font-semibold  capitalize text-[#b6fbfd]"> Design software:</h1>

                    <p class="text-gray-300 dark:text-gray-300">
                          Autocad (2D), Adobe Photoshop, Canva.
                    </p>
                </div>
</Slide>
<Slide direction="left">
                <div class="space-y-3">
                    <span class=" transform hover:-translate-y-3 duration-1000    inline-block p-3 text-orange-600 bg-[#000a0a] rounded-xl  border  border-[#0cf2f8] shadow-[#0cf2f8] hover:text-[#b6fbfd] shadow-inner hover:shadow-2xl hover:shadow-[#0cf2f8]">
                        <SiMicrosoftoffice className='text-4xl' ></SiMicrosoftoffice>
                    </span>

                    <h1 class="text-xl font-semibold text-[#b6fbfd] capitalize ">Application Packages:</h1>

                    <p class="text-gray-300 dark:text-gray-300">
                        Microsoft Office,Power Point.

                    </p>
                </div>
                </Slide>
                <Slide direction="right">
                <div class="space-y-3">
                    <span class=" transform hover:-translate-y-3 duration-1000   inline-block p-3 text-pink-800/90  bg-[#000a0a] rounded-xl  border  border-[#0cf2f8] shadow-[#0cf2f8]  shadow-inner hover:text-[#b6fbfd] hover:shadow-2xl hover:shadow-[#0cf2f8]">
                        <SiMicrosoftexcel className='text-4xl'></SiMicrosoftexcel>
                    </span>

                    <h1 class="text-xl font-semibold text-[#b6fbfd] capitalize ">Analysis Software:</h1>

                    <p class="text-gray-300 dark:text-gray-300">
                       MS Excel, SPSS
                    </p>
                            </div>
                            </Slide> 
                        </div>
                    
  <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
            </div>
          
                    </div>
                     <h1 className='pt-4 text-gray-300'><span className='text-[#b6fbfd] font-bold'>Other Skills:</span> Digital Marketing (SEO, Social media marketing) 2. Video editor, 3. Youtuber</h1>
                </div>
                
</section>
        </div>
    );
};

export default Skills;