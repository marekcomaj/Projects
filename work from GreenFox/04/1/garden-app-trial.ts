class Plant {
    color: string;
    water: number = 0;
    constructor(color: string) {
        this.color = color;
    }
    getStatus(): string {
        if (this.isThirsty()) {
            return `The ${this.color} ${this.constructor.name} needs water`;
        } else {
            return `The ${this.color} ${this.constructor.name} doesnt't needs water`;
        }
    }
    isThirsty() {
        return true;
    }
    addWater(amount: number) {
        this.water += amount;
    }
}

class Flower extends Plant {
    isThirsty(): boolean {
        return this.water < 5;
    }
    addWater(amount: number) {
        this.water += amount * 0.75;
    }
}

class Tree extends Plant {
    isThirsty(): boolean {
        return this.water < 10;
    }
    addWater(amount: number) {
        this.water += amount * 0.4;
    }
}

class Garden {
    plants: Plant[];
    constructor() {
        this.plants = [];
    }
    add(plant: Plant) {
        this.plants.push(plant);
    }
    printStatus() {
        this.plants.forEach(function (plant: Plant) {
            console.log(plant.getStatus());
        });
        console.log("\n");
    }
    watering(amount: number) {
        console.log(`Watering with ${amount}`);
        let thirstyPlants: Plant[] = this.plants.filter(function (plant: Plant) {
            return plant.isThirsty();
        });
        let waterUnit: number = amount / thirstyPlants.length;
        thirstyPlants.forEach(function (plant: Plant) {
            plant.addWater(waterUnit);
        });
    }
}

const garden = new Garden();

garden.add(new Flower("yellow"));
garden.add(new Flower("blue"));
garden.add(new Tree("purple"));
garden.add(new Tree("orange"));

garden.printStatus();
garden.watering(40);
garden.printStatus();
garden.watering(70);
garden.printStatus();