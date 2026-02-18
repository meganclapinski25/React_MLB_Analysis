import { useState } from "react";
import styles from './Navbar.module.css';

const pages = ['Standings', 'Teams', 'Players', 'Head to Head Games']

export default function Navbar ({currentPage, onNavigate}) {
    return (
        <nav className={styles.navbar}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚾</span>
          <span className={styles.logoText}>MLB Analytics</span>
        </div>

        <ul className={styles.navLinks}>
        {pages.map(page => (
          <li key={page}>
            <button
              className={`${styles.navBtn} ${currentPage === page ? styles.active : ''}`}
              onClick={() => onNavigate(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    );
}