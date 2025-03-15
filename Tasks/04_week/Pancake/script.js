"use strict";

const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPriceBanner = document.getElementById("totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.querySelector("#seeOrder");
const makeOrderBtn = document.querySelector("#makeOrder");
const summaryText = document.querySelector("#summaryText");
const customerName = document.querySelector("#customerName");
const delivery = document.querySelectorAll(".delivery");
// const selectedDelivery = document.querySelector(".delivery:checked");

let selectedToppings = [];
let selectedExtras = [];
let selectedDelivery = []; // Initialize as an empty array
// const selectedExtras = [];
let toppingsTotal = 0;
let extrasTotal = 0;
let deliveryTotal = 0;
let totalPrice = 0;

const changeHandler = (event) => {
  // console.log("Change event detected"); // Debugging
  // console.log("Event target:", event.target);

  selectedToppings.length = 0;
  selectedExtras.length = 0;
  selectedDelivery.length = 0;

  toppingsTotal = 0;
  extrasTotal = 0;
  deliveryTotal = 0;

  //   console.log("event target: ", event.target);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  console.log("toppings", toppings);

  // toppingsArray.length = 0; // Clear previous values
  // extrasArray.length = 0; // Clear previous values

  /* for each toppings you should read the value for list of what is selected
   */

  toppings.forEach((topping) => {
    if (topping.checked) {
      selectedToppings.push(topping.textContent.trim());
      toppingsTotal += parseFloat(topping.dataset.price);
    }
  });

  extras.forEach((extra) => {
    if (extra.checked) {
      selectedExtras.push(extra.textContent.trim());
      extrasTotal += parseFloat(extra.dataset.price);
    }
  });

  delivery.forEach((delivery) => {
    if (delivery.checked) {
      selectedDelivery.push(delivery.textContent.trim());
      deliveryTotal += parseFloat(delivery.dataset.price);
    }
  });
  // const toppingsTotal = [
  //   ...document.querySelectorAll(".topping:checked"),
  // ].reduce((sum, topping) => sum + parseFloat(topping.dataset.price), 0);

  // const extrasTotal = [...document.querySelectorAll(".extra:checked")].reduce(
  //   (sum, extra) => sum + parseFloat(extra.dataset.price),
  //   0
  // );

  // const deliveryTotal = [
  //   ...document.querySelectorAll(".delivery:checked"),
  // ].reduce((sum, delivery) => sum + parseFloat(delivery.dataset.price), 0);
  console.log(pancakeType.value);

  console.log("toppings total: ", toppingsTotal);
  console.log("extras total: ", extrasTotal);
  console.log("delivery: ", deliveryTotal);

  totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryTotal;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
  // Apply blinking effect to the entire price banner
  totalPriceBanner.parentElement.classList.add("blink");

  // Remove the blinking effect after animation completes
  setTimeout(() => {
    totalPriceBanner.parentElement.classList.remove("blink");
  }, 500);
};
pancakeForm.addEventListener("change", changeHandler);

seeOrderBtn.addEventListener("click", (event) => {
  changeHandler(event);

  const customerNameOrder = customerName.value.trim();

  // const toppingsText =
  //   selectedToppings.length > 0 ? selectedToppings.join(", ") : "None";
  // const extrasText =
  //   selectedExtras.length > 0 ? selectedExtras.join(", ") : "None";
  // const deliveryText =
  //   selectedDelivery.length > 0 ? selectedDelivery.join(", ") : "None";
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

  summaryText.textContent = `Hello ${customerNameOrder}. 
You chose ${pancakeType.value} with the following options:
Toppings: ${
    orderSummary.toppings.length ? orderSummary.toppings.join(", ") : "None"
  }. 
Extras: ${orderSummary.extras.length ? orderSummary.extras.join(", ") : "None"}
Delivery: ${
    orderSummary.delivery.length ? orderSummary.delivery.join(", ") : "None"
  }
Total price: ${totalPrice} €`;
});

//   console.log("orderSummary: ", orderSummary);
//   const totalOrderPrice = totalPriceDisplay.textContent;
//   summaryText.textContent = `Hello ${customerNameOrder} Your order: ${
//     pancakeType.value
//   } with ${orderSummary.toppings.join(", ")} and ${orderSummary.extras.join(
//     ", "
//   )} with delivery: ${orderSummary.delivery.join(
//     ", "
//   )}. Your Total Order Price: ${totalOrderPrice}
//     `;
// });

// part 3 starts here ,maybe XD ->

const newOrder = {
  id: Date.now(),
  customerName: customerOrderName,
  selectedPancake: pancakeType.value,
  toppings: selectedToppings,
  extras: selectedExtras,
  deliveryMethod: selectedDelivery,
  totalPrice: totalPrice,
  status: "waiting",
};

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
