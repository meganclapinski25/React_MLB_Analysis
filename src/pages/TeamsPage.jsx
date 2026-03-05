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
      
      
    }))
  ).sort((a, b) => b.diff - a.diff) ?? [];

  

    return (
      <div className='flex flex-col items-center p-8'>
        <h1 className="text-2xl font-bold text-white">Teams</h1>
        <p className='text-grey-600 mb-6'>Which teams have the most wins in the AL and NL?
        </p>
        <TeamSelect
          teams={teams}
          onChange={e => setSelectedTeam(e.target.value)}
          placeholder="Select a team..."
        />
        <div>
          <h2>
            <p>
              <BarChart
              >
                <CartesianGrid/>
                <XAxis/>
                <YAxis/>
                <Tooltip
                />
                <ReferenceLine y={0} stroke="#fff" strokeDasharray="3 3" />
                <Brush dataKey="name" height={25} stroke="#3B82F6" />
                <Bar dataKey="diff" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </p>
          </h2>
        </div>



      </div>
    )
  }