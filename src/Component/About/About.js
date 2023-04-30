import React from 'react';
import banner2 from "../../images/pexels-pixabay-219692.jpg";
import { FcGlobe, FcPhotoReel, IconName } from "react-icons/fc";
const About = () => {
    return (
        <div className='py-12'>
            <h1 className="text-4xl font-black text-[#0cf2f8] hover:text-pink-900  ">Profile</h1>

<section class="dark:bg-gray-800 dark:text-gray-100">
	<div class="container flex flex-col mx-auto lg:flex-row">
                    <div class="w-full lg:w-1/3">
                        <img src={banner2}/>
        </div>
		<div class="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
			
			<h2 class="lg:text-3xl font-semibold leading-none text-start text-[#b6fbfd] hover:text-pink-900   ">Some information about me.</h2>
			<p class="mt-4 mb-8 text-start text-gray-300 text-sm">A versatile, dynamic and <strong> hard-working </strong>  professional with a background in Urban and Regional Planning.
Possessing excellent problem-solving skills and the ability to work effectively in a team environment, even under
pressure. A creative, determined, and  <strong> energetic </strong>person with an excellent eye for new problem-solving ideas.</p>

                       
    

 <button
                className="self-start shadow-2xl border-2 border-[#0cf2f8] hover:shadow-[#0cf2f8] font-bold text-[#000000] transform hover:translate-y-3 duration-500 px-10 py-3
  text-lg  rounded-3xl bg-gradient-to-r from-[#0cf2f8] via-[#c2fcff] to-[#0cf2f8]  ">About More</button>
                  
                  <div>
   
  </div> 
                    </div>
                    
	</div>
</section>









        </div>
    );
};

export default About;