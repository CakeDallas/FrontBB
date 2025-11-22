const BASE_URL = 'https://clinica.dev.vilhena.ifro.edu.br/api';

// Função para fazer requisições à API
export const api = {
  // Consultas
  async getConsultas() {
    const response = await fetch(`${BASE_URL}/consultas`);
    return response.json();
  },

  async agendarConsulta(consulta) {
    const response = await fetch(`${BASE_URL}/consultas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consulta),
    });
    return response.json();
  },

  async cancelarConsulta(id) {
    const response = await fetch(`${BASE_URL}/consultas/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },

  // Médicos
  async getMedicos() {
    const response = await fetch(`${BASE_URL}/medicos`);
    return response.json();
  },

  // Pacientes
  async getPacientes() {
    const response = await fetch(`${BASE_URL}/pacientes`);
    return response.json();
  },

  // Especialidades
  async getEspecialidades() {
    const response = await fetch(`${BASE_URL}/especialidades`);
    return response.json();
  }
};