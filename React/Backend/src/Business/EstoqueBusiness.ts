import { EstoqueDataBase } from "../Data/EstoqueDataBase"

const estoqueDB = new EstoqueDataBase();

export class EstoqueBusiness {
    async pegaEstoque(): Promise<any> {
        try {

            const result = await estoqueDB.pegaEstoque()

            if (result.length < 1) {
                // errorCode = 404
                // throw new Error("Cadastre novos produtos!");
            }

            return result

        } catch (error) {
            if (error instanceof Error) {
                // throw new CustomError(400, error.message); fazer o erro!!
            }
        }
    }
};
