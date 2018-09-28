import { Router, Request, Response } from 'express';
import { NextFunction } from 'connect';

export class IndexRoute {
    static create(router: Router) {
        router.get('/', (req: Request, res: Response, next: NextFunction) => {
            new IndexRoute().index(req, res, next);
        });
    }

    index(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({test: 'text index asdrute'});
    }
}
