// function doubleIt(num){
//     return num*2;
// }

// another step 
// const doubleIt = function myFun(num){
//     return num * 2;
// }

// ES6 function arrow function
const doubleIt = num => num * 2;
const add = (x, y) => x * y;
const number5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result = add(50, 70);
const result2 = number5();
const result3 = doMath(7, 5);
console.log(result3);