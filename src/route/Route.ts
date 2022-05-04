import express from 'express'
import 'reflect-metadata'
import { ProductController } from '../controller/ProductController'
import { UserController } from '../controller/UserController'
import { AppDataSource } from '../config/dbConfig'
import authorization from '../middleware/auth'
import checkRoles from '../middleware/checkRole'

const router = express.Router()
const productController = new ProductController()
const userController = new UserController()

AppDataSource.initialize()
  .then(() => {
    router.get('/product/:id', authorization, checkRoles(['USER', 'ADMIN']), (request, response) => productController
      .findById(request, response))

    router.post('/product', authorization, checkRoles(['ADMIN']), (request, response) => productController
      .create(request, response))

    router.get('/product', authorization, checkRoles(['USER', 'ADMIN']), (request, response) => productController
      .getAllProduct(request, response))

    router.put('/product/:id', authorization, checkRoles(['ADMIN']), (request, response) => productController
      .update(request, response))

    router.delete('/product/:id', authorization, checkRoles(['ADMIN']), (request, response) => productController
      .delete(request, response))

    router.post('/user/login', (request, response) => userController
      .login(request, response))
  })
  .catch((error) => console.log(error))

export default router
