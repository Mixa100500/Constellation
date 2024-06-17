import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';

  export default defineConfig(() => ({
    plugins: [
      react({
        babel: {
          plugins: [
            ["babel-plugin-styled-components", { "minify": true, "transpileTemplateLiterals": true }]
          ],
        },
      }),
    ],
    build: {
      rollupOptions: {
        plugins: [
          (process.env.ANALYZE_PACKAGE && visualizer({
            open: true, // Automatically open the visualization in your browser
            filename: 'dist/stats.html', // The path to save the visualization file
          }))
        ].filter(Boolean)
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './testSetup.js', 
    }
}))