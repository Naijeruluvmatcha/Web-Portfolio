const SKILLS = [
  {
    title: "Languages & Frameworks",
    description:
      "Java, C#, ASP.NET, JavaScript, TypeScript, Node.js, React, SQL, MySQL",
  },
  {
    title: "Networking",
    description:
      "TCP/IP, subnetting, VLANs, LAN/WAN troubleshooting, Cisco IOS",
  },
  {
    title: "Infrastructure & Cloud",
    description:
      "Multi-tenant cloud architecture, network topology design, Linux CLI",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-b-2 border-border px-[5vw] py-24">
      <div className="mb-8 text-sm font-bold uppercase tracking-[0.15em] text-muted-fg">
        03 / Skills
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {SKILLS.map((skill) => (
          <div key={skill.title}>
            <h4 className="mb-3 text-sm font-bold uppercase tracking-[0.1em] text-accent">
              {skill.title}
            </h4>
            <p className="text-[0.95rem] leading-relaxed text-muted-fg">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
