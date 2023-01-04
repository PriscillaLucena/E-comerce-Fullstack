import { BaseDatabase } from "./BaseDatabase"

export class EstoqueDataBase extends BaseDatabase {
    
    private static TABLE_NAME = "Ecommerce_estoque";

    public async pegaEstoque(): Promise<any> {
        try {
            
            const result = await this.getConnection()
           .select('*') 
           .into(EstoqueDataBase.TABLE_NAME)

           console.log(result, "result db")

            return result

        } catch (error) {
            if (error instanceof Error) {
                // throw new CustomError(400, error.message); fazer o erro!!
            }
        }
    }
};


