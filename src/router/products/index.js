import { Router } from "express";
import ProductController from "../../controller/products/index.js";
import authMiddleware from "../../middleware/index.js";
const productsRouter = Router();

productsRouter.get("/products",authMiddleware, ProductController.getAll);
productsRouter.get("/product/:id",authMiddleware, ProductController.getSingle);
productsRouter.post("/product", authMiddleware,ProductController.post);

export default productsRouter;