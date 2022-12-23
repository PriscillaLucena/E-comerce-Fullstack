import { EstoqueDataBase } from "../Data/EstoqueDataBase"

const estoqueDB = new EstoqueDataBase();

export class EstoqueBusiness {
   
    async pegaEstoque(): Promise<any>{
        
        const result = await estoqueDB.pegaEstoque()
    }
}