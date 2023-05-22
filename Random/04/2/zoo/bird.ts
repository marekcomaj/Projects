import {Animal} from './animal'

export class Bird extends Animal {

    constructor(name: string, age: number, gender: string, color: string, animalSpecies: string) {
        super(name,age,gender,color,animalSpecies)
    }

   breed(){
    return 'laying eggs.';
   }
}


