import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Lista de claves que queremos cargar en process.env
const pickedKeys = [
  "REACT_APP_API_KEY",
  "REACT_APP_AUTH_DOMAIN",
  "REACT_APP_PROJECT_ID",
  "REACT_APP_STORAGE_BUCKET",
  "REACT_APP_MESSAGING_SENDER_ID",
  "REACT_APP_APP_ID",
];

export default defineConfig(({ mode }) => {
  // Cargar las variables de entorno
  const env = loadEnv(mode, process.cwd(), "REACT_APP_");
  const processEnv = {};

  // Filtrar y asignar solo las variables necesarias
  pickedKeys.forEach((key) => {
    if (env[key] !== undefined) {
      processEnv[key] = env[key];
    } else {
      console.warn(`La variable de entorno ${key} no está definida en el archivo .env`);
    }
  });

  return {
    define: {
      "process.env": processEnv,
    },
    plugins: [react()],
  };
});
