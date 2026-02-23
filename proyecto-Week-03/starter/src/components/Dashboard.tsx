import React from 'react';
import { ItemList } from './ItemList';
import { StatsCard } from './StatsCard';
import { RealTimeIndicator } from './RealTimeIndicator';
export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard de Seguros Online</h1>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-section">
          <StatsCard />
        </section>

        <section className="dashboard-section">
          <RealTimeIndicator />
        </section>

        <section className="dashboard-section dashboard-list">
          <ItemList />
        </section>
      </main>
    </div>
  );
};