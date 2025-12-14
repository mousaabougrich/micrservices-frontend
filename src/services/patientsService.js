import { apiClient, API_CONFIG } from './api';
import { mockPatientsData, mockStatsData } from './mockData';

// Toggle between mock data and real API
const USE_MOCK_DATA = true;

class PatientsService {
  async getPatients(filters = {}) {
    if (USE_MOCK_DATA) {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockPatientsData;
    }

    try {
      const queryParams = new URLSearchParams(filters).toString();
      const endpoint = `${API_CONFIG.ENDPOINTS.PATIENTS}?${queryParams}`;
      return await apiClient.get(endpoint);
    } catch (error) {
      console.error('Failed to fetch patients:', error);
      // Fallback to mock data on error
      return mockPatientsData;
    }
  }

  async getPatientById(id) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return mockPatientsData.find(p => p.id === id);
    }

    try {
      return await apiClient.get(`${API_CONFIG.ENDPOINTS.PATIENTS}/${id}`);
    } catch (error) {
      console.error(`Failed to fetch patient ${id}:`, error);
      return mockPatientsData.find(p => p.id === id);
    }
  }

  async getHighRiskPatients(limit = 10) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockPatientsData
        .filter(p => p.score >= 0.7)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
    }

    try {
      return await apiClient.get(`${API_CONFIG.ENDPOINTS.PATIENTS}/high-risk?limit=${limit}`);
    } catch (error) {
      console.error('Failed to fetch high-risk patients:', error);
      return mockPatientsData
        .filter(p => p.score >= 0.7)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);
    }
  }

  async getPatientStats() {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return mockStatsData;
    }

    try {
      return await apiClient.get(`${API_CONFIG.ENDPOINTS.PATIENTS}/stats`);
    } catch (error) {
      console.error('Failed to fetch patient stats:', error);
      return mockStatsData;
    }
  }

  async updatePatient(id, data) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Mock: Updated patient', id, data);
      return { success: true, id, ...data };
    }

    try {
      return await apiClient.put(`${API_CONFIG.ENDPOINTS.PATIENTS}/${id}`, data);
    } catch (error) {
      console.error(`Failed to update patient ${id}:`, error);
      throw error;
    }
  }
}

export default new PatientsService();
