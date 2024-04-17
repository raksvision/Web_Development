/* functions */

//function definition
function sayMyName(){
    console.log("Rakesh");
}

//function use - function call
sayMyName(); // Rakesh

//conting numbers

function count(){
    for (let i=1;i<=100;i++){
        console.log(i);
    }
}

count();//Output : prints numberr from 1 - 100

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

// return statement

function getSum(a,b,c){
    let sum = a+b+c;
    return(sum);
}

let ans = getSum(1,2,3);
console.log(ans);//6

console.log(getSum(4,6,8));//18
console.log(getSum(7,23,12));//42


function getMyName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}

let fullName = getMyName("Rakesh","Bestha")
console.log(fullName);// Rakesh Bestha

console.log(getMyName("Rajesh","Chakali"));// Rajesh Chakali
console.log(getMyName("Sainath","Dasari"));//Sainath Dasari