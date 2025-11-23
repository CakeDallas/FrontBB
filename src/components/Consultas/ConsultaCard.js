import styles from './consultaCard.module.css';

export default function ConsultaCard({ consulta, onCancelar }) {
  const formatarData = (dataString) => {
    return new Date(dataString).toLocaleDateString('pt-BR');
  };

  const getStatusColor = (status) => {
    const cores = {
      agendada: styles.statusAgendada,
      realizada: styles.statusRealizada,
      cancelada: styles.statusCancelada
    };
    return cores[status] || styles.statusDefault;
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.pacienteNome}>{consulta.paciente_nome}</h3>
        <span className={`${styles.status} ${getStatusColor(consulta.status)}`}>
          {consulta.status}
        </span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Médico:</span>
          <span className={styles.infoValue}>{consulta.medico_nome}</span>
        </div>
        
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Especialidade:</span>
          <span className={styles.infoValue}>{consulta.especialidade}</span>
        </div>
        
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>Data:</span>
          <span className={styles.infoValue}>
            {formatarData(consulta.data)} às {consulta.hora}
          </span>
        </div>

        {consulta.observacoes && (
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Observações:</span>
            <span className={styles.infoValue}>{consulta.observacoes}</span>
          </div>
        )}
      </div>

      <div className={styles.cardActions}>
        {consulta.status === 'agendada' && (
          <button
            onClick={() => onCancelar(consulta.id)}
            className={styles.cancelButton}
          >
            Cancelar Consulta
          </button>
        )}
      </div>
    </div>
  );
}