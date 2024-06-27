import React from 'react'
import Navbar from './components/nabbar/Navbar'
import About from './components/about/About'

import Home from './components/home/Home'
import Skills from './components/Projeact/Skills'
import Project from './components/Skills/Projeact'
import Contact from './components/Contact/Contact'
import CustomCursor from './components/Mouse/Mouse'
import LogoCarousel from './components/scroll/Scroll'
import LogoCarousel1 from './components/scroll/Scroll2'







const App = () => {
  return (
    <div>
    
        <Navbar/>
        <Home/>
      
        <About/>
        <Skills/>
       <Project/>
   <LogoCarousel/>
   <LogoCarousel1/>

       <Contact/>
          <CustomCursor/>
        
    </div>
  )
}

export default App