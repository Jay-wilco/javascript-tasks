/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here

function User(userName, email) {
  this.userName = userName;
  this.email = email;
  this.showInfo = function () {
    console.log(`Username: ${this.userName}, Email: ${this.email}`);
  };
}

const newUser = new User("Jay", "jay@mail.com");

newUser.showInfo();
/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here

class User2 {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
    console.log(`Email updated to: ${this.email}`);
  }
  showInfo() {
    // Add code here to display user information.
    console.log(`User: ${this.userName}, Email: ${this.email}`);
  }
}

const newUser2 = new User2("Jay", "jay@mail.com");

newUser2.changeEmail("jay.wilco@mail.com");
newUser2.showInfo();

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here

const theme = {
  name: "light",
  isActive: true,
  toggle() {
    this.isActive = !this.isActive;
    this.name = this.isActive ? "light" : "dark";
    document.body.className = this.name;
  },
};

document.getElementById("themeToggle").addEventListener("click", () => {
  theme.toggle();
});

/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here

const counter = {
  value: 0,
};

const increaseBtn = document.querySelector("#increaseBtn");
const decreaseBtn = document.querySelector("#decreaseBtn");
const counter1 = document.querySelector("#counter");

const theCount = () => (counter1.textContent = counter.value);

increaseBtn.addEventListener("click", () => {
  counter.value++;
  theCount();
});

decreaseBtn.addEventListener("click", () => {
  counter.value--;
  theCount();
});

theCount();
/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here

const product = {
  name: "chocolate",
  price: 5,
  qty: 1,
};

const qtyBtn = document.querySelector("#addQty");
const qtyInput = document.querySelector("#qty");
const totalPrice = document.querySelector("#totalPrice");

const updateTotalPrice = () => {
  const quantity = Number(qtyInput.value);

  const total = product.price * quantity;
  totalPrice.textContent = total;
};

qtyBtn.addEventListener("click", updateTotalPrice);

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

// Your code here
function Task(title, description, completed) {
  (this.title = title),
    (this.description = description),
    (this.completed = completed);
}

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const tasks = [];

const taskDisplay = () => {
  const task = new Task("homework", "Objects 3", "almost completed");

  tasks.push(task);

  const li = document.createElement("li");
  taskList.appendChild(li);

  li.textContent = `Task: ${tasks[0].title}, description: ${tasks[0].description},  ${tasks[0].completed}`;
};

addTaskBtn.addEventListener("click", taskDisplay);

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here
const weatherApp = {
  apiKey: "0100229a510b7527d08bd46517cd862f",

  fetchWeather: function (city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((data) => {
        this.displayWeather(data);
      })
      .catch((error) => {
        document.getElementById("weatherDisplay").textContent = error.message;
      });
  },

  displayWeather: function (data) {
    const name = data.name;
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const weatherDisplay = document.getElementById("weatherDisplay");
    weatherDisplay.innerHTML = `
      <h3>🌍 ${name}</h3>
      <p>🌡️ ${temp}°C</p>
      <p>☁️ ${description}</p>
    `;
  },
};
document.getElementById("submit").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (city) {
    weatherApp.fetchWeather(city);
  }
});

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.age = function age() {
    return (carAge = 2025 - this.year);
  };
}
const car = new Car("BatMobile", "Epic", 1960);

const carAgeDisplay = document.getElementById("carAgeDisplay");
carAgeDisplay.textContent = `The car ${car.brand} age is: ${car.age()} years`;

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here

const users = [
  { name: "Jay", score: 0 },
  { name: "TJ", score: 50 },
  { name: "Basu", score: 90 },
];
const sortingScore = () => {
  users.sort((a, b) => b.score - a.score);
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} : ${user.score}`;

    userList.appendChild(li);
  });
};

const sortingBtn = document.getElementById("sortingBtn");

sortingBtn.addEventListener("click", sortingScore);

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here

const shoppingList = {
  items: [],
};

const input = document.getElementById("items");
const button = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

const updateList = () => {
  itemList.innerHTML = "";

  shoppingList.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
};
button.addEventListener("click", () => {
  const newItem = input.value.trim();

  if (newItem !== "") {
    shoppingList.items.push(newItem);
    input.value = "";
    updateList();
  }
});

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here

const posts = [
  { title: "post 1", content: "funnystuff", likes: 0 },
  { title: "post 2", content: "funkystuff", likes: 0 },
  { title: "post 3", content: "funkysh*t", likes: 0 },
];

const postList = document.getElementById("postList");

const displayPosts = () => {
  postList.innerHTML = "";

  posts.forEach((post, index) => {
    const postItem = document.createElement("li");
    const postTitle = document.createElement("p");
    const postContent = document.createElement("p");
    const postLikes = document.createElement("p");
    const likeBtn = document.createElement("button");

    likeBtn.textContent = "Like this post";

    likeBtn.addEventListener("click", () => {
      posts[index].likes++;
      displayPosts();
    });
    postItem.append(postTitle, postContent, postLikes, likeBtn);
    postList.appendChild(postItem);

    postTitle.textContent = `Title: ${post.title}`;
    postContent.textContent = `Content: ${post.content}`;
    postLikes.textContent = `Likes: ${post.likes}`;
  });
};

displayPosts();

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;

  this.increaseSalary = function (percent) {
    this.salary += (this.salary * percent) / 100;
    return this.salary;
  };
}

const employee = new Employee("Jay", "Garbageman", 1000);

console.log(employee.increaseSalary(10));
console.log(employee.increaseSalary(20));

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here
const timer2 = {
  seconds2: 0,
  intevalId: null,
  start: function () {
    this.intevalId = setInterval(() => {
      this.seconds2++;
      document.getElementById("display2").textContent = this.seconds2;
    }, 1000);
  },
};
document.getElementById("startBtn2").addEventListener("click", () => {
  timer2.start();
});

//cool stopwatch that i found from the internet...

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);

  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const library = [];

const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = document.getElementById("pages").value.trim();

  if (title && author && pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
    displayBooks();
    form.reset();
  }
});

function displayBooks() {
  bookList.innerHTML = "";

  library.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}, pages: ${book.pages}`;
    bookList.appendChild(li);
  });
}

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here

foxTracker = {
  foxes: [],
  addFox: function (name, location) {
    this.foxes.push({ name, location });
  },
};
const foxName = document.getElementById("foxname");
const foxLocation = document.getElementById("foxlocation");
const addFoxBtn = document.getElementById("addfox");
const foxList = document.getElementById("foxlist");

addFoxBtn.addEventListener("click", () => {
  const name = foxName.value.trim();
  const location = foxLocation.value.trim();

  if (name && location) {
    foxTracker.addFox(name, location);
    displayFoxes();
    foxName.value = "";
    foxLocation.value = "";
  }
});

function displayFoxes() {
  foxList.innerHTML = "";

  foxTracker.foxes.forEach((fox) => {
    const li = document.createElement("li");
    li.textContent = `Your favorite 🦊: ${fox.name} has been spotted at ${fox.location}`;
    foxList.appendChild(li);
  });
}
