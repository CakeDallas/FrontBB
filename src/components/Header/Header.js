'use client';
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu.js';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      categoria: 'Especialidades',
      acoes: ['Listar', 'Adicionar', 'Editar', 'Excluir']
    },
    {
      categoria: 'Médicos',
      acoes: ['Listar', 'Adicionar', 'Editar', 'Excluir']
    },
    {
      categoria: 'Pacientes',
      acoes: ['Listar', 'Adicionar', 'Editar', 'Excluir']
    },
    {
      categoria: 'Consultas',
      acoes: ['Listar', 'Agendar', 'Editar', 'Cancelar']
    }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <h1 className={styles.logoTitle}>Clínica Saúde Total</h1>
            <p className={styles.logoSubtitle}>Maria & João</p>
          </div>

          <DesktopMenu menuItems={menuItems} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileButton}
            aria-label="Abrir menu"
          >
            <span className={styles.hamburger}></span>
          </button>
        </div>

        <MobileMenu 
          menuItems={menuItems} 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
        />
      </div>
    </header>
  );
}