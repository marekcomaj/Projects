'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;


let positonX = 10;
let positonY = 10;

let size = 20;

for(let i = 0; i<canvasWidth /2; i +=20){
    

    ctx.fillStyle = 'purple';
    ctx.fillRect(positonX, positonY, size, size);

    positonX = positonX +20;
    positonY = positonY +20;

}