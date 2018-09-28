"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fetch = require("node-fetch");
const router = express_1.Router();
const SSO_URL = 'https://sso-qa2.tcsbank.ru';
const AUTHORIZE = '/authorize?client_id=cashier';
router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const response = yield fetch(SSO_URL + AUTHORIZE);
        res.status(200).json(response);
    }
    catch (e) {
        res.status(500).json({
            "status": "500"
        });
    }
}));
exports.IndexRoute = router;
//# sourceMappingURL=index.route.js.map