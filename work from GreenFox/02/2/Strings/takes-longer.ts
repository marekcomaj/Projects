'use strict';
// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let missing = "always takes longer than";

let position = 21;

quote = [quote.slice(0, position), missing, quote.slice(position)].join(' ');

console.log(quote);

