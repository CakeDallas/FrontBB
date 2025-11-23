'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ConsultaCard from '@/components/Consultas/ConsultaCard';
import { api } from '@/services/api';
import styles from './consultas.module.css';

export default function ListarConsultas() {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    carregarConsultas();
  }, []);

  const carregarConsultas = async () => {
    try {
      setLoading(true);
      const data = await api.getConsultas();
      setConsultas(data);
    } catch (err) {
      setError('Erro ao carregar consultas');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelarConsulta = async (id) => {
    if (confirm('Tem certeza que deseja cancelar esta consulta?')) {
      try {
        await api.cancelarConsulta(id);
        carregarConsultas(); // Recarrega a lista
      } catch (err) {
        alert('Erro ao cancelar consulta');
      }
    }
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Carregando consultas...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Lista de Consultas</h1>
        <Link href="/consultas/agendar" className={styles.addButton}>
          Agendar Nova Consulta
        </Link>
      </div>

      <div className={styles.grid}>
        {consultas.map((consulta) => (
          <ConsultaCard 
            key={consulta.id} 
            consulta={consulta}
            onCancelar={handleCancelarConsulta}
          />
        ))}
      </div>

      {consultas.length === 0 && (
        <div className={styles.emptyState}>
          <div className={styles.emptyText}>Nenhuma consulta agendada</div>
          <Link href="/consultas/agendar" className={styles.emptyLink}>
            Agendar primeira consulta
          </Link>
        </div>
      )}
    </div>
  );
}