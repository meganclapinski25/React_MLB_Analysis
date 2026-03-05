import { useState } from 'react';
import { useGetStandingsQuery } from '../features/mlb/mlbApi';
import TeamSelect from '../components/shared/TeamSelect';
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function TeamsPage() {

  const [selectedTeam, setSelectedTeam] = useState(null);

  const { data, isLoading, isError} = useGetStandingsQuery(2025);
  
  if (isLoading) return <p className="text-white p-8">Loading...</p>;
  if (isError) return <p className="text-red-400 p-8">Something went wrong.</p>;


  const teams = data?.records?.flatMap(record =>
    record.teamRecords.map(t=>({
      
      name: t.team.name,
      diff: t.wins - t.losses,
      wins: t.wins,
      losses: t.losses,
      winPct: (t.wins / (t.wins + t.losses)).toFixed(3),
      
    }))
  )??[];
  

    return (
      <div className='flex flex-col items-center p-8'>
        <h1 className="text-2xl font-bold text-white">Teams</h1>
        <p className='text-grey-600 mb-6'>Which teams have the most wins in the AL and NL?
        </p>
        <TeamSelect
          teams={teams}
          onChange={e => {
            const team = teams.find(t => t.name === e.target.value);
            setSelectedTeam(team);
          }}
          placeholder="Select a team..."
        />
        <div className="w-full mt-8" >
          <h2 className="text-white text-xl font-bold mb-2">Over / Under .500</h2>
            <p className="text-gray-400 text-sm mb-4">Win - Loss differential for all 30 teams</p>
              <BarChart
                style={{ width: '100%', maxWidth: '1200px', aspectRatio: 1.618 }}
                responsive
                data={teams}
                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
                <XAxis dataKey="name" stroke="#9CA3AF" tick={false} />
                <YAxis stroke="#9CA3AF"/>
                <Tooltip
                 contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#fff' }}
                 formatter={(value) => [`${value > 0 ? '+' : ''}${value}`, 'Win Diff']}
                />
                <ReferenceLine y={0} stroke="#fff" strokeDasharray="3 3" />
                
                <Bar dataKey="diff" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            
        </div>



      </div>
    )
  }