const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

        entry: {
            main: './app/main',
            vendor: './app/vendor'
        },
        devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : false,
        // devtool: "source-map",
        output: {
            path: path.resolve(__dirname, "public"),
            publicPath: "/",
            sourceMapFilename: "[file].map",
            filename: "[name].[hash].js",
            chunkFilename: 'public/[id].chunk.js'
        },

        module: {
            rules: [
                    {
                      test: /datatables\.net.*/,
                      loader: 'imports?define=>false'
                    },
                    {
                        test: /\.tsx?$/,
                        use: ['awesome-typescript', 'angular2-template', 'angular-router'],
                        exclude: /node_modules/
                    },
                    {
                        test: /\.css$/,
                        use: ['to-string', 'css'],
                        exclude: /node_modules/
                    },
                    {
                        test: /\.less$/,
                        use: ['to-string', 'css', 'autoprefixer', 'less'],
                        exclude: /node_modules/
                    },
                    {
                        test: /\.html$/,
                        loader: "html",
                        exclude: /node_modules/,
                        options: {
                            minimize: true,
                            removeAttributeQuotes: false,
                            caseSensitive: true,
                            customAttrSurround: [
                                [/#/, /(?:)/],
                                [/\*/, /(?:)/],
                                [/\[?\(?/, /(?:)/]
                            ],
                            customAttrAssign: [/\)?\]?=/]
                        }
                    },
                    {
                        test: /\.(jpe?g|png|gif|svg)$/i,
                        loader: 'file?name=[path][hash].[ext]',
                    },
                ],
            },

            resolve: {
                extensions: [".tsx", ".ts", ".js", ".css", ".less"]
            },
            resolveLoader: {
                moduleExtensions: ['-loader']
            },
            devServer: {
                contentBase: path.resolve(__dirname, 'public'),
                compress: true,
                host: 'localhost',
                port: 9000,
                historyApiFallback: true,
                watchOptions: {
                    aggregateTimeout: 300,
                    poll: 1000
                },
            },
            plugins: [

                new webpack.NoEmitOnErrorsPlugin(),
                new webpack.ContextReplacementPlugin(
                    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                    __dirname
                ),

                new webpack.LoaderOptionsPlugin({
                    minimize: true,
                    debug: false
                }),

                new webpack.HotModuleReplacementPlugin(),
                new webpack.DefinePlugin({
                    NODE_ENV: JSON.stringify(NODE_ENV)
                }),
                new webpack.optimize.CommonsChunkPlugin({
                    name: ['main', 'vendor']
                }),
                new ImageminPlugin({
                    disable: process.env.NODE_ENV !== 'production',
                    plugins: [
                        imageminMozjpeg({
                            quality: 100,
                            progressive: true,
                        })
                    ]
                }),
                new HtmlWebpackPlugin({
                    template: 'index.html'
                }),
                new webpack.ProvidePlugin({
                    jQuery: 'jquery',
                    $: 'jquery',
                    jquery: 'jquery'
                })
            ],
            watch: NODE_ENV == 'development',

            node: {
                global: true,
                crypto: 'empty',
                process: true,
                module: false,
                clearImmediate: false,
                setImmediate: false
            }
        };

        if (NODE_ENV == 'production') {
            module.exports.plugins.push(
                new webpack.optimize.UglifyJsPlugin({
                    minimize: true,
                    sourceMap: false,
                    compress: {
                        warnings: false,
                        drop_console: true,
                        unsafe: true
                    }
                })
            );
        }
