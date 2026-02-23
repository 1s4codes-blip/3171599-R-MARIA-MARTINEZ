import { Item } from '../types';
import ItemCard from './ItemCard';

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete, onEdit }) => {
  if (items.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 No hay pólizas registradas</p>
        <p className="empty-state__hint">
          Agrega tu primera póliza usando el formulario
        </p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ItemList;