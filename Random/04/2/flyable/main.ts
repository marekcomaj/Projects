import { Bird } from './bird';
import {Flyable} from './flyable'
import { Helicopter } from './helicopter';
import { Vehicle } from './vehicle';

let helicopter = new Helicopter('brown', 'Apache', 365);
let parrot = new Bird('Red', 1, 'male', 'red', 'Parrot');

console.log(parrot.takeOff());
console.log(helicopter.fly());