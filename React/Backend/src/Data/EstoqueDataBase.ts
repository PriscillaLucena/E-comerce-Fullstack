import { BaseDatabase } from "./BaseDatabase"

export class EstoqueDataBase extends BaseDatabase {
    private static TABLE_NAME = "Ecommerce_estoque";

    public async pegaEstoque(): Promise<any> {
        try {
            const result = await this.getConnection().raw(`
            SELECT * FROM ${'Ecommerce_estoque'}
            `);

            return result[0]


        } catch (error) {
            if (error instanceof Error) {
                // throw new CustomError(400, error.message); fazer o erro!!
            }
        }
    }
};


