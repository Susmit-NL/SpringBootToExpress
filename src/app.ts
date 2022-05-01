import "reflect-metadata";
import { DataSource} from "typeorm";
import express from "express";
import * as dotEnv from "dotenv";
import * as bodyParser from "body-parser";
import { Product } from "./entity/Product";
import { ProductController } from "./controller/ProductController";


const app=express();
app.use(bodyParser.json());
dotEnv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "ExpressTest",
    entities: [Product],
    synchronize: true,
    logging: false,
}
);


AppDataSource.initialize()
    .then(() => {

        const productController=new ProductController();

        app.get("/product/:id",(request,response)=>productController.findById(request,response));
        app.post("/product",(request,response)=>productController.create(request,response));
        app.get("/product",(request,response)=>productController.getAllProduct(request,response));
        app.put("/product/:id",(request,response)=>productController.update(request,response));
        app.delete("/product/:id",(request,response)=>productController.delete(request,response));

        app.listen(8082,()=>{console.log("Server Running in port 8082...")});  
        
    })
    .catch((error) => console.log(error))