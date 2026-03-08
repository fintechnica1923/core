# Common — Fintech Educational Platform

A fintech educational platform featuring a course, blog, essays, media library, hackathon write-ups, and consulting information. Content is primarily in Russian.

## Tech Stack

- **React 19** + **TypeScript** with **Vite 7**
- **Tailwind CSS v4** + **shadcn/ui** components
- **React Router** for client-side routing
- **react-markdown** + **remark-gfm** for rendering Markdown content
- Custom Vite plugin (`vite-plugin-blog.ts`) for loading `.md` files as virtual modules

## Sections

- `/` `/course` — **Курс** — An 8-part fintech course covering payments, credit, investments, crypto, anti-fraud, and more
- `/blog` — **Лента** — Blog feed with search, tag filtering, and text-to-speech
- `/essays` — **Эссе** — Long-form essays
- `/media` — **Медиа** — Media content with YouTube embeds and audio
- `/hackathons` — **Хакатоны** — Hackathon case studies
- `/consulting` — **Консалтинг** — Consulting services and portfolio

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build outputs to the `build/` directory.

## Content

Blog posts, essays, media entries, and hackathon write-ups are stored as Markdown files under `src/blog/`, `src/essays/`, `src/media/`, and `src/hackathons/` respectively. The custom Vite plugin automatically loads them at build time.

Audio files for media entries are stored in `public/audio/`.

## Deployment

The project auto-deploys to Yandex Object Storage on push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).
