import { defineConfig } from 'vite';

export default defineConfig({
    base: '',

    build: {
        outDir: 'dist',
        "predeploy" : "npm run build",
        "deploy" : "gh-pages -d dist",
    }
});
