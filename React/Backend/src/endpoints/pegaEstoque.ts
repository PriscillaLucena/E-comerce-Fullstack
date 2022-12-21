import { EstoqueDataBase } from "../database/EstoqueDataBase"
import { Request, Response } from "express";


export const pegaEstoque = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        const estoqueDB = new EstoqueDataBase()
        const result = await estoqueDB.pegaEstoque()


        if (result.length < 1) {
            errorCode = 404
            throw new Error("Cadastre novos produtos!");
        }

        res.status(200).send({ estoque: result })
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};
