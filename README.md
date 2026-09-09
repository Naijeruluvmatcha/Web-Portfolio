# Nigel Kok — Personal Portfolio

Hi, I'm Nigel — a Cloud Engineering student at Asia Pacific University, based in Kuala Lumpur. This is my personal portfolio site, built to actually showcase what I've worked on rather than just list it.

**🔗 Live site:** https://d2t0v93771gi8b.cloudfront.net

## What this is

A single-page portfolio covering my projects, skills, and certifications, styled around a bold "Kinetic Typography" design — high-contrast, motion-driven, brutalist-inspired. I wanted it to look like nobody else's portfolio, not another dark-mode template.

Full design reasoning is in [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md), and the original project scope is in [`REQUIREMENTS.md`](./REQUIREMENTS.md), if you're curious how this was planned before any code was written.

## What I built it with

- **Next.js** (App Router) — React framework
- **TypeScript**
- **Tailwind CSS** — styling
- **Framer Motion** + **react-fast-marquee** — the scroll animations and moving marquee strips

## How it's actually deployed

This isn't hosted on a one-click platform — it's real infrastructure I provisioned myself:

**S3 (storage) + CloudFront (CDN) on AWS, provisioned with Terraform.**

The full reasoning — why S3+CloudFront over something simpler, why the bucket is locked down and private, why Terraform instead of clicking through the console — is written up in [`DEPLOYMENT.md`](./DEPLOYMENT.md).

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/            — pages, layout, metadata (robots.txt, sitemap, OG image)
components/     — Hero, About, Projects, Skills, Certifications, Contact
public/         — images, certificates, resume
terraform/      — the actual infrastructure-as-code for the AWS deployment
```

## License

MIT — see [`LICENSE`](./LICENSE).
