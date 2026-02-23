import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete, onEdit }) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <div className="item-card">
      <div className="item-card__header">
        <h3 className="item-card__title">{item.name}</h3>

        <span
          className={`badge badge--${item.active ? 'success' : 'secondary'}`}>
          {item.active ? 'Activa' : 'Inactiva'}
        </span>
      </div>

      <div className="item-card__body">
        <p>
          <strong>Tipo:</strong> {item.policyType}
        </p>
        <p>
          <strong>Prima:</strong> ${item.premium}
        </p>
      </div>

      <div className="item-card__actions">
        <button
          className="btn btn-edit"
          onClick={() => onEdit(item.id)}>
          ✏️ Editar
        </button>

        <button
          className="btn btn-delete"
          onClick={handleDelete}>
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
};

export default ItemCard;