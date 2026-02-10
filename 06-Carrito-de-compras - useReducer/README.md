# 🛒 Proyecto 01 – Carrito de Compras con React

Este proyecto corresponde al **primer proyecto del curso**, desarrollado de forma **progresiva**, donde un carrito de compras en React evoluciona desde un manejo básico del estado hasta una arquitectura más robusta utilizando **TypeScript** y **useReducer**.

El objetivo principal fue aprender **cómo escalar una aplicación React real**, aplicando distintos enfoques de manejo de estado.

---

## 🌐 Demo del Proyecto

👉 **Ver aplicación en producción:**  
https://cart-de-compras.netlify.app/

---

## 🚀 Tecnologías Utilizadas

- ⚛️ React
- 🟦 TypeScript
- 🎣 React Hooks (`useState`, `useReducer`)
- 🪝 Custom Hooks
- 🎨 CSS
- 💾 LocalStorage
- ⚡ Vite

---

## 🧠 Evolución del Proyecto

El proyecto fue construido en varias etapas, cada una mejorando la arquitectura anterior:

### 1️⃣ Manejo inicial con Hooks
- Uso de `useState`
- Componentes y props
- Agregar y eliminar productos
- Cálculo del total a pagar

### 2️⃣ Hook Personalizado (`useCart`)
- Centralización de la lógica del carrito
- Separación de lógica y presentación
- Código más limpio y reutilizable

### 3️⃣ Migración a TypeScript
- Tipado de productos y carrito
- Creación de archivos de types
- Tipado de props y funciones
- Uso de utility types

### 4️⃣ Migración a useReducer (Versión Actual)
- Creación del reducer del carrito
- Definición del state inicial
- Creación y tipado de actions
- Uso de `dispatch`
- Migración del `addToCart` al reducer
- Prevención de duplicados desde el reducer
- Incremento y eliminación de productos
- Mostrar el contenido del carrito
- Persistencia del state en LocalStorage

---

## 🛒 Funcionalidades del Carrito

- Agregar productos al carrito
- Evitar registros duplicados
- Incrementar cantidad de productos
- Eliminar productos del carrito
- Vaciar el carrito
- Mostrar contenido del carrito
- Calcular el total a pagar
- Persistencia con LocalStorage

---

## ▶️ Ejecución del Proyecto

```bash
npm install
npm run dev
