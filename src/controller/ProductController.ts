
import {Request, Response} from "express";
import { getAllProducts } from "../repository/ProductRepository";


export async function getAllProduct(req:Request,res:Response){
    const product= await getAllProducts();
    console.log("In controller of get all product method"+product);
    res.send(product);
}