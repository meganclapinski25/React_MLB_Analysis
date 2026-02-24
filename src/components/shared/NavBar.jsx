import { useState } from "react";
import styles from './Navbar.module.css';
import { current } from "@reduxjs/toolkit";

const pages = ['Standings', 'Teams', 'Players', 'Head to Head Games']

export default function Navbar ({currentPage, onNavigate}) {
    return (
        <nav className="flex items-cetner justify-between bg-blue-950 px-8 h-16 border-b-4 border-black sticky">
        <div className = "flex items-cetner gap-2 text-white text-xl">
          <span className="text-2xl">⚾</span>
          <span className="font-semibold">MLB Analytics</span>
        </div>

        <ul className="flex gap-2 list-none">
        {pages.map(page => (
          <li key={page}>
            <button
              
              onClick={() => onNavigate(page)}
              className={`px-4 py-2 rounded text-sm text-white
                ${currentPage === page
                  ? 'bg-blue-50 font-semibold'
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