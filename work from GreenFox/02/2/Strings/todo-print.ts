'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

let download = ' - Download games\n';

let diablo = "      - Diablo";

let beginning = "My todo:\n";

let list = beginning.concat(todoText);

list = list.concat(download);

list = list.concat(diablo);


console.log(list);