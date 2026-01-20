# 🛒 Carrito de Compras con hook personalizado (useCart)

Este proyecto es una evolución del carrito de compras inicial, donde se implementa un **Hook personalizado (`useCart`)** para centralizar y reutilizar la lógica del carrito.

El objetivo fue aprender **cómo y por qué crear hooks personalizados en React**, mejorando la organización, legibilidad y mantenibilidad del código.

---

## 🌐 Demo del Proyecto

👉 **Ver aplicación en producción:**  
https://cart-de-compras.netlify.app/

---

## 🧠 ¿Qué se trabajó en esta versión?

En esta versión del proyecto se aplicaron conceptos más avanzados de React, principalmente:

- Creación de **hooks personalizados**
- Separación de lógica y presentación
- Reutilización de estado y funciones
- Código más limpio y escalable

---

## 🔧 Hook Personalizado: `useCart`

El hook `useCart` se encarga de manejar toda la lógica del carrito, incluyendo:

- Estado del carrito
- Agregar productos
- Detectar productos repetidos
- Manejo de cantidades
- Incrementar y eliminar artículos
- Vaciar el carrito
- Cálculo del total a pagar
- Persistencia con LocalStorage

Esto permite que los componentes se enfoquen únicamente en la **interfaz**, dejando la lógica encapsulada en el hook.

---

## 📂 Beneficios de usar `useCart`

- Código más organizado
- Mejor reutilización de lógica
- Componentes más simples
- Facilita el mantenimiento y escalabilidad
- Base para migrar a Context API o reducers

---

## 💾 Persistencia de Datos

- Guardado del carrito en **LocalStorage**
- Recuperación automática al recargar la aplicación

---

## ▶️ Ejecución del Proyecto

```bash
npm install
npm run dev
