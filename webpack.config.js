const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        striveneditor: './src/striveneditor.js',
        'ko-striveneditor': './src/ko-striveneditor.js',
        'vue-striveneditor': './src/vue-striveneditor.vue'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        library: 'striveneditor',
        libraryTarget: 'umd2'
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-modules-umd']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            exclude: 'index',
            terserOptions: {
                output: {
                    comments: /@license/i,
                },
            },
            extractComments: true,
        })]
    }
};