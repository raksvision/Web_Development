/* Object */

let obj = {
    name : "Rakesh",
    age : 23,
    weight : 78,
    lastName : "Bestha",
    work : function(){
        console.log("Iam Going to Work");
    }

}

console.log(obj);
obj.work();//Iam Going to Work
console.log(typeof(obj));// object

//<---------------------------->

/* Array */

//array creation 

let arr = [1,2,3,4];
console.log(arr);
console.log(typeof(arr)); //object

//<----------------------->

let array = ["Rakesh", true, "Bestha", 35];
console.log(array);
//indexing in array
console.log(array[0]); // Rakesh
console.log(array[2]); // Bestha


//array constructor

let arr1 = new Array("Charan",20,"B.Tech")
console.log(arr1);

//Built in Methods of arrays

console.log(arr1.indexOf(20));//1
arr1.push("Pass");
console.log(arr1); // adds "Pass" at the end of the array

//<-------------------------------->

console.log(array); // removes the last element from the array
array.pop();
console.log("after pop");
console.log(array); // removes the last element from the array

//<---------------------------->
//.shift() : removes the first element from the array
arr1.shift("Bestha");
console.log(arr1);