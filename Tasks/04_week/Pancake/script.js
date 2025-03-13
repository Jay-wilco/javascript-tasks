"use strict";

const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPriceBanner = document.getElementById("totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.querySelector("#seeOrder");
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");
const delivery = document.querySelectorAll(".delivery");
const selectedDelivery = document.querySelector(".delivery:checked");

console.log("toppings", toppings);

const selectedExtras = [];
const selectedToppings = [];
const toppingsArray = [];
const extrasArray = [];

const changeHandler = (event) => {
  //   console.log("event target: ", event.target);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  toppingsArray.length = 0; // Clear previous values
  extrasArray.length = 0; // Clear previous values
  console.log("Base price: ", basePrice);

  /* for each toppings you should read the value for list of what is selected
   */
  extras.forEach((extra) => {
    if (extra.checked) {
      selectedExtras.push(extra.textContent.trim());
      extrasArray.push(extra.dataset.price);
    }
  });

  const toppingsTotal = [
    ...document.querySelectorAll(".topping:checked"),
  ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
    (sum, extra) => sum + parseFloat(extra.dataset.price),
    0
  );

  const delivery = [...document.querySelectorAll(".delivery:checked")].reduce(
    (sum, delivery) => sum + parseFloat(delivery.dataset.price),
    0
  );

  console.log("toppings total: ", toppingsTotal);
  console.log("extras total: ", extrasTotal);
  console.log("delivery: ", delivery);

  let totalPrice = basePrice + toppingsTotal + extrasTotal + delivery;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeForm.addEventListener("change", changeHandler);

seeOrderBtn.addEventListener("click", () => {
  const orderSummary = {
    extras: [...document.querySelectorAll(".extra:checked")].map((extra) =>
      extra.parentElement.textContent.trim()
    ),
    toppings: [...document.querySelectorAll(".topping:checked")].map((extra) =>
      extra.parentElement.textContent.trim()
    ),
    delivery: [...document.querySelectorAll(".delivery:checked")].map(
      (delivery) => delivery.parentElement.textContent.trim()
    ),
  };
  console.log("orderSummary: ", orderSummary);
  const totalOrderPrice = totalPriceDisplay.textContent;

  summaryText.textContent = `Total Order Price: ${totalOrderPrice} \n
  You have chosen the following toppings: ${orderSummary.toppings.join(", ")} \n
  You have chosen the following extras: ${orderSummary.extras.join(", ")} \n
  You have chosen the following delivery type: ${orderSummary.delivery.join(
    ", "
  )} \n
  `;
});

// seeOrderBtn.addEventListener("click", () => {
//   let totalPrice = basePrice + toppingsTotal + extrasTotal + delivery;
//   console.log("toppingsArray: ", toppingsArray);
//   console.log("extrasArray: ", extrasArray);
//   summaryText.textContent = `Customer ${customerName.value} ordered ${
//     pancakeType.value
//   } with ${toppingsArray.join(",")} and ${extrasArray.join(
//     ","
//   )} and the total price is: ${totalPrice}`;
// });

// join thingy to read all values or smth

// use constructor for part 3!

// template (Array?) this.object
