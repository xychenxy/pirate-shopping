import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // make sure to import it
import macrosPlugin from "vite-plugin-babel-macros";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr(), macrosPlugin()],
	server: {
		host: true,
		port: 8080,
	},
});
