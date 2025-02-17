// //Create the HTML Structure

// Add a section to show the balance.
// Add an input field and button for depositing money.
// Add an input field and button for withdrawing money.
// Add a message area to show errors (e.g., "Not enough balance").
// Add event listeners

// Use addEventListener() to detect when the user clicks the deposit button.
// Use addEventListener() to detect when the user clicks the withdraw button.
// Write JavaScript functions

// checkBalance() → Displays the current balance.
// deposit() → Adds money to the balance (only if the amount is valid).
// withdraw() → Subtracts money (only if the user has enough balance).
// Validate user input

// Make sure users enter only numbers when depositing or withdrawing.
// Prevent withdrawals if the balance is too low.
// Show error messages when needed.
// Improve the design and styling

// Use a Google Font to make the app look nice.
// Add colors and spacing to make the layout clean.
// Bonus challenge
// Add a PIN login system before the user can access their account.

const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const balance = document.getElementById("balance");
const message = document.getElementById("message");
const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("withdraw");

let currentBalance = 0;

depositBtn.addEventListener("click", () => {
  const depositAmount = Number(inputDeposit.value);
  //console.log("current balance", currentBalance);
  deposit(depositAmount);
  balance.innerText = currentBalance;
});

withdrawBtn.addEventListener("click", () => {
  const withdrawAmount = Number(inputWithdraw.value);
  //console.log("current balance", currentBalance);
  withdraw(withdrawAmount);
  balance.innerText = currentBalance;
});

function checkBalance() {
  return Number(balance.innerText);
}

function deposit(depositAmount) {
  if (typeof depositAmount !== "number") {
    message.innerText = "Please enter a number";
  } else if (depositAmount < 0) {
    message.innerText = "Please enter a positive number";
  } else currentBalance += depositAmount;
}

function withdraw(withdrawAmount) {
  if (typeof withdrawAmount !== "number") {
    message.innerText = "Please enter a number";
  } else if (withdrawAmount < 0) {
    message.innerText = "Please enter a positive number";
  } else if (withdrawAmount > currentBalance) {
    message.innerText = "Insufficent funds";
  } else currentBalance -= withdrawAmount;
}
