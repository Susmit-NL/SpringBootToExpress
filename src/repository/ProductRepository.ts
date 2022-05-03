import { AppDataSource } from '../config/dbConfig'
import { Product } from '../entity/Product'

export class ProductRepository {
// creating repository of Product
  productRepository = AppDataSource.getRepository(Product)

  // get  all the products from database
  async getAllProducts () {
    const product = await this.productRepository.find()
    console.log('In repository of get all products method ' + product)
    return product
  }

  // create new product in database
  async create (product:Product) {
    console.log('saving product in repo')
    return await this.productRepository.save(product)
  }

  // update the product
  async update (product:Product, id:string) {
    const oldProduct = await this.findById(Number(id))
    if (oldProduct != null && oldProduct !== undefined) {
      oldProduct.price = product.price
      oldProduct.description = product.description
      oldProduct.inventory = product.inventory
      oldProduct.name = product.name
      console.log('updating product in repo')
      await this.productRepository.save(oldProduct)
    }
    return oldProduct
  }

  // find by id of the product
  async findById (key:number) {
    console.log('finding product from database by id ' + key)
    return await this.productRepository.findOneBy({ id: key })
  }

  // delete by id from database
  async delete (key:number) {
    console.log('deleting product from database by id ' + key)
    return await this.productRepository.delete({ id: key })
  }
}
