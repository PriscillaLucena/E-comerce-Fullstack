import { BaseDatabase } from "./BaseDatabase"

export class EstoqueDataBase extends BaseDatabase {
    public static TABLE_NAME = "Ecommerce_estoque"

    public async pegaEstoque(
        id: string,
        name: string,
        price: number,
        qty_stock: number
    ): Promise<void> {
        try {
            const response = await this.getConnection()
                .select('*')
            console.log(response[0])
            return response[0]


        } catch (error) {
            if (error instanceof Error) {
                // throw new CustomError(400, error.message); fazer o erro!!
            }
        }
    }
};

