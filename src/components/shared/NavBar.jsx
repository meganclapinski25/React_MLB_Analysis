import { useState } from "react";

import { current } from "@reduxjs/toolkit";

const pages = ['Standings', 'Teams', 'Players', 'Head to Head Games']

export default function Navbar ({currentPage, onNavigate}) {
    return (
        <nav className="flex items-center justify-between bg-blue-950  border-b-4 border-red-600">
        <div className = "flex items-center gap-2 text-white text-xl pl-4">
          <span className="text-2xl ">⚾</span>
          <span className="font-semibold">MLB Analytics</span>
        </div>

        <ul className="flex gap-3 list-none">
        {pages.map(page => (
          <li key={page}>
            <button
              
              onClick={() => onNavigate(page)}
              className={`px-4 py-2 rounded text-sm text-red
                ${currentPage === page
                  ? 'bg-red-6000 font-semibold'
                  : 'opacity-75'
                }`}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    );
}