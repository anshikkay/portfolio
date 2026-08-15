# Anshika Yadav — Portfolio (Full Stack)

A two-part project:
- `backend/` — Express API that serves your resume data as JSON, plus a `/api/contact` endpoint that saves messages sent through the site
- `frontend/` — React (Vite) app that fetches that data and renders the site

## Run it locally

### 1. Backend
```
cd backend
npm install
npm run dev
```
Runs at http://localhost:5000. Try http://localhost:5000/api/profile in your browser to confirm it's working.

### 2. Frontend (in a second terminal)
```
cd frontend
npm install
npm run dev
```
Runs at http://localhost:5173. Vite's dev server proxies any `/api/...` request to the backend on port 5000 (see `vite.config.js`), so the two talk to each other automatically — no CORS headaches.

Open http://localhost:5173 in your browser.

## Editing your content
All resume content lives in `backend/data/*.json` — edit those files and refresh the frontend, no code changes needed:
- `profile.json` — name, tagline, skills, contact info
- `experience.json` — internships
- `projects.json` — 2Code, Asha AI
- `achievements.json` — hackathon results
- `education.json` — degree + coding profiles

Messages sent through the contact form are appended to `backend/data/messages.json` (created automatically, gitignored).

## Build for production
```
cd frontend
npm run build
```
Outputs static files to `frontend/dist/` — deploy those anywhere (Vercel, Netlify, GitHub Pages). Deploy `backend/` separately (Render, Railway, Fly.io) and point the frontend's API calls at its live URL instead of the local proxy.
