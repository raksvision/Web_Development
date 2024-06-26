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

//<------------------>
//.unshift() : adds elements at the starting of the array

arr1.unshift("CharanSai")
console.log(arr1);

//<---------------------->
//.slice(stratIndex, endIndex)
console.log(array.slice(0,2));//[ 'Rakesh', true ]

//<-------------------->
//.splice(index,howMany,values to replace)

array.splice(1,2, 45 ,41);
console.log(array); //[ 'Rakesh', 45, 41 ]


console.log(array.splice(0,"Splice", 65));
//<---------------->

//map()

let array1 = [10,20,30,40];

let multiAns = array1.map((num) => {
    return num *num;
})
console.log(multiAns); //[ 100, 400, 900, 1600 ]

//also we can print the index of the value in the array

let arrIndex = array1.map((num,index) =>{
    console.log(num);
    console.log(index);
})

/* Output */

/*
10
0
20
1
30
2
40
3
*/

////<------------------------>

/* filter(): */

let array2 = [1,2,3,4,5,6];
let filtArray = array2.filter((num) => {
    return num%2 == 0;
});

console.log(filtArray); // [ 2, 4, 6 ]

let oddArray = array2.filter((num) => {
    return (num % 2 == 1);
});

console.log(oddArray);// [ 1, 3, 5 ]

let list = [10,20,"Rakesh","Charan", null];

let strArr = list.filter((value) => {
    return (typeof(value) === "string"); // here loose equality(==) does not works
});
let numArr = list.filter((value) => {
    return (typeof(value) === "number"); 
});
let Arr = list.filter((value) => {
    return (typeof(value) === "null"); 
});


console.log(Arr);//[]
console.log(numArr);// [ 10, 20 ]
console.log(strArr);// [ 'Rakesh', 'Charan' ]

//<------------------------------>
/*reduce(): */

let ls = [10,20,30,40];

let ans = ls.reduce((acc,curr) =>{
    return acc+curr;
}, 0);

console.log(ans); // 100

//<---------------------------------->
/* sort() */

let fruits = ["Pineapple", "Mango", "Grapes", "Orange"];
fruits.sort()  //["Grapes", "Mango", "Orange", "Pineapple"]
fruits.reverse(); // ["Pineapple", "Orange", "Mango", "Grapes"]

console.log(fruits);

//<-------------------------------->

let number = [1,5,7,9,3,4,6]

number.sort();
console.log(number); // [1, 3, 4, 5,6, 7, 9]
number.reverse();
console.log(number); // [9, 7, 6, 5,4, 3, 1]

console.log(number.indexOf(6)); //2
console.log(number.indexOf(3)); //5
console.log(number.indexOf(4)); //4

//<---------------------------------->
/* find() */

let age = [16,21,25,31];

let checkAge = age.find((Age) => {
    return Age >= 26;
});

console.log(checkAge); // 31

//<---------------------------------->




//<---------------------------------->

/* Arrays with Functions */

let array3 = [10,20,30,40,50];

function getSum(array3){
    let len = array3.length;
    let sum = 0;
    for (let i =0; i< len ; i++){
        sum = sum + array3[i];
    }
    return sum;

};

console.log(getSum(array3)); //150