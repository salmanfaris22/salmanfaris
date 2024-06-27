import React from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiRedux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoDocker } from "react-icons/io5";

const Project = () => {
    return (
        <div id='skill' className='mt-32 bg-black flex flex-col md:h-screen text-white justify-center gap-20 items-center p-4'>
            <div data-aos="fade-right" className='font-bold text-6xl'>
                Skills
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-36'>
                {/* Frontend Developer Skills */}
                <div className='border border-white rounded-md h-auto relative w-full max-w-md flex flex-col items-center p-5'>
                    <div data-aos="fade-down" className='font-bold text-2xl mt-5'>Frontend Developer</div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                        <div className='flex flex-col justify-around items-center gap-5'>
                            <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <IoLogoJavascript size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>Javascript</span>
                            </div>
                            <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaHtml5 size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>HTML</span>
                            </div>
                            <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaCss3 size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>CSS</span>
                            </div>
                        </div>
                        <div  className='flex flex-col justify-around items-center gap-5'>
                        <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaReact size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>React</span>
                            </div>
                            <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <SiRedux size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>Redux</span>
                            </div>
                            <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <RiTailwindCssFill size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>TailwindCSS</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Backend Developer Skills */}
                <div className='border border-white rounded-md w-full max-w-md flex flex-col items-center p-5'>
                    <div data-aos="fade-down" className='font-bold text-2xl mt-5'>Backend Developer</div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                        <div className='flex flex-col justify-around items-center gap-5'>
                        <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaNodeJs size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>Node.js</span>
                            </div>
                            <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <SiExpress size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>Express</span>
                            </div>
                            <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <SiMongodb size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>MongoDB</span>
                            </div>
                        </div>
                        <div className='flex flex-col justify-around items-center gap-5'>
                        <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <BiLogoPostgresql size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>SQL</span>
                            </div>
                            <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <IoLogoDocker size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>Docker</span>
                            </div>
                            <div data-aos="fade-down" className='flex justify-center hover:text-black hover:bg-white items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <IoLogoJavascript size={30} /> {/* Adjust size as needed */}
                                <span className='ml-2'>Javascript</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
