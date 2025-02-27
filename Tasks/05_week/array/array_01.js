/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/

let teamMembers = ["John", "Emily", "Mike", "Sarah"];

// Task 1
teamMembers.forEach((teamList) => console.log(teamList));

// for (let i = 0; i < teamMembers.length; i++) {
//   console.log(teamMembers[i]);
// }

// Task 2
teamMembers.shift();
console.log("2. Remove first memeber: ", teamMembers);

// Task 3
teamMembers.pop();
console.log("3. Remove last member: ", teamMembers);

// Task 4

teamMembers.unshift("Alex");
console.log("4. Add new member to the front: ", teamMembers);

// Task 5

teamMembers.push("Linda");
console.log("5. Append new member to the end: ", teamMembers);

// Task 6

let someTeamMembers = teamMembers.slice(2);
console.log("6. Removed 2 first index: ", someTeamMembers);

// Task 7

let findMike = teamMembers.indexOf("Mike");
console.log("7. Find Mike: ", findMike);

// Task 8

let findJake = teamMembers.indexOf("Jake");
console.log("8. Find Jake: ", findJake);

// Task 9

let replaceTeamMembers = teamMembers.splice(2, 1, "Carol", "Bruce");
console.log("9. Replace Mike with Carol and Bruce: ", teamMembers);

// Task 10

let conacatenatedArray = teamMembers.concat("Bob");

console.log("10. Concatenated array: ", conacatenatedArray);

// Task 11

let newTeamMemberList = teamMembers.slice(0, 5);

console.log("11. New Member List: ", newTeamMemberList);

// Task 12

let newMembers = ["Tina", "Dean"];

let newMemberList = teamMembers.concat(newMembers);

console.log("12. Merged members: ", newMemberList);

// console.log("Merged members as a String: ", newMemberList.join(", "));

// Task 13

let callJohn = [];

teamMembers.forEach((member, index) => {
  if (member === "John") {
    callJohn.push(index);
  }
});

console.log("13. Looking for John: ", callJohn);

// Task 14

let capitalMembers = teamMembers.map((member) => member.toUpperCase());

console.log("14. Capitalized members: ", capitalMembers);

// Task 15

let alphaTeam = teamMembers.sort();

console.log("15. Alphabetical order: ", alphaTeam);

//  Task 16

let reverseTeam = teamMembers.reverse();
console.log("16. Reversed names: ", reverseTeam);

// Task 17

let findJohn = teamMembers.some((member) => member === "John");
console.log("17. Is there any John in the list?: ", findJohn);

// Task 18

let nameCheck = teamMembers.every((member) => member.length > 3);
console.log("18. Check if names has more than 3 letters: ", nameCheck);