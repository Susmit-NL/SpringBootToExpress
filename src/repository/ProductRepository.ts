import { AppDataSource } from "../app";
import { Product } from "../entity/Product";

export async function getAllProducts(){
    const productRepository = AppDataSource.getRepository(Product);
    const product = await productRepository.find();
    console.log("In repository of get all products method "+product);
    return product;
}