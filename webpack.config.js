const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        striveneditor: './src/striveneditor.js'
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
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-modules-umd']
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            exclude: 'index'
        })]
    }
};