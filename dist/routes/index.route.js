"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexRoute {
    static create(router) {
        router.get('/', (req, res, next) => {
            new IndexRoute().index(req, res, next);
        });
    }
    index(req, res, next) {
        res.status(200).json({ test: 'text index asdrute' });
    }
}
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=index.route.js.map