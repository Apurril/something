module.exports = {
  "parser": "babel-eslint",
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  settings: {
    react: {
      version: "detect"
    },
  },
  rules: {
    "quotes": [
      "error",
      "double",
    ],
    "linebreak-style": [
      "error",
      "windows",
    ],
    "react/state-in-constructor": ["error", "never"],
  },
};
