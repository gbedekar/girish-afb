import path from 'path';
import cleanup from 'rollup-plugin-cleanup';
import license from 'rollup-plugin-license';
import { terser } from 'rollup-plugin-terser';

const directory = 'node_modules/@aemforms/af-core';
export default {
  external: ['@adobe/json-formula', '@aemforms/af-formatters'],
  input: {
    runtime: path.join(directory, 'lib/esm/FormInstance.js'),
    events: path.join(directory, 'lib/esm/controller/Events.js'),
  },
  plugins: [
    cleanup({
      comments: 'none',
    }),
    license({
      banner: {
        content: {
          file: path.join(directory, 'LICENSE'),
          encoding: 'utf-8',
        },
      },
    }),
  ],
  output: [{
    dir: 'blocks/aemform/rules/model',
    format: 'es',
    entryFileNames: 'afb-[name].js',
    paths: {
      '@adobe/json-formula': '../formula/index.js',
      '@aemforms/af-formatters': './afb-formatters.js',
    },
  },
  {
    dir: 'blocks/aemform/rules/model',
    format: 'es',
    entryFileNames: 'afb-[name].min.js',
    paths: {
      '@adobe/json-formula': '../formula/index.min.js',
      '@aemforms/af-formatters': './afb-formatters.min.js',
    },
    plugins: [terser()],
  }],
};
