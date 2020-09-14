import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['airbnb-base'],
  rules: {
    // This rule enforces default parameters to be the last of parameters
    // https://eslint.org/docs/rules/default-param-last
    'default-param-last': 'error',

    // Require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // This rule enforces a maximum line length to increase code readability and maintainability
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      {
        code: 100,
        comments: 140,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
  },
};

export = config;
