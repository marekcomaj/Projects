// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

import {EOL} from 'os';

const fs = require('fs');
let filePath = 'duplicated-chars.txt'
let fileContent: string = fs.readFileSync(filePath, 'utf-8');
let line: string[] = fileContent.split('\n')
let i = 3;

console.log(fileContent);
console.log(line);

try {

  line.splice(i, 1);
    
    let join = line.join(EOL);
    let lines = join.split('\r')
    let text = lines.join('\n')
    let file = 'output.txt'

    fs.appendFileSync(file, join);
} catch (error: any) {
    console.log('File not found')
}
