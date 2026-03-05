import { useState } from 'react';
import { useGetStandingsQuery } from '../features/mlb/mlbApi';
import TeamSelect from '../components/shared/TeamSelect';
export default function TeamsPage() {

  const [selectedTeam, setSelectedTeam] = useState(null);

  const { data, isLoading, isError} = useGetTeamsQuery(2025);
  
  if (isLoading) return <p className="text-white p-8">Loading...</p>;
  if (isError) return <p className="text-red-400 p-8">Something went wrong.</p>;


  const teams = data?.record?.flatMap(record =>
    record.teamRecords.map(t=>({
      id: t.team.id,
      name: t.team.name,
      wins: t.wins,
      losses: t.losses,
      league: record.league.name,
    }))
  ).sort((a, b) => b.wins - a.wins) ?? [];

  

    return (
      <div className='flex flex-col items-center p-8'>
        <h1 className='"text-2xl font-bold text-white'>Teams</h1>
        <p className='text-grey-600 mb-6'>Which teams have the most wins in the AL and NL?
        </p>
        <TeamSelect
          teams={teams}
          onChange={e => setSelectedTeam(e.target.value)}
          placeholder="Select a team..."
        />




      </div>
    )
  }