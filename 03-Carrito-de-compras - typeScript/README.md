# 🛒 Carrito de Compras con React y TypeScript

Este proyecto es una evolución del carrito de compras en React, donde se incorpora **TypeScript** para mejorar la **seguridad del código**, el **tipado de datos** y la **escalabilidad** de la aplicación.

El objetivo fue aprender cómo integrar TypeScript en un proyecto React real y aplicar buenas prácticas de tipado.

---

## 🌐 Demo del Proyecto

👉 **Ver aplicación en producción:**  
https://cart-de-compras.netlify.app/

---

## 🧠 ¿Qué se trabajó en esta versión?

En esta etapa del proyecto se incorporó **TypeScript desde cero**, aplicándolo progresivamente al código existente.

Se trabajaron los siguientes conceptos:

- Introducción a TypeScript y sus ventajas
- Tipos primitivos (`string`, `number`, `boolean`, etc.)
- Uso de **Types** e **Interfaces**
- Tipado de props en componentes React
- Tipado inline vs tipos separados
- Organización de archivos de tipos
- Tipado de estados y lógica del carrito

---

## 🧩 Tipado del Carrito de Compras

- Creación de un **type para los productos**
- Creación de un **type para los elementos del carrito**
- Tipado del ID de la guitarra
- Herencia y extensión de types
- Uso de **Utility Types** de TypeScript
- Aplicación de tipos en el hook personalizado `useCart`

Esto permitió un código más robusto y fácil de mantener.

---

## 🪝 Hook Personalizado `useCart`

El hook `useCart` centraliza toda la lógica del carrito y ahora está **completamente tipado**, incluyendo:

- Estado del carrito
- Funciones para agregar, eliminar e incrementar productos
- Cálculo del total a pagar
- Persistencia en LocalStorage
- Tipado estricto de datos y props

---

## 📂 Beneficios de usar TypeScript en el proyecto

- Menos errores en tiempo de desarrollo
- Mejor autocompletado y experiencia en el editor
- Código más claro y mantenible
- Base sólida para proyectos más grandes
- Preparación para Context API, reducers y estado global

---

## ▶️ Ejecución del Proyecto

```bash
npm install
npm run dev
