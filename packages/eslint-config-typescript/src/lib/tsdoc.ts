import type { Linter } from 'eslint';

const config: Linter.Config = {
  plugins: ['tsdoc'],
  rules: {
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
};

export = config;
