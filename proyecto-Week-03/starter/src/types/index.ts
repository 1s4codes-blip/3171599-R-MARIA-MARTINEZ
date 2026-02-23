export interface Item {
  id: number;
  name: string;
  description: string;

// Propiedades de Plataforma de seguros online 
// | Servicios Financieros y FinTech

  policyNumber: string;
  premium: number;
  active: boolean;
}

export interface Stats {
  total: number;
  active: number;
  percentage: number;
}

export interface RealTimeData {
  value: number;
  label: string;
  unit: string;
  lastUpdated: string;
}

export interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface SearchFilters {
  query: string;
}