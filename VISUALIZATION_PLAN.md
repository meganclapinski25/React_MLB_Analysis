# MLB Analysis App — Visualization Plan

> Portfolio-ready questions for entry-level / internship applications.
> Goal: demonstrate data literacy, baseball domain knowledge, and clean UI.

---

## Standings Page

### 1. Pythagorean Win Expectancy vs Actual Wins
**Question:** "Are teams over or underperforming their expected wins?"
- **Chart type:** Scatter plot
- **X-axis:** Pythagorean Expected Wins (calculated from runs scored / runs allowed)
- **Y-axis:** Actual Wins
- **Why it stands out:** Shows sabermetrics awareness — not just plotting a leaderboard
- **API data needed:** `runsScored`, `runsAllowed`, `wins` from standings endpoint

### 2. Division Competitiveness
**Question:** "How competitive is each division this season?"
- **Chart type:** Small multiples bar chart (one per division)
- **Shows:** Win% spread within each of the 6 divisions
- **Why it stands out:** Group-level analysis, not just individual rankings
- **API data needed:** `winningPercentage`, `division` from standings endpoint

---

## Players Page

### 1. Slash Line vs League Average
**Question:** "How does this player's slash line compare to the league average?"
- **Chart type:** Radar / spider chart
- **Axes:** AVG, OBP, SLG, OPS
- **Two overlays:** Player stats + league average baseline
- **Why it stands out:** Shows understanding of what these stats mean *together*
- **API data needed:** Player hitting stats + hardcoded or fetched league averages

### 2. Percentile Rankings
**Question:** "Where does this player rank among all hitters in key categories?"
- **Chart type:** Horizontal percentile bar chart (Baseball Savant style)
- **Stats:** AVG, HR, RBI, OBP, SLG
- **Shows:** 0–100 percentile position league-wide per stat
- **Why it stands out:** Recognizable professional format, shows ranking awareness
- **API data needed:** All player stats to compute percentiles dynamically

---

## Teams Page

### 1. Offense vs Pitching Quadrant
**Question:** "Which teams have elite offense AND elite pitching?"
- **Chart type:** Scatter plot with quadrant dividers
- **X-axis:** Runs Scored (offense)
- **Y-axis:** Team ERA (pitching — inverted so better = higher)
- **Each dot:** Labeled team name
- **Quadrants:** Contenders / Pretenders / One-dimensional / Rebuilding
- **Why it stands out:** Multi-variable storytelling — classic analytical portfolio piece
- **API data needed:** Team hitting stats + team pitching stats endpoints

### 2. Home vs Away Performance
**Question:** "How does each team perform at home vs. on the road?"
- **Chart type:** Grouped bar chart
- **Shows:** Home W% and Away W% side by side per team
- **Why it stands out:** Pulls from schedule data (not just standings), shows endpoint variety
- **API data needed:** Schedule endpoint filtered by home/away games

---

## Head-to-Head Page

### 1. Season Series Record + Scoring
**Question:** "What's the season record between these two teams, and who scores more?"
- **Chart type:** Split view — Donut chart (W/L record) + Bar chart (avg runs per game)
- **Shows:** Head-to-head wins + average runs scored per matchup game
- **Why it stands out:** Combines two chart types for a richer story
- **API data needed:** Schedule endpoint filtered by both team IDs

### 2. Run Scoring Timeline
**Question:** "How did scoring shift across each matchup this season?"
- **Chart type:** Line chart — one line per team, chronological
- **X-axis:** Each game in the series (date)
- **Y-axis:** Runs scored that game
- **Why it stands out:** Tells a narrative — momentum, sweeps, dominant stretches
- **API data needed:** Schedule + linescore endpoints for game-by-game scores

---

## Priority Order for Implementation

| Priority | Page | Visualization | Wow Factor |
|----------|------|---------------|------------|
| 1 | Standings | Pythagorean Wins scatter | ⭐⭐⭐ |
| 2 | Players | Percentile bars | ⭐⭐⭐ |
| 3 | Teams | Offense vs Pitching quadrant | ⭐⭐⭐ |
| 4 | Players | Radar slash line | ⭐⭐ |
| 5 | Head-to-Head | Run scoring timeline | ⭐⭐ |
| 6 | Standings | Division competitiveness | ⭐⭐ |
| 7 | Teams | Home vs Away | ⭐⭐ |
| 8 | Head-to-Head | Record donut + avg runs | ⭐⭐ |
