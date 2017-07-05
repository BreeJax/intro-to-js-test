// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: There is no given name


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: Tim


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: this would be an error.


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: Hello, how are you? Tim


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: 40;


// 6.
// What is `math` set to?
math = high - "5";
// A: 45;


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
let age = today - born;
console.log("Tim is " + age + " years old")
// A: see code


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = "Bree" ;
let instructorName = "Mark";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A: Did you want us to make a console.log of this?  console.log=statement


// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 1992;
let myString = "I was born in the year";
let myBoolean = true;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined = undefined;
// A:


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. true


// 12.
let y = (false == "");
// A. true


// 13.
let z = (0 == "");
// A. true


// 14.
let a = (null == null);
// A. true


// 15.
let b = (undefined == undefined);
// A. True


// 16.
let c = (undefined == null);
// A. true


// 17.
let d = (null == false);
// A. false


// 18.
let e = (NaN == null);
// A. False


// 19.
let f = (NaN == NaN);
// A. False


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;


if (thirsty = true) {
  console.log = ("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let xx;

if(xx){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false


// 23.
// this expression will set x to NaN
{
  let x1 = 1 * undefined;

  if(x1){
  	console.log("True!");
  } else {
  	console.log("False!");
  }
}
// A: False


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
