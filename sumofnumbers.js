let args = process.argv;
console.log("length of the arguments passed=", args.length);

let sum = 0;
for(i=2; i<args.length; i++)
    sum+= parseInt(args[i]);

console.log("Total sum=",sum);