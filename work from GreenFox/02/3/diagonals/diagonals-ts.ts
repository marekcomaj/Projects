'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;;
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function


function drawALine(startX: number, startY: number, endX: number, endY: number) {

    if (startY === 0) {
        ctx.strokeStyle = 'green';

    } else {
        ctx.strokeStyle = 'red';

    }
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.closePath()

}

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

drawALine(0, 0, canvasWidth, canvasHeight)

drawALine(0, canvasHeight, canvasWidth, 0)