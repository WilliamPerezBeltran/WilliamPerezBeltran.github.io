# William Fernando Pérez — Résumé Site

Personal site (home / résumé / projects / inspiration), built with
[Create React App](https://create-react-app.dev/) and `react-router-dom`. The design
is a deliberate visual clone of [theengineer.co](http://theengineer.co).

## Stack

- React 17
- react-router-dom 6 (`HashRouter`, for static hosting without server rewrites)
- Create React App / `react-scripts` 4
- Plain global CSS (`normalize.css` + `skeleton.css` grid + custom `style.css`) —
  no CSS-in-JS, no Sass

## Requirements

- **Node 16.x** — `react-scripts` 4 (Webpack 4) fails on Node 17+ with
  `ERR_OSSL_EVP_UNSUPPORTED` (OpenSSL 3 dropped a legacy digest Webpack 4 needs).
  If you must use a newer Node version, prefix commands with
  `NODE_OPTIONS=--openssl-legacy-provider`.
- npm (this repo uses `package-lock.json`, not yarn)

## Getting started

```bash
# Clone repo
git clone https://github.com/WilliamPerezBeltran/WilliamPerezBeltran.github.io.git
cd WilliamPerezBeltran.github.io

# Install dependencies
npm install

# Run the app in dev mode
npm start
```

The app runs at <http://localhost:3000>.

## Scripts

```bash
npm start            # dev server with hot reload
npm run build         # production build to build/
npm test              # Jest + React Testing Library
npm run deploy         # build + publish to the gh-pages branch (GitHub Pages)
```

## Project structure

```
├── public/
│   ├── assets/
│   │   ├── css/          # normalize.css, skeleton.css (vendor), style.css (theme)
│   │   ├── fonts/         # self-hosted Grotesk webfont
│   │   └── img/           # legacy assets from the original template (unused)
│   ├── favicon.ico, logo192.png, logo512.png, apple-touch-icon.png
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── Footer.js      # shared footer nav (highlights the current page)
│   ├── pages/
│   │   ├── Home.js        # "/"
│   │   ├── CV.js          # "/cv" — résumé
│   │   ├── Projects.js    # "/projects"
│   │   └── Inspiration.js # "/inspiration"
│   ├── App.js             # HashRouter + route table
│   └── index.js
├── docs/
│   └── DEPLOYMENT.md      # GitHub Pages deploy guide
├── CLAUDE.md              # guidance for Claude Code in this repo
├── package.json
└── package-lock.json
```

## Deploying (GitHub Pages)

```bash
npm run deploy
```

Live at **<https://williamperezbeltran.github.io/>**.

This builds the app and pushes `build/` to the `gh-pages` branch. `homepage` in
`package.json` controls the base path the build assumes — it must match the actual
Pages URL, or every static asset 404s and the page renders blank.

Full walkthrough (repo renaming for the clean root URL, the user-page-vs-project-page
distinction, Node version gotchas, cache troubleshooting): see
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Creator

**William Fernando Pérez**

- <https://github.com/WilliamPerezBeltran>
- <https://www.linkedin.com/in/williamperezb>
