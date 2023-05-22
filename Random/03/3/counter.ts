class Counter {
    private counter: number;
    private initialCounter: number;

    constructor(counter: number = 0) {
        this.counter = counter;
        this.initialCounter = counter;
    }

    add(number: number = 1) {
        this.counter = this.counter+ number;
    }

    get(){
        return this.counter;
    }

    reset(){
        this.counter = this.initialCounter;
    }
}


let counter = new Counter(10)

counter.add();

console.log(counter.get());