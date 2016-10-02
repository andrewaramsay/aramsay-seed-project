import 'reflect-metadata';
import { buildApp } from './startup/bootstrapper';

buildApp((err, app, config) => {
    if (err) {
        console.error(err);
    }

    app.listen(config.port, function() {
        console.log(`Server started on port ${config.port}`);
    });
});
