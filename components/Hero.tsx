"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mediaQuery.matches;
    const onChange = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;
    };
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, (progress) =>
    reducedMotionRef.current ? 1 : 1 + Math.min(progress, 0.2) * (0.2 / 0.2)
  );
  const fadeOpacity = useTransform(scrollYProgress, (progress) =>
    reducedMotionRef.current ? 1 : 1 - Math.min(progress, 0.2) / 0.2
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b-2 border-border"
    >
      {/* Desktop / tablet — full-bleed photo hero, unchanged, md and up */}
      <div className="relative hidden min-h-[88vh] md:block">
        <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
          <Image
            src="/hero-photo.png"
            alt="Nigel Kok Jia Wei"
            fill
            priority
            sizes="100vw"
            className="object-cover object-left opacity-55 xl:object-right"
          />
        </motion.div>
        <motion.div
          className="relative flex h-[88vh] min-h-[80vh] flex-col justify-end px-[5vw] py-12 max-[800px]:h-auto"
          style={{ opacity: fadeOpacity }}
        >
          <div className="mb-6 text-sm font-bold uppercase tracking-[0.15em] text-accent">
            Cloud Engineering · Kuala Lumpur
          </div>
          <h1 className="text-[clamp(2.4rem,10vw,7.5rem)] font-bold uppercase leading-[0.82] tracking-[-0.03em]">
            <AnimatedGradientText speed={2} colorFrom="#DFE104" colorTo="#FAFAFA">
              Nigel Kok
              <br />
              Jia Wei
            </AnimatedGradientText>
          </h1>
          <p className="mt-6 max-w-[40ch] text-[clamp(1rem,2vw,1.4rem)] font-semibold leading-relaxed text-accent-fg">
            Cloud Engineering undergraduate building resilient, automated
            infrastructure. Currently based in Kuala Lumpur, open to
            relocate.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="border-2 border-accent bg-accent px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-accent-fg no-underline transition-transform duration-200 ease-in-out motion-safe:hover:scale-105 motion-safe:active:scale-95"
            >
              View Projects
            </a>
            <a
              href="/NIGELKOK_RESUME.pdf"
              download="Nigel-Kok-Resume.pdf"
              className="border-2 border-border bg-bg px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-fg no-underline transition-[transform,background-color,border-color,color] duration-200 ease-in-out hover:border-fg hover:bg-fg hover:text-accent-fg active:border-fg active:bg-fg active:text-accent-fg motion-safe:hover:scale-105 motion-safe:active:scale-95"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Mobile — centered avatar layout, below md only */}
      <div className="flex flex-col items-center px-6 py-16 text-center md:hidden">
        <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full">
          <Image
            src="/mobile-avatar.png"
            alt="Nigel Kok Jia Wei"
            fill
            priority
            sizes="150px"
            className="object-cover"
          />
        </div>
        <div className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-accent">
          Cloud Engineering · Kuala Lumpur
        </div>
        <p className="mt-4 text-[clamp(2.2rem,11vw,3.2rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em]">
          <AnimatedGradientText speed={2} colorFrom="#DFE104" colorTo="#FAFAFA">
            Nigel Kok
            <br />
            Jia Wei
          </AnimatedGradientText>
        </p>
        <p className="mt-4 max-w-[38ch] text-[1rem] font-semibold leading-relaxed text-fg">
          Cloud Engineering undergraduate building resilient, automated
          infrastructure. Currently based in Kuala Lumpur, open to relocate.
        </p>
        <div className="mt-6 flex w-full max-w-sm flex-row gap-3">
          <a
            href="#projects"
            className="flex-1 border-2 border-accent bg-accent px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-accent-fg no-underline transition-transform duration-200 ease-in-out motion-safe:hover:scale-105 motion-safe:active:scale-95"
          >
            View Projects
          </a>
          <a
            href="/NIGELKOK_RESUME.pdf"
            download="Nigel-Kok-Resume.pdf"
            className="flex-1 border-2 border-border bg-bg px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-fg no-underline transition-[transform,background-color,border-color,color] duration-200 ease-in-out hover:border-fg hover:bg-fg hover:text-accent-fg active:border-fg active:bg-fg active:text-accent-fg motion-safe:hover:scale-105 motion-safe:active:scale-95"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
