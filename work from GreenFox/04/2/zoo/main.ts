import {Mamall} from './mammal'
import {Bird} from './bird'
import {Reptile} from './reptile'


let parrot = new Bird('Red', 1, 'male', 'red', 'Parrot');
let koala = new Mamall('Peter', 5, 'male', 'grey', 'Koala');
let reptile = new Reptile('Louis', 8, 'male', 'green', 'Crocodile');

console.log('How do you breed?');
console.log(`A ${parrot.getName()} is breeding by ${parrot.breed()}`);
console.log(`A ${koala.getName()} is breeding by ${koala.breed()}`);
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);