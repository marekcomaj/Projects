'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.


function square(size, fill) {

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[fill];
        ctx.fillRect(canvasWidth / 2 - size / 2, canvasHeight / 2 - size / 2, size, size);
    }
}


let sizeOfSquare = 400
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for (let i = 0; i < colors.length; i++) {
    sizeOfSquare -= 50
    square(sizeOfSquare, i)
}


