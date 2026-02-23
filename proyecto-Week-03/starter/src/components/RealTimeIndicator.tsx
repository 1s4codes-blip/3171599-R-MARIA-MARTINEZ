import React, { useEffect, useState } from 'react';
import { RealTimeData } from '../types';
import { fetchRealTimeData } from '../utils/api';

const POLLING_INTERVAL = 5000;
export const RealTimeIndicator: React.FC = () => {
  const [data, setData] = useState<RealTimeData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsUpdating(true);
        const newData = await fetchRealTimeData();
        setData(newData);
        setLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setIsUpdating(false);
      }
    };

    loadData();

    const intervalId = setInterval(loadData, POLLING_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTimestamp = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleTimeString();
  };

  if (loading) {
    return (
      <div className="realtime-indicator">
        <h2>Cargando datos en tiempo real...</h2>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="realtime-indicator">
      <div className="realtime-header">
        <h2>Pólizas en Tiempo Real</h2>

        {isUpdating && (
          <span className="updating-badge">Actualizando...</span>
        )}
      </div>

      <div className="realtime-content">
        <div className="realtime-value">
          {data.value} {data.unit}
        </div>

        <div className="realtime-label">
          {data.label}
        </div>

        <div className="realtime-timestamp">
          Última actualización: {formatTimestamp(data.lastUpdated)}
        </div>

        <div className="next-update">
          Próxima actualización en {POLLING_INTERVAL / 1000} segundos
        </div>
      </div>
    </div>
  );
};