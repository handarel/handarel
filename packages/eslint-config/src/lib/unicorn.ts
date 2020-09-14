import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['plugin:unicorn/recommended'],
  rules: {
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
