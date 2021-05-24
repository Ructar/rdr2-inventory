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

    lockContainer() {
        this.locked = true
    }

    unlockContainer() {
        this.locked = false
    }

    addAttribute(attribute: data || {}) {
        this[attribute.name] = attribute
    }

    removeAttribute(attribute: string) {
        delete this[attribute]
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

on("inventory:requestInventory", (type: string, id: number, cb: function) => {
    switch(type) {
        case "Player":
            cb(PlayerInventories[source][id])
        case "Horse":
            cb(HorseInventories[source][id])
        case "Container":
            cb(Containers[id])
    }
})

on("inventory:destroyInventory", (type: string, id: number) => {
    switch(type) {
        case "Player":
            delete PlayerInventories[source]
        case "Horse":
            delete HorseInventories[source]
        case "Container":
            delete Containers[id]
    }
})

on("inventory:depositItem", (type: string, item_id: number, quantity: number, id?: number) => {
    // if ( Player Inventory Check ) {
    switch(type) {
        case "Player":
            PlayerInventories[source].depositItem(item_id, quantity)
        case "Horse":
            HorseInventories[source].depositItem(item_id, quantity)
        case "Container":
            Containers[id].depositItem(item_id, quantity)
    }
    // } else {
        // Anti Cheat
    //}
})

on("inventory:withdrawItem", (type: string, item_id: number, quantity: number, id?: number) => {
    // if ( Player Inventory Check ) {
    //     if ( Withdrawl Quantity Check ) {
                switch(type) {
                    case "Player":
                        PlayerInventories[source].withdrawItem(item_id, quantity)
                    case "Horse":
                        HorseInventories[source].withdrawItem(item_id, quantity)
                    case "Container":
                        Containers[id].withdrawItem(item_id, quantity)
                }
    //     }
    // } else {
    //     Anti Cheat
    // }
})