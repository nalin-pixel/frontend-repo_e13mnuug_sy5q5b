import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#0b1020] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Experience</h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur flex items-start gap-4">
          <Briefcase className="text-cyan-300 mt-1" />
          <div>
            <div className="font-semibold">Python Developer Intern — Bloomzen</div>
            <p className="text-slate-300">Built APIs, debugged services, and collaborated in agile sprints to deliver features with quality.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
