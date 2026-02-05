// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: './',
//   plugins: [react()],
// })


// vite.config.js ou vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],   // ← super important !
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})