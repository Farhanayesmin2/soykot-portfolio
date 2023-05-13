import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className=''>

  <div className="container mx-auto py-10 px-4 md:px-0 text-[#b6fbfd] font-serif shadow-top shadow-[#0cf2f8]  shadow-xl border-y border-[#0cf2f8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col md:flex-row md:items-center">
          <img className="w-40 h-40 object-cover  rounded-full mb-4 md:mb-0 md:mr-4 mx-auto md:mx-0" src="https://i.ibb.co/THsfhXZ/Soykot-removebg-fotor-bg-remover-20230511191752.png" alt="Profile Image" />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Your Name</h2>
            <div className="flex justify-center md:justify-start mt-2">


              <a href="#" className="text-[#0cf2f8]  transform hover:translate-y-3 duration-1000 items-center justify-center flex w-12 h-12 hover:text-blue-700 mr-2 bg-black shadow-md shadow-[#b6fbfd]">
                <FaFacebook className="w-8 h-8 " />
              </a>
              <a href="#" className="text-[#0cf2f8]  transform hover:translate-y-3 duration-1000 items-center justify-center flex w-12 h-12 hover:text-red-800 mr-2 bg-black shadow-md shadow-[#b6fbfd]">
                <FaYoutube className="w-8 h-8 " />
              </a>
           
               <a href="#" className="text-[#0cf2f8]  transform hover:translate-y-3 duration-1000 items-center justify-center flex w-12 h-12 hover:text-rose-500 mr-2 bg-black shadow-md shadow-[#b6fbfd]">
                <FaInstagram className="w-8 h-8 " />
                                </a>
                                  <a href="#" className="text-[#0cf2f8]  transform hover:translate-y-3 duration-1000 items-center justify-center flex w-12 h-12 hover:text-sky-500 mr-2 bg-black shadow-md shadow-[#b6fbfd]">
                <FaTwitter className="w-8 h-8 " />
              </a>
            </div>
          </div>
        </div>
      {/* Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold mb-2">EMAIL:</span>
            <span>michael@domain.com</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold mb-2">BIRTHDAY:</span>
            <span>20 August</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold mb-2">PHONE:</span>
            <span>(555) 555-1234</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold mb-2">LOCATION:</span>
            <span>Kingston, New York 12401</span>
          </div>
        </div>
      </div>
    </div>



</div>

       
    );
};

export default Footer;
// https://i.ibb.co/2scKhDb/MY-removebg.png
// https://i.ibb.co/wRQbScb/Soykot-removebg.png
// https://i.ibb.co/THsfhXZ/Soykot-removebg-fotor-bg-remover-20230511191752.png