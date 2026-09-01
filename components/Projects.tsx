const PROJECTS = [
  {
    tag: "Vanilla JS · Supabase",
    title: "PESAWI 2026 Live Scoreboard",
    description:
      "Live scoring site for a 5-zone, 9-sport inter-region festival. Public + admin views, real-time standings.",
  },
  {
    tag: "Network Design",
    title: "Cloud Data Centre Infrastructure",
    description:
      "Multi-tenant cloud architecture — 7-layer network topology, dual server halls, multi-ISP redundancy.",
  },
  {
    tag: "React · TypeScript · Vite",
    title: "ICT & OSH Staff Portal",
    description:
      "Role-based internal ticket portal for Yayasan Sabah, ported to a full React + TypeScript app.",
  },
  {
    tag: "React · Tailwind · Figma",
    title: "Oval Damansara Tower Suites",
    description:
      "Corporate property site rebuild — tenant directory, events calendar, PDPA-compliant forms.",
  },
];

const MORE_PROJECTS = [
  "GogoCoffee — Java Concurrency",
  "KODOMO — ASP.NET E-learning",
  "Hotel Reservation — UML Design",
];

export default function Projects() {
  return (
    <section id="projects" className="border-b-2 border-border px-[5vw] py-24">
      <div className="mb-8 text-sm font-bold uppercase tracking-[0.15em] text-muted-fg">
        02 / Featured Projects
      </div>
      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group sticky top-32 flex min-h-[60vh] cursor-pointer flex-col justify-center border-2 border-border bg-bg p-8 transition-colors duration-300 hover:border-accent hover:bg-accent active:border-accent active:bg-accent md:p-12"
          >
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-fg transition-colors duration-300 group-hover:text-accent-fg group-active:text-accent-fg">
              {project.tag}
            </div>
            <h3 className="mb-3 text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold uppercase transition-colors duration-300 group-hover:text-accent-fg group-active:text-accent-fg">
              {project.title}
            </h3>
            <p className="text-[0.95rem] leading-relaxed text-muted-fg transition-colors duration-300 group-hover:text-accent-fg group-active:text-accent-fg">
              {project.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-6">
        {MORE_PROJECTS.map((item) => (
          <span
            key={item}
            className="border-2 border-border px-5 py-2 text-sm uppercase tracking-wide text-muted-fg"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
