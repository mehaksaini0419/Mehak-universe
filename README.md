# Mehak Saini — Intelligence Universe Portfolio (Final)

A cinematic, premium, fully-animated portfolio.
React + Tailwind + Framer Motion + Recharts + Lucide.

## The experience
1. CINEMATIC PORTAL INTRO — a half-lit analytics planet with orbiting data
   rings, drifting fog, glowing particles, light rays, parallax on mouse move,
   and your name in luxury type. CLICK THE PLANET → it zooms open like a portal
   (with a female AI voice: "Welcome to the intelligence universe of Mehak Saini")
   and reveals the full portfolio.
2. Hero — starry welcome with your name, role, resume / LinkedIn / voice intro.
3. Career Universe — 7 clickable domain orbs → deep-dive panels.
4. The Process — animated "Raw Data → Dashboard → Decision" (dashboard builds
   only after the data ball lands).
5. Projects World — animated visuals incl. the driving supply-chain truck; the
   Wireless project opens your REAL Telecom dashboard, embedded & interactive.
6. Built & Shipped — your real live website vikassteeludyog.com (logo + stats + link).
7. AI & Tools Galaxy, Knowledge Garden, Experience Timeline, Recruiter Dashboard.

Starry universe + aurora shine behind the whole site. Fully responsive.

## Run locally
1. Install Node.js 18+  (https://nodejs.org)
2. In this folder:
   ```
   npm install
   npm run dev
   ```
3. Open the printed link (usually http://localhost:5173).

## Add your resume
Put your resume in `public/` named exactly:  Mehak_Saini_Resume.pdf
(then delete public/PLACE_RESUME_HERE.txt)

## Already included (public/assets/)
- vikas-steel-logo.png   (your real logo)
- telecom-dashboard.html (your real KPI dashboard, embedded in the Wireless project)

## Edit content
Everything (text, jobs, skills, tools, project numbers) lives in ONE file:
  src/data/content.js

## Build & deploy
```
npm run build      # outputs /dist
```
Deploy on Vercel or Netlify (build: npm run build, output: dist).

## Notes
- Voice intro uses the browser's built-in speech engine (no keys/files);
  best in Chrome/Edge desktop. Browsers only allow it after a click — which is
  why it plays when you tap the planet.
- Fully responsive (phone + desktop).
