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
 const fruits = new Map(); //Set Map Values
     fruits.set("apples",500);
     fruits.set("bananas",300);
     fruits.set("oranges",200);
    //  console.log(fruits.get("apples"));
    //  console.log(fruits.size);
    //  console.log(fruits.delete("apples"));
    //  console.log(fruits.clear());
    //  console.log(fruits.has("mango"));
    // let text = "";
    // fruits.forEach(function(value,key){
    //     text+key+'='+value;
    // })

    let text ="";
    for(const x of fruits.entries()){
        text+=x;
        console.log(text);
    }
   
