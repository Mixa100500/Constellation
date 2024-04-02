# Getting Started with Vite

This project was bootstrapped with [Vite](https://github.com/vitejs/vite).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Starts testing.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/static-deploy) for more information.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Application created with Vite

# Constellation

Front-end application for searching and watching movies. Demo: [https://constellation-mu.vercel.app/](https://constellation-mu.vercel.app/)

# Technology Stack:

-   React + React Hooks
-   Redux-Toolkit
-   styled-components

Testing:

- Vitest
- react-testing-library
- jest-dom
- user-event

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
