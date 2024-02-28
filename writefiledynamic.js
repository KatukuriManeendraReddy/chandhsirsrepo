var fsLib = require('fs');
console.log("Welcome to File Read Program...")
let file = process.argv[2];
let userStr = process.argv[3];

let data =  new Date() + "----" + userStr + "\n";

fsLib.appendFileSync(file, data);
console.log("Done");