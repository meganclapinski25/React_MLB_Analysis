const BASE_URL = 'https://statsapi.mlb.com/api/v1';

export const mlbApi = {
    getStandings: () =>
        fetch(`${BASE_URL}/standings?leagueId=103,104&season=2025&standingsTypes=regularSeason`).then(r => r.json()),

    getTeams

    getTeamRoster

    getTeamStats

    getPlayerStats

    getPlayerInfo

    searchPlayers
}