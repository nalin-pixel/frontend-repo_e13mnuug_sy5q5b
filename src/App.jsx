import React from 'react'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Badges from './components/Badges'
import Experience from './components/Experience'
import Goals from './components/Goals'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Badges />
      <Experience />
      <Goals />
      <Contact />
      <footer className="py-10 text-center text-slate-400">© {new Date().getFullYear()} Dinesh Dantal</footer>
    </div>
  )
}

export default App
