import React from 'react';
import Imag from '../../aseet/unnamed-removebg.png';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './home.css'; // Assuming you have custom CSS styles in home.css

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id='home' className="bg-black min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col mt-36 md:mt-0 justify-center items-center md:items-end  px-6 md:px-12">
        <div className='space-y-6 text-center md:text-left ' data-aos="fade-right">
          <div className="text-2xl md:text-3xl font-semibold text-white  "></div>
          <div 
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
           data-aos-duration="1500"
          className="text-5xl md:text-6xl lg:text-8xl font-bold text-white">
            Hello, I'm <br /> Salman Faris
          </div>
          <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
           data-aos-duration="1000"
          className="text-sm md:text-base lg:text-lg text-white">
           I turn ideas into reality with code. Coffee, creativity,
           <br />
            and clean code fuel my work!
          </div>
          <div className='flex items-center gap-7'>
            <Link
              to="contact"
              smooth={true}
              duration={500}
            > <button className="border w-32 px-4 py-2 colo rounded-lg hover:text-black hover:border-black hover:bg-white duration-500 ease-in text-white">Contact Me</button></Link>
           
            <a href='https://github.com/salmanfaris22' target="_blank" rel="noopener noreferrer">
              <FaGithub className='size-8 text-white hover:size-10 transform translate-x-0.5 duration-500'/>
            </a>
            <a href='www.linkedin.com/in/salman-faris-50b664272' target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='size-8 text-white hover:size-10 transform translate-x-0.5 duration-500'/>
            </a>
            <a href='https://www.instagram.com/salmanfariz.________?igsh=MWlvaDc0dzh3YWg1YQ==' target="_blank" rel="noopener noreferrer">
              <FaInstagram className='size-8 text-white hover:size-10 transform translate-x-0.5 duration-500'/>
            </a>
            <a href='https://wa.link/4me11h' target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className='size-8 text-white hover:size-10 transform translate-x-0.5 duration-500'/>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center mt-6 md:mt-0"> 
        <div className="outer-circle md:ml-24" data-aos="fade-left">
          <div className="inner-image">
            <img data-aos="fade-left" className="h-48 im1 md:h-64 lg:h-96" src={Imag} alt="Salman Faris" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
