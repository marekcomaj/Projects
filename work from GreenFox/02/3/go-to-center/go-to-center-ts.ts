'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop


function drawALine(startX: number, startY: number) {

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(canvasWidth /2, canvasHeight /2);
    ctx.stroke();
    ctx.closePath()

}



drawALine(0, 0);

drawALine(500,50);

drawALine(300, 300);