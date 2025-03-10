const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPriceBanner = document.getElementById("totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.querySelector("#seeOrder");
const summaryText = document.querySelector("#orderSummary");
const customerName = document.querySelector("#customerName");
const delivery = document.querySelectorAll(".delivery");
const selectedDelivery = document.querySelector(".delivery:checked");

console.log("toppings", toppings);

const toppingsArray = [];

const changeHandler = (event) => {
  //   console.log("event target: ", event.target);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  console.log("Base price: ", basePrice);

  toppings.forEach((topping) => {
    if (topping.checked) {
      selectedToppings.push(topping.value);
      toppingsArray.push(topping);
    }
  });
  /* for each toppings you should read the value for list of what is selected
   */

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
  summaryText.textContent = `Customer ${customerName.value} ordered ${
    pancakeType.value
  } with ${toppingsArray.join(",")} and ${extras.value} and ${delivery.value}`;
});

// join thingy to read all values or smth
