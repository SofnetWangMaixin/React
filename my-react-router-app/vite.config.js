import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    // open: true,
  },
  // 保持这个配置，但确保没有其他地方手动导入React
  esbuild: {
    jsxInject: `import React from 'react'`
  }
});
