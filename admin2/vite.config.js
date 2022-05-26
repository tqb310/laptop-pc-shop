import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: assetInfo => {
                    let extType = assetInfo.name
                        .split('.')
                        .at(1);
                    if (extType === 'css') {
                        return `assets/[name].css`;
                    }
                    return `assets/[name]-[hash][extname]`;
                },
                chunkFileNames: 'assets/[name].js',
                entryFileNames: 'assets/[name].js',
            },
        },
    },
});
