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


// class Person{
//     constructor(firstname, lastname){
//          this.firstname = firstname;
//          this.lastname = lastname;
//  }
// greet(){
//     console.log("Hi there");
// }

// compliment(name,object){
//     return "That's a woderful" + object+","+name;
// }
// }
// let compliment = package.compliment("Harry", "hat");
// console.log(compliment);


//Properties

// class person{
//     #firstname;
//     #lastname; 
// constructor(firstname, lastname){
//     if(firstname.startWith("M")){
//         this.#firstname = firstname;
//     }else{
//         this.#firstname = "M" + firstname;
//     }
//     this.#lastname = lastname;
// }
// let p = new person("kay", "Moon");

// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         this.#firstname = firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Navya","Chaudhary");
// console.log(p.firstname)


//Inheritance

// class Vehicle{
//     constructor(color, currentSpeed, maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//       console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color, currentSpeed, maxSpeed, fuel){
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel!");
//     }
// }
// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);

// motor.accelerate(50);
// motor.move();

//We cannot access any motorcycle specific properties or methods in our vehicle class.

//Prototypes
class Person{
  constructor(firstname, lastname){
   this.firstname = firstname;
   this.lastname = lastname;
     }
    greet(){
        console.log("Hi there");
    }
}
Person.prototype.introduce = function(){
    console.log("Hi, I'm", this.firstname);
};
Person.prototype.favoriteColor = "green";
let p = new Person("Navya", "Chaudhary");
console.log(p.favoriteColor);
p.introduce();