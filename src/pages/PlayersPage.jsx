import { useState } from 'react';





export default function PlayersPage() {
    const [query, setQuery] = useState('');
    const [searched, setSearched] = useState(false);


    function handleSearch(e){
      e.preventDefault();
      setSearched(true);
    }

    return (
      <div className='flex flex-col items-center p-8'>
        <h1 className='text-2xl font-bold text-white mb-2'> Players </h1>
        <p className='text-grey-400 mb-6'> Analyical Question</p>

        <form onSubmit={handleSearch} className="flex gap-3 mb-8">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search player name"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none w-72"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Search
        </button>
      </form>
      </div>
    )
  }