'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50-long long horizontal line from that point
// Draw at least 3 lines with that function using a loop

function drawALine(startX: number, startY: number) {

   

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX+50, startY);
    ctx.stroke();
    ctx.closePath()


}

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let x = 20;
let y = 20;

for(let i = 1; i <= 3; i ++){
    x = x +x;
    y = y +y;
    drawALine(x, y)
}
