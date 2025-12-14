import { apiClient, API_CONFIG } from './api';
import { mockScoresData } from './mockData';

// Toggle between mock data and real API
const USE_MOCK_DATA = true;

class ScoresService {
  async getScores(filters = {}) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockScoresData;
    }

    try {
      const queryParams = new URLSearchParams(filters).toString();
      const endpoint = `${API_CONFIG.ENDPOINTS.SCORES}?${queryParams}`;
      return await apiClient.get(endpoint);
    } catch (error) {
      console.error('Failed to fetch scores:', error);
      return mockScoresData;
    }
  }

  async getScoreById(id) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return mockScoresData.find(s => s.id === id);
    }

    try {
      return await apiClient.get(`${API_CONFIG.ENDPOINTS.SCORES}/${id}`);
    } catch (error) {
      console.error(`Failed to fetch score ${id}:`, error);
      return mockScoresData.find(s => s.id === id);
    }
  }

  async calculateScore(patientId, fhirData) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Mock: Calculating score for patient', patientId);
      return {
        id: `FHIR-${Date.now()}`,
        patient: patientId,
        date: new Date().toLocaleString('fr-FR'),
        score: Math.random() * 0.3 + 0.6,
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
      };
    }

    try {
      return await apiClient.post(`${API_CONFIG.ENDPOINTS.SCORES}/calculate`, {
        patientId,
        fhirData,
      });
    } catch (error) {
      console.error('Failed to calculate score:', error);
      throw error;
    }
  }

  async getFhirResources() {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return {
        patients: 87,
        observations: 1243,
        medications: 567,
        conditions: 398,
      };
    }

    try {
      return await apiClient.get(`${API_CONFIG.ENDPOINTS.SCORES}/fhir-resources`);
    } catch (error) {
      console.error('Failed to fetch FHIR resources:', error);
      return {
        patients: 0,
        observations: 0,
        medications: 0,
        conditions: 0,
      };
    }
  }
}

export default new ScoresService();
