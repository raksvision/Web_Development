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

/* switch statement */

let num1 = 5;

switch(num1){
    case 1 : console.log("A");
    break;
    case 2 : console.log("B");
    break;
    case 3 : console.log("C");
    break;
    case 4 : console.log("D");
    break;
    case 5 : console.log("E");
    break;
    default : console.log("None");
}

let name1 = "Lokesh"
switch (name1){
    case "Rakesh" : console.log("Dancer");
    break;
    case "Rajesh" : console.log("Athelet");
    break;
    case "Manoj" : console.log("CISF");
    break;
    case "Lokesh" : console.log("IT-Employee");
    break;
    default : console.log("No One");
    
}
//<---------------------------------------------------->