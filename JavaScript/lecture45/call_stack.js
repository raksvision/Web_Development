/* Function Call Stack */

function f1 (){
    console.log("Hello by f1!");
}

function f2(){
    f1();
    console.log("Hello by f2!");
}

f2();

/* Output:

Hello by f1!
Hello by f2!

*/