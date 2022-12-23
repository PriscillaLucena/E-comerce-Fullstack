import { Request, Response } from "express"
import { Pedidos } from "../models/Pedidos"
import { PedidoDataBase } from "../Data/PedidoDataBase"
import { PedidoType } from "../types/PedidoType";

export const criaPedido = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        let { client_name, delivery_date, quantity }: any = req.body
        let product_id: any = req.params.product_id
        const id: any = Date.now()

            if(!client_name || !delivery_date){
            errorCode = 404
            throw new Error("Precisa passar nome do cliente e data de entrega e quantidade!");
            }

        const pedidoDB = new PedidoDataBase()
        const infoEstoque: any[] = await pedidoDB.infoEstoque(product_id)
        const quantidadeEstoque: any = infoEstoque[0].map((u: any)=> u.qty_stock)
        const product_name: any = infoEstoque[0].map((u: any)=> u.name)
        const pedidos: PedidoType = {quantity, product_id, product_name}

            if(quantity > quantidadeEstoque){
                errorCode = 404
                throw new Error("A quantidade de produto solicitada não tem em estoque.");
            } else {
                let newPedido = new Pedidos(id, client_name, delivery_date, pedidos)
                await pedidoDB.insertPedido(newPedido)
            }
   
        res.status(200).send(`pedido do cliente ${client_name} Criado!`)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};
