//
//
// Pull requests
// Issues
// Marketplace
// Explore
//  @arasharghavan
// Watch 8
// Star 4  Fork 0 CodeupClassroom/zion-web-exercises
// Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
// Browse files
// add objects lecture notes
// master
// @jreich5
// jreich5 committed 2 hours ago
// 1 parent 2fc1869 commit ee0e49e32609090c2ed7041bdda1777c92d7006b
// Unified Split
// Showing  1 changed file  with 311 additions and 0 deletions.
//     View file
// 311  objects-intro-complete.html
// @@ -0,0 +1,311 @@
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Objects Intro</title>
// </head>
// <body>
//
// <h1>Intro to Objects</h1>
//
// <script>
// "use strict";
//
// // Object Defined
//
// // Like a named index array
// // Often used to store related state and behavior
// // Where arrays are good for storing lists of data, objects store related aspects of a greater structure
// // We have already used objects: String, Array, Math, Number
//
//
// // Custom Objects (dog, user, forecast, dictionaryEntry, movie, post, etc.)
//
//
// // New Object Instance
//
// var dog = new Object();
//
// console.log(typeof dog);
//
//
// // Object Literal Notation
//
// var cat = {};
//
// console.log(typeof cat);
//
// // Setting Properties on a Custom Object
//
// // create a pet object that has the following properties...
// // name
// // age
// // species
// // hasOffspring
// // valueInDollars
//
// var pet = {};
//
// pet.name = "Sparkles";
// pet.age = 12;
// pet.species = "turtle";
// pet.hasOffspring = true;
// pet['value-in-dollars'] = 400;
//
// console.log(pet);
//
//
// var pet2 = {
//     name: "Lexie",
//     age: 5,
//     species: "dog",
//     hasOffspring: false,
//     valueInDollars: 'priceless'
// };
//
//
// // Peeking into an Object
//
// console.log(pet);
//
//
// // Accessing Properties on an Object
//
// console.log(pet.name);
// console.log(pet2.name);
// console.log(pet2['name']);
//
// pet.name = "Sabrina";
//
//
//
// // Removing Properties
//
// console.log(pet2.name);
// delete pet2.name;
// console.log(pet2.name);
//
//
// // Nested Values
//
// // Add the following to a pet object...
// // altNames
// // vitals: averageTemp, restingHeartRate, isHungry
//
// var pet3 = {
//     name: "Bowser",
//     age: 6,
//     species: "dog",
//     hasOffspring: false,
//     valueInDollars: 'priceless',
//     altNames: [
//         'Bowser Boy',
//         'Bowser Man',
//         'Bowser Buddy',
//         'Puggle Wuggle Boy'
//     ],
//     vitals: {
//         averageTempDegF: 101,
//         restingHeartRate: 80,
//         isHungry: true
//     }
// };
//
// // log if Bowser is hungry
// // log Bowser's average heartRate
// // log Bowser's most recent alternative name
// // change age to 7 and isHungry to false
//
// // MINI EXERCISE 1
//
// // Arrays of Objects... (users)
//
//
// var users = [
//     {
//         name: "Sam",
//         age: 21
//     },
//     {
//         name: "Cathy",
//         age: 34
//     },
//     {
//         name: "Karen",
//         age: 43
//     }
// ];
//
//
// // MINI EXERCISE 2
//
//
// // Assigning Functionality to an Object
//
// var pet4 = {
//     name: "Pickles",
//     age: 20,
//     species: "horse",
//     eat: function (food) {
//         console.log("nom nom nom " + food);
//     },
//     gallop: function() {
//         console.log("THUNK THUMP...THUNK THUMP!");
//     }
// };
//
// pet4.eat("carrots");
// pet4.gallop("carrots");
//
//
// // MINI EXERCISE 3
//
//
// // Copying an Object Reference
//
// var somePet = pet4;
// somePet.age = 1;
// console.log(pet4.age);
//
//
// // Copying Object Property Values
//
// var petCopy = Object.create(pet4);
// petCopy.name = "Fred";
// console.log(pet4.name);
// console.log(petCopy.name);
//
//
// // Comparing Objects
//
// console.log(pet4 === petCopy);
// console.log(pet4 === somePet);
//
//
// // Getting a List of Object Keys as an array
//
// console.log(Object.keys(pet4));
//
//
// // The this Keyword
//
// var pet6 = {
//     name: "Sparky",
//     age: 3,
//     getOlder: function() {
//         console.log(this.age);
//         this.age += 1;
//     }
// };
//
// console.log(pet6.age);
// pet6.getOlder();
// console.log(pet6.age);
//
//
// // why use this vs. the object name: https://stackoverflow.com/questions/12799702/javascript-this-versus-object-name
//
// function getUserObject() {
//     var user = {};
//     user.name = prompt("What is your name?");
//     user.age = prompt("How old are you?");
//     user.checkIfMinor = function (ageOfAdult) {
//         return this.age >= ageOfAdult;
//     };
//     return user;
// }
//
// var loggedInUser = getUserObject();
//
// alert("Hi, " + loggedInUser.name + "!");
//
// var message = loggedInUser.checkIfMinor(18) ? "You are an adult" : "You are a minor";
//
// alert(message);
//
//
// // this (other cases)
//
// // =================== Example 1 - using this in the global scope
//
// // console.log(this); // global Window object in the browser
//
//
// // =================== Example 2 - using this inside a function
//
// // function thisTest() {
// //     console.log(this);
// // }
// //
// // thisTest(); // undefined
//
//
// // =================== Example 3 - using this inside a method of an anonymous function
//
// // var test = {
// //     name: "Billy Bob"
// // };
// //
// // test.someFunction = function() {
// //     console.log(this);
// // };
// //
// // test.someFunction(); // refers to the calling object
//
//
// // =================== Example 4 - using this inside a method assigned a callback function
//
// // var test2 = {
// //     price: 45
// // };
// //
// // function someCallback() {
// //     console.log(this);
// // }
// //
// // test2.thisTest = someCallback;
// //
// // test2.thisTest(); // calling object
//
//
//
// // =================== Example 5 - using this inside async called method
//
// // use the commented out code to create the correct reference to the calling object of the callback instead of the window object
// // function logThis() {
// //     // var that = this;
// //     setTimeout(function() {
// //         console.log(this);
// //         // console.log(that);
// //     }, 1000);
// // }
// //
// // var someObject = {name: "bob"};
// //
// // someObject.asyncTest = logThis;
// //
// // someObject.asyncTest(); // refer to global window object
//
//
//
// // =================== Example 6 - using the bind method to create the correct reference to the calling object of this in the anonymous function
//
// // function logThis() {
// //     setTimeout(function() {
// //         console.log(this);
// //     }.bind(this), 1000); // bind the calling object to the annon function passed to setTimeout
// // }
// //
// // var someObject = {name: "bob"};
// //
// // someObject.asyncTest = logThis;
// //
// // someObject.asyncTest(); // now refers to the calling object
//
//
//
//
// </script>
//
// </body>
// </html>
// 0 comments on commit ee0e49e
// @arasharghavan
//
//
// Write  Preview
//
// Attach files by dragging & dropping, selecting them, or pasting from the clipboard.
//     Styling with Markdown is supported
// Comment on this commit
// Subscribe  You’re not receiving notifications from this thread.
// © 2019 GitHub, Inc.
//     Terms
// Privacy
// Security
// Status
// Help
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// Press h to open a hovercard with more details.
//
//
//
//
// // Create a few beverage objects and assign values to each object for the following
// // properties:
// //
// //     - brandName
// //     - type
// //     - volumeInLiters
// //     - priceInCents
// //     - expirationDate
// //     - dateTimesOfLastSips
// //     - isOpen
// //
// // Define your objects using both literal syntax to create all properties and values at
// // once and also try defining empty objects and assign property values in separate
// // statements.
// //
// //     Message Input
// //

