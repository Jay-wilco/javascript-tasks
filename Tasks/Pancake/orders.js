document.addEventListener("DOMContentLoaded", () => {
  const ordersContainer = document.getElementById("orders-container");
  const clearOrdersBtn = document.getElementById("clear-orders");
  const searchInput = document.getElementById("search");
  const sortOrdersBtn = document.getElementById("sort-orders");

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  searchInput.addEventListener("input", handleSearchInput);
  clearOrdersBtn.addEventListener("click", handleClearOrders);
  sortOrdersBtn.addEventListener("click", handleSortOrders);

  displayOrders();

  function displayOrders(filteredOrders = orders) {
    ordersContainer.innerHTML = "";

    if (filteredOrders.length === 0) {
      ordersContainer.innerHTML = "<p>No orders yet.</p>";
      return;
    }

    filteredOrders.forEach((order, index) => {
      const orderElement = createOrderElement(order, index);
      ordersContainer.appendChild(orderElement);
    });

    addStatusChangeListeners();
    addRemoveOrderListeners();
  }

  function createOrderElement(order, index) {
    const orderElement = document.createElement("div");
    orderElement.classList.add("order");

    let statusStyle = getStatusStyle(order.status);

    orderElement.innerHTML = `
      <p><strong>Order #${order.id}</strong></p>
      <p>Customer: ${order.customerName}</p>
      <p>Pancake: ${order.pancakeType}</p>
      <p>Toppings: ${order.toppings.join(", ") || "None"}</p>
      <p>Extras: ${order.extras.join(", ") || "None"}</p>
      <p>Delivery: ${order.deliveryMethod}</p>
      <p>Total: $${order.totalPrice.toFixed(2)}</p>
      <p>Status: 
        <select class="status-select" data-index="${index}">
          <option value="waiting" ${
            order.status === "waiting" ? "selected" : ""
          }>Waiting</option>
          <option value="ready" ${
            order.status === "ready" ? "selected" : ""
          }>Ready</option>
          <option value="delivered" ${
            order.status === "delivered" ? "selected" : ""
          }>Delivered</option>
        </select>
      </p>
      <p class="order-status" style="${statusStyle}">
        ${getOrderStatusText(order.status)}
      </p>
      ${
        order.status === "delivered"
          ? `<button class="remove-order" data-index="${index}">Remove Order</button>`
          : ""
      }
      <hr>
    `;

    return orderElement;
  }

  function getOrderStatusText(status) {
    if (status === "waiting") return "🟡 Waiting";
    if (status === "ready") return "🔵 Ready";
    return "🟢 Delivered";
  }

  function getStatusStyle(status) {
    if (status === "waiting") return "color: yellow;";
    if (status === "ready") return "color: blue;";
    return "color: green;";
  }

  function handleSearchInput() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredOrders = orders.filter(
      (order) =>
        order.customerName.toLowerCase().includes(searchTerm) ||
        order.id.toString().includes(searchTerm)
    );
    displayOrders(filteredOrders);
  }

  function addStatusChangeListeners() {
    document.querySelectorAll(".status-select").forEach((select) => {
      select.addEventListener("change", (event) => {
        const index = event.target.dataset.index;
        orders[index].status = event.target.value;
        localStorage.setItem("orders", JSON.stringify(orders));
        displayOrders();
      });
    });
  }

  function addRemoveOrderListeners() {
    document.querySelectorAll(".remove-order").forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        if (confirm("Are you sure you want to remove this order?")) {
          orders.splice(index, 1);
          localStorage.setItem("orders", JSON.stringify(orders));
          displayOrders();
        }
      });
    });
  }

  function handleClearOrders() {
    if (confirm("Are you sure you want to delete all orders?")) {
      localStorage.removeItem("orders");
      orders = [];
      displayOrders();
    }
  }

  function handleSortOrders() {
    orders.sort((a, b) => {
      if (a.status === "waiting" && b.status !== "waiting") return -1;
      if (a.status !== "waiting" && b.status === "waiting") return 1;
      return 0;
    });
    displayOrders();
  }
});
