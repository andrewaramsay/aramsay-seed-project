import * as express from 'express';
import { Application } from 'express';
import { Injector } from 'aramsay-injector';

import { Config } from './config';
import { configureExpress, configureErrorHandlers } from './express';
import { configureRoutes } from './routes';
import { configureWebpackMiddleware } from './webpack';

interface ReadyCallback {
    (err: Error, app: Application, config: Config): void;
}

export function buildApp(ready: ReadyCallback): void {
    const app = express();
    const injector: Injector = Injector.instance;
    const config = injector.get(Config);

    configureExpress(app, config);

    configureWebpackMiddleware(app, config);
    
    configureRoutes(app, injector);
    configureErrorHandlers(app);

    ready(null, app, config);
}