import esbuild from 'rollup-plugin-esbuild';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';

export default {
    input: './src/index.js',
    output: {
        dir: 'dist',
    },
    plugins: [
        esbuild({ minify: true }),
        copy({ targets: [{ src: './src/index.d.ts', dest: './dist' }] }),
        filesize(),
    ],
};
