/* Function Hoisting */

sayMyName("Rakesh")

function sayMyName(name){
    console.log(name);
}
//Rakesh


/* Variable Hoisting */

console.log(age);

var age = 23;

//prints 'undefined' 
//instead of showing error

//<--------------------------->

//Variable Hoisting is not done in the following ways, and prints Reference Error

//1.by using const and let declarations
// console.log(name1);
// const name1 = "Rakesh";
//ReferenceError: Cannot access 'name1' before initialization

console.log(lName);
let lName = "Bestha"
//ReferenceError: Cannot access 'lName' before initialization
