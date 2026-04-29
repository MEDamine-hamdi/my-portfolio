const card = "bg-[#111113] border border-white/[0.08] rounded-2xl p-[1.4rem] hover:border-white/[0.14] hover:bg-[#18181b] transition-all duration-200";
const label = "font-mono text-[10px] text-[#888885] tracking-[0.1em] uppercase mb-[0.6rem]";

export default function About() {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-3 gap-3">

        {/* Wide: who I am */}
        <div className={`${card} col-span-2`}>
          <p className={label}>Who I am</p>
          <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] mb-[0.4rem]">
            Software Engineer in Training
          </h3>
          <p className="text-[0.82rem] text-[#888885] leading-[1.65]">
            I build full-stack applications across the MERN stack and the
            Angular + Spring Boot + SQL ecosystem. Whether it&apos;s a
            real-time booking platform, an enterprise management system, or
            an AI vision pipeline — I like taking things from idea to working
            product.
          </p>
        </div>

        {/* Education */}
        <div className={`${card} flex flex-col justify-between`}>
          <p className={label}>Education</p>
          <div>
            <h3 className="text-[0.9rem] font-semibold">Engineering Degree</h3>
            <p className="text-[0.78rem] text-[#888885] mt-1">Computer Science</p>
            <div className="inline-flex items-center gap-[6px] font-mono text-[10px] text-[#d4f06c] bg-[rgba(212,240,108,0.08)] border border-[rgba(212,240,108,0.2)] rounded-md px-[10px] py-1 mt-3">
              <span className="pulse-dot inline-block w-[5px] h-[5px] rounded-full bg-[#d4f06c]" />
              Currently enrolled
            </div>
          </div>
        </div>

        {/* Focus */}
        <div className={card}>
          <p className={label}>Focus</p>
          <div className="flex flex-col gap-[6px] mt-1">
            <span className="font-mono text-[11px] text-[#d4f06c]">→ Full-Stack Web Dev</span>
            <span className="font-mono text-[11px] text-[#6cccf0]">→ Enterprise Java Apps</span>
            <span className="font-mono text-[11px] text-[#f06c6c]">→ AI / Computer Vision</span>
          </div>
        </div>

        {/* Location */}
        <div className={card}>
          <p className={label}>Location</p>
          <div className="text-[1.8rem] mt-1">🇹🇳</div>
          <p className="mt-[6px] text-[0.9rem]">Tunisia</p>
          <p className="text-[0.78rem] text-[#888885] mt-1">Open to remote work</p>
        </div>

        {/* Projects count */}
        <div className={card}>
          <p className={label}>Projects Built</p>
          <div className="text-[2.8rem] font-bold tracking-[-0.04em] text-[#d4f06c] leading-none mt-1">6+</div>
          <p className="text-[0.78rem] text-[#888885] mt-2">MERN, Angular, AI systems</p>
        </div>

      </div>
    </section>
  );
}
