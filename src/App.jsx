import { useState } from 'react'
import Navbar from './components/shared/NavBar';
import StandingsPage from './pages/StandingsPage';
import TeamsPage from './pages/TeamsPage';
import PlayersPage from './pages/PlayersPage';
import HeadToHeadPage from './pages/HeadToHeadPage';

import './App.css'

function App() {
  const [currentPage, setCurrentPage] =useState('Standings');


  const renderPage = () => {
    switch (currentPage){
      case 'Standings':return <StandingsPage/>
      case 'Players':return <PlayersPage/>
      case 'Teams':return <TeamsPage/>
      case 'Head to Head':return <HeadToHeadPage/>
      default: return null;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </>
  )
}

export default App