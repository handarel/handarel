import * as nodeModules from 'module';

import type { Linter } from 'eslint';

const builtinModules = nodeModules.builtinModules.join('|');

const config: Linter.Config = {
  plugins: ['simple-import-sort'],
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.json', '.node'],
      },
    },
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx', '.mjs', '.json', '.node'],
  },
  rules: {
    // This rule can enforce or disallow the use of certain file extensions
    // https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/extensions.md
    'import/extensions': ['error', 'never'],

    // Disable for 'simple-import-sort'
    'sort-imports': 'off',

    // Disable for 'simple-import-sort'
    'import/order': 'off',

    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // Specifies the order of imports for custom grouping
    // https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          // Node builtins first.
          [`^(${builtinModules})(/|$)`],
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything that does not start with a dot.
          ['^[^.]'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
};

export = config;
