import { Router } from "express";
import CategoryController from "../../../controller/products/category.js";
import authMiddleware from "../../../middleware/index.js";
const categoryRouter = Router();

categoryRouter.get("/category", authMiddleware,CategoryController.getAll);
categoryRouter.get("/category/:id",authMiddleware, CategoryController.getSingle);
categoryRouter.post("/category",authMiddleware, CategoryController.create);

export default categoryRouter;