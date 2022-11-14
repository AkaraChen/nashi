import esbuild from 'rollup-plugin-esbuild';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';
import babel from '@rollup/plugin-babel';

export default [
    {
        input: './src/index.js',
        output: {
            dir: 'dist',
        },
        plugins: [
            esbuild({minify: true}),
            copy({targets: [{src: './src/index.d.ts', dest: './dist'}]}),
            filesize(),
        ],
    },
    {
        input: './src/index.js',
        output: {
            format: 'cjs',
            file: 'dist/common.js',
        },
        plugins: [
            esbuild({minify: true}),
            copy({
                targets: [
                    {
                        src: './src/index.d.ts',
                        dest: './dist/',
                        rename: 'common.d.ts',
                    },
                ],
            }),
            filesize(),
        ],
    },
    {
        input: './src/index.js',
        output: {
            file: 'dist/legacy.js',
            format: 'iife',
            name: 'nashi',
        },
        plugins: [
            esbuild({minify: true}),
            filesize(),
            babel({babelHelpers: 'bundled'}),
        ],
    },
];
