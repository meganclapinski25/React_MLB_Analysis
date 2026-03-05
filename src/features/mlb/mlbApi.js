import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const mlbApi = createApi({
  reducerPath: 'mlbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://statsapi.mlb.com/api/v1' }),
  endpoints: (builder) => ({

    getStandings: builder.query({
      query: (season = 2025) =>
        `/standings?leagueId=103,104&season=${season}&standingsTypes=regularSeason`,
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
  useSearchPlayersQuery,
  useGetPlayerStatsQuery,
} = mlbApi;
