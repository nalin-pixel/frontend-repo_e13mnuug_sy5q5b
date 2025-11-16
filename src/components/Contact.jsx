import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus(data?.detail || 'error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s build something meaningful</h2>
          <p className="mt-3 text-slate-300">Email: dantaldinesh123@gmail.com<br/>Mobile: 7620079374<br/>
            <a href="https://www.linkedin.com" className="underline text-cyan-300">LinkedIn</a>
          </p>
          {status === 'sent' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              Thank you! I’ll get back to you soon.
            </motion.div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="rounded-xl bg-white/5 border border-white/10 p-6 grid gap-4">
          {['name','email','subject'].map((f) => (
            <input key={f} required={f!== 'subject'} placeholder={f.charAt(0).toUpperCase()+f.slice(1)} value={form[f]} onChange={(e)=>setForm({...form,[f]:e.target.value})} className="w-full bg-slate-900/80 border border-white/10 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
          ))}
          <textarea required placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} rows={5} className="w-full bg-slate-900/80 border border-white/10 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400" />
          <button type="submit" className="inline-flex justify-center rounded bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 transition">
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
