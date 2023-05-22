// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful


const fs = require('fs');

function copyFile(fileToCopy: string, copyFile: string): boolean {
    try {
        fs.copyFileSync(fileToCopy, copyFile);
        return true;
    } catch (error: any) {
        return false;
    }
}

console.log(copyFile('my-file.txt', 'copy-of-file.txt'));


