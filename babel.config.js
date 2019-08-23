module.exports = {
  presets: [
    ['@vue/app', {
      'polyfills': [
        'es6.string.includes'
      ]
    }]
  ],
  'plugins': [
    ['component', {
      'libraryName': 'mint-ui',
      'style': true
    }]
  ]
}
