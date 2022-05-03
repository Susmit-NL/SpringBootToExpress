"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const ProductController_1 = require("../controller/ProductController");
const dbConfig_1 = require("../config/dbConfig");
const router = express_1.default.Router();
const productController = new ProductController_1.ProductController();
dbConfig_1.AppDataSource.initialize()
    .then(() => {
    router.get("/product/:id", (request, response) => productController.findById(request, response));
    router.post("/product", (request, response) => productController.create(request, response));
    router.get("/product", (request, response) => productController.getAllProduct(request, response));
    router.put("/product/:id", (request, response) => productController.update(request, response));
    router.delete("/product/:id", (request, response) => productController.delete(request, response));
})
    .catch((error) => console.log(error));
exports.default = router;
//# sourceMappingURL=Route.js.map