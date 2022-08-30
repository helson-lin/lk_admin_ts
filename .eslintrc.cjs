module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    '.eslintrc-auto-import.json',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  plugins: [
    'vue',
  ],
  rules: {
    indent: ['error', 2, { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', 120],
    'no-new': 'off',
    'no-dupe-args': 1,
    eqeqeq: [2],
    'no-empty-function': 2,
    'brace-style': 2,
    'new-cap': 2,
    'no-plusplus': 1,
    'require-jsdoc': 1,
    'vue/html-indent': ['error', 4],
    'vue/singleline-html-element-content-newline': 'off',
    semi: 1,
    'vue/multi-word-component-names': 0,
  },
}
