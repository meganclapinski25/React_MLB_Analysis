import { useGetStandingsQuery } from "../features/mlb/mlbApi";


export default function StandingsPage(){


  
  const { data, isLoading, isError } = useGetStandingsQuery(2025);
      if (isLoading) return <p className="text-white p-8">Loading standings...</p>;
      if (isError) return <p className="text-red-400 p-8">Failed to load standings.</p>;
  
      const teams = data.records.flatMap(record =>
        record.teamRecords.map(t=>({
          name: t.team.name,
          wins:t.wins,
          losses:t.losses,
        }))
      );
       
     
  




  return(
    <div>
      <h1>2025 MLB Standings</h1>
      <div>
        {teams.map(team => (
          <div key = {team.name} className='flex justify-between items-center text-white py-3 px-4 border-b border-gray-700 '>
            <span>{team.name}</span>
            <span>{team.wins} - {team.losses}</span>
          </div>
        ))}
      </div>
    </div>
  );
}