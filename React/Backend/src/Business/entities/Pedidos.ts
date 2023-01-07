import { PedidoType } from "../../Data/model/PedidoType"

export class Pedidos {
    constructor(
        protected id: number,
        protected client_name: string,
        protected delivery_date: string,
        protected pedidos: PedidoType | {
            quantity: number,
            product_id: string,
            product_name: string
        }
    ) {}

    getId(): number {
        return this.id
    }

    getClientName(): string {
        return this.client_name
    }

    getDeliveryDate(): string {
        return this.delivery_date
    }

    getQuantity(): number {
        return this.pedidos.quantity
    }

    getProductId(): string {
        return this.pedidos.product_id
    }

    getProductName(): string {
        return this.pedidos.product_name
    }

    setId (id: number) {
        id = this.id
    }

    setClientName (name: string) {
        name = this.name
    }
};