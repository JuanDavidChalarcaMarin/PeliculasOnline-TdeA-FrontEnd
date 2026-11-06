# Frontend Cartelera de Películas

<div align="center">

[![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)](https://github.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

## 🚀 Acciones rápidas

<a href="#instalaci%C3%B3n"><img src="https://img.shields.io/badge/%F0%9F%93%A6_Instalar_dependencias-004D99?style=for-the-badge" alt="Instalar dependencias" /></a>
<a href="#ejecutar-el-proyecto"><img src="https://img.shields.io/badge/%E2%96%B6%EF%B8%8F_Ejecutar_app-2E7D32?style=for-the-badge" alt="Ejecutar app" /></a>
<a href="#validaci%C3%B3n-del-equipo"><img src="https://img.shields.io/badge/%E2%9C%85_Validar_proyecto-FF9800?style=for-the-badge" alt="Validar proyecto" /></a>

## 📌 Descripción

Este proyecto es el frontend de la cartelera de películas del taller final. La base ya está preparada con la estructura de React + Vite + TypeScript, y se está conectando con el backend en módulos específicos.

Estado actual:
- Géneros ya está conectado al API.
- Actores, Cines, Productoras, Películas y la página principal aún pueden usar datos simulados o pendientes de integración por cada equipo.

## 🧩 Información del repositorio

- Repositorio GitHub: https://github.com/JuanDavidChalarcaMarin/PeliculasOnline-TdeA-FrontEnd.git
- Rama principal: `main` (o `master`, según el proyecto)
- URL local del frontend: `http://localhost:5173`
- URL del API backend: `https://localhost:7256/api`

> Ajusta el enlace del repositorio y el puerto del backend si tu API usa otro valor.

## 🛠️ Requisitos previos

Antes de ejecutar el proyecto asegúrate de tener instalado:
- Node.js 18 o superior
- npm
- Acceso al backend en ejecución

## 📦 Instalación

```bash
npm install
```

Verifica el archivo `.env` y coloca la URL correcta del API:

```env
VITE_API_URL=https://localhost:7256/api
```

> El puerto debe coincidir con el puerto real del backend.

## ▶️ Ejecutar el proyecto

```bash
npm run dev
```

Luego abre en el navegador:

```text
http://localhost:5173
```

## ✅ Validación para el equipo

Antes de entregar el proyecto, cada integrante debe verificar que el código compila y no presenta errores de lint.

### 1) Validación de TypeScript

```bash
npx tsc --noEmit -p tsconfig.app.json
```

Esto confirma que:
- No existen errores de tipos.
- Los componentes, props y modelos coinciden con las interfaces.
- El proyecto compila correctamente desde la configuración de Vite/TypeScript.

### 2) Validación de ESLint

```bash
npx eslint src
```

Esto revisa:
- Código no utilizado o innecesario.
- Variables o imports mal definidos.
- Estilos de código y advertencias de React.
- Errores que pueden afectar la calidad del proyecto.

### 3) Build final

```bash
npm run build
```

Este comando genera una versión lista para producción y ayuda a detectar errores que no siempre aparecen en modo desarrollo.

## 🧪 Checklist de validación

Antes de entregar, marca cada punto:

- [ ] `npm install` se ejecutó correctamente
- [ ] `.env` tiene la URL correcta del backend
- [ ] `npm run dev` inicia sin errores
- [ ] `npx tsc --noEmit -p tsconfig.app.json` pasa sin errores
- [ ] `npx eslint src` no reporta problemas críticos
- [ ] `npm run build` genera la compilación final sin fallos
- [ ] La funcionalidad revisada por el equipo responde correctamente
- [ ] No hay errores visibles en consola del navegador

## 📝 Notas para desarrollo

- Si una funcionalidad aún usa datos simulados, documentarla claramente y avisar al equipo.
- Mantén los modelos y las peticiones API consistentes con el backend.
- Revisa la consola y los errores de TypeScript antes de hacer entrega final.

## 👥 Equipo

- Frontend: [Nombre del integrante o equipo]
- Backend/API: [Nombre del integrante o equipo]
- QA / validación: [Nombre del integrante o equipo]

---

Si quieres, puedo dejarte el README ya adaptado a tu nombre real del equipo, con el enlace exacto del repositorio de GitHub y una versión más formal para entregar como proyecto final.
