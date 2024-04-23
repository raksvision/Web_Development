/* For - of */ //it is used to iterate for arrays ,strings etc...

let fullName = "Rakesh Bestha";
for (let x of fullName){
    console.log(x);
}
/* Output:
R
a
k
e
s
h
 
B
e
s
t
h
a

*/
//<-------------------->
/* ForEach: */ //it is similar to the nrmal for loop 

const arr = ["a","b", "c"];
arr.forEach((ele) => {
    console.log(ele);
});

/*Output :
a
b
c
*/
//<------------------------->

/* for-in */ // it itrates over a object 

let obj = {
    name : "Rakesh",
    age : 23,
    height : 5.8,
};

for(let x in obj){
    console.log(x," ", obj[x]);
}

/*Output :

name   Rakesh
age   23
height   5.8

*/
