"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientesControllers_1 = __importDefault(require("../controllers/productosControllers"));
class IndexClientes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', clientesControllers_1.default.list);
        this.router.post('/', clientesControllers_1.default.create);
        this.router.put('/:id', clientesControllers_1.default.update);
        this.router.delete('/:id', clientesControllers_1.default.delete);
    }
}
const clientesRoutes = new IndexClientes();
exports.default = clientesRoutes.router;
