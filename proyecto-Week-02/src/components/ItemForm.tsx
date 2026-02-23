import { useState, useEffect } from 'react';
import { Item } from '../types';

interface ItemFormProps {
  onAdd: (item: Omit<Item, 'id'>) => void;
  onUpdate: (id: number, updates: Partial<Item>) => void;
  editingItem?: Item;
  onCancelEdit: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({
  onAdd,
  onUpdate,
  editingItem,
  onCancelEdit,
}) => {
  const initialState = {
    name: '',
    policyType: 'auto' as 'auto' | 'salud' | 'vida',
    premium: 0,
    active: true,
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (editingItem) {
      const { id, ...rest } = editingItem;
      setFormData(rest);
    } else {
      setFormData(initialState);
    }
  }, [editingItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const validate = (): boolean => {
    if (!formData.name.trim()) {
      alert('El nombre del cliente es requerido');
      return false;
    }

    if (formData.premium <= 0) {
      alert('La prima debe ser mayor a 0');
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (editingItem) {
      onUpdate(editingItem.id, formData);
      onCancelEdit();
    } else {
      onAdd(formData);
    }

    setFormData(initialState);
  };

  return (
    <div className="form-container">
      <h2>{editingItem ? '✏️ Editar Póliza' : '➕ Agregar Póliza'}</h2>

      <form onSubmit={handleSubmit} className="item-form">
        {/* Cliente */}
        <div className="form-group">
          <label htmlFor="name">Cliente *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Tipo */}
        <div className="form-group">
          <label htmlFor="policyType">Tipo</label>
          <select
            id="policyType"
            name="policyType"
            value={formData.policyType}
            onChange={handleSelectChange}>
            <option value="auto">Auto</option>
            <option value="salud">Salud</option>
            <option value="vida">Vida</option>
          </select>
        </div>

        {/* Prima */}
        <div className="form-group">
          <label htmlFor="premium">Prima *</label>
          <input
            type="number"
            id="premium"
            name="premium"
            value={formData.premium}
            onChange={handleChange}
            required
          />
        </div>

        {/* Estado */}
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleCheckboxChange}
            />
            Activa
          </label>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingItem ? 'Actualizar' : 'Agregar'}
          </button>

          {editingItem && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                onCancelEdit();
                setFormData(initialState);
              }}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ItemForm;