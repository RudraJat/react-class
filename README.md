# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

HOW TO INSTALL REACT IN YOUR PROJECT
1. npm create vite@latest my-project
2. cd my-project
3. npm i
4. npm run dev

HOW TO INSTALL TAILWINDCSS IN YOUR PROJECT
1. npm intall tailwindcss @tailwindcss/vite
2. Configure the Vite plugin.
   (
    Add the @tailwindcss/vite plugin to your Vite configuration - vite.config.js.
    import tailwindcss from '@tailwindcss/vite'
    export default defineConfig({
     plugins: [
     tailwindcss(),
    ],
    })
   )
3. import tailwind in your css file
