// ============================================
// TYPES: INTERFACES Y TIPOS
// ============================================

export interface Item {
  id: number;
  name: string; // nombre del cliente
  policyType: 'auto' | 'salud' | 'vida';
  premium: number;
  active: boolean;
}

export interface FormData {
  name: string;
  policyType: 'auto' | 'salud' | 'vida';
  premium: number;
  active: boolean;
}