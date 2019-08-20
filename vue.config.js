module.exports = {
  devServer: {
    proxy: {
      '/baidu': {
        target: 'http://10.59.81.31:8088',
        changeOrigin: true,
        pathRewrite: { '^/baidu': '' }
      },
      '/default': {
        target: 'http://10.59.81.31:8088',
        changeOrigin: true,
        pathRewrite: { '^/default': '' }
      },
    }
  },
  outputDir: '../../resources/static'
}
