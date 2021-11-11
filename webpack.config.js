const path = require('path')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, './public/dist'),
  },
//   resolve: {
//     alias: {
//       'vue': '@vue/runtime-dom',
//     //   'vuex': 'vuex/dist/vuex.esm-bundler',
//     //   '@': path.join(__dirname, 'src')
//     }
//   },
  module: {
      rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader'
          }
      ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}