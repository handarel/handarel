import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [].map((path) => require.resolve(path)),
};

export = config;
