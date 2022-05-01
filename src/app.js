"use strict";
exports.__esModule = true;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var express_1 = require("express");
var dotEnv = require("dotenv");
var bodyParser = require("body-parser");
var Product_1 = require("./entity/Product");
var Route_1 = require("./routes/Route");
var app = express_1["default"]();
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
    logging: false
});
exports.AppDataSource.initialize()
    .then(function () {
    app.use("/", Route_1["default"]);
    // app.listen(8082,()=>{console.log("Server Running in port 8082...")});  
})["catch"](function (error) { return console.log(error); });
