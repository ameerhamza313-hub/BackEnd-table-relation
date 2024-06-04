import sequelize from "./config.js";
import ProductModel from "../models/products/index.js";
import CategoryModel from "../models/products/category.js";
import SalesModel from "../models/sales/sales.js";
import SaleProductModel from "../models/sales/saleProducts.js";
import userModel from "../models/user/index.js";
const syncDB = async () => {
  await sequelize.sync({ alter: true, force: false });
  await userModel.sync({ alter: true, force: false });
  await ProductModel.sync({ alter: true, force: false });
  await CategoryModel.sync({ alter: true, force: false });

  await SalesModel.sync({ alter: true, force: false });
  await SaleProductModel.sync({ alter: true, force: false });

  console.log(
    "The table for the student and teacher model was just (re)created!"
  );
};
export default syncDB;
