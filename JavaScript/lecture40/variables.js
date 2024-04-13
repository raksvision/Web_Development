// var age = 25;


// if(true){
//     console.log(age);
// }

//<------------------------->

// function solve() {
//     var age = 20;
//     var age = 30;
//     console.log(age);

// }

// // we can't use this variable out side of the fuctionn or else it may give error "age is not defined"


// solve();

//<------------------------->
//Reassignment using var:-

/*
var x = 39;
console.log(x); // Output:39

x = "Rakesh";
console.log(x);  // Output:Rakesh

//<------------------------->
//Redefining using var;-

var x = 20;
console.log(x); // Output:20

var x = "Rakesh";
console.log(x); // Output:Rakesh

console.log("--------------------------------------")
//<------------------------->

let a = 25;
console.log(a); //25

a = "Rajesh"
console.log(a); //Rajesh

//<------------------------->

let num1 = 10;
if (true){
    let num2 = 20;
    console.log(num1); //10
    console.log(num2); //20
    }

console.log(num1); //10
console.log(num2); //num2 not defined

console.log("--------------------------------------")
*/
//<------------------------->
/*
const a = 54;

console.log(a); // 54

a = "Rakesh";
console.log(a); // Assiagnment to constant variable
*/
//<------------------------->

const person ={
    name: "Salaar",
    age : 32,
    city : "Khansar"
}

console.log(person.name); // Salaar
console.log(person.age); // 32
console.log(person.city); // Khansar

//Reassigning the variable

person = {
    age:38
}

console.log(person); //TypeError: Assignment to constant variable.

//<------------------------->
