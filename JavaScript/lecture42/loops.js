/* for loop */

for(let i=1; i<=10;i++){
    console.log("Rakesh");
}//prints Rakesh 10 times

//<------------------------->
//counting number

for (let i=1;i<=5;i++){
    console.log(i);
}//prints 1,2,3,4,5

//<------------------------->
//reverse counting

for (let i=5; i>0 ;i--){
    console.log(i);
}//prints 5,4,3,2,1

//<------------------------->
//using break 

for (let i=1;i<=5;i++){
    if(i==4)
        break;
    else
        console.log(i);
}//Output: 1,2,3
//it skips the entire loop, when the condition is true

//<------------------------->
//using continue

for (let i=1;i<=4;i++){
    if(i==3)
        continue;
    else
        console.log(i);
}//output: 1,2,4
//it skip that particular iteration, when the condition is true and then move to the next iteration





//<------------------------->





//<------------------------->