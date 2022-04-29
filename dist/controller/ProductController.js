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
exports.getAllProduct = void 0;
const ProductRepository_1 = require("../repository/ProductRepository");
function getAllProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const product = yield (0, ProductRepository_1.getAllProducts)();
        console.log("In controller of get all product method" + product);
        res.send(product);
    });
}
exports.getAllProduct = getAllProduct;
//# sourceMappingURL=ProductController.js.map