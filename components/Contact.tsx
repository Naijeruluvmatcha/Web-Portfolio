"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CONTACTS = [
  {
    label: "Email",
    value: "nigelkok3329@gmail.com",
    href: "mailto:nigelkok3329@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="6" width="18" height="12" rx="0" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "019-860 8665",
    href: "tel:+60198608665",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 4h4l1.5 5-2.5 1.5c1 3 3 5 6 6L15.5 14l5 1.5V19c0 1-1 2-2 2C11.5 21 3 12.5 3 6c0-1 1-2 2-2z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/Naijeruluvmatcha",
    href: "https://github.com/Naijeruluvmatcha",
    variant: "fill" as const,
    icon: (
      <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nigel-kok-a512583b3",
    href: "https://www.linkedin.com/in/nigel-kok-a512583b3",
    variant: "fill" as const,
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.25h-3v-5.5c0-1.381-.112-2.623-2-2.623-1.887 0-2.171 1.146-2.171 2.537v5.586h-3v-11h2.842v1.522h.034c.396-.745 1.35-1.522 2.807-1.522 3.034 0 3.621 1.988 3.621 4.577v6.423z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "instagram.com/naijeru03",
    kind: "modal" as const,
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "wa.me/60198608665",
    href: "https://wa.me/60198608665",
    variant: "fill" as const,
    icon: (
      <svg viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
      </svg>
    ),
  },
];

const iconButtonClass =
  "group flex h-25 w-25 flex-col items-center justify-center gap-2 border-2 border-border bg-transparent transition-colors duration-200 hover:border-accent hover:bg-accent active:border-accent active:bg-accent";

function ContactButtonContent({
  icon,
  label,
  isFill,
}: {
  icon: React.ReactNode;
  label: string;
  isFill: boolean;
}) {
  return (
    <>
      <span
        className={`flex h-8 w-8 items-center justify-center text-accent transition-colors duration-200 group-hover:text-accent-fg group-active:text-accent-fg ${
          isFill
            ? "[&_svg]:h-full [&_svg]:w-full [&_svg]:fill-current"
            : "[&_svg]:h-full [&_svg]:w-full [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.6] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]"
        }`}
      >
        {icon}
      </span>
      <p className="m-0 text-[0.7rem] font-bold uppercase tracking-[0.05em] text-muted-fg transition-colors duration-200 group-hover:text-accent-fg group-active:text-accent-fg">
        {label}
      </p>
    </>
  );
}

export default function Contact() {
  const [qrOpen, setQrOpen] = useState(false);

  useEffect(() => {
    if (!qrOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQrOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [qrOpen]);

  return (
    <section
      id="contact"
      className="border-b-2 border-border px-[5vw] py-24"
    >
      <div className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-muted-fg">
        05 / Contact
      </div>
      <h2 className="text-[clamp(2.5rem,8vw,6rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em]">
        Let&apos;s talk
      </h2>
      <div className="mt-10 flex flex-wrap gap-4">
        {CONTACTS.map((contact) => {
          const isFill = contact.variant === "fill";

          if (contact.kind === "modal") {
            return (
              <button
                key={contact.label}
                type="button"
                onClick={() => setQrOpen(true)}
                aria-haspopup="dialog"
                aria-label={`${contact.label}: ${contact.value}`}
                className={iconButtonClass}
              >
                <ContactButtonContent
                  icon={contact.icon}
                  label={contact.label}
                  isFill={isFill}
                />
              </button>
            );
          }

          const isExternal = contact.href.startsWith("http");
          return (
            <a
              key={contact.label}
              href={contact.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener" : undefined}
              aria-label={`${contact.label}: ${contact.value}`}
              className={iconButtonClass}
            >
              <ContactButtonContent
                icon={contact.icon}
                label={contact.label}
                isFill={isFill}
              />
            </a>
          );
        })}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-2 border-border p-6">
        <span className="text-xs uppercase tracking-[0.1em] text-muted-fg">
          Based in
        </span>
        <span className="text-xl font-bold uppercase text-accent">
          Kuala Lumpur, Malaysia
        </span>
      </div>

      <div
        onClick={() => setQrOpen(false)}
        aria-hidden={!qrOpen}
        className={`fixed inset-0 z-50 flex items-center justify-center bg-bg/95 p-6 transition-opacity duration-200 ${
          qrOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Instagram QR code"
          onClick={(e) => e.stopPropagation()}
          className={`relative flex flex-col items-center gap-6 rounded-[3rem] border-2 border-border bg-muted px-12 py-14 transition-[transform,opacity] duration-200 ease-out ${
            qrOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => setQrOpen(false)}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center border-2 border-border bg-bg text-fg transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-accent-fg active:border-accent active:bg-accent active:text-accent-fg"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-none stroke-current stroke-[2] [stroke-linecap:round]"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <Image
            src="/instagram-qr.png"
            alt="Instagram QR code for @naijeru03"
            width={240}
            height={240}
            unoptimized
            className="h-[clamp(180px,50vw,240px)] w-[clamp(180px,50vw,240px)]"
          />
          <p className="m-0 text-xs font-bold uppercase tracking-[0.15em] text-muted-fg">
            @naijeru03
          </p>
        </div>
      </div>
    </section>
  );
}
