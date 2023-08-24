module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'prettier',
    './rules/es',
    './rules/import',
    './rules/jsx-a11y',
    './rules/react',
    './rules/typescript',
  ],
  parser: '@typescript-eslint/parser',
};
