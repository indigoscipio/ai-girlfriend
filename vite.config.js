import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // This ensures the CSS is a separate chunk with a specific filename
          output: ["dist/output-*.css"],
        },
      },
    },
  },
});
