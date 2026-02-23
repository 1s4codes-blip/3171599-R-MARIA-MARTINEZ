📘 README – API CRUD Plataforma de Seguros Online
🏛️ Proyecto

Sistema de Gestión CRUD – Plataforma de Seguros Online
Dominio: Servicios Financieros y FinTech

Este proyecto consiste en el desarrollo de una API REST que permite gestionar pólizas de seguros mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar), implementando validación de datos con Pydantic.

🚀 Tecnologías utilizadas

Python 3.10+

FastAPI

Pydantic

Uvicorn

Docker (opcional)

📂 Estructura del proyecto
project/
│
├── main.py          # Punto de entrada de la API
├── schemas.py       # Modelos de validación con Pydantic
├── database.py      # Simulación de base de datos en memoria
├── routers/
│   └── policies.py  # Endpoints CRUD
├── requirements.txt
└── README.md
📌 Funcionalidades

La API permite:

✅ Crear una póliza de seguro

✅ Obtener todas las pólizas

✅ Obtener una póliza por ID

✅ Actualizar una póliza

✅ Eliminar una póliza

🧾 Modelo de datos

Ejemplo de póliza:

{
  "id": 1,
  "name": "Seguro Vehicular",
  "type": "Auto",
  "premium": 500.0,
  "active": true
}