import "reflect-metadata";
import { DataSource} from "typeorm";
import express from "express";
import * as dotEnv from "dotenv";
import * as bodyParser from "body-parser";
import { Product } from "./entity/Product";
import { getAllProduct } from "./controller/ProductController";


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

        
        app.get("/allProducts",(request,response)=>getAllProduct(request,response));



        app.listen(8080,()=>{console.log("Server Running...")});
        
    })
    .catch((error) => console.log(error))