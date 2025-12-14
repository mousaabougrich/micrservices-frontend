import { useState, useEffect } from 'react';
import auditService from '../services/auditService';

export const useAudit = () => {
  const [auditData, setAuditData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAudit = async () => {
      try {
        setLoading(true);
        const data = await auditService.getAuditMetrics();
        setAuditData(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAudit();
  }, []);

  return { auditData, loading, error };
};
