// const dropDown = document.querySelector("#type");
// dropDown.addEventListener("change", function () {
//   const selectedValue = dropDown.value;
//   console.log(selectedValue);
// });

// document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
//   checkbox.addEventListener("change", function () {
//     if (this.checked) {
//       console.log(`${this.value} is checked`);
//     } else {
//       console.log(`${this.value} is unchecked`);
//     }
//   });
// });

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
