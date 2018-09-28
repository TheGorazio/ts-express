import { Router, Request, Response } from 'express';
import * as fetch from 'node-fetch';

const router: Router = Router();

const SSO_URL = 'https://sso-qa2.tcsbank.ru';
const AUTHORIZE = '/authorize?client_id=cashier';

router.get('/', async (req: Request, res: Response) => {
    try {
        const response = await fetch(SSO_URL + AUTHORIZE);

        res.status(200).json(response);
    } catch (e) {
        res.status(500).json({
            "status": "500"
        });
    }
});

export const IndexRoute: Router = router;