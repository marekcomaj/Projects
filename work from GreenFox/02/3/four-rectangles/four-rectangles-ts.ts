'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let positionX = 30;
let positionY = 20;
let sizeX = 20;
let sizeY = 20;

for(let i = 0; i< 4; i++){
    positionX = positionX + 100;
    positionY = positionY + 40;
    sizeX = sizeX +20;
    sizeY = sizeY +20;

    let color = ['green', 'red', 'blue', 'orange']
    ctx.fillStyle = color[i];
    ctx.fillRect(positionX, positionY, sizeX, sizeY)
}
