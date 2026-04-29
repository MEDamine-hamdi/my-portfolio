import Link from "next/link";

const Tag = ({ children }) => (
  <span className="font-mono text-[10px] px-2 py-[3px] rounded-[5px] bg-[#18181b] text-[#888885] border border-white/[0.08]">
    {children}
  </span>
);

const projects = [
  {
    title: "Real Estate Management Platform",
    desc: "Full-stack MERN platform for listing, browsing, and managing real estate properties. Includes REST APIs, search filters, and a MongoDB-backed data layer.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    href: "/projects/real-estate",
  },
  {
    title: "Hotel Room Booking Platform",
    desc: "End-to-end hotel booking system with room availability management, reservation flows, and an admin dashboard for managing bookings and guests.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    href: "./projects/hotel-booking",
  },
];

const emptySlots = [
  { href: "/projects/coming-soon?project=1" },
  { href: "/projects/coming-soon?project=2" },
  { href: "/projects/coming-soon?project=3" },
  { href: "/projects/coming-soon?project=4" },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <p className="font-mono text-[11px] text-[#888885] tracking-[0.12em] uppercase mb-[1.2rem]">
        // projects
      </p>
      <h2 className="text-[1.4rem] font-bold tracking-[-0.03em] mb-5">
        What I&apos;ve Built
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {/* Real projects */}
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.href}
            className="group bg-[#111113] border border-white/[0.08] rounded-2xl p-[1.4rem] flex flex-col gap-3 hover:border-white/[0.2] hover:bg-[#18181b] transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-[0.95rem] font-semibold tracking-[-0.01em] group-hover:text-[#d4f06c] transition-colors duration-200">
                {p.title}
              </span>
              <span className="text-[#888885] text-base flex-shrink-0 group-hover:text-[#d4f06c] group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-200">
                ↗
              </span>
            </div>
            <p className="text-[0.8rem] text-[#888885] leading-[1.65]">{p.desc}</p>
            <div className="flex flex-wrap gap-[6px]">
              {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </Link>
        ))}

        {/* Empty slots */}
        {emptySlots.map((slot, i) => (
          <Link
            key={i}
            href={slot.href}
            className="group bg-[#111113] border border-dashed border-white/[0.08] rounded-2xl p-[1.4rem] flex items-center justify-center min-h-[160px] opacity-50 hover:opacity-80 hover:border-white/20 transition-all duration-200"
          >
            <div className="text-center">
              <div className="text-2xl mb-2">🚧</div>
              <p className="font-mono text-[11px] text-[#888885] group-hover:text-[#d4f06c] transition-colors">
                Coming soon
              </p>
              <div className="flex gap-[6px] justify-center flex-wrap mt-3">
                <Tag>Angular</Tag>
                <Tag>Spring Boot</Tag>
                <Tag>SQL</Tag>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}