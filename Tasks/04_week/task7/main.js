/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

let clicks = 0;

function clickMe() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}
