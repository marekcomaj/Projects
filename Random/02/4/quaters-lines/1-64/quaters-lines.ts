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





//loop for split canvas on 1/64

for (let i = 0; i < 8; i++) {

    
    ctx.strokeStyle = 'red';
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
    
    const cells = 64;
    
    const cellx= Math.sqrt(cells);
    
    const celly= Math.sqrt(cells);
    
    for(let x = 0; x<cellx; x++){
        for(let y = 0; y<celly; y++){
            drawing(x* canvasWidth /cellx,y* canvasHeight /celly, canvasWidth/cellx);
        }
    }