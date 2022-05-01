"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const Product_1 = require("../entity/Product");
const ProductRepository_1 = require("../repository/ProductRepository");
class ProductController {
    constructor() {
        this.a = new ProductRepository_1.ProductRepository();
    }
    ;
    getAllProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.a.getAllProducts();
            console.log("In controller of get all product method" + product);
            res.send(product);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("saving product in controller");
            res.send(yield this.a.create(new Product_1.Product(req.body.name, req.body.price, req.body.inventory, req.body.description)));
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("updating product in controller");
            res.send(yield this.a.update(new Product_1.Product(req.body.name, req.body.price, req.body.inventory, req.body.description), req.params.id));
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("finding By Id  in controller");
            res.send(yield this.a.findById(Number(req.params.id)));
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map