const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  settings: {
    react: {
      version: 'detect',
    }
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    jasmine: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'eslint-plugin-no-inline-styles',
    'jasmine'
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/warnings',
    'plugin:jasmine/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ERROR : WARNING,
    'no-eval': ERROR,
    'import/first': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
    'max-params': [ERROR, 3],
    'no-debugger': ERROR,
    'no-nested-ternary': ERROR,
    'object-shorthand': ERROR,
    'semi': [ERROR, 'always'],
    'no-extra-semi': OFF,
    'quotes': [ERROR, 'single', { 'avoidEscape': true }],
    'import/order': [
      ERROR,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'internal'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {order: 'ignore'}
      }
    ],
    'import/extensions': [ERROR, 'never', {
      scss: 'always',
      json: 'always',
      png: 'always'
    }],
    'no-inline-styles/no-inline-styles': ERROR,
    'no-unused-vars': ERROR,
    'no-use-before-define': OFF,
    'import/no-anonymous-default-export': ERROR,
    'react/prop-types': OFF,
    'react/display-name': OFF,
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/naming-convention': [
      ERROR,
      {selector: 'typeAlias', format: ['PascalCase'], prefix: ['T']},
      {selector: 'interface', format: ['PascalCase'], prefix: ['I']}
    ],
    '@typescript-eslint/no-extra-semi': ERROR,
    '@typescript-eslint/no-non-null-assertion': ERROR,
    '@typescript-eslint/ban-ts-comment': [
      ERROR,
      {
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        minimumDescriptionLength: 10
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    'jasmine/new-line-between-declarations': ERROR,
    'jasmine/new-line-before-expect': ERROR,
    'jasmine/prefer-toHaveBeenCalledWith': ERROR,
    'jasmine/expect-matcher': ERROR,
    'jasmine/prefer-jasmine-matcher': ERROR,
    'jasmine/no-disabled-tests': ERROR,
    'jasmine/no-suite-dupes': [ERROR, 'branch'],
    'jasmine/no-spec-dupes': [ERROR, 'branch'],
    'jasmine/no-unsafe-spy': ERROR
  },
}
