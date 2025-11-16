import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { year: '2024', title: 'BE – Electronics & Telecommunication', detail: 'Graduated with strong fundamentals in systems and problem solving.' },
  { year: '2025', title: 'CDAC PG-DAC', detail: 'Advanced training in full stack development, algorithms, and engineering practices.' },
  { year: 'Intern', title: 'Python Developer Internship – Bloomzen', detail: 'Built backend services and contributed to product features.' },
]

const Journey = () => {
  return (
    <section id="journey" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-[#0b1020] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold mb-12">My Journey</motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/10 rounded" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`relative grid md:grid-cols-2 gap-6 items-center`}>
                <div className={`md:col-start-${i % 2 === 0 ? 1 : 2} bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur`}> 
                  <div className="text-sm text-cyan-300">{s.year}</div>
                  <div className="text-xl font-semibold">{s.title}</div>
                  <p className="mt-2 text-slate-300">{s.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
