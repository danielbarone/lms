module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    // Temporarily omit no-cycle errors
    'import/no-cycle': 0,
  }
};
