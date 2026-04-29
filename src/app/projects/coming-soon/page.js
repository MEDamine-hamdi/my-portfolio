import Link from "next/link";

export const metadata = {
  title: "Coming Soon — Amine Hamdi",
};

export default function ComingSoonPage() {
  return (
    <div className="bg-[#0a0a0b] text-[#f0f0ee] min-h-screen font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 h-14 bg-[rgba(10,10,11,0.92)] backdrop-blur-md border-b border-white/[0.08]">
        <Link
          href="/"
          className="font-mono text-[13px] text-[#d4f06c] tracking-[0.05em] hover:text-[#c6e55e] transition-colors"
        >
          ← amine.dev
        </Link>
        <span className="font-mono text-[11px] text-[#888885] tracking-[0.08em]">
          projects
        </span>
      </nav>

      <div className="max-w-[760px] mx-auto px-6 py-24 flex flex-col items-center text-center">

        {/* Icon */}
        <div className="text-5xl mb-6">🚧</div>

        {/* Label */}
        <p className="font-mono text-[11px] text-[#888885] tracking-[0.12em] uppercase mb-4">
          // coming soon
        </p>

        <h1 className="text-[2rem] font-bold tracking-[-0.03em] mb-4">
          Project in Progress
        </h1>

        <p className="text-[0.95rem] text-[#888885] leading-[1.75] max-w-[440px] mb-10">
          This project is currently being built using Angular, Spring Boot, and SQL.
          Check back soon — it&apos;ll be up here when it&apos;s ready.
        </p>

        {/* Stack preview */}
        <div className="flex gap-2 flex-wrap justify-center mb-12">
          {["Angular", "Spring Boot", "SQL", "Java", "REST API"].map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-[10px] py-[5px] rounded-md border border-white/[0.14] text-[#888885]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white/[0.08] mb-10" />

        <Link
          href="/#projects"
          className="font-mono text-[13px] text-[#888885] hover:text-[#d4f06c] transition-colors"
        >
          ← Back to all projects
        </Link>

      </div>
    </div>
  );
}