/*#  Task: Magic 8 - Ball with `switch` 

Create a **Magic 8 - Ball** program that uses a `switch` statement to provide random answers based on a generated number.

Follow these steps:

1. Write a function named `magic8Ball`:
- Use`prompt()` to ask the user for a "Yes or No" question.
- Log the question to the console.

2. Generate a random number:
- Use`Math.random()` to generate a random number between `1` and`8`.
- Use`Math.floor()` to ensure the number is a whole number.

3. Use a `switch` statement:
- Based on the random number(`1` to`8`), return one of the following responses:
  - `1`: `"Yes, definitely!"`
  - `2`: `"It is certain."`
  - `3`: `"Reply hazy, try again."`
  - `4`: `"Ask again later."`
  - `5`: `"Better not tell you now."`
  - `6`: `"My sources say no."`
  - `7`: `"Outlook not so good."`
  - `8`: `"Signs point to yes."`;

4. Display the result:
- Log the randomly selected answer to the console.
- Show the answer in an`alert()`.

*/

function magic8Ball() {
  let question = prompt("Ask a Yes or No question:");

  console.log(question);
}
magic8Ball();

let randomNumber = Math.floor(Math.random() * 8) + 1;

let answer;

switch (randomNumber) {
  case 1:
    answer = "yes, definetly";
    break;
  case 2:
    answer = "it is certain";
    break;
  case 3:
    answer = "reply hazy, try again";
    break;
  case 4:
    answer = "ask again later";
    break;
  case 5:
    answer = "better not to tell now";
    break;
  case 6:
    answer = "my sources say no";
    break;

  case 7:
    answer = "Outlook not so good";
    break;
  case 8:
    answer = "signs point to yes";

    break;
}
console.log(answer);

alert(answer);
