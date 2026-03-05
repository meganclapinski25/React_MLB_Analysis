import { useGetStandingsQuery } from "../features/mlb/mlbApi";


export default function StandingsPage(){


  
  const { data, isLoading, isError } = useGetStandingsQuery(2025);
  if (isLoading) return <p className="text-white p-8">Loading...</p>;
  if (isError) return <p className="text-red-400 p-8">Something went wrong.</p>;
  

      const divisions = data.records.map(record =>({
        division: record.division,
        teams: record.teamRecords.map(t=>({
          name: t.team.name,
          wins:t.wins,
          losses:t.losses
        }))
      }));
       
     
  
      // console.log(divisions[0].division);
      const divisionNames = {
        200: 'AL West ',
        201: 'AL East',
        202: 'AL Central',
        203: 'NL West',
        204: 'NL East',
        205: 'NL Central',
      };



      return (
        <div className="p-8">
          <h1 className="text-white text-2xl font-bold mb-6">2025 MLB Standings</h1>
          <div className="grid grid-cols-2 gap-8">
            {divisions.map(div => (
              <div key={div.division.id}>
                <h2 className="text-blue-400 font-bold text-lg mb-3">{divisionNames[div.division.id]}</h2>
                {div.teams.map(team => (
                  <div key={team.name} className="flex justify-between text-white py-2 px-4 border-b border-gray-700">
                    <span>{team.name}</span>
                    <span>{team.wins} - {team.losses}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
}