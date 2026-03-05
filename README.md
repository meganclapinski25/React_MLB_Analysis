# MLB Analytics Dashboard

A single-page React application that displays live 2025 MLB season data including standings, team performance, player stats, and head-to-head team comparisons.

---

## Project Description

This app pulls live data from the official MLB Stats API and presents it across four pages:

- **Standings** — All 30 teams grouped by division with win/loss records
- **Teams** — Over/Under .500 bar chart for all teams, plus KPI cards for a selected team
- **Players** — Search any player by name and view their 2025 season hitting stats
- **Head to Head** — Compare two teams' win percentages side by side

---

## Tech Stack

- React 19
- Redux Toolkit + RTK Query
- Tailwind CSS
- Recharts
- Vite

---

## Running the App

### Prerequisites
- Node.js installed on your machine

### Steps

1. Clone the repository:
```bash
git clone https://github.com/meganclapinski/React_MLB_Analysis.git
cd React_MLB_Analysis
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to:
```
http://localhost:5173
```

---

## How I Used AI Responsibly

I used AI (Claude) as a learning tool and coding assistant throughout this project. Specifically:

- I used AI to help me set up RTK Query and understand how `createApi` and `fetchBaseQuery` work, since this was my first time using it
- I used AI to debug a crash caused by trying to access `data.records` before the API had responded, which led me to learn about optional chaining (`?.`)
- I used AI to help me understand why `flatMap` was needed instead of `map` when transforming the nested standings API response
- I used AI to help structure my Recharts visualizations and understand which components were required vs optional
- I used AI to identify unused imports and clean up my codebase before submission
