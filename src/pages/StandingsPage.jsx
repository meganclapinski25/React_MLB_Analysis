import {useState, useEffect} from 'react';
import {fetchStandings} from '../services/mlbAPI';



export default function StandingsPage(){


  const [teams, setTeams] = useState([]);


  useEffect(()=>{
    fetchStandings(2025).then(data=>{
      const first = data.records[0].teamRecords;
      const top5 = first.slice(0,5).map(t=>({
        name: t.team.name,
        wins:t.wins,
        losses:t.losses,
      }));
      //console.log(top5);
      setTeams(top5);
    })
  }, [])





  return(
    <div>
      <h1>2025 MLB Standings</h1>
      <div>
        {teams.map(team => (
          <div key = {team.name}>
            <span>{team.name}</span>
            <span>{team.wins} - {team.losses}</span>
          </div>
        ))}
      </div>
    </div>
  );
}