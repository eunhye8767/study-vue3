import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			// @ => src룰 가리킨다. 실무에서 용이.
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	server: {
		watch: {
			usePolling: true,
		},
	},
});
