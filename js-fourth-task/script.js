// Fourth task...

class Flower {
    constructor(type, color, amount, inStore) {
        this.type = type;
        this.color = color;
        this.amount = amount;
        this.inStore = inStore;
    }

    changeAmount(newAmount) {
        // Updates flower amount
        this.amount = newAmount;
    }

    changeColor(newColor) {
        // Updates flower color
        if (newColor === "Yellow") {
            this.type = "Tulip";
        } 
        this.color = newColor;
        
    }

    changeInStore(newInStore) {
        // Updates the flower in-store status
        this.inStore = newInStore;
    }
}

// Create a new flower instance
const myFlower = new Flower("Rose", "Red", 5, "Yes", true);

// Print the flower information after creation
console.log("Flower Type:", myFlower.type, ", Color:", myFlower.color, ", Amount:", myFlower.amount, ", In Store:", myFlower.inStore);

// Change the flower color and in-store status
myFlower.changeColor("Yellow");
myFlower.amount = 3;
myFlower.changeInStore("No", false);

// Print the flower information after changes
console.log("Flower Type:", myFlower.type, ", Color:", myFlower.color, ", Amount:", myFlower.amount, ", In Store:", myFlower.inStore);
