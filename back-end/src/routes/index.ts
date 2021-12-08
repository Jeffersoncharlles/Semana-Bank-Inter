import { Router } from "express";
import { pixRoutes } from "./pix.routes";
import { userRouter } from "./user.routes";


const routes = Router();

routes.use('/user', userRouter)
routes.use('/pix', pixRoutes)

export { routes }