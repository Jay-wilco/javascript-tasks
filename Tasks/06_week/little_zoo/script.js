let listOfAnimals = ["Fox", "Bear", "Eagle"];

displayAnimals = () => {
  const animalList = document.getElementById("animalList");
  animalList.innerHTML = "";

  listOfAnimals.forEach(function (animal) {
    const li = document.createElement("li");
    li.textContent = animal;
    animalList.appendChild(li);
  });
};

addAnimal = () => {
  const animalName = document.getElementById("newAnimalName").value;
  listOfAnimals.push(animalName);
  displayAnimals();
  document.getElementById("newAnimalName").value = "";
};

document.getElementById("addAnimal").addEventListener("click", addAnimal);
displayAnimals();
