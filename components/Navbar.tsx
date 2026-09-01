export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-border bg-bg px-[5vw] py-6">
      <div className="text-base font-bold uppercase tracking-tight">NK.</div>
      <div className="hidden gap-8 text-sm uppercase tracking-widest text-muted-fg md:flex">
        <a
          href="#about"
          className="transition-colors duration-200 hover:text-accent active:text-accent"
        >
          About
        </a>
        <a
          href="#projects"
          className="transition-colors duration-200 hover:text-accent active:text-accent"
        >
          Projects
        </a>
        <a
          href="#skills"
          className="transition-colors duration-200 hover:text-accent active:text-accent"
        >
          Skills
        </a>
        <a
          href="#certifications"
          className="transition-colors duration-200 hover:text-accent active:text-accent"
        >
          Certifications
        </a>
        <a
          href="#contact"
          className="transition-colors duration-200 hover:text-accent active:text-accent"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
