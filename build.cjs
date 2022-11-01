const esbuild = require('esbuild');
const {dtsPlugin} = require('esbuild-plugin-d.ts');
const rimraf = require('rimraf');

rimraf.sync('dist');

const option = {
    bundle: true,
    color: true,
    logLevel: 'info',
    sourcemap: true,
    entryPoints: ['./src/index.ts'],
    minify: true,
};

async function run() {
    await esbuild
        .build({
            format: 'esm',
            outdir: 'dist',
            splitting: true,
            plugins: [dtsPlugin()],
            ...option,
        })
        .catch(() => process.exit(1));

    await esbuild
        .build({
            format: 'cjs',
            outfile: './dist/cjs.js',
            ...option,
        })
        .catch(() => process.exit(1));
}

run();
