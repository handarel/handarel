import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: ['./lib/imports'].map((path) => require.resolve(path)),
};

export = config;
