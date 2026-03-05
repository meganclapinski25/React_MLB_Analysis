import { useState } from 'react';
import PlayerCard from '../components/shared/PlayerCard';
import StatCard from '../components/shared/StatCard';
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
      {playerId: selectedPlayerId},
      {skip: !selectedPlayerId}
    );
    if (searchLoading) return <p className="text-white p-8">Loading...</p>;

    const players = searchData?.people ?? [];
    const stats = statsData?.stats?.[0]?.splits?.[0]?.stat ?? null;

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

      {searchLoading && <p className='text-white'> Searching</p>}
      {players.length > 0 && (
        <ul className="w-full max-w-md">
          {players.map(p => (
              <PlayerCard
              key={p.id}
              player={p}
              isSelected={selectedPlayerId === p.id}
              onClick={() => setSelectedPlayerId(p.id)}
            />
          ))}
        </ul>
        )}
        {statsLoading && <p className="text-white mt-4">Loading stats...</p>}

        {stats && (
          <div className="grid grid-cols-3 gap-4 w-full max-w-lg mt-6">
            <StatCard label="AVG" value={stats.avg} />
            <StatCard label="OBP" value={stats.obp} />
            <StatCard label="SLG" value={stats.slg} />
            <StatCard label="HR" value={stats.homeRuns} />
            <StatCard label="RBI" value={stats.rbi} />
            <StatCard label="OPS" value={stats.ops} />
          </div>
        )}
      </div>
    )
  }