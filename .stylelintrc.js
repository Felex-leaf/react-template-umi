module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-less', 'stylelint-config-prettier'],
  rules: {
    'no-irregular-whitespace': true,
    'block-no-empty': true,
    'function-parentheses-space-inside': 'never', // 禁止选择器括号后面的空格
    'font-family-no-missing-generic-family-keyword': null, // iconfont
    'selector-type-no-unknown': null,
    'comment-empty-line-before': null,
    'number-leading-zero': null,
    'selector-pseudo-element-colon-notation': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export'],
      },
    ],
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'selector-class-pattern': null, // 允许使用 camelCase 类名
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
