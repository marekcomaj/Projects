import {Instruments } from './instruments';
import {StringedInstrument} from './stringedInstrument';

export class ElectricGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 6) {
        super("Electric Guitar", numberOfStrings)
    }

    sound() {
        return 'Twang';
    }
}