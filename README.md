# Saz Works — AI engineering studio

Company page for **Saz Works**, the freelance AI engineering studio of Andrés Rubio del Saz.

Final home: https://sazworks.com (all canonical and Open Graph URLs already point there).
Published from GitLab Pages while the domain is pending; also deployable on GitHub Pages.

Plain HTML/CSS/JS. No build step, no dependencies. Open `index.html` in a browser to preview.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole page in English. Content lives in the markup. |
| `es/index.html` | Spanish version, same structure. Keep both in sync when editing copy. |
| `styles.css` | Single stylesheet, dark theme, responsive, print-safe. |
| `script.js` | Progressive enhancement only: scroll reveal, active nav, mobile menu. |
| `es/index.html` … `es/legal/` | Spanish pages. |
| `legal/index.html` | Legal notice and privacy (LSSI + GDPR). **Fill in your NIF and address** before going live. |
| `assets/` | Logo SVGs (`logo.svg`, `logo-light-bg.svg`, `logo-mark.svg`, `logo-mono.svg`), Open Graph image (`og.svg` source, `og.png` export), app icons. |
| `favicon.svg`, `favicon.ico` | Tab icons. |
| `.github/workflows/deploy.yml` | Publishes to GitHub Pages on every push to `main`. |
| `.nojekyll` | Stops GitHub running Jekyll over the files. |

## Deploy

Two remotes, two pipelines, same files:

- **GitLab** (`gitlab` remote, project `andres.rubio1/sazworks`): `.gitlab-ci.yml` publishes to GitLab Pages on
  every push to `main`. Works on a private project. Make the site public once under
  **Settings → General → Visibility → Pages: Everyone**. The URL is under **Deploy → Pages**.
- **GitHub** (`origin` remote, `AndresRubio/sazworks`): `.github/workflows/deploy.yml` publishes to GitHub Pages.
  Only works if the repo is public (or on a paid plan).

## Custom domain (sazworks.com)

GitLab: **Deploy → Pages → New domain**, enter `sazworks.com`, then at the registrar add the
`A`/`ALIAS` record and the `_gitlab-pages-verification-code` TXT record GitLab shows. Add
`www` the same way. GitLab issues the HTTPS certificate automatically.

GitHub (if used instead): add a `CNAME` file containing `sazworks.com`, point the apex `A`
records to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153, and
`www` as a `CNAME` to `andresrubio.github.io`.

## Brand assets

Everything starts from `assets/og.svg` and `assets/logo*.svg`. If you change the accent
colour, edit the hex values in those SVGs and re-export the PNGs:

```bash
qlmanage -t -s 1200 -o /tmp/og assets/og.svg && cp /tmp/og/og.svg.png assets/og.png
qlmanage -t -s 180 -o /tmp/ic favicon.svg && cp /tmp/ic/favicon.svg.png assets/apple-touch-icon.png
```

## Testimonials

Both `index.html` and `es/index.html` contain a commented-out `#testimonials` section
before the FAQ. Uncomment it once you have real quotes. Never publish invented ones.

## Booking link

The "Book a call" buttons are `mailto:` links. When you set up Calendly / cal.com, replace
every `href="mailto:..."` whose class is `cta` with the booking URL.
