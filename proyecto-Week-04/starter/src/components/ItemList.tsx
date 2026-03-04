// ============================================
// COMPONENTE: ItemList
// ============================================
// Renderiza la lista de elementos

import React from 'react';
import { Item } from '../types';
import { ItemCard } from './ItemCard';
import { EmptyState } from './EmptyState';

interface ItemListProps {
  items: Item[];
  isLoading?: boolean;
  error?: string | null;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
  onClearFilters?: () => void;
}

/**
 * Lista de elementos del catálogo
 */
export const ItemList: React.FC<ItemListProps> = ({
  items,
  isLoading = false,
  error = null,
  onDelete,
  onView,
  onClearFilters,
}) => {
  
  // Implementar renderizado condicional

  // 1. Si está cargando, mostrar spinner
if (isLoading) {
  return <div className="loading">Loading insurance products...</div>;
}

if (error) {
  return <div className="error">❌ {error}</div>;
}

if (items.length === 0) {
  return <EmptyState onClearFilters={onClearFilters} />;
}

return (
  <div className="item-list">
    {items.map((item) => (
      <ItemCard
        key={item.id}
        item={item}
        onDelete={onDelete}
        onView={onView}
      />
    ))}
  </div>
);
};
