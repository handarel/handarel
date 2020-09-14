import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['plugin:jest/recommended', 'plugin:jest/style'],
  rules: {
    // A describe block should not contain duplicate hooks
    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 'error',

    // All hooks should be defined before the start of the tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/HEAD/docs/rules/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',
  },
};

export = config;
