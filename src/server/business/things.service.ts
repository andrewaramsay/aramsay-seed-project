import { Injectable } from 'aramsay-injector';

@Injectable({ singleton: true })
export class ThingsService {
    getThings(callback: (err: Error, things: any) => void) {
        callback(null, [{ foo: 'bar'}, { foo: 'bas' }]);
    }
}
