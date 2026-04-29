import Link from "next/link";

const Tag = ({ children, variant = "default" }) => {
  const variants = {
    default: "border-white/[0.14] text-[#888885]",
    accent: "border-[rgba(212,240,108,0.3)] text-[#d4f06c]",
    blue: "border-[rgba(108,204,240,0.3)] text-[#6cccf0]",
  };
  return (
    <span className={`font-mono text-[11px] px-[10px] py-[5px] rounded-md border ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default function ProjectLayout({ project }) {
  return (
    <div className="bg-[#0a0a0b] text-[#f0f0ee] min-h-screen font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 h-14 bg-[rgba(10,10,11,0.92)] backdrop-blur-md border-b border-white/[0.08]">
        <Link href="/" className="font-mono text-[13px] text-[#d4f06c] tracking-[0.05em] hover:text-[#c6e55e] transition-colors">
          ← amine.dev
        </Link>
        <span className="font-mono text-[11px] text-[#888885] tracking-[0.08em]">
          projects
        </span>
      </nav>

      <div className="max-w-[760px] mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[11px] text-[#888885] tracking-[0.12em] uppercase mb-4">
            // {project.category}
          </p>
          <h1 className="text-[2.2rem] font-bold leading-[1.1] tracking-[-0.03em] mb-4">
            {project.title}
          </h1>
          <p className="text-[1rem] text-[#888885] leading-[1.75] max-w-[600px]">
            {project.summary}
          </p>
        </div>

        {/* Meta row */}
        <div className="grid grid-cols-3 gap-3 mb-12">
          {project.meta.map((m) => (
            <div key={m.label} className="bg-[#111113] border border-white/[0.08] rounded-2xl p-5">
              <p className="font-mono text-[10px] text-[#888885] tracking-[0.1em] uppercase mb-2">{m.label}</p>
              <p className="text-[0.9rem] font-medium">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="mb-10">
          <p className="font-mono text-[11px] text-[#888885] tracking-[0.12em] uppercase mb-4">// stack</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <Tag key={s.name} variant={s.variant || "default"}>{s.name}</Tag>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.08] mb-10" />

        {/* Features */}
        <div className="mb-10">
          <p className="font-mono text-[11px] text-[#888885] tracking-[0.12em] uppercase mb-5">// features</p>
          <div className="grid grid-cols-2 gap-3">
            {project.features.map((f) => (
              <div key={f.title} className="bg-[#111113] border border-white/[0.08] rounded-2xl p-5 hover:border-white/[0.14] transition-colors">
                <p className="font-mono text-[10px] text-[#d4f06c] mb-2">{f.icon}</p>
                <p className="text-[0.9rem] font-semibold mb-1">{f.title}</p>
                <p className="text-[0.8rem] text-[#888885] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <div className="flex gap-3 flex-wrap">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg font-mono text-[13px] font-medium transition-all"
                style={
                  l.primary
                    ? { background: "#d4f06c", color: "#0a0a0b" }
                    : { color: "#888885", border: "1px solid rgba(255,255,255,0.14)" }
                }
              >
                {l.label} {l.primary ? "↗" : "→"}
              </a>
            ))}
          </div>
        )}

        {/* Back */}
        <div className="mt-16 pt-8 border-t border-white/[0.08]">
          <Link
            href="/#projects"
            className="font-mono text-[13px] text-[#888885] hover:text-[#d4f06c] transition-colors"
          >
            ← Back to all projects
          </Link>
        </div>

      </div>
    </div>
  );
}