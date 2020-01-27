const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')


module.exports = {
    mode:"development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        //publicpath: '/dist'
        
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
            test: /\.pug$/,
            loader: 'pug-loader'
          },
        ],
      },
      devServer: {
        overlay: true //вывод ошибок в браузере
      },
      plugins: [
    
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: './src/index.pug'
        }),
      ],
    
  }

