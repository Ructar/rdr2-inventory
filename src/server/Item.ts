class Item {
	private id: number
	private name: string
	private quantity: number
	private attributes: {[k: string]: any} = {}

    constructor(id: number, name: string, attributes: {}) {
        this.id = id;
        this.name = name;
        this.attributes = attributes;
    }

    setQuantity(quantity: number) {
        this.quantity = quantity;
    }

    addQuantity(quantity: number) {
        this.quantity = this.quantity + quantity;
    }

    removeQuantity(quantity: number) {
        this.quantity = this.quantity - quantity;
    }

    addAttribute(name: string, data: {}) {
        this.attributes[name] = data
    }

    getQuantity() {
        return this.quantity;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }
}

export { Item }