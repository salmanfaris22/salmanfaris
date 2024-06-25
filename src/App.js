import React from 'react'
import Navbar from './components/nabbar/Navbar'
import About from './components/about/About'

import Home from './components/home/Home'
import Skills from './components/Projeact/Skills'
import Project from './components/Skills/Projeact'
const App = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        
        <About/>
        <Skills/>
       <Project/>
          
        
    </div>
  )
}

export default App