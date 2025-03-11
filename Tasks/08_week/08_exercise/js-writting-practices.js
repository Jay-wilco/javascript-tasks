/* Task 1: Use "strict mode"
/*
Task: Create a function `task1` that uses `"use strict"`. 
      Inside the function, try using a variable without declaring it first.
      Catch the error and log: "Strict mode error: [error message]"

Example:
task1(); // Logs: "Strict mode error: variable is not defined"
*/

"use strict";
function task1() {
  try {
    randomThing = 10;
  } catch (error) {
    console.error("Strict mode error: variable is not defined");
  }
  // Code here
}
task1();

/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.

Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.
*/

function task2() {
  "use strict";
  const MAX_USERS = 100;
  let currentUsers = 10;
  try {
    MAX_USERS = 99;
  } catch (error) {
    console.error("An error occurred:", error.message);
    console.log("Max users: ", MAX_USERS);
  }

  // Code here
}
task2();

/* Task 3: Create and Log an Object
/*
Task: Create an object `userProfile` with:
      - `name`
      - `email`
      - `isAdmin` (true or false)
      Log the object.

Expected:
- Console logs: { name: "Alice", email: "alice@example.com", isAdmin: true }
*/

function task3() {
  "use strict";
  const userProfile = {
    name: "Alice",
    email: "alice@example.com",
    isAdmin: true,
  };
  console.log(userProfile);
}
task3();

/* Task 4: Write a Simple Function
/*
Task: Create `calculateArea` function that returns the area of a rectangle.
      The function should take `width` and `height` as inputs.

Example:
calculateArea(5, 10) → 50
*/

function calculateArea(width, height) {
  return width * height;

  // Code here
}
console.log("calculated area: ", calculateArea(5, 10));

/* Task 5: Avoid Magic Numbers
/*
Task: Define `const DISCOUNT = 0.1`. 
      Write `applyDiscount(price)` that reduces the price by the discount.

Example:
applyDiscount(100) → 90
*/

const DISCOUNT = 0.1;
function applyDiscount(price) {
  // Code here

  const discountedPrice = price - price * DISCOUNT;
  return discountedPrice;
}
console.log("discounted price: ", applyDiscount(100));

/* Task 6: Write Useful Comments
/*
Task: Write a function `greetUser(name)` that returns a greeting.
      Use a meaningful comment explaining the function.

Example:
greetUser("Bob") → "Hello, Bob!"
*/

/**
 *
 * @param {String} name of the user
 * @returns {String} returns the greeting message
 */

function greetUser(name) {
  return `Hello, ${name}`;
  // Code here
}
console.log(greetUser("Bob"));

/* Task 7: Refactor Unclear Code
/*
Task: Improve this function to make it clear and readable.

Before:
function f(n){return n<0 ? 'negative' : 'positive';}

After:
- Use better naming and proper formatting.
*/

const checkNumber = (number) => {
  if (number < 0) {
    return console.log(`${number} is negative`);
  } else {
    console.log(`${number} is positive`);
  }
  // Code here
};

checkNumber(1);

/* Task 8: Fix Formatting
/*
Task: Rewrite this code to make it **formatted correctly**.

Before:
let x=10; function example(){console.log(x);}

After:
- Proper indentation and spacing.
*/

function example() {
  let x = 10;

  console.log(x);
}
