import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

export default defineConfig(({ mode }) => ({
  server: {
    host: true,            // escucha en 0.0.0.0 + IPv6 (LAN accesible)
    port: 8080,
    strictPort: true,
    cors: true,

    // Si desde otros dispositivos el HMR no conecta,
    // pon aquí la IP de tu máquina (ej: 192.168.1.50)
    // hmr: {
    //   host: "192.168.1.50",
    //   port: 8080,
    // },

    fs: {
        allow: [
        path.resolve(__dirname, "."),       
        path.resolve(__dirname, "client"),
        path.resolve(__dirname, "shared"),
      ],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },

  build: {
    outDir: "dist/spa",
  },

  plugins: [react(), expressPlugin()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    configureServer(server) {
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}
