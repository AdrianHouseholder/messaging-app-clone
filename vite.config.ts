import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": "/src/components",
			"@hooks": "/src/hooks",
			"@types": "/src/types",
			"@utils": "/src/utils",
			"@contexts": "/src/contexts",
			"@styles": "/src/styles",
		},
	},
});
