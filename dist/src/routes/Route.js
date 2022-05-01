"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("../controller/ProductController");
const router = express_1.default.Router();
const productController = new ProductController_1.ProductController();
router.get("/product/:id", (request, response) => productController.findById(request, response));
// router.post("/product",(request,response)=>productController.create(request,response));
exports.default = router;
//# sourceMappingURL=Route.js.map