import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
    return (
        <div className=' bg-black grid grid-rows-3 min-h-screen  text-white justify-around items-center p-4'>
           <div className=''>
           <div className='font-bold text-4xl '>
                Skill
            </div>
           </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-36 '>
                <div className='border border-white rounded-md h-auto  relative w-full max-w-md flex flex-col items-center p-5'>
                    <div className='font-bold text-2xl mt-5'>Frontend Developer</div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                        <div className='flex flex-col justify-around items-center gap-5'>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> Javascript
                            </div>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> HTML
                            </div>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> CSS
                            </div>
                        </div>
                        <div className='flex flex-col justify-around items-center gap-5'>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> React
                            </div>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> Redux
                            </div>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> TailwindCSS
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-white rounded-md w-full max-w-md flex flex-col items-center p-5'>
                    <div className='font-bold text-2xl mt-5'>Backend Developer</div>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                        <div className='flex flex-col justify-around items-center gap-5'>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> Node.js
                            </div>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> Express
                            </div>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> MongoDB
                            </div>
                        </div>
                        <div className='flex flex-col justify-around items-center gap-5'>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> SQL
                            </div>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> Python
                            </div>
                            <div className='flex justify-center items-center gap-3 border p-3 rounded-md w-full max-w-[80%]'>
                                <FaGithub /> Docker
                            </div>
                        </div>
                    </div>
                </div>
            
              
            </div>
        </div>
    );
};

export default Project;
