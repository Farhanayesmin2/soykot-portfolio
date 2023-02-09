import React from 'react';
import banner2 from "../../images/pexels-pixabay-219692.jpg";
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









        </div>
    );
};

export default About;