import { Items, ItemObjects } from "../shared/index"
import { Item } from "./Item"

let Inventory: []

class Container {
	private id: number;
    private type: string;
	private character: object;
	private items: Item[];
    private attributes: {};

    constructor(id: number, character: object, items: Item[]) {
        this.id = id;
        this.character = character;
        this.items = items;
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
    }
}

onNet("core:createInventory", () => {
	Inventory[source] = new Container(1, {}, [])
})

onNet("inventory:addItem", (item: Item, quantity) => {
    Inventory[source].depositItem(item, quantity)
})

onNet("inventory:removeItem", (id, quantity) => {
    Inventory[source].withdrawItem(id, quantity)
})

onNet("inventory:setQuantity", (id, quantity) => {
    if ( quantity > 0 ) {
        Inventory[source].findItem(id).addQuantity(quantity)
    } else {
        Inventory[source].findItem(id).removeQuantity(quantity)
    }
})