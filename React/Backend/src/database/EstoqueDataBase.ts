import { BaseDatabase } from "./BaseDatabase"

export class EstoqueDataBase extends BaseDatabase {
    public static TABLE_NAME = "Estoque"

    public pegaEstoque: any = async () => {
        const response = await BaseDatabase.connection('Estoque')
            .select('*')

        return response
    };
};

