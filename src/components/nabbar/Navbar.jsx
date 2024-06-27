import React, { useEffect, useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import "./navbar.css";
import 'aos/dist/aos.css'
import AOS from 'aos'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="fixed w-full z-50" data-aos="fade-down">
      <nav className="bg-black indexi">
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6">
            {/* Primary menu and logo */}
            <div className="flex items-center justify-between gap-16 w-full my-12">
              {/* logo */}
              <div>
                <a href="/" className="flex gap-1 font-bold items-center">
                  <PaperAirplaneIcon className="h-6 w-6 text-white" />
                  <span>Paper.io</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 text-white font-bold">
                <Link
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="700"
                  to="home"
                  smooth={true}
                  duration={500}
                  className="hover:text-hover cursor-pointer"
                >
                  Home
                </Link>
                <Link
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="900"
                  to="about"
                  smooth={true}
                  duration={500}
                  className="hover:text-hover cursor-pointer"
                >
                  About
                </Link>
                <Link
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1100"
                  to="project"
                  smooth={true}
                  duration={500}
                  className="hover:text-hover cursor-pointer"
                >
                  Project
                </Link>
                <Link
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1300"
                  to="skill"
                  smooth={true}
                  duration={500}
                  className="hover:text-hover cursor-pointer"
                >
                  Skills
                </Link>
                <Link
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:text-hover cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full  border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden text-white flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full overflow-hidden text-white flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-[500px]"
          }`}
        >
          <div className="px-8 h-[300px]">
            <div className="flex flex-col items-center h-[300px] bg-black justify-around  text-white font-bold tracking-wider">
            <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className= "hover:text-2xl transform translate-x-0.5 duration-500   hover:text-hover cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                           className= "hover:text-2xl transform translate-x-0.5 duration-500   hover:text-hover cursor-pointer"
                >
                  About
                </Link>
                <Link
                  to="project"
                  smooth={true}
                  duration={500}
                           className= "hover:text-2xl transform translate-x-0.5 duration-500   hover:text-hover cursor-pointer"
                >
                  Project
                </Link>
                <Link
                  to="skill"
                  smooth={true}
                  duration={500}
                         className= "hover:text-2xl transform translate-x-0.5 duration-500   hover:text-hover cursor-pointer"
                >
                  Skills
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                          className= "hover:text-2xl transform translate-x-0.5 duration-500   hover:text-hover cursor-pointer"
                >
                  Contact
                </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
