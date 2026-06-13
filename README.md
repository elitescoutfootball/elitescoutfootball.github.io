# elitescoutfootball.github.io

Static website for **EliteScout Football** — served at https://elitescoutfootball.com
via GitHub Pages.

## Pages

- `/` — landing + support contact (App Store Connect support URL).
- `/community-guidelines` — community guidelines.
- `/404.html` — fallback for unknown paths.

## How it's hosted

- Repo: `elitescoutfootball/elitescoutfootball.github.io` (GitHub Pages user/org site).
- Custom domain: `elitescoutfootball.com` (configured via `CNAME` file + repo Pages settings).
- HTTPS enforced via GitHub-managed Let's Encrypt cert.
- No build step — plain HTML/CSS. Edit a file, commit, it's live in ~30 seconds.

## To edit the guidelines

Replace everything between the `<!-- BEGIN GUIDELINES CONTENT -->` and
`<!-- END GUIDELINES CONTENT -->` markers in `community-guidelines/index.html`.
Keep the surrounding `<div class="wrap">` + brand header + footer so the page
stays on-brand.

## To edit the landing page

Open `index.html`. Shared styles live in `style.css`.
