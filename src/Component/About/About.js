import React from 'react';
import banner2 from "../../images/pexels-pixabay-219692.jpg";
import { FcGlobe, FcPhotoReel, IconName } from "react-icons/fc";
const About = () => {
    return (
        <div className='py-12'>
            <h1 className="lg:text-4xl fw-  font-black text-[#00008B] hover:text-pink-900  ">Profile</h1>

<section class="dark:bg-gray-800 dark:text-gray-100">
	<div class="container flex flex-col mx-auto lg:flex-row">
                    <div class="w-full lg:w-1/3">
                        <img src={banner2}/>
        </div>
		<div class="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
			
			<h2 class="lg:text-3xl font-semibold leading-none text-start text-[#00008B] hover:text-pink-900   ">Some information about me.</h2>
			<p class="mt-4 mb-8 text-start text-sm">A versatile, dynamic and <strong> hard-working </strong>  professional with a background in Urban and Regional Planning.
Possessing excellent problem-solving skills and the ability to work effectively in a team environment, even under
pressure. A creative, determined, and  <strong> energetic </strong>person with an excellent eye for new problem-solving ideas.</p>

                       
                 

			<button className="self-start text-black px-10 py-3 text-lg font-medium rounded-3xl bg-gradient-to-r from-[#00008B] via-pink-100 to-[#00008B]  dark:bg-fuchsia-400  dark:text-white hover:bg-rose-400">About More</button>
                  
                  <div>
   
  </div> 
                    </div>
                    
	</div>
</section>

<section>

   
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
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
            <span className="relative">The</span>
          </span>{' '}
         TECHNICAL SKILLS
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
        <div className="space-y-6 sm:px-16">
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <FcGlobe className='text-4xl'></FcGlobe>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
              GIS & remote sensing software: 
              </h6>
              <p className="text-sm text-gray-900">
               ArcGIS 10.8, QGIS 3.14.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <FcPhotoReel className='text-4xl'></FcPhotoReel>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
              Design software:
              </h6>
              <p className="text-sm text-gray-900">
               Autocad (2D), Adobe Photoshop, Canva.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Leverage agile
              </h6>
              <p className="text-sm text-gray-900">
                The first mate and his Skipper too will do their very best to
                make the others comfortable.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-6 sm:px-16">
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Organically grow
              </h6>
              <p className="text-sm text-gray-900">
                Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                flail 180 berm over the sea.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Have a good one
              </h6>
              <p className="text-sm text-gray-900">
                Cheese on toast airedale the big cheese. Danish fontina cheesy
                grin airedale danish fontina.
              </p>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                A slice of heaven
              </h6>
              <p className="text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack
                never stopped old Big Bear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

                



</section>







        </div>
    );
};

export default About;