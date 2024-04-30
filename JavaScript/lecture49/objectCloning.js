/* Object Cloning */

//spread operator(...)
let person = {
    name:"Rakesh",
    age:23,
    mobile:"Realme",
};

let person1 ={...person};

person1.name = "Sai";
person1.mobile = "Redmi";

console.log(person);//{ name: 'Rakesh', age: 23, mobile: 'Realme' }

console.log(person1);//{ name: 'Sai', age: 23, mobile: 'Redmi' }    



//assign
let captial ={
    AP : "Vizag",
    Tel : "Hyderabad",
    Kar : "Banglore"
}

let captial1 = Object.assign({},captial);

captial1.AP = "Kurnool";

console.log(captial);//{ AP: 'Vizag', Tel: 'Hyderabad', Kar: 'Banglore' }

console.log(captial1);//{ AP: 'Kurnool', Tel: 'Hyderabad', Kar: 'Banglore' }


//iterations
let person2 ={};
for (let key in person){
    let newKey = key;
    let newValue = person[key];
    person2[newKey]= newValue;
};

person2.name = "Manikanta";

console.log(person);//{ name: 'Rakesh', age: 23, mobile: 'Realme' }

console.log(person2);//{ name: 'Manikanta', age: 23, mobile: 'Realme' }
