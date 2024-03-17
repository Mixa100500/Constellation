# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Application created with create-react-app

# Getting Started

npm run preview
or
yarn run preview

Open http://localhost:5173/ with your browser to see the result.

# Constellation

Front-end application for searching and watching movies. Demo: [https://constellation-mu.vercel.app/](https://constellation-mu.vercel.app/)

# Technology Stack:

-   React + React Hooks
-   Redux-Toolkit
-   styled-components

# File Structure:

- Compositions: responsible for handling application-level data and logic

- Components: responsible for handling UI logic and rendering Blocks & 
  Elements

- Blocks: responsible for rendering their child Elements and their own 
  context (logic-less)

- Elements: responsible for rendering themselves and handling their 
  modifiers (logic-less)

- Modifiers: responsible for modifying Block & Element styles in a
  predictable manner

# API

Detailed documentation [https://developer.themoviedb.org/docs/getting-started](https://developer.themoviedb.org/docs/getting-started)

# Deploy on Vercel

[https://constellation-mu.vercel.app/](https://constellation-mu.vercel.app/)
