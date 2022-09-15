'use strict'

const fs = require('fs');

function promisifyReadFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.error(err);
        reject('Error happened during the file reading!');
        return;
      } else {
        return resolve(data);
      }
    });
  });
}

promisifyReadFile('hello.txt')
  .then((data) => {
    return data;
  })
  .then((buffer) => {
    return buffer.toString();
  })
  .then((text) => {
      console.log(text);
  })
  .catch((err) => {
    console.error(err);
  });