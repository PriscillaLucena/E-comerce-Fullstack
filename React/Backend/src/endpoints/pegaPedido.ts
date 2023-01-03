
// import { Request, Response } from "express"
// import { PedidoDataBase } from "../Data/PedidoDataBase"

// export const pegaPedido = async (req: Request, res: Response): Promise<any> => {
//     let errorCode = 400
//     try {

//         const pedidoDB = new PedidoDataBase()
//         const result = await pedidoDB.pegaPedidos()
        
//         if (result.length < 1) {
//             errorCode = 404
//             throw new Error("Ainda não existem pedidos!");
//         }

//         res.status(200).send({ result })

// } catch (error: any) {
//     console.log(error)
//     res.send(error.message || error.sqlMessage)
// }
// };

