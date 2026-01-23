# 🍽️ Proyecto 02 – Control de Consumo y Propinas

Este proyecto corresponde al **segundo proyecto práctico del curso**, donde se construye una aplicación para **gestionar una orden de consumo**, calcular **propinas** y obtener el **total a pagar**, aplicando buenas prácticas con **React, TypeScript y TailwindCSS**.

El enfoque principal fue reforzar el manejo del estado, hooks personalizados y tipado estricto en un proyecto real.

---

## 🌐 Demo del Proyecto

👉 **Ver aplicación en producción:**  
https://consumos-y-propinas.netlify.app/

---

## 🚀 Tecnologías Utilizadas

- ⚛️ React
- 🟦 TypeScript
- 🎣 React Hooks (`useState`, `useMemo`, `useCallback`)
- 🪝 Hook personalizado para la orden
- 🎨 TailwindCSS
- ⚡ Vite

---

## 🧠 ¿Qué se desarrolló en este proyecto?

Durante el desarrollo del proyecto se trabajaron los siguientes conceptos:

- Creación y configuración del proyecto
- Introducción e instalación de **TailwindCSS**
- Uso de extensiones recomendadas para VSCode
- Creación de componentes reutilizables
- Renderizado dinámico de productos del menú
- Organización de contenedores principales

---

## 🪝 Hook Personalizado para la Orden

Se creó un **hook personalizado** para manejar la lógica de la orden, incluyendo:

- Estado de los artículos seleccionados
- Función para agregar artículos
- Tipado de funciones con TypeScript
- Evitar productos duplicados
- Eliminación de artículos
- Reinicio completo de la orden

Esto permite mantener los componentes más limpios y enfocados en la interfaz.

---

## 📦 Manejo de Estado y TypeScript

- Tipado de productos y elementos de la orden
- Uso de `type` e interfaces
- Tipado de funciones y props
- Código más seguro, mantenible y escalable

---

## 💰 Cálculo de Consumo y Propinas

- Cálculo del consumo total
- Selección de porcentaje de propina
- Cálculo del valor de la propina
- Cálculo del total a pagar
- Formateo de cantidades

---

## ⚡ Optimización del Rendimiento

- Uso de `useMemo` para cálculos derivados
- Diferencia práctica entre `useMemo` y `useCallback`
- Evitar renders innecesarios

---

## ▶️ Ejecución del Proyecto

```bash
npm install
npm run dev
