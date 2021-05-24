// import { Items } from "../shared/index"
import { Item, Items, IItemList } from "./Item"

let PlayerInventories = []
let HorseInventories = []
let Containers = []

class Container {
    private id: number;
    private items: IItemList;
    [extra: string] : {};

    constructor(id: number, items: IItemList) {
        this.id = id;
        this.items = items;
    }

    depositItem(id: number, quantity: number) {
        if ( id === this.items[id].getId() ) { 
            this.items[id].addQuantity(quantity)
        } else {
            // Anti-Cheat
        }
    }

    withdrawItem(id: number, quantity: number) {
        if ( id === this.items[id].getId() ) { 
            if ( this.items[id].getQuantity() >= quantity ) {
                this.items[id].removeQuantity(quantity)
            }
        } else {
            // Anti-Cheat
        }
    }
}

on("inventory:createInventory", (type: string, data: {"id": any, "items": any}) => {
    switch(type) {
        case "Player":
            PlayerInventories[source] = new Container(data.id, data.items)
        case "Horse":
            HorseInventories[source] = new Container(data.id, data.items)
        case "Container":
            Containers[source] = new Container(data.id, data.items)
    }
})

