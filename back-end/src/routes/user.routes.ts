import { Router } from "express";
import { userAuthenticated } from "../middlewares/userAuthenticated";
import { UserController } from "../resources/user/user.controller";


const userRouter = Router();

const userController = new UserController()

userRouter.post("/signin", userController.signin)
userRouter.post("/signup", userController.signup)
userRouter.post("/me", userAuthenticated, userController.signup)


export { userRouter }