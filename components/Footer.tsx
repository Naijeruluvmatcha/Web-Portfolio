"use client";

import { useEffect, useState } from "react";

const VISITOR_COUNT_URL =
  "https://dj1nlgjgp2.execute-api.us-east-1.amazonaws.com/count";

export default function Footer() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(VISITOR_COUNT_URL)
      .then((res) => {
        if (!res.ok) throw new Error("bad response");
        return res.json();
      })
      .then((data: { count?: unknown }) => {
        if (!cancelled && typeof data.count === "number") {
          setCount(data.count);
        }
      })
      .catch(() => {
        // fail silently — no visitor count is shown
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <footer className="px-[5vw] py-8 text-center text-sm uppercase tracking-wide text-muted-fg">
      © 2026 Nigel Kok Jia Wei
      {count !== null && (
        <span> · {count.toLocaleString()} visitors</span>
      )}
    </footer>
  );
}
