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
console.log(5 !== 5); //false

//<------------------------------------------------>

/* Ternary operator */

let age = 23;
let status1 = (age > 18) ? "I can Vote" : "I cannot Vote" ;
             //condition      //true         //false
console.log(status1); // I can Vote

let price = 180;
let wallet = (price > 200) ? "You can Buy" : "You cannot Buy";
console.log(wallet); //You cannot Buy

let myage = 21;

(myage >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));

// Output : Can Drive

//<------------------------------------------------>

/* Logical operator */

//AND(&&) *all the conditions must be true*
console.log(true && false && true); //false
console.log(false && false && false); //false
console.log(true && true && true); //true

//OR(||) *any one condition might be  true*
console.log(true || false || false); //true
console.log(false || false || false); //false
console.log(false || false || true); //true

//NOT(~)

console.log(!true); //false
console.log(!false); //true

//<------------------------------------------------>

/* Bitwise operator */ 

// Bitwisw AND(&)

console.log(2 & 5); //0
console.log(5 & 7); //5
console.log(5 & 3); //1

//Bitwise OR(|)

console.log(2 | 5); //7
console.log(2 | 3); //3
console.log(1 | 7); //7

// Bitwise NOT(~)

console.log(~0); // -1
console.log(~(-5)) // 4

//Bitwise XOR(^)

console.log(2 ^ 2); // 0
console.log(3 ^ 1); // 2

//leftShift (<<) *multiply no.of times with '2'*

console.log(5 << 1); // 10 (5*2**1)
console.log(7 << 3); // 56 (7*2**3)
console.log(1 << 2); //4 (1*2**2)

//rightShift (>>) *divide no.of times with '2'*

console.log(8 >> 2); // 4 (8/2**2)
console.log(15 >> 2); // 3(15/2**2)
console.log(7 >> 1); // 3(7/2**1)

//<------------------------------------------------>