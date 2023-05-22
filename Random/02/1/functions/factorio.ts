// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

'use strict';

function calculateFactorial(givenNumber: number){

    let calculateFactorial: number = 1;

    for (let i = givenNumber; i >= 1 ; i--) {
        
        calculateFactorial = calculateFactorial*i;

    }
    
    console.log('Factorial of number', givenNumber, 'is:' +calculateFactorial);


}
calculateFactorial(5)