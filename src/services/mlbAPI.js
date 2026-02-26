const BASE_URL = 'https://statsapi.mlb.com/api/v1'

export async function fetchStandings(season = 2025){
    const res = await fetch(
        `${BASE_URL}/standings?leagueId=103,104&season=${season}&standingsTypes=regularSeason`
    );
    if (!res.ok) throw new Error('Failed to fetch standings');
    return res.json();
}