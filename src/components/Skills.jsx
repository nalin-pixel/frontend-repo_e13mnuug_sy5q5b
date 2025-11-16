import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Cpu, Layout, Database, Cloud, Code2, Shield } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Java', desc: 'Robust backend services' },
  { icon: Shield, title: 'Spring Boot', desc: 'Secure, scalable APIs' },
  { icon: Layout, title: 'React.js', desc: 'Interactive UIs' },
  { icon: Cpu, title: '.NET & C#', desc: 'Enterprise-grade systems' },
  { icon: Database, title: 'SQL & AWS', desc: 'Data & cloud expertise' },
  { icon: Zap, title: 'HTML, CSS, JS', desc: 'Web fundamentals' },
  { icon: Shield, title: 'API, JWT, EF', desc: 'Auth & data access' },
]

const Card = ({ Icon, title, desc }) => (
  <motion.div whileHover={{ y: -6, scale: 1.02 }} className="rounded-xl p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-white/10 shadow-lg">
    <div className="flex items-center gap-3">
      <Icon className="text-cyan-300" />
      <h3 className="text-white font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-slate-300">{desc}</p>
  </motion.div>
)

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-[#0b1020]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Skills as Superpowers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, idx) => (
            <Card key={idx} Icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
