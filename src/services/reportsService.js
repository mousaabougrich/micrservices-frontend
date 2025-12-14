import { apiClient, API_CONFIG } from './api';
import { mockReportsData } from './mockData';

// Toggle between mock data and real API
const USE_MOCK_DATA = true;

class ReportsService {
  async getReports(filters = {}) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockReportsData;
    }

    try {
      const queryParams = new URLSearchParams(filters).toString();
      const endpoint = `${API_CONFIG.ENDPOINTS.REPORTS}?${queryParams}`;
      return await apiClient.get(endpoint);
    } catch (error) {
      console.error('Failed to fetch reports:', error);
      return mockReportsData;
    }
  }

  async generateReport(type, options = {}) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Mock: Generating report', type, options);
      return {
        reportId: `REPORT-${Date.now()}`,
        type,
        status: 'generated',
        downloadUrl: `/mock/${type}-report.pdf`,
      };
    }

    try {
      return await apiClient.post(`${API_CONFIG.ENDPOINTS.REPORTS}/generate`, {
        type,
        ...options,
      });
    } catch (error) {
      console.error(`Failed to generate ${type} report:`, error);
      throw error;
    }
  }

  async downloadReport(reportId) {
    if (USE_MOCK_DATA) {
      console.log('Mock: Downloading report', reportId);
      return { success: true, message: 'Report downloaded (mock)' };
    }

    try {
      return await apiClient.get(`${API_CONFIG.ENDPOINTS.REPORTS}/${reportId}/download`);
    } catch (error) {
      console.error(`Failed to download report ${reportId}:`, error);
      throw error;
    }
  }

  async shareReport(reportId, recipients) {
    if (USE_MOCK_DATA) {
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Mock: Sharing report', reportId, 'with', recipients);
      return { success: true, message: 'Report shared (mock)' };
    }

    try {
      return await apiClient.post(`${API_CONFIG.ENDPOINTS.REPORTS}/${reportId}/share`, {
        recipients,
      });
    } catch (error) {
      console.error(`Failed to share report ${reportId}:`, error);
      throw error;
    }
  }
}

export default new ReportsService();
