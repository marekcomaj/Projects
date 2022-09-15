'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge

const canvasWidth =canvas.width;
const canvasHeight =canvas.height;


ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(200,200);
ctx.lineTo(250, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(250,200);
ctx.lineTo(250, 250);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(250,250);
ctx.lineTo(200, 250);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.moveTo(200,250);
ctx.lineTo(200, 200);
ctx.stroke();