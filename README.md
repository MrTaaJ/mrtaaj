# Saheed Tajudeen — Portfolio

Animated developer portfolio built with **Vite + React + TypeScript + GSAP**.

## Stack

- **Vite** — build tool
- **React 18** — UI framework
- **TypeScript** — type safety
- **React Router v6** — client-side routing
- **GSAP 3** — all animations & page transitions
- **CSS Modules** — scoped component styles

## Project Structure

```
src/
├── components/
│   ├── Cursor.tsx          # Custom magnetic cursor
│   ├── Cursor.module.css
│   ├── Nav.tsx             # Fixed navigation bar
│   ├── Nav.module.css
│   ├── TransitionOverlay.tsx  # GSAP slide overlay
│   └── TransitionOverlay.module.css
├── hooks/
│   └── useTransition.tsx   # Page transition context + GSAP logic
├── pages/
│   ├── Home.tsx            # Hero, terminal card, ticker, stats
│   ├── Home.module.css
│   ├── Work.tsx            # 6 project cards
│   ├── Work.module.css
│   ├── About.tsx           # Bio, skills, experience, contact form
│   └── About.module.css
├── styles/
│   └── global.css          # CSS variables, reset, noise overlay
├── App.tsx                 # Router + TransitionProvider
└── main.tsx                # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customisation

- **Colors** — edit CSS variables in `src/styles/global.css`
- **Projects** — update the `PROJECTS` array in `src/pages/Work.tsx`
- **Experience** — update `EXPERIENCE` in `src/pages/About.tsx`
- **Skills** — update `SKILLS` array in `src/pages/About.tsx`
- **Transition speed** — change `duration` values in `src/hooks/useTransition.tsx`
