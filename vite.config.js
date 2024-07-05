import { defineConfig } from 'vite';

export default defineConfig({
    base: '/Portfolio-Webpage/',

    build: {
        outDir: 'dist',
        "predeploy" : "npm run build",
        "deploy" : "gh-pages -d dist",
    }
});
