import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    server: {
      proxy: {
        "/api": "http://127.0.0.1:5000",
      },
      port: 3000,
    },
    plugins: [react()],
  };
});
