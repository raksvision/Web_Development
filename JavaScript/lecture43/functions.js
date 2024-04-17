/* functions */

//function definition
function sayMyName(){
    console.log("Rakesh");
}

//function use - function call
sayMyName(); // Rakesh

//<-------------------------------------->

//conting numbers

function count(){
    for (let i=1;i<=100;i++){
        console.log(i);
    }
}

count();//Output : prints numberr from 1 - 100

//<-------------------------------------->

//using parameters and arguments

function printNumber(num){
    console.log("Printing Number:",num)
}

printNumber(2);//Printing Number: 2

function getAverage(num1,num2){
    let avg = (num1+num2)/2;
    console.log(avg);
}

getAverage(10,54);//32
getAverage(17,12);//14.5
getAverage(5,78);//41.5

//<-------------------------------------->

// return statement

function getSum(a,b,c){
    let sum = a+b+c;
    return(sum);
}

let ans = getSum(1,2,3);
console.log(ans);//6

console.log(getSum(4,6,8));//18
console.log(getSum(7,23,12));//42

//<-------------------------------------->

function getMyName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}

let fullName = getMyName("Rakesh","Bestha")
console.log(fullName);// Rakesh Bestha

console.log(getMyName("Rajesh","Chakali"));// Rajesh Chakali
console.log(getMyName("Sainath","Dasari"));//Sainath Dasari

//<-------------------------------->

//function expression

let getSquare = function (x){
    return(x**2);
}

console.log(getSquare(5));//25

//<-------------------------->

let getMsg = function (name){
    return (`Hello ${name}`);
}

console.log(getMsg("Rakesh"));//Hello Rakesh

//<-------------------------->

//Arrow functions

let getExp = (a,b) => {
    return (a**b);
}

console.log(getExp(2,10)); //1024

let getMutiples = (x) => {
    for (i=1;i<=10;i++){
        return(x + "x" + i + "=" + x*i);
    } 
}
console.log(getMutiples(2));
//2x1=2

let getMutiple = (x) => {
    for (i=1;i<=10;i++){
        console.log(x + "x" + i + "=" + x*i);
    } 
}
getMutiple(2);
/* Output:
2x1=2
2x2=4
2x3=6
2x4=8
2x5=10
2x6=12
2x7=14
2x8=16
2x9=18
2x10=20
*/

//Here the Diff b/w above two code is,
//the first code executes only 1 iteration because we used return., this may skip the following iterations
//but in second code it complte the all the iterations and prints without skiping any iteration 