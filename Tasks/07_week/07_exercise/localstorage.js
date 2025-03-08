/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

// Your code here

localStorage.setItem("message", "Hello, LocalStorage!");

let Message = localStorage.getItem("message");

console.log(Message);

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here

const userSettings = {
  theme: "dark",
  language: "english",
};

const userJson = JSON.stringify(userSettings);
localStorage.setItem("userSettings", userJson);

const storedJson = localStorage.getItem("userSettings");

const userParse = JSON.parse(storedJson);

console.log("Your theme: ", userParse.theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here

const favoriteBooks = [
  { title: "book1", author: "Steve" },
  { title: "book2", author: "John" },
  { title: "book3", author: "Bert" },
  { title: "book4", author: "Michael" },
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

const getBooks = JSON.parse(localStorage.getItem("favoriteBooks"));

getBooks.forEach((books) => {
  console.log(books.title);
});

/* Task 
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here

function saveToLocalStorage(key, object) {
  const objectJson = JSON.stringify(object);
  localStorage.setItem(key, objectJson);
  const getObject = localStorage.getItem(key);
  return JSON.parse(getObject);
}

const user = {
  name: "Jay",
  age: "42",
};

saveToLocalStorage("userData", user);

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here

function getFromLocalStorage(user) {
  const newUser = localStorage.getItem(user);
  return JSON.parse(newUser);
}
console.log(newUser);

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here

const userProfile = {
  username: "Jay",
  email: "Jay@mail.com",
  preferences: {
    theme: "light",
    notifications: "amateur",
  },
};
localStorage.setItem("userProfile", JSON.stringify(userProfile));
const updatedProfile = JSON.parse(localStorage.getItem("userProfile"));
updatedProfile.preferences.theme = "dark";
console.log(userProfile);

console.log(updatedProfile);

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here

const shoppingList = {
  items: ["potato", "tomato", "onions"],
};

localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList() {
  const parsedList = JSON.parse(localStorage.getItem("shoppingList"));
  parsedList.items.push("paprika");
  localStorage.setItem("shoppingList", JSON.stringify(parsedList));
  console.log(parsedList);
}
addItemToList();

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here

const counter = {
  count: 0,
};

localStorage.setItem("count", JSON.stringify(counter));

function incrementCounter() {
  const retriveCount = JSON.parse(localStorage.getItem("count"));
  retriveCount.count += 1;
  localStorage.setItem("count", JSON.stringify(retriveCount));
  console.log(retriveCount.count);
}
incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here

const tasks = [
  { id: 1, description: "Do your homework", completed: false },
  { id: 2, description: "Make food", completed: false },
  { id: 3, description: "Feed the cat ", completed: false },
  { id: 4, description: "Go to sh*t", completed: false },
];
localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskID) {
  const retrievedTasks = JSON.parse(localStorage.getItem("tasks"));
  retrievedTasks.forEach((task) => {
    if (task.id === taskID) {
      task.completed = true;
    }
  });
  localStorage.setItem("tasks", JSON.stringify(retrievedTasks));
  console.log(retrievedTasks);
}
markTaskComplete(1);

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here
function clearLocalStorage() {
  localStorage.clear();
}

clearLocalStorage();
console.log(localStorage);
