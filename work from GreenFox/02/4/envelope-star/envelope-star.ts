'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const half = canvasWidth / 2;

let four = canvasWidth / 4;

let eight = canvasWidth / 8;

const sixteen = canvasWidth / 16;

const sixtyfour = canvasWidth / 64;

const size = 15;



//right up green
for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(half, i);
    ctx.lineTo(half+ i,half);
    ctx.stroke();


}




//right down green
for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(half,half+i);
    ctx.lineTo(canvasWidth-i,half);
    ctx.stroke();


}

//adasdasd



//left down green
for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(half, half +i);
    ctx.lineTo(0+ i,half);
    ctx.stroke();


}

//right down green
for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(i,half);
    ctx.lineTo(half,half-i);
    ctx.stroke();


}