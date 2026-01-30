
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // AIAssistant 등에서 사용하는 process.env.API_KEY를 지원하기 위함
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000
  }
});
