import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '')
  const publicUrl = new URL(process.env.SERVER_URL || env.SERVER_URL || 'http://localhost:3220')
  const secure = publicUrl.protocol === 'https:'
  return {
    plugins: [tanstackStart({ router: { routesDirectory: 'app' } }), viteReact()],
    resolve: { alias: { '@/': `${path.resolve(__dirname, 'src')}/` } },
    server: {
      port: 3000,
      allowedHosts: [publicUrl.hostname],
      hmr: {
        protocol: secure ? 'wss' : 'ws',
        host: publicUrl.hostname,
        clientPort: Number(publicUrl.port || (secure ? 443 : 80)),
      },
    },
  }
})
