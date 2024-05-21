import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const pickedKeys = [
  "REACT_APP_API_KEY",
  "REACT_APP_AUTH_DOMAIN",
  "REACT_APP_PROJECT_ID",
  "REACT_APP_STORAGE_BUCKET",
  "REACT_APP_MESSAGING_SENDER_ID",
  "REACT_APP_APP_ID",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const processEnv = {};
  pickedKeys.forEach((key) => (processEnv[key] = env[key]));

  return {
    define: {
      "process.env": processEnv,
    },
    plugins: [react()],
  };
});
