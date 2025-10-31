import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'REPO' with your repo name, or use '/' for user pages
const repoName = "e-shops-frontend";
const basePath = `/${repoName}/`;

export default defineConfig({
  base: basePath,
  plugins: [react()],
});
