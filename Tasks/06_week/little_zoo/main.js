// // const animalSimple = [
//   "Fox",
//   "Bear",
//   "Eagle",
//   "Unicorn",
//   "Pussycat",
//   "Dinosaur",
//   "Goldfish",
// ];

const animals = [
  { name: "Fox", type: "Mammal", age: "42", color: "Orange" },
  { name: "Bear", type: "Mammal", age: "10", color: "Black" },
  { name: "Eagle", type: "Bird", age: "5", color: "Golden" },
  { name: "Unicorn", type: "Magical", age: "Ancient", color: "Pearl White" },
  { name: "Pussycat", type: "Mammal", age: "7", color: "Gray" },
  { name: "Dinosaur", type: "Reptile", age: "65M years", color: "Bone White" },
  { name: "Goldfish", type: "Fish", age: "Unknown", color: "Orange" },
];

const animalList = document.querySelector("#animalList"); //
const addAnimalButton = document.querySelector("#addAnimal");
const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");
const filterType = document.querySelector("#filterType");

const displayAnimals = (animalArray) => {
  animalList.innerHTML = ""; // Will clean the ul
  for (const animal of animalArray) {
    const li = document.createElement("li");
    li.textContent = `${animal.name}  (${animal.type}), Age: ${animal.age}, Color: ${animal.color}`;
    animalList.appendChild(li);
  }
};
const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim();
  animals.push(nameInput);
  displayAnimals(animals);

  document.querySelector("#newAnimalName").value = "";
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchText)
  );

  displayAnimals(filteredAnimals);
};
const filterByTypeAnimal = () => {
  const selectedType = filterType.value;

  if (selectedType === "All") {
    displayAnimals(animals);
  } else {
    const filteredAnimals = animals.filter(
      (animal) => animal.type === selectedType
    );
    displayAnimals(filteredAnimals);
  }
};

const sortAnimal = () => {
  animals.sort();
  displayAnimals(animals);
};

addAnimalButton.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimal);
filterType.addEventListener("change", filterByTypeAnimal);
displayAnimals(animals); // calling the function
