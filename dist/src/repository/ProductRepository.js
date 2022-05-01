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
exports.ProductRepository = void 0;
const app_1 = require("../app");
const Product_1 = require("../entity/Product");
class ProductRepository {
    constructor() {
        this.productRepository = app_1.AppDataSource.getRepository(Product_1.Product);
    }
    ;
    // async  getAllProducts(){
    //     const product = await this.productRepository.find();
    //     console.log("In repository of get all products method "+product);
    //     return product;
    // }
    // async create(product:Product){
    //     console.log("saving product in repo");
    //    return await this.productRepository.save(product);
    // }
    // async update(product:Product,id:string){
    //     const oldProduct=await this.findById(Number(id));
    //     if (oldProduct!=null && oldProduct!=undefined){
    //         oldProduct.price=product.price;
    //         oldProduct.description=product.description;
    //         oldProduct.inventory=product.inventory;
    //         oldProduct.name=product.name;
    //         console.log("updating product in repo");
    //         await this.productRepository.save(oldProduct);
    //     }
    //    return oldProduct;
    // }
    findById(key) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("finding product from database by id " + key);
            return yield this.productRepository.findOneBy({
                id: key,
            });
        });
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map