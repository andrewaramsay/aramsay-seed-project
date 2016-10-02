const { NoErrorsPlugin, DefinePlugin, optimize } = require('webpack');
const { DedupePlugin, UglifyJsPlugin } = optimize;
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const { root } = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: root('dist', 'client'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    
    // The Angular 2 / Webpack quickstart guide says to include this code, if you run in to issues with html minimize breaking things, add this back in.
    htmlLoader: {
        minimize: false // workaround for ng2
    },
    
    plugins: [

        new NoErrorsPlugin(),
        
        new DedupePlugin(),

        new UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),

        new ExtractTextPlugin('[name].[hash].css'),

        new DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })

    ]
});
