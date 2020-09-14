import * as nodeModules from 'module';

import type { Linter } from 'eslint';

const builtinModules = nodeModules.builtinModules.join('|');

const config: Linter.Config = {
  rules: {
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
          // `angular` related packages come first.
          ['^@angular/core(/|$)', '^@angular/common(/|$)', '^@angular(/|$)'],
          // `ngrx` related packages come second.
          ['^@ngrx/store(/|$)', '^@ngrx(/|$)'],
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
