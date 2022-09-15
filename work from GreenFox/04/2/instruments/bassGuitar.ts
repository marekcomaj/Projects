import {Instruments } from './instruments';
import {StringedInstrument} from './stringedInstrument';


export class BassGuitar extends StringedInstrument {

    constructor(numberOfStrings: number = 4) {
        super("Bass Guitar", numberOfStrings)
    }

    sound() {
        return 'Duum-duum-duum';
    }
}