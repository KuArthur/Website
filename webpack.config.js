const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const path = require('path')


module.exports = {

    entry: {
        index: './src/index.js',
        formElements: './src/pages/form-elements/form-elements.js',
        colorAndTypes: './src/pages/color-and-types/color-and-types.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        //publicpath: '/dist'

    },
    module: {
        rules: [{
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
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file-loader"
            },
            {
                // ESLint
                enforce: 'pre',
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'eslint-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
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
        new HtmlWebpackPlugin({
            filename: "pages/form-elements.html",
            template: './src/pages/form-elements/form-elements.pug'
        }),
        new HtmlWebpackPlugin({
            filename: "pages/color-and-types.html",
            template: './src/pages/color-and-types/color-and-types.pug'
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'

        }),
    ],

}