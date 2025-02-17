/* 
Write a function named validatePassword:
- Use a loop to allow the user to input a password.
- If the password is "correct123", log: "Access granted!" and exit the loop.
- If incorrect, prompt the user again with: "Try again!".
 */

const validatePassword = () => {
  while (true) {
    let pass = prompt("Enter password: ");
    if (pass === "correct123") {
      console.log("Access Granted!");
      break;
    } else {
      console.log("Wrong password, Try again!");
    }
  }
};

validatePassword();
