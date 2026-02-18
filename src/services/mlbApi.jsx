const BASE_URL = 'https://statsapi.mlb.com/api/v1';

export const mlbApi = {
    getStandings: () =>
        fetch(`${BASE_URL}/standings?leagueId=103,104&season=2025&standingsTypes=regularSeason`).then(r => r.json()),

    getTeams: () =>
        fetch(`${BASE_URL}/teams?sportId=1&season=2025`).then(r => r.json()),

    getTeamRoster: (teamId) =>
        fetch(`${BASE_URL}/teams/${teamId}/roster?season=2025`).then(r => r.json()),

    getTeamStats: (teamId) =>
        fetch(`${BASE_URL}/teams/${teamId}/stats?stats=season&group=hitting&season=2025`).then(r => r.json()),
    getPlayerStats:(playerId) =>

        fetch(`${BASE_URL}/people/${playerId}/stats?stats=season&group=hitting&season=2025`).then(r => r.json()),

    getPlayerInfo:(playerId)=>
        fetch(`${BASE_URL}/people/${playerId}`).then(r => r.json()),
    searchPlayers:(name) =>
        fetch(`${BASE_URL}/people/search?names=${name}&sportId=1`).then(r => r.json()),
    getRecentGames:(teamId)=> 
    fetch(`${BASE_URL}/schedule?teamId=${teamId}&season=2025&gameType=R&startDate=2025-01-01&endDate=2025-12-31`).then(r => r.json()),
};