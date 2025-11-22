import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <h1 className={styles.heroTitle}>
                    Clínica Médica Saúde Total
                </h1>
                <p className={styles.heroSubtitle}>
                    Desenvolvido por <strong>Maria & João</strong>
                </p>

                <div className={styles.heroActions}>
                    <Link href="/consultas" className={styles.primaryButton}>
                        Ver Consultas
                    </Link>
                    <Link href="/consultas/agendar" className={styles.secondaryButton}>
                        Agendar Consulta
                    </Link>
                </div>
            </div>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>👨‍⚕️</div>
                    <h3 className={styles.featureTitle}>Médicos Especialistas</h3>
                    <p className={styles.featureDescription}>
                        Equipe qualizada pronta para atender suas necessidades
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>📅</div>
                    <h3 className={styles.featureTitle}>Agendamento Online</h3>
                    <p className={styles.featureDescription}>
                        Agende suas consultas de forma rápida e prática
                    </p>
                </div>

                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🏥</div>
                    <h3 className={styles.featureTitle}>Multi-especialidades</h3>
                    <p className={styles.featureDescription}>
                        Diversas especialidades médicas em um só lugar
                    </p>
                </div>
            </div>
        </div>
    );
}