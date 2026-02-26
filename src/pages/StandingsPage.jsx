import {useState, useEffect} from 'react';
import {fetchStandings} from '../services/mlbAPI';



export default function StandingsPage(){


  const [teams, setTeams] = useState([]);


  useEffect(()=>{
    fetchStandings(2025).then(data=>{
      const allTeams = data.records.flatMap(record =>
        record.teamRecords.map(t=>({
          name: t.team.name,
          wins:t.wins,
          losses:t.losses,
        }))
      );
       
     
      //console.log(top5);
      setTeams(allTeams);
    })
  }, [])





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