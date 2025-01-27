/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

let age = 20;

function canVote(age) {
  if (age >= 18) {
    return true;
    console.log(canVote + "Eligible to vote");
  }
  return false;
  console.log("Not Eligible to vote");
}
