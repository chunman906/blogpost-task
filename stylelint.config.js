module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer'
        ],
      },
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'theme'
        ],
      },
    ],
    'string-quotes': 'single',
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': null,
    'property-no-unknown': null,
    'max-line-length': 200,
    'selector-class-pattern': "^[A-Za-z]+"
  },
}
