module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-less', 'stylelint-config-prettier'],
  rules: {
    'function-url-quotes': 'always',
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
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
