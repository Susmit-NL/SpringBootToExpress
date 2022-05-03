import express from 'express'
import 'reflect-metadata'
import { ProductController } from '../controller/ProductController'
import { AppDataSource } from '../config/dbConfig'

const router = express.Router()
const productController = new ProductController()

AppDataSource.initialize()
  .then(() => {
    router.get('/product/:id', (request, response) => productController.findById(request, response))
    router.post('/product', (request, response) => productController.create(request, response))
    router.get('/product', (request, response) => productController.getAllProduct(request, response))
    router.put('/product/:id', (request, response) => productController.update(request, response))
    router.delete('/product/:id', (request, response) => productController.delete(request, response))
  })
  .catch((error) => console.log(error))

export default router
