/* 
Write a function named calculateAverageUntilZero:
- Continuously prompt the user to input numbers.
- Stop asking for inputs when the user enters 0.
- Calculate and log the average of all entered numbers in the console once the loop ends.
 */

const calculateAverageUntilZero = () => {
  let count = 0;
  let sum = 0;

  while (true) {
    let input = Number(window.prompt("Please input numbers"));
    if (input === 0) {
      break;
    }

    sum += input;
    count++;
    if (count === 0) {
      break;
    } else {
      const average = sum / count;
      console.log("your average number is " + average);
    }
  }
};

calculateAverageUntilZero();
