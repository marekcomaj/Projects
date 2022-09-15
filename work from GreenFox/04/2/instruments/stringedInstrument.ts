import {Instruments } from './instruments';

export abstract class StringedInstrument extends Instruments {
    numberOfStrings: number;


    constructor(name: string, numberOfStrings: number) {
        super(name)
        this.numberOfStrings = numberOfStrings;

    }

    abstract sound(): string;

    play() {
        console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}.`)
    }
}