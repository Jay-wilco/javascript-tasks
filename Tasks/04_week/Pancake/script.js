const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.getElementById("seeOrder");
const summaryText = document.getElementById("orderSummary");
const customerName = document.getElementById("customerName");
const delivery = document.getElementById("delivery");

// const calculateTotal = () => {
//   let totalPrice = parseFloat(pancakeType.value);

//   console.log("event was triggered");

//   toppings.forEach((topping) => {
//     if (topping.checked) {
//       totalPrice += parseFloat(topping.value);
//     }
//   });

//   extras.forEach((extra) => {
//     if (extra.checked) {
//       totalPrice += parseFloat(extra.value);
//     }
//   });
//   totalPriceDisplay.textContent = `${totalPrice}€`;
//   totalPriceBanner.textContent = `${totalPrice}€`;
// };

// pancakeType.addEventListener("change", calculateTotal);
// toppings.forEach((topping) =>
//   topping.addEventListener("change", calculateTotal)
// );
// extras.forEach((extra) => extra.addEventListener("change", calculateTotal));

const changeHandler = (event) => {
  //   console.log("event target: ", event.target);
  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );
  console.log("Base price: ", basePrice);

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

  const totalPrice = basePrice + toppingsTotal + extrasTotal + delivery;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;
};

pancakeForm.addEventListener("change", changeHandler);

seeOrderBtn.addEventListener("click", () => {
  summaryText.textContent = `Customer ${customerName.value} ordered ${pancakeType.value} with ${toppings.value} and ${extras.value} and ${delivery.value}`;
});
