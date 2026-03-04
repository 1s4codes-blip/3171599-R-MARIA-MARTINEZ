// ============================================
// COMPONENTE: ItemCard
// ============================================
// Muestra una tarjeta con la información de un elemento
// TODO: Adaptar a tu dominio

import React from 'react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onDelete?: (id: number) => void;
  onView?: (id: number) => void;
}

/**
 * Tarjeta de elemento del catálogo
 * TODO: Personalizar según tu dominio
 */
export const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onDelete,
  onView,
}) => {


  return (
  <div className="item-card">
    <h3>{item.name}</h3>

    <span className={`badge ${item.category}`}>
      {item.category.toUpperCase()}
    </span>

    <p className="price">${item.price.toFixed(2)} / month</p>

    <p>Coverage: ${item.coverageAmount.toLocaleString()}</p>

    <p className="rating">⭐ {item.rating}</p>

    {item.isAvailable ? (
      <span className="status available">✅ Available</span>
    ) : (
      <span className="status unavailable">❌ Not Available</span>
    )}

    <div className="actions">
      {onView && (
        <button onClick={() => onView(item.id)}>View</button>
      )}
      {onDelete && (
        <button onClick={() => onDelete(item.id)}>Delete</button>
      )}
    </div>
  </div>
);

};
