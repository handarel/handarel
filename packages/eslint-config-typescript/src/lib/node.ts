import type { Linter } from 'eslint';

const config: Linter.Config = {
  rules: {
    // Disables the rule for typescript files (not needed)
    // https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-unsupported-features/es-syntax.md
    'node/no-unsupported-features/es-syntax': 'off',
  },
};

export = config;
