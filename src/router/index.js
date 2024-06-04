import salesRouter from "./sales/index.js";
import productsRouter from "./products/index.js";
import categoryRouter from "./products/category/index.js";
import authRouter from "./auth/index.js";

const allRouter = [salesRouter, productsRouter, categoryRouter, authRouter];

export default allRouter;
