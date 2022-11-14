module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base/legacy',
        'plugin:prettier/recommended',
        'plugin:unicorn/all',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    overrides: [
        {
            files: '*.test.ts',
            rules: {
                'no-loop-func': 0,
                'no-plusplus': 0,
                'no-undef': 0,
            },
        },
        {
            files: './*.js',
            rules: {
                'unicorn/prefer-module': 0,
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'consistent-return': 0,
        'default-case': 0,
        'func-names': 0,
        'no-console': 0,
        'no-new-func': 0,
        'no-param-reassign': 0,
        'no-restricted-syntax': 0,
        'object-curly-spacing': ['error', 'never'],
        'prettier/prettier': 'error',
        'sort-imports': 2,
        'sort-keys': 2,
        'unicorn/no-keyword-prefix': 0,
        'unicorn/prefer-spread': 0,
    },
    settings: {
        'import/resolver': {
            typescript: true,
        },
    },
};
