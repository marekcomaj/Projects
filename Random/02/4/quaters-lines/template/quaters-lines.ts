'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const half = canvasWidth / 2;

let four = canvasWidth / 4;

let eight = canvasWidth / 8;

const sixteen = canvasWidth / 16;

const sixtyfour = canvasWidth / 64;

const size = 15;


//first thoughts
/*
// split canvas on 1/4
ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(half, 0);
    ctx.lineTo(half, canvasHeight);
    ctx.stroke();
ctx.closePath();


ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(0, half);
    ctx.lineTo(canvasWidth, half);
    ctx.stroke();
ctx.closePath();


//split canvas on 1/16

ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(four, 0);
    ctx.lineTo(four, canvasHeight);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(four+four+four, 0);
    ctx.lineTo(four+four+four, canvasHeight);
    ctx.stroke();
ctx.closePath();


ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(0, four);
    ctx.lineTo(canvasWidth, four);
    ctx.stroke();
ctx.closePath();

ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(0, four+four+four);
    ctx.lineTo(canvasWidth, four+four+four);
    ctx.stroke();
ctx.closePath();


//split canvas on 1/64


ctx.beginPath();
    ctx.strokeStyle = 'lime';
    ctx.moveTo(eight, 0);
    ctx.lineTo(eight, canvasHeight);
    ctx.stroke();
ctx.closePath();


ctx.beginPath();
    ctx.strokeStyle = 'lime';
    ctx.moveTo(0, eight);
    ctx.lineTo(canvasWidth, eight);
    ctx.stroke();
ctx.closePath();

*/


//Actual code

// split canvas on 1/4
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(half, 0);
ctx.lineTo(half, canvasHeight);
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(0, half);
ctx.lineTo(canvasWidth, half);
ctx.stroke();
ctx.closePath();



//loop for split canvas on 1/16

for (let i = 0; i < 3; i++) {

    if (i === 1) { ctx.strokeStyle = 'red'; }
    else { ctx.strokeStyle = 'blue'; }
    ctx.beginPath();
    ctx.moveTo(four, 0);
    ctx.lineTo(four, canvasHeight);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, four);
    ctx.lineTo(canvasWidth, four);
    ctx.stroke();
    ctx.closePath();

    four = four + canvasWidth / 4;



}


//loop for split canvas on 1/64

for (let i = 0; i < 8; i++) {

    if (i === 3) { ctx.strokeStyle = 'red'; }
    else if (i === 1) { ctx.strokeStyle = 'blue'; }
    else if (i === 5) { ctx.strokeStyle = 'blue'; }
    else { ctx.strokeStyle = 'lime'; }
    ctx.beginPath();
    ctx.moveTo(eight, 0);
    ctx.lineTo(eight, canvasHeight);
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(0, eight);
    ctx.lineTo(canvasWidth, eight);
    ctx.stroke();
    ctx.closePath();

    eight = eight + canvasWidth / 8

}




//right down green

for (let i = 0; i < canvasHeight; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(half, half + i);
    ctx.lineTo(half + i, canvasHeight);
    ctx.stroke();


}



//left up green
for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, i);
    ctx.lineTo(0+ i,half);
    ctx.stroke();


}


//left down pgreen
for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, half+i);
    ctx.lineTo(0+ i,canvasWidth);
    ctx.stroke();


}

//right up green
for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(half,i);
    ctx.lineTo(half+i,half);
    ctx.stroke();


}


//left down purple

for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(half, half + i);
    ctx.lineTo(0+ i,half);
    ctx.stroke();


}


//left up purple

for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(half, i);
    ctx.lineTo(0+ i,0);
    ctx.stroke();


}


//right down purple
for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(canvasWidth - i, half);
    ctx.lineTo(canvasWidth, canvasHeight - i);
    ctx.stroke();


}

//right up purple

for (let i = 0; i < half; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(canvasWidth, i);
    ctx.lineTo(half+ i,0);
    ctx.stroke();


}

