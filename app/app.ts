import * as express from 'express';
import * as bodyParser from 'body-parser';
import { IndexRoute } from './routes';

export class App {
    app: express.Application;

    constructor() {
        this.app = express();
        this.setup();
    }

    private setup() {
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use('/', IndexRoute);
    }
}

export default new App().app;
