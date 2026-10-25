# Personal site

Portfolio site for Jayadev Suresh Kumar, live at **https://jayadev83.github.io**.

Built with [Astro](https://astro.build) as plain static HTML and hosted on **GitHub Pages**. GitHub Actions builds and deploys it on every push to `main`.

```
site/                       Astro site
  src/data/profile.ts       Personal details, skills, certifications, experience
  src/data/projects.ts      Case studies
.github/workflows/pages.yml Build and deploy to GitHub Pages
```

## Editing content

Most changes are a line in `site/src/data/profile.ts` or `site/src/data/projects.ts`. Push to `main` and the site updates in about a minute.

## Run locally

```
cd site
npm install
npm run build      # output in site/dist
npm run dev        # live preview at http://localhost:4321 (needs Node 20+)
```

## Optional: AWS version (not in use)

`infra/`, `tf.ps1`, `deploy.ps1` and `.github/workflows/deploy.yml` define an alternative AWS hosting setup: a private S3 bucket behind CloudFront with HTTPS, Route 53 DNS, a budget alert, and a GitHub deploy role using OpenID Connect. None of it is deployed, and the AWS workflow only runs if triggered manually. See the comments in `infra/` if you ever want to move the site to AWS.
