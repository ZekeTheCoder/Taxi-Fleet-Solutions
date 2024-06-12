import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Taxi-Fleet-Solutions/",
  build: {
    rollupOptions: {
      input: {
        main: "./src/main.jsx",
      },
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   //   base: "/Taxi-Fleet-Solutions/",
// });
