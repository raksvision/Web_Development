//Error is an event that impacts or disrepts the flow of execution of the code.
/*
compile time error
console.log("Rakesh";
SyntaxError



runtime error

console.log(x);

ReferenceError: x is not defined
*/
//<-------------------->

//Handling
/*
try{
    console.log("Block Start Here");
    console.log(x);
    console.log("Block ends here");
}
catch(e){
    //custom error
    console.log("Now Inside the Catch block");
    console.log("The Error is:", e);//Reference Error
}
*/


//Final block; it will run everytime even the error is occured

/*
try{
    console.log("Try Block Start");
    console.log(x);
    console.log("Try Block End");
}

catch(e){
    console.log("Enters Catch block");
    console.log("The Error is:", e);
}

finally{
    console.log("It is the final block, it will print in any situation");
};//it will print after error throw

*/
//<----------------->

//throw in error handling: for custom errors

/*
try
{
 console.log(value);
}

catch(e){
    throw new Error("Declare the Value First")
}//Error: Declare the Value First
*/
//<------------------------>

let error = 100;
if(error==100){
    throw new Error("Invalid Json");
}//Error: Invalid Json