import type { Linter } from 'eslint';

const config: Linter.Config = {
  overrides: [
    {
      files: ['**/*.ts'],
      env: {
        es2020: true,
        node: true,
      },
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      extends: ['./lib/base', './lib/node', './lib/tsdoc'].map((path) => require.resolve(path)),
    },
  ],
};

export = config;
