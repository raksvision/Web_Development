/* Function Call Stack */

function f1 (){
    console.log("Hello by f1!");
}

function f2(){
    f1();
    console.log("Hello by f2!");
}

f2();

/* Output:

Hello by f1!
Hello by f2!

*/


//Function call stack//

//1.assign as a variable:

let greet = function(){
    console.log("Hello EveryOne");
}
greet();//Hello EveryOne

//<------------------------------>

//2.as a argument:

function greetMe(say,fullName){
    console.log("Hello ", fullName);
    say();
}

function say(){
    console.log("Hi!");
}

greetMe(say,"Rakesh") //execution starts from here..

// Hello Rakesh
// Hi!

//3. return function

function solve(){
    return function(num){
        return num * num;
    }
}

let ans = solve(5); //here it enter to the return, saves the variable into the 52 line function 
console.log(ans(10)) //then, here it enter into another return statement and gives the final answer.

//100
//<-------------------------->

//4. using in Data Structure:

const arr = [
    function(a,b){
        return a+b;
    }, //index [0]
    function(a,b){
        return a-b;
    },//index [1]
    function(a,b){
        return a*b;
    }//index [2]
];

let sum = arr[0];
let sub = arr[1];
let multi = arr[2];
console.log(sum(5,15));//20
console.log(sub(25,8));//17
console.log(multi(7,12));//84


