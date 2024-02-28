var fsLib = require('fs');
console.log("Welcome to File Read Program...")

let data = "Hello welcome " + new Date() +"\n";

fsLib.appendFileSync("newfile.txt", data);
console.log("Done");