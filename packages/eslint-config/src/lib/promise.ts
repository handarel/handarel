import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['plugin:promise/recommended'],
};

export = config;
