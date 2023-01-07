import { Request, Response } from "express";
import { PedidoBusiness } from "../Business/PedidoBusiness";

const pedidoBusiness = new PedidoBusiness();

export class PedidoController {

    public async pegaPedidos(req: Request, res: Response): Promise<any> {
        try {

            const id: number = req.body.id

            const result = await pedidoBusiness.pegaPedido(id);

            res.status(200).send({ result })

        } catch (error) {
            if (error instanceof Error) {
                // throw new CustomError(400, error.message); fazer o erro!!
            }
        }
    }
}