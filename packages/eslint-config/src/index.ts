import type { Linter } from 'eslint';

const rules = [
  './lib/base',
  './lib/imports',
  './lib/jsdoc',
  './lib/node',
  './lib/promise',
  './lib/unicorn',
  './lib/jest',
  './lib/cypress',
];

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
  extends: rules.map((path) => require.resolve(path)),
};

export = config;
