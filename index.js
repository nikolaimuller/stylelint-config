module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
    'stylelint-config-idiomatic-order',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'property-no-vendor-prefix': null,
  },
}
