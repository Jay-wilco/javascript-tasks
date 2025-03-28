"use strict";

const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const delivery = document.querySelectorAll(".delivery");
const customerName = document.querySelector("#customerName");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");
const totalPriceBanner = document.getElementById("totalPrice");
const pancakeForm = document.querySelector("#pancakeForm");
const seeOrderBtn = document.querySelector("#seeOrder");
const makeOrderBtn = document.querySelector("#makeOrder");
const summaryText = document.querySelector("#summaryText");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const checkoutBtn = document.querySelector("#checkoutBtn");

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

  static getOrders() {
    return JSON.parse(localStorage.getItem("orders")) || [];
  }
}

let selectedToppings = [];
let selectedExtras = [];
let selectedDelivery = [];
let toppingsTotal = 0;
let extrasTotal = 0;
let deliveryTotal = 0;
let totalPrice = 0;

const updatePrice = () => {
  selectedToppings.length = 0;
  selectedExtras.length = 0;
  selectedDelivery.length = 0;
  toppingsTotal = 0;
  extrasTotal = 0;
  deliveryTotal = 0;

  const basePrice = parseFloat(pancakeType.selectedOptions[0].dataset.price);

  toppings.forEach((topping) => {
    if (topping.checked) {
      selectedToppings.push(topping.value.trim());
      toppingsTotal += parseFloat(topping.dataset.price);
    }
  });

  extras.forEach((extra) => {
    if (extra.checked) {
      selectedExtras.push(extra.value.trim());
      extrasTotal += parseFloat(extra.dataset.price);
    }
  });

  delivery.forEach((deliveryOption) => {
    if (deliveryOption.checked) {
      selectedDelivery.push(deliveryOption.value.trim());
      deliveryTotal += parseFloat(deliveryOption.dataset.price);
    }
  });

  totalPrice = basePrice + toppingsTotal + extrasTotal + deliveryTotal;
  totalPriceDisplay.textContent = `${totalPrice}€`;
  totalPriceBanner.textContent = `${totalPrice}€`;

  totalPriceBanner.parentElement.classList.add("blink");
  setTimeout(
    () => totalPriceBanner.parentElement.classList.remove("blink"),
    500
  );

  return {
    basePrice,
    selectedToppings,
    selectedExtras,
    selectedDelivery,
    totalPrice,
  };
};

const handleMakeOrder = () => {
  const orderId = Date.now();
  const {
    basePrice,
    selectedToppings,
    selectedExtras,
    selectedDelivery,
    totalPrice,
  } = updatePrice();
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

  summaryText.textContent = "Your order details will appear here.";
  document.getElementById("modalOrderSummary").innerHTML = `
    <h3>Order Summary</h3>
    <p><strong>Order ID:</strong> ${newOrder.id}</p>
    <p><strong>Name:</strong> ${newOrder.customerName}</p>
    <p><strong>Pancake:</strong> ${newOrder.pancakeType}</p>
    <p><strong>Toppings:</strong> ${
      newOrder.toppings.length ? newOrder.toppings.join(", ") : "None"
    }</p>
    <p><strong>Extras:</strong> ${
      newOrder.extras.length ? newOrder.extras.join(", ") : "None"
    }</p>
    <p><strong>Delivery:</strong> ${
      newOrder.deliveryMethod.length
        ? newOrder.deliveryMethod.join(", ")
        : "None"
    }</p>
    <p><strong>Total Price:</strong> ${newOrder.totalPrice} €</p>
    <button type="button" id="checkoutBtn">Checkout</button>
  `;

  modal.style.display = "block";
  const checkoutButton = document.querySelector("#checkoutBtn");
  checkoutButton.addEventListener("click", () => {
    alert("Order has been placed successfully!");
    modal.style.display = "none";
  });
  pancakeForm.reset();
  totalPriceDisplay.textContent = "0 €";
  totalPriceBanner.textContent = "0 €";
};

const handleSeeOrder = () => {
  const customerNameOrder = customerName.value.trim();
  const orderSummary = {
    toppings: [...document.querySelectorAll(".topping:checked")].map(
      (topping) => topping.parentElement.textContent.trim()
    ),
    extras: [...document.querySelectorAll(".extra:checked")].map((extra) =>
      extra.parentElement.textContent.trim()
    ),
    delivery: [...document.querySelectorAll(".delivery:checked")].map(
      (delivery) => delivery.parentElement.textContent.trim()
    ),
  };

  summaryText.textContent = `Hello ${customerNameOrder}. You chose ${
    pancakeType.value
  } with the following options: 
    Toppings: ${
      orderSummary.toppings.length ? orderSummary.toppings.join(", ") : "None"
    } 
    Extras: ${
      orderSummary.extras.length ? orderSummary.extras.join(", ") : "None"
    }
    Delivery: ${
      orderSummary.delivery.length ? orderSummary.delivery.join(", ") : "None"
    }
    Total price: ${totalPrice} €`;
};

makeOrderBtn.addEventListener("click", handleMakeOrder);
seeOrderBtn.addEventListener("click", handleSeeOrder);

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

document.getElementById("viewOrdersBtn").addEventListener("click", () => {
  window.open("orders.html", "_blank");
});

pancakeForm.addEventListener("change", updatePrice);
