import React from 'react'
import { motion } from 'framer-motion'

const tags = [
  'Java Developer', '.NET Developer', 'Full Stack Developer', 'Software Engineer'
]

const Goals = () => {
  return (
    <section id="goals" className="relative py-24 bg-gradient-to-b from-slate-950 to-[#0b1020] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Career Goals</h2>
        <p className="text-slate-300 max-w-2xl">Actively seeking roles as Java Developer, .NET Developer, Full Stack Developer, and Software Engineer.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((t, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Goals
