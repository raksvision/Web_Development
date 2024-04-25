//Global scope: 

var age = 23;


console.log(age);

{
    console.log(age);

}

if(true){
    console.log(age);
}

for (let i=0; i<=2; i++){
    console.log(age);
}

function sayHello(){
    console.log("Hello ", age );
}

sayHello();//Hello 23

//<------------------------------>

//Function scope:
//console.log(fullName); //ReferenceError
function sayGreet(){
    let fullName = "Rakesh";
    console.log("Hi! ",fullName);
}

sayGreet();//Hi!  Rakesh


//<-------------------------->

//Block Scope

{
    var num = 65;
}
console.log(num); //65

{
    let book = "Dream";
}

//console.log(book);//ReferenceError

{
    const val = "love";

}

console.log(val);//ReferenceError

//<------------------------->