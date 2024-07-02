import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',

    build: {
        assetsDir: "assets",
        outDir: 'dist',
        "predeploy" : "npm run build",
        "deploy" : "gh-pages -d dist",
    }
});
