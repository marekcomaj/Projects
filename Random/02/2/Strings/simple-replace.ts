'use strict';

let example: string = 'In a dishwasher far far away';

// I would like to replace "dishwasher" with "galaxy" in this example variable, but it has a problem
// Please fix it for me!
// Expected ouput: In a galaxy far far away

let dishwasherRegex: RegExp = /dishwasher/i;

let abc: RegExpMatchArray | null = example.match(dishwasherRegex);

console.log(example.replace(dishwasherRegex, 'galaxy'));
