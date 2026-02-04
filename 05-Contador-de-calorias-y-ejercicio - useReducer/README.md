# 🥗🏃 Proyecto 03 – Contador de Calorías y Ejercicio (useReducer)

Este proyecto corresponde al **tercer proyecto práctico del curso**, donde se construye una aplicación para **registrar comidas y ejercicios**, calcular **calorías consumidas y quemadas**, y mostrar el **balance total**, utilizando **useReducer** para el manejo del estado.

El objetivo principal fue aprender a manejar **estado complejo en React** usando reducers y acciones.

---

## 🌐 Demo del Proyecto

👉 **Ver aplicación en producción:**  
https://calori-traker.netlify.app/

---

## 🚀 Tecnologías Utilizadas

- ⚛️ React
- 🟦 TypeScript
- 🎣 React Hooks (`useReducer`, `useState`)
- 🎨 TailwindCSS
- 💾 LocalStorage
- ⚡ Vite

---

## 🧠 ¿Qué se desarrolló en este proyecto?

Durante el desarrollo del proyecto se trabajaron los siguientes conceptos:

- Creación y configuración del proyecto
- Instalación y uso de TailwindCSS
- Formularios controlados
- Validación de formularios
- Manejo de eventos (`change`, `submit`)
- Inferencia de tipos en eventos con TypeScript

---

## 🧩 Manejo de Estado con useReducer

El estado principal de la aplicación se maneja con **useReducer**, permitiendo una lógica más clara y escalable.

Se implementaron:

- Definición del reducer
- Creación de actions
- Uso de `dispatch`
- Actualización del estado desde el reducer
- Reinicio del estado global

---

## 📋 Gestión de Actividades

- Registro de **comidas** y **ejercicios**
- Tipado de actividades con TypeScript
- Generación de IDs únicos
- Listado de actividades
- Edición de actividades existentes
- Eliminación de actividades
- Mensaje condicional cuando no hay registros

---

## 💾 Persistencia de Datos

- Guardado de actividades en **LocalStorage**
- Recuperación automática de datos al recargar la aplicación
- Acción para reiniciar completamente la app

---

## 🔥 Cálculo de Calorías

- Cálculo de calorías consumidas
- Cálculo de calorías quemadas
- Cálculo del diferencial de calorías
- Componentes separados para mostrar totales

---

## ▶️ Ejecución del Proyecto

```bash
npm install
npm run dev
