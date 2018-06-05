const prettierConfig = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  semi: false
}

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  globals: {
    it: false,
    module: false,
    process: false,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: [
    "import",
    "prettier",
    "react",
  ],
  rules: {
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "no-console": [
      "warn",
    ],
    "linebreak-style": [
      "error",
      "unix",
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "prettier/prettier": [
      "error",
      prettierConfig,
    ],
    "react/prop-types": [
      "warn",
    ],
  }
}
