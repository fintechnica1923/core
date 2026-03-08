import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import blogPlugin from "./vite-plugin-blog"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    blogPlugin("./src/blog"),
    blogPlugin("./src/essays", "virtual:essay-posts"),
    blogPlugin("./src/media", "virtual:media-posts"),
    blogPlugin("./src/hackathons", "virtual:hackathon-posts"),
  ],
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
