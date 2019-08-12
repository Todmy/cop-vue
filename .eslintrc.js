module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@vue/standard',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: false }],
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'import/extensions': ['js', 'vue', 'json'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, consistent: true },
        ObjectPattern: { multiline: true, consistent: true },
        ImportDeclaration: { multiline: true, consistent: true },
        ExportDeclaration: { multiline: true, consistent: true },
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'array-bracket-spacing': ['error', 'never'],
    eqeqeq: ['error', 'always'],
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
