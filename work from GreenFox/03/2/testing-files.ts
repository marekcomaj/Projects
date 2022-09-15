const fs = require('fs');
let filePath = 'duplicated-chars.txt'
let fileContent: string = fs.readFileSync(filePath, 'utf-8');
let letters: string[] = fileContent.split('')
let i = letters.length;

while (i--) {
    (i + 1) % 2 === 0 && letters.splice(i, 1);
}

let join = letters.join('');
let lines = join.split('\r')
let text = lines.join('\n')
let file = 'output.txt'

fs.appendFileSync(file, text);
