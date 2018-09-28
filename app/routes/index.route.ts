import { Router, Request, Response } from 'express';
import * as request from 'request-promise-native';

const router: Router = Router();
const SSO_URL = 'https://sso-qa2.tcsbank.ru/authorize?client_id=cashier';

const request_options = {
    host: SSO_URL,
    headers: {
        'user-agent': 'Mozilla/5.0'
    }
};

router.get('/', async (req: Request, res: Response) => {
    const response = await request(request_options);
    // res.status(500).json({response, "status": "299"});
    res.status(200).json({'test': 'test'});
});

export const IndexRoute: Router = router;