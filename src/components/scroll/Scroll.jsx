import React, { useEffect, useRef } from 'react';
import { FaAirbnb } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiCoffee } from "react-icons/fi";
import './scrol.css'; // Assuming this is your CSS file for styles

const icons = [
  { component: FaAirbnb, alt: "Airbnb" },
  { component: IoLogoJavascript , alt: "Airbnb" },
  { component: FaReact, alt: "Airbnb" },
  { component: RiTailwindCssFill, alt: "Airbnb" },
  { component: SiTypescript, alt: "Airbnb" },
  { component: FaGolang , alt: "Airbnb" },
  { component: FaNodeJs, alt: "Airbnb" },
  { component: SiMongodb, alt: "Airbnb" },
  { component: FaAngular, alt: "Airbnb" },
  { component: SiRedux, alt: "Airbnb" },
  { component: FaHtml5, alt: "Airbnb" },
  { component: FaCss3, alt: "Airbnb" },
  { component: FaGithub, alt: "Airbnb" },
  { component: FiCoffee, alt: "Airbnb" },
  { component: FaNodeJs, alt: "Airbnb" },
  { component: SiMongodb, alt: "Airbnb" },
  { component: FaAngular, alt: "Airbnb" },
  { component: SiRedux, alt: "Airbnb" },
];

const LogoCarousel = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      ul.insertAdjacentHTML('afterend', ul.outerHTML);
      ul.nextSibling.setAttribute('aria-hidden', 'true');
    }
  }, []);

  return (
    <div className="mask w-full h-28 bg-black inline-flex flex-nowrap overflow-hidden ">
      <ul ref={logosRef} className="flex bg-black items-center justify-center animate-infinite-scroll">
        {icons.map((icon, index) => {
          const IconComponent = icon.component;
          return (
            <li key={index} className="mx-8">
              <IconComponent className="text-6xl bg-black text-white" aria-label={icon.alt} />
            </li>
          );
        })}
        
      </ul>
      
      
    </div>
  );
};

export default LogoCarousel;
