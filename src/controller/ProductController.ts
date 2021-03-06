
import { Request, Response } from 'express'
import { Product } from '../entity/Product'
import { ProductRepository } from '../repository/ProductRepository'
import { productSchema } from '../middleware/validationSchema'

export class ProductController {
  // creating object of repository
  a = new ProductRepository()

  /*
    @method:get
    returns all products from database
  */
  async getAllProduct (req: Request, res: Response) {
    const product = await this.a.getAllProducts()
    console.log('In controller of get all product method' + product)
    res.send(product)
  }

  /*
    @method:post
    @RequestBody:Product
    returns newly created product
  */
  async create (req: Request, res: Response) {
    console.log('saving product in controller')
    try {
      await productSchema.validateAsync(req.body)
      res.send(await this.a.create(new Product(req.body.name, req.body.price
        , req.body.inventory, req.body.description))).status(201)
    } catch (err) {
      res.status(400).send({ message: err }).send()
    }
  }

  /*
   @method:update
   @RequestParam:Id
   @RequestBody:Product
   returns updated product
 */
  async update (req: Request, res: Response) {
    console.log('updating product in controller')
    try {
      await productSchema.validateAsync(req.body)
      res.send(await this.a.update(new Product(req.body.name, req.body.price,
        req.body.inventory, req.body.description), req.params.id)).status(201)
    } catch (err) {
      res.status(400).send({ message: err }).send()
    }
  }

  /*
   @method:get
   @RequestParam:Id
   returns product for given Id
 */
  async findById (req: Request, res: Response) {
    console.log('finding By Id  in controller')

    res.send(await this.a.findById(Number(req.params.id)))
  }

  /*
  @method:delete
  @RequestParam:Id
  deletes the product for given Id
*/
  async delete (req: Request, res: Response) {
    console.log('deleting By Id  in controller')

    res.send(await this.a.delete(Number(req.params.id)))
  }
}
