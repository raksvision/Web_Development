/* strings */

let firstName = "Rakesh";
let lastName = "Bestha";

console.log(firstName + lastName); //RakeshBestha
//also
console.log(`${firstName} ${lastName}`); //Rakesh Bestha

console.log(typeof(firstName));//string
console.log(typeof(lastName));//string

//<------------------------------->
// to print multiple line, we use backticks(``)

let desc = `Here is 
the proper description
of the code.`

console.log(desc);//it prints as you type in your code editor
console.log(typeof(desc));//string

//<------------------------>

/*

let firstName = "Rakesh"; is String primitive, this is Immutable, these are Stored in the Memory directly.
where as 
let firstName = new String("Rakesh"); is String Object, this is Mutable, this not Efficient for Memory Management when compare to String Primitives.

*/



//<---------------------------->
/* Built-in Methods in Strings */

//length:

console.log(firstName.length);//6
console.log(desc.length);//44

//toUpperCase():

let str1 = "my name";
console.log(str1.toUpperCase());// MY NAME

console.log(firstName.toUpperCase());// RAKESH

//toLowerCase():

let toLower = "THIS IS A CODE"
console.log(toLower.toLocaleLowerCase());// this is a code

//substring():

console.log(toLower.substring(5)); // IS A CODE
console.log(str1.substring(1,5)); // y na
console.log(firstName.substring(2,6)); //kesh

//split():

console.log(toLower.split(" "));
//[ 'THIS', 'IS', 'A', 'CODE' ]

console.log(desc.split(" "));
//[ 'Here', 'is', '\nthe', 'proper', 'description\nof', 'the', 'code.' ]

//join():
 
let array = [ 'THIS', 'IS', 'A', 'CODE' ];
console.log(array.join(" "));
// THIS IS A CODE