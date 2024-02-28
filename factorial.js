let args = process.argv;
//console.log("args received for this program are:", args);


let num = args[2];
let fact = 1;
for(let i=1; i<=num; i++){
    fact *= i;
}
console.log("Factorial of ",num, " is =", fact);
console.log("welocme")