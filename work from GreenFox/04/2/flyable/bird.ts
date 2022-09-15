import {Animal} from '../zoo/animal'
import {Flyable} from './flyable'

export class Bird extends Animal implements Flyable{

    constructor(name: string, age: number, gender: string, color: string, animalSpecies: string) {
        super(name,age,gender,color,animalSpecies)
    }
    land() {
        return `${this.animalSpecies} is landing`;
    }

    fly(){
        return `${this.animalSpecies} is flying`;
    }

    takeOff(){
        return `${this.animalSpecies} is taking off`;
    }


   breed(){
    return 'laying eggs.';
   }
}


