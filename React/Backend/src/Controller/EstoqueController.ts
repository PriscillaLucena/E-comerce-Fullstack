import { Request, Response } from "express";
import { EstoqueBusiness } from "../Business/EstoqueBusiness";

const estoqueBusiness = new EstoqueBusiness();

export class EstoqueController {

    public async pegaEstoque(req: Request, res: Response): Promise<any> {
        try {

            const result = await estoqueBusiness.pegaEstoque()

            res.status(200).send({ "estoque": result })

        } catch (error: any) {
            if (error instanceof Error) {
                // throw new CustomError(400, error.message);
            }
        };
    };
};
