"use client";

import Image from "next/image";
import FastMarquee from "react-fast-marquee";

const CERT_IMAGES = [
  {
    src: "/certs/my5g-badge-transparent-v2.png",
    alt: "MY5G Ericsson Malaysia Pioneers Programme badge",
    width: 600,
    height: 600,
  },
  {
    src: "/certs/my5g-module-01.png",
    alt: "MY5G Ericsson Malaysia Pioneers Programme — Module 01 completion certificate",
    width: 1175,
    height: 1586,
  },
  {
    src: "/certs/my5g-module-02.png",
    alt: "MY5G Ericsson Malaysia Pioneers Programme — Module 02 completion certificate",
    width: 1175,
    height: 1586,
  },
  {
    src: "/certs/my5g-module-03.png",
    alt: "MY5G Ericsson Malaysia Pioneers Programme — Module 03 completion certificate",
    width: 1175,
    height: 1586,
  },
  {
    src: "/certs/chutes-workshop-cert.png",
    alt: "Plug-and-Play AI: Building Applications with Chutes.ai workshop certificate",
    width: 2339,
    height: 1653,
  },
];

function CertItems() {
  return (
    <>
      {CERT_IMAGES.map((cert, index) => (
        <Image
          key={cert.src + index}
          src={cert.src}
          alt={cert.alt}
          width={cert.width}
          height={cert.height}
          className="mx-2 inline-block h-[220px] w-auto shrink-0 border-2 border-border bg-bg object-contain lg:mx-3"
        />
      ))}
    </>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b-2 border-border px-[5vw] py-24"
    >
      <div className="mb-8 text-sm font-bold uppercase tracking-[0.15em] text-muted-fg">
        04 / Certifications
      </div>
      <div className="overflow-hidden border-y-2 border-border bg-bg py-6">
        <div className="hidden motion-safe:block">
          <FastMarquee
            speed={40}
            gradient={false}
            pauseOnHover={false}
            pauseOnClick={false}
            autoFill
          >
            <CertItems />
          </FastMarquee>
        </div>
        <div className="hidden flex-wrap items-center justify-center gap-3 px-[5vw] motion-reduce:flex">
          <CertItems />
        </div>
      </div>
      <p className="mt-8 text-[0.95rem] leading-relaxed text-muted-fg">
        Cisco Networking Academy — Python Essentials, Linux Essentials, CCNA
        (in progress)
      </p>
    </section>
  );
}
