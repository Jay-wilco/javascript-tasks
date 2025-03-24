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
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const checkoutBtn = document.querySelector("#checkoutBtn");
const orderId = Date.now();

class Order {
  constructor(
    orderId,
    customerName,

    pancakeType,
    toppings,
    extras,
    deliveryMethod,
    totalPrice
  ) {
    this.id = orderId;
    this.customerName = customerName;
    this.pancakeType = pancakeType;
    this.toppings = toppings;
    this.extras = extras;
    this.deliveryMethod = deliveryMethod;
    this.totalPrice = totalPrice;
    this.status = "waiting";
  }

  saveOrder() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(this);
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  // Retrieve all orders (returns the orders array)
  static getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
  }
}

// When the user clicks on the button, open the modal
makeOrderBtn.onclick = function () {
  document.body.classList.add("modal-open");
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});

/*End of modal maddness? */

let selectedToppings = [];
let selectedExtras = [];
let selectedDelivery = [];

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

  const basePrice = parseFloat(
    document.getElementById("type").selectedOptions[0].dataset.price
  );

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

  totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryTotal;

  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;

  totalPriceBanner.parentElement.classList.add("blink");

  setTimeout(() => {
    totalPriceBanner.parentElement.classList.remove("blink");
  }, 500);

  return {
    basePrice,
    selectedToppings,
    selectedExtras,
    selectedDelivery,
    totalPrice,
  };
};

pancakeForm.addEventListener("change", changeHandler);

seeOrderBtn.addEventListener("click", (event) => {
  changeHandler(event);

  const customerNameOrder = customerName.value.trim();

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

// part 3 starts here ,maybe XD ->

makeOrderBtn.addEventListener("click", () => {
  const {
    basePrice,
    selectedToppings,
    selectedExtras,
    selectedDelivery,
    totalPrice,
  } = changeHandler();

  const customerNameOrder = customerName.value.trim();
  if (!customerNameOrder) {
    alert("Please enter your name before ordering.");
    return;
  }

  const newOrder = new Order(
    orderId,
    customerNameOrder,
    pancakeType.value,
    selectedToppings,
    selectedExtras,
    selectedDelivery,
    totalPrice
  );

  newOrder.saveOrder();

  document.getElementById("modalOrderSummary").innerHTML = `
  <h3>Order Summary</h3>

  <p><strong>orderId</strong> ${newOrder.orderId}</p>
  <p><strong>Name:</strong> ${newOrder.customerName}</p>
  <p><strong>Pancake:</strong> ${newOrder.pancakeType}</p>
  <p><strong>Toppings:</strong> ${
    newOrder.toppings.length ? newOrder.toppings.join(", ") : "None"
  }</p>
  <p><strong>Extras:</strong> ${
    newOrder.extras.length ? newOrder.extras.join(", ") : "None"
  }</p>
  <p><strong>Delivery:</strong> ${newOrder.deliveryMethod || "None"}</p>
  <p><strong>Total Price:</strong> ${newOrder.totalPrice} €</p>
  <button type="button" id="checkoutBtn">Checkout</button>
`;

  //   // Show modal
  modal.style.display = "block";
  // Attach event listener to checkout button AFTER it exists
  document.querySelector("#checkoutBtn").addEventListener("click", () => {
    alert("Order has been placed successfully!");
    modal.style.display = "none"; // Close modal after checkout
  });

  // Reset form but keep modal open
  pancakeForm.reset();

  totalPriceDisplay.textContent = "0 €";
  totalPriceBanner.textContent = "0 €";
});

pancakeForm.addEventListener("change", changeHandler);
// use constructor for part 3!

// template (Array?) this.object
