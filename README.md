# Harsh Patel — Robotics Software Portfolio

A responsive, multi-page personal portfolio for robotics software, ROS 2, autonomous navigation, simulation, localization, controls, and computer vision work.

## Site structure

- `/` — Midnight NavOps landing page and featured work
- `/projects` — detailed project archive with challenge, approach, and result
- `/experience` — education and engineering timeline
- `/about` — profile, interests, and technical capabilities
- `/resume` — web résumé with Print / Save PDF support

## Tech stack

- Next.js-compatible App Router via Vinext
- React + TypeScript
- Tailwind CSS import with a custom CSS design system
- Cloudflare Worker-compatible production output

## Run locally

```bash
npm ci
npm run dev
```

Open the local URL shown in the terminal.

## Validate a production build

```bash
npm run build
npm run validate:artifact
```

## Publish through GitHub and Cloudflare Workers

1. Create an empty GitHub repository named `harsh-robotics-portfolio`.
2. Push this entire project to its `main` branch.
3. In Cloudflare, open **Workers & Pages → Create application → Import a repository**.
4. Connect the GitHub repository and use these settings:

   - Production branch: `main`
   - Root directory: `/`
   - Build command: `npm ci && npm run build`
   - Deploy command: `npx wrangler deploy`
   - Node version: `22`

Cloudflare will publish the portfolio to a free `workers.dev` address and deploy future pushes automatically.

You can also deploy manually after signing into Wrangler:

```bash
npm run deploy
```

## Customize

- Main homepage content: `app/page.tsx`
- Project case studies: `app/projects/page.tsx`
- Experience: `app/experience/page.tsx`
- About and skills: `app/about/page.tsx`
- Résumé: `app/resume/page.tsx`
- Design tokens and responsive layout: `app/globals.css`
- Hero simulation artwork: `public/navops-hero.png`

Replace or add verified GitHub repository and demo links as projects are published. The site intentionally avoids placeholder URLs.
