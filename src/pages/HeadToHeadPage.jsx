import { useEffect, useState } from 'react';
import { fetchStandings } from '../services/mlbAPI';

export default function HeadToHeadPage() {

  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);
  const [allTeams, setAllTeams] =  useState([]);


  useEffect(() =>{
    fetchStandings(2025).then(data =>{
      const parsed = data.records.flatMap(record =>
        record.teamRecords.map(t=>({
          id:t.team.id,
          name: t.team.name,
          wins: t.wins,
        }))
      );
      setAllTeams(parsed);
    });
  }, []);
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
        <p className="text-grey-400 mb-6">Is this team's record real or flulky *change this later**</p>
      
        <div className='flex gap-6 mb-8 items-center'>
          <select defaultValue="" onChange={handleTeamA}>
            <option value="" disabled>Select Team A...</option>
            {allTeams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>

          <span>vs</span>

          <select defaultValue="" onChange={handleTeamB}>
            <option value="" disabled>Select Team B...</option>
            {allTeams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>


        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Team A</h2>
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-gray-400 text-xs mb-1">Actual Wins</p>
              <p className="text-white text-2xl font-bold">--</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Team B</h2>
            <div className="bg-gray-700 rounded-lg p-4">
              <p className="text-gray-400 text-xs mb-1">Actual Wins</p>
              <p className="text-white text-2xl font-bold">--</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
