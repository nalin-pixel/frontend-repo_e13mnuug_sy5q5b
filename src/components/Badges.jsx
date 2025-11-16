import React from 'react'
import { motion } from 'framer-motion'

const Badge = ({ title, subtitle }) => (
  <motion.div whileHover={{ scale: 1.03 }} className="rounded-xl p-6 bg-gradient-to-br from-indigo-600/20 to-cyan-500/20 border border-indigo-400/30 text-white">
    <div className="text-lg font-semibold">{title}</div>
    <div className="text-sm text-cyan-300">{subtitle}</div>
  </motion.div>
)

const Badges = () => {
  return (
    <section id="certs" className="relative py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">Certifications</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <Badge title="IBM" subtitle="Front-End Development" />
          <Badge title="IoT" subtitle="Arduino & NodeMCU" />
        </div>
      </div>
    </section>
  )
}

export default Badges
