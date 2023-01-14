import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Course from './components/Course'
import Navbar from './components/Navbar'
import Projects from './components/Project'
import Skills from './components/Skills'

function App () {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Course/>
      <Contact />
    </main>
  )
}

export default App
