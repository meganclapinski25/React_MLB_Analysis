import { useState } from 'react';
import { useGetTeamsQuery } from '../features/mlb/mlbApi';
export default function TeamsPage() {

  const [selectedTeam, setSelectedTeam] = useState(null);

  const { data, isLoading } = useGetTeamsQuery(2025);

  const teams = data?.teams ?? [];

  if (isLoading) return <p className="text-white p-8">Loading teams...</p>;

    return (
      <div className='flex flex-col items-center p-8'>
        <h1 className='"text-2xl font-bold'>Teams</h1>
        <p className='text-grey-600 mb-6'>Analyictical Question</p>
          <select
          defaultValue=""
          onChange={e => setSelectedTeam(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 mb-8"
        >
          <option value="" disabled>Select a team...</option>
          {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>




      </div>
    )
  }