import "reflect-metadata";
import { DataSource} from "typeorm";
import express from "express";
import * as dotEnv from "dotenv";
import * as bodyParser from "body-parser";
import { Product } from "./entity/Product";
import router from "./routes/Route"


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
        app.use("/",router);
        // const productController=new ProductController();
        
        // app.get("/products",(request,response)=>productController.getAllProduct(request,response));

        // app.post("/product",(request,response)=>productController.create(request,response));

        // app.put("/product/:id",(request,response)=>productController.update(request,response));
        
        // app.get("/product/:id",(request,response)=>productController.findById(request,response));

        app.listen(8080,()=>{console.log("Server Running...")});  
        
    })
    .catch((error) => console.log(error))