/* 
Write a function named getAnimalDescription:
Take a parameter favoriteAnimal.
Use a switch statement to:
If "fox", return "Foxes are sly and smart!"
If "dog", return "Dogs are loyal friends."
If "cat", return "Cats are curious and independent."
For any other animal, return "All animals are awesome!"
Call the function with different animal names. 
*/

let favoriteAnimal = "mouse";

switch (favoriteAnimal) {
  case "fox":
    console.log("Foxes are sly and smart!");
    break;
  case "dog":
    console.log("Dogs are loyal friends.");
    break;
  case "cat":
    console.log("Cats are curious and independent.");
    break;
  default:
    console.log("All animals are awesome!");
}
