import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['plugin:jsdoc/recommended'],
  rules: {
    // Requires (or disallows) a hyphen before the @param description
    // https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description
    'jsdoc/require-hyphen-before-param-description': 'warn',
  },
};

export = config;
