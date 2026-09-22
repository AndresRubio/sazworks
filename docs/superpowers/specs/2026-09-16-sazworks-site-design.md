# Saz Works — Company Page Design Spec

Date: 2026-09-16

## Purpose

Andrés Rubio del Saz is between jobs and moving into freelance AI engineering. He needs a
company page for his studio brand that turns visitors into discovery calls. Source content is
the existing CV (`aboutme`) and portfolio (`portfolio`) repos.

## Brand

- Name: **Saz Works** ("Saz" from the surname *del Saz*; "Works" as in a workshop that ships).
- Domain: sazworks.ai (free at time of writing; also sazworks.io and GitHub handle `sazworks`).
- Tagline: *AI systems that ship software.*
- Positioning: the engineer for the part after the demo. Production GenAI (agentic workflows,
  RAG, LLM platforms) on Azure/Kubernetes, backed by 10+ years of backend engineering.

## Page structure (single page, anchor nav)

1. Header: wordmark, nav, "Book a call" CTA.
2. Hero: eyebrow, H1 tagline, positioning paragraph, primary CTA (mailto), secondary
   (services), trust strip with past clients.
3. Services: four cards (agentic systems & AI-driven SDLC, RAG & LLM integration, GenAI
   platform engineering, AI architecture audit).
4. Engagement models: discovery audit, build sprint, fractional AI engineer. No prices;
   every card says "contact for a quote" (user decision).
5. Process: four steps from call to handover.
6. Selected work: Teneo, PirateLink, Narrativa, Zooplus.
7. About: short bio, links to portfolio, CV, LinkedIn, GitHub.
8. FAQ: remote, stack, NDA, how to start.
9. Contact: final CTA, email, LinkedIn. Footer.

## Visual design

Dark theme distinct from the portfolio's violet: near-black background, warm off-white text,
amber accent, subtle grid texture in the hero. Space Grotesk headings, Inter body, JetBrains
Mono labels. Responsive to 375px, reduced-motion safe, print-safe.

## Tech and deploy

Plain HTML/CSS/JS, no build step. Repo `AndresRubio/sazworks`, GitHub Actions workflow
(copied from `aboutme`) deploys to Pages on push to `main`. CNAME added later once the domain
is bought (see README). SEO: meta description, Open Graph, JSON-LD `ProfessionalService`.

## Out of scope

Pricing, contact form/backend, analytics, Spanish version, blog.
