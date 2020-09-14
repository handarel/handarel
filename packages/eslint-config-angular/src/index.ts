import type { Linter } from 'eslint';

const config: Linter.Config = {
  env: {
    es2020: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [].map((path) => require.resolve(path)),
};

export = config;
