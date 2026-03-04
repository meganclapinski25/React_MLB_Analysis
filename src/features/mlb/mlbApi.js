import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mlbApi = createApi({
  reducerPath: 'mlbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://statsapi.mlb.com/api/v1' }),
  endpoints: (builder) => ({

    getStandings: builder.query({
      query: (season = 2025) =>
        `/standings?leagueId=103,104&season=${season}&standingsTypes=regularSeason`,
    }),

    getTeams: builder.query({
      query: (season = 2025) => `/teams?sportId=1&season=${season}`,
    }),

    getTeamStats: builder.query({
      query: ({ teamId, group = 'hitting', season = 2025 }) =>
        `/teams/${teamId}/stats?stats=season&group=${group}&season=${season}`,
    }),

    getSchedule: builder.query({
      query: ({ teamId, season = 2025 }) =>
        `/schedule?teamId=${teamId}&season=${season}&gameType=R&startDate=${season}-01-01&endDate=${season}-12-31`,
    }),

    searchPlayers: builder.query({
      query: (name) => `/people/search?names=${name}&sportId=1`,
    }),

    getPlayerStats: builder.query({
      query: ({ playerId, group = 'hitting', season = 2025 }) =>
        `/people/${playerId}/stats?stats=season&group=${group}&season=${season}`,
    }),

  }),
});

export const {
  useGetStandingsQuery,
  useGetTeamsQuery,
  useGetTeamStatsQuery,
  useGetScheduleQuery,
  useSearchPlayersQuery,
  useGetPlayerStatsQuery,
} = mlbApi;
