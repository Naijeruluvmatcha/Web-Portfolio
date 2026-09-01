# Portfolio Website — Requirements

## 1. Goal
Build a personal portfolio to showcase projects and accomplishments, targeting **Cloud Engineer** roles. Primary audience: recruiters and technical interviewers evaluating you for cloud/infrastructure positions. Secondary use: a personal hub you can point people to instead of a resume PDF alone.

## 2. Positioning
Because the target role is specifically Cloud Engineer, the site should do double duty: it should look distinctive, and *how it's built and deployed* should itself be a small signal of cloud competency (see Section 5, Deployment).

## 3. Content Sections
1. **Hero** — name, a one-line positioning statement (e.g. "Cloud Engineer building resilient, automated infrastructure"), short subtext
2. **About** — who you are, what you're working toward, a little personality
3. **Skills** — grouped, based on your actual resume skills:
   - Languages & Frameworks: Java, C#, ASP.NET, JavaScript, TypeScript, Node.js, React, SQL, MySQL
   - Networking: TCP/IP, subnetting, VLANs, LAN/WAN troubleshooting, Cisco IOS (in progress)
   - Infrastructure & Cloud: multi-tenant cloud architecture design, 7-layer network topology, Linux CLI (in progress)
   - Tools: Figma, Git, AI tools, UI/UX design
   - Languages spoken: English, Bahasa Malaysia, Mandarin (conversational)

   Note: your resume doesn't list a specific cloud provider (AWS/Azure/GCP) yet — worth flagging since Cloud Engineer job listings usually ask for one by name. Might be worth picking one to go deep on before you're job-hunting hard.
4. **Projects** — you have 7 real candidates between GitHub and your resume. Recommending a shortlist of 4 for v1 (most relevant to Cloud Engineer + strongest stories), rest as a shorter "More Projects" row:

   **Featured (4):**
   - **PESAWI 2026 — Live Scoreboard**: live scoring site for a real 5-zone, 9-sport inter-region festival (Yayasan Sabah, Oct 2026). Public + admin views, three scoring engines, moving to Supabase for shared live data. Real client, real deadline, real security fix (XSS). Strongest story overall.
   - **Cloud-Based Data Centre Infrastructure Design** (Mar 2026): multi-tenant commercial cloud data centre architecture — 7-layer network topology across dual server halls, multi-ISP redundancy, 3D model of the monitoring room and fire suppression system. Most directly "Cloud Engineer" of everything on your resume.
   - **ICT & OSH Staff Portal — Yayasan Sabah**: internal staff ticket portal, ported from a single-file prototype into Vite + React + TypeScript with Context API. Shows framework/architecture skill.
   - **Oval Damansara Tower Suites — Property Website Rebuild** (Apr–May 2026): real corporate client site rebuilt with React, TypeScript, Tailwind, Vite. Figma-designed UI, tenant directory, PDPA-compliant complaint form. Shows you can take a project end-to-end, design through delivery.

   **More Projects (shorter entries):**
   - GogoCoffee — Java multithreaded café simulation (concurrency, queuing constraints)
   - KODOMO — contributed to an ASP.NET e-learning platform; built a Rewards System feature
   - Hotel Reservation System — UML sequence diagram modeling the booking flow

   None of the featured 4 are deployed publicly yet — portfolio will link to GitHub repos (once public) with screenshots, rather than live demo links, until each ships.
5. **Experience / Education**
   - Education: BSc (Hons) Information Technology — Cloud Engineering, Asia Pacific University (2025–Present, Year 2 Sem 2); Foundation in Arts, Universiti Teknologi Sarawak (2022–2023)
   - Experience: Application UI Developer Intern, Sarawak Pay Global (2023, 1 month) — built UI for a live production fintech app, fixed real bugs in production
   - Internship dates (27 Jul – 15 Nov 2026) live on the resume, not the site — site framing is a general professional introduction, not a job search, per your direction
6. **Certifications**
   - MY5G Ericsson Malaysia Pioneers Programme — Modules 01–03 (2025), via Digital Nasional Berhad & Ericsson
   - Cisco Networking Academy — Python Essentials, Linux Essentials, CCNA (in progress, 2026)
   - "Plug-and-Play AI: Building Applications with Chutes.ai" workshop — APU AI Club (2026)
7. **Contact** — email, GitHub, LinkedIn, resume PDF download

## 4. Tech Stack — Recommendation
The design direction (Section 6) relies on scroll-triggered motion, infinite marquees, and hard hover color-inversions — that calls for a component-based framework rather than plain HTML/CSS/JS.

- **Framework:** Next.js (React) — solid SEO out of the box, static export option, large ecosystem
- **Styling:** Tailwind CSS
- **Motion:** Framer Motion (scroll/hover animation) + react-fast-marquee (marquee sections)
- **Deployment — two options:**
  - *Fastest to get live:* Vercel or Netlify — near zero-config
  - *Cloud-credibility option:* static export deployed via AWS S3 + CloudFront + Route 53 (provisioned with Terraform or CDK) — turns your own site's infrastructure into a genuine interview talking point

Suggestion: launch on Vercel/Netlify first so something is live quickly, then optionally re-deploy via AWS as a documented mini-project ("how I deployed my own portfolio"). That's an authentic, specific story for a Cloud Engineer portfolio — more convincing than just listing "AWS" as a skill.

## 5. Design Direction
**Style: Kinetic Typography** — full token spec is in `DESIGN-SYSTEM.md`. Summary: viewport-scale typography, infinite marquees, acid-yellow (`#DFE104`) on near-black (`#09090B`), 0px border radius, hard color-inversion hovers, all-uppercase display type.

**Worth deciding before building:** this aesthetic is loud by design — "screams rather than whispers." That reads as confident and memorable for creative/frontend-facing roles. For Cloud Engineer specifically, recruiters often skim fast and are hunting for concrete facts (tools, outcomes, scale). My suggestion: keep the full kinetic/brutalist treatment for the hero and section transitions, where it earns its keep as a memorable signature, while keeping the actual project write-ups and skills list calmer and easy to scan — same token system throughout, just dialed back where information density matters more than drama. Your call either way; I can build it fully maximalist or hybrid.

## 6. Non-Functional Requirements
- Fully responsive, mobile-first
- Respects `prefers-reduced-motion` — marquees and scroll animations disabled for users who request it
- Target WCAG AA at minimum. The design system's own contrast figures (e.g. "15:1", "12:1") look plausible for these specific hex pairs, but I haven't verified them myself — run them through a checker (WebAIM contrast checker or axe DevTools) before launch rather than trusting the numbers as given.
- Fast load: keep marquee/animation libraries lean, lazy-load below-the-fold content
- Basic SEO: per-page title/meta description, Open Graph image, sitemap.xml

## 7. Pages / Deliverables (v1)
- Home (Hero + About + Skills + featured projects + marquee stat strip)
- Projects (detail view per project)
- Contact (with resume PDF link)

## 8. Out of Scope (v1)
- CMS / blog
- Backend or authentication (static site is sufficient for a portfolio)

## 9. Open Items
- [x] Projects: 4 featured + 3 shorter entries (see Section 3) — GitHub repos now public
- [x] Resume: received and reviewed, content folded into Sections 3, 5, 6 above
- [x] LinkedIn: linkedin.com/in/nigel-kok-a512583b3
- [x] Certifications: see Section 6 above
- [x] Design: fully maximalist Kinetic Typography throughout, no dial-back
- [x] Phone shown on site: 019-860 8665

## 10. Next Step
Before any code: a homepage wireframe/mockup built to this design system, for you to confirm or adjust — same propose → confirm → build flow.
