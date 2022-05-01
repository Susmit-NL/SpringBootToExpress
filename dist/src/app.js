"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const dotEnv = __importStar(require("dotenv"));
const bodyParser = __importStar(require("body-parser"));
const Product_1 = require("./entity/Product");
const ProductController_1 = require("./controller/ProductController");
const app = (0, express_1.default)();
app.use(bodyParser.json());
dotEnv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "ExpressTest",
    entities: [Product_1.Product],
    synchronize: true,
    logging: false,
});
exports.AppDataSource.initialize()
    .then(() => {
    const productController = new ProductController_1.ProductController();
    app.get("/product/:id", (request, response) => productController.findById(request, response));
    app.post("/product", (request, response) => productController.create(request, response));
    app.get("/product", (request, response) => productController.getAllProduct(request, response));
    app.put("/product/:id", (request, response) => productController.update(request, response));
    app.delete("/product/:id", (request, response) => productController.delete(request, response));
    app.listen(8082, () => { console.log("Server Running in port 8082..."); });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=app.js.map