"use strict";
exports.__esModule = true;
var express_1 = require("express");
var ProductController_1 = require("../controller/ProductController");
var router = express_1["default"].Router();
var productController = new ProductController_1.ProductController();
router.get("/product/:id", function (request, response) { return productController.findById(request, response); });
router.post("/product", function (request, response) { return productController.create(request, response); });
router.get("/product", function (request, response) { return productController.getAllProduct(request, response); });
router.put("/product/:id", function (request, response) { return productController.update(request, response); });
exports["default"] = router;