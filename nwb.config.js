const path = require('path')

module.exports = {
  type: 'react-app',
  babel: {
    plugins: ['styled-components']
  },
  webpack: {
    aliases: {
      src: path.resolve('src'),
      assets: path.resolve('assets')
    }
  }
}
