import React from 'react';
import { FaGithub } from "react-icons/fa";
import pro from '../../aseet/projeact.jpeg';
import pro1 from '../../aseet/projeact2.jpeg';
import pro2 from '../../aseet/projeact 3.jpeg';
import pro3 from '../../aseet/proejact3.png';

const Skills = () => {
    return (
        <div id='project' className='bg-black min-h-screen grid items-center justify-around'>
            <div data-aos="fade-right" className='text-white font-bold text-4xl'>
                Projects
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-16'>
                    {/* Project 1 */}
                    <div data-aos="zoom-in-up" className='relative h-72 w-48 md:h-80 md:w-full rounded-md col-span-1 bg-white overflow-hidden'>
                        <img className='h-full w-full object-cover rounded-md' src={pro} alt="Project" />
                        <div className='absolute inset-0 flex justify-around items-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-75 hover:opacity-100'>
                       
                        <a href="https://salmanfarisportfolio.netlify.app/">
                       <button data-aos="flip-up" className="bg-white hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
                               Open Demo
                            </button>
                       </a>
                            
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div data-aos="zoom-in-up" className='relative h-72 w-48 md:h-80 md:w-full rounded-md col-span-1 bg-white overflow-hidden'>
                        <img className='h-full w-full object-cover rounded-md' src={pro1} alt="Project" />
                        <div className='absolute inset-0 flex justify-around items-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-75 hover:opacity-100'>
                      
                        <a href="https://main--adamsalim.netlify.app/">
                       <button data-aos="flip-up" className="bg-white hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
                          Open Demo
                            </button>
                       </a>
                         <a href="https://github.com/salmanfaris22/adamlatestone">
                         <FaGithub className='size-10 text-white' />
                         </a>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div data-aos="zoom-in-up" className='relative h-72 w-48 md:h-80 md:w-full rounded-md col-span-1 bg-white overflow-hidden'>
                        <img className='h-full w-full object-cover rounded-md' src={pro2} alt="Project" />
                        <div className='absolute inset-0 flex justify-around items-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-75 hover:opacity-100'>
                       <a href="https://salmanfarisgoogle.netlify.app/">
                       <button data-aos="flip-up" className="bg-white hover:bg-black hover:text-white font-semibold py-2 px-4 border border-black hover:border-transparent rounded">
                            Open Demo
                            </button>
                       </a>
                         <a href="https://github.com/salmanfaris22/live">
                         <FaGithub className='size-10 text-white' />
                         </a>
                        </div>
                    </div>
                    {/* Project 4 */}
                    <div data-aos="zoom-in-up" className='relative h-72 w-48 md:h-80 md:w-full rounded-md col-span-1 bg-white overflow-hidden'>
                        <img className='h-full w-full object-cover rounded-md' src={pro3} alt="Project" />
                        <div className='absolute inset-0 flex justify-around items-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-75 hover:opacity-100'>
                            <a href="https://github.com/salmanfaris22/portfolioNew">

                         
                            <FaGithub className='size-10 text-white' />   </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
