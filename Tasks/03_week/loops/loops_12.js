/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */

const buildGroceryList = () => {
  let groceryList = [];
  let item;

  while (true) {
    item = prompt("Enter groceries on by one, type done to finish");
    if (item === "done") {
      break;
    }
    groceryList.push(item);
  }
  console.log("Your grocerylist: ", groceryList);
};

buildGroceryList();
