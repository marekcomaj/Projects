import {Animal} from './animal'

export class Mamall extends Animal {

    constructor(name: string, age: number, gender: string, color: string, animalSpecies: string) {
        super(name,age,gender,color,animalSpecies)
    }

   breed(){
    return 'pushing miniature versions out';
   }
}

