import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

// Subtle, anime-inspired ambient background with gradient auroras, twinkling stars, and falling sakura petals
const range = (n) => Array.from({ length: n }, (_, i) => i)

const randomBetween = (min, max) => Math.random() * (max - min) + min

const AnimeBackground = () => {
  const stars = useMemo(() => range(70).map((i) => ({
    id: i,
    top: randomBetween(0, 100),
    left: randomBetween(0, 100),
    size: randomBetween(1, 2.2),
    delay: randomBetween(0, 5),
  })), [])

  const petals = useMemo(() => range(14).map((i) => ({
    id: i,
    left: randomBetween(0, 100),
    delay: randomBetween(0, 10),
    duration: randomBetween(8, 16),
    scale: randomBetween(0.6, 1.1),
  })), [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora gradient layers */}
      <motion.div
        aria-hidden
        className="absolute -top-1/3 -left-1/3 h-[90vmax] w-[90vmax] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.28), transparent 70%)' }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: 'linear' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-1/3 -right-1/3 h-[80vmax] w-[80vmax] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.22), transparent 70%)' }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 95, ease: 'linear' }}
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070912] via-transparent to-[#070912]" />

      {/* Starfield */}
      <div className="absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.id}
            className="twinkle absolute rounded-full bg-white/90"
            style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }}
          />
        ))}
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Falling sakura petals */}
      <div className="absolute inset-0 overflow-hidden">
        {petals.map((p) => (
          <span
            key={p.id}
            className="sakura absolute"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              transform: `scale(${p.scale})`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AnimeBackground
