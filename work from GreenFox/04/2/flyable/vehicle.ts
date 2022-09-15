import {Flyable} from './flyable'

export abstract class Vehicle {
    color: string;
    brand: string;
    topSpeed: number;

    constructor(color: string, brand: string, topSpeed: number) {
        this.color = color;
        this.brand = brand;
        this.topSpeed = topSpeed;
    }
}
