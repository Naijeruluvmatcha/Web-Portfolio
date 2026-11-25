import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        padding: "0 24px",
        textAlign: "center",
        position: "relative",
        zIndex: 3,
      }}
    >
      <p style={{ font: "500 13px var(--mono)", letterSpacing: ".15em", color: "var(--accent)", margin: 0 }}>
        ERROR 404
      </p>
      <h1 style={{ font: "700 clamp(40px, 10vw, 88px)/1 var(--mono)", margin: 0 }}>Wrong door.</h1>
      <p style={{ maxWidth: "40ch", margin: 0, color: "var(--muted)" }}>
        This page doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn">
        Back to the pagoda
      </Link>
    </main>
  );
}
