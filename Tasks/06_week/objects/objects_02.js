/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

const weather = {
  temperature: 25,
  humidity: 40,
  condition: "Rainy",
};
function forecast() {
  if (weather.condition === "Rainy") {
    console.log("take an umberella");
  } else {
    console.log("Its a nice day, enjoy!");
  }
}
forecast();

// Your code here

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here

const shoppingCart = [
  { name: "potato", price: 0.5, quantity: 3 },
  { name: "tomato", price: 0.3, quantity: 2 },
  { name: "onion", price: 0.2, quantity: 5 },
  { name: "meat", price: 3.5, quantity: 1 },
  { name: "cream", price: 0.89, quantity: 2 },
  { name: "chocolate", price: 5.65, quantity: 1 },
];

function sumItems(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
console.log("Total price of your groceries is: ", sumItems(shoppingCart));

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here

const restaurants = [
  { name: "Ramin Rafla", cuisineType: "street food", rating: 5 },
  { name: "McDonalds ", cuisineType: "garbage", rating: 3 },
  { name: "Köpin Keittiö", cuisineType: "gourmet", rating: 4 },
  { name: "Alis Pizza&Kebab", cuisineType: "street food", rating: 5 },
];

restaurants.forEach((rafla) => {
  if (rafla.rating >= 4) {
    console.log(rafla);
  }
});

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here

const bankAccount = {
  accountHolder: "antti asiakas",
  balance: 0,
  transactions: [50, -50, 10, 25, 30, -28],
};

function sumTrans(transactions) {
  return transactions.reduce((total, amount) => total + amount, 0);
}
console.log(
  "Total balance of your transactions: ",
  sumTrans(bankAccount.transactions)
);

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here

const students = [
  { name: "Onni Opiskelija", scores: [8, 6.5, 7, 9, 5], averageScore: null },
  {
    name: "Olga Opiskelija",
    scores: [8.8, 9.5, 8.7, 9, 8.5],
    averageScore: null,
  },
  {
    name: "Osmo Opiskelija",
    scores: [6, 6.5, 6.7, 7.9, 5],
    averageScore: null,
  },
  {
    name: "Oiva Opiskelija",
    scores: [9.8, 8.5, 8.7, 9.1, 9.5],
    averageScore: null,
  },
  {
    name: "Olivia Opiskelija",
    scores: [8, 9.5, 8.7, 9, 10],
    averageScore: null,
  },
];

function updateScores() {
  students.forEach((student) => {
    const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
    const average = totalScore / student.scores.length;
    student.averageScore = parseFloat(average.toFixed(2));
  });
}
updateScores();
console.log(students);

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here

const courses = [
  {
    courseName: "JavaScript",
    instructor: "Random Teacher",
    studentsEnrolled: 25,
  },
  {
    courseName: "Random Math",
    instructor: "Random Math Teacher",
    studentsEnrolled: 31,
  },
  {
    courseName: "Random Shit",
    instructor: "Random Shit Teacher",
    studentsEnrolled: 100,
  },
  {
    courseName: "Nonsense",
    instructor: "Random Nonsense Teacher",
    studentsEnrolled: 29,
  },
];

function logStudents() {
  courses.forEach((course) => {
    if (course.studentsEnrolled > 30) {
      console.log(course.courseName);
    }
  });
}
logStudents();

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here

const pet = {
  species: "Fox",
  name: "Frank",
  isVaccinated: true,
};

function checkVaccine() {
  if (pet.isVaccinated === false) {
    return console.log("Vaccination required");
  } else {
    console.log(`Your animal ${pet.species} named ${pet.name}, is good to go!`);
  }
}
checkVaccine(pet);

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here

const city = {
  name: "Hellsinki",
  population: 1000001,
  landmark: "none",
};

function logCity() {
  if (city.population > 1000000) {
    console.log("this is a big city!");
  }
}
logCity();

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here

const transactions = [
  { type: "credit", amount: 200 },
  { type: "debit", amount: 150 },
  { type: "credit", amount: 360 },
  { type: "debit", amount: 120 },
  { type: "credit", amount: 310 },
];

function checkBalance() {
  return transactions.reduce((balance, transaction) => {
    if (transaction.type === "credit") {
      return balance + transaction.amount;
    } else if (transaction.type === "debit") {
      return balance - transaction.amount;
    }
    return balance;
  }, 0);
}

const totalBalance = checkBalance();
console.log(`Total balance is: ${totalBalance}`);

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here

const foxPack = {
  foxes: [
    { name: "foxy", age: 2, furColor: "yellow" },
    { name: "flexy", age: 1, furColor: "purple" },
    { name: "frusty", age: 1.5, furColor: "yellow" },
    { name: "fiona", age: 0.5, furColor: "pink" },
  ],
};
function filterYoungFoxes() {
  const youngFoxes = foxPack.foxes.filter((fox) => fox.age < 2);
  return youngFoxes;
}
const youngFoxes = filterYoungFoxes();

console.log(youngFoxes);

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here

const gameCharacter = {
  name: "sankari",
  level: 42,
  health: 100,
  inventory: ["antideprassants", "gun", "single bullet"],
};

function logInventory() {
  gameCharacter.inventory.forEach((item) => {
    console.log(item);
  });
}
logInventory();

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here

const employees = [
  { name: "Jay", role: "big boss", workingHours: 25 },
  { name: "Abdul", role: "Chef", workingHours: 65 },
  { name: "Makar", role: "waiter", workingHours: 41 },
  { name: "Basu", role: "dish washer", workingHours: 100 },
];

const hardWorker = () => {
  employees.forEach((employee) => {
    if (employee.workingHours > 40) {
      console.log(`${employee.name} works ${employee.workingHours} hours`);
    }
  });
};
hardWorker();
/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here

const musicAlbums = [
  { title: "Bad Title", artist: "Bad Religion", releaseYear: 1986 },
  { title: "Worse Title", artist: "No Religion", releaseYear: 2001 },
  {
    title: "Even More Worse Title",
    artist: "No Bad Religion",
    releaseYear: 2005,
  },
];

const releaseYear = () => {
  musicAlbums.forEach((album) => {
    if (album.releaseYear > 2000) {
      console.log(
        `Album named "${album.title}" was released in year ${album.releaseYear}`
      );
    }
  });
};
releaseYear();
/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here

const cars = [
  { brand: "Toyoda", model: "infinity", horsePower: 50 },
  { brand: "Mazda", model: "626 LX", horsePower: 61 },
  { brand: "Ferrari", model: "Black Horse", horsePower: 500 },
  { brand: "VolksWagen", model: "Beetle", horsePower: 20 },
];

const maxHp = () => {
  cars.forEach;
};


/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here
