'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let star ='';

for(let triangle= 1; triangle<=lineCount; triangle++){
    for (let amountOfStars = 0; amountOfStars < triangle; amountOfStars++) {
        star += "*";
      }
      star += "\n";

}
console.log(star);
