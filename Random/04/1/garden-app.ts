class Garden {
    color: string;
    water: number = 0;

    constructor(color: string,) {
        this.color = color;

    }

    waterFlowers(AmountOfWater: number) {
        if (this.water < 5) {
            this.water += (AmountOfWater / Garden.length) * 0.75;
            console.log(this.water)
        } else {
            console.log('Flowers has enough water')
        }
    }

    waterTrees(AmountOfWater: number) {
        if (this.water < 10) {
            this.water += AmountOfWater * 0.4;
            console.log(this.water)
        } else {
            console.log('Trees has enough water')
        }
    }

}

class Flowers extends Garden {

}

let yellowFlower = new Flowers('yellow');
let blueFlower = new Flowers('blue');



class Trees extends Garden {

}

let purpleTree = new Trees('purple');
let orangeTree = new Trees('orange');
