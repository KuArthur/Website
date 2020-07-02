const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    entry: {
        index: './src/index.js',
        formElements: './src/pages/form-elements/form-elements.js',
        colorAndTypes: './src/pages/color-and-types/color-and-types.js'
    },
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'dist'),
        //publicpath: '/dist'

    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader', {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    // Creates `style` nodes from JS strings
                    {
                        loader: 'style-loader'
                    }, {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'resolve-url-loader'
                    }, {
                        // Compiles Sass to CSS
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'img',
                    //publicPath: "./../img"
                }
            },

            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    publicPath: "./../fonts"

                }
            },

            // {
            //     test: /\.svg$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[path][name].[ext]',
            //         publicPath: "./src/icons"
            //     }
            // }, 
            {
                // ESLint
                enforce: 'pre',
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'eslint-loader',
            }, {
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
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'

        }),
    ],

}