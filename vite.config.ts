import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'



// https://vite.dev/config/
export default defineConfig(({ mode }) => {

/*   const env = loadEnv(mode, process.cwd(), ''); */

  return {
    plugins: [react()],

/*     server: {
      allowedHosts: ["henrik.awesome"],
      proxy: {
        '/api/': {
          target: 'https://exercise.mobicom-pro.com/api/',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\//, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq, req) => {
              const authHeader = req.headers.authorization;
              if (authHeader) {
                proxyReq.setHeader('Authorization', authHeader);
              }
            });
          }
        }
      }
    } */
  }
})
