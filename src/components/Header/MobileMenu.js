'use client';
import Link from 'next/link';
import styles from './header.module.css';

export default function MobileMenu({ menuItems, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenuContent}>
        {menuItems.map((item) => (
          <div key={item.categoria} className={styles.mobileNavItem}>
            <div className={styles.mobileNavCategory}>{item.categoria}</div>
            <div className={styles.mobileNavActions}>
              {item.acoes.map((acao) => (
                <Link
                  key={acao}
                  href={`/${item.categoria.toLowerCase()}/${acao.toLowerCase()}`}
                  className={styles.mobileNavLink}
                  onClick={onClose}
                >
                  {acao}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}