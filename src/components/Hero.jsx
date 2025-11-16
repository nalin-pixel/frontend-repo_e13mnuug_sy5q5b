import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I’m Dinesh —
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">I Build Scalable, Human-Centric Software.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-slate-200 max-w-2xl"
          >
            CDAC-certified Full Stack Developer. I design and engineer reliable systems with delightful user experiences.
          </motion.p>

          <motion.div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3 text-white transition">
              <span>Let’s Connect</span>
            </a>
            <span className="hidden sm:block text-slate-300">Scroll to explore my story</span>
          </motion.div>

          <motion.pre
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 pointer-events-auto rounded-xl bg-slate-900/70 border border-white/10 p-4 text-sm text-emerald-300 shadow-xl overflow-auto max-h-56"
          >{`// typing...\nconst developer = {\n  name: 'Dinesh Dantal',\n  role: 'Full Stack Developer',\n  stack: ['Java', 'Spring Boot', 'React', '.NET', 'C#', 'SQL', 'AWS'],\n  values: ['craft', 'clarity', 'care']\n}`}          
          </motion.pre>
        </motion.div>
        <div className="h-[40vh] lg:h-[60vh]" />
      </div>
    </section>
  )
}

export default Hero
