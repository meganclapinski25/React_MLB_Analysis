import { useState } from 'react';

import { useSearchPlayersQuery, useGetPlayerStatsQuery } from '../features/mlb/mlbApi';



export default function PlayersPage() {
    const [query, setQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    function handleSearch(e){
      e.preventDefault();
      setSubmittedQuery(query);
    }

    const { data:searchData, isLoading:searchLoading } = useSearchPlayersQuery(submittedQuery, {
      skip: !submittedQuery,
    });

    const {data: statsData, isLoading: statsLoading} = useGetPlayerStatsQuery(
      {playerid: selectedPlayerId},
      {skip: !selectedPlayerId}
    );

    const players = searchData?.people ?? [];

    return (
      <div className='flex flex-col items-center p-8'>
        <h1 className='text-2xl font-bold text-white mb-2'> Players </h1>
        <p className='text-grey-400 mb-6'> Analyical Question</p>

        <form onSubmit={handleSearch} className="flex gap-3 mb-8">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search player name"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none w-72"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Search
        </button>
      </form>

      {searchLoading && <p className='"text-white'> Searching</p>}
      {players.length > 0 && (
        <ul className="w-full max-w-md">
          {players.map(p => (
            <li
            key={p.id}
            onClick={() => setSelectedPlayerId(p.id)}
            className={`px-4 py-3 border-b border-gray-700 text-white cursor-pointer hover:bg-gray-700 ${selectedPlayerId === p.id ? 'bg-gray-700' : ''}`}
          >
            {p.fullName} — {p.primaryPosition?.abbreviation}
          </li>
          ))}
        </ul>
        )}
        {statsLoading && <p className="text-white mt-4">Loading stats...</p>}

        {statsData && (
          <div className="mt-6 w-full max-w-md bg-gray-800 rounded-xl p-6 text-white">
            <pre className="text-sm overflow-auto">{JSON.stringify(statsData, null, 2)}</pre>
          </div>
        )}
      </div>
    )
  }