import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e)=>handleNav(e,'#home')} className="font-bold text-lg tracking-tight">MyPortfolio<span className="text-blue-600">.</span></a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={(e)=>handleNav(e,l.href)} className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label="Toggle Menu">
          <span className="i">{open ? '✕' : '☰'}</span>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={(e)=>handleNav(e,l.href)} className="text-gray-800 py-1">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-10">
        <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-8 shadow-sm">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Hi, I’m <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="mt-4 text-gray-700">
            I build modern, interactive experiences for the web. I love clean design, fast performance, and playful interactions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-black transition">Contact Me</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white"></div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">About</h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          I’m a developer focused on crafting delightful digital products. My stack spans React, TypeScript, Node, and Python. I enjoy shipping polished UIs with accessible, responsive, and performance-minded code.
        </p>
      </div>
    </section>
  )
}

function Projects() {
  const items = [
    {
      title: 'Interactive 3D Landing',
      desc: 'A Spline-powered hero for a startup site.',
      tags: ['React', 'Spline', 'Tailwind'],
      link: '#'
    },
    {
      title: 'SaaS Dashboard',
      desc: 'Clean analytics dashboard with dark mode.',
      tags: ['React', 'Charts', 'API'],
      link: '#'
    },
    {
      title: 'Marketing Site',
      desc: 'Fast and responsive landing page.',
      tags: ['Vite', 'SEO', 'Performance'],
      link: '#'
    },
  ]
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-xl border bg-white p-6 hover:shadow-lg transition">
              <div className="h-40 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 mb-4" />
              <h3 className="font-semibold text-lg group-hover:text-blue-600">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'Tailwind CSS', 'MongoDB']
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Skills</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map(s => (
            <span key={s} className="px-4 py-2 rounded-full bg-gray-100 text-gray-800">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus({ ok: true, message: 'Message sent successfully!' })
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold">Contact</h2>
        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border">
          <div className="grid gap-4">
            <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Name" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} placeholder="Subject" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="grid gap-4">
            <textarea required rows={7} value={form.message} onChange={e=>setForm({...form, message:e.target.value})} placeholder="Your message" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="flex items-center gap-3">
              <button disabled={loading} type="submit" className="px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-60">
                {loading ? 'Sending...' : 'Send message'}
              </button>
              {status && (
                <p className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.message}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-600 bg-white border-t">
      © {new Date().getFullYear()} Your Name — All rights reserved.
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
