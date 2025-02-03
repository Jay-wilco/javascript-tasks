/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

const text = document.getElementById("content");
const button = document.getElementById("first button");

console.log(text.textContent);

function changeText() {
  console.log("Button was clicked");
  text.textContent = "Hello World!";
  button.textContent = "I was clicked";
  console.log("text was changed");
}
function changeBack() {
  console.log("another button was clicked");
  text.textContent = "this is a paragraph";
  button.textContent = "Click me again";
  console.log("now text is back to orginal");
}
