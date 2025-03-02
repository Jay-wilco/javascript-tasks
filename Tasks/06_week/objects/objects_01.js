/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here

const library = [
  { title: "Bible", author: "Jesus and Pals", yearPublished: 666 },
  { title: "Master Chef", author: "Gordon", yearPublished: 2010 },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library[0].title);
library[1].yearPublished = 2025;

console.log(library[1]);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here

library[0].genres = ["Drama", "Scifi"];
library[0]["isAvailable"] = true;

//console.log(library[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here

function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}
const newBook = new Book("Out Of Scope", "Jay Wilco", 2025, "science");

library.push(newBook);

console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and l"ogging the new book object to the console.
*/

// Your code here

// function createBook(title, author, yearPublished, genres) {
//   let book = new book(title, author, yearPublished, genres);

//   return book;
// }
// const createNewBook = createBook("The New Book", "Unknown author", 2026, [
//   "scifi",
//   "Tragedy",
// ]);

// library.push(...Book);

// console.log(library);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here

const myJson = JSON.stringify(library);

console.log("JSON String: ", myJson);
const jsonParsed = JSON.parse(myJson);

console.log("JSON Parsed: ", jsonParsed);

console.log("First books title: ", jsonParsed[0].title);

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

// Your code here

const students = [
  { name: "Tupu", age: 20, grade: 92 },
  { name: "Hupu", age: 30, grade: 82 },
  { name: "Lupu", age: 40, grade: 72 },
  { name: "Aku", age: 55, grade: 40 },
  { name: "Roope", age: 100, grade: 99 },
];

students.forEach((student) => {
  if (student.grade > 90) {
    console.log(student.name);
  }
});
/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

const car = [
  { brand: "Toyota", model: "yaris", year: 1995, isElectric: false },
  { brand: "Mazda", model: "626 LX", year: 1989, isElectric: false },
  { brand: "Mercedes", model: "EQ500", year: 2021, isElectric: true },
  { brand: "BWM", model: "M5", year: 2015, isElectric: true },
  { brand: "Batmobile", model: "Epic", year: 1960, isElectric: false },
];

car.forEach((car) => {
  if (car.isElectric === true) {
    console.log(`${car.brand} ${car.model}: This car is eco-friendly!`);
  } else {
    console.log(`${car.brand} ${car.model}: This car runs on fuel`);
  }
});

// Your code here

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here

const movies = [
  { title: "Alien", director: "Ridley Scott", rating: 8.9 },
  { title: "Titanic", director: "James Cameron", rating: 7.9 },
  { title: "Saving Private Ryan", director: "Steven Spielberg", rating: 9.1 },
  { title: "Plan 9 From Outer Space", director: "Ed Wood", rating: 5.9 },
];

movies.forEach((movies) => {
  if (movies.rating >= 8) {
    console.log(
      `Movies with rating over 8 : ${movies.title}, rating: ${movies.rating}`
    );
  }
});

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here

function findOldestCar(car) {
  let oldestCar = car[0];

  for (let i = 1; i < car.length; i++) {
    if (car[i].year < oldestCar.year) {
      oldestCar = car[i];
    }
  }
  return oldestCar;
}

console.log("Oldest car in the list is: ", findOldestCar(car));

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here

const userProfiles = [
  { username: "Maisa", email: "Maisa@mail.com", isAdmin: false },
  { username: "Matti", email: "Matti@mail.com", isAdmin: true },
  { username: "Mikko", email: "Mikkoa@mail.com", isAdmin: true },
  { username: "Mauri", email: "Mauri@mail.com", isAdmin: false },
];

function getAdmins(users) {
  return users.filter((user) => user.isAdmin);
}
const adminUsers = getAdmins(userProfiles);
console.log("Admins only: ", adminUsers);

adminUsers.forEach((userProfiles) => {
  console.log(`Admins only: ${userProfiles.username}, ${userProfiles.email}`);
});

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here

const orders = [
  {
    orderId: "12234",
    customerName: "Arttu Asiakas",
    totalAmount: 150,
    status: "pending",
  },
  {
    orderId: "12235",
    customerName: "Alma Asiakas",
    totalAmount: 240,
    status: "completed",
  },
  {
    orderId: "12236",
    customerName: "Anselmi Asiakas",
    totalAmount: 50,
    status: "pending",
  },
  {
    orderId: "12237",
    customerName: "Anssi Asiakas",
    totalAmount: 1500,
    status: "completed",
  },
  {
    orderId: "12238",
    customerName: "Alisa Asiakas",
    totalAmount: 560,
    status: "completed",
  },
];

function completedOrders(orders) {
  return orders.filter((orders) => orders.status === "completed");
}

console.log(completedOrders(orders));

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here

const smartPhone = {
  brand: "Mokia",
  model: 2110,
  batterylife: "80%",
  is5GEnabled: false,
};

function check5G(phone) {
  if (phone.is5GEnabled) {
    console.log(
      `This phone: ${smartPhone.brand} model: ${smartPhone.model} supports 5G!`
    );
  } else {
    console.log(
      `This phone: ${smartPhone.brand} model: ${smartPhone.model} does not support 5G`
    );
  }
}
check5G(smartPhone);

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here

const fox = {
  name: "Foxy",
  age: 5,
  habitat: "Forrest",
};

function checkAge(fox) {
  if (fox.age < 3) {
    console.log("This Fox is young");
  } else {
    console.log("This fox is an adult");
  }
}
checkAge(fox);

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here

const employees = [
  { name: "Tomi Työntekijä", position: "työntekijä", salary: 1500 },
  { name: "Timo Työntekijä", position: "työntekijä", salary: 1200 },
  { name: "Tiina Työntekijä", position: "Sihteeri", salary: 2000 },
  { name: "Tuire Työntekijä", position: "apulainen", salary: 1000 },
  { name: "Jussi Johtaja", position: "Johtaja", salary: 5500 },
];
function totalSalaries(employees) {
  return employees.reduce((total, employee) => total + employee.salary, 0);
}
console.log("Total salaries of the company: ", totalSalaries(employees));
