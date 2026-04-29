'use client'

import Link from 'next/link'

export default function ComingSoon({ project }) {
  return (
    <>
      <div className="noise-layer" />

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5">
        <Link href="/" className="font-mono text-accent font-medium tracking-widest text-sm hover:text-white transition-colors">
          ← &lt;AH /&gt;
        </Link>
      </nav>

      {/* Full-screen coming soon */}
      <main className="min-h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden">
        {/* BG glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[400px] rounded-full opacity-[0.06]"
            style={{ background: `radial-gradient(ellipse, ${project.accent}, transparent 70%)` }} />
        </div>
        <div className="grid-bg absolute inset-0 opacity-30" />

        <div className="relative text-center max-w-xl">
          {/* Number */}
          <div className="font-mono text-xs tracking-widest uppercase mb-6 flex items-center justify-center gap-3">
            <span className="text-muted">{project.num}</span>
            <span className="w-px h-3 bg-muted/30" />
            <span style={{ color: project.accent }}>{project.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight mb-6"
            style={{ color: project.accent }}>
            {project.title}
          </h1>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border mb-8"
            style={{ borderColor: `${project.accent}40` }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: project.accent }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.accent }}>
              In Progress
            </span>
          </div>

          <p className="text-muted leading-relaxed mb-10">
            {project.desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {project.tags.map(t => (
              <span key={t} className="font-mono text-[10px] tracking-widest uppercase px-3 py-1.5 border border-white/10 text-muted">
                {t}
              </span>
            ))}
          </div>

          <Link
            href="/#projects"
            className="font-mono text-xs tracking-widest uppercase text-muted hover:text-fg transition-colors border-b border-muted/30 pb-0.5"
          >
            ← Back to all projects
          </Link>
        </div>
      </main>
    </>
  )
}