'use strict';

const buttons = document.querySelectorAll('button');
const cookieButton = buttons[0];
const lolipopButton = buttons[1];
const rain = buttons[2];
var count = 0;
var lollipopCount = 0;
var speed = 0;

function getCandie(event) {
    count += 1
    document.getElementById("candies").innerHTML = `${count}`;
}

function buyLolipop(event) {
    if (count >= 100) {
        document.getElementById("lollypops").innerHTML += '🍭';
        lollipopCount++;
        count -= 100;
        document.getElementById("candies").innerHTML = `${count}`;
    }
    if (lollipopCount % 10 === 0 && lollipopCount !=0) {
        speed++
        document.getElementById("speed").innerHTML = `${speed}`;
    }
}


function genarateCandies() {
    count += speed;
    document.getElementById("candies").innerHTML = `${count}`;
}
var genarator = setInterval(genarateCandies, 1000);

function makeItRain(){
    speed *= 10;
    document.getElementById("speed").innerHTML = `${speed}`;
}


cookieButton.addEventListener('click', getCandie);
lolipopButton.addEventListener('click', buyLolipop);
rain.addEventListener('click', makeItRain);