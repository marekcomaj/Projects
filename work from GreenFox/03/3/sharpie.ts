class Sharpie {
    color: string;
    width: number;
    inkAmount: number;

    constructor(color: string, width: number) {
        this.color = color;
        this.width = width;
        this.inkAmount = 100;
    }

    use() {
        this.inkAmount -= 10;
    }
}

let redSharpie = new Sharpie('red', 5)

console.log(redSharpie);

redSharpie.use();

console.log(redSharpie);

