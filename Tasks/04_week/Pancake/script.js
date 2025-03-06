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

  const delivery = [...document.querySelector(".delivery:checked")].reduce(
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

// seeOrderBtn.addEventListener("click", () => {
//   summaryText.textContent = `Customer ${customerName.value} ordered ${pancakeType.value} with ${toppings.value} and ${extras.value} and ${delivery.value}`;
// });

seeOrderBtn.addEventListener("click", () => {
  // Get selected pancake type
  const selectedPancake = pancakeType.selectedOptions[0].value;

  // Get checked toppings
  const selectedToppings =
    [...document.querySelectorAll(".topping:checked")]
      .map((topping) => topping.value)
      .join(", ") || "no toppings";

  // Get checked extras
  const selectedExtras =
    [...document.querySelectorAll(".extra:checked")]
      .map((extra) => extra.value)
      .join(", ") || "no extras";

  // Get selected delivery method
  const selectedDelivery =
    document.querySelector(".delivery:checked")?.value || "No delivery";

  // Display order summary
  summaryText.textContent = `Customer ${customerName.value} ordered ${selectedPancake} pancakes with ${selectedToppings} and ${selectedExtras}, delivered via ${selectedDelivery}.`;
});
