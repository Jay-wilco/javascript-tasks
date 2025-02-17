/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const paragraph = document.getElementsById("paragraph");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", () => {
  paragraph.classList.toggle("hidden");
});
