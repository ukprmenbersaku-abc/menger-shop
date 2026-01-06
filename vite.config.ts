import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Fix: Use '.' instead of process.cwd() to prevent TypeScript error regarding Process type
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    // AI functionality removed, no API key needed
    // define: {
    //   'process.env.API_KEY': JSON.stringify(env.API_KEY)
    // }
  };
});