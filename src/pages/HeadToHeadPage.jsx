import { useState } from 'react';
import { useGetStandingsQuery } from '../features/mlb/mlbApi';
import StatCard from '../components/shared/StatCard';

export default function HeadToHeadPage() {

  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);
  
  const { data, isLoading } = useGetStandingsQuery(2025);
  if (isLoading) return <p className="text-white p-8">Loading teams...</p>;
      const allTeams = data?.records?.flatMap(record =>
        record.teamRecords.map(t=>({
          id:t.team.id,
          name: t.team.name,
          wins: t.wins,
        }))
      ) ?? [];
     
    function handleTeamA(e){
      const selectedId = parseInt(e.target.value);
      const selectedTeam = allTeams.find(t=>t.id === selectedId);
      setTeamA(selectedTeam);
    }

    function handleTeamB(e){
      const selectedId = parseInt(e.target.value);
      const selectedTeam = allTeams.find(t=>t.id === selectedId);
      setTeamB(selectedTeam);
    }


    



    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Head to Head</h1>
        <p className="text-grey-400 mb-6">Analyitcal Question</p>
      
        <div className='flex flex-col mb-8 items-center  '>
          <select defaultValue="" onChange={handleTeamA} className='bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 mb-8'>
            <option value="" disabled>Select Team A</option>
            {allTeams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>

          <span className='pb-8'>vs</span>

          <select defaultValue="" onChange={handleTeamB} className='bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 mb-8'>
            <option value="" disabled>Select Team B</option>
            {allTeams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>


        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">{teamA?.name ?? 'Team A'}</h2>
            <StatCard label="Actual Wins" value={teamA?.wins} />
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">{teamB?.name ?? 'Team B'}</h2>
            <StatCard label="Actual Wins" value={teamB?.wins} />
          </div>
        </div>
      </div>
    );
  }
