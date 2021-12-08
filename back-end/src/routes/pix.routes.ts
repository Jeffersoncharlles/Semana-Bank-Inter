import { Router } from "express";
import { userAuthenticated } from "../middlewares/userAuthenticated";
import { PixController } from "../resources/pix/pix.controller";



const pixRoutes = Router();
pixRoutes.use(userAuthenticated)//todas as rotas protegidas
const pixController = new PixController();

pixRoutes.post("/request", pixController.request)
pixRoutes.post("/pay", pixController.pay)
pixRoutes.get("/transactions", pixController.transactions)

export { pixRoutes }