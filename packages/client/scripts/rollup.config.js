import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import dts from 'rollup-plugin-dts';
import typescript2 from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import { version } from '../package.json';
export default [
  // Waline umd format
  {
    input: `./src/index.ts`,
    output: [
      {
        file: `./dist/waline.min.js`,
        format: 'umd',
        sourcemap: true,
        name: 'Waline',
      },
    ],
    plugins: [
      vue(),
      typescript2({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
          },
        },
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env["NODE_ENV"]': JSON.stringify('production'),
        "process.env['NODE_ENV']": JSON.stringify('production'),
        VERSION: JSON.stringify(version),
      }),
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      terser(),
    ],
    treeshake: 'smallest',
  },

  // Waline cjs format
  {
    input: `./src/index.ts`,
    output: [
      {
        file: `./dist/waline.cjs.js`,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      vue(),
      typescript2({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
          },
        },
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env["NODE_ENV"]': JSON.stringify('production'),
        "process.env['NODE_ENV']": JSON.stringify('production'),
        VERSION: JSON.stringify(version),
      }),
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      terser(),
    ],
    treeshake: 'smallest',
  },

  // Waline esm format
  {
    input: `./src/index.ts`,
    output: [
      {
        file: `./dist/waline.esm.js`,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      vue(),
      typescript2({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
          },
        },
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env["NODE_ENV"]': JSON.stringify('production'),
        "process.env['NODE_ENV']": JSON.stringify('production'),
        VERSION: JSON.stringify(version),
      }),
      nodeResolve({ preferBuiltins: true }),
      commonjs(),
      terser(),
    ],
    treeshake: 'smallest',
  },

  // declaration files
  {
    input: `./src/index.ts`,
    output: [
      { file: './dist/waline.cjs.d.ts', format: 'esm' },
      { file: './dist/waline.min.d.ts', format: 'esm' },
      { file: './dist/waline.esm.d.ts', format: 'esm' },
    ],
    plugins: [dts()],
    external: [/\.vue$/],
  },
];
