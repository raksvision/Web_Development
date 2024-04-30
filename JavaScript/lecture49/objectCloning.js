let person = {
    name:"Rakesh",
    age:23,
    mobile:"Realme"
};

let person1 ={...person};

person1.name = "Sai";
person1.mobile = "Redmi";

console.log(person);
console.log(person1);