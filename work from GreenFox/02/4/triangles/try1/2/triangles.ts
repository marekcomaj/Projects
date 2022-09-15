'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;


/*
let lenght = 600;

let lenghtHalf = lenght /2;

let size = 15;

let space = 20;

*/

let canvashalf = canvasWidth /2

let width =  60;
let height= 580;
let lenght = 20;

let widthB =  580;
let lenghtB= 580;


let widthRed =  canvasWidth /2;
let heightRed= 560;
let lenghtRed = 20;

let widthBlue =  canvasWidth /2;
let heightBlue= 560;
let lenghtBlue = 20;

let widthBlack = 560;
let heightBlack= 560;
let lenghtBlack = 20;


for (let i = 1; i < 14; i ++) {
ctx.beginPath();
    ctx.strokeStyle = 'red';
    ctx.moveTo(widthRed +20, heightRed);
    ctx.lineTo(widthRed +20 - (lenght * i), heightRed - (lenght * i));
    ctx.stroke();
ctx.closePath()


ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(widthBlue +20 - (lenght * i), heightBlue);
    ctx.lineTo(widthBlue+20, heightBlue - (lenght * i));
    ctx.stroke();
ctx.closePath()




ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(width , height- (lenght * i));
    ctx.lineTo(widthB- (lenght * i), lenghtB - (lenght * i));
    ctx.stroke();
ctx.closePath()


widthRed +=20;
width +=20;
}











/*

//left line
ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(space, lenght - size );
    ctx.lineTo(lenghtHalf - size, size);
    ctx.stroke();
ctx.closePath()


//right line
ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(lenght - space, lenght - size );
    ctx.lineTo(lenghtHalf - size, size);
    ctx.stroke();
ctx.closePath()

//bottom line
ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.moveTo(space, lenght - size);
    ctx.lineTo(lenght - space, lenght - size);
    ctx.stroke();
ctx.closePath()

*/