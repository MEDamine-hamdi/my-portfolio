const Pill = ({ children, variant = "default" }) => {
  const variants = {
    default: "border-white/[0.14] text-[#888885]",
    accent: "border-[rgba(212,240,108,0.3)] text-[#d4f06c]",
    blue: "border-[rgba(108,204,240,0.3)] text-[#6cccf0]",
    red: "border-[rgba(240,108,108,0.3)] text-[#f06c6c]",
  };
  return (
    <span
      className={`font-mono text-[11px] px-[10px] py-[5px] rounded-md border transition-all duration-200 hover:text-[#f0f0ee] hover:border-white/30 ${variants[variant]}`}
    >
      {children}
    </span>
  );
};

const card = "bg-[#111113] border border-white/[0.08] rounded-2xl p-[1.4rem] hover:border-white/[0.14] hover:bg-[#18181b] transition-all duration-200";
const label = "font-mono text-[10px] text-[#888885] tracking-[0.1em] uppercase mb-[0.8rem]";

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <p className="font-mono text-[11px] text-[#888885] tracking-[0.12em] uppercase mb-[1.2rem]">
        // tech stack
      </p>
      <h2 className="text-[1.4rem] font-bold tracking-[-0.03em] mb-5">Skills</h2>

      <div className="grid grid-cols-3 gap-3">

        <div className={card}>
          <p className={label}>Frontend</p>
          <div className="flex flex-wrap gap-2">
            <Pill variant="accent">React</Pill>
            <Pill variant="red">Angular</Pill>
            <Pill variant="accent">JavaScript</Pill>
            <Pill>HTML / CSS</Pill>
            <Pill>Android</Pill>
          </div>
        </div>

        <div className={card}>
          <p className={label}>Backend</p>
          <div className="flex flex-wrap gap-2">
            <Pill variant="blue">Node.js</Pill>
            <Pill variant="blue">Express</Pill>
            <Pill variant="red">Spring Boot</Pill>
            <Pill variant="blue">FastAPI</Pill>
            <Pill>PHP</Pill>
          </div>
        </div>

        <div className={card}>
          <p className={label}>Databases</p>
          <div className="flex flex-wrap gap-2">
            <Pill>MongoDB</Pill>
            <Pill variant="red">SQL</Pill>
            <Pill>PostgreSQL</Pill>
            <Pill>MySQL</Pill>
          </div>
        </div>

        <div className={`${card} col-span-2`}>
          <p className={label}>Languages</p>
          <div className="flex flex-wrap gap-2">
            <Pill variant="accent">JavaScript</Pill>
            <Pill variant="accent">TypeScript</Pill>
            <Pill variant="red">Java</Pill>
            <Pill>Python</Pill>
            <Pill>C</Pill>
            <Pill>PHP</Pill>
          </div>
        </div>

        <div className={card}>
          <p className={label}>Interests</p>
          <div className="flex flex-col gap-[6px]">
            <span className="font-mono text-[11px] text-[#888885]">→ Enterprise Systems</span>
            <span className="font-mono text-[11px] text-[#888885]">→ Computer Vision / AI</span>
            <span className="font-mono text-[11px] text-[#888885]">→ SaaS Products</span>
          </div>
        </div>

      </div>
    </section>
  );
}
