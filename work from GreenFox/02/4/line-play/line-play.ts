'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
export { };

// DO NOT TOUCH THE CODE ABOVE THIS LINE


const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const size = 15;




for (let i = 0; i < canvasWidth; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'purple';
    ctx.moveTo(canvasWidth -i, 0);
    ctx.lineTo(canvasWidth, canvasHeight-i);
    ctx.stroke();

    
}



for (let i = 0; i < canvasHeight; i += size) {


    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(0, i);
    ctx.lineTo(i, canvasHeight);
    ctx.stroke();

    
}

