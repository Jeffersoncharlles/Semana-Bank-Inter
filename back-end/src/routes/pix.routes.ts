import { Router } from "express";
import { userAuthenticated } from "../middlewares/userAuthenticated";



const pixRoutes = Router();
pixRoutes.use(userAuthenticated)//todas as rotas protegidas

// pixRoutes.post("/signin", userController.signin)
// pixRoutes.post("/signup", userController.signup)
// pixRoutes.get("/signup", userController.signup)

export { pixRoutes }