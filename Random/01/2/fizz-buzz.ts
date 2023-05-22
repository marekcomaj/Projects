'use strict';

// Write a program that prints the numbers from 1 to 100
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

export function fizzBuzz() {
  // write your code here for Gradescope testing
}


for(let a = 1; a <= 100 ; a++  ){

  if(a%3==0 && a%5==0){
    console.log('FizzBuzz');
  }else if(a%5==0) {
    console.log('Buzz');
  }else if(a%3==0){
    console.log('Fizz');
  }else{
    console.log(a);
  }
}