import { Router } from "express";


const userRouter = Router();

userRouter.post("/signin", (req, res) => {
    return res.send("Entrando com o usuario")
})
userRouter.post("/signup", (req, res) => {
    return res.send("Criando o usuario")
})


export { userRouter }