/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/

const countEvenNumbers = () => {
  let count = 0;

  for (let i = 0; i < 20; i++) {
    count = Number(window.prompt("Please enter 20 numbers"));
    if (i % 2 === 0) {
      count++;
    }
  }
  console.log("your even numbers count is " + count);
  alert("your even numbers count is " + count); //THE CHERRY ON TOP <<--- :)
};
countEvenNumbers();
