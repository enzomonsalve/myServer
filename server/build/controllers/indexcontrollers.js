"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send({ text: 'Api is /api/producto' });
    }
}
const indexController = new IndexController();
exports.default = indexController;
