//<Numbers>//

let intNum = 25;
console.log(typeof(intNum)); //number

let floatNum = 25.15;
console.log(typeof(floatNum)); //number
 
//<----------------------------------------->//

let strNum = "25";

let strFloat = "35.15";

let parsedInt = parseInt(strNum);
let parsedFloat = parseInt(strFloat);

console.log(parsedInt); // 25
console.log(parsedFloat); //35 

//<------------------------------------------->//

let num1 = 13;
let num2 = 10;

let sum = num1 + num2;
console.log(sum); //23

let product = num1*num2;
console.log(product); //130

let quotient = num1/num2;
console.log(quotient); //1.3

//<------------------------------------------->//

//<Strings>

let string1 = "Mobile";
let string2 = "Charger"

let finalSentence = string1 + " and " + string2 + "!";
console.log(finalSentence); // 

//<------------------------------------------->//

let str11 =  "Namaste";
console.log(typeof(str11));      // string

let str12 = 'Namaste';
console.log(typeof(str12));      // string

let str13 = `Namaste`;
console.log(typeof(str13));      // string

//<------------------------------------------->//

/*Methods in strings*/

let message = "Hello coders";

let messageLength = message.length;
console.log(messageLength);        // 12
//<------------------------------------------->//
let message2 = "Hello coders";

let upperCaseMessage = message2.toUpperCase();
console.log(upperCaseMessage);    // HELLO CODERS

let lowerCaseMessage = message2.toLowerCase();
console.log(lowerCaseMessage);    // hello coders
//<------------------------------------------->//

let message3 = "Hello coders";

let substr1 = message3.substring(2, 8);
console.log(substr1);          // llo co

let substr2 = message3.substring(3);
console.log(substr2);         // lo coders

//<------------------------------------------->//

let message4 = "Once upon a time";

let splittedArray = message4.split(" ");

console.log(splittedArray);

/*
Output
[ 'Once', 'upon', 'a', 'time' ]
*/

//<------------------------------------------->//

let array = ["India", "is", "the", "best"];

let message11 = array.join(" ");
console.log(message11);

//Output : India is the best

let message12 = array.join();
console.log(message12);

//Output : India,is,the,best

//<------------------------------------------->//

/*Boolean Datatype*/

let isSleeping = true;
let isRunning = false;

if (isSleeping){
    console.log("He is Sleeping");
}

else{
    console.log("He is Running");
}
/* Output: He is Sleeping */
//<------------------------------------------->//

let x1 = 25;
let y1 = 30;

let isGreater = x1 > y1;
console.log(isGreater); // false

//<------------------------------------------->//

/* Undefined */

let name;

console.log(typeof(name)); //undefined

let marks;;

console.log(typeof(marks)) //undefined



//<------------------------------------------->//

/* Null */

let life = null;

console.log(typeof(life)); //object

//<------------------------------------------->//

/* String methods */

//length

let name1 = "Rakesh Bestha";

let strLength = name1.length;
console.log(strLength); //13

//uppercase

let strUpper = name1.toUpperCase();
console.log(strUpper); // RAKESH BESTHA

//lowercase
let strLower = name1.toLowerCase();
console.log(strLower); //rakesh bestha

//split
let strSplit = name1.split(" ");
console.log(strSplit); // [ 'Rakesh', 'Bestha' ]

//join

let array1 = ["Rakesh", "is", "Learning", "Webdevelopment"];
let joinArray = array1.join(" ");
console.log(joinArray); // Rakesh is Learning Webdevelopment
let joinArray1 = array1.join();
console.log(joinArray1); // Rakesh,is,Learning,Webdevelopment


//subString(startingindex,endingIndex)

let subStr1 = name1.substring(4,10);
console.log(subStr1); //sh Bes

console.log(name1.substring(2,11));  // kesh Best

console.log(name1.substring(5)) // h Bestha