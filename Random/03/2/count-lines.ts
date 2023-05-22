// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function countLines(file : string) : number {
    try {
        let fileContent = fs.readFileSync('my-file.txt', 'utf-8').split('\n');
        return fileContent.length;
    } catch (error: any) {
        return 0;
    }

}

console.log(countLines('my-file.txt'))


