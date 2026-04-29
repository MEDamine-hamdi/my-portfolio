const Tag = ({ children }) => (
  <span className="font-mono text-[10px] px-2 py-[3px] rounded-[5px] bg-[#18181b] text-[#888885] border border-white/[0.08]">
    {children}
  </span>
);

const experiences = [
  {
    title: "Software Engineering Intern",
    sub: "Telecom Company — Built internal contract management system from scratch",
    tags: ["PHP", "SQL", "Web"],
    date: "2024",
    color: "#d4f06c",
  },
  {
    title: "Final Year Project — AI Vision System",
    sub: "University — AI pipeline for textile label detection using computer vision and OCR",
    tags: ["FastAPI", "Node.js", "Python", "OpenCV"],
    date: "2024 → 2025",
    color: "#6cccf0",
  },
];

export default function Experience() {
  return (
    <section className="mb-12">
      <p className="font-mono text-[11px] text-[#888885] tracking-[0.12em] uppercase mb-[1.2rem]">
        // experience
      </p>
      <h2 className="text-[1.4rem] font-bold tracking-[-0.03em] mb-2">
        Work Experience
      </h2>

      <div className="flex flex-col">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="flex gap-5 py-5 border-b border-white/[0.08] first:border-t first:border-white/[0.08]"
          >
            <div
              className="w-2 h-2 rounded-full mt-[6px] flex-shrink-0"
              style={{ background: exp.color }}
            />
            <div className="flex-1">
              <p className="text-[0.95rem] font-semibold">{exp.title}</p>
              <p className="text-[0.8rem] text-[#888885] mt-[2px]">{exp.sub}</p>
              <div className="flex flex-wrap gap-[6px] mt-3">
                {exp.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <p className="font-mono text-[10px] text-[#888885] mt-2">{exp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
