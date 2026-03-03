import { useState } from 'react';
import { fetchStandings } from '../services/mlbAPI';

export default function HeadToHeadPage() {

  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);

    function handleTeamA(e){
      const selectedId = parseInt(e.target.value);
      const selectedTeam = teams.find(t=>t.id === selectedId);
      setTeamA(selectedTeam);
    }

    function handleTeamB(e){
      const selectedId = parseInt(e.target.value);
      const selectedTeam = teams.find(t=>t.id === selectedId);
      setTeamB(selectedTeam);
    }






    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Head to Head</h1>
        <p className="text-grey-400 mb-6">Is this team's record real or flulky *change this later**</p>
      
        <div className='flex gap-6 mb-8'>
          <select defaultValue="" onChange={handleTeamA}>
            <option value="" disabled>Select Team A...</option>
            {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>

          <span>vs</span>

          <select defaultValue="" onChange={handleTeamB}>
            <option value="" disabled>Select Team B...</option>
            {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
          </select>


        </div>
      </div>
    );
  }
