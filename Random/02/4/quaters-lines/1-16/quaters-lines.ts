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


//loop for split canvas on 1/16

for (let i = 0; i < 3; i++) {

    ctx.strokeStyle = 'red';
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
    
    const cells = 16;
    
    const cellx= Math.sqrt(cells);
    
    const celly= Math.sqrt(cells);
    
    for(let x = 0; x<cellx; x++){
        for(let y = 0; y<celly; y++){
            drawing(x* canvasWidth /cellx,y* canvasHeight /celly, canvasWidth/cellx);
        }
    }