import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/fanyihsuan_web/", // ← GitHub Pages subpath
});
