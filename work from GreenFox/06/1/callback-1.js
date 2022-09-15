'use strict';

const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  for (let index = 0; index < array.length; index++) {
    let element = array[index];
    if (callback(element)) {
      output.push(callback(element));
    }
  }

  return output;
}

const addOne = (element) => {
  return element + 1;
}

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
//expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

function removeSecondLetter(element){
    return element.slice(0, 1) + element.slice(2, element.length);
}



console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']