//Create a Map


// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200],
// ]);
// console.log(fruits);

// const fruits = new Map(); //Set Map Values
//    fruits.set("apples",500);
//     fruits.set("bananas",300);
//     fruits.set("oranges",200);
//     console.log(fruits.get(apple));

//JavaScript Map Methods
//  const fruits = new Map(); //Set Map Values
//      fruits.set("apples",500);
//      fruits.set("bananas",300);
//      fruits.set("oranges",200);
    //  console.log(fruits.get("apples"));
    //  console.log(fruits.size);
    //  console.log(fruits.delete("apples"));
    //  console.log(fruits.clear());
    //  console.log(fruits.has("mango"));
    // let text = "";
    // fruits.forEach(function(value,key){
    //     text+key+'='+value;
    // })

    // let text ="";
    // for(const x of fruits.entries()){
    //     text+=x;
    //     console.log(text);
    // }

    // const apples = {name:'Apples'};
    // const bananas = {name:'Bananas'};
    // const oranges = {name:'Oranges'};

    // const fruits = new Map();
    // fruits.set(apples,500);
    // fruits.set(bananas,300);
    // fruits.set(oranges,200);
    // fruits.get("apples");

    // const fruits = [
    //     {name:"apples",quantity:300},
    //     {name:"bananas",quantity:500},
    //     {name:"oranges",quantity:200},
    //     {name:"kiwi",quantity:150}
    // ];
    // function myCallback({quantity}){
    //     return quantity>200?"ok":"low";
    // }
    // const result = Map.groupBy(fruits,myCallback);
    // console.log(result);
   
// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// };
// let{firstName,lastName}=person;
// let{firstName,lastName,country="U.S"}=person
// let{lastName:name}=person;
// console.log(name);



//String Destructuring



// let name = "GurukulTheSchools";
// let [a1,a2,a3,a4,a5]=name;
// console.log(name);

// const fruits = ["Bananas","Oranges","Apples","Mangos"];
// let[fruit1,,,fruits2]=fruits;
// console.log(fruits);
// let{[0]:fruit1 , [1]:fruit2}=fruits;
// console.log(fruits);

// const numbers = [10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers
// console.log(numbers);

//Create a Map
// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
// let text = "";
// for(const[key,value]of fruits){
//     text+=key+"is"+value;
// }
// console.log(text);

// let firstName = "John";
// let lastName = "Doe";
// [firstName,lastName]=[lastName,firstName];
// console.log(firstName);

// let x = 5;
// x**=2;
// console.log(x);



//JavaScript Array includes()


// const fruits = ["Banana","Oranges","Apples","Mango"];
// fruits.includes("Mango");
// console.log(Mango);
// const fruits = ["Banana","Oranges","Apples","Mango"];
// fruits.includes("Banana",3);
// console.log(Mango);


//Trailling Commaconst 



// const arr=[
//     "one",
//     "two",
//     "three",
// ];
// console.log(arr);
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);

// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr.length);

// const sparseArray = [1,,,4,5,,];
// console.log(sparseArray);

const person = {
    firstName:"John",
    ,
    age:30,
}
console.log(person);
