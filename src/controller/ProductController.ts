
import {Request, Response} from "express";
import { Product } from "../entity/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductController{
   
    constructor(){

    };
   a=new ProductRepository();

     async  getAllProduct(req:Request,res:Response){
        const product= await  this.a.getAllProducts();
        console.log("In controller of get all product method"+product);
        res.send(product);
    }


    async create(req:Request,res:Response){
    console.log("saving product in controller");
        
      res.send(await this.a.create(new Product(req.body.name,req.body.price,req.body.inventory,req.body.description)));
    }

    async update(req:Request,res:Response){
        console.log("updating product in controller");
            
          res.send(await this.a.update(new Product(req.body.name,req.body.price,req.body.inventory,req.body.description),req.params.id));
        }

    async findById(req:Request,res:Response){
        console.log("finding By Id  in controller");
            
          res.send(await this.a.findById(Number(req.params.id)));
        }
}



