import { apiClient, API_CONFIG } from './api';
import { mockAuditData } from './mockData';

// Toggle between mock data and real API
const USE_MOCK_DATA = true;

class AuditService {
  async getAuditMetrics() {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockAuditData;
    }

    try {
      return await apiClient.get(`${API_CONFIG.ENDPOINTS.AUDIT}/metrics`);
    } catch (error) {
      console.error('Failed to fetch audit metrics:', error);
      return mockAuditData;
    }
  }

  async getBiasDetection() {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return {
        biasDetected: false,
        warnings: [
          {
            type: 'origine',
            message: 'Legere variance detectee - Origine ethnique',
            severity: 'warning',
            value: 8.5,
            threshold: 10,
          },
        ],
        lastAnalysis: '07/12/2025 a 14:30',
      };
    }

    try {
      return await apiClient.get(`${API_CONFIG.ENDPOINTS.AUDIT}/bias`);
    } catch (error) {
      console.error('Failed to fetch bias detection:', error);
      return { biasDetected: false, warnings: [], lastAnalysis: null };
    }
  }

  async getModelDrift() {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 200));
      return {
        drift: 0.03,
        status: 'normal',
        description: 'Derive temporelle detectee (Normal)',
      };
    }

    try {
      return await apiClient.get(`${API_CONFIG.ENDPOINTS.AUDIT}/drift`);
    } catch (error) {
      console.error('Failed to fetch model drift:', error);
      return { drift: 0, status: 'unknown', description: '' };
    }
  }

  async generateAuditReport(options = {}) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Mock: Generating audit report with options', options);
      return {
        reportId: `AUDIT-${Date.now()}`,
        status: 'generated',
        downloadUrl: '/mock/audit-report.pdf',
      };
    }

    try {
      return await apiClient.post(`${API_CONFIG.ENDPOINTS.AUDIT}/generate-report`, options);
    } catch (error) {
      console.error('Failed to generate audit report:', error);
      throw error;
    }
  }
}

export default new AuditService();
