import { Router } from "express";
import authController from "../../controller/auth/index.js";
import authValidator from "../validator/auth/index.js";
const authRouter = Router();

authRouter.post("/user/signUp", authValidator.signUp, authController.singUp);
authRouter.post("/user/signIn", authValidator.signIn,authController.singIn);

export default authRouter;
