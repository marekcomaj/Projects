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







/*


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

*/

//-------------------------------------------------

//left up purple

function drawing (x, y, asdf) {

for (let i = 0; i <  asdf; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(x+ asdf, y+i);
    ctx.lineTo(x+ i,y);
    ctx.stroke();


}


//left up green
for (let i = 0; i < asdf; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(x,y+ i);
    ctx.lineTo(x + i,y +  asdf);
    ctx.stroke();


}

}

const cells = 4;

const cellx= Math.sqrt(cells);

const celly= Math.sqrt(cells);

for(let x = 0; x<cellx; x++){
    for(let y = 0; y<celly; y++){
        drawing(x* canvasWidth /cellx,y* canvasHeight /celly, canvasWidth/cellx);
    }
}


/*

drawing(
  x * canvasWidth / Math.sqrt(cells),
  y * canvasWidth / Math.sqrt(cells)
)

*/
