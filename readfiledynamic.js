var fsLib = require('fs');
console.log("Welcome to File Read Program...")
let fileName = process.argv[2];

let fileData = fsLib.readFileSync(fileName) 
console.log("File Data = \n", fileData.toString());


console.log("-----Bye!!!!----")
