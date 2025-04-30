//Callbacks


// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi!");
// }
// doSomething(sayHi);

// function judge(grade){
//     switch (true){
//         case grade == "A":
//             console.log("You got an", grade,":amazing!");
//             break;
//             case grade == "B":
//             console.log("You got an", grade,":well done!");
//             break;
//             case grade == "C":
//             console.log("You got an", grade,":alright!");
//             break;
//             case grade == "D":
//             console.log("You got an", grade,":hmm...!");
//             break;
//             default:
//                 console.log("An",grade,"! What?!")
            
            
//     }
// }
// function getGrade(score, callback){
//     let grade;
//     switch(true){
//         case score >=90:
//         grade = "A";
//         break;
//         case score >=80:
//         grade = "B";
//         break; 
//         case score >=70:
//         grade = "C";
//         break; 
//         case score >=60:
//         grade = "D";
//         break;
//         default:
//             grade ="F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);



//Promises
// This function needs two arguments, and these paramters are callbacks. We have called them resolve and reject Headers.
// When resolve() is Called, the promise is persumed to be successful and whatever is between the arrows the arrows is \
// returned and used as input for the then method on the Promise Object. 

// let promise=new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("too low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("success:",value);
//     },
//     function(error){
//         console.log("error:",error);
//     }
//     );

    const promise = new Promise((resolve, reject) =>{
        resolve("success!")
    })

    .then(value =>{
        console.log(value);
        return "we";
    })
    .then(value =>{
        console.log(value);
        return "can";
    })
    .then(value =>{
        console.log(value);
        return "chain";
    })
    .then(value =>{
        console.log(value);
        return "promises";
    })
    .then(value =>{
        console.log(value);
    })
    .catch(value =>{
        console.log(value);
    })




