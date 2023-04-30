import React from 'react';
import { motion } from "framer-motion";

const Education = () => {
    return (
        <div className='text-gray-400  text-start'>

<section className="dark:bg-gray-800 dark:text-gray-100">
	
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-600">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Bachelor of science</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">2020</time>
                    <p className="mt-3"> <span className='font-bold'> Major: </span> Urban and Regional Planning.</p>
                    
                    <p className="mt-3"> <span className='font-bold'>University: </span>Pabna University of Science And Technology.</p>
                    <p><span className='font-bold'>CGPA:</span> 3.39</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Higher Secondary Certificate</h3>
                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">2016</time>
                     <p className="mt-3"> <span className='font-bold'> Major: </span> Science.</p>
                    
                    <p className="mt-3"> <span className='font-bold'>College: </span>Govt.Sha Sultan College, Bogura.</p>
                    <p><span className='font-bold'>GPA:</span> 4.58</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
						<h3 className="text-xl font-semibold tracking-wide">Secondary School Certificate</h3>
						<time className="text-xs tracking-wide uppercase dark:text-gray-400">2014</time>
					  <p className="mt-3"> <span className='font-bold'> Major: </span> Science.</p>
                    
                    <p className="mt-3"> <span className='font-bold'>College: </span>Govt. Sonatola Model High School & College.</p>
                    <p><span className='font-bold'>GPA:</span>5.00</p>
					</div>
				</div>
			</div>
		
	
</section>
        

<motion.div
    className="container"
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  />


</div>
        
    );
};

export default Education;