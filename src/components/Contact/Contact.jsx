import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_nh14c65', 'template_huqz6so', form.current, {
          publicKey: 'stCFo4Wn0IKuUyjQz',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

        e.preventDefault();
        alert('Form submitted successfully!');
        form.current.reset();
    };


        
    
  return (
    <div id='contact' className="p-8 md:h-screen flex flex-col gap-24 items-center justify-center bg-black">
  <div data-aos="fade-right" className='text-white font-bold text-5xl '>
    Contact
  </div>
    <form  ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">

      <div className="mb-4">
        <label data-aos="flip-right" className="block text-black text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input data-aos="flip-left" type="text" name="to_name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-4">
        <label  data-aos="flip-right" className="block text-black text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input data-aos="flip-left" type="email" name="from_name" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div className="mb-6">
        <label data-aos="flip-right" className="block text-black text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea data-aos="flip-left" name="message" id="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
      </div>
      <div  className="flex items-center justify-between">
        <input data-aos="fade-right" type="submit" value="Send" className="bg-black  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" />
        <div className='flex gap-5 text-2xl justify-center items-center'>
        <a href='https://github.com/salmanfaris22' target="_blank" rel="noopener noreferrer">
              <FaGithub 
               data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="300"
               data-aos-offset="0"
              className='size-8 text-black hover:size-10 transform translate-x-0.5 duration-500'/>
            </a>
            <a href='www.linkedin.com/in/salman-faris-50b664272' target="_blank" rel="noopener noreferrer">
              <FaLinkedin
               data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="300"
               data-aos-offset="0"
              className='size-8 text-black hover:size-10 transform translate-x-0.5 duration-500'/>
            </a>
            <a href='https://www.instagram.com/salmanfariz.________?igsh=MWlvaDc0dzh3YWg1YQ==' target="_blank" rel="noopener noreferrer">
              <FaInstagram
               data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="300"
               data-aos-offset="0"
              className='size-8 text-black hover:size-10 transform translate-x-0.5 duration-500'/>
            </a>
            <a href='https://wa.link/4me11h' target="_blank" rel="noopener noreferrer">
              <FaWhatsapp
               data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back"
               data-aos-delay="300"
               data-aos-offset="0"
              className='size-8 text-black hover:size-10 transform translate-x-0.5 duration-500'/>
            </a>
        </div>
      </div>
    </form>
  </div>
  );
};

export default Contact;
