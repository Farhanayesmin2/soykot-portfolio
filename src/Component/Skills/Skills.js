import React from 'react';
import { FcGlobe } from "react-icons/fc";
import { GiPhotoCamera } from "react-icons/gi";
import { IconName, SiMicrosoftexcel, SiMicrosoftoffice } from "react-icons/si";
const Skills = () => {
    return (
        <div>
            <section class=" dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white hover:text-sky-600">explore our <br/> awesome Components</h1>

        <div class="mt-2">
            <span class="inline-block w-40 h-1 bg-sky-500 rounded-full"></span>
            <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
            <span class="inline-block w-1 h-1 ml-1 bg-sky-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                         <span class="inline-block w-3 h-1 ml-1 bg-sky-500 rounded-full"></span>
        </div>
<div class="lg:hidden lg:flex lg:w-1/2 lg:justify-center">
                <img class="w-[24rem] h-[24rem] mx-auto flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
            </div>
        <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                        <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                           
                <div class="space-y-3">
                    <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500 hover:text-sky-600">
                       <FcGlobe className='text-4xl'></FcGlobe>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">  GIS & remote sensing software: </h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        ArcGIS 10.8, QGIS 3.14.
                    </p>
                </div>

                <div class="space-y-3">
                    <span class="inline-block p-3 text-rose-500 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500 hover:text-sky-600">
                          <GiPhotoCamera className='text-4xl'></GiPhotoCamera>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white"> Design software:</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                          Autocad (2D), Adobe Photoshop, Canva.
                    </p>
                </div>

                <div class="space-y-3">
                    <span class="inline-block p-3 text-orange-600 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500 hover:text-sky-600">
                        <SiMicrosoftoffice className='text-4xl' ></SiMicrosoftoffice>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Application Packages:</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                        Microsoft Office,Power Point.

                    </p>
                </div>

                <div class="space-y-3">
                    <span class="inline-block p-3 text-green-700 bg-blue-100 rounded-xl dark:text-white dark:bg-blue-500 hover:text-sky-600">
                        <SiMicrosoftexcel className='text-4xl'></SiMicrosoftexcel>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Analysis Software:</h1>

                    <p class="text-gray-500 dark:text-gray-300">
                       MS Excel, SPSS
                    </p>
                            </div>
                            
                        </div>
                        
  <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
            </div>
          
                    </div>
                     <h1 className='pt-4 text-gray-600'><span className='text-black font-bold'>Other Skills:</span> Digital Marketing (SEO, Social media marketing) 2. Video editor, 3. Youtuber</h1>
                </div>
                
</section>
        </div>
    );
};

export default Skills;