import { PedidoDataBase } from "../Data/PedidoDataBase";

const pedidoDB = new PedidoDataBase;

export class PedidoBusiness {

    public async pegaPedido(input: any): Promise<any> {
        let errorCode = 404
        try {

            const queryResult: any = await pedidoDB.pegaPedidos(input);

            if (queryResult.length < 1) {
                errorCode = 404
                throw new Error("Ainda não existem pedidos!");
            }

            //         

        } catch (error) {
            if (error instanceof Error) {
                // throw new CustomError(400, error.message); fazer o erro!!
            }
        }
    }
};