'use strict';

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

    function sum(givenNumber: number){
        let sum: number = 0;
    
        for (let i = givenNumber; i >= 0 ; i--) {
        
            sum += i;
        
        }
        
        console.log("Sum: "+sum);

    }
    sum(3)