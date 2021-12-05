module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-prettier', 'stylelint-order'],
  rules: {
    'prettier/prettier': true,
    'color-named': 'never',
    'color-hex-length': 'long',
    'function-disallowed-list': ['rgb'],
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'custom-property-empty-line-before': null,
    'declaration-empty-line-before': null,
    'declaration-property-unit-allowed-list': {
      '/^border(?!.*-radius$)/': ['px', '%'],
      '/^border-radius/': ['px', 'rem', '%'],
      '/^box-shadow': ['px'],
      '/^margin/': ['rem'],
      '/^padding/': ['rem'],
      'font-size': ['rem', 'em'],
      height: ['rem', '%', 'vh'],
      width: ['rem', '%', 'vw'],
    },
    'max-empty-lines': 1,
    'no-duplicate-selectors': true,
    'selector-max-id': [0],
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,
    'font-family-no-missing-generic-family-keyword': null,
    'font-family-name-quotes': 'always-unless-keyword',
    'no-descending-specificity': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'declaration-block-trailing-semicolon': null,
  },
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.tsx', '**/*.md'],
}
