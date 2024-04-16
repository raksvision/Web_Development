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

for (let i=1;i<=5;i++){
    if(i==3)
        continue;
    else
        console.log(i);
}//output: 1,2,4
//it skip that particular iteration, when the condition is true and then move to the next iteration

//<------------------------->
//H.W
/* let x ;
for( ; ;){
    console.log(x);
}//here the output will be undefined, infinitly 
so, the intialization,condition,updation is imp for executing the proper for loop
*/

//<------------------------->


/* while loop */

let i = 1;
while(i<=5){
    console.log(i);
    i++; // if we do'nt write the updation then the value prints infinitly
}
//Output: 1,2,3,4,5

//<------------------------->
