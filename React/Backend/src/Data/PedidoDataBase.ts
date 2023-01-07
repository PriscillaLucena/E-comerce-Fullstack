import { BaseDatabase } from "./BaseDatabase"
import { PedidoCompletoDTO } from "./model/PedidoType"

export class PedidoDataBase extends BaseDatabase {
    public static TABLE_NAME = "Ecommerce_pedidos"

    public async pegaPedidos(input: number): Promise<any> {
        try {

            const pedido = await this.getConnection().raw(`
            SELECT * FROM ${PedidoDataBase.TABLE_NAME}
            WHERE id = ${input}
            `)

            const pedidosModel = (pedido: any): PedidoCompletoDTO => ({
                id: pedido[0].id,
                client_name: pedido[0].client_name,
                delivery_date: pedido[0].delivery_date,
                pedidos: {
                    quantity: pedido[0].quantity,
                    product_id: pedido[0].product_id,
                    product_name: pedido[o].product_name
                }
            })

            return pedidosModel

        } catch (error) {
            if (error instanceof Error) {
                // throw new CustomError(400, error.message); fazer o erro!!
            }
        }



    };

    // public insertPedido: any = async (pedidos: Pedidos) => {
    //     await BaseDatabase.connection.raw(`
    //     INSERT INTO Pedidos 
    //         (id, client_name, delivery_date, quantity, product_id, product_name)
    //     VALUES 
    //         (${pedidos.getId()}, "${pedidos.getClientName()}", STR_TO_DATE ("${pedidos.getDeliveryDate()}", '%d/%m/%Y'),
    //         ${pedidos.getQuantity()}, "${pedidos.getProductId()}", "${pedidos.getProductName()}")
    //     `)
    // };

    // public infoEstoque: any = async (product_id: string) => {
    //     const response = await BaseDatabase.connection.raw(`
    //     SELECT qty_stock, name FROM Estoque
    //     WHERE id = ${product_id}
    //     `)

    //     return response

    // };

};