//
//
// var beverage = {
//
//     brandName:"Johnnie Walker, blue label",
//     type:"Scotch Whisky",
//     volumeInLiters:"750 ml",
//     priceInCents:"$15999",
//     expirationDate:"n/a",
//     dateTimesOfLastSips:"1/1/2018",
//     isOpen:"All gone"
//
// };
//
//
// console.log("MY beverage " + beverage.priceInCents);
//
// var beverageNew = {
//
//     brandName:"",
//     type:"",
//     volumeInLiters:"",
//     priceInCents:"",
//     expirationDate:"",
//     dateTimesOfLastSips:"",
//     isOpen:""
//
// };
//
// console.log(beverageNew.brandName);
//

// Mini Exercise 2

var users = [
    {
        name: "Sam",
        age: 21
    },
    {
        name: "Cathy",
        age: 34
    },
    {
        name: "Karen",
        age: 43
    }
];


var userOutPut = "";

users.forEach(function (element) {
   userOutPut += element.name + " ";

});
console.log(userOutPut);



users.forEach(function (element) {
    element.name = "John Doe";

});
    console.log(users);

users.forEach(function (element) {
    element.age += 1;

});

console.log(users);




// 1. Log the names of all users in a single console log seperated by spaces.
// 2. Change the names of all users to "John Doe"
// 3. Increase the current age of all users by 1
//
// Can you accomplish each step using iteration?
//
//     Message Input
//
// Message zion


//
//
// Mini Exercise 3
//
// PAIR UP!
//
//     Create a dog object...
//
//     The dog object should have properties for:
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
//
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new
// shot with the current date to the shotRecords array
//



