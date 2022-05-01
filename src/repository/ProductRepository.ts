import { AppDataSource } from "../app";
import { Product } from "../entity/Product";

export class ProductRepository{
    constructor(){

    };
     productRepository = AppDataSource.getRepository(Product);
    async  getAllProducts(){
        
        const product = await this.productRepository.find();
        console.log("In repository of get all products method "+product);
        return product;
    }

    async create(product:Product){
        console.log("saving product in repo");
       return await this.productRepository.save(product);
    }
    async update(product:Product,id:string){
     
        const oldProduct=await this.findById(Number(id));
        
        if (oldProduct!=null && oldProduct!=undefined){
            oldProduct.price=product.price;
            oldProduct.description=product.description;
            oldProduct.inventory=product.inventory;
            oldProduct.name=product.name;
            console.log("updating product in repo");
            await this.productRepository.save(oldProduct);
        }
        
       return oldProduct;
    }

    async findById(key:number){
        console.log("finding product from database by id "+key);
        return await this.productRepository.findOneBy({
            id: key,
        });
      
    }
}
