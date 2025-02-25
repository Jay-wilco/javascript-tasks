const animalSimple = [
  "Fox",
  "Bear",
  "Eagle",
  "Unicorn",
  "Pussycat",
  "Dinosaur",
  "Goldfish",
];

const animals = [
  { name: "Fox", type: "Mammal", age: "42" },
  { name: "Bear", type: "Mammal", age: "10" },
  { name: "Eagle", type: "Bird", age: "5" },
  { name: "Unicorn", type: "Magical", age: "Ancient" },
  { name: "Pussycat", type: "Mammal", age: "7" },
  { name: "Dinosaur", type: "Reptile", age: "65M years" },
  { name: "Goldfish", type: "Fish", age: "Unknown" },
];

const animalList = document.querySelector("#animalList"); //
const addAnimalButton = document.querySelector("#addAnimal");
const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");

const displayAnimals = (animalArray) => {
  animalList.innerHTML = ""; // Will clean the ul
  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `${animal.name} - Type: ${animal.type}, Age: ${animal.age}`;
    animalList.appendChild(li);
  }
};
const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim();
  animalSimple.push(nameInput);
  displayAnimals(animalSimple);

  document.querySelector("#newAnimalName").value = "";
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredAnimals = animalSimple.filter((animal) =>
    animal.toLowerCase().includes(searchText)
  );

  displayAnimals(filteredAnimals);
};
const sortAnimal = () => {
  animalSimple.sort();
  displayAnimals(animalSimple);
};

addAnimalButton.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimal);
displayAnimals(animalSimple); // calling the function
