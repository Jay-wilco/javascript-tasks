/* Create a function named add that:
Takes two parameters, a and b.
Returns the sum of a and b.
Call the function with the arguments 10 and 5.
Print the result using console.log(). 

Bonus: Call the function multiple times with different arguments and print all the results.
*/

const add = (a, b) => {
  return a + b;
};

let result = add(10, 5);
console.log(result);

console.log("Added :", add(10, 5));
console.log("Added :", add(15, 3));
console.log("Added :", add(6, 5));
console.log("Added :", add(3, 5));
console.log("Added :", add(1, 5));
console.log("Added :", add(9, 5));
