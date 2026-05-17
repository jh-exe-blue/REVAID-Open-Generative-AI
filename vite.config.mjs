import { defineConfig } from 'vite';

export default defineConfig({
    base: './',
    server: {
        proxy: {
            '/api': {
                target: 'https://muron.revaid.link',
                changeOrigin: true,
                secure: false
            }
        }
    }
});
