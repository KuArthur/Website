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
        formElements: './src/pages/ui-kit/form-elements/form-elements.js',
        colorAndTypes: './src/pages/ui-kit/color-and-types/color-and-types.js',
        cards :'./src/pages/ui-kit/cards/cards.js',
        headerAndFooter :'./src/pages/ui-kit/header-footer/header-footer.js',
        landing: './src/pages/website-pages/landing/landing.js',
        registration: './src/pages/website-pages/registration/registration.js',
        login: './src/pages/website-pages/sign/sign.js',
        roomDetails: './src/pages/website-pages/room-details/room-details.js',
        searchRoom: './src/pages/website-pages/search-room/search-room.js'
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
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                    
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
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
                loader: 'url-loader',
                options: {
                    name: '[path][name].[ext]',
                    esModule: false
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
            filename: "pages/ui-kit/form-elements.html", // pages => index.css => '../index.css
            template: './src/pages/ui-kit/form-elements/form-elements.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['colorAndTypes'],
            filename: "pages/ui-kit/color-and-types.html",
            template: './src/pages/ui-kit/color-and-types/color-and-types.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['cards'],
            filename: "pages/ui-kit/cards.html",
            template: './src/pages/ui-kit/cards/cards.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['headerAndFooter'],
            filename: "pages/ui-kit/header-footer.html",
            template: './src/pages/ui-kit/header-footer/header-footer.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['landing'],
            filename: "pages/website-pages/landing.html",
            template: './src/pages/website-pages/landing/landing.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['registration'],
            filename: "pages/website-pages/registration.html",
            template: './src/pages/website-pages/registration/registration.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['login'],
            filename: "pages/website-pages/login.html",
            template: './src/pages/website-pages/sign/sign.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['roomDetails'],
            filename: "pages/website-pages/room-details.html",
            template: './src/pages/website-pages/room-details/room-details.pug'
        }),
        new HtmlWebpackPlugin({
            chunks: ['searchRoom'],
            filename: "pages/website-pages/search-room.html",
            template: './src/pages/website-pages/search-room/search-room.pug'
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