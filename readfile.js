var fsLib = require('fs');
console.log("Welcome to File Read Program...")

fsLib.readFile("samplefile.txt", function(fileErr, fileData)
    {
        if(fileErr){
            console.error("Error encountered trying to read the given file!!!");
        }
        console.log("File data = ", fileData.toString());
    }
) 


console.log("-----Bye!!!!----")
