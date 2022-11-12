module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        'unicorn/no-keyword-prefix': 0,
        'unicorn/prefer-spread': 0
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:unicorn/all',
        'plugin:import/recommended',
        'plugin:import/typescript'
    ],
    settings: {
        "import/resolver": {
            typescript: true
        }
    }
};
