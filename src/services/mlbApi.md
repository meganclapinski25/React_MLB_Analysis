# MLB Stats API Reference

Base URL: `https://statsapi.mlb.com/api/v1`

## Endpoints

### Standings
```
GET https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2025&standingsTypes=regularSeason
```

### Teams
```
GET https://statsapi.mlb.com/api/v1/teams?sportId=1&season=2025
```

### Team Roster
```
GET https://statsapi.mlb.com/api/v1/teams/{teamId}/roster?season=2025
```

### Team Stats (Hitting)
```
GET https://statsapi.mlb.com/api/v1/teams/{teamId}/stats?stats=season&group=hitting&season=2025
```

### Player Stats (Hitting)
```
GET https://statsapi.mlb.com/api/v1/people/{playerId}/stats?stats=season&group=hitting&season=2025
```

### Player Info
```
GET https://statsapi.mlb.com/api/v1/people/{playerId}
```

### Search Players
```
GET https://statsapi.mlb.com/api/v1/people/search?names={name}&sportId=1
```

### Recent Games (Schedule)
```
GET https://statsapi.mlb.com/api/v1/schedule?teamId={teamId}&season=2025&gameType=R&startDate=2025-01-01&endDate=2025-12-31
```
