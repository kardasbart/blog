const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './public/dist'),
  },
  module: {
      rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.css$/,
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          }
      ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}