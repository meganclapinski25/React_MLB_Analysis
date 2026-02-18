import { useState } from 'react'
import Navbar from './components/shared/NavBar';

import './App.css'

function App() {
  const [currentPage, setCurrentPage] =useState('Standings');


  
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
