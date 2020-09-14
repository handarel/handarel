import { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
  ],
  rules: {
    // Disable for '@typescript-eslint/default-param-last'
    'default-param-last': 'off',

    // This rule enforces default parameters to be the last of parameters
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    '@typescript-eslint/default-param-last': 'error',

    // Disable for '@typescript-eslint/no-unused-vars'
    'no-unused-vars': 'off',

    // This rule is aimed at eliminating unused variables, functions, and function parameters
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    // Disable for '@typescript-eslint/no-useless-constructor'
    'no-useless-constructor': 'off',

    // This rule flags class constructors that can be safely removed without changing how the class works
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    '@typescript-eslint/no-useless-constructor': 'error',

    // This rule aims to ensure that the values returned from functions are of the expected type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': 'error',

    // This rule enforces that private members are marked as 'readonly' if they're never modified outside of the constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
    '@typescript-eslint/prefer-readonly': 'error',

    // This rule allows you to enforce that function parameters resolve to readonly types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
    '@typescript-eslint/prefer-readonly-parameter-types': 'error',
  },
};

export = config;
