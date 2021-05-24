class Item {
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

    addAttribute(attribute: string, value: any) {
        if ( this.attributes[attribute] === null) {

        }
        this.attributes[attribute] = value
    }

    removeAttribute(attribute) {
        delete this.attributes[attribute]
    }

    getAttributes() {
        return this.attributes
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

let Config: [
	{id: 0, "name": "Lasso", "attributes": {"description": "", "use": "weapon"}},
	{id: 1, "name": "Fishing Rod", "attributes": {"description": "", "use": "weapon"}},
	{id: 2, "name": "Electric Lantern", "attributes": {"description": "", "use": "weapon"}},
	{id: 3, "name": "Old Lantern", "attributes": {"description": "", "use": "weapon"}},
	{id: 4, "name": "Camera", "attributes": {"description": "", "use": "weapon"}},
	{id: 5, "name": "Ingredients Satchel", "attributes": {"description": ""}},
	{id: 6, "name": "Materials Satchel", "attributes": {"description": ""}},
	{id: 7, "name": "Valuables Satchel", "attributes": {"description": ""}},
	{id: 8, "name": "Tonics Satchel", "attributes": {"description": ""}},
	{id: 9, "name": "Kit Satchel", "attributes": {"description": ""}},
	{id: 10, "name": "Provisions Satchel", "attributes": {"description": ""}},
	{id: 11, "name": "Alaskan Ginseng", "attributes": {"description": ""}},
	{id: 12, "name": "American Ginseng", "attributes": {"description": ""}},
	{id: 13, "name": "Bay Bolete", "attributes": {"description": ""}},
	{id: 14, "name": "Blackberry", "attributes": {"description": ""}},
	{id: 15, "name": "Blackcurrant", "attributes": {"description": ""}},
	{id: 16, "name": "Burdock Root", "attributes": {"description": ""}},
	{id: 17, "name": "Chanterelles", "attributes": {"description": ""}},
	{id: 18, "name": "Common Bulrush", "attributes": {"description": ""}},
	{id: 19, "name": "Creeping Thyme", "attributes": {"description": ""}},
	{id: 20, "name": "Desert Sage", "attributes": {"description": ""}},
	{id: 21, "name": "English Mace", "attributes": {"description": ""}},
	{id: 22, "name": "Evergreen Huckleberry", "attributes": {"description": ""}},
	{id: 23, "name": "Golden Currant", "attributes": {"description": ""}},
	{id: 24, "name": "Hummingbird Sage", "attributes": {"description": ""}},
	{id: 25, "name": "Indian Tobacco", "attributes": {"description": ""}},
	{id: 26, "name": "Milkweed", "attributes": {"description": ""}},
	{id: 27, "name": "Oleander Sage", "attributes": {"description": ""}},
	{id: 28, "name": "Oregano", "attributes": {"description": ""}},
	{id: 29, "name": "Parasol Mushroom", "attributes": {"description": ""}},
	{id: 30, "name": "Prairie Poppy", "attributes": {"description": ""}},
	{id: 31, "name": "Ram’s Head", "attributes": {"description": ""}},
	{id: 32, "name": "Red Raspberry", "attributes": {"description": ""}},
	{id: 33, "name": "Red Sage", "attributes": {"description": ""}},
	{id: 34, "name": "Vanilla Flower", "attributes": {"description": ""}},
	{id: 35, "name": "Violet Snowdrops", "attributes": {"description": ""}},
	{id: 36, "name": "Wild Carrot", "attributes": {"description": ""}},
	{id: 37, "name": "Wild Feverfew", "attributes": {"description": ""}},
	{id: 38, "name": "Wild Mint", "attributes": {"description": ""}},
	{id: 39, "name": "Wintergreen Berry", "attributes": {"description": ""}},
	{id: 40, "name": "Yarrow", "attributes": {"description": ""}},
	{id: 41, "name": "Acuna’s Star Orchid", "attributes": {"description": ""}},
	{id: 42, "name": "Cigar Orchid", "attributes": {"description": ""}},
	{id: 43, "name": "Clamshell Orchid", "attributes": {"description": ""}},
	{id: 44, "name": "Dragon’s Mouth Orchid", "attributes": {"description": ""}},
	{id: 45, "name": "Ghost Orchid", "attributes": {"description": ""}},
	{id: 46, "name": "Lady of the Night Orchid", "attributes": {"description": ""}},
	{id: 47, "name": "Lady Slipper Orchid", "attributes": {"description": ""}},
	{id: 48, "name": "Moccasin Flower Orchid", "attributes": {"description": ""}},
	{id: 49, "name": "Night Scented Orchid", "attributes": {"description": ""}},
	{id: 50, "name": "Queen’s Orchid", "attributes": {"description": ""}},
	{id: 51, "name": "Rat Tail Orchid", "attributes": {"description": ""}},
	{id: 52, "name": "Sparrow’s Egg Orchid", "attributes": {"description": ""}},
	{id: 53, "name": "Spider Orchid", "attributes": {"description": ""}},
	{id: 54, "name": "Cattleman Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 55, "name": "Granger’s Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 56, "name": "Flaco’s Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 57, "name": "John’s Cattleman Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 58, "name": "Double - Action Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 59, "name": "Algernon’s Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 60, "name": "Micah’s Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 61, "name": "Schofield Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 62, "name": "Calloway’s Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 63, "name": "Otis Miller’s Revolver", "attributes": {"description": "", "use": "weapon"}},
	{id: 64, "name": "Volcanic Pistol", "attributes": {"description": "", "use": "weapon"}},
	{id: 65, "name": "Semi - Automatic Pistol", "attributes": {"description": "", "use": "weapon"}},
	{id: 66, "name": "Mauser Pistol", "attributes": {"description": "", "use": "weapon"}},
	{id: 67, "name": "Midnight’s Pistol", "attributes": {"description": ""}, "use": "weapon"},
	{id: 68, "name": "Carbine Repeater", "attributes": {"description": "", "use": "weapon"}},
	{id: 69, "name": "Lancaster Repeater", "attributes": {"description": "", "use": "weapon"}},
	{id: 70, "name": "Litchfield Repeater", "attributes": {"description": "", "use": "weapon"}},
	{id: 71, "name": "Varmint Rifle", "attributes": {"description": "", "use": "weapon"}},
	{id: 72, "name": "Springfield Rifle", "attributes": {"description": "", "use": "weapon"}},
	{id: 73, "name": "Bolt Action Rifle", "attributes": {"description": "", "use": "weapon"}},
	{id: 74, "name": "Rolling Block Rifle", "attributes": {"description": "", "use": "weapon"}},
	{id: 75, "name": "Rare Rolling Block Rifle", "attributes": {"description": "", "use": "weapon"}},
	{id: 76, "name": "Carcano Rifle", "attributes": {"description": "", "use": "weapon"}},
	{id: 77, "name": "Sawed - Off Shotgun", "attributes": {"description": "", "use": "weapon"}},
	{id: 78, "name": "Double - Barreled Shotgun", "attributes": {"description": "", "use": "weapon"}},
	{id: 79, "name": "Rare Shotgun", "attributes": {"description": "", "use": "weapon"}},
	{id: 80, "name": "Pump - Action Shotgun", "attributes": {"description": "", "use": "weapon"}},
	{id: 81, "name": "Semi - Auto Shotgun", "attributes": {"description": "", "use": "weapon"}},
	{id: 82, "name": "Repeating Shotgun", "attributes": {"description": "", "use": "weapon"}},
	{id: 83, "name": "Bow", "attributes": {"description": "", "use": "weapon"}},
	{id: 84, "name": "Fire Bottle", "attributes": {"description": "", "use": "weapon"}},
	{id: 85, "name": "Volatile Fire Bottle", "attributes": {"description": "", "use": "weapon"}},
	{id: 86, "name": "Dynamite", "attributes": {"description": "", "use": "weapon"}},
	{id: 87, "name": "Volatile Dynamite", "attributes": {"description": "", "use": "weapon"}},
	{id: 88, "name": "Throwing Knife", "attributes": {"description": "", "use": "weapon"}},
	{id: 89, "name": "Improved Throwing Knife", "attributes": {"description": "", "use": "weapon"}},
	{id: 90, "name": "Poison Throwing Knife", "attributes": {"description": "", "use": "weapon"}},
	{id: 91, "name": "Tomahawk", "attributes": {"description": "", "use": "weapon"}},
	{id: 92, "name": "Improved Tomahawk", "attributes": {"description": "", "use": "weapon"}},
	{id: 93, "name": "Homing Tomahawk", "attributes": {"description": "", "use": "weapon"}},
	{id: 94, "name": "Ancient Tomahawk", "attributes": {"description": "", "use": "weapon"}},
	{id: 95, "name": "Cleaver", "attributes": {"description": "", "use": "weapon"}},
	{id: 96, "name": "Machete", "attributes": {"description": "", "use": "weapon"}},
	{id: 97, "name": "Broken Pirate Sword", "attributes": {"description": "", "use": "weapon"}},
	{id: 98, "name": "Hunting Knife", "attributes": {"description": "", "use": "weapon"}},
	{id: 99, "name": "Antler Knife", "attributes": {"description": "", "use": "weapon"}},
	{id: 100, "name": "Civil War Knife", "attributes": {"description": "", "use": "weapon"}},
	{id: 101, "name": "Jawbone Knife", "attributes": {"description": "", "use": "weapon"}},
	{id: 102, "name": "Wide - Blade Knife", "attributes": {"description": "", "use": "weapon"}},
	{id: 103, "name": "Ornate Dagger", "attributes": {"description": "", "use": "weapon"}},
	{id: 104, "name": "Hatchet", "attributes": {"description": "", "use": "weapon"}},
	{id: 105, "name": "Hewing Hatchet", "attributes": {"description": "", "use": "weapon"}},
	{id: 106, "name": "Stone Hatchet", "attributes": {"description": "", "use": "weapon"}},
	{id: 107, "name": "Viking Hatchet", "attributes": {"description": "", "use": "weapon"}},
	{id: 108, "name": "Hunter Hatchet", "attributes": {"description": "", "use": "weapon"}},
	{id: 109, "name": "Rusted Hunter Hatchet", "attributes": {"description": "", "use": "weapon"}},
	{id: 110, "name": "Double Bit Hatchet", "attributes": {"description": "", "use": "weapon"}},
	{id: 111, "name": "Rusted Double Bit Hatchet", "attributes": {"description": "", "use": "weapon"}},
	{id: 112, "name": "Assorted Biscuits", "attributes": {"description": "Slightly increase Health Core", "use": "food"}},
	{id: 113, "name": "Assorted Salted Offal", "attributes": {"description": "Slightly increases Health and Dead Eye Cores", "use": "food"}},
	{id: 114, "name": "Apple", "attributes": {"description": "Slightly increases Horse, Health, and Stamina Cores", "use": "food"}},
	{id: 115, "name": "Baked Beans", "attributes": {"description": "Slightly increases Health and Stamina Cores", "use": "food"}},
	{id: 116, "name": "Bread Roll", "attributes": {"description": "Slightly increase Health Core", "use": "food"}},
	{id: 117, "name": "Canned Apricots", "attributes": {"description": "Slightly increase Health Core, Moderately increase Stamina Core", "use": "food"}},
	{id: 118, "name": "Canned Corned Beef", "attributes": {"description": "Slightly increase Dead Eye Core, Moderately increase Health Core", "use": "food"}},
	{id: 119, "name": "Canned Kidney Beans", "attributes": {"description": "Moderately increase Health and Stamina Cores", "use": "food"}},
	{id: 120, "name": "Canned Peas", "attributes": {"description": "Slightly increase Stamina Core, Moderately increase Health Core", "use": "food"}},
	{id: 121, "name": "Canned Peaches", "attributes": {"description": "Slightly increase Health Core, Moderately increase Stamina Core", "use": "food"}},
	{id: 122, "name": "Canned Pineapples", "attributes": {"description": "Moderately increases Health and Stamina Cores"}, "use": "food"},
	{id: 123, "name": "Canned Salmon", "attributes": {"description": "Slightly increase Dead Eye Core, Moderately increase Health Core", "use": "food"}},
	{id: 124, "name": "Canned Strawberries", "attributes": {"description": "Moderately increases Health and Stamina Cores", "use": "food"}},
	{id: 125, "name": "Canned Sweetcorn", "attributes": {"description": "Slightly increase Stamina Core, Moderately increase Health Core", "use": "food"}},
	{id: 126, "name": "Candies", "attributes": {"description": "Slightly increases Stamina and Dead Eye Cores", "use": "food"}},
	{id: 127, "name": "Carrot", "attributes": {"description": "Slightly increase Health Core, Greatly increase Horse Cores", "use": "food"}},
	{id: 128, "name": "Cheese Wedge", "attributes": {"description": "Moderately increases Health and Dead Eye Cores", "use": "food"}},
	{id: 129, "name": "Chocolate Bar", "attributes": {"description": "Slightly increase Dead Eye Core, Moderately increase Stamina Core", "use": "food"}},
	{id: 130, "name": "Cigar", "attributes": {"description": "Slightly damage Stamina Core, Greatly increase Dead Eye Core", "use": "drug"}},
	{id: 131, "name": "Cigarettes", "attributes": {"description": "Slightly damage Stamina Core, Slightly increase Dead Eye Core", "use": "drug"}},
	{id: 132, "name": "Classic Oatcakes", "attributes": {"description": "Slightly increases Health and Stamina Cores, Greatly increases Horse Cores", "use": "food"}},
	{id: 133, "name": "Corn", "attributes": {"description": "Slightly increase Health Core, Moderately increases Horse Cores", "use": "food"}},
	{id: 134, "name": "Crackers", "attributes": {"description": "Slightly increase Health Core", "use": "food"}},
	{id: 135, "name": "Fine Brandy", "attributes": {"description": "Slightly increase Stamina Core, Moderately increase Dead Eye Core", "use": "drug"}},
	{id: 136, "name": "Gin", "attributes": {"description": "Slightly increase Stamina Core, Moderately increase Dead Eye Core", "use": "drug"}},
	{id: 137, "name": "Guarma Rum", "attributes": {"description": "Slightly increases Stamina and Dead Eye Cores", "use": "drug"}},
	{id: 138, "name": "Kentucky Bourbon", "attributes": {"description": "Slightly damage Health Core, Moderately increases Stamina and Dead Eye Cores", "use": "drug"}},
	{id: 139, "name": "Peach", "attributes": {"description": "Slightly increases Health, Stamina, and Horse Cores", "use": "food"}},
	{id: 140, "name": "Pear", "attributes": {"description": "Slightly increases Health, Stamina, and Horse Cores", "use": "food"}},
	{id: 141, "name": "Premium Cigarettes", "attributes": {"description": "Slightly damage Stamina Core, Slightly increase Dead Eye Core", "use": "drug"}},
	{id: 142, "name": "Raspberry", "attributes": {"description": "", "use": "food"}},
	{id: 143, "name": "Salted Beef", "attributes": {"description": "Slightly increase Health Core, Moderately increase Dead Eye Core", "use": "food"}},
	{id: 144, "name": "Aged Pirate Rum", "attributes": {"description": "Consuming gives Stamina Experience", "use": "drug"}},
	{id: 145, "name": "Bitters", "attributes": {"description": "Fully restores Stamina and slightly foritifies it", "use": "food"}},
	{id: 146, "name": "Cocaine Gum", "attributes": {"description": "Fully resotre Stamina, slightly fortifies it while damaging the Core", "use": "drug"}},
	{id: 147, "name": "Chewing Tobacco", "attributes": {"description": "Resotres Dead Eye, slightly fortifies it while damaging the Core", "use": "drug"}},
	{id: 148, "name": "Ginseng Elixir", "attributes": {"description": "Consuming gives Health Experience", "use": "drink"}},
	{id: 149, "name": "Hair Tonic", "attributes": {"description": "Increases hair growth"}},
	{id: 150, "name": "Hair Pomade", "attributes": {"description": "Apply to slick back hair"}},
	{id: 151, "name": "Health Cure", "attributes": {"description": "Restores Health and slightly fortifies it"}},
	{id: 152, "name": "Horse Medicine", "attributes": {"description": "Restore Horse Health and slighty fortifies it"}},
	{id: 153, "name": "Horse Reviver", "attributes": {"description": "Revives horse from severe injury and restores health"}},
	{id: 154, "name": "Horse Stimulant", "attributes": {"description": "Fully restores Horse Stamina and slightly fortifies it"}},
	{id: 155, "name": "Miracle Cure", "attributes": {"description": "Restores Health, Stamina, and Dead Eye"}},
	{id: 156, "name": "Miracle Tonic", "attributes": {"description": "Fully restores all and slightly fortifies them"}},
	{id: 157, "name": "Potent Health Cure", "attributes": {"description": "Fully restore Health and moderately fortifies it"}},
	{id: 158, "name": "Potent Horse Medicine", "attributes": {"description": "Fully restore Horse health and moderately fortifies it"}},
	{id: 159, "name": "Potent Horse Stimulant", "attributes": {"description": "Fully restore Horse stamina and moderately fortify it"}},
	{id: 160, "name": "Potent Bitters", "attributes": {"description": "Restore Stamina and moderately fortify it"}},
	{id: 161, "name": "Potent Miracle Tonic", "attributes": {"description": "Fully resotre all and moderately fortify them"}},
	{id: 162, "name": "Potent Snake Oil", "attributes": {"description": "Fully restore Dead Eye and slightly fortify it"}},
	{id: 163, "name": "Snake Oil", "attributes": {"description": "Restore Dead Eye and slightly fortify it"}},
	{id: 164, "name": "Valerian Root", "attributes": {"description": "Consuming gives Dead Eye Experience", "use": "food"}},
	{id: 165, "name": "Big Game Meat", "attributes": {"description": "", "use": "food"}},
	{id: 166, "name": "Game Meat", "attributes": {"description": "", "use": "food"}},
	{id: 167, "name": "Ginseng", "attributes": {"description": "", "use": "drink"}},
	{id: 168, "name": "Gritty Fish Meat", "attributes": {"description": "Meat from fish to be used in cooking", "use": "food"}},
	{id: 169, "name": "Ground Coffee", "attributes": {"description": "Brew to moderately increase Stamina and Dead Eye Cores", "use": "drink"}},
	{id: 170, "name": "Indian Tobacco", "attributes": {"description": "", "use": "drug"}},
	{id: 171, "name": "Mature Venison Meat", "attributes": {"description": "Meat from large game to cook with", "use": "food"}},
	{id: 173, "name": "Plump Bird Meat", "attributes": {"description": "", "use": "food"}},
	{id: 174, "name": "Prime Beef Joint", "attributes": {"description": "", "use": "food"}},
	{id: 176, "name": "Stringy Meat", "attributes": {"description": "Meat from small animals to cook with", "use": "food"}},
	{id: 177, "name": "Tender Pork Loin", "attributes": {"description": "", "use": "food"}},
	{id: 181, "name": "Animal Fat", "attributes": {"description": "Located on Bears, Boars, Beavers, Ducks, Geese, Javelinas, Pigs, and Pheasants to craft or sell"}},
	{id: 182, "name": "Bear Claw", "attributes": {"description": "Found from skinning Bears"}},
	{id: 183, "name": "Buck Antlers", "attributes": {"description": "Found from skinning Bucks, can be used in crafting"}},
	{id: 184, "name": "Buck Pelt(Good", "attributes": {"description": ")	a Pelt from a Buck with minor damage"}},
	{id: 185, "name": "Cougar Carcass(Perfect)", "attributes": {"description": "Get a clean kill a 3 - Star Cougar"}},
	{id: 186, "name": "Cougar Pelt(Perfect)", "attributes": {"description": "A Cougar Pelt with no damage"}},
	{id: 187, "name": "Cougar Fang", "attributes": {"description": "Found from killing Cougars"}},
	{id: 188, "name": "Deer Pelt(Perfect)", "attributes": {"description": "A pelt from a Deer in perfect condition, used in crafting or sell to Trapper for unique items"}},
	{id: 189, "name": "Flight Feather", "attributes": {"description": "Feathers from bird for crafting or selling"}},
	{id: 190, "name": "Legendary Bear Carcass", "attributes": {"description": "Found from killing the Legendary Bear - can be sold to the Trapper for unique Outfits"}},
	{id: 191, "name": "Legendary Bear Claw", "attributes": {"description": "Found from killing the Legendary Bear - can be sold to a Fence for unique Talismans"}},
	{id: 192, "name": "Pig Hide(Good)", "attributes": {"description": "Pig Hide with minor damage"}},
	{id: 193, "name": "Pronghorn Carcass(Poor)", "attributes": {"description": "Kill a 1 - Star Pronghorn"}},
	{id: 194, "name": "Pronghorn Hide(Good)", "attributes": {"description": "Pronghorn Pelt with minor damage"}},
	{id: 195, "name": "Rabbit Carcass(Poor)", "attributes": {"description": "Kill a 1 - Star Rabbit"}},
	{id: 196, "name": "Raccoon Pelt(Good)", "attributes": {"description": "Raccoon Pelt with minor damage"}},
	{id: 197, "name": "Songbird Carcass(Poor)", "attributes": {"description": "Songbird body with major damage"}},
	{id: 198, "name": "Squirrel Carcass(Poor)", "attributes": {"description": "Squirrel body with major damage"}},
	{id: 199, "name": "Turkey Carcass(Poor)", "attributes": {"description": "Kill a 1 - Star Turkey"}},
	{id: 200, "name": "Wolf Carcass(Perfect)", "attributes": {"description": "Kill a 3 - Star Wolf"}},
	{id: 201, "name": "Wolf Carcass(Poor)", "attributes": {"description": "Kill a 1 - Star Wolf"}},
	{id: 202, "name": "Wolf Pelt(Good)", "attributes": {"description": "Wolf pelt with minor damage"}},
	{id: 203, "name": "Wolf Pelt(Poor)", "attributes": {"description": "Wolf pelt with major damage"}},
	{id: 204, "name": "Wolf Heart", "attributes": {"description": "Found by skinning wolves"}},
	{id: 205, "name": "Binoculars", "attributes": {"description": "Equip to see into the distance and study from far away"}},
	{id: 206, "name": "Bandana", "attributes": {"description": "Equip to hide your identity while committing crimes.Take off outside of crime area to lower likelihood of being spotted."}},
	{id: 207, "name": "Camera", "attributes": {"description": "Allows you to take pictures of your surroundings"}},
	{id: 208, "name": "Coffee Percolator", "attributes": {"description": "Brew coffee at your camp"}},
	{id: 209, "name": "Cover Scent Lotion", "attributes": {"description": "Used to block human scent and reduce animal detection"}},
	{id: 210, "name": "Gold Pocket Watch", "attributes": {"description": "Used to tell time, can be sold for cash"}},
	{id: 211, "name": "Gun Oil", "attributes": {"description": "Keeps your gun condition well maintained"}},
	{id: 212, "name": "Herbivore Bait", "attributes": {"description": "Attracts average Herbivors nearby", "use": "bait"}},
	{id: 213, "name": "Lake Lure", "attributes": {"description": "Attracts all medium - sized lake fish", "use": "bait"}},
	{id: 214, "name": "Live Crickets", "attributes": {"description": "A tin of five crickets works for attracting medium - sized river fish", "use": "bait"}},
	{id: 215, "name": "Live Worms", "attributes": {"description": "A tin of five worms works for attracting medium - sized lake fish", "use": "bait"}},
	{id: 216, "name": "Platinum Pocket Watch", "attributes": {"description": "Used to tell time, can be sold for cash"}},
	{id: 217, "name": "Predator Bait", "attributes": {"description": "Attracts average Predators nearby", "use": "bait"}},
	{id: 218, "name": "Silver Pocket Watch", "attributes": {"description": "Used to tell time, can be sold for cash"}},
	{id: 219, "name": "Gold Bar", "attributes": {"description": "Sell to Fence"}},
	{id: 220, "name": "Gold Ingot", "attributes": {"description": "Sell to Fence"}},
	{id: 221, "name": "Gold Nugget", "attributes": {"description": "Sell to Fence"}},
	{id: 222, "name": "Gold Jointed Bracelet", "attributes": {"description": "Craft or sell"}},
	{id: 223, "name": "Platinum Band", "attributes": {"description": "Sell"}},
	{id: 224, "name": "Platinum Chain Necklace", "attributes": {"description": "Sell"}},
	{id: 225, "name": "Platinum Engraved Buckle", "attributes": {"description": "Sell"}},
	{id: 226, "name": "Silver Clamp Buckle", "attributes": {"description": "Sell"}},
	{id: 227, "name": "Silver Earring	Sell", "attributes": {"description": ""}},
	{id: 228, "name": "Silver Emblem Ring	Sell", "attributes": {"description": ""}},
]

interface IItemList {
    [index: number]: Item
}

const Items: IItemList = {}

function populateItems() {
    Config.forEach(item => {
        Items[item.id] = new Item(item.id, item.name, item.attributes)
    })
}

on("onResourceStart", (resource: string) => {
    if ( resource === GetCurrentResourceName()) {
        populateItems()
    }
})

export { Item, Items, IItemList }