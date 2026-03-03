import { useState } from 'react';

export default function TeamsPage() {

  const [selectedTeam, setSelectedTeam] = usState(null);


    return (
      <div className='flex flex-col items-center p-8'>
        <h1 className='"text-2xl font-bold'>Teams</h1>
        <p className='text-grey-600 mb-6'>Analyictical Question</p>





      </div>
    )
  }