import icon from "@achamaro/vite-plugin-icon";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [icon(), react()],
});
