import React from 'react';
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id='about' className='z-10' >
      <div className="bg-black text-white py-8" >
        <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24" data-aos="flip-left">
          <div data-aos="fade-down-right" className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8" >
            <p className="ml-2 text-white uppercase tracking-loose">About</p>

            <p className="mt-1 text-sm md:text-base text-gray-50 mb-4">
              Hello! I'm Salman Faris K, a passionate self-taught developer with a focus on web development and systems engineering. Driven by curiosity
              and dedication, I create dynamic, user-friendly digital experiences. Let's build something amazing together!






            </p>
            <a
              href="#"
              className="bg-transparent mr-auto text-white  hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border   hover:border-transparent"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-2xl transform translate-x-0.5 duration-500   hover:text-hover cursor-pointer"
              >
                Contact
              </Link>
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 text-white  absolute h-full border"
                  style={{ right: '50%', border: '2px solid #FFFF', borderRadius: '1%' }}
                ></div>
                <div
                  className="border-2-2 text-white  absolute h-full border"
                  style={{ left: '50%', border: '2px solid #FFFFF', borderRadius: '1%' }}
                ></div>
                <div data-aos="fade-right" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-white ">27 May, 2024</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Bridgeon (intern)</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      I'm a self-taught developer specializing in the MERN stack, passionate about building dynamic, responsive web applications. Let's collaborate on innovative projects!:)
                    </p>
                  </div>
                </div>
                <div data-aos="fade-left" className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-white ">2 May, 2021</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">IHRD College | Postgraduate(dropper)</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      I pursued a BSc in Computer Science for two years before deciding to quit to focus on self-taught development.
                    </p>
                  </div>
                </div>
                <div data-aos="fade-right" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-white "> 10 March, 2022</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">FHSS  | higher secondary </h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the results will
                      be announced on the WhatsApp groups and will be mailed to you.
                    </p>
                  </div>
                </div>

                <div data-aos="fade-left" className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1 w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-white ">12 March, 2020</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl text-left">Pmsapthss | high school</h4>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      Completed higher secondary education with a focus on commerce, providing a solid foundation in business and finance principles.
                    </p>
                  </div>
                </div>
              </div>
              {/* <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                alt="Tech Fest Image"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About
