import { Router } from "express";
import SalesController from "../../controller/sales/index.js";
import authMiddleware from "../../middleware/index.js";
const salesRouter = Router();

salesRouter.get("/sales", authMiddleware,SalesController.getAll);
salesRouter.get("/sales/:id", authMiddleware,SalesController.getSingle);
salesRouter.post("/sales", authMiddleware,SalesController.post);
salesRouter.delete("/sales/:id",authMiddleware, SalesController.delete);
// salesRouter.get("/sale/:productName", SalesController.getSingleProduct);
// salesRouter.delete("/sales/:id", SalesController.delete);

export default salesRouter;