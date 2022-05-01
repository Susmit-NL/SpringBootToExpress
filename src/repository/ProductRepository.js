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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var app_1 = require("../app");
var Product_1 = require("../entity/Product");
var ProductRepository = /** @class */ (function () {
    function ProductRepository() {
        this.productRepository = app_1.AppDataSource.getRepository(Product_1.Product);
    }
    ;
    ProductRepository.prototype.getAllProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.productRepository.find()];
                    case 1:
                        product = _a.sent();
                        console.log("In repository of get all products method " + product);
                        return [2 /*return*/, product];
                }
            });
        });
    };
    ProductRepository.prototype.create = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("saving product in repo");
                        return [4 /*yield*/, this.productRepository.save(product)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductRepository.prototype.update = function (product, id) {
        return __awaiter(this, void 0, void 0, function () {
            var oldProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findById(Number(id))];
                    case 1:
                        oldProduct = _a.sent();
                        if (!(oldProduct != null && oldProduct != undefined)) return [3 /*break*/, 3];
                        oldProduct.price = product.price;
                        oldProduct.description = product.description;
                        oldProduct.inventory = product.inventory;
                        oldProduct.name = product.name;
                        console.log("updating product in repo");
                        return [4 /*yield*/, this.productRepository.save(oldProduct)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, oldProduct];
                }
            });
        });
    };
    ProductRepository.prototype.findById = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("finding product from database by id " + key);
                        return [4 /*yield*/, this.productRepository.findOneBy({
                                id: key
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ProductRepository;
}());
exports.ProductRepository = ProductRepository;
