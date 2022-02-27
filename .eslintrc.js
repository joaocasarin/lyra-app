module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    ignorePatterns: [
        'node_modules/',
        'coverage/',
        '.editorconfig',
        'package.json',
        'tsconfig.json'
    ],
    rules: {
        'react/jsx-filename-extension': 'off',
        'react/function-component-definition': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'import/extensions': ['error', 'never'],
        'import/prefer-default-export': 'off',
        'import/first': 'off',
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': 'off',
        'no-plusplus': 'off',
        indent: ['error', 4],
        'comma-dangle': ['error', 'never'],
        'class-methods-use-this': 'off',
        semi: ['error', 'always'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: ['**/*.test.ts', '**/*.test.js', 'vite.config.ts']
            }
        ]
    }
};
