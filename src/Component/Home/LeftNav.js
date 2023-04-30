import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    return (
        <div>
            <div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-1 before:block before:w-32 before:h-3 before:mb-1 before:rounded-lg before:mx-auto sm:before:mx-0 before:bg-violet-400">
					<div className="text-center sm:text-left mb-1 before:block before:w-28 before:h-2 before:mb-1 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-500">
 <div className="text-center sm:text-left mb-5 before:block before:w-24 before:h-1 before:mb-3 before:rounded-lg before:mx-auto sm:before:mx-0 before:bg-violet-600">

                </div>
                </div>

 <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto bg-none">
          <Link
            to="/education"
            class="mr-5 hover:text-pink-900 font-semibold text-[#86f9fc]"
          >
            Education
          </Link>
          <Link
            to="/"
            class="mr-5 hover:text-pink-900  font-semibold text-[#86f9fc]"
          >
            Blog
          </Link>
          <Link
            to="/"
            class="mr-5 hover:text-pink-900  font-semibold text-[#86f9fc]"
          >
            About
          </Link>
          <Link
            to="/"
            class="mr-5 hover:text-pink-900  font-semibold text-[#86f9fc]"
          >
            Contact Me
          </Link>

</nav>

          
                  
                  <h3 className="text-3xl font-bold font-serif">Educatonal</h3>
					<span className="font-mono text-sm font-bold tracking-wider uppercase dark:text-gray-400">Background</span>
                </div>
                
			</div>
                </div>
                
			</div>
        </div>
    );
};

export default LeftNav;