let code1;
code1 = 3 + 7;
// declare and assign variables below using arithmetic
let code2 = 140 / 2 - 30;
let code3 = 2 * 19 + (10 % 3);
let message = "The vault has been secured. The combination is:";
//using concatenating to combine variables below
let codeA = code1 + "-" + code2 + "-" + code3;
//using template lateral and variable syntax to combine variables below
let codeB = `${code1}-${code2}-${code3}`;

//Print console messages below
console.log(message + codeA);
console.log(`${message}${codeB}`);
