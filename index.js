/*Declaring and initializing the variable/prompt*/
const name1 = prompt("Please enter your name");
const name2 = prompt("Please enter your name");
const name3 = prompt("Please enter your name");

/*Assigning a value to the variable*/
let input1 = name1.length;
let input2 = name2.length;
let input3 = name3.length;

/*logging length into console*/
console.log("Name 1 has " + input1 + " letters");
console.log("Name 2 has " + input2 + " letters");
console.log("Name 3 has " + input3 + " letters");

function myFunction() {
  document.getElementById("labTwo").innerHTML = input1;
}
if (name1.length > name2.length) {
  document.getElementById("labTwo");
  window.alert("Name 1 is longer than name 2");
} else if (name1.length > name3.length) {
  document.getElementById("labTwo");
  window.alert("Name 1 is longer than name 3");
} else name2.length > name3.length;
{
  document.getElementById("labTwo");
  window.alert("Name 2 is longer than name 3");
}
