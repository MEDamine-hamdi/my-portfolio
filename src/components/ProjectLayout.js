'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

function useNavScroll() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return scrolled
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export default function ProjectLayout({ project }) {
  const scrolled = useNavScroll()
  useReveal()

  return (
    <>
      <div className="noise-layer" />

      {/* Navbar */}
      <nav className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}>
        <Link href="/" className="font-mono text-accent font-medium tracking-widest text-sm hover:text-white transition-colors">
          ← &lt;AH /&gt;
        </Link>
        <span className="font-mono text-xs tracking-widest uppercase text-muted hidden md:block">
          {project.category}
        </span>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-accent/40 text-accent hover:bg-accent hover:text-bg transition-all duration-300"
          >
            GitHub ↗
          </a>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-[65vh] flex flex-col justify-end px-8 md:px-20 pt-32 pb-16 overflow-hidden border-b border-white/5">
        {/* BG */}
        <div className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 60% at 70% 40%, ${project.accent}10 0%, transparent 70%)`,
          }}
        />
        <div className="grid-bg absolute inset-0 opacity-50" />

        <div className="relative">
          {/* Number + category */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs tracking-widest uppercase text-muted">{project.num}</span>
            <span className="w-px h-3 bg-muted/40" />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.accent }}>
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2.8rem,8vw,8rem)] font-bold leading-[0.9] tracking-tight mb-8"
            style={{ color: project.accent }}>
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(t => (
              <span key={t} className="font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border border-white/10 text-muted">
                {t}
              </span>
            ))}
          </div>

          {/* Short desc */}
          <p className="max-w-2xl text-muted leading-relaxed text-lg">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 md:px-20 py-24">
        <div className="max-w-4xl mx-auto">
          {project.sections.map((sec, i) => (
            <div key={i} className="reveal mb-16" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.accent }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="w-6 h-px" style={{ background: project.accent }} />
                <span className="font-mono text-xs tracking-widest uppercase text-muted">{sec.label}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-fg">{sec.title}</h2>
              <div className="text-muted leading-relaxed space-y-3">
                {Array.isArray(sec.body)
                  ? sec.body.map((line, j) => <p key={j}>{line}</p>)
                  : <p>{sec.body}</p>
                }
              </div>
              {sec.list && (
                <ul className="mt-4 space-y-2">
                  {sec.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted font-mono text-sm">
                      <span style={{ color: project.accent }} className="mt-0.5 shrink-0">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom nav */}
      <section className="px-8 md:px-20 py-16 border-t border-white/5 flex items-center justify-between flex-wrap gap-6">
        <Link href="/#projects" className="font-mono text-sm text-muted hover:text-fg transition-colors flex items-center gap-2">
          ← All Projects
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-mono text-xs tracking-widest uppercase border border-white/10 text-muted hover:text-fg hover:border-white/30 transition-all"
          >
            View on GitHub ↗
          </a>
        )}
      </section>

      <footer className="px-8 md:px-20 py-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted">© 2024 Amine Hamdi</span>
        <Link href="/" className="font-mono text-[10px] tracking-widest uppercase text-muted hover:text-fg transition-colors">
          Back to Portfolio
        </Link>
      </footer>
    </>
  )
}