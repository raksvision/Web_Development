class Human{
    //propreties
    #name = "Rakesh";
    age = 23;
    weight = 80;
    height = 180;
    //functionalities
walking(){
    console.log("I am Walking");
}
call(){
    console.log("Hello",this.#name)
}
running(){
    console.log("I am Running");
}

}

let a = new Human;
console.log(a.age);
a.call();//Hello Rakesh
//console.log(a.#name);//private field can't access outside the class
console.log("------------------------------------------");
//<--------------------------->

/* getter & setter in class*/

class Student{
    firstName = "Rakesh";

    get getName(){
        return this.firstName;
    }

    set setName(newName){
        this.firstName = newName;
    }
}

let student = new Student();

console.log(student.firstName);//Rakesh

console.log(student.getName);//Rakesh

student.setName = "Sainath";

console.log(student.firstName);//Sainath

//<-------------------------------->

/* constructors */

class Person{
    constructor(name){
        this.name = name;
    }
    introduce(){
        console.log(`Hello!, My Name is ${this.name}`);
    }
}

let greet = new Person("Rakesh");

greet.introduce();
//Hello!, My Name is Rakesh

//<----------------------------------->



//default values in functions

function sayName(fName,lName){
    console.log(`My Name is: ${fName} ${lName}`);
}

sayName();
//My Name is: undefined undefined

function fullName(fName = "Rakesh",lName = "Bestha"){
    console.log(`My Name is: ${fName} ${lName}`);
}

fullName();
//My Name is: Rakesh Bestha

fullName("Charan","Teja")
//My Name is: Charan Teja

fullName("Charan")
//My Name is: Charan Bestha

function myName(fName = "Rakesh",lName = fName.toUpperCase()){
    console.log(`My Name is: ${fName} ${lName}`);
}

myName();
//My Name is: Rakesh RAKESH

myName("Charan")
//My Name is: Charan CHARAN

myName("Sainath","Dasari")
//My Name is: Sainath Dasari