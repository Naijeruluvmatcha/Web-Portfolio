import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center border-b-2 border-border px-[5vw] py-24 text-center">
      <div className="text-sm font-bold uppercase tracking-[0.15em] text-accent">
        Error 404
      </div>
      <h1 className="mt-6 text-[clamp(3rem,14vw,8rem)] font-bold uppercase leading-[0.85] tracking-[-0.03em]">
        Not Found
      </h1>
      <p className="mt-6 max-w-[40ch] text-[clamp(1rem,2vw,1.2rem)] font-semibold leading-relaxed text-muted-fg">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-10 border-2 border-accent bg-accent px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-accent-fg no-underline transition-transform duration-200 ease-in-out motion-safe:hover:scale-105 motion-safe:active:scale-95"
      >
        Back to Homepage
      </Link>
    </section>
  );
}
