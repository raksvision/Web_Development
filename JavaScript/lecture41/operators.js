// arithmetic operator
/* Binary Operrator*/
let a = 10;
let b = 3;

console.log("Addition: ", a+b); //13
console.log("Subratction: ",a-b); //7
console.log("Multiplication: ", a*b); //30
console.log("Division: ", a/b); //3.333333333
console.log("Modulus: ", a%b); //1

/* Unary Operrator*/

let x = 5;

console.log(++x); // preIncrement
console.log(a++); // postIncrement

console.log(a) //a = 11

console.log(--b); // preDecrement
console.log(b--); // postDecrement

console.log(b); // b = 1


//<------------------------------------------------>

// assignment operator

let a1 = 14;

console.log(a1 += 5); //a1 = 19 
console.log(a1 -= 5); //a1 = 9
console.log(a1 *= 2); //a1 = 28
console.log(a1 /= 5); //a1 = 2.8

//<------------------------------------------------>

/* comparision operator */ //it gives 'true/fase' only //

let str = "5";

let num = 5;

console.log(str == num); // looseEquality "true"
//here only the value is evaluated

console.log(str === num); // strictEquality "false"
//here only both the value and datatype is evaluated

console.log(10 < 5); //false
console.log(10 > 5); //true
console.log(10 >= 5); //true
console.log(10 <= 5); //false
console.log(4 == 5); //false
console.log(4 != 5); //true

//<------------------------------------------------>