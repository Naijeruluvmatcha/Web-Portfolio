import type { Metadata, Viewport } from "next";

import "./pagoda.css";

import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nigel Kok — Portfolio",
  description:
    "Cloud Engineering undergraduate building resilient, automated infrastructure. Based in Kuala Lumpur.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const FONTS = [
  "https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400;500;600;700&display=swap",
  "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@700&text=%E9%9B%B2%E5%A1%94&display=swap",
  "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&text=%E9%83%AD%E4%BA%AB%E9%83%A8%E5%9B%BD%E7%94%B0%E9%83%BD%E5%AD%97%E5%9B%9E%E9%83%8A&display=swap",
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        {FONTS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
