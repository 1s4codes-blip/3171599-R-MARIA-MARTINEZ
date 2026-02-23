import React, { useEffect, useState } from 'react';
import { Item } from '../types';
import { fetchItems } from '../utils/api';
export const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchItems(controller.signal);
        setItems(data);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Error desconocido');
        }
      } finally {
        setLoading(false);
      }
    };

    loadItems();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <div className="item-list">
        <h2>Cargando pólizas...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="item-list error">
        <h2>Error al cargar datos</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="item-list">
      <h2>Lista de Pólizas</h2>

      <p className="item-count">
        Total: {items.length} pólizas
      </p>

      <ul className="items">
        {items.map((item) => (
          <li key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Número: {item.policyNumber}</p>
            <p>Prima: ${item.premium}</p>
            <p>{item.active ? 'Activa' : 'Inactiva'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};