// ============================================
// TIPOS E INTERFACES
// ============================================
// Dominio: Online Insurance Platform (FinTech)

// Entidad principal del dominio
export interface Item {
  id: number;
  name: string; // Nombre del producto de seguro
  category: 'life' | 'health' | 'vehicle' | 'home'; // Tipo de seguro
  price: number; // Precio mensual
  coverageAmount: number; // Monto de cobertura
  rating: number; // Calificación del producto
  isAvailable: boolean; // Disponibilidad
  createdAt: string;
}

// Categorías del dominio
export type Category = 'all' | 'life' | 'health' | 'vehicle' | 'home';

// Opciones de ordenamiento
export type SortOption =
  | 'name-asc'
  | 'name-desc'
  | 'price-asc'
  | 'price-desc'
  | 'coverage-desc';

// Estado de filtros
export interface FilterState {
  searchTerm: string;
  category: Category;
  showOnlyAvailable: boolean;
  sortBy: SortOption;
}