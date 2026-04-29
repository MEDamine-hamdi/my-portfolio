'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

/* ─── Real Data ──────────────────────────────────────────── */
const ROLES = [
  'Full-Stack Developer',
  'React Engineer',
  'Node.js Developer',
  'Problem Solver',
]

const SKILLS = [
  { name: 'JavaScript', level: 90, color: '#f7df1e' },
  { name: 'React',      level: 88, color: '#61dafb' },
  { name: 'Node.js',    level: 85, color: '#3fb950' },
  { name: 'Express',    level: 82, color: '#ffffff' },
  { name: 'MongoDB',    level: 80, color: '#47a248' },
  { name: 'Python',     level: 75, color: '#3776ab' },
  { name: 'PHP',        level: 70, color: '#8993be' },
  { name: 'SQL',        level: 75, color: '#f29111' },
  { name: 'Java',       level: 68, color: '#ed8b00' },
  { name: 'C',          level: 65, color: '#a8b9cc' },
  { name: 'Android',    level: 60, color: '#3ddc84' },
]

const PROJECTS = [
  {
    num: '01',
    title: 'AI Textile Label Inspector',
    desc: 'AI-based system detecting and reading textile labels using computer vision and OCR. Integrates Node.js, Express, and FastAPI.',
    tags: ['Python', 'FastAPI', 'Node.js', 'Computer Vision', 'OCR'],
    type: 'Final Year Project',
    accent: '#58c4f5',
    href: null,
  },
  {
    num: '02',
    title: 'Real Estate Platform',
    desc: 'Full-stack MERN application for managing real estate listings with REST APIs and MongoDB.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    type: 'Full-Stack App',
    accent: '#3fb950',
    href: '/projects/real-estate',
  },
  {
    num: '03',
    title: 'Hotel Room Booking',
    desc: 'Booking system for managing hotel rooms and reservations with complete CRUD operations.',
    tags: ['React', 'Node.js', 'MongoDB'],
    type: 'Web Application',
    accent: '#f78166',
    href: '/projects/hotel-booking',
  },
  {
    num: '04',
    title: 'Employee Management System',
    desc: 'Full-stack CRUD application for managing employee records and HR workflows.',
    tags: ['React', 'Express', 'MongoDB'],
    type: 'Enterprise App',
    accent: '#d2a8ff',
    href: null,
  },
  {
    num: '05',
    title: 'Telecom Contract Manager',
    desc: 'Internal web application developed during internship for managing telecom contracts.',
    tags: ['PHP', 'SQL', 'JavaScript'],
    type: 'Internship Project',
    accent: '#ffa657',
    href: null,
  },
  {
    num: '06',
    title: 'MERN Todo App',
    desc: 'First full-stack MERN application with basic CRUD operations. The project that started it all.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    type: 'Learning Project',
    accent: '#58c4f5',
    href: null,
  },
  {
    num: '07',
    title: 'Angular App I',
    desc: 'Angular project currently in development. Full details coming soon.',
    tags: ['Angular', 'TypeScript', 'RxJS'],
    type: 'In Progress',
    accent: '#dd0031',
    href: '/projects/angular-project-1',
    wip: true,
  },
  {
    num: '08',
    title: 'Angular App II',
    desc: 'Second Angular application currently under development.',
    tags: ['Angular', 'TypeScript', 'NgRx'],
    type: 'In Progress',
    accent: '#dd0031',
    href: '/projects/angular-project-2',
    wip: true,
  },
  {
    num: '09',
    title: 'Spring Boot App',
    desc: 'Java Spring Boot backend project currently in development.',
    tags: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL'],
    type: 'In Progress',
    accent: '#6db33f',
    href: '/projects/spring-boot-project',
    wip: true,
  },
]

/* ─── Typing Hook ─────────────────────────────────────── */
function useTyping(words) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = words[wordIdx]
    let t
    if (phase === 'typing') {
      if (text.length < word.length)
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 85)
      else
        t = setTimeout(() => setPhase('deleting'), 1800)
    } else {
      if (text.length > 0)
        t = setTimeout(() => setText(text.slice(0, -1)), 45)
      else {
        setWordIdx(i => (i + 1) % words.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(t)
  }, [text, phase, wordIdx, words])

  return text
}

