document.addEventListener("DOMContentLoaded", () => {
  const ordersContainer = document.getElementById("orders-container");
  const clearOrdersBtn = document.getElementById("clear-orders");
  // Get orders from localStorage
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  function displayOrders() {
    ordersContainer.innerHTML = ""; // Clear container

    if (orders.length === 0) {
      ordersContainer.innerHTML = "<p>No orders yet.</p>";
      return;
    }

    orders.forEach((order, index) => {
      const orderElement = document.createElement("div");
      orderElement.classList.add("order");

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
              <hr>
          `;

      ordersContainer.appendChild(orderElement);
    });

    addStatusChangeListeners();
  }

  function addStatusChangeListeners() {
    document.querySelectorAll(".status-select").forEach((select) => {
      select.addEventListener("change", (event) => {
        const index = event.target.dataset.index;
        orders[index].status = event.target.value;
        localStorage.setItem("orders", JSON.stringify(orders));
        displayOrders(); // Refresh orders
      });
    });
  }
  clearOrdersBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all orders?")) {
      localStorage.removeItem("orders");
      orders = [];
      displayOrders();
    }
  });

  displayOrders(); // Initial load
});
