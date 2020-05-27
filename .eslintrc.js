module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jest/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'better-styled-components',
    'jest',
    'react-hooks',
    'react',
  ],
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'better-styled-components/sort-declarations-alphabetically': 2,
    'class-methods-use-this': ['off'],
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'import/prefer-default-export': 0,
    'max-len': ['error', { 'code': 100 }],
    'no-shadow': [0],
    'no-underscore-dangle': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-use-before-define': ['error'],
    'operator-linebreak': ['error', 'before'],
    'prefer-promise-reject-errors': [0],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-props-no-spreading': [0]
  },
};
