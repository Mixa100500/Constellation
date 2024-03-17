import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// export default defineConfig({
  // plugins: [react()],
  // })
  export default defineConfig(() => ({
    esbuild: {
      loader: 'jsx',
    },
    plugins: [react()],
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //     },
  //   },
  // },
}))