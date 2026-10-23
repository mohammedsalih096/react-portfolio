# Mohammed Salih Portfolio

Portfolio site built with Next.js App Router, TypeScript, Tailwind CSS, Motion for React and Lucide icons. The App Router renders the page with Server Components by default; the mobile menu and small in-view reveal component use Client Components.

## Run locally

Use Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

## Netlify deployment

The site uses Next.js static export because the existing project includes a Netlify SPA deployment configuration and the portfolio does not need server-only features. `npm run build` writes the deployable site to `out/`; the root `netlify.toml` sets the build command and publish directory. Deploy the repository to Netlify with Node.js 22. The contact action opens the visitor's email client; no contact-form service or server endpoint is configured.

The production portfolio domain has not been established in the repository, so no canonical URL or sitemap host is configured yet.
