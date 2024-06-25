import React from 'react'
import { FaGithub } from "react-icons/fa";

const Skills = () => {
    return (
        <div id='project' className='bg-black min-h-screen  grid items-center justify-around'>
           -
            <div className='text-white font-bold text-4xl'>
                Projeacts
            </div>
            <div>
                <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16  '>
                    <div className='h-72 w-48 md:h-80 md:w-56 rounded-md col-span-1 bg-white'>
                        <div className='flex justify-center items-center   h-full w-full'>
                           <div className='flex md:gap-5 mt-24 justify-center items-center'>
                           <button class="bg-transparent hover:bg-black hover:text-white font-semibold  py-2 px-4 border border-black hover:border-transparent rounded">
                                Button
                            </button>
                           <FaGithub className='size-10 hover:text-white'/>
                           </div>
                        </div>

                    </div>
                    <div className='h-72 w-48 md:h-80 md:w-56 rounded-md col-span-1 bg-white'>
                        <div className='flex justify-center items-center   h-full w-full'>
                           <div className='flex md:gap-5 mt-24 justify-center items-center'>
                           <button class="bg-transparent hover:bg-black hover:text-white font-semibold  py-2 px-4 border border-black hover:border-transparent rounded">
                                Button
                            </button>
                           <FaGithub className='size-10 hover:text-white'/>
                           </div>
                        </div>

                    </div>
                    <div className='h-72 w-48 md:h-80 md:w-56 rounded-md col-span-1 bg-white'>
                        <div className='flex justify-center items-center   h-full w-full'>
                           <div className='flex md:gap-5 mt-24 justify-center items-center'>
                           <button class="bg-transparent hover:bg-black hover:text-white font-semibold  py-2 px-4 border border-black hover:border-transparent rounded">
                                Button
                            </button>
                           <FaGithub className='size-10 hover:text-white'/>
                           </div>
                        </div>

                    </div>
                    <div className='h-72 w-48 md:h-80 md:w-56 rounded-md col-span-1 bg-white'>
                        <div className='flex justify-center items-center   h-full w-full'>
                           <div className='flex md:gap-5 mt-24 justify-center items-center'>
                           <button class="bg-transparent hover:bg-black hover:text-white font-semibold  py-2 px-4 border border-black hover:border-transparent rounded">
                                Button
                            </button>
                           <FaGithub className='size-10 hover:text-white'/>
                           </div>
                        </div>

                    </div>
                  
                </div>

            </div>
           
        </div>
    )
}

export default Skills

