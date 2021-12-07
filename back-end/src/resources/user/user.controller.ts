import { Request, Response } from "express";


class UserController {
    async signin(req: Request, res: Response) {
        return res.send("Entrando com o usuario")
    }
    async signup(req: Request, res: Response) {
        return res.send("criando com o usuario")
    }

}

export { UserController }