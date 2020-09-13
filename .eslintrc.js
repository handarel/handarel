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
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
};
