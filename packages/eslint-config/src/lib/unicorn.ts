import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['plugin:unicorn/recommended'],
  rules: {
    // This rule prevents the use of abbreviations for more readable code
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          conf: false,
          db: false,
          dbs: false,
          doc: false,
          docs: false,
          env: false,
          prev: false,
          prod: false,
        },
      },
    ],
  },
};

export = config;
