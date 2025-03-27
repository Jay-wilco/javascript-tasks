document.addEventListener("DOMContentLoaded", () => {
  const ordersContainer = document.getElementById("orders-container");
  const clearOrdersBtn = document.getElementById("clear-orders");
  // Get orders from localStorage

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredOrders = orders.filter(
      (order) =>
        order.customerName.toLowerCase().includes(searchTerm) ||
        order.id.toString().includes(searchTerm)
    );
    displayOrders(filteredOrders); // Pass the filtered orders to displayOrders
  });

  function displayOrders(filteredOrders = orders) {
    ordersContainer.innerHTML = ""; // Clear container

    if (orders.length === 0) {
      ordersContainer.innerHTML = "<p>No orders yet.</p>";
      return;
    }

    orders.forEach((order, index) => {
      const orderElement = document.createElement("div");
      orderElement.classList.add("order");

      let statusClass = "";
      if (order.status === "waiting") {
        statusClass = "status-waiting";
      } else if (order.status === "ready") {
        statusClass = "status-ready";
      } else if (order.status === "delivered") {
        statusClass = "status-delivered";
      }

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
                ${
                  order.status === "waiting"
                    ? "🟡 Waiting"
                    : order.status === "ready"
                    ? "🔵 Ready"
                    : "🟢 Delivered"
                }
              </p>
              ${
                order.status === "delivered"
                  ? `<button class="remove-order" data-index="${index}">Remove Order</button>`
                  : ""
              }

              <hr>
          `;

      ordersContainer.appendChild(orderElement);
    });

    addStatusChangeListeners();
    addRemoveOrderListeners();
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
  function addRemoveOrderListeners() {
    document.querySelectorAll(".remove-order").forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.dataset.index;
        if (confirm("Are you sure you want to remove this order?")) {
          orders.splice(index, 1); // Remove the order from the array
          localStorage.setItem("orders", JSON.stringify(orders));
          displayOrders(); // Refresh orders
        }
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

  const sortOrdersBtn = document.getElementById("sort-orders");

  sortOrdersBtn.addEventListener("click", () => {
    orders.sort((a, b) => {
      if (a.status === "waiting" && b.status !== "waiting") return -1;
      if (a.status !== "waiting" && b.status === "waiting") return 1;
      return 0; // No sorting if both have the same status
    });
    displayOrders(); // Refresh the orders
  });

  displayOrders(); // Initial load
});
