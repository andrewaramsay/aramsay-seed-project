import { Get, Post } from 'aramsay-express-router';
import { Injectable } from 'aramsay-injector';
import { Request, Response, NextFunction } from 'express';

import { authenticate } from './middleware';
import { ThingsService } from '../business/things.service';

@Injectable()
export class ThingsController {
    constructor(private thingsService: ThingsService) {
    }

    @Get('/api/things', authenticate)
    getThings(req: Request, res: Response, next: NextFunction) {
        this.thingsService.getThings((err, things) => {
            if (err) {
                return next(err);
            }
            res.json(things);
        });
    }

    @Post('/api/things')
    postThings(req: Request, res: Response, next: NextFunction) {
        res.json({ action: 'posted things '});
    }

    @Post('/api/things/:id')
    postOtherThings(req: Request, res: Response, next: NextFunction) {
        res.json({ action: 'posted one thing', id: req.params['id'] });
    }
}