/* ─── Scroll Reveal Hook ──────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-x, .skill-item')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ─── Parallax Hook ───────────────────────────────────── */
function useParallax() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-speed]')
    const onScroll = () => {
      const y = window.scrollY
      els.forEach(el => {
        const s = parseFloat(el.dataset.speed)
        el.style.transform = `translateY(${y * s}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

/* ─── Cursor Hook ─────────────────────────────────────── */
function useCursor() {
  useEffect(() => {
    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    const move = e => { mx = e.clientX; my = e.clientY }
    const raf = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      dot.style.left  = mx + 'px'; dot.style.top  = my + 'px'
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      requestAnimationFrame(raf)
    }
    const on  = () => { dot.classList.add('hovered'); ring.classList.add('hovered') }
    const off = () => { dot.classList.remove('hovered'); ring.classList.remove('hovered') }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, .project-card, .skill-chip')
      .forEach(el => { el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off) })
    raf()
    return () => document.removeEventListener('mousemove', move)
  }, [])
}

/* ─── Navbar Scroll ───────────────────────────────────── */
function useNavScroll() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return scrolled
}

/* ─── Page ────────────────────────────────────────────── */
export default function Home() {
  const typed    = useTyping(ROLES)
  const scrolled = useNavScroll()
  useScrollReveal()
  useParallax()
  useCursor()

  return (
    <>
      {/* Noise */}
      <div className="noise-layer" />

      {/* Cursor */}
      <div id="cursor-dot"  className="cursor-dot" />
      <div id="cursor-ring" className="cursor-ring" />

      {/* ══ Navbar ══════════════════════════════════════ */}
      <nav className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}>
        <span className="font-mono text-accent font-medium tracking-widest text-sm">
          &lt;AH /&gt;
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {['About', 'Skills', 'Projects', 'Contact'].map(s => (
            <li key={s}>
              <a
                href={`#${s.toLowerCase()}`}
                className="font-mono text-xs tracking-widest uppercase text-muted hover:text-fg transition-colors relative group"
              >
                {s}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Mohamed_Amine_Hamdi_CV.pdf"
          className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-accent/40 text-accent hover:bg-accent hover:text-bg transition-all duration-300"
        >
          CV ↗
        </a>
      </nav>

      {/* ══ Hero ════════════════════════════════════════ */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 pt-24 pb-20 overflow-hidden">
        {/* Grid */}
        <div className="grid-bg absolute inset-0" />

        {/* Orbs */}
        <div
          data-speed="-0.07"
          className="absolute top-[-120px] right-[-80px] w-[600px] h-[600px] rounded-full opacity-[0.07] animate-float-slow"
          style={{ background: 'radial-gradient(circle, #58c4f5, transparent 70%)' }}
        />
        <div
          data-speed="0.04"
          className="absolute bottom-[10%] left-[-100px] w-[400px] h-[400px] rounded-full opacity-[0.06] animate-float-fast"
          style={{ background: 'radial-gradient(circle, #3fb950, transparent 70%)' }}
        />

        {/* Availability badge */}
        <div className="flex items-center gap-2 mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
          <span className="w-2 h-2 rounded-full bg-accent-2 animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-accent-2 uppercase">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-[clamp(3.5rem,12vw,11rem)] font-bold leading-[0.9] tracking-tight mb-8">
          <div className="line-clip"><span>AMINE</span></div>
          <div className="line-clip"><span className="text-gradient">HAMDI</span></div>
        </h1>

        {/* Typing subtitle */}
        <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <span className="w-8 h-px bg-accent/60" />
          <span className="font-mono text-sm text-accent">{typed}</span>
          <span className="w-0.5 h-4 bg-accent animate-blink" />
        </div>

        {/* Description */}
        <p className="max-w-md text-muted leading-relaxed mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          Computer sciences student passionate about building{' '}
          <span className="text-fg font-medium">creative and efficient applications</span>.
          Skilled in React, Node.js, and MongoDB — focused on user-friendly, impactful solutions.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-bg font-mono text-xs tracking-widest uppercase font-semibold hover:bg-white transition-colors duration-300"
          >
            View Work ↗
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/10 font-mono text-xs tracking-widest uppercase text-muted hover:text-fg hover:border-white/30 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
        </div>
      </section>

      {/* ══ About ════════════════════════════════════════ */}
      <section id="about" className="px-8 md:px-20 py-32 border-t border-white/5 relative">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-6 h-px bg-accent" />
          <span className="font-mono text-xs tracking-widest uppercase text-accent">About</span>
        </div>

        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight mb-16 reveal">
          BUILT TO<br /><span className="text-gradient">CREATE.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div className="reveal-x space-y-5 text-muted leading-relaxed">
            <p>
              I'm <span className="text-fg font-semibold">Mohamed Amine Hamdi</span>, a motivated
              computer sciences student with a genuine passion for building things that work
              beautifully and efficiently.
            </p>
            <p>
              My stack spans from <span className="text-fg">React and Node.js</span> on the full-stack
              side to <span className="text-fg">Python and AI/ML</span> integrations. I approach every
              project with dedication, simplicity, and precision.
            </p>
            <p>
              My final year project — an{' '}
              <span className="text-accent">AI-powered textile label inspection system</span> — combines
              computer vision, OCR, and modern web APIs. That project defines my approach: solve real
              problems with smart technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {[
              { val: '11+', label: 'Technologies' },
              { val: '6',   label: 'Projects Built' },
              { val: '3+',  label: 'Years Coding' },
              { val: '∞',   label: 'Commits Made' },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`p-6 border border-white/5 bg-bg-2 hover:border-accent/30 transition-all duration-300 group delay-${(i+1)*100}`}
              >
                <div className="font-mono text-4xl font-bold text-accent group-hover:text-white transition-colors">
                  {s.val}
                </div>
                <div className="font-mono text-xs tracking-widest uppercase text-muted mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Skills ════════════════════════════════════════ */}
      <section id="skills" className="px-8 md:px-20 py-32 bg-bg-2 border-t border-b border-white/5">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-6 h-px bg-accent-2" />
          <span className="font-mono text-xs tracking-widest uppercase text-accent-2">Skills</span>
        </div>
        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight mb-16 reveal">
          TOOLS &amp;<br /><span className="text-gradient">WEAPONS.</span>
        </h2>

        <div className="space-y-4 max-w-3xl">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className={`skill-item reveal delay-${Math.min((i % 5 + 1) * 100, 500)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm tracking-wide text-fg">{skill.name}</span>
                <span className="font-mono text-xs text-muted">{skill.level}%</span>
              </div>
              <div className="h-px w-full bg-white/5 relative overflow-hidden">
                <div
                  className="skill-bar-fill h-full"
                  style={{ '--w': `${skill.level}%`, background: skill.color, opacity: 0.8 }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ Projects ══════════════════════════════════════ */}
      <section id="projects" className="px-8 md:px-20 py-32 border-t border-white/5">
        <div className="flex items-center gap-3 mb-4 reveal">
          <span className="w-6 h-px bg-accent" />
          <span className="font-mono text-xs tracking-widest uppercase text-accent">Work</span>
        </div>
        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight mb-16 reveal">
          SELECTED<br /><span className="text-gradient">PROJECTS.</span>
        </h2>

        <div className="space-y-px">
          {PROJECTS.map((p, i) => {
            const inner = (
              <>
                <div className="font-mono text-xs text-muted w-8 shrink-0">{p.num}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-bold text-xl group-hover:text-white transition-colors" style={{ color: p.accent }}>
                      {p.title}
                    </h3>
                    {p.wip && (
                      <span className="flex items-center gap-1.5 font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border"
                        style={{ borderColor: `${p.accent}50`, color: p.accent }}>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: p.accent }} />
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 border border-white/8 text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted border border-white/5 px-3 py-1.5">
                    {p.type}
                  </span>
                  {p.href && (
                    <span className="font-mono text-sm text-muted group-hover:text-fg group-hover:translate-x-1 transition-all duration-300">
                      →
                    </span>
                  )}
                </div>
              </>
            )

            const cls = `project-card group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 border border-white/5 hover:border-white/15 bg-bg-2 hover:bg-bg-3 transition-all duration-300 reveal delay-${Math.min((i % 4 + 1) * 100, 400)} ${p.href ? 'cursor-pointer' : 'cursor-none'}`

            return p.href ? (
              <Link key={p.num} href={p.href} className={cls}>{inner}</Link>
            ) : (
              <div key={p.num} className={cls}>{inner}</div>
            )
          })}
        </div>
      </section>

      {/* ══ Contact ═══════════════════════════════════════ */}
      <section id="contact" className="px-8 md:px-20 py-40 border-t border-white/5 relative overflow-hidden">
        {/* BG glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] rounded-full opacity-[0.05] animate-pulse-glow"
            style={{ background: 'radial-gradient(ellipse, #58c4f5, transparent 70%)' }} />
        </div>

        <div className="relative text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6 reveal">
            <span className="w-6 h-px bg-accent" />
            <span className="font-mono text-xs tracking-widest uppercase text-accent">Contact</span>
            <span className="w-6 h-px bg-accent" />
          </div>

          <h2 className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight mb-8 reveal">
            LET'S<br /><span className="text-gradient">TALK.</span>
          </h2>

          <p className="text-muted leading-relaxed mb-12 reveal">
            Open to internships, freelance projects, and full-time opportunities.
            Let's build something great together.
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap reveal">
            <a
              href="https://www.linkedin.com/in/amine-hamdi-00bb40383/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-bg font-mono text-xs tracking-widest uppercase font-semibold hover:bg-white transition-colors duration-300"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/MEDamine-hamdi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/10 font-mono text-xs tracking-widest uppercase text-muted hover:text-fg hover:border-white/30 transition-all duration-300"
            >
              GitHub ↗
            </a>
            <a
              href="/Mohamed_Amine_Hamdi_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/10 font-mono text-xs tracking-widest uppercase text-muted hover:text-fg hover:border-white/30 transition-all duration-300"
            >
              Download CV ↗
            </a>
          </div>
        </div>
      </section>

      {/* ══ Footer ════════════════════════════════════════ */}
      <footer className="px-8 md:px-20 py-6 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
          © 2024 Amine Hamdi
        </span>
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
          Built with Next.js + Tailwind
        </span>
      </footer>
    </>
  )
}