import React from 'react';
import Imag from '../../aseet/unnamed-removebg.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './home.css'; // Assuming you have custom CSS styles in home.css
const Home = () => {
  return (
    <div id='home' className="bg-black min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col mt-20 md:mt-0 justify-center items-center md:items-end mt-6 md:mt-0 px-6 md:px-12">
        <div className='space-y-6 text-center md:text-left'>
          <div className="text-2xl md:text-3xl font-semibold text-white ">Software Developer</div>
          <div className="text-5xl md:text-6xl lg:text-8xl font-bold text-white">
            Hello, I'm <br /> Salman Faris
          </div>
          <div className="text-sm md:text-base lg:text-lg text-white">
            Lorem ipsum dolor sit amet architecto nisi distinctio temporibus, <br />
            soluta magni. Alias quaerat nisi explicabo tenetur ullam.
          </div>
          <div className='flex items-center gap-7'>
            <button className="border w-32 px-4 py-2 colo rounded-lg text-white">Download</button>
            <FaGithub className='size-8 text-white'/>
            <FaLinkedin className='size-8 text-white'/>
            <FaInstagram className='size-8 text-white'/>
            <FaWhatsapp className='size-8 text-white'/>
          </div>
        </div>
      </div>






      <div className="flex justify-center md:justify-start  items-center mt-6 md:mt-0">
    
      <div class="outer-circle md:ml-24">
  <div class="inner-image">
   
    {/* <img className="h-48 md:h-64 lg:h-96" src={Imag} alt="Salman Faris" /> */}
           
  </div>
</div>

            
  
      </div>
    </div>
  );
};

export default Home;
