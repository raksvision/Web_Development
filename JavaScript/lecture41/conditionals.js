/* simple if-statement */

let age = 25;
if(age >=18){
    console.log("You can Vote");
}

let str = "Rakesh";
if(str.length >= 3){
    console.log("Your name " + str + " is Perfect.");
}

//<---------------------------------------------------->

/* if-else statement */

if(age >= 18){
    console.log("You can Vote");
}
else{
    console.log("You can'nt Vote");
}

let marks = 35;
if(marks >= 25){
    console.log("Pass")
}
else{
    console.log("Fail")
}

//<---------------------------------------------------->\

/* nested if statement */

let num = 3;

if(num == 1){
    console.log("A")
}
else if(num == 2){
    console.log("B")
}
else if(num == 3){
    console.log("C")
}
else if(num == 4){
    console.log("D")
}
else if(num == 5){
    console.log("E")
}
else if(num == 6){
    console.log("F")
}
else{
    console.log("None")
}

let weight = 70;

if(weight > 75){
    console.log("You are Overweight");
}
else if(weight>50 && weight <= 75){
    console.log("You are Fit");
}
else{
    console.log("You are Underweight")
}
//<---------------------------------------------------->

