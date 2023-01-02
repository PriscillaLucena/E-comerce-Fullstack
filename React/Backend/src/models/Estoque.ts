export class Estoque {
    constructor(
        protected id: string,
        protected name: string,
        protected price: number,
        protected qty_stock: number
    ) { }

    getId(): string {
        return this.id
    };

    getName(): string {
        return this.name
    };

    getPrice(): number {
        return this.price
    };

    getQty(): number {
        return this.qty_stock
    };

    setId(id: string) {
        this.id = id
    };

    setPrice(price: number) {
        this.price = price
    };

    setQty(qty_stock: number) {
        this.qty_stock = qty_stock
    };
};

export interface EstoqueInfo {
    id: string,
    name: string,
    price: number,
    qty_stock: number
}