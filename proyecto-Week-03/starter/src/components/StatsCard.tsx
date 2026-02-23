import React, { useEffect, useState } from 'react';
import { Stats } from '../types';
import { fetchStats } from '../utils/api';
export const StatsCard: React.FC = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true);
        const data = await fetchStats();
        setStats(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  if (loading || !stats) {
    return (
      <div className="stats-card">
        <h2>Cargando estadísticas...</h2>
      </div>
    );
  }

  return (
    <div className="stats-card">
      <h2>Estadísticas de Seguros</h2>

      <div className="stats-grid">
        <div className="stat">
          <div className="stat-value">{stats.total}</div>
          <div className="stat-label">Total de Pólizas</div>
        </div>

        <div className="stat">
          <div className="stat-value">{stats.active}</div>
          <div className="stat-label">Pólizas Activas</div>
        </div>

        <div className="stat">
          <div className="stat-value">{stats.percentage}%</div>
          <div className="stat-label">Activas (%)</div>
        </div>
      </div>
    </div>
  );
};