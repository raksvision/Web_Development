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

