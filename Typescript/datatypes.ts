let lname: string;

lname = "Srinandan"

let newName = lname.toUpperCase();

console.log(newName);


let age: number = 25;

console.log(age);


let value: string = "25.5";
console.log(value);

let floatValue = parseFloat(value);
console.log(floatValue);

let arr: string[] = ["aaa", "bbb", "ccc"];
let arrGenerics: Array<string> = ["aaa", "bbb", "ccc"];
console.log(arr);
console.log(arrGenerics);


let numArray: number[] = [1, 2, 3, 4, 5];

const evenNumbers = numArray.find(X => X === 2);
console.log(evenNumbers);


const sum = numArray.reduce((acc, num) => acc + num);
console.log(sum);

const sumwithRest = (num1: number, num2: number, ...num: number[]) => { 
    return num1 + num2 + num.reduce((a,b) => a+b,0)
};

const sumwithRestResult = sumwithRest(1,2,...[4,5,6,7])

console.log('sumwithRestResult', sumwithRestResult);


