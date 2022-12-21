export class Estoque {
    constructor(
        protected id: number,
        protected name: string,
        protected price: number,
        protected qty_stock: number
    ) { }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getPrice(): number {
        return this.price
    }

    getQty(): number {
        return this.qty_stock
    }

};