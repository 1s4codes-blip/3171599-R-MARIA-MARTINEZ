const MOCK_ITEMS: Item[] = [
  {
    id: 1,
    name: 'Juan Pérez',
    description: 'Seguro de vida',
    policyNumber: 'POL-001',
    premium: 120,
    active: true,
  },
  {
    id: 2,
    name: 'María Gómez',
    description: 'Seguro de auto',
    policyNumber: 'POL-002',
    premium: 90,
    active: true,
  },
  {
    id: 3,
    name: 'Carlos López',
    description: 'Seguro de salud',
    policyNumber: 'POL-003',
    premium: 150,
    active: false,
  },
  {
    id: 4,
    name: 'Ana Torres',
    description: 'Seguro de hogar',
    policyNumber: 'POL-004',
    premium: 80,
    active: true,
  },
  {
    id: 5,
    name: 'Luis Martínez',
    description: 'Seguro empresarial',
    policyNumber: 'POL-005',
    premium: 300,
    active: true,
  },
];

export const fetchItems = async (signal?: AbortSignal): Promise<Item[]> => {
  await delay(1000);
  return MOCK_ITEMS;
};

export const fetchStats = async (): Promise<Stats> => {
  await delay(800);

  const total = MOCK_ITEMS.length;
  const active = MOCK_ITEMS.filter((i) => i.active).length;
  const percentage = Math.round((active / total) * 100);

  return {
    total,
    active,
    percentage,
  };
};

export const fetchRealTimeData = async (): Promise<RealTimeData> => {
  await delay(500);

  const randomValue = Math.floor(Math.random() * 50);

  return {
    value: randomValue,
    label: 'Pólizas activas en tiempo real',
    unit: 'pólizas',
    lastUpdated: new Date().toISOString(),
  };
};

export const searchItems = async (query: string): Promise<Item[]> => {
  await delay(600);

  if (!query.trim()) {
    return MOCK_ITEMS;
  }

  return MOCK_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );
};

import { Item, Stats, RealTimeData } from '../types';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));