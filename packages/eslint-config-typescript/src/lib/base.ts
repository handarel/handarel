import { Linter } from 'eslint';

const config: Linter.Config = {
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['tsdoc'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      rules: {
        // Disable for '@typescript-eslint/no-unused-vars'
        'no-unused-vars': 'off',

        // This rule is aimed at eliminating unused variables, functions, and function parameters
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        // Disable for 'tsdoc/warn'
        'jsdoc/require-param-type': 'off',

        // Disable for 'tsdoc/warn'
        'jsdoc/require-returns': 'off',

        // Disable for 'tsdoc/warn'
        'jsdoc/require-returns-type': 'off',

        // Enables TSDoc
        // https://github.com/microsoft/tsdoc/tree/master/eslint-plugin
        'tsdoc/syntax': 'warn',
      },
    },
  ],
};

export = config;
