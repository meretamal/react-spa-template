module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-param-reassign': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@api': './src/api',
          '@config': './src/config',
          '@pages': './src/pages',
          '@store': './src/store',
        },
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
