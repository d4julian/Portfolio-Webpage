import { defineConfig } from 'vite';

export default defineConfig({
    base: '',

    build: {
        outDir: 'docs',
        "predeploy" : "npm run build",
        "deploy" : "gh-pages -d dist",
    }
});
