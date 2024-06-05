import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer';

  export default defineConfig(() => ({
    plugins: [react(),
      visualizer({
        open: true, // Automatically open the visualization in your browser
        filename: 'dist/stats.html', // The path to save the visualization file
      })
    ],
    build: {
      rollupOptions: {
        plugins: [
          visualizer()
        ]
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './testSetup.js', 
    }
}))