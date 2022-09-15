
export abstract class Animal {
    name: string;
    age: number;
    gender: string;
    animalSpecies: string;
    color: string;



    constructor(name: string, age: number, gender: string, color: string, animalSpecies: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.color = color;
        this.animalSpecies = animalSpecies;
    }

   getName(){
        return this.animalSpecies
    }

    abstract breed(): void;
}