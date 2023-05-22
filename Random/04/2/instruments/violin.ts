import {Instruments } from './instruments';
import {StringedInstrument} from './stringedInstrument';


export class Violin extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super("Violin", numberOfStrings)
    }

    sound() {
        return 'Screech';
    }
}