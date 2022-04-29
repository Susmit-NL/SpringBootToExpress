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
exports.getAllProducts = void 0;
const app_1 = require("../app");
const Product_1 = require("../entity/Product");
function getAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const productRepository = app_1.AppDataSource.getRepository(Product_1.Product);
        const product = yield productRepository.find();
        console.log("In repository of get all products method " + product);
        return product;
    });
}
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=ProductRepository.js.map