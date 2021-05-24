/* class Item {
	private id: number
	private name: string
	private quantity: number = 0
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

let Inventory: {[k: string]: Container} = {}

class Container {
	private id: number;
	private characters: number[];
	private items: Item[];
    private attributes: {[k:string]: any} = {}

    constructor(id: number, characters: number[], items: Item[]) {
        this.id = id;
        this.characters = characters;
        this.items = items;
    }

    addCharacter(character_id: number) {
        this.characters.push(character_id)
    }

    removeCharacter(character_id: number) {
        this.characters.forEach((value, index) => {
            if ( value === character_id ) {
                this.characters.splice(index, 1)
            }
        })
    }

	depositItem(item: Item, quantity: number) {
		for(var index in this.items) {
            if ( this.items[index].getId() === item.getId() ) {
                this.items[index].addQuantity(quantity)
                return;
            }
        }
        item.setQuantity(quantity);
		this.items.push(item)
	}

	withdrawItem(itemID: number, quantity: number) {
        for(var index in this.items) {
            if ( this.items[index].getId() === itemID ) {
                this.items[index].removeQuantity(quantity)

                if ( this.items[index].getQuantity() <= 0 ) {
                    this.items.splice(parseInt(index), 1)
                }
            }
        }
	}

    findItem(itemID: number) {
        for(var index in this.items) {
           if ( this.items[index].getId() === itemID) {
               return this.items[index]
           } 
        }
        return
    }

    addAttribute(attribute: string, value: any) {
        if ( this.attributes[attribute] === null) {

        }
        this.attributes[attribute] = value
    }

    removeAttribute(attribute: string) {
        delete this.attributes[attribute]
    }

    setAttribute(attribute: string, value: any) {
        if ( this.attributes[attribute] != null) {
            this.attributes[attribute] = value
        }
    }
}


Inventory["1"] = new Container(1, [], [])
Inventory["1"].addCharacter(1)
Inventory["1"].depositItem(new Item(1, "banana", {}), 10)
console.log(Inventory["1"])
Inventory["1"].withdrawItem(1, 9)
console.log(Inventory["1"]) */