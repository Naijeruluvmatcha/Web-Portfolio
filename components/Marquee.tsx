"use client";

import FastMarquee from "react-fast-marquee";

const ITEMS = [
  "Cloud Engineering",
  "Networking",
  "React / TypeScript",
  "Infrastructure Design",
];

function MarqueeItems() {
  return (
    <>
      {ITEMS.map((item) => (
        <span key={item} className="mx-6 inline-flex items-center gap-x-12 whitespace-nowrap lg:mx-10">
          <span className="text-lg font-bold uppercase tracking-wide text-accent-fg">
            {item}
          </span>
          <span className="text-lg font-bold text-accent-fg" aria-hidden="true">
            ★
          </span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-b-2 border-border bg-accent py-4">
      <div className="hidden motion-safe:block">
        <FastMarquee
          speed={40}
          gradient={false}
          pauseOnHover={false}
          pauseOnClick={false}
          autoFill
        >
          <MarqueeItems />
        </FastMarquee>
      </div>
      <div className="hidden flex-wrap items-center justify-center gap-x-12 gap-y-2 px-[5vw] motion-reduce:flex">
        <MarqueeItems />
      </div>
    </div>
  );
}
