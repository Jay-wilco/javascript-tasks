let orders = JSON.parse(localStorage.getItem("orders")) || [];
const orderlist = document.querySelector("#orderList");

console.log(orders);

class order {
  constructor(
    id,
    customerName,
    selectedPancake,
    toppings,
    extras,
    deliveryMethod,
    totalPrice,
    status = "waiting"
  ) {
    this.id = id;
    this.customerName = customerName;
    this.selectedPancake = selectedPancake;
    this.toppings = toppings;
    this.extras = extras;
    this.deliveryMethod = deliveryMethod;
    this.totalPrice = totalPrice;
    this.status = status;
  }
}
