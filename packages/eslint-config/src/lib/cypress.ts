import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['plugin:cypress/recommended', 'plugin:chai-friendly/recommended'],
};

export = config;
