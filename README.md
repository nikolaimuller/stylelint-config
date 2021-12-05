Stylelint config by mullerstd

### Includes

- `stylelint-config-standard`
- `stylelint-prettier` with `stylelint-config-prettier`
- `stylelint-order` with `stylelint-config-idiomatic-order`

## Install

Using yarn:

```bash
yarn add -D @mullerstd/stylelint-config
```

Or using npm:

```bash
npm i @mullerstd/stylelint-config --save-dev
```

## Usage

Base config:

```json
{
  "extends": "@mullerstd/stylelint-config"
}
```

For tailwind project:

```json
{
  "extends": ["@mullerstd/stylelint-config", "@mullerstd/stylelint-config/tailwindcss"]
}
```
