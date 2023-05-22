'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;;
export {}; 

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the center of the canvas
// draw a green vertical line to the center of the canvas

const canvasWidth =canvas.width;
const canvasHeight =canvas.height;


ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(0, canvasHeight /2);
ctx.lineTo(canvasWidth/ 2, canvasHeight /2);
ctx.stroke();
ctx.closePath()


ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(canvasWidth /2, 0);
ctx.lineTo(canvasWidth /2, canvasHeight /2);
ctx.stroke();
ctx.closePath()