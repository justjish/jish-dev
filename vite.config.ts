import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'
export default defineConfig({
  plugins: [ tsconfigPaths(),svgr()],
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/firebase-auth',
      'firebase/firebase-analytics',
      'firebase/firebase-functions',
      'firebase/firebase-firestore',
      'firebase/firebase-database',
      'firebase/firebase-analytics',
      'firebase/firebase-remote-config',
      'firebase/firebase-storage',
      'firebase/firebase-performance',
      'lodash/fp',
      'graph/analysis',
      'zustand/middleware',
    ],
  },
});
