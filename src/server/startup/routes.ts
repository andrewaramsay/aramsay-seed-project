import { RouteBuilder } from 'aramsay-express-router';
import { Injector } from 'aramsay-injector';
import { Application, Router } from 'express';
import { ThingsController } from '../api/things.controller';

export function configureRoutes(app: Application, injector: Injector): void {
    let router = Router();
    let routeBuilder = new RouteBuilder(router, injector.get.bind(injector));

    routeBuilder.buildRoutes(ThingsController);

    app.use(router);
}