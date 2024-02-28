var fsLib = require('fs');
console.log("Welcome to File Read Program...")

let fileData = fsLib.readFileSync("samplefile.txt") 
console.log("File Data = ", fileData.toString());


console.log("-----Bye!!!!----")
