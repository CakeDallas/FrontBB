'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/services/api';
import styles from './page.module.css';

export default function AgendarConsulta() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    paciente_id: '',
    medico_id: '',
    data: '',
    hora: '',
    observacoes: ''
  });
  
  const [medicos, setMedicos] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [carregandoDados, setCarregandoDados] = useState(true);

  useEffect(() => {
    carregarDados();
  }, []);

  
  const carregarDados = async () => {
    try {
      const [medicosData, pacientesData] = await Promise.all([
        api.getMedicos(),
        api.getPacientes()
      ]);
      
      setMedicos(medicosData);
      setPacientes(pacientesData);
    } catch (err) {
      console.error('Erro ao carregar dados:', err);
      alert('Erro ao carregar dados da aplicação');
    } finally {
      setCarregandoDados(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.agendarConsulta(formData);
      alert('Consulta agendada com sucesso!');
      router.push('/consultas');
    } catch (err) {
      alert('Erro ao agendar consulta. Tente novamente.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (carregandoDados) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Carregando dados...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Agendar Nova Consulta</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          {/* Paciente */}
          <div className={styles.field}>
            <label className={styles.label}>Paciente *</label>
            <select
              name="paciente_id"
              value={formData.paciente_id}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="">Selecione um paciente</option>
              {pacientes.map(paciente => (
                <option key={paciente.id} value={paciente.id}>
                  {paciente.nome}
                </option>
              ))}
            </select>
          </div>

          {/* Médico */}
          <div className={styles.field}>
            <label className={styles.label}>Médico *</label>
            <select
              name="medico_id"
              value={formData.medico_id}
              onChange={handleChange}
              required
              className={styles.select}
            >
              <option value="">Selecione um médico</option>
              {medicos.map(medico => (
                <option key={medico.id} value={medico.id}>
                  {medico.nome} - {medico.especialidade}
                </option>
              ))}
            </select>
          </div>

          {/* Data */}
          <div className={styles.field}>
            <label className={styles.label}>Data *</label>
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className={styles.input}
            />
          </div>

          {/* Hora */}
          <div className={styles.field}>
            <label className={styles.label}>Hora *</label>
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>

          {/* Observações */}
          <div className={styles.fullWidth}>
            <label className={styles.label}>Observações</label>
            <textarea
              name="observacoes"
              value={formData.observacoes}
              onChange={handleChange}
              rows={4}
              className={styles.textarea}
              placeholder="Observações adicionais sobre a consulta..."
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={() => router.back()}
            className={styles.cancelButton}
            disabled={loading}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={loading}
          >
            {loading ? 'Agendando...' : 'Agendar Consulta'}
          </button>
        </div>
      </form>
    </div>
  );
}