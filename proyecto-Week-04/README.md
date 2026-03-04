💼 Online Insurance Marketplace

🎯 Descripción del Proyecto

Este proyecto representa una Plataforma de Seguros Online (FinTech) donde los usuarios pueden explorar diferentes productos de seguros, aplicar filtros, ordenar resultados y realizar búsquedas en tiempo real.

El catálogo permite visualizar productos de seguros como:

Life Insurance

Health Insurance

Vehicle Insurance

Home Insurance

Cada producto muestra información relevante como:

Precio mensual

Monto de cobertura

Calificación

Disponibilidad

🏛️ Dominio Asignado

Plataforma de seguros online | Servicios Financieros y FinTech

Entidad principal:

Insurance Product

Propiedades principales:

id

name

category

price

coverageAmount

rating

isAvailable

createdAt

✅ Funcionalidades Implementadas
1️⃣ Renderizado Condicional

Estado de carga (Loading)

Mensaje de error

Estado vacío (EmptyState)

Contador de resultados

Badge condicional:

✅ Available

❌ Not Available

2️⃣ Listas con Keys

Renderizado con .map()

Uso de key={item.id}

Componente separado ItemCard

Acciones por ítem:

View

Delete

3️⃣ Filtrado

Filtro por tipo de seguro

Filtro booleano (solo disponibles)

Botón para limpiar filtros

4️⃣ Ordenamiento

Opciones disponibles:

Name (A-Z)

Name (Z-A)

Price (Low to High)

Price (High to Low)

Highest Coverage

✔ No se muta el array original
✔ Se usa copia con spread operator

5️⃣ Búsqueda en Tiempo Real

Input controlado

Case-insensitive

Búsqueda en múltiples campos:

name

category

Botón para limpiar búsqueda

Implementación con useDebounce

🛠️ Tecnologías Utilizadas

React 18+

TypeScript

Vite

CSS

pnpm