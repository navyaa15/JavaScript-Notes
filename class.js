//Classes and Objects
// class ClassName{
//     consructor(prop1, prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop1;
//     }
// }
// let obj = new ClassName("arg1","arg2");

//This keyword refers to the object it belongs to so it is the first property of the instance of the ClassName.

// class Dog{
//     constructor(dogName, weight, color, breed){
//         this.dogName = dogName;
//         this.weight =  weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");

// class Person{
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("Maaike", "van Putten");
// console.log("Hi", p.firstname);

//Methods
//Function on a classare called methods. when defining these methods we do not use functions keyword. we start directly with the name.

// class Person{
//        constructor(firstname, lastname){
//             this.firstname = firstname;
//             this.lastname = lastname;
//     }

// greet(){
//     console.log("Hi there!" I'm", this.firstname);
// }
// }


class Person{
    constructor(firstname, lastname){
         this.firstname = firstname;
         this.lastname = lastname;
 }
greet(){
    console.log("Hi there");
}

compliment(name,object){
    return "That's a woderful" + object+","+name;
}
}
let compliment = package.compliment("Harry", "hat");
console.log(compliment);