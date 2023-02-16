import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@jpg': path.resolve(__dirname, './src/assets/img/jpg'),
			'@png': path.resolve(__dirname, './src/assets/img/png'),
			'@svg': path.resolve(__dirname, './src/assets/img/svg'),
			'@webp': path.resolve(__dirname, './src/assets/img/webp'),
			'@components': path.resolve(__dirname, './src/components'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@context': path.resolve(__dirname, './src/context'),
			'@views': path.resolve(__dirname, './src/views'),
			'@services': path.resolve(__dirname, './src/services'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@styles': path.resolve(__dirname, './src/style'),
		},
	},
});
