// @ts-check
import { defineConfig } from 'astro/config';

// Salida estática (por defecto): no hace falta adaptador para Vercel.
export default defineConfig({
  site: 'https://example.com',
  output: 'static',
});