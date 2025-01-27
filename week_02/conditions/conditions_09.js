/* 
Write a function named canEnterEvent:
Take two parameters: age and hasID.
If age is 18 or older AND hasID is true, return "You can enter the event."
Otherwise, return "You cannot enter."
Call the function with different combinations of age and hasID. 
*/

let age = 19;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can enter the event.");
} else {
  console.log("You cannot enter.");
}
