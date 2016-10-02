import { Application, static as hostStatic } from 'express';

import { Config } from './config';

export function configureExpress(app: Application, config: Config): void {
    if (config.environment !== 'development') {
        // In development webpack-dev-middleware handles hosting front-end files
        app.use(hostStatic(config.clientPath));
    }
}

export function configureErrorHandlers(app: Application): void {

}