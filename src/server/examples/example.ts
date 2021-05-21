/* class Item {
	private id: number
	private name: string
	private quantity: number
	private attributes: {[k: string]: any} = {}

    constructor(id: number, name: string, quantity: number, attributes: {}) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
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

class BankAccount {
	private id: number;
	private character: object;
	private balance: number;
	private items: Item[];

    constructor(id: number, character: object, balance: number, items: Item[]) {
        this.id = id;
        this.character = character;
        this.balance = balance;
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
                let itemName = this.items[index].getName()
                let difference = this.items[index].getQuantity() - quantity
                let newQuantity = quantity + difference;
                this.items[index].removeQuantity(quantity)

                if ( this.items[index].getQuantity() <= 0 ) {
                    this.items.splice(parseInt(index), 1)
                }
                console.log("Removed " + newQuantity + " " + itemName + "(s)!")
            }
        }
	}

	depositMoney(deposit: number) {
		this.balance = this.balance + deposit;
	}

	withdrawMoney(withdrawl: number) {
		this.balance = this.balance - withdrawl;
	}
}

const Inventory = [];
Inventory.push(new Item(1, "Gold Bar", 2, {}))
Inventory.push(new Item(2, "Jewlery", 6, {}))
const Account = new BankAccount(1, {}, 100000, Inventory)
console.log(Account)
Account.withdrawItem(1, 20)
Account.withdrawItem(2, 1000)
console.log(Account) */