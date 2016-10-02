import { Injectable } from 'aramsay-injector';
import { join, normalize } from 'path';

export type Environment = 'development' | 'production';

@Injectable({ singleton: true })
export class Config {
    get port(): number {
        return 8080;
    }

    get environment(): Environment {
        return process.env.NODE_ENV === 'production' ? 'production' : 'development';
    }

    get serverPath(): string {
        return normalize(join(__dirname, '../../..'));
    }

    get clientPath(): string {
        return join(this.serverPath, '../client');
    }
}