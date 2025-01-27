/* 
Write a function named planAdventure:
Take three parameters: isWeekend, isSunny, and likesFoxes.
Use logical operators:
If it’s the weekend AND sunny AND likes foxes, return "Perfect day for a fox adventure!"
If it’s the weekend OR sunny, return "Good day, but not perfect."
Otherwise, return "Maybe another day."
Call the function with different combinations of conditions. 
*/

let isWeekend = false;
let isSunny = true;
let likesFoxes = true;

if (isWeekend && isSunny && likesFoxes) {
  return console.log("Perfect day for a fox adventure!");
} else if (isWeekend || isSunny) {
  return console.log("Good day, but not perfect.");
} else {
  return console.log("Maybe another day.");
}
