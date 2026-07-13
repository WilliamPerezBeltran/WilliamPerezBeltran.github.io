# Deploying to GitHub Pages

This app is a static Create React App build published to GitHub Pages via the
`gh-pages` npm package. Routing uses `HashRouter` (not `BrowserRouter`) specifically
so it works on a static host with no server-side rewrite rules — don't switch routers
without re-checking this.

## One-time setup

1. Install the deploy tooling (already in `devDependencies`):
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   {
     "homepage": "https://<github-username>.github.io/<repo-name>",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
   `homepage` **must exactly match where the site will actually be served**, subpath
   included if there is one. CRA bakes this into the build as the base path for every
   static asset (`static/js/...`, `static/css/...`, `favicon.ico`, `manifest.json`,
   etc.). If it doesn't match the real URL, every asset request 404s and the page
   renders blank — this bit us once when we set `homepage` to a root URL while the
   repo still had a project-page name (see the "user page vs. project page" section
   below for why that matters).
3. Push `master`/`main` to `origin` as usual (`gh-pages` deploys from your local
   `build/`, not from what's on the branch — a normal `git push` and `npm run
   deploy` are independent steps).

## Deploying

```bash
npm run deploy
```

This runs `predeploy` (`npm run build`) automatically, then pushes the contents of
`build/` to the `gh-pages` branch on `origin` via a forced commit — you don't create
that branch or its commits by hand.

First time only: GitHub Pages usually turns itself on automatically once it sees a
`gh-pages` branch push, but if not — repo **Settings → Pages** → Source → branch
`gh-pages`, folder `/ (root)` → Save.

## Node version gotcha

This project's `react-scripts` (v4, Webpack 4) fails on Node 17+ with
`ERR_OSSL_EVP_UNSUPPORTED` (OpenSSL 3 dropped a legacy digest Webpack 4 needs).
Build and deploy with **Node 16.x**, or prefix commands with
`NODE_OPTIONS=--openssl-legacy-provider` on newer Node.

## User page vs. project page URLs

GitHub Pages gives you a clean root URL (`https://<user>.github.io/`, no subpath)
**only if the repository is named exactly `<user>.github.io`** — matching your GitHub
username, case aside. Any other repo name gets a project-page URL instead:
`https://<user>.github.io/<repo-name>/`.

There is no other way to get the clean root URL for a personal profile-style site —
you can't alias/redirect your way there without either renaming this exact repo, or
setting up a custom domain (see below).

### Renaming an existing repo to get the clean URL

You do **not** need to create a new repo — renaming in place keeps history, branches
(including `gh-pages`), and GitHub auto-redirects the old name for a while.

1. GitHub web UI: repo → **Settings** (General) → **Repository name** → change to
   `<user>.github.io` → **Rename**.
2. Update your local remote (the SSH/HTTPS URL embeds the old repo name):
   ```bash
   git remote set-url origin git@github.com:<user>/<user>.github.io.git
   ```
3. Update `homepage` in `package.json` to the root URL (drop the subpath):
   ```json
   "homepage": "https://<user>.github.io"
   ```
4. Redeploy:
   ```bash
   npm run deploy
   ```
   This is the step that's easy to forget — the *old* deployed build still has the
   *old* subpath baked into every asset URL until you rebuild and republish it.

### If you actually want a different subdomain word (e.g. `cvwilliam.github.io`)

That string has to be your GitHub **username**, not just a repo name — GitHub Pages
user-page routing keys off `<the account's username>.github.io` specifically. Getting
`cvwilliam.github.io` as a clean root URL means renaming your GitHub *account* to
`cvwilliam`, which changes the URL of every repo you own, not just this one. Treat
that as a separate, much bigger decision — it's not part of a normal Pages deploy.

## Troubleshooting

**Site loads but is blank, or assets 404**: `homepage` doesn't match the real URL the
build was published to. Fix `homepage`, then `npm run deploy` again — the previous
build stays live until you overwrite it.

**Changes don't show up after deploying**: GitHub Pages' CDN caches responses for up
to 10 minutes (`cache-control: max-age=600`). Confirm the new build actually reached
GitHub before assuming something's broken:
```bash
git fetch origin gh-pages
git show origin/gh-pages:index.html | grep -o 'src="[^"]*"'
```
If the paths there are already correct, it's just cache — wait it out rather than
redeploying again.
