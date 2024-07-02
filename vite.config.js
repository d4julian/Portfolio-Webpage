import { defineConfig } from 'vite';

export default defineConfig({
    root: '.',

    build: {
        assetsDir: "assets",
        outDir: 'docs',
        "predeploy" : "npm run build",
        "deploy" : "gh-pages -d dist",
    }
});
