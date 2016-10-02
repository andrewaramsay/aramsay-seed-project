import { Application } from 'express';

import { Config } from './config';


export function configureWebpackMiddleware(app: Application, config: Config): void {
    if (config.environment !== 'development') {
        return;
    }

    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    // TODO: The path to the webpack config is weird, and tightly coupled to where the server code is put on compile.
    const webpackConfig = require('../../../../../config/webpack.dev');

    let compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        index: 'index.html'
    }));    
}