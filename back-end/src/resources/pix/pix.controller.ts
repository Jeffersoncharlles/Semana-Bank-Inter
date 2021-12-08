import { Request, Response } from "express";
import { PixService } from "./pix.service";



class PixController {

    async request(req: Request, res: Response) {
        const pixService = new PixService();
        const { value } = req.body;
        const user = req.user;

        const requestKey = await pixService.request(value, user);

        return res.status(200).json({ copyPasteKey: requestKey })
    }

    async pay(req: Request, res: Response) {
        const pixService = new PixService();

        const { key } = req.params;
        const user = req.user;

        const payment = await pixService.pay(key, user);

        return res.status(201).json({ payment })

    }

    async transactions(req: Request, res: Response) {
        const pixService = new PixService();

        const transactions = await pixService.transactions(req.user);

        return res.status(201).json({ transactions })
    }

}

export { PixController }