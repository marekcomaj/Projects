// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-name.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-name.txt".

const fs = require('fs');


function writeFile(file : string) {

    try {
        let fileContent = 'Marek';
        fs.writeFileSync('my-name.txt', fileContent);
      }catch(error : any) {
        console.log('Unable to write file: my-name.txt')
      }
    }
    
    
    
    writeFile('my-name.txt');
    