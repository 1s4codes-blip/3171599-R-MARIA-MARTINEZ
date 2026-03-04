// ============================================
// DATOS MOCK - Insurance Products
// ============================================

import { Item } from '../types';

export const items: Item[] = [
  {
    id: 1,
    name: 'Premium Life Protect',
    category: 'life',
    price: 120,
    coverageAmount: 500000,
    rating: 4.8,
    isAvailable: true,
    createdAt: '2024-01-10',
  },
  {
    id: 2,
    name: 'Family Health Plus',
    category: 'health',
    price: 95,
    coverageAmount: 200000,
    rating: 4.6,
    isAvailable: true,
    createdAt: '2024-02-15',
  },
  {
    id: 3,
    name: 'Auto Secure Basic',
    category: 'vehicle',
    price: 70,
    coverageAmount: 100000,
    rating: 4.2,
    isAvailable: false,
    createdAt: '2024-01-20',
  },
  {
    id: 4,
    name: 'Home Shield Max',
    category: 'home',
    price: 150,
    coverageAmount: 300000,
    rating: 4.9,
    isAvailable: true,
    createdAt: '2024-03-05',
  },
  {
    id: 5,
    name: 'Essential Life Plan',
    category: 'life',
    price: 80,
    coverageAmount: 250000,
    rating: 4.3,
    isAvailable: true,
    createdAt: '2024-02-01',
  },
];

export const categories = [
  { value: 'all', label: 'All Types' },
  { value: 'life', label: 'Life Insurance' },
  { value: 'health', label: 'Health Insurance' },
  { value: 'vehicle', label: 'Vehicle Insurance' },
  { value: 'home', label: 'Home Insurance' },
];

export const sortOptions = [
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
  { value: 'price-asc', label: 'Price (Low to High)' },
  { value: 'price-desc', label: 'Price (High to Low)' },
  { value: 'coverage-desc', label: 'Highest Coverage' },
];