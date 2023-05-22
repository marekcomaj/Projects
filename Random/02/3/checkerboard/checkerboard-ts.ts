'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function isEven(n: number) {
    return n % 2 === 0;
}

function xor(a:boolean, b:boolean){
    return(a && !b) || (!a && b)
}

let size = 50;
for (let j = 0; j <= canvasHeight; j += size) {
    for (let i = 0; i <= canvasWidth; i += size) {

        if (xor( !isEven(i/size), isEven(j/size) )) {
            ctx.fillStyle = 'black';
        } else {
            ctx.fillStyle = 'white';
        }

        ctx.fillRect(i, j, size, size);


    }

}