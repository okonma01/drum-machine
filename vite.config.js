import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/drum-machine/' // needed for GitHub Pages if your repo is named drum-machine
});