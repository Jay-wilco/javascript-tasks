/* 
Write a function named checkAnimal:
Take a parameter animalType.
Use a ternary operator to return:
"You have a clever companion!" if animalType is "fox".
"Not a fox, but still cool!" otherwise.
Call the function with values like "fox" and "cat". 
*/

let animalType = "cat";

const checkAnimal =
  animalType == "fox"
    ? "You have a clever companion!"
    : "Not a fox, but still cool!";

console.log(checkAnimal);
