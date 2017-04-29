const path = require('path')
const directoryNamedWebpackPlugin = require('directory-named-webpack-plugin')
const cssNext = require('postcss-cssnext')
const cssModulesVariables = require('postcss-modules-values')

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
          cssModulesVariables,
          cssNext
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
