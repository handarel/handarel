module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 12,
    project: './tsconfig.base.json',
  },
  extends: [
    '@handarel/eslint-config',
    '@handarel/eslint-config-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/unicorn',
  ],
};
