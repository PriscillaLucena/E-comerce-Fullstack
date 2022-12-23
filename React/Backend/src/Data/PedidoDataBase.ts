// import { Pedidos } from "../models/Pedidos";
// import { BaseDatabase } from "./BaseDatabase"


// export class PedidoDataBase extends BaseDatabase {
//     public static TABLE_NAME = "Pedidos"

//     public pegaPedidos: any = async () => {
//         const result = await BaseDatabase.connection.raw(`
//         SELECT * FROM Estoque
//         JOIN Pedidos ON Estoque.id = Pedidos.product_id
//         `)
            
//         return result[0]
//     };

//     public insertPedido: any = async (pedidos: Pedidos) => {
//         await BaseDatabase.connection.raw(`
//         INSERT INTO Pedidos 
//             (id, client_name, delivery_date, quantity, product_id, product_name)
//         VALUES 
//             (${pedidos.getId()}, "${pedidos.getClientName()}", STR_TO_DATE ("${pedidos.getDeliveryDate()}", '%d/%m/%Y'),
//             ${pedidos.getQuantity()}, "${pedidos.getProductId()}", "${pedidos.getProductName()}")
//         `)
//     };

//     public infoEstoque: any = async (product_id: string) => {
//         const response = await BaseDatabase.connection.raw(`
//         SELECT qty_stock, name FROM Estoque
//         WHERE id = ${product_id}
//         `)

//         return response

//     };
    
// };



