export interface PedidoCompletoDTO {
    id: number,
    client_name: string,
    delivery_date: string,
    pedidos: PedidoDTO | {
        quantity: number,
        product_id: string,
        product_name: string
    }
};

export interface PedidoDTO {
    quantity: number,
    product_id: string,
    product_name: string
}