import * as express from 'express';
import * as bodyParser from 'body-parser';
import { IndexRoute } from './routes';

export class App {
    app: express.Application;

    constructor() {
        this.app = express();
        this.setupMiddlewares();
        this.setRoutes();
    }

    private setupMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private setRoutes() {
        const router: express.Router = express.Router();

        IndexRoute.create(router);

        this.app.use(router);
    }
}

export default new App().app;
