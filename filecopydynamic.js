var fsLib = require('fs');

let srcFile = process.argv[2];
let targetFile = process.argv[3];

let fileData = fsLib.readFileSync(srcFile) 
fsLib.appendFileSync(targetFile, fileData.toString());
console.log("Successfully Copied the file");