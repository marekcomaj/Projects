import {Flyable} from './flyable'
import { Vehicle } from './vehicle';


export class Helicopter extends Vehicle implements Flyable{
    land() {
        return `${this.brand} Helicopter is landing`;
    }

    fly(){
        return `${this.brand} Helicopter is flying`;
    }

    takeOff(){
        return `${this.brand} Helicopter is taking off`;
    }

}
