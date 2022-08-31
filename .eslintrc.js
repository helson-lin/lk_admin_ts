module.exports = {
    root: true,
    env: {
        node: true,
        browser: true, // browser global variables
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'plugin:prettier/recommended',
        '.eslintrc-auto-import.json',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json', './.eslintrc.js']
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'vue/multi-word-component-names': 0,
        eqeqeq: [2],
        'no-return-await': 0,
        'no-empty-function': 2,
        'prettier/prettier': 'error',
        'linebreak-style': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    'test/**', // tape, common npm pattern
                    'tests/**', // also common npm pattern
                    'spec/**', // mocha, rspec-like pattern
                    '**/__tests__/**', // jest pattern
                    '**/__mocks__/**', // jest pattern
                    'test.{js,jsx}', // repos with a single test file
                    'test-*.{js,jsx}', // repos with multiple top-level test files
                    '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
                    '**/jest.config.js', // jest config
                    '**/webpack.config.js', // webpack config
                    '**/webpack.config.*.js', // webpack config
                    '**/rollup.config.js', // rollup config
                    '**/rollup.config.*.js', // rollup config
                    '**/gulpfile.js', // gulp config
                    '**/gulpfile.*.js', // gulp config
                    '**/Gruntfile{,.js}', // grunt config
                    '**/protractor.conf.js', // protractor config
                    '**/protractor.conf.*.js', // protractor config
                    '**vite**',
                    '**@vitejs**',
                ],
                optionalDependencies: false,
            },
        ],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'acc', // for reduce accumulators
                    'accumulator', // for reduce accumulators
                    'e', // for e.returnvalue
                    'ctx', // for Koa routing
                    'context', // for Koa routing
                    'req', // for Express requests
                    'request', // for Express requests
                    'res', // for Express responses
                    'response', // for Express responses
                    '$scope', // for Angular 1 scopes
                    'staticContext', // for ReactRouter context
                    'state', // for vuex state
                ],
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
            },
        ],
    },
}
