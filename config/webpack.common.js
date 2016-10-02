const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CommonsChunkPlugin } = require('webpack').optimize;
const { root } = require('./helpers');

module.exports = {
    entry: {
        polyfills: './src/client/polyfills.ts',
        vendor: './src/client/vendor.ts',
        app: './src/client/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: root('src', 'client', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: root('src', 'client', 'app'),
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                exclude: root('src', 'client', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap')
            },
            {
                test: /\.scss$/,
                include: root('src', 'client', 'app'),
                loaders: ['raw', 'sass?sourceMap']
            }
        ]
    },

    plugins: [
        
        new CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/client/index.html'
        })

    ]
};
