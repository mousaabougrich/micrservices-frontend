import { useState, useEffect } from 'react';
import scoresService from '../services/scoresService';

export const useScores = (filters = {}) => {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        setLoading(true);
        const data = await scoresService.getScores(filters);
        setScores(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [JSON.stringify(filters)]);

  return { scores, loading, error };
};
