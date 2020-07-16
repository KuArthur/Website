const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');
const ghpages = require('gh-pages');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: {
        index: './src/index.js',
        formElements: './src/pages/form-elements/form-elements.js',
        colorAndTypes: './src/pages/color-and-types/color-and-types.js',
        cards :'./src/pages/cards/cards.js',
        headerAndFooter :'./src/pages/header-footer/header-footer.js'
    },
    output: {
        filename: 'scripts/[name].js', // [name]
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader', 
                    {
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
                    outputPath: 'img/',
                    publicPath: "./../img"
                }
            },

            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
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

        // Функция которая пройдет по всем pages/**/*.pug возьмет имя файла как chunks и подставит 
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: "index.html", // pages
            template: './src/index.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['formElements'],
            filename: "pages/form-elements.html", // pages => index.css => '../index.css
            template: './src/pages/form-elements/form-elements.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['colorAndTypes'],
            filename: "pages/color-and-types.html",
            template: './src/pages/color-and-types/color-and-types.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['cards'],
            filename: "pages/cards.html",
            template: './src/pages/cards/cards.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['headerAndFooter'],
            filename: "pages/header-footer.html",
            template: './src/pages/header-footer/header-footer.pug'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
              { 
                from:path.resolve(__dirname,'src/img/'),
                to:path.resolve(__dirname,'dist/img') 
            },
        
            ],
          }),
        
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'

        }),
    ],

}