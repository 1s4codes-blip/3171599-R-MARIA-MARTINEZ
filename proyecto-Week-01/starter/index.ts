// ============================================
// PROYECTO SEMANAL: MODELADO DE ENTIDADES
// Dominio: Plataforma de Seguros Online
// ============================================

console.log('🏛️ WEEKLY PROJECT: Plataforma de seguros online\n');

// ============================================
// 1. Define las entidades principales de tu dominio
// ============================================

// QUÉ: estructura de información del cliente
// PARA: guardar datos básicos del usuario asegurado
// IMPACTO: asegura consistencia en toda la aplicación
interface Customer {
  id: string;
  name: string;
  email: string;
  active: boolean;
}

// QUÉ: información de una póliza de seguro
// PARA: relacionar cliente con un producto asegurador
// IMPACTO: permite gestionar vigencia y estado
interface Policy {
  id: string;
  customerId: string;
  type: InsuranceType;
  status: PolicyStatus;
  monthlyValue: number;
}

// QUÉ: representa el pago realizado por una póliza
// PARA: llevar control financiero de primas
// IMPACTO: permite validar morosidad y flujo de dinero
interface Payment {
  id: string;
  policyId: string;
  date: string;
  amount: number;
  status: PaymentStatus;
}


// ============================================
// 2. Usa type unions y literales para propiedades clave
// ============================================

// QUÉ: posibles estados de una póliza
// PARA: limitar valores válidos
// IMPACTO: evita errores de asignación
type PolicyStatus = 'active' | 'cancelled' | 'pending';

// QUÉ: tipos de seguro disponibles
// PARA: clasificar los productos
// IMPACTO: mejora validación y lectura del código
type InsuranceType = 'life' | 'auto' | 'health';

// QUÉ: estados posibles del pago
// PARA: controlar cumplimiento
// IMPACTO: mejora gestión de cartera
type PaymentStatus = 'paid' | 'pending' | 'overdue';


// ============================================
// 3. Implementa funciones tipadas para operaciones básicas
// ============================================

// QUÉ: crear una póliza
// PARA: registrar nuevas contrataciones
// IMPACTO: estandariza la creación de datos
function createPolicy(policy: Policy): Policy {
  return policy;
}

// QUÉ: listar pólizas
// PARA: visualizar registros existentes
// IMPACTO: facilita consultas generales
function listPolicies(policies: Policy[]): Policy[] {
  return policies;
}

// QUÉ: filtrar pólizas por estado
// PARA: encontrar pólizas específicas
// IMPACTO: agiliza la gestión administrativa
function filterByStatus(policies: Policy[], status: PolicyStatus): Policy[] {
  return policies.filter(p => p.status === status);
}

// QUÉ: crear un pago
// PARA: registrar una transacción
// IMPACTO: mantiene historial financiero
function createPayment(payment: Payment): Payment {
  return payment;
}

// QUÉ: listar pagos
// PARA: visualizar transacciones
// IMPACTO: facilita auditoría
function listPayments(payments: Payment[]): Payment[] {
  return payments;
}

// QUÉ: filtrar pagos pendientes
// PARA: identificar deudas
// IMPACTO: mejora seguimiento financiero
function filterPendingPayments(payments: Payment[]): Payment[] {
  return payments.filter(p => p.status === 'pending');
}


// ============================================
// 4. Prueba tus funciones con datos de ejemplo
// ============================================

const policy1: Policy = {
  id: 'P1',
  customerId: 'C1',
  type: 'auto',
  status: 'active',
  monthlyValue: 120000
};

const policy2: Policy = {
  id: 'P2',
  customerId: 'C2',
  type: 'life',
  status: 'pending',
  monthlyValue: 90000
};

// ============================================
// PRUEBAS PAGOS
// ============================================

const payment1: Payment = {
  id: 'PG1',
  policyId: 'P1',
  date: '2026-02-01',
  amount: 120000,
  status: 'paid'
};

const payment2: Payment = {
  id: 'PG2',
  policyId: 'P2',
  date: '2026-02-05',
  amount: 90000,
  status: 'pending'
};

console.log('\nCreate payment:', createPayment(payment1));
console.log('\nList payments:', listPayments([payment1, payment2]));
console.log('\nPending payments:', filterPendingPayments([payment1, payment2]));

console.log('\nCreate policy:', createPolicy(policy1));
console.log('\nList policies:', listPolicies([policy1, policy2]));
console.log('\nFilter active:', filterByStatus([policy1, policy2], 'active'));

console.log('\n🚦 Project executed successfully.');
