module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': 0, // 分号
    camelcase: 0, //
    'comma-dangle': 0, // 逗号
    'space-before-function-paren': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
