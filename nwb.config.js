// $ yarn add -D postcss-cssnext
// $ yard add -D directory-named-webpack-plugin

const path = require('path')
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      src: path.resolve('src')
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
          require('postcss-cssnext')
        ]
      }
    },
    extra: {
      resolve: {
        plugins: [
          new DirectoryNamedWebpackPlugin()
        ]
      }
    }
  }
}
