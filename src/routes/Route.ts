import express from "express";
import { ProductController } from "../controller/ProductController";

const router=express.Router();
const productController=new ProductController();

router.get("/product/:id",(request,response)=>productController.findById(request,response));
router.post("/product",(request,response)=>productController.create(request,response));

export default router;