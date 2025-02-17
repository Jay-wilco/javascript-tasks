const textExample = document.querySelector("p");
const textExample2 = document.querySelector(".myclass");
const textExample3 = document.querySelector("#myID");
const textExample4 = document.querySelector(".myclass");

const textExample5 = document.getElementsByClassName("myclass");

console.log(textExample.textContent);
console.log(textExample2.textContent);
console.log(textExample3.textContent);

console.log(textExample4[2].textContent);
console.log(textExample5);

// //selector
// const button = document.getElementById("insertBtn");

// const example1 = document.querySelector("#myID");
// const example2 = document.querySelector(".myclass");
// const example3 = document.querySelector("div");

// document.getElementById();

// document.getElementsByClassName();
// document.getElementsByName();
// document.getElementsByTagName();

// const input = document.getElementById("input");
// const text = document.getElementById("result");

// //function
// const handleClick = () => {
//   text.textContent = input.value;
// };

// //this is example withouyt making variables
// const handleClick2 = () => {
//   //selector.textContent = input.value
//   document.getElementById("result").textContent =
//     document.getElementById("input").value;
// };

//trigger
// document.getElementById("insertBtn").addEventListener("click", handleClick);

//MONDAYS PRACTICE BELOW!!

// const circle = document.getElementById("alert");
// console.log(circle.textContent);

// const paragraph = document.getElementsByTagName("p");
// console.log();

// function myFunction() {
//   alert("some cool shit inside");
// }
// myFunction();

// function myFunction2() {
//   alert("I TOLD YOU NOT TO TOUCH!");
// }
// myFunction2();
