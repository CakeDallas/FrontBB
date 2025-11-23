'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css';

export default function DesktopMenu({ menuItems }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className={styles.desktopNav}>
      {menuItems.map((item, index) => (
        <div key={item.categoria} className={styles.navItem}>
          <button
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(null)}
            className={styles.navButton}
          >
            {item.categoria}
          </button>
          
          {activeDropdown === index && (
            <div 
              className={styles.dropdown}
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.acoes.map((acao) => (
                <Link
                  key={acao}
                  href={`/${item.categoria.toLowerCase()}/${acao.toLowerCase()}`}
                  className={styles.dropdownLink}
                >
                  {acao}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}