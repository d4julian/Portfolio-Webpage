import { defineConfig } from 'vite';

export default defineConfig({
    base: '/Portfolio-Webpage/',

    build: {
        outDir: 'docs',
        "predeploy" : "npm run build",
        "deploy" : "gh-pages -d dist",
    }
});
