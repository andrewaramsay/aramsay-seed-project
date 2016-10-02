# Commands

* `npm install` - Install all dependencies and typings files
* `npm test` - Run all unit tests
* `npm run build` - Build the production-ready server and client code, place in the 'dist' folder
* `npm run application` - Starts the server sitting in the 'dist' folder (output of `npm run build`)
* `npm start` - Start the dev server, point your browser at http://localhost:8080/ to test

# Server
The server uses dependency injection supplied by [aramsay-injector](https://github.com/andrewaramsay/aramsay-injector), and declarative express route config using
[aramsay-express-router](https://github.com/andrewaramsay/aramsay-express-router).  

### Dependency Injection
All server code should be written as TypeScript classes decorated with the `@Injectable()` decorator.  Dependencies will be automatically injected as long as they too are decorated 
with `@Injectable()`. (Don't forget the `()` or this will not work correctly.).  This decorator takes a config object with a single property `singleton` which tells the injector to
provide a single instance to any class that injects this class.

### Route config
Individual api controllers should be added as TypeScript classes with each method decorated with `@Get()`, `@Post()`, etc. decorators.  These take the same parameters as an express
router method.  That is, a string api url, followed by zero or more express middleware functions.  The decorated method becomes the last method passed to the route.  A new instance
of the controller will be constructed (and dependencies injected) prior to calling a given method, the instance will correctly be bound to `this` when calling the method.  Each controller
class must be registered with the `RouteBuilder` in `src/server/startup/routes.ts`.