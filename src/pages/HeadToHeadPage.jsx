import { useState } from 'react';
import { fetchHeadtoHead } from '../services/mlbAPI';

export default function HeadToHeadPage() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Head to Head</h1>
        <p className="text-grey-400 mb-6">Is this team's record real or flulky *change this later**</p>
      </div>
    );
  }