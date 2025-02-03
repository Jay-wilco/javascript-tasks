/* 
1. Use the Math.random() method to generate a random number between 0 and 1.
2. Multiply the result by 10 and use Math.floor() to round it down to the nearest whole number.
3. Print the random number using console.log() with a message like: "Your random number is 4." 
*/

let randomNum = Math.random();

//let randomNum = Math.random() * 10;

let result = Math.floor(randomNum * 10);

console.log("Your random number is: " + result);
