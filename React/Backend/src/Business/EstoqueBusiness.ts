import { EstoqueDataBase } from "../Data/EstoqueDataBase"
import { EstoqueInfo } from "../models/Estoque";

const estoqueDB = new EstoqueDataBase();

export class EstoqueBusiness {
    public async pegaEstoque(): Promise<any> {
        try {

            const queryResult: any = await estoqueDB.pegaEstoque()

            console.log("query business", queryResult)

            if (queryResult.length < 1) {
                // errorCode = 404
                // throw new Error("Cadastre novos produtos!");
            }

            const estoqueInfos: EstoqueInfo = {
                id: queryResult[0].id,
                name: queryResult[0].name,
                price: queryResult[0].price,
                qty_stock: queryResult[0].qty_stock
            };

            return estoqueInfos

        } catch (error) {
            if (error instanceof Error) {
                // throw new CustomError(400, error.message); fazer o erro!!
            }
        }
    }
};
