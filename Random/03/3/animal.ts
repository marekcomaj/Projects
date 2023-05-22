class Animal {
    animalType: string;
    hunger: number;
    thirst: number;

    constructor(animalType: string) {
        this.animalType =  animalType;
        this.hunger = 50;
        this.thirst = 50;
    }
    drink(){
        this.thirst --;
    }

    eat(){
        this.thirst --;
    }

    play(){
        this.thirst ++;
        this.hunger ++;
    }
}

let bunny = new Animal('Bunny')


bunny.drink();

console.log(bunny);

bunny.play();

console.log(bunny);