'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

export function SumAverage(userInput: number) {

    let sum: number = 0;
    
    for (let i = userInput; i >= 0 ; i--) {
    
        sum += i;
    
    }
    
    let average: number = sum/userInput;
    
    console.log("Sum: "+sum, "Average: "+average);
    
    }SumAverage(5)