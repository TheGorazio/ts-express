"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
class App {
    constructor() {
        this.app = express();
        this.setup();
    }
    setup() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/', routes_1.IndexRoute);
    }
}
exports.App = App;
exports.default = new App().app;
//# sourceMappingURL=app.js.map