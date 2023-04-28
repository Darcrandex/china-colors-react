import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')
  return {
    plugins: [react()],
    resolve: { alias: { '@': path.resolve(__dirname, './src'), src: path.resolve(__dirname, './src') } },
    server: { host: true, port: parseInt(env.VITE_APP_PORT) || 3000 },
  }
})
