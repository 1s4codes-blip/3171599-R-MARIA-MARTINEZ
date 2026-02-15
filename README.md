🎯 Proyecto Semanal – Sistema CRUD

🛡️ Plataforma de Seguros Online (FinTech)

Aplicación desarrollada con React + TypeScript que permite administrar pólizas o productos de seguro mediante operaciones básicas de crear, visualizar, editar y eliminar.

El objetivo del proyecto es comprender el manejo de componentes, estado, props y formularios controlados dentro de React.

🧠 Descripción del dominio

La aplicación simula una plataforma digital donde una empresa puede gestionar seguros ofrecidos a clientes.

Cada seguro contiene información principal como:

Identificador

Nombre del seguro

Precio

Estado (activo / inactivo)

🚀 Funcionalidades implementadas

✅ Ver la lista de seguros registrados
✅ Agregar nuevos seguros
✅ Editar seguros existentes
✅ Eliminar seguros
✅ Validación básica de campos obligatorios
✅ Actualización automática de la interfaz al cambiar datos

🧩 Arquitectura de Componentes

La aplicación está organizada de forma modular.

App
├── Header
├── ItemForm
├── ItemList
│   └── ItemCard
⭐ App

Es el componente principal.
Aquí se guarda la lista de seguros y se encuentran las funciones CRUD.

⭐ Header

Muestra el título y la descripción del sistema.

⭐ ItemForm

Permite crear o editar un seguro.
Recibe datos desde App y envía eventos cuando el usuario guarda.

⭐ ItemList

Recibe la lista de seguros y genera una tarjeta por cada uno.

⭐ ItemCard

Muestra la información individual y tiene botones de editar y eliminar.

🔄 Flujo de información

El usuario escribe en el formulario.

El formulario envía los datos a App.

App actualiza la lista.

React vuelve a dibujar automáticamente la pantalla.

🧱 Modelo de Datos

Ejemplo de la estructura usada:

export interface Item {
  id: number;
  name: string;
  price: number;
  active: boolean;
}

Esto garantiza que todos los seguros tengan la misma forma.

🛠️ Tecnologías utilizadas

React

TypeScript

Vite

CSS

▶️ Instalación y ejecución
Instalar dependencias
pnpm install
Ejecutar en modo desarrollo
pnpm dev

Luego abrir en el navegador:

http://localhost:5173