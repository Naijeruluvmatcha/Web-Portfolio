import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

const SECTIONS = ["about", "projects", "skills", "certifications", "contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...SECTIONS.map((section) => ({
      url: `${SITE_URL}/#${section}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
