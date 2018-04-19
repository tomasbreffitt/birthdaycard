const webpack = require('webpack')
const path = require('path')

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    alias: {
        "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
        "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
        "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
        "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
        "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }]
            ]
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
          jQuery: "jquery",
          $: "jquery",
          jquery: "jquery"
      })
  ]
}

module.exports = config
