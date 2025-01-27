/* 
Write a function named checkAdult:
Take an age as a parameter.
If age is 18 or older, return "You are an adult."
Otherwise, return nothing.
Call the function with different ages and print the result.
 */

const checkAdult = (age) => {
  return age >= 18 ? "Are you adult?" : "";
};
const age = 20;
const isAdult = age >= 18 ? "YOu are an adult" : "";
console.log(isAdult);
