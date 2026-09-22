# Saz Works — AI engineering studio

Company page for **Saz Works**, the freelance AI engineering studio of Andrés Rubio del Saz.

Live at: https://andresrubio.github.io/sazworks (custom domain: sazworks.ai, once registered)

Plain HTML/CSS/JS. No build step, no dependencies. Open `index.html` in a browser to preview.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole page in English. Content lives in the markup. |
| `es/index.html` | Spanish version, same structure. Keep both in sync when editing copy. |
| `styles.css` | Single stylesheet, dark theme, responsive, print-safe. |
| `script.js` | Progressive enhancement only: scroll reveal, active nav, mobile menu. |
| `.github/workflows/deploy.yml` | Publishes to GitHub Pages on every push to `main`. |
| `.nojekyll` | Stops GitHub running Jekyll over the files. |

## First deploy

1. Create the empty repo `AndresRubio/sazworks` on GitHub (no README, no license).
2. Push: `git push -u origin main`.
3. In the repo: **Settings → Pages → Source: GitHub Actions**. The workflow deploys in about a minute.

## Custom domain (when you buy sazworks.ai)

1. Add a file named `CNAME` at the repo root containing `sazworks.ai`, commit and push.
2. At the registrar, add `A` records for the apex pointing to GitHub Pages
   (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
   and a `CNAME` record `www → andresrubio.github.io`.
3. In **Settings → Pages**, set the custom domain and enable *Enforce HTTPS*.
4. Update the `canonical`, `og:url` and JSON-LD `url` values in `index.html`.

## Booking link

The "Book a call" buttons are `mailto:` links. When you set up Calendly / cal.com, replace
every `href="mailto:..."` whose class is `cta` with the booking URL.
