const base = require('@lcooper/eslint-config-typescript'),
    react = require('@lcooper/eslint-config-typescript-react'),
    path = require('path');

module.exports = [
    { ignores: ['lib/**', 'coverage/**', 'website/build/**', 'website/.docusaurus/**'] },
    ...base,
    {
        languageOptions: {
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: 'tsconfig.json',
                },
            },
        },
        rules: {
            '@typescript-eslint/prefer-nullish-coalescing': 0,
        },
    },
    react,
    {
        rules: {
            'react/require-default-props': 0,
            'react/react-in-jsx-scope': 0,
            'react/jsx-uses-react': 0,
        },
    },
    // docs config
    {
        files: [
            'website/**/*.?([cm])[jt]s?(x)',
        ],
        languageOptions: {
            parserOptions: {
                project: 'tsconfig.json',
                tsconfigRootDir: path.join(__dirname, 'website'),
            },
        },
        settings: {
            'import/resolver': {
                typescript: {
                    project: 'website/tsconfig.json',
                },
            },
        },
    },
];