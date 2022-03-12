module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['simple-import-sort'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: ',^_',
        caughtErrorsIgnorePattern: ',^_',
        varsIgnorePattern: '^_',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'require-await': 'error',

    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
