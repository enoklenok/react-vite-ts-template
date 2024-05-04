import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@core", replacement: "/src/@core" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@store", replacement: "/src/store" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@types", replacement: "/src/types" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
  server: {
    port: 3000,
  },
});
