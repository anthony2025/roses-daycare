const path = require('path')
const directoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const cssnext = require('postcss-cssnext')

module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      components: path.resolve('src/components'),
      containers: path.resolve('src/containers'),
      views: path.resolve('src/views')
    },
    html: {
      mountId: 'root',
      favicon: 'public/favicon.ico'
    },
    rules: {
      css: {
        modules: true,
        localIdentName: ('[local]--[hash:base64:5]')
      },
      postcss: {
        plugins: [
          cssnext
        ]
      }
    },
    extra: {
      resolve: {
        plugins: [
          new directoryNamedWebpackPlugin()
        ]
      }
    }
  }
}
