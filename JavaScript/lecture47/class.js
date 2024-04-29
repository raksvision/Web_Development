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