import React, { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="fixed w-[100%] z-50">
      <nav className='bg-black indexi'>
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
                <Link to="home" smooth={true} duration={500} className="hover:text-hover cursor-pointer">
                  Home
                </Link>
                <Link to="about" smooth={true} duration={500} className="hover:text-hover cursor-pointer">
                  About
                </Link>
                <Link to="project" smooth={true} duration={500} className="hover:text-hover cursor-pointer">
                Project
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
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
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
          className={`fixed z-40 w-full bg-white overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-[35%]"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col mt-10 items-center text-black gap-8 font-bold tracking-wider">
              <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                Home
              </Link>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                About
              </Link>
              <Link to="project" smooth={true} duration={500} className="cursor-pointer">
              project
              </Link>
            </div>   
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
