import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'  // ✅ Import the PWA plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "MERN Frontend",
        short_name: "MERN",
        description: "MERN Stack",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/sun-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/sun-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/sun-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      }
    })
  ]
})
