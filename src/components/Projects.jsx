import React from 'react'
import { motion } from 'framer-motion'

const ProjectCard = ({ title, tech, points }) => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10">
    <div className="h-52 bg-gradient-to-tr from-indigo-500/30 via-fuchsia-500/20 to-cyan-400/30" />
    <div className="p-6 text-white">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-cyan-300 mt-1">{tech}</p>
      <ul className="mt-3 space-y-2 text-slate-300 list-disc pl-5">
        {points.map((p, i) => (<li key={i}>{p}</li>))}
      </ul>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-[#0b1020] to-slate-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="PenToPublic"
            tech="ASP.NET Core, React, SQL Server"
            points={[
              'Problem → creators struggled to monetize content effectively',
              'Solution → full-stack platform with auth, payments, and admin tooling',
              'Impact → streamlined publishing, analytics, and growth for writers'
            ]}
          />
          <ProjectCard
            title="TherapyLLM"
            tech="Flask, JavaScript, Llama 2"
            points={[
              'AI assistant enabling real-time, empathetic support',
              'Chat-like interface with context retention',
              'Helps people with accessible, private guidance'
            ]}
          />
          <ProjectCard
            title="Flutter Notes App"
            tech="Flutter, Firebase"
            points={[
              'Real-time sync across devices',
              'Share notes securely',
              'Sleek mobile-first design with offline support'
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
