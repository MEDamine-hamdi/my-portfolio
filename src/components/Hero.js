import Link from "next/link";

export default function Hero() {
  return (
    <section id="about" className="relative pt-16 pb-12 overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,240,108,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Tag */}
      <div className="fade-up fade-up-delay-1 flex items-center gap-2 font-mono text-[11px] text-[#d4f06c] tracking-[0.12em] uppercase mb-5">
        <span className="block w-5 h-px bg-[#d4f06c]" />
        Available for work&nbsp;
        <span className="pulse-dot inline-block w-[7px] h-[7px] rounded-full bg-[#4ade80]" />
      </div>

      {/* Heading */}
      <h1 className="fade-up fade-up-delay-2 font-bold leading-[1.05] tracking-[-0.03em] mb-6"
        style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)" }}
      >
        Hi, I&apos;m
        <br />
        <span className="text-[#888885]">Amine Hamdi</span>
      </h1>

      {/* Description */}
      <p className="fade-up fade-up-delay-3 text-[#888885] text-[1.05rem] leading-[1.75] max-w-[580px] mb-8">
        Full-stack developer currently pursuing an Engineering degree in
        Computer Science. I build real products — from MERN web apps and
        enterprise Java systems to AI-powered computer vision pipelines.
        Clean architecture, practical solutions, things that actually ship.
      </p>

      {/* Actions */}
      <div className="fade-up fade-up-delay-4 flex gap-4 flex-wrap">
        <a
          href="/Mohamed_Amine_Hamdi_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg font-mono text-[13px] font-medium bg-[#d4f06c] text-[#0a0a0b] hover:bg-[#c6e55e] transition-colors"
        >
          Download CV ↓
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 py-[10px] rounded-lg font-mono text-[13px] font-medium text-[#888885] border border-white/[0.14] hover:text-[#f0f0ee] hover:border-white/30 transition-all"
        >
          Hire Me →
        </a>
      </div>
    </section>
  );
}
