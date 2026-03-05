import { useState } from 'react';
import { useGetStandingsQuery } from '../features/mlb/mlbApi';
import StatCard from '../components/shared/StatCard';
import TeamSelect from '../components/shared/TeamSelect';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function HeadToHeadPage() {

  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);
  
  const { data, isLoading, isError } = useGetStandingsQuery(2025);
  if (isLoading) return <p className="text-white p-8">Loading...</p>;
  if (isError) return <p className="text-red-400 p-8">Something went wrong.</p>;

      const allTeams = data?.records?.flatMap(record =>
        record.teamRecords.map(t=>({
          id:t.team.id,
          name: t.team.name,
          wins: t.wins,
          winPct: parseFloat(t.winningPercentage),
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
        <p className="text-grey-400 mb-6">Which team has a better win percentage this season?</p>
      
        <div className='flex flex-col mb-8 items-center  '>
          <TeamSelect teams={allTeams} onChange={handleTeamA} placeholder="Select Team A" />

          <span className='pb-8'>vs</span>

          <TeamSelect teams={allTeams} onChange={handleTeamB} placeholder="Select Team B" />


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
        {teamA && teamB && (
          <div className="mt-8 flex flex-col items-center">
            <h2 className="text-white text-xl font-bold mb-4">Win % Comparison</h2>
            <BarChart
              style={{ width: '100%', maxWidth: '700px', aspectRatio: 1.618 }}
              responsive
              data={[
                { name: teamA.name, winPct: teamA.winPct },
                { name: teamB.name, winPct: teamB.winPct },
              ]}
              margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis domain={[0, 1]} tickFormatter={v => `${(v * 100).toFixed(0)}%`} stroke="#9CA3AF" />
              <Tooltip formatter={v => `${(v * 100).toFixed(1)}%`} />
              <Legend />
              <Bar dataKey="winPct" fill="#3B82F6" radius={[10, 10, 0, 0]} />
            </BarChart>
          </div>
        )}
      </div>
    );
  }
