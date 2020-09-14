import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['airbnb-base'],
  rules: {
    // Require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
  },
};

export = config;
