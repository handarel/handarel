import type { Linter } from 'eslint';

const config: Linter.Config = {
  settings: {
    node: {
      tryExtensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.json', '.node'],
    },
  },
  extends: ['plugin:node/recommended'],
};

export = config;
