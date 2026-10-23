import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        livingstoneTimesheet: resolve(import.meta.dirname, 'projects/livingstone-timesheet.html'),
        shalomRecoveryAi: resolve(import.meta.dirname, 'projects/shalom-recovery-ai.html'),
        stemCamp: resolve(import.meta.dirname, 'projects/stem-camp.html'),
        evida: resolve(import.meta.dirname, 'projects/evida.html'),
        lcStem: resolve(import.meta.dirname, 'projects/lc-stem.html'),
        wonderDraw: resolve(import.meta.dirname, 'projects/wonder-draw.html'),
        mastercardChallenge: resolve(import.meta.dirname, 'projects/mastercard-challenge.html'),
        chinookSql: resolve(import.meta.dirname, 'projects/chinook-sql.html'),
      }
    }
  }
})
